const http = require("http")

//First para req and res
const app = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("Hello from Home")
    }

    else {
        res.end("Page not found.")
    }
})
app.listen(8000)
