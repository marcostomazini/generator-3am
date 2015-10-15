define(['gumga-class', 'abstract-service'],
    function (GumgaClass, AbstractService) {
        function <%= ServiceName %>Service($http) {
            AtividadeOnsService.super.constructor.call(this, $http);
            this.autoCompleteUrl = '<%= AutoCompleteUrl %>';
        }

        return GumgaClass.create({
            $inject: ['$http'],
            constructor: <%= ServiceName %>Service,
            extends: AbstractService
        });
    });