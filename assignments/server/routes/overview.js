const express = require("express");
const router = express.Router();

const overview = [
  {
    overview: {
      content:
        "I am a dedicated and driven  with a strong foundation in Software Development. Currently pursuing studies in Computer Science, I am passionate about Software. My focus is on continuous improvement and delivering high-quality work in every project I undertake. With a keen interest in backend processes, I aim to contribute to innovative solutions and grow professionally. Feel free to connect to learn more.",
    },
  },
];

router.get("/", (req, res) => {
  res.json(overview);
});

module.exports = router;
