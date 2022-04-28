const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join("storage"),
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(".");
    const second = fileName.pop();

    cb(null, fileName + "-" + Date.now() + "." + second);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
