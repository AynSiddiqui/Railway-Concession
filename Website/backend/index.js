const connectToMongo = require('./db');
const connectToMongo_1 = require('./dbForm');
const express = require('express');
var cors = require('cors') 

connectToMongo();
connectToMongo_1();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/auth', require('./routes/formAuth'))
//app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})