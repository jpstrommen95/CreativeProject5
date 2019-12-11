var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/diary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a scheme for users
const diarySchema = new mongoose.Schema({
    name: String,
    entries: [],
});

// Create a model for users
const Diary = mongoose.model('Diary', diarySchema);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

/*GET diary entries*/
router.get('/diary', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

// Create a new user
router.post('/diary', async(req, res) => {
    const diary = new Diary({
        name: req.body.name,
        entries: req.body.entries,
    });
    try {
        await diary.save();
        res.send(diary.name);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// function generateSalt() {
//     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// }

// function hash(myString) {
//     let hash = 0;
//     let NUM = 7;

//     for (var i = 0; i < myString.length; i++) {
//         hash += BigInt(myString.charCodeAt(i) * NUM);
//     }

//     return hash;
// }

module.exports = router;
