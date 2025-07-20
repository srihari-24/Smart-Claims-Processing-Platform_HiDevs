import express from 'express';
import { setRoutes } from './src/api/routes/index';
import config from './src/config/config';

const app = express();
const PORT = config.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});