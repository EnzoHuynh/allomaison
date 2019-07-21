const express = require('express');
const Image = require('../models/image');
const router = express.Router();
var multer = require('multer');

router.get('/:id', (req, res) => {
    Image.findById(req.params.id, (err, image) => res.json(image))
})

router.get('/', (req, res) => {
    Image.find(req.query).then(data => res.json(data));
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.name);
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
}).array('goodPictures', 10);

router.post('/upload',function(req,res){
  upload(req,res, (err) => {
      if(err) {
          return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
  });
});


router.delete('/delete/:id', (req, res) => {
    Image.remove({_id: req.params.id}, error => {
        !error ? res.status(200).json('Resource deleted successfully') : res.status(500).json(error.errors);
      });
})

router.put('/edit/:id', (req, res) => {
    Image.findById(req.params.id).then(image => {
      const { path } = req.body;

      image.path = path || image.path;

      image.save(error => !error ? res.status(200).json(image) : res.status(500).json(error.errors));
    });
  })

module.exports = router;
