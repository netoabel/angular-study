'use strict';

angular.module('stockDogApp')
  .directive('stkStockTable', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stkStockTable directive');
      }
    };
  });