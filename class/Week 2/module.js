//Part 1
//Creating the Module.
const msg = (name) =>{
    console.log(`Hello ${name}`)
}

//Exporting modules.
module.exports={msg}


//Part 2
//Setting up a http request if the request to port 5000
const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    if(req.url === "/") {
       res.end("hi")
    }
    
    else if(req.url === "/json") {
        //sending user json data when the request is responded to.
        res.end(JSON.stringify({
            user : 'josh', 
            name: 'Richard',
        }));
    }

    else if(req.url === "/web") {
        fs.readFile('./login.html', (err, data) => {
            if(err){
                res.end(err)
            }

            else {
                res.end(data)
            }
        })
    }
})
app.listen(5000)


