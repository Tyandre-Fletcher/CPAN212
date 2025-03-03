const express = require('express');
const router = express.Router();

const education = [
    {
        "school": "Tech University",
        "degree": "Bachelor of Software Engineering",
        "yearOfStudy": "2019 - 2023",
        "gpa": "3.8/4.0",
        "relevantCourses": [
          "Data Structures & Algorithms",
          "Software Architecture",
          "Machine Learning",
          "Cloud Computing"
        ],
        "extracurriculars": [
          "President of the Coding Club",
          "Hackathon Winner 2022",
          "Research Assistant in AI Lab"
        ]
      } 
]

router.get("/", (req,res) =>{
    res.json(education);
})

module.exports = router;