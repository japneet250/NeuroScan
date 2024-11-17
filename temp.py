import os
from flask import Flask, request, jsonify
from PIL import Image
from pymongo import MongoClient
from datetime import datetime
import numpy as np
from keras.models import load_model
from flask_cors import CORS, cross_origin

# Load the trained model
try:
    model = load_model('BrainTumour10EpochsCategorical.keras')
except Exception as e:
    print(f"Error loading model: {e}")

# MongoDB setup
try:
    client = MongoClient("mongodb://0.0.0.0:27017/")
    db = client["brain_tumor_detection"]
    collection = db["predictions"]
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")

# Flask app setup
app = Flask(__name__)
CORS(app)


INPUT_SIZE = 64

# Image preprocessing function
def preprocess_image(image):
    try:
        # Resize the image to the required size (64x64)
        image = image.resize((INPUT_SIZE, INPUT_SIZE))

        # Convert image to RGB if it's grayscale (1 channel)
        if image.mode != 'RGB':
            image = image.convert('RGB')

        # Convert the image to a numpy array
        image = np.array(image)

        # Normalize the pixel values to [0, 1]
        image = image / 255.0

        # Add a batch dimension, making the shape (1, 64, 64, 3)
        input_image = np.expand_dims(image, axis=0)

        # Print the shape for debugging purposes
        print(f"Preprocessed image shape: {input_image.shape}")

        return input_image
    except Exception as e:
        print(f"Error in image preprocessing: {e}")
        return None


@app.route("/")
def home():
    return "Hello, Vercel!"


@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    # Get the image file from the request
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400
    
    file = request.files['file']
    user_data = request.form

    try:
        # Preprocess image
        image = Image.open(file)
        input_image = preprocess_image(image)
        if input_image is None:
            return jsonify({"error": "Failed to preprocess image"}), 500

        # Make prediction
        prediction = model.predict(input_image)

        # Define the class names and their corresponding indices
        class_names = {0: 'No Tumor Detected', 1: 'Tumour Detected' , 2 : 'Glioma Tumor Detected', 
                       3: 'Meningioma Tumor Detected', 4: 'Pituitary Tumor Detected'}

        # Get the index of the highest probability (predicted class)
        predicted_class_index = np.argmax(prediction, axis=-1)

        # Get the corresponding class name
        result = class_names.get(predicted_class_index[0], 'Unknown Class Detected')

        # Get the corresponding probability
        probability = prediction[0][predicted_class_index[0]] * 100

        # If not anonymous, save additional user info
        if user_data.get("anonymous") == "false":
            document = {
                "name": user_data.get("name"),
                "age": user_data.get("age"),
                "date": datetime.now(),
                "result": result,
                "probability": probability,
                "County of Origin" : user_data.get("country"),
                "Email" : user_data.get("email")
            }
            try:
                collection.insert_one(document)
            except Exception as e:
                print(f"Error saving to MongoDB: {e}")
                return jsonify({"error": "Failed to save to database"}), 500

        return jsonify({"prediction": result, "probability": f"{probability:.2f}%"})
    
    except Exception as e:
        print(f"Error in prediction endpoint: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
