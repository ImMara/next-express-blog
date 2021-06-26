const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

require('dotenv').config();

app.prepare()
.then(()=>{
    require('./server/database')
    const server = express()
    server.get('*', (req,res,next) =>{
        return handle(req,res)
    })
    server.listen(3000 , err =>{
        if(err) throw err
        console.log('>Ready on http://localhost:3000')
    })
})
    .catch(err =>{
        console.err(err.stack)
        process.exit(1)
})

