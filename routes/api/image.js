const express = require('express');
const router = express.Router();
const upload = require('../../service/image');
const singleUpload = upload.single('upload');
const sharp = require('sharp')
const multer = require('multer')
const config = require('../../config/prod')
const R = require('ramda')

const cdn = config.CDN
const s3 = config.S3

router.post("", (req, res) => {
  multer.memoryStorage
  singleUpload(req, res, function(err) {
      if (err) {
        return res.status(422).send({error: [{title: 'Image Upload Error', detail: err.message}]});
      } else {

        var ret = {
          urls: {}
        }
        console.log(req.file)
        Object.keys(req.file).forEach(key => {
          if (!R.isNil(req.file[key].Location)) {
            if (key === 'original') {
              ret.urls['default'] = req.file[key].Location;
            } else {
              ret.urls[key] = req.file[key].Location;
            }
          }
        })
        return res.json(ret)
      }
    });
})

module.exports = router;