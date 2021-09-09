import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';
import { environment } from './environments/environment';
import { RootRouter } from './routes';
import compression = require('compression');
import { connect } from 'mongoose';
import * as fs from 'fs';
import * as https from 'https';
import { media_path } from './utils/server-utils';

const db_url: string = process.env.db_url || environment.db_url;
// const db_url: string =
//   process.env.db_url ||
//   'mongodb+srv://jamilur:keepaway1147@test-skill-sm.kqcbr.mongodb.net/skillMask?retryWrites=true&w=majority';

// const client = new MongoClient(db_url,);

const port: string = process.env.port || environment.port;

const app: Application = express();
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header(
//     'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Api-Key'
//   );
//   res.header('Access-Control-Allow-Credentials', 'true');
//   if ('OPTIONS' === req.method) {
//     res.sendStatus(200);
//   }
//   else {
//     next();
//   }
// });

app.use(compression());
app.use(morgan('tiny'));
app.use(
  cors({
    allowedHeaders: '*',
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));

// app.use('/admin', express.static(path.join(__dirname, 'admin')));

app.use('/api', RootRouter);

app.use('/api/media', express.static(path.join(media_path)));

// app.use(express.static(path.join(__dirname, 'public')));

// app.get("(/*)?", (req, res) => {
//   return res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

connect(db_url, { keepAlive: true })
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

// if (!environment.production) {
//   const server = app.listen(port);
//   server.on('error', console.error);
// } else {
//   const crt = fs.readFileSync(
//     '/etc/letsencrypt/live/skillmask.com/fullchain.pem;'
//   );
//   const key = fs.readFileSync(
//     '/etc/letsencrypt/live/skillmask.com/privkey.pem;'
//   );

//   const credentials = { key: key, cert: crt };
//   const httpsServer = https.createServer(credentials, app);
//   httpsServer.listen(port);
// }
