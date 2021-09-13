(function (window, angular, undefined) {

    angular.module("ui.libraries").filter('basicFlt', function () {

        return function (input) {

            /**
             * 这里进行一堆的操作，
             * 把输入的内容变成想要的格式返回即可
             */
            return input + "元";

        };

    });

})(window, window.angular);
