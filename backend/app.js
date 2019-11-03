const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const usersRouter = require('./routes/usersRouter.js');
const postsRouter = require('./routes/postsRouter.js')
const likesRouter = require('./routes/likes.js')


app.use(cors())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())


app.get('/', (req,res)=>{
    res.send('server is working')
})

app.use('/users', usersRouter)

app.use('/posts', postsRouter)

app.use('/likes', likesRouter)

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})
