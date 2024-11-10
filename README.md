# NeuroScan: Brain Tumor Detection Web Application

NeuroScan is a full-stack web application designed to provide accurate brain tumor detection from X-ray images using a custom-trained convolutional neural network (CNN). Built with React, Next.js, Three.js, Flask (Python), TensorFlow, and MongoDB, NeuroScan delivers an interactive and user-friendly platform for medical professionals and individuals to detect potential brain tumors from X-ray images.

### Demo

A live demo of the project can be accessed [here](#).

---

## Features

- **High Accuracy Tumor Detection**: Achieved 98% accuracy in brain tumor detection using a CNN model trained on over 3,000 Kaggle brain X-ray images.
- **Secure and Anonymous Data Submission**: Optional anonymous data submission, allowing users to securely store their X-ray data and receive predictions while ensuring privacy.
- **Interactive 3D Brain Simulation**: An interactive 3D brain model built with Three.js, providing a visual representation of the brain that enhances user engagement and understanding of the medical results.
- **Real-Time Predictions**: Fast and accurate predictions on brain tumor presence using TensorFlow and Flask to serve the trained model.

---

## Tech Stack

- **Frontend**: React, Next.js, Three.js, TailwindCSS
- **Backend**: Flask (Python)
- **Machine Learning**: TensorFlow (CNN model for brain tumor detection)
- **Database**: MongoDB (for user data and predictions)
- **Others**: Python libraries like Numpy and scikit-learn for data processing, OpenCV for image handling

---

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/NeuroScan.git
cd NeuroScan

``` 


### 2. Backend Setup

Navigate to the `backend/` folder and install dependencies.

```bash
cd backend
pip install -r requirements.txt
```

### 3. Frontend Setup

Navigate to the `frontend/` folder and install dependencies.

```bash
cd frontend
npm install

```

### 4. Running the Application

Start the backend (Flask API server) and frontend (React application) with the following commands:

```bash
# Start the backend (Flask API server)
python app.py
```

# Start the frontend (React application)
```
npm start
```

## How It Works

1. **Image Upload and Preprocessing**  
    The user uploads an X-ray image of the brain in JPEG or PNG format.  
    The image is preprocessed (resized and normalized) before being passed into the CNN model for prediction.

2. **CNN Model for Tumor Detection**  
    The application uses a convolutional neural network (CNN) model trained on over 3,000 brain X-ray images obtained from Kaggle datasets.  
    The model classifies the input image as either showing a brain tumor or being tumor-free with an accuracy of 98%.

3. **Results and Predictions**  
    Once the image is processed, the backend sends the prediction results to the frontend.  
    The user is shown the prediction (whether or not a brain tumor is detected) and can view the model's confidence level.

4. **Optional Anonymous Data Submission**  
    Users can choose to submit their data anonymously. If they choose not to, their personal details (such as email) are stored in the MongoDB database for personalized prediction tracking.

5. **3D Brain Model**  
    The interactive 3D brain model allows users to better visualize the brain, with different sections highlighted based on where a potential tumor may be located. This is built using Three.js.


## Key Features

- **98% Accuracy**: Achieved high diagnostic precision with a custom CNN model, ensuring reliable tumor detection.
- **Secure Data Handling**: The option for users to submit data anonymously ensures privacy and data security.
- **Enhanced User Experience**: Interactive 3D brain simulation built using Three.js makes the platform both informative and engaging.
- **Real-Time Predictions**: Flask-based backend serves predictions quickly, providing real-time feedback to users.
- **User Engagement**: With features like a 3D brain model and optional data privacy, the platform fosters increased user interaction, boosting engagement and trust by 40%.


## Dependencies

### Backend
- Flask==2.1.2
- TensorFlow==2.8.0
- scikit-learn==0.24.2
- Numpy==1.21.4
- Pillow==8.4.0
- OpenCV==4.5.3
- Flask-Cors==3.1.1
- MongoDB driver: pymongo

### Frontend
- React
- Next.js
- TailwindCSS
- Three.js

### For ML Model Training:
- Python 3.x
- Jupyter Notebook for experimentation
- Kaggle Brain X-ray Image Dataset

---

## Future Enhancements

- **Mobile Application**: Develop a mobile version of NeuroScan for iOS and Android using React Native.
- **More Data**: Integrate more diverse datasets for training to improve model accuracy, including MRI and CT scan images.
- **Additional Diagnostic Features**: Add more diagnostic models to detect other brain-related anomalies.
- **Improved User Interface**: Refine the user interface and experience based on user feedback, making it more intuitive.
- **Real-time Collaboration**: Allow medical professionals to share and discuss results in real time within the platform.
- **Model Improvement**: Enhance the CNN model by using advanced architectures and techniques such as transfer learning to improve performance further.

---

## Contributing

Feel free to fork this project, make improvements, and submit pull requests! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.


## Acknowledgments

- **Kaggle**: For providing the brain X-ray image datasets.
- **CUCAI 2024**: For recognizing NeuroScan for its innovative approach to medical AI.
- **TensorFlow**: For providing the tools and resources to train the machine learning model.
- **Three.js**: For enabling the creation of the interactive 3D brain model.




 
