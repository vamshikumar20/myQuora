const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");

// router.get("/", (req, res) => {
//   res.send("This api is reserved for quora clone");
// });

router.use("/", questionRouter);
router.use("/answers", answerRouter);

module.exports = router;
