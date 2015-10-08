(function () {
    "use strict";

    var app = angular.module('scoreboard', []);

    app.controller('TeamsController', function () {
        this.teams = teams;
    });

    app.controller('ChampionshipsController', function () {
        this.championships = championships;
    });

    var teams = [
        {
            name: "t_one",
            from: "t_uk",
            id: 1
        },
        {
            name: "t_two ",
            from: "t_us",
            id: 2
        },
        {
            name: "t_three",
            from: "t_ua",
            id: 3
        }
    ];

    var championships = [
        {
            name: "c_one",
            from: "c_uk",
            id: 1
        },
        {
            name: "c_two ",
            from: "c_us",
            id: 2
        },
        {
            name: "c_three",
            from: "c_ua",
            id: 3
        }
    ];


}());
