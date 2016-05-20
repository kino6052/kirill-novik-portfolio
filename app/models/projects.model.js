myApp.service('projects', function(){
    var projectList = [
        {
            name:           'Overlay Animation',
            categories:       ['css', 'css3'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image: 'https://your-project-name-kino6052.c9users.io/app/common/images/sensei.png'
        },
        {
            name:           'https Server with Node.js',
            categories:       ['ssl', 'https', 'security'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect',
            image: 'https://your-project-name-kino6052.c9users.io/app/common/images/ssl.png'
        }
    ];
    this.getProjectList = function(){
        return projectList;
    };
});