(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("d9c2")},"1ac1":function(e,t,n){"use strict";var r=n("f411"),a=n.n(r);a.a},bcd5:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("游戏记录表")]),n("div",{staticClass:"game"},[n("div",{staticClass:"gamer"},[n("header",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"inputGamer form-control",attrs:{placeholder:"添加玩家"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("button",{staticClass:"buttonGamer btn btn-primary",on:{click:e.handleClickAddGamer}},[e._v("添加玩家")]),n("button",{staticClass:"buttonGamer btn btn-danger",on:{click:e.handleClickDeleteGamer}},[e._v("删除玩家")])]),n("div",[n("button",{staticClass:"gameover btn btn-success form-control",on:{click:e.handleClickGameover}},[e._v("结束游戏")])])]),n("main",[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[e._v("轮数")]),e._l(e.gamers,(function(t,r){return n("th",{key:r},[e._v(e._s(t.name))])})),n("th",[e._v("操作")])],2)]),n("tbody",[n("tr",[n("td",[e._v("增量")]),e._l(e.gamers,(function(t,r){return n("td",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.delta,expression:"g.delta",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.delta},on:{input:function(n){n.target.composing||e.$set(t,"delta",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})])})),n("td",[n("button",{staticClass:"btn btn-primary",on:{click:e.handleClickRecord}},[e._v("记录")])])],2),n("tr",[n("td",[e._v("总计")]),e._l(e.total,(function(t,r){return n("td",[e._v(e._s(t))])}))],2),e._l(e.records,(function(t,r){return n("tr",[n("td",[e._v(e._s(e.records.length-r))]),e._l(t,(function(t,r){return n("td",[e._v(e._s(t))])})),n("td",[r?e._e():n("button",{staticClass:"cancel btn btn-danger",on:{click:e.handleClickCancel}},[e._v("撤销")])])],2)}))],2)])])])]),n("div",{staticClass:"games"},e._l(e.games,(function(t,r){return n("div",{staticClass:"game"},[n("h5",[e._v(e._s(t.date))]),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[e._v("轮数")]),e._l(t.gamers,(function(t,r){return n("th",{key:r},[e._v(e._s(t.name))])}))],2)]),n("tbody",[n("tr",[n("td",[e._v("总计")]),e._l(e.getTotal(t.gamers),(function(t,r){return n("td",[e._v(e._s(t))])}))],2),e._l(e.getRecords(t.gamers),(function(r,a){return n("tr",[n("td",[e._v(e._s(e.getRecords(t.gamers).length-a))]),e._l(r,(function(t,r){return n("td",[e._v(e._s(t))])}))],2)}))],2)]),n("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.handleClickDeleteGame(r)}}},[e._v("删除记录")])])})),0)])},a=[],s=(n("29e5"),n("beb6"),n("d1ce"),n("86e4"),n("a1a1"),n("094e"),n("918e"),n("9b54"),n("ef62"),n("2a53"),n("3d48"),n("fe2e")),o=(n("ab8b"),n("3e48"),n("7ba3")),i=n.n(o),c={name:"App",data:function(){return{gamers:[],name:"",games:[]}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.getItem("gamers");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:return this.gamers=e.t0,e.next=8,i.a.getItem("games");case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1=[];case 11:this.games=e.t1;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{records:function(){return this.getRecords(this.gamers)},total:function(){return this.getTotal(this.gamers)}},watch:{gamers:{handler:function(e){i.a.setItem("gamers",e)},deep:!0},games:{handler:function(e){i.a.setItem("games",e)},deep:!0}},methods:{getRecords:function(e){var t=[];if(e.length)for(var n=0;n<e[0].records.length;n++){for(var r=[],a=0;a<e.length;a++)r.push(e[a].records[n]);t.unshift(r)}return t},getTotal:function(e){return e.map((function(e){return e.records.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0)}))},handleClickAddGamer:function(){this.name&&!this.gamers.map((function(e){return e.name})).includes(this.name)&&(this.gamers.push({name:this.name,delta:0,records:[]}),this.name="")},handleClickDeleteGamer:function(){this.gamers.length&&this.gamers.pop()},handleClickRecord:function(){this.gamers.forEach((function(e){e.records.push(parseInt(e.delta))}))},handleClickCancel:function(){this.gamers.forEach((function(e){e.records.pop()}))},handleClickGameover:function(){this.records.length&&(this.games.unshift({date:(new Date).toLocaleString(),gamers:this.gamers}),this.gamers=[])},handleClickDeleteGame:function(e){this.games.splice(e,1)}}},u=c,l=(n("1ac1"),n("2bcb")),d=Object(l["a"])(u,r,a,!1,null,"017fb3bc",null);t["a"]=d.exports},f411:function(e,t,n){}});
//# sourceMappingURL=app.63dec082.js.map