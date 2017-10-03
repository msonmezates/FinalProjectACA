import express from 'express';
import bodyParser from 'body-parser';


const app = express();
//App setup
app.use(bodyParser.json())



//Server setup
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
