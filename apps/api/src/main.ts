import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import { connect } from 'mongoose';
import * as morgan from 'morgan';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';
import { environment } from './environments/environment';
import { RootRouter } from './routes';

const db_url: string = process.env.db_url || environment.db_url;
const port: string = process.env.port || environment.port;

const app: Application = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/media', express.static(path.join(__dirname, 'media')));
// app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use('/', express.static(path.join(__dirname, 'public')));

app.use("/api", RootRouter);


connect(db_url, {})
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log(err));


const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});

server.on('error', console.error);
