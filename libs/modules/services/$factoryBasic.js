
(function (window, angular, undefined) {

    "use strict";

    angular.module("ui.libraries").factory('$factoryBasic', function () {

        return {

            doit1: function (info) {
                console.log('你输入的内容是：' + info);
            }

        };

    });

})(window, window.angular);
