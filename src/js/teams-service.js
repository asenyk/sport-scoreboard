(function () {
    "use strict";

    angular.module('scoreboard').service('LoadTeams', LoadTeams);

    function LoadTeams ($http, $sce) {

        var vm = this;

        $http.get('http://footballbet.com.ua/api/teams/').
        success(function (data, status, headers, config) {
            vm.teamList = data.result;
        }).
        error(function (data, status, headers, config) {
            alert('Error !');
        });

        vm.trustAsHtml = function (text) {
            return $sce.trustAsHtml(text);
        };

    }

}());
