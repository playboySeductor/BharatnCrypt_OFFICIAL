if(process.env.NODE_ENV !== 'production'){
  require("dotenv").config()
}
require('./database');
const server = require('./app.js');
const port= process.env.PORT || 8000

// Syncing all the models at once.
// server.get('/',(req,res)=>{
//   res.status(200).json("HOME PAGE LOADED");
// })
  server.listen(port, () => {
    console.log(`Running server: port ${port}:`); // eslint-disable-line no-console
  });

