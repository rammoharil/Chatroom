var app = require('express')();
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));