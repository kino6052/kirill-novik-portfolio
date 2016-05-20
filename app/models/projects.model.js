myApp.service('projects', function(){
    var projectList = [
        {
            name:           'Overlay Animation',
            categories:       ['css', 'css3'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect'
        },
        {
            name:           'https Server with Node.js',
            categories:       ['ssl', 'https', 'security'],
            description:    'This Feature Helps Uses CSS3 to Create the Overlay Effect'
        }
    ];
    this.getProjectList = function(){
        return projectList;
    };
});