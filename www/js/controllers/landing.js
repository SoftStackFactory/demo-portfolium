angular.module('starter.controllers', [])
.controller('LandingCtrl', ['$scope', 'JobsService', '$rootScope', '$state', 'JobsProfService',
        function($scope, JobsService, $rootScope, $state, JobsProfService) {
    
    // $scope.$on('$ionicView.enter', function() {
    //  // Code you want executed every time this view is opened
     
    // });
    // $scope.consoleLog = function(text) {
    //     console.log(text);
    // };
    var skipJobs = 0;
    var resultsPerPage = 20;
    $scope.moreDataCanBeLoaded = true;
    $scope.serviceArray = [];
    $scope.getJobs = function() {
        $rootScope.stopSpinner = true;
        JobsService.getFeed(resultsPerPage, skipJobs)
        .then(function(response) {
            if(response.status === 200) {
                if(response.data.length === 0) {
                    //stops the scroll
                    $scope.moreDataCanBeLoaded = false;
                }
                for(var i in response.data) {
                    response.data[i].title = response.data[i].title.replace(/&amp;/g, '&');
                    $scope.serviceArray.push(response.data[i]);
                }
                skipJobs += resultsPerPage;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }
        });
    };
    $scope.doRefresh = function() {
        skipJobs = 0;
        $scope.moreDataCanBeLoaded = true;
        $scope.serviceArray = [];
        $scope.getJobs();
        $scope.$broadcast('scroll.refreshComplete');
    };
    
    $scope.addEllipses = function(text) {
        if(text.length > 125) {
            return '...';
        }
        return;
    };
    $scope.moreJobDetails = function(index) {
        JobsProfService.setData($scope.serviceArray[index]);
        $state.go('jobs.profile');
    };
    // an object returned with this http call
    $scope.jobsArray = [{
        "id":"37323",
        "fk_user_id":"239785",
        "fk_company_id":"146",
        "fk_industry_id":"195",
        "fk_function_id":"0",
        "title":"New Grad - Software Engineer",
        "slug":"viasat-new-grad-software-engineer-91",
        "description":"Job Responsibilities Software Engineering Positions at ViaSat!\n\nLooking for an environment that encourages collaboration where you'll contribute fresh ideas? Join the leading global innovator in satellite communication and technology! \n\nHow ViaSat innovates: \n \n &bull; Satellite technology - Guinness World Record holder for highest capacity communication satellite\nIn-flight Wi-Fi connectivity - presently streaming Amazon Prime and Netflix on providers like JetBlue and United Airlines\n &bull; Residential broadband service - Exede internet\nSecure communication services - trusted encryption and networking solutions (government, military, critical infrastructure & utilities) What you could do:\n \n &bull; Embedded Linux software development for TCP/IP networking & wireless communication systems\n &bull; Distributed enterprise software applications \n &bull; Web & mobile application engineering\n &bull; Cybersecurity software & systems engineering\n &bull; System infrastructure development; scripting, automation, data visualization & dashboarding\n &bull; Data analytics & cloud application engineering Requirements \n\n &bull; Bachelor's degree in Computer Science, Computer Engineering, Electrical Engineering, Physics, Math, and/or a related field  \n\n &bull; Exposure or desire to work with any of the following; C/C++, Java, Python, Hadoop, MapReduce and many more  \n\n &bull; Experience with or desire to learn Linux  \n\n &bull; A bility to travel up to 10%  \n\n &bull;  US citizenship required  \n\n &bull; Desire to work in San Diego, CA. Preferences \n\n &bull; U.S. Citizenship preferred for certain positions \n\n &bull; Previous internship experience is a plus  \n\n &bull; Apply and learn more: https://www.viasat.com/careers/university  \n#LI-COLL\n ** ViaSat is an EEO/AA/Disability/Protected Veteran Employer. U.S. Citizenship or Lawful Permanent Residence status may be required for certain positions. For positions requiring U.S. Citizenship or Lawful Permanent Resident status, verification of such status will be required upon accepting employment.",
        "country":"United States",
        "state":"CA",
        "city":"San Diego",
        "zip":"-",
        "email":"",
        "url":"https://sjobs.brassring.com/TGWebHost/jobdetails.aspx?jobId=1163866&partnerid=425&siteid=5199",
        "image":{
            "url":"http://cdn.portfolium.com/img/defaults/default.jpg",
            "url_https":"https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/img/defaults/default.jpg",
            "dynamic":"http://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/img/defaults/default.jpg",
            "dynamic_https":"https://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/img/defaults/default.jpg"
            
        },
        "type":"internship",
        "wanted":"Examples of projects and skills",
        "views":"4",
        "anywhere":"0",
        "spotlighted":"0",
        "published":"1",
        "expires_on":"2100-01-01 00:00:00",
        "created_at":"2016-01-14 15:00:40",
        "updated_at":"2016-01-14 15:00:40",
        "industry":"Telecommunications",
        "function":null,
        "company":{
            "id":"146",
            "fk_creator_id":"76",
            "name":"ViaSat",
            "slug":"viasat",
            "description":"We do the most advanced satellite networks in the world.  We design satellites, we launch them, and then we connect people with them.  It's fun stuff!",
            "location":"Carlsbad, CA",
            "url":"http://www.viasat.com/careers",
            "fk_industry_id":"195",
            "size":"1001-5000",
            "tagline":"Connectivity, everywhere",
            "logo":{
                "url":"http://cdn.portfolium.com/ugc/company_logo/54485c3f776b8-ViaSat_logo_Profile_Image.jpg",
                "url_https":"https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/company_logo/54485c3f776b8-ViaSat_logo_Profile_Image.jpg",
                "dynamic":"http://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/ugc/company_logo/54485c3f776b8-ViaSat_logo_Profile_Image.jpg",
                "dynamic_https":"https://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/ugc/company_logo/54485c3f776b8-ViaSat_logo_Profile_Image.jpg"
                },
            "cover":{
                "url":"http://cdn.portfolium.com/ugc/company_cover/54485ca92ae70-Portfolium_Cover_Image_006_1.jpg",
                "url_https":"https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/company_cover/54485ca92ae70-Portfolium_Cover_Image_006_1.jpg",
                "dynamic":"http://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/ugc/company_cover/54485ca92ae70-Portfolium_Cover_Image_006_1.jpg",
                "dynamic_https":"https://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/ugc/company_cover/54485ca92ae70-Portfolium_Cover_Image_006_1.jpg"
            },
            "landing":{
                "url":"http://cdn.portfolium.com/landing/viasat.jpg",
                "url_https":"https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/landing/viasat.jpg",
                "dynamic":"http://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/landing/viasat.jpg",
                "dynamic_https":"https://portfolium.cloudimg.io/s/{function}/{size}/http://cdn.portfolium.com/landing/viasat.jpg"
            },
            "facebook_url":"ViaSat",
            "twitter_url":"viasatinc",
            "instagram_url":null,
            "linkedin_url":"company/viasat",
            "rss":null,
            "creator_title":null,
            "followers":"76",
            "views":"1685",
            "created_at":"2014-10-24 03:07:50",
            "updated_at":"2014-12-10 01:26:37",
            "industry":"Telecommunications",
            "following":"0"
        },
        "tags":[{
            "tag":"LI"
        }]
    }];
    
}])
.service('JobsProfService', function() {
    var companyInfo = {};
    this.setData = function(data) {
        companyInfo = data;
    };
    this.getData = function(data) {
        return companyInfo;
    };
});