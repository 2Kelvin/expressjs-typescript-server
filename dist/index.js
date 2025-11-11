import express from 'express';
const app = express();
const port = 3000;
app.get('/', (_req, res) => {
    res.send('Hello from Express and TypeScript');
});
app.listen(port, () => {
    console.log(`Express app running and listening on port ${port}`);
});
//# sourceMappingURL=index.js.map