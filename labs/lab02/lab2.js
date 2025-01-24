import lab_router from './routers/lab_router.js';
import express from 'express';

const app = express();
app.use("/lab", lab_router);

app.listen(8000, () => {
    console.log(`http://localhost:8000`)
})
