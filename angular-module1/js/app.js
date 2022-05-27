(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope){
	$scope.message = "";
	$scope.calculateLunch = function (){
		if ($scope.lunchString == null || $scope.lunchString == ""){
			$scope.message = "Please enter data first!";
		} else {
			const lunchArray = $scope.lunchString.split(",");
			if (lunchArray.length <= 3){
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		}
	};
    }

})();