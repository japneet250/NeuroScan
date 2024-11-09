import os
from flask import Flask, request, jsonify
from PIL import Image
from pymongo import MongoClient
from datetime import datetime
import numpy as np
from keras.models import load_model
from flask_cors import CORS

# Load the trained model
try:
    model = load_model('./ML_Model/BrainTumour10EpochsCategorical.keras')
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

# Preprocess image
def preprocess_image(image):
    try:
        image = image.resize((INPUT_SIZE, INPUT_SIZE))
        image = np.array(image)
        image = image / 255.0
        input_image = np.expand_dims(image, axis=0)
        print(f"Preprocessed image shape: {input_image.shape}")
        return input_image
    except Exception as e:
        print(f"Error in image preprocessing: {e}")
        return None

@app.route('/predict', methods=['POST'])
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
        result = "Tumor Detected" if np.argmax(prediction, axis=-1) == 1 else "No Tumor Detected"

        # If not anonymous, save additional user info
        if user_data.get("anonymous") == "false":
            document = {
                "name": user_data.get("name"),
                "age": user_data.get("age"),
                "date": datetime.now(),
                "result": result,
            }
            try:
                collection.insert_one(document)
            except Exception as e:
                print(f"Error saving to MongoDB: {e}")
                return jsonify({"error": "Failed to save to database"}), 500

        return jsonify({"prediction": result})
    
    except Exception as e:
        print(f"Error in prediction endpoint: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
