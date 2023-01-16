let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const filename = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + filename);
    }
});

var upload = multer({
    storage: multerStorage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

//Image model

let ImageUpload = require('../models/ImgUploader');

router.post('/img-upload', upload.single('imgUploaded'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const imageUpload = new ImageUpload({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        imgUploaded: url + '/public/' + req.file?.filename
    });

    imageUpload.save().then(result => {
        res.status(201).json({
            message: "Image uploaded successfully",
            imgCreated: {
                _id: result._id,
                imgUploaded: result.imgUploaded
            }
        })
    }).catch(err => {
        console.log('ERROR: ' + err);
        res.status(500).json({
            error: err
        });
    })
})

router.get("/", (req, res, next) => {
    ImageUpload.find().then(data => {
        res.status(200).json({
            message: "Image list retrieved successfully!",
            images: data
        });
    });
});

module.exports = router;