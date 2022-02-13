const express = require("express");
const router = express.Router();

module.exports = (db, io) => {

  
  // io.on('connection', function (socket) {
  //   console.log('connected!');
  // })

  const getMatchingRoomId = () => {
    const roomNum = Math.floor((Math.random() + 1) * 10);
    return `room${roomNum}`;
  }

  router.get("/", (req, res) => {
    // req.io.emit("message", "hi")
    const roomId = getMatchingRoomId();
    // const roomId = "room1"
    res.json({roomId})
  });
  return router;
};
