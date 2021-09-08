import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import { MongoClient } from 'mongodb';
import * as morgan from 'morgan';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';
import { environment } from './environments/environment';
import { RootRouter } from './routes';
import compression = require('compression');
import { connect } from 'mongoose';
const db_url: string = process.env.db_url || environment.db_url;
// const db_url: string =
//   process.env.db_url ||
//   'mongodb+srv://jamilur:keepaway1147@test-skill-sm.kqcbr.mongodb.net/skillMask?retryWrites=true&w=majority';

// const client = new MongoClient(db_url,);

const port: string = process.env.port || environment.port;

const app: Application = express();
app.use(compression());
app.use(morgan('tiny'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// app.use('/admin', express.static(path.join(__dirname, 'admin')));

app.use('/api', RootRouter);

app.use('/api/media', express.static(path.join(__dirname, 'media')));
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("(/*)?", (req, res) => {
//   return res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

connect(db_url, {keepAlive: true, })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log(err));


// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db('skillMask').command({ ping: 1 });
//     console.log('Connected successfully to server');
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const server = app.listen(port);

server.on('error', console.error);
