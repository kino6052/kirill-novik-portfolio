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
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
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
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        }]
    ];
    this.getProjectList = function(){
        return projectList;
    };
});