import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import conn from './Db/db.connection.js'
import meterRouter from './routes/meter.routes.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/meter',meterRouter);

conn();

app.get('/', (req,res) => {
    res.send("Hello")
});
app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`);    
});

