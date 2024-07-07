const { exec } = require('child_process');
const cloudinary = require('../config/cloudinary.js');

exports.saveImage = async (req, res) => {
  try {
    const { imagePath } = req.body;
    const result = await cloudinary.uploader.upload(imagePath);
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save image' });
  }
};
