'use strict';

angular.module('stockDogApp')
  .directive('contenteditable', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the contenteditable directive');
      }
    };
  });
