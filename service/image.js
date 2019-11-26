const aws = require('aws-sdk');
const multer = require('multer');
const s3Storage = require('./multer-s3');
const config = require('../config/prod');

aws.config.update({
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  region: 'us-east-2',
});

const s3 = new aws.S3();

const storage = s3Storage({
  Key: (req, file, cb) => {
    cb(null, `images/${Date.now().toString()}`);
  },
  s3,
  Bucket: 'genrs-us-east-storage',
  multiple: true,
  resize: [
    { suffix: '1200', width: 1200},
    { suffix: '800', width: 800},
    { suffix: '500', width: 500},
    { suffix: '300', width: 300},
    { suffix: '100', width: 100 },
    { suffix: 'original' }
  ],
});

const upload = multer({ storage });

module.exports = upload;