(function (window, angular, undefined) {

    angular.module("ui.libraries").directive('uiBasic', ['$parse', function ($parse) {
        return {

            //标明该指令可以在模板中用于元素E、属性A、类C和注释M或组合
            restrict: 'EA',

            //设置指令执行优先级，在某个DOM上优先级高的会先执行
            // priority:99,

            //就是设置模板
            // template:"<span>指令里面定义的内容</span>",

            //指令模板是否替换原来的元素
            // replace:false,

            /**
             * 1.当设置true的时候，表示继承父scope，是一个子scope；
             * 2.当设置false的时候，直接使用父scope。
             */
            scope: false,

            /**
             * 请求另外的controller，然后作为link方法的第四个参数传递进去，我们需要注意的是查找控制器的方法。
             *
             * 查找控制器的方法可以这样理解：
             *  1.使用？表示如果在当前指令中没有找到所需要的控制器，会将null作为传给link函数的第四个参数，
             *  2.如果添加了^前缀，指令会在上游的指令链中查找require参数所指定的控制器，他们也可以组合，
             *    比如require: "?^ngModel"，
             *  3.如果没有前缀，指令将会在自身所提供的控制器中进行查找，如果没有找到任何控制器（或具有指定名字的指令）就抛出一个错误。
             */
            // require:String or Array,

            //你需要知道link在每个实例都执行一遍，compile全程只会执行一遍
            link: function ($scope, element, attrs, ctrl) {

                // 【1】 普通操作

                // 把文字变成红色
                element.css({
                    'color': 'red'
                });

                // 【2】 解析一段字符串（可能是属性也可能是方法）的两个方法

                // 比如，通过属性获取了方法名称
                // 下面要执行这个方法
                var funName = "getInfo()";

                //执行方法一：
                $scope.$eval(funName);

                //执行方法二：
                $parse(funName)($scope);

            },


            // 常用的就是compile的此处写执行一次的代码，或者在link方法里面写和dom有关的操作
            // 优先级高于link，如果放开，link就不执行了
            // compile: function (element, attrs) {
            // }

        };
    }]);

})(window, window.angular);
