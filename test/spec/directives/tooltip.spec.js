"use strict";

describe('directive: tooltip', function() {
    // load the module
    beforeEach(module('angularTitip'));

    function createElement(html, $rootScope, $compile) {
        var scope = $rootScope.$new();
        var el = $compile(html)(scope);
        scope.$digest();

        return el;
    }

    describe('default values', function() {
        var element;

        beforeEach(inject(function($rootScope, $compile) {
            var html = '<a href="#" tooltip title="My fancy tooltip"></a>';

            element = createElement(html, $rootScope, $compile);
        }));

        it('should have a class titip-top', function() {
            expect(element.hasClass('titip-top')).toBe(true);
        });

        it('should have a data-title attribute', function() {
            expect(element.attr('data-title')).toBe('My fancy tooltip');
        });
    });

    describe('tooltip-title attribute', function() {
        var element;

        beforeEach(inject(function($rootScope, $compile) {
            var html = '<a href="#" tooltip tooltip-title="My other tooltip"></a>';

            element = createElement(html, $rootScope, $compile);
        }));

        it('should have a data-title attribute', function() {
            expect(element.attr('data-title')).toBe('My other tooltip');
        });
    });

    describe('themes', function() {
        var element;

        beforeEach(inject(function($rootScope, $compile) {
            var html = '<a href="#" tooltip title="My themed tooltip" tooltip-theme="info"></a>';

            element = createElement(html, $rootScope, $compile);
        }));

        it('should have the class titip-info', function() {
            expect(element.hasClass('titip-info')).toBe(true);
            expect(element.hasClass('titip-top')).toBe(true);
        });
    });

    describe('border', function() {
        var element;

        beforeEach(inject(function($rootScope, $compile) {
            var html = '<a href="#" tooltip title="My themed tooltip" tooltip-border="true"></a>';

            element = createElement(html, $rootScope, $compile);
        }));

        it('should have the class thick-border', function() {
            expect(element.hasClass('thick-border')).toBe(true);
        });
    });

    describe('animation', function() {
        var element;

        beforeEach(inject(function($rootScope, $compile) {
            var html = '<a href="#" tooltip title="My themed tooltip" tooltip-animation="flip"></a>';

            element = createElement(html, $rootScope, $compile);
        }));

        it('should have the class titip-flip', function() {
            expect(element.hasClass('titip-flip')).toBe(true);
        });
    });
});
