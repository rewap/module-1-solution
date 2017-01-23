(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope)
  {

    $scope.putMessage=function()
    {
      var temp=(document.getElementById('lunchMenu')).value;
      var itemCount=temp.split(',');
      if(itemCount==0)
      {
      return $scope.msg="Please enter data first";
      }
      if(itemCount.length<=3)
      return $scope.msg="Enjoy !";
      else
      {
        return $scope.msg="Too much !";
      }
    }
  }
}
)();
