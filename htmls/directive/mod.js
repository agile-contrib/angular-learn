ctrlapp.register.controller('DirectiveController', ['$scope', function ($scope) {

    $scope.initMethod = function () {

    };

    // 定义的方法，提供给指令用
    $scope.getInfo = function () {
        console.log('我是定义在页面中的方法，被执行了');
    };

}]);
