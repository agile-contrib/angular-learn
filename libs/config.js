/**
 * --------------------------------------
 * 模块定义
 * --------------------------------------
 */

// 自定义扩展模块
var libapp = angular.module("ui.libraries", []);

// 控制器模块
var ctrlapp = angular.module("ui.ctrl", []);

//主模块定义（同时引入需要的模块）
var startapp = angular.module("startApp", ['ui.router', 'ui.libraries', 'ui.ctrl']);

/**
 * --------------------------------------
 * 模块启动
 * --------------------------------------
 */
//主模块
startapp.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', "$compileProvider", "$filterProvider", "$provide", function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    "use strict";

    //定义需要使用的方法
    ctrlapp.register = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
    };

    //异步加载控制器文件
    startapp.asyncjs = function (js) {
        return ['$q', function ($q) {

            var delay = $q.defer(),
                load = function () {
                    window.$.getScript(js, function () {
                        delay.resolve();
                    });
                };
            load();
            return delay.promise;
        }];
    };

    /**
     * --------------------------------------
     * 定义路由
     * --------------------------------------
     */

    var addToken = function (url) {
        return url + "?_=" + new Date().valueOf();
    };

    $stateProvider
        .state("Index", {
            url: "/Index",
            templateUrl: addToken("htmls/index/mod.html"),
            resolve: {
                delay: startapp.asyncjs('htmls/index/mod.js')
            },
            controller: "IndexController"
        })
        .state("Basic", {
            url: "/Basic",
            templateUrl: addToken("htmls/basic/mod.html"),
            resolve: {
                delay: startapp.asyncjs('htmls/basic/mod.js')
            },
            controller: "BasicController"
        })
        .state("Directive", {
            url: "/Directive",
            templateUrl: addToken("htmls/directive/mod.html"),
            resolve: {
                delay: startapp.asyncjs('htmls/directive/mod.js')
            },
            controller: "DirectiveController"
        })
        .state("Filter", {
            url: "/Filter",
            templateUrl: addToken("htmls/filter/mod.html"),
            resolve: {
                delay: startapp.asyncjs('htmls/filter/mod.js')
            },
            controller: "FilterController"
        });

    $urlRouterProvider.otherwise("/Index");

}]).run(['$rootScope', '$state', function ($rootScope, $state) {

    "use strict";

    // 路由跳转
    $rootScope.goto = function (state) {
        $state.go(state);
    };

}]);
