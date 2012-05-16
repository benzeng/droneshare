// Generated by CoffeeScript 1.3.2
/*global define
*/

define(['directives/directives', 'text!partials/link.html'], function(directives, template) {
  'use strict';
  return directives.directive('ngLink', [
    function() {
      return {
        replace: true,
        restrict: 'E',
        scope: {
          url: 'bind'
        },
        template: template,
        transclude: true
      };
    }
  ]);
});
