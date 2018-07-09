const express = require('express');
const mysql = require('mysql');
const path = require('path');
const favicon = require('serve-favicon');

const index = require('./routes/index');
const employees = require('./routes/employees');
const projects = require('./routes/projects');
const works_on = require('./routes/works_on');
const details = require('./routes/details');

const app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

//Database connection
app.use((req, res, next) => {
  res.locals.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'api_data',
    multipleStatements: true,
    nestTables: true
  });
  res.locals.connection.connect();
  next();
});

//Home Page
app.use('/', index);
//Employees List
app.use('/api/v1/employees', employees);
//Projects List
app.use('/api/v1/projects', projects);
//Works_on
app.use('/api/v1/works_on', works_on);
//All Detail of Employee
app.use('/api/v1/details', details);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, (err) => {
  if (err) throw err;

  console.log("Server Running at http://localhost:3000 ...");
});