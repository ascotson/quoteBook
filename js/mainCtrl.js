angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

  $scope.newQuote = {
    text: "",
    author: ""
  };

  $scope.getDataCtrl = function() {
    $scope.quotes = dataService.getDataSvc();
  };

  $scope.addDataCtrl = function() {
    dataService.addDataSvc($scope.newQuote);
  };

  $scope.removeDataCtrl = function() {
    dataService.removeDataSvc($scope.removeQuote);
  };
  /*we are creating then adding the 'removeDataCtrl' function to the $scope object so it can be accessed
  from within the HTML.  All this function is doing is invoking the service function named 'removeDataSvc()'.*/

  $scope.getDataCtrl();

});
