import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

import keras as keras
import numpy as np
import matplotlib.pyplot as plt
import base64
from io import BytesIO
from flask import Flask, request, jsonify
from flask_cors import CORS
from huggingface_hub import hf_hub_download

model_path = hf_hub_download(repo_id="Pratap-K/cgan-generator", filename="CGAN_Generator.h5")
generator = keras.models.load_model(model_path)


def generate_images(num_examples, class_label):
    noise_dim = 100

    random_noise = np.random.normal(0, 1, (num_examples, noise_dim))

    random_labels = np.full((num_examples, 1), class_label)

    generated_images = generator.predict([random_noise, random_labels])

    generated_images = (generated_images + 1) / 2

    return generated_images, random_labels


def image_to_base64(img):
    buffered = BytesIO()
    plt.imsave(buffered, img, format="png")
    img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')
    return img_str


app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    num_examples = data.get('num_examples')
    class_label = data.get('class_label')

    # app.logger.log(f"{num_examples}, {type(num_examples)}")

    generated_images, random_labels = generate_images(int(num_examples), int(class_label))
    base64_images = [image_to_base64(img) for img in generated_images]


    return jsonify(images=base64_images)


if __name__ == "__main__":
    app.run()
