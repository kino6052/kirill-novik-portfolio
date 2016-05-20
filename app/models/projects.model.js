myApp.service('projects', function(){
    var projectList = [
        {
            id:             1,
            name:           'Overlay Animation',
            categories:     ['css', 'css3'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/sensei.png',
            done:           false
        },
        {
            id:             2,
            name:           'https Server with Node.js',
            categories:     ['ssl', 'https', 'security'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        },
        {
            id:             3,
            name:           'Classy Gulp',
            categories:     ['gulp'],
            description:    'Powerful gulp script to reduce stress for developrs! Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        },
        {
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
        },
        {
            id:             7,
            name:           'Authentication with Firebase',
            categories:     ['auth', 'jwt', 'node.js'],
            description:    'Powerful Authentication System with Auth0. Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        }
    ];
    this.getProjectList = function(){
        return projectList;
    };
});