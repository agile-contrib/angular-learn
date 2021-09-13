(function (window, angular, undefined) {

    angular.module("ui.libraries").factory('$factoryBasic', function () {

        return {

            doit1(info) {
                console.log('你输入的内容是：' + info);
            }

        };

    });

})(window, window.angular);
