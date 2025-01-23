const http = require('http')
const fs = require('fs')

const app = http.createServer ((req,res) => {
    if (req.url === '/') {
        fs.readFile('./pages/login.html', (err, data) => {
        if(err) {
            res.end(err)
        }

        else {
            res.end(data)
        }
    })
}

else {
    fs.readFile('./pages/notFound.html', (err, data) => {
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