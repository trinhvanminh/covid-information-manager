const router = require("express").Router();
const cloudinary = require("cloudinary");
const uploadImageController = require("../controllers/uploadImage.controller");

// Upload on cloudinary

// Config for upload cloudinary
// Để luôn ở đây không để trong file env
cloudinary.config({
  cloud_name: "soralymusic",
  api_key: 456357255278685,
  api_secret: "eylEN9ePrN-lvCQE2Q55HQzQLIw",
});

// Upload Image

router.post("/upload-image", uploadImageController.uploadImage);
// Delete image
router.post("/delete-image", uploadImageController.deleteImage);

module.exports = router;
