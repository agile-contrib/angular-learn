/**
 * 公共资源路径加载配置
 */
(function () {
    var cssFiles = [
        'styles/normalize.css', // 兼容样式
        'styles/common.css', // 公共样式
        'styles/style.css' // 公共样式
    ];
    var jsFiles = [

        /* 基本文件 */
        'libs/min/jquery.js', // jquery
        'libs/min/angular.js', // angular.js
        'libs/min/ui-router.js', // 路由

        /* 配置文件 */
        'libs/config.js', // 项目配置文件

        /* 指令 */
        'libs/modules/directives/ui-basic.js',// 自定义指令最基本的例子

    ];

    if (typeof (exports) != "undefined") {
        exports.jsFiles = jsFiles;
        exports.cssFiles = cssFiles;
    } else {
        for (var i = 0; i < cssFiles.length; i++) {
            loadCss(cssFiles[i]);
        }
        for (var i = 0; i < jsFiles.length; i++) {
            loadJs(jsFiles[i]);
        }
    }

    function loadJs(path) {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = path + "?_=" + new Date().valueOf();
        document.write(outerHTML(scriptTag));
    }

    function outerHTML(node) {
        return (
            node.outerHTML ||
            (function (n) {
                var div = document.createElement('div'),
                    h;
                div.appendChild(n);
                h = div.innerHTML;
                div = null;
                return h;
            })(node)
        );
    }

    function loadCss(path) {
        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.type = 'text/css';
        cssLink.href = path + "?_=" + new Date().valueOf();
        document.getElementsByTagName('head')[0].appendChild(cssLink);
    }
})();
