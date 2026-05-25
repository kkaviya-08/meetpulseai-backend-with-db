const express = require('express');

const router = express.Router();

const {

    createMeeting,
    getMeetings,
    updateMeeting,
    deleteMeeting

} = require('../controllers/meetingController');


// GET ALL
router.get('/', getMeetings);


// CREATE
router.post('/', createMeeting);


// UPDATE
router.put('/:id', updateMeeting);


// DELETE
router.delete('/:id', deleteMeeting);


module.exports = router;