import express from 'express';
import testRoutes from "./routes.js"

const app = express();
app.use(express.json());

app.use('/numbers', testRoutes);
app.listen(3000, () => {
    console.log('Server started on port 3000');
})