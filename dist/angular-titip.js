(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. register as an anonymous module.
        define(['exports', 'angular', factory]);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('angular'));
    } else {
        factory((root.angularTitip = {}), root.angular);
    }
}(this, function(exports, angular) {
    "use strict";
    var app = angular.module('angularTitip', []);

    app.directive('tooltip', function() {
        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {
                var position = $attr.tooltipPosition || 'top';
                var lastClass = null, lastTheme = null,
                    lastAnimation = null;

                function setClass(position) {
                    var cssClass = 'titip-' + position;

                    if (lastClass !== null && lastClass !== cssClass) {
                        $element.removeClass(lastClass);
                    }

                    $element.addClass(cssClass);
                    lastClass = cssClass;
                }

                function setTheme(theme) {
                    if (lastTheme !== null && lastTheme !== theme) {
                        $element.removeClass('titip-' + lastTheme);
                    }
                    if (theme) {
                        lastTheme = theme;
                        $element.addClass('titip-' + theme);
                    }
                }

                function setTitle(title) {
                    $element.attr('data-title', title);
                }

                function setBorder(border) {
                    if (border === true || border === 'true') {
                        $element.addClass('thick-border');
                    } else {
                        $element.removeClass('thick-border');
                    }
                }

                function setAnimation(animation) {
                    if (lastAnimation !== null && lastAnimation !== animation) {
                        $element.removeClass('titip-' + lastAnimation);
                    }

                    if (animation) {
                        lastAnimation = animation;
                        $element.addClass('titip-' + animation);
                    }
                }

                setClass(position);

                $attr.$observe('tooltipPosition', setClass);
                $attr.$observe('title', setTitle);
                $attr.$observe('tooltipTitle', setTitle);
                $attr.$observe('tooltipTheme', setTheme);
                $attr.$observe('tooltipBorder', setBorder);
                $attr.$observe('tooltipAnimation', setAnimation);
            }
        };
    });
}));
