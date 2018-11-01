const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()


app.prepare()
    .then(() => {
    const server = express()
        server.get('/',(req,res)=>{
            console.log("asdasd")
            const actualPage = "/Pages/Home/page-home"
            app.render(req,res,actualPage)
        })

        server.get('/work',(req,res)=>{
            console.log("work")
            const actualPage = "Pages/Work/page-work"
            const queryParams = { title: req.params.id }
            app.render(req,res,actualPage,queryParams)
        })

        server.get('/resume',(req,res)=>{
            const actualPage = "Pages/Resume/page-resume"
            app.render(req,res,actualPage)
        })
        server.get('*',(req,res)=>{
            return handle(req,res)
        })

        server.listen(3080,(err)=>{
            if (err) throw err
            console.log('> ready on http://localhost:3080')
        })
    }).catch((ex)=>{
        console.error(ex.stack)
        process.exit(1)
})