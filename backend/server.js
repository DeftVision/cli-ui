const express = require('express');
const cors = require('cors');
port = 3000;
const app = express();
app.use(express.json());
app.use(cors());




app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})