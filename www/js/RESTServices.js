angular.module('RESTConnection', [])
// .constant('ENDPOINT_URL', 'someUrl') //this constant is included in the SSFServices/SSFConfig.js file
// .service('UserService', ['$http', 'SSFConfigConstants',
//         function ($http, SSFConfigConstants) {
//     var service = this;
//     // path = 'SSFUsers/';
    
//     function getUrl() {
//         return SSFConfigConstants.EndpointUrl.url + SSFConfigConstants.currentLogin;
//     }
    
//     service.create = function (user) {
//         return $http.post(getUrl(), user);
//     };
    
//     service.login = function(user) {
//     user["ttl"] = 1209600000;
//         return $http.post(getUrl()+"login",user);
//     };
    
//     service.updateUser = function(token, userId, newModel) {
//     return $http({
//         url: getUrl()+userId,
//             method: "PUT",
//             data: newModel,
//             headers: {
//                 'Authorization': token
//             }
//         });
//     };
    
//     service.logout = function(token) {
//         return $http({
//             url: getUrl()+"logout",
//             method: "POST",
//             headers: {
//                 'Authorization': token
//             }
//         });
//     };
// }])

.service('JobsService', ['$http', 'SSFConfigConstants',
        function ($http,  SSFConfigConstants) {
    var service = this;
    
    function getUrl() {
        return SSFConfigConstants.EndpointUrl.url + 'jobs/';
    }
    
    service.getFeed = function(limit, offset) {
        return $http.get(getUrl() + 'feed?' + SSFConfigConstants.EndpointUrl.apiKey + '&limit='+ limit + '&offset=' + offset);
        
      /*  return $http({
              url: getUrl()+'feed?limit='+ limit + '&offset=' + offset + SSFConfigConstants.EndpointUrl.apiKey,
              method: "GET",
             
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'}
                });*/
       
        
     //     return $http.get("https://tktest-v3-jbrownssf.c9.io/api");
    };
    
}]);