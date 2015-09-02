"use strict";

require.config({
    paths: {
        angular: '../../bower/angular/angular.min',
        angularTitip: '../../dist/angular-titip.min'
    },
    shim: {
        angular: { exports: 'angular' },
        angularTitip: {
            deps: ['angular']
        }
    },
    priority: [
        'angular'
    ]
});

require(
    [
        'angular',
        'app'
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            angular.bootstrap(document, ['app']);
        });
    }
);
