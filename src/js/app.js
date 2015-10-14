(function () {
    "use strict";

    var app = angular.module('scoreboard', []);

    app.controller('Football', function ($http, $sce) {

        var vm = this;

        $http.get('http://footballbet.com.ua/api/teams/').
        success(function (data, status, headers, config) {
            vm.teamList = data.result;
        }).
        error(function (data, status, headers, config) {
            alert('Error !');
        });

        $http.get('http://footballbet.com.ua/api/championships/').
        success(function (data, status, headers, config) {
            vm.champList = data.result;
        }).
        error(function (data, status, headers, config) {
            alert('Error !');
        });

        vm.trustAsHtml = function (text) {
            return $sce.trustAsHtml(text);
        };

        vm.loadTeams = function () {
            vm.champTeamTable = _.filter(vm.teamList, {'id_championship': vm.championship.id_championship});
        };

    });

    //app.controller('MatchesController', function ($http) {
    //    var vm = this;
    //    $http.get('http://footballbet.com.ua/api/matches/').
    //    success(function (data, status, headers, config) {
    //        vm.matches = data.result;
    //    }).
    //    error(function (data, status, headers, config) {
    //        alert('Error !');
    //    });
    //});

}());
