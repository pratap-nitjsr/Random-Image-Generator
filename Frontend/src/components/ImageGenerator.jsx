import React, { useState } from 'react';
import flaskapi from './../services/flaskApi';

const ImageGenerator = () => {

  const [numExamples, setNumExamples] = useState(16);
  const [classLabel, setClassLabel] = useState(0);
  const [generatedImages, setGeneratedImages] = useState([]);

  const CIFAR10_CLASSES = [
    'airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck'
  ];

  const handleGenerateImage = async () => {
    try {
      const response = await flaskapi.post('/generate', {
        num_examples: numExamples,
        class_label: classLabel
      });
      setGeneratedImages(response.data.images);
    } catch (error) {
      console.error('Generate image error:', error);
    }
  };

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div id="ImageGenerator">
          <h2 className="mb-4 text-2xl font-bold">Generate Images</h2>
          <div className="mb-4">
            <label className="block text-gray-700">
              Number of Images:
              <br />
              <input
                type="number"
                value={numExamples}
                onChange={(e) => setNumExamples(e.target.value)}
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Class Label:
              <br />
              <select
                value={classLabel}
                onChange={(e) => setClassLabel(e.target.value)}
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {CIFAR10_CLASSES.map((label, index) => (
                  <option key={label} value={index}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            onClick={handleGenerateImage}
            className="px-4 py-2 font-bold text-white transition duration-300 bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Generate Image
          </button>
        </div>
      </div>
      <div className="container py-8 mx-auto">
        <div className="flex flex-wrap justify-center -mx-2">
          {generatedImages.map((image, index) => (
            <div key={index} className="w-full px-2 mb-4 overflow-hidden rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4">
              <img
                src={`data:image/png;base64,${image}`}
                alt={`Generated ${CIFAR10_CLASSES[classLabel]}`}
                className="w-full transition-transform duration-500 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
