System.register("01_default_export", [], function (exports_1, context_1) {
    "use strict";
    var a, b;
    var __moduleName = context_1 && context_1.id;
    function sum(x, y) {
        return x + y;
    }
    return {
        setters: [],
        execute: function () {
            a = 10;
            b = 20;
            exports_1("default", {
                a, sum
            });
        }
    };
});
System.register("02_import", ["01_default_export"], function (exports_2, context_2) {
    "use strict";
    var _01_default_export_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (_01_default_export_1_1) {
                _01_default_export_1 = _01_default_export_1_1;
            }
        ],
        execute: function () {
            console.log(_01_default_export_1.default);
        }
    };
});
System.register("app", ["01_default_export"], function (exports_3, context_3) {
    "use strict";
    var a, _01_default_export_2;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (_01_default_export_2_1) {
                _01_default_export_2 = _01_default_export_2_1;
            }
        ],
        execute: function () {
            a = 1;
            console.log(_01_default_export_2.default);
        }
    };
});
