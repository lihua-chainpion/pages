(function(e){function n(n){for(var t,i,c=n[0],l=n[1],u=n[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);s&&s(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],t=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(t=!1)}t&&(a.splice(n--,1),e=c(c.s=o[0]))}return e}var t={},r={index:0},a=[];function i(e){return c.p+"static/js/"+({"pages-exchange-exchange~pages-index-index":"pages-exchange-exchange~pages-index-index","pages-exchange-exchange":"pages-exchange-exchange","pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-exchange-exchange~pages-index-index":"2cd3f39f","pages-exchange-exchange":"901060e0","pages-index-index":"b2bb4253"}[e]+".js"}function c(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var n=[],o=r[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=t);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var u=new Error;a=function(n){l.onerror=l.onload=null,clearTimeout(d);var o=r[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",u.name="ChunkLoadError",u.type=t,u.request=a,o[1](u)}r[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(o,t,function(n){return e[n]}.bind(null,t));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var s=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("fd0e")},"1fcb":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){}};n.default=t},"527c":function(e,n,o){var t=o("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */.u-line-1{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button::after{border:none}.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.flex-row-wrap-center-center{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}.flex-row-start-center{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.flex-row-center-center{display:flex;flex-direction:row;justify-content:center;align-items:center}.flex-row-between-center{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.flex-col-start-start{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.flex-col-start-center{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.flex-1{flex:1}.m-t-1r{margin-top:1rem}.m-b-1r{margin-bottom:1rem}.m-l-10{margin-left:10px}.m-l-20{margin-left:20px}.m-r-10{margin-right:10px}.p-l-8{padding-left:8px}',""]),e.exports=n},"5e22":function(e,n,o){"use strict";o.r(n);var t=o("eed8"),r=o("cd7c");for(var a in r)"default"!==a&&function(e){o.d(n,e,(function(){return r[e]}))}(a);o("9f4f");var i,c=o("f0c5"),l=Object(c["a"])(r["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);n["default"]=l.exports},"6ca9":function(e,n,o){var t=o("527c");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var r=o("4f06").default;r("cbeec608",t,!0,{sourceMap:!1,shadowMode:!1})},"9f4f":function(e,n,o){"use strict";var t=o("6ca9"),r=o.n(t);r.a},a9ea:function(e,n,o){"use strict";(function(e){var n=o("4ea4");o("13d5"),o("d3b7"),o("ac1f"),o("5319"),o("ddb0");var t=n(o("e143")),r={keys:function(){return[]}};e["____D70909E____"]=!0,delete e["____D70909E____"],e.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.3.11",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=r.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=r(n);return Object.assign(e[o]||(e[o]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,t.default.component("pages-index-index",(function(e){var n={component:Promise.all([o.e("pages-exchange-exchange~pages-index-index"),o.e("pages-index-index")]).then(function(){return e(o("5ea7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-exchange-exchange",(function(e){var n={component:Promise.all([o.e("pages-exchange-exchange~pages-index-index"),o.e("pages-exchange-exchange")]).then(function(){return e(o("667b"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"获取认购资格"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/exchange/exchange",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"换购 ITTC",enablePullDownRefresh:!1})},[e("pages-exchange-exchange",{slot:"page"})])}},meta:{name:"pages-exchange-exchange",isNVue:!1,maxWidth:0,pagePath:"pages/exchange/exchange",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("c8ba"))},cd7c:function(e,n,o){"use strict";o.r(n);var t=o("1fcb"),r=o.n(t);for(var a in t)"default"!==a&&function(e){o.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},eed8:function(e,n,o){"use strict";var t;o.d(n,"b",(function(){return r})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},a=[]},fd0e:function(e,n,o){"use strict";var t=o("4ea4"),r=t(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("a9ea"),o("06b9");var a=t(o("e143")),i=t(o("f385")),c=t(o("5e22"));a.default.use(i.default),a.default.config.productionTip=!1,c.default.mpType="app";var l=new a.default((0,r.default)({},c.default));l.$mount()}});