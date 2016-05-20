myApp.service('projects', function(){
    var projectList = [
        {
            name:           'Overlay Animation',
            categories:     ['css', 'css3'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/sensei.png',
            done:           false
        },
        {
            name:           'https Server with Node.js',
            categories:     ['ssl', 'https', 'security'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        },
        {
            name:           'Classy Gulp',
            categories:     ['gulp'],
            description:    'Powerful gulp script to reduce stress for developrs! Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        },
        {
            name:           'Powerful Grunt',
            categories:     ['grunt'],
            description:    'Powerful gulp script to reduce stress for developrs! Based on gulp script by @username',
            image:          'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png',
            done:           false
        }
    ];
    this.getProjectList = function(){
        return projectList;
    };
});