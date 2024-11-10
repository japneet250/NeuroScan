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
# Your bash commands go here
command1
command2
git clone https://github.com/your-username/NeuroScan.git
cd NeuroScan


### 2. Backend Setup

Navigate to the `backend/` folder and install dependencies.

bash
cd backend
pip install -r requirements.txt

 
