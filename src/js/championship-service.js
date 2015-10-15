(function () {
    "use strict";

    angular.module('scoreboard').service('LoadChampionships', LoadChampionships);

    function LoadChampionships($http) {

        var vm = this;

        $http.get('http://footballbet.com.ua/api/championships/').
        success(function (data, status, headers, config) {
            vm.champList = data.result;
        }).
        error(function (data, status, headers, config) {
            alert('Error !');
        });

        vm.loadTeams = function () {
            vm.champTeamTable = _.filter(vm.teamList, {'id_championship': vm.championship.id_championship});
        };

    }

}());
