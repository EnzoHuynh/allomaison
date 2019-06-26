const app = require('express')();
const verifyToken = require('./middlewares/security');
const movieRouter = require('./routes/movie');
const userRouter = require('./routes/user');
const securityRouter = require('./routes/security');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(verifyToken);
app.use('/', securityRouter);
app.use('/movies', movieRouter);
app.use('/users', userRouter);

app.listen(3000, () => console.log('Listening on port 3000'));
