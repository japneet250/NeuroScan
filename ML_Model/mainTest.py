import cv2
from keras.models import load_model
from PIL import Image
import numpy as np

model = load_model('./ML_Model/BrainTumour10EpochsCategorical.keras')

image  = cv2.imread('/Users//japneetsingh/Documents/NEUROSCAN/Dataset//pred/pred8.jpg')

img = Image.fromarray(image)

img = img.resize((64,64))

img= np.array(img)

img = img/255

input_image =np.expand_dims(img, axis=0)

# Assuming `input_image` is your input data
predictions = model.predict(input_image)

# For multi-class classification (e.g., softmax output), use `argmax` to get the class with the highest probability
predicted_classes = np.argmax(predictions, axis=-1)
result = predicted_classes
print(result)



