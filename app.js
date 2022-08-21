const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config')
const passport = require('passport');
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const genreRouter = require('./routes/genre');
const profileRouter = require('./routes/profile');
const recordingRouter = require('./routes/recording');
const postRouter = require('./routes/post');
const multer = require('multer')

const cors = require('cors');    
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'),
    err => console.log(err)
);

const multerMid = multer({
  storage: multer.memoryStorage(),
  // limits: {
  //   fileSize: 5 * 1024 * 1024,
  // },
})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// bodyParser = {
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// };
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by')
// app.use(multerMid.single('file'))
app.use(bodyParser.json({limit: '10000kb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10000kb', extended: true}))
// app.use(bodyParser.urlencoded({extended: false}))

app.use(passport.initialize());

app.use(cors(corsOpts));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/genre', genreRouter);
app.use('/profile', profileRouter);
app.use('/recording', recordingRouter);
app.use('/post', postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
