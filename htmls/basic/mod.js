ctrlapp.register.controller('BasicController', ['$scope', function ($scope) {

    $scope.initMethod = function () {

        $scope.value1 = '默认值';
        $scope.value2 = ['-1-', '-2-', '-3-', '-4-'];
        $scope.value3 = true;

    };

    $scope.doit1 = function () {
        $scope.value3 = !$scope.value3;
    };

}]);
