const app = require('express')();
const verifyToken = require('./middlewares/security');
const userRouter = require('./routes/user');
const securityRouter = require('./routes/security');
const goodRouter = require('./routes/good');
const imageRouter = require('./routes/image');
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyparser.json());
app.use(verifyToken);
app.use('/', securityRouter);
app.use('/users', userRouter);
app.use('/goods', goodRouter);
app.use('/images', imageRouter);

app.listen(3000, () => console.log('Listening on port 3000'));

module.exports = app;
