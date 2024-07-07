import tensorflow as tf
import keras

model = keras.models.load_model('../GeneratorModels/CGAN_Generator.h5')
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()
open("converted_model.tflite", "wb").write(tflite_model)
