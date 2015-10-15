'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        this.argument('ServiceName', {
            required: true,
            type: String,
            desc: 'Service name'
        });

        this.argument('AutoCompleteUrl', {
            required: true,
            type: String,
            desc: 'Auto Complete URL'
        });
        this.log('Service name: ' + this.ServiceName + '.');
        this.log('Auto complete URL: ' + this.AutoCompleteUrl + '.');
    },

    writing: function() {
        this.fs.copyTpl(this.templatePath('_service.js'),
            this.destinationPath(this.ServiceName + 'Service.js'), {
                ServiceName: this.ServiceName,
                AutoCompleteUrl: this.AutoCompleteUrl
            });
    }
});
