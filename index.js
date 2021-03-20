import express from 'express';
import {servicesRoutes} from './routes/services.js';


const app = express();
const PORT = 3000;
app.use(express.json());+

app.use(servicesRoutes);


app.listen(PORT, () => {
  console.log(`server is online on http://127.0.0.1:${PORT}`);
});