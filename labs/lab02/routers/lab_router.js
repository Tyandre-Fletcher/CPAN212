import express from 'express';
const router = express.Router();

router.get("/", (req,res) => {
    res.send("welcome to the lab router")
})

router.get("/name", (req,res) => {
    res.send("Tyandre Fletcher")
})

router.get("/greeting", (req,res) => {
    res.send("Tyandre Fletcher n01676012")
})

router.get("/add/:x/:y", (req,res) => {
    let x = parseFloat(req.params.x)
    let y = parseFloat(req.params.y)

    res.send(`${x + y}`)
})


router.get("/calculate/:a/:b/:operation", (req,res) => {
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    switch (req.params.operation) {
        case "+":
            a = parseFloat(req.params.a)
            b = parseFloat(req.params.b)
            res.send(`${a + b}`)
        break;

        case "-": 
            a = parseFloat(req.params.a)
            b = parseFloat(req.params.b)
            res.send(`${a - b}`)
        break;

        case "*":
            a = parseFloat(req.params.a)
            b = parseFloat(req.params.b)
            res.send(`${a * b}`)
        break;

        case "/":
            a = parseFloat(req.params.a)
            b = parseFloat(req.params.b)
            if(req.params.b === "0"){
                res.send("Cannot divide by zero.")
            }
            //%2f for url division slash.
            else {
                res.send(`${a / b}`)
            }
            
        break;

        case "**":
            a = parseFloat(req.params.a)
            b = parseFloat(req.params.b)

            res.send(`${Math.pow(a,b)}`)
        break;
    }
})


export default router;