myApp.service('projects', function(){
    var projectList = [
        [{
            id:             1,
            name:           'Overlay Animation',
            categories:     ['css', 'css3'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/sensei.png',
            done:           false
        },
        {
            id:             2,
            name:           'HTTPS Server with Node.js',
            categories:     ['ssl', 'https', 'security'],
            description:    'Project on top of a Powerful SSL Module Available in Node.js',
            article:        '<p>Thanks to the open-source nature of Node.js, making https server for applications that do not have large amounts of traffic, and thus are not using proxies, is very managable.</p> <p>Here is the code that creates an https server on top of express. For this project, I generated a public key and a certificate with OpenSSL, but it is certainly not much more difficult to purchase a trusted certificate from the Certificate Provider, however it is going to take more time. The application runs perfectly on the port 443.<p>',
            link:           'https://github.com/kino6052/express-https-server/tree/master/express',
            code:           [
                ['www', 'fef6023a8c1153f67da42ea631a22f76', '7-16', 0],
                ['test', '', '7-16', 1]
            ],
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           true
        },
        {
            id:             3,
            name:           'Classy Gulp',
            categories:     ['gulp'],
            description:    'Powerful gulp script to reduce stress for developrs! Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        }],
        [{
            id:             4,
            name:           'Powerful Grunt',
            categories:     ['grunt'],
            description:    'Powerful gulp script to reduce stress for developrs! Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        },
        {
            id:             5,
            name:           'Node.js and JWT',
            categories:     ['auth', 'jwt', 'node.js'],
            description:    'Powerful Authentication System with JWT. Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        },
        {
            id:             6,
            name:           'Authentication with Auth0',
            categories:     ['auth', 'jwt', 'node.js'],
            description:    'Powerful Authentication System with Auth0. Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        }],
        [{
            id:             7,
            name:           'Authentication with Firebase',
            categories:     ['auth', 'jwt', 'node.js'],
            description:    'Powerful Authentication System with Auth0. Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/firebase.png',
            done:           false
        },
        {
            id:             8,
            name:           'Angular2 CRUD',
            categories:     ['front-end', 'crud', 'angular'],
            description:    'CRUD made in one of the most powerful front-end frameworks!',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        },
        {
            id:             9,
            name:           'Meteor CRUD',
            categories:     ['front-end', 'crud', 'angular'],
            description:    'CRUD made in one of the most powerful front-end frameworks!',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        }],
        [
            {
                id:             10,
                name:           'React.js Front-end',
                categories:     ['front-end', 'crud', 'angular'],
                description:    'Rapid prototyping with React.js',
                image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
                done:           false
            },
            {
                id:             11,
                name:           'Ionic CRUD App',
                categories:     ['mobile', 'ionic', 'angular'],
                description:    'Fast Mobile Apps with Ionic',
                image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
                done:           false
            },
            {
                id:             12,
                name:           'Web Workers',
                categories:     ['front-end', 'crud', 'angular'],
                description:    'Multithreading with JavaScript',
                image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
                done:           false
            }
        ],
        [
            {
                id:             13,
                name:           'Web Sockets',
                categories:     ['real-time', 'async'],
                description:    'Real-time Apps with Web Sockets',
                image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
                done:           false
            },
            {
                id:             14,
                name:           'Reactive Programming',
                categories:     ['reactive', 'async'],
                description:    'Reactive Programming',
                image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
                done:           false
            },
            {
                id:             15,
                name:           'REST with Mongo and Node',
                categories:     ['rest', 'mongodb', 'node.js'],
                description:    'Capable RESTful API',
                image:          'https://your-project-name-kino6052.c9users.io/app/common/images/REST.png',
                done:           false
            }
        ]
    ];
    this.getProjectList = function(){
        return projectList;
    };
});