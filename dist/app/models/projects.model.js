myApp.service('projects', function(){
    var projectList = [
        [{
            id:             1,
            name:           'Overlay Animation',
            categories:     ['css', 'css3'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image:          '/app/common/images/sensei.png',
            done:           false
        },
        {
            id:             2,
            name:           'HTTPS Server with Node.js',
            categories:     ['ssl', 'https', 'security'],
            description:    'Project on top of a Powerful SSL Module Available in Node.js',
            article:        '<p>Thanks to the open-source nature of Node.js, making https server for applications that do not have large amounts of traffic, and thus are not using proxies, is very managable.</p> <p>Here is the code that creates an https server on top of express. For this project, I generated a public key and a certificate with OpenSSL, but it is certainly not much more difficult to purchase a trusted certificate from the Certificate Provider, however it is going to take more time. The application runs perfectly on the port 443.<p>',
            link:           'https://github.com/kino6052/express-https-server/tree/master/express',
            code:           [['app.js', `
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;`]],
            image:          '/app/common/images/ssl.png',
            done:           true
        },
        {
            id:             3,
            name:           'Classy Gulp',
            categories:     ['gulp'],
            description:    'Powerful gulp script to reduce stress for developrs! Based on gulp script by @username',
            image:          '/app/common/images/gulp.png',
            article:        '<p>Gulp is a powerful automation scripting technolgy for npm projects. I decided to take the minimalist approach, and just use what really matters to kick start my new project for either angular or static html.<p>',
            code:           [
                ['gulpfile.js',
                `var gulp = require('gulp');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var babel = require('gulp-babel');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('clean', function() { // remove 'dist' folder
    return gulp.src(['./dist', './assets'], {read: false})
		.pipe(clean());
});

gulp.task('dist-index', ['clean'], function(){ // move index.html to the 'dist' folder
  return gulp.src(['./src/index.html'])
                .pipe(gulp.dest('./dist/'));
});


gulp.task('dist-assets', ['dist-index'], function () { // Move assets to the 'dist' folder
  return gulp.src(['./src/**/**/*.js', './src/**/**/*.css'].concat(mainBowerFiles()))
                .pipe(gulp.dest('./assets'));
});

gulp.task('concat', ['dist-assets'], function() { // Concat the .js files in the assets folder 
  return gulp.src(['./assets/**/jquery.js', './assets/**/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', ['concat'], function() { // Move .css files to /dist
  return gulp.src('./assets/**/**/*.css')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', ['styles'], function(){
  return gulp.src('./dist/all.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist'));
});

gulp.task('inject', ['uglify'], function () {
  var target = gulp.src('./dist/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./dist/**/*.js', './dist/**/*.css'] , {read: false});
  return target.pipe(inject(sources, {ignorePath: '/dist'}))
    .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['clean', 'dist-index', 'dist-assets', 'concat', 'styles', 'uglify', 'inject']);`]
            ],
            done:           true
        }],
        [{
            id:             4,
            name:           'Powerful Grunt',
            categories:     ['grunt'],
            description:    'Powerful gulp script to reduce stress for developrs! Based on gulp script by @username',
            image:          '/app/common/images/grunt.png',
            done:           false
        },
        {
            id:             5,
            name:           'Node.js and JWT',
            categories:     ['auth', 'jwt', 'node.js'],
            description:    'Powerful Authentication System with JWT. Based on gulp script by @username',
            image:          '/app/common/images/jwt.png',
            code:           [
                ['server.js',
                `
                var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');
var config = require('./config');
var User = require('./models/user');
var auxilaryService = require('./services/auxilary');

var port = process.env.PORT || 8080;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.get('/', function(req, res){
    res.send('Hello! The API is at http://localhost' + port + '/api');
});

// Routes for the API
var apiRoutes = express.Router();

apiRoutes.get('/', function(req, res){
   res.json({
       'message': 'REST API for Your Next App!'
   });
});

apiRoutes.post('/authenticate', function(req, res){
    User.findOne({
        name: req.body.name
    }, function(err, user){
        if (err) 
            throw err;
        if (!user) {
            res.json({success: false, message: 'Authentication Failed. User not Found.'});
        } else if (user) {
            if (user.password != req.body.password) {
                res.json({success: false, message: 'Authentication Failed. Wrong Password.'});
            } else {
                var token = jwt.sign(user, app.get('superSecret'), {
                   'expiresIn': '1440m' 
                });
                res.json({
                    success: true,
                    message: 'Enjoy Your Token!',
                    token: token
                });
            }
        }
    });
});

// Auth Middleware
apiRoutes.use(function (req, res, next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, app.get('superSecret'), function(err, decoded){
            if (err) {
                return res.json({success: false, message: 'Failed to Authenticate Token.'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No Token Provided.'
        });
    }
});

apiRoutes.get('/users', function(req, res){
   User.find({}, function(err, users){
       res.json({users: users});
   });
});

apiRoutes.get('/getUserName', function(req, res){
    var name = auxilaryService.findValueOfObjectParameter(req.decoded, '_doc').name;
    res.json({name: name});
});

apiRoutes.get('/:userName/tasks', function(req, res){
   User.findOne({'name': req.param('userName')}, function(err, user){
       if (user.data) res.json({data: user.data});
       else res.json({data: {}});
   });
});

apiRoutes.post('/:userName/addTask', function(req, res) {
   var taskObject = {task: req.body.task, completed: false};
   User.findOneAndUpdate({'name': req.param('userName')}, {$addToSet: {data: taskObject}}, function(err, doc){
       if (err) return res.send(500, {error: err});
       return res.send({success: true});
   });
});

// Update a Document inside of Array (Difficulty: Moderate)
apiRoutes.put('/:userName/completeTask', function(req, res) { // For Help: https://docs.mongodb.com/manual/reference/operator/update/positional/
   User.findOneAndUpdate({'name': req.param('userName'), 'data.task': req.body.task}, {$set: {'data.$.completed': {completed: true}}}, function(err, doc){
       if (err) return res.send(500, {error: err});
       return res.send({success: true});
   });
});

apiRoutes.put('/:userName/uncompleteTask', function(req, res) { // For Help: https://docs.mongodb.com/manual/reference/operator/update/positional/
   User.findOneAndUpdate({'name': req.param('userName'), 'data.task': req.body.task}, {$set: {'data.$.completed': {completed: false}}}, function(err, doc){
       if (err) return res.send(500, {error: err});
       return res.send({success: true});
   });
});


apiRoutes.delete('/:userName/removeTask', function(req, res) { // For Help: https://docs.mongodb.com/v2.6/reference/operator/update/pull/
   User.findOneAndUpdate({'name': req.param('userName')}, {$pull: {'data': {task: req.body.task}}}, function(err, doc){
       if (err) return res.send(500, {error: err});
       return res.send({success: true});
   });
});

apiRoutes.post('/createUser', function(req, res){
    var newUser = new User({
        name: req.body.name,
        password: req.body.password,
        admin: false,
        data: []
    });
    newUser.save(function(err){
        if (err) throw err;
        res.json({success: true});
    });
});

apiRoutes.delete('/removeUser', function(req, res){
    User.findOne({'name': req.body.userNameToBeRemoved}).remove(function(err, doc){
        if (err) throw err;
        res.json({success: true});
    });
});

app.use('/api', apiRoutes);

app.listen(port);
console.log('Magic happens at port: ' + port);

app.get('/setup', function(req, res){
    var iolearn = new User({
        name: 'kino6052',
        password: 'cat8dog123!',
        admin: true,
        data: []
    });
    iolearn.save(function(err){
        if (err)
            throw err;
        console.log('User saved successfully');
        res.json({success:true});
    });
});

                `
                    ]
            ],
            article:        '<p>The intent of this repository was to create a REST API that can be used for customization and creation of personal Web Apps. This project utilizes best practices including, but not limited to, jwt authentication, developer-friendly route patterns and modularity. The backend for this project is MongoLab, which makes it easy to test the applications you develop and provides great GUI for analyzing data.</p>',
            done:           true
        },
        {
            id:             6,
            name:           'Authentication with Auth0',
            categories:     ['auth', 'jwt', 'node.js'],
            description:    'Powerful Authentication System with Auth0. Based on gulp script by @username',
            image:          '/app/common/images/auth0.png',
            done:           false
        }],
        [{
            id:             7,
            name:           'Authentication with Firebase',
            categories:     ['auth', 'jwt', 'node.js'],
            description:    'Powerful Authentication System with Auth0. Based on gulp script by @username',
            image:          '/app/common/images/firebase.png',
            done:           false
        },
        {
            id:             8,
            name:           'Angular2 CRUD',
            categories:     ['front-end', 'crud', 'angular'],
            description:    'CRUD made in one of the most powerful front-end frameworks!',
            image:          '/app/common/images/angular2.png',
            done:           false
        },
        {
            id:             9,
            name:           'Meteor CRUD',
            categories:     ['front-end', 'crud', 'angular'],
            description:    'CRUD made in one of the most powerful front-end frameworks!',
            image:          '/app/common/images/ssl.png',
            done:           false
        }],
        [
            {
                id:             10,
                name:           'React.js Front-end',
                categories:     ['front-end', 'crud', 'angular'],
                description:    'Rapid prototyping with React.js',
                image:          '/app/common/images/react.png',
                done:           false
            },
            {
                id:             11,
                name:           'Ionic CRUD App',
                categories:     ['mobile', 'ionic', 'angular'],
                description:    'Fast Mobile Apps with Ionic',
                image:          '/app/common/images/ionic.png',
                done:           false
            },
            {
                id:             12,
                name:           'Web Workers',
                categories:     ['front-end', 'crud', 'angular'],
                description:    'Multithreading with JavaScript',
                image:          '/app/common/images/webworker.png',
                done:           false
            }
        ],
        [
            {
                id:             13,
                name:           'Web Sockets',
                categories:     ['real-time', 'async'],
                description:    'Real-time Apps with Web Sockets',
                image:          '/app/common/images/websocket.png',
                done:           false
            },
            {
                id:             14,
                name:           'Reactive Programming',
                categories:     ['reactive', 'async'],
                description:    'Reactive Programming',
                image:          '/app/common/images/reactive.png',
                done:           false
            },
            {
                id:             15,
                name:           'REST with Mongo and Node',
                categories:     ['rest', 'mongodb', 'node.js'],
                description:    'Capable RESTful API',
                image:          '/app/common/images/REST.png',
                done:           false
            }
        ],
        [
            {
                id:             16,
                name:           'OAuth2 in Node.js',
                categories:     ['real-time', 'async'],
                description:    'http://resources.infosecinstitute.com/securing-web-apis-part-ii-creating-an-api-authenticated-with-oauth-2-in-node-js/',
                image:          '/app/common/images/oauth.png',
                done:           false
            },
            {
                id:             17,
                name:           'Master Class in ES2015',
                categories:     ['es2015', 'javascript'],
                description:    'http://resources.infosecinstitute.com/securing-web-apis-part-ii-creating-an-api-authenticated-with-oauth-2-in-node-js/',
                image:          '/app/common/images/es2015.png',
                done:           false
            }
        ]
    ];
    this.getProjectList = function(){
        return projectList;
    };
});