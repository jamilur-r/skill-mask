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
import { media_path } from './utils/server-utils';

const db_url: string = process.env.db_url || environment.db_url;

const port: string = process.env.port || environment.port;

const app: Application = express();

app.use(compression());
app.use(morgan('tiny'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', RootRouter);

app.use('/api/media', express.static(path.join(media_path)));

connect(db_url, { keepAlive: true })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log(err));

const server = app.listen(port);
server.on('error', console.error);
