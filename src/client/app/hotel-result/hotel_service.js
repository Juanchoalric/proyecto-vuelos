angular
    .module('app')
    .factory('dataservice', dataservice);

function dataservice($http) {
    let service = {
        serviceFunction: serviceFunction
    };
    return service;
    ////////////
    function serviceFunction() {
        return $http.get('/hotels');
        //     .then(serviceComplete)
        //     .catch(serviceFailed);
        //
        // function serviceComplete(response) {
        //     return response.data.results;
        // }
        // function serviceFailed(error) {
        //     console.error('XHR Failed for service.' + error.data);
        // }
    }
}
