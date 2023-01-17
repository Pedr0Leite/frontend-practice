const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const cors = require("cors");
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOrigin = 'http://localhost:4000';
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST']
}));

// const imageUploadPath = '../public';
const imageUploadPath = 'C:/Users/LeiteP/OneDrive - FUJITSU/Documents/Scripts/frontend-practice/devChallenge/Full-Stack Developer/image-uploader/backend/public';


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imageUploadPath);
    },
    filename: (req, file, cb) => {
        const filename = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + filename);
    }
});


// var upload = multer({
//     storage: multerStorage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

var upload = multer({storage: multerStorage});
console.log('upload :', upload);


//Image model
let ImageUploader = require('../models/ImgUploader');

router.post('/img-upload', upload.single('imgUploaded'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    let fixedFileName = req.body.filename.replaceAll(' ', '_');

    const imageUpload = new ImageUploader({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        imgUploaded: url + '/public/' + fixedFileName
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
    ImageUploader.find().then(data => {
        res.status(200).json({
            message: "Image list retrieved successfully!",
            images: data
        });
    });
});

module.exports = router;