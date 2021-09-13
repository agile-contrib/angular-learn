ctrlapp.register.controller('ServiceController', ['$scope', '$factoryBasic', function ($scope, $factoryBasic) {

    $scope.initMethod = function () {

        $factoryBasic.doit1('[factory自定义的服务]');

    };


}]);
