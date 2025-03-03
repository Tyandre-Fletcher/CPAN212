const express = require('express');
const router = express.Router();

const experience = [
    {
      "company": "InnovateTech Solutions",
      "position": "Software Developer",
      "years": "2023 - Present",
      "responsibilities": [
        "Developed and maintained web applications using React and Node.js",
        "Optimized database queries, improving performance by 30%",
        "Collaborated with UX designers to enhance user experience",
        "Led a team of junior developers and conducted code reviews"
      ]
    },
    {
      "company": "NextGen Systems",
      "position": "Intern - Software Engineer",
      "years": "Summer 2022",
      "responsibilities": [
        "Assisted in debugging and testing Java applications",
        "Automated repetitive tasks using Python scripts",
        "Worked with a team to develop an internal tool for data analysis",
        "Presented findings and project updates to senior developers"
      ]
    }
  ]
  

router.get("/", (req,res) =>{
    res.json(experience);
})

module.exports = router;