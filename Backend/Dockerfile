# Use the official Python runtime as a parent image
FROM python:3.12.7-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libglib2.0-0 \
    libsm6 \
    libxrender1 \
    libxext6 \
    && apt-get clean

# Copy and install Python dependencies
COPY requirements.txt .
RUN  pip install -r requirements.txt

# Copy the application code and model into the container
COPY . /app

# Expose the port the app runs on
EXPOSE 4000

# Define the command to run the application
CMD ["python", "app.py"]