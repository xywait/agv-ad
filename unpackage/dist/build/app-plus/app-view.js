(function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="03c8")})({"03c8":function(t,e,n){"use strict";function r(){function t(t){var e=n("e684");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}n("862d"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},"05b3":function(t,e,n){"use strict";var r=n("8d87"),i=n.n(r);i.a},"0947":function(t,e,n){var r=n("24fb"),i=n("b8d8"),o=n("3c5b"),a=n("bb5f"),c=n("a1d9"),s=n("8bce"),l=n("deee"),u=n("8d2e"),d=n("b27d");e=r(!1);var f=i(o),p=i(a),b=i(c),g=i(s),v=i(l),h=i(u),w=i(d);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * \u8fd9\u91cc\u662funi-app\u5185\u7f6e\u7684\u5e38\u7528\u6837\u5f0f\u53d8\u91cf\r\n *\r\n * uni-app \u5b98\u65b9\u6269\u5c55\u63d2\u4ef6\u53ca\u63d2\u4ef6\u5e02\u573a\uff08https://ext.dcloud.net.cn\uff09\u4e0a\u5f88\u591a\u4e09\u65b9\u63d2\u4ef6\u5747\u4f7f\u7528\u4e86\u8fd9\u4e9b\u6837\u5f0f\u53d8\u91cf\r\n * \u5982\u679c\u4f60\u662f\u63d2\u4ef6\u5f00\u53d1\u8005\uff0c\u5efa\u8bae\u4f60\u4f7f\u7528scss\u9884\u5904\u7406\uff0c\u5e76\u5728\u63d2\u4ef6\u4ee3\u7801\u4e2d\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u53d8\u91cf\uff08\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\uff09\uff0c\u65b9\u4fbf\u7528\u6237\u901a\u8fc7\u642d\u79ef\u6728\u7684\u65b9\u5f0f\u5f00\u53d1\u6574\u4f53\u98ce\u683c\u4e00\u81f4\u7684App\r\n *\r\n */\r\n/**\r\n * \u5982\u679c\u4f60\u662fApp\u5f00\u53d1\u8005\uff08\u63d2\u4ef6\u4f7f\u7528\u8005\uff09\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u53d8\u91cf\u6765\u5b9a\u5236\u81ea\u5df1\u7684\u63d2\u4ef6\u4e3b\u9898\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\r\n *\r\n * \u5982\u679c\u4f60\u7684\u9879\u76ee\u540c\u6837\u4f7f\u7528\u4e86scss\u9884\u5904\u7406\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4f60\u7684 scss \u4ee3\u7801\u4e2d\u4f7f\u7528\u5982\u4e0b\u53d8\u91cf\uff0c\u540c\u65f6\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\r\n */\r\n/* \u989c\u8272\u53d8\u91cf */\r\n/* \u884c\u4e3a\u76f8\u5173\u989c\u8272 */\r\n/* \u6587\u5b57\u57fa\u672c\u989c\u8272 */\r\n/* \u80cc\u666f\u989c\u8272 */\r\n/* \u8fb9\u6846\u989c\u8272 */\r\n/* \u5c3a\u5bf8\u53d8\u91cf */\r\n/* \u6587\u5b57\u5c3a\u5bf8 */\r\n/* \u56fe\u7247\u5c3a\u5bf8 */\r\n/* Border Radius */\r\n/* \u6c34\u5e73\u95f4\u8ddd */\r\n/* \u5782\u76f4\u95f4\u8ddd */\r\n/* \u900f\u660e\u5ea6 */\r\n/* \u6587\u7ae0\u573a\u666f\u76f8\u5173 */uni-page-body{height:100%!important}#app{height:100%!important}body{width:100%;height:100%!important}.page-container{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:100%}.page-container .ad-video-container{width:564rpx;height:100%;overflow:hidden}.page-container .ad-video-container .video-player{width:100%;height:100%}.page-container .test-item{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:red;height:100upx}.page-container .ad-video-container{width:564rpx;height:100%;background-color:#4cd964}.page-container .ad-video-container #ad-video{width:100%;height:100%}.page-container .device-control-container{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.page-container .device-control-container .control-item{width:158.1rpx;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.page-container .device-control-container .control-item:after{position:absolute;top:0;left:0;box-sizing:border-box;width:200%;height:200%;border-bottom:1upx solid #d9d9d9;border-radius:inherit;content:" ";-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none}.page-container .device-control-container .control-item:last-child::after{border:none}.page-container .device-control-container .control-item .icon{width:26.4rpx;height:26.4rpx;background-size:100%;background-repeat:no-repeat;margin-right:25.3rpx}.page-container .device-control-container .control-item .icon.icon-semantic{background-image:url('+f+")}.page-container .device-control-container .control-item .icon.icon-remote-talk{background-image:url("+p+")}.page-container .device-control-container .control-item .icon.icon-sound-light-warning{background-image:url("+b+")}.page-container .device-control-container .control-item .icon.icon-extingguishing{background-image:url("+g+")}.page-container .device-control-container .control-item .icon.icon-light{background-image:url("+v+")}.page-container .device-control-container .control-item .icon.icon-recharge{background-image:url("+h+")}.page-container .device-control-container .control-item .icon.icon-others{background-image:url("+w+")}.page-container .device-control-container .control-item .title{font-size:15.4rpx;color:#091b48;letter-spacing:.82rpx;text-indent:.82rpx}.logo{height:200rpx;width:200rpx;margin-left:auto;margin-right:auto}.text-area{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title{font-size:36rpx;color:#8f8f94}",""]),t.exports=e},"12a8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("2f76"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{wxsProps:{}}},components:{luButtonRipple:r.default}};e.default=o},"17f0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"lu-button-ripple",props:["buttonRippleId","rippleBackgroundColor","rippleOpacity"],data:function(){return{wxsProps:{}}},components:{}};e.default=r},"190d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * \u8fd9\u91cc\u662funi-app\u5185\u7f6e\u7684\u5e38\u7528\u6837\u5f0f\u53d8\u91cf\r\n *\r\n * uni-app \u5b98\u65b9\u6269\u5c55\u63d2\u4ef6\u53ca\u63d2\u4ef6\u5e02\u573a\uff08https://ext.dcloud.net.cn\uff09\u4e0a\u5f88\u591a\u4e09\u65b9\u63d2\u4ef6\u5747\u4f7f\u7528\u4e86\u8fd9\u4e9b\u6837\u5f0f\u53d8\u91cf\r\n * \u5982\u679c\u4f60\u662f\u63d2\u4ef6\u5f00\u53d1\u8005\uff0c\u5efa\u8bae\u4f60\u4f7f\u7528scss\u9884\u5904\u7406\uff0c\u5e76\u5728\u63d2\u4ef6\u4ee3\u7801\u4e2d\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u53d8\u91cf\uff08\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\uff09\uff0c\u65b9\u4fbf\u7528\u6237\u901a\u8fc7\u642d\u79ef\u6728\u7684\u65b9\u5f0f\u5f00\u53d1\u6574\u4f53\u98ce\u683c\u4e00\u81f4\u7684App\r\n *\r\n */\r\n/**\r\n * \u5982\u679c\u4f60\u662fApp\u5f00\u53d1\u8005\uff08\u63d2\u4ef6\u4f7f\u7528\u8005\uff09\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u53d8\u91cf\u6765\u5b9a\u5236\u81ea\u5df1\u7684\u63d2\u4ef6\u4e3b\u9898\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\r\n *\r\n * \u5982\u679c\u4f60\u7684\u9879\u76ee\u540c\u6837\u4f7f\u7528\u4e86scss\u9884\u5904\u7406\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4f60\u7684 scss \u4ee3\u7801\u4e2d\u4f7f\u7528\u5982\u4e0b\u53d8\u91cf\uff0c\u540c\u65f6\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\r\n */\r\n/* \u989c\u8272\u53d8\u91cf */\r\n/* \u884c\u4e3a\u76f8\u5173\u989c\u8272 */\r\n/* \u6587\u5b57\u57fa\u672c\u989c\u8272 */\r\n/* \u80cc\u666f\u989c\u8272 */\r\n/* \u8fb9\u6846\u989c\u8272 */\r\n/* \u5c3a\u5bf8\u53d8\u91cf */\r\n/* \u6587\u5b57\u5c3a\u5bf8 */\r\n/* \u56fe\u7247\u5c3a\u5bf8 */\r\n/* Border Radius */\r\n/* \u6c34\u5e73\u95f4\u8ddd */\r\n/* \u5782\u76f4\u95f4\u8ddd */\r\n/* \u900f\u660e\u5ea6 */\r\n/* \u6587\u7ae0\u573a\u666f\u76f8\u5173 */\r\n/*\u6bcf\u4e2a\u9875\u9762\u516c\u5171css */uni-page-body{height:100%}',""]),t.exports=e},"24fb":function(t,e,n){"use strict";function r(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"===typeof btoa){var o=i(r),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}function i(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"===typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},"26f2":function(t,e,n){"use strict";n.r(e);var r=n("b73b"),i=n("c8c6");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("af99");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},"2f76":function(t,e,n){"use strict";n.r(e);var r=n("b67f"),i=n("62da");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("6821");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"0c000d86",null,!1,r["a"],a);e["default"]=s.exports},"3c5b":function(t,e,n){t.exports=n.p+"static/img/semantic.2bccf37d.svg"},4077:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1},on:{click:function(e){return t.$handleViewEvent(e)}}},[n("luButtonRipple",{attrs:{_i:2}},[t._v("\u9ed8\u8ba4")])],1),t._l(t._$g(3,"f"),(function(e,r,i,o){return n("v-uni-view",{key:e,staticClass:t._$g("3-"+o,"sc"),attrs:{_i:"3-"+o}},[n("luButtonRipple",{attrs:{_i:"4-"+o},on:{rippleTap:function(e){return t.$handleViewEvent(e)}}},[t._v(t._$g("4-"+o,"t0-0"))])],1)}))],2)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"45ac":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * \u8fd9\u91cc\u662funi-app\u5185\u7f6e\u7684\u5e38\u7528\u6837\u5f0f\u53d8\u91cf\r\n *\r\n * uni-app \u5b98\u65b9\u6269\u5c55\u63d2\u4ef6\u53ca\u63d2\u4ef6\u5e02\u573a\uff08https://ext.dcloud.net.cn\uff09\u4e0a\u5f88\u591a\u4e09\u65b9\u63d2\u4ef6\u5747\u4f7f\u7528\u4e86\u8fd9\u4e9b\u6837\u5f0f\u53d8\u91cf\r\n * \u5982\u679c\u4f60\u662f\u63d2\u4ef6\u5f00\u53d1\u8005\uff0c\u5efa\u8bae\u4f60\u4f7f\u7528scss\u9884\u5904\u7406\uff0c\u5e76\u5728\u63d2\u4ef6\u4ee3\u7801\u4e2d\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u53d8\u91cf\uff08\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\uff09\uff0c\u65b9\u4fbf\u7528\u6237\u901a\u8fc7\u642d\u79ef\u6728\u7684\u65b9\u5f0f\u5f00\u53d1\u6574\u4f53\u98ce\u683c\u4e00\u81f4\u7684App\r\n *\r\n */\r\n/**\r\n * \u5982\u679c\u4f60\u662fApp\u5f00\u53d1\u8005\uff08\u63d2\u4ef6\u4f7f\u7528\u8005\uff09\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u53d8\u91cf\u6765\u5b9a\u5236\u81ea\u5df1\u7684\u63d2\u4ef6\u4e3b\u9898\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\r\n *\r\n * \u5982\u679c\u4f60\u7684\u9879\u76ee\u540c\u6837\u4f7f\u7528\u4e86scss\u9884\u5904\u7406\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4f60\u7684 scss \u4ee3\u7801\u4e2d\u4f7f\u7528\u5982\u4e0b\u53d8\u91cf\uff0c\u540c\u65f6\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\r\n */\r\n/* \u989c\u8272\u53d8\u91cf */\r\n/* \u884c\u4e3a\u76f8\u5173\u989c\u8272 */\r\n/* \u6587\u5b57\u57fa\u672c\u989c\u8272 */\r\n/* \u80cc\u666f\u989c\u8272 */\r\n/* \u8fb9\u6846\u989c\u8272 */\r\n/* \u5c3a\u5bf8\u53d8\u91cf */\r\n/* \u6587\u5b57\u5c3a\u5bf8 */\r\n/* \u56fe\u7247\u5c3a\u5bf8 */\r\n/* Border Radius */\r\n/* \u6c34\u5e73\u95f4\u8ddd */\r\n/* \u5782\u76f4\u95f4\u8ddd */\r\n/* \u900f\u660e\u5ea6 */\r\n/* \u6587\u7ae0\u573a\u666f\u76f8\u5173 */lu-button-ripple[data-v-0c000d86]{position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.lu-button-ripple[data-v-0c000d86]{position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.lu-button-ripple .button-content[data-v-0c000d86]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:1}.lu-button-ripple .ripple-cell[data-v-0c000d86]{border-radius:100%;background-color:hsla(0,0%,60%,.5);left:0;top:0;opacity:1;-webkit-transform:scale(1);transform:scale(1);width:10px;height:10px;position:absolute;z-index:0}.lu-button-ripple .ripple-animation[data-v-0c000d86]{-webkit-animation:ripple-data-v-0c000d86 .25s linear;animation:ripple-data-v-0c000d86 .25s linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes ripple-data-v-0c000d86{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes ripple-data-v-0c000d86{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}',""]),t.exports=e},"48f6":function(t,e,n){"use strict";n.r(e);var r=n("edb7"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"4ee4":function(t,e,n){var r=n("190d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("41de9cfc",r,!0,{sourceMap:!1,shadowMode:!1})},"62da":function(t,e,n){"use strict";n.r(e);var r=n("17f0"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},6821:function(t,e,n){"use strict";var r=n("f772"),i=n.n(r);i.a},"7f7e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],c=o[1],s=o[2],l=o[3],u={id:t+":"+i,css:c,media:s,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}n.r(e),n.d(e,"default",(function(){return b}));var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,l=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(t,e,n,i){l=n,d=i||{};var a=r(t,e);return g(a),function(e){for(var n=[],i=0;i<a.length;i++){var c=a[i],s=o[c.id];s.refs--,n.push(s)}e?(a=r(t,e),g(a)):a=[];for(i=0;i<n.length;i++){s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(h(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(h(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function h(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(p){var i=s++;r=c||(c=v()),e=x.bind(null,r,i,!1),n=x.bind(null,r,i,!0)}else r=v(),e=m.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function x(t,e,n,r){var i=n?"":j(r.css);if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function m(t,e){var n=j(e.css),r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),d.ssrId&&t.setAttribute(f,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var _=/([+-]?\d+(\.\d+)?)[r|u]px/g,k=/var\(--status-bar-height\)/gi,y=/var\(--window-top\)/gi,C=/var\(--window-bottom\)/gi,$=!1;function j(t){if(!uni.canIUse("css.var")){!1===$&&($=plus.navigator.getStatusbarHeight());var e={statusBarHeight:$,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(k,e.statusBarHeight+"px").replace(y,e.top+"px").replace(C,e.bottom+"px")}return t.replace(/\{[\s\S]+?\}/g,(function(t){return t.replace(_,(function(t,e){return uni.upx2px(e)+"px"}))}))}},"862d":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("26f2").default)})),__definePage("pages/demo/demo",(function(){return Vue.extend(n("ec8e").default)}))},"8b75":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".btn-page{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btn-box{position:relative;width:80%;height:40px;font-size:12px;background-color:#f9f9f9;border-radius:5px;margin:10px;overflow:hidden;box-shadow:1px 2px 3px hsla(0,0%,39.2%,.5)}",""]),t.exports=e},"8bce":function(t,e,n){t.exports=n.p+"static/img/extingguishing.f8563565.svg"},"8d2e":function(t,e,n){t.exports=n.p+"static/img/recharge.a08e9c21.svg"},"8d87":function(t,e,n){var r=n("8b75");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("1770836c",r,!0,{sourceMap:!1,shadowMode:!1})},a1d9:function(t,e,n){t.exports=n.p+"static/img/sound-light-warning.94bd9196.svg"},af99:function(t,e,n){"use strict";var r=n("cdf0"),i=n.n(r);i.a},b27d:function(t,e,n){t.exports=n.p+"static/img/others.f1e12f89.svg"},b67f:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{id:t._$g(0,"a-id"),_i:0},on:{click:function(e){return t.$handleViewEvent(e)}}},[n("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[t._t("default",null,{_i:2})],2),t._l(t._$g(3,"f"),(function(e,r,i,o){return n("v-uni-view",{key:e,staticClass:t._$g("3-"+o,"sc"),class:t._$g("3-"+o,"c"),style:t._$g("3-"+o,"s"),attrs:{id:t._$g("3-"+o,"a-id"),_i:"3-"+o}})}))],2)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},b73b:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[n("v-uni-video",{staticClass:t._$g(2,"sc"),attrs:{id:"ad-video",src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",autoplay:!0,loop:!0,controls:!0,"play-btn-position":"center",_i:2},on:{error:function(e){return t.$handleViewEvent(e)}}})],1),n("v-uni-view",{staticClass:t._$g(3,"sc"),attrs:{_i:3}},t._l(t._$g(4,"f"),(function(e,r,i,o){return n("v-uni-view",{key:e,staticClass:t._$g("4-"+o,"sc"),attrs:{_i:"4-"+o}},[n("luButtonRipple",{attrs:{_i:"5-"+o}},[n("v-uni-view",{staticClass:t._$g("6-"+o,"sc"),class:t._$g("6-"+o,"c"),attrs:{_i:"6-"+o}}),n("v-uni-text",{staticClass:t._$g("7-"+o,"sc"),attrs:{_i:"7-"+o}},[t._v(t._$g("7-"+o,"t0-0"))])],1)],1)})),1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},b8d8:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):0===t.indexOf("/")?t.substr(1):t)}},bb5f:function(t,e,n){t.exports=n.p+"static/img/remote-talk.d5194866.svg"},c8c6:function(t,e,n){"use strict";n.r(e);var r=n("12a8"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},cdf0:function(t,e,n){var r=n("0947");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("333b4401",r,!0,{sourceMap:!1,shadowMode:!1})},deee:function(t,e,n){t.exports=n.p+"static/img/light.6d7a1007.svg"},e684:function(t,e,n){"use strict";n.r(e);var r=n("4ee4"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},ec8e:function(t,e,n){"use strict";n.r(e);var r=n("4077"),i=n("48f6");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("05b3");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},edb7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("2f76"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{wxsProps:{}}},components:{luButtonRipple:r.default}};e.default=o},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,c,s,l){var u,d="function"===typeof t?t.options:t;if(s){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in s)f.call(s,p)&&!f.call(d.components,p)&&(d.components[p]=s[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=u):i&&(u=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(d.functional){d._injectStyles=u;var b=d.render;d.render=function(t,e){return u.call(e),b(t,e)}}else{var g=d.beforeCreate;d.beforeCreate=g?[].concat(g,u):[u]}return{exports:t,options:d}}n.d(e,"a",(function(){return r}))},f772:function(t,e,n){var r=n("45ac");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("7f7e").default;i("c1efc396",r,!0,{sourceMap:!1,shadowMode:!1})}});