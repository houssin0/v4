(this["webpackJsonpuilib-react-admin"]=this["webpackJsonpuilib-react-admin"]||[]).push([[89],{1042:function(e,t,n){"use strict";var r=n(839),a=n(162),c=n(792),i=n(808),o=n(288),s=n(29),u=n(117),d=n(0);t.a=function(e){var t=e.btnText,n=Object(u.b)().t;return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(s.c,{paddingX:3,paddingY:2,children:n("Order Summery")}),Object(d.jsxs)(a.a,{paddingX:3,children:[Object(d.jsxs)(o.a,{my:2.5,children:[Object(d.jsx)(s.e,{children:n("Subtotal")}),Object(d.jsx)(s.e,{children:"$215"})]}),Object(d.jsxs)(o.a,{my:2.5,children:[Object(d.jsx)(s.e,{children:n("Discount")}),Object(d.jsx)(s.e,{children:"15%"})]}),Object(d.jsxs)(o.a,{my:2.5,children:[Object(d.jsx)(s.e,{children:n("Shipping Cost")}),Object(d.jsx)(s.e,{children:"$50"})]})]}),Object(d.jsx)(c.a,{}),Object(d.jsxs)(a.a,{paddingX:3,children:[Object(d.jsxs)(o.a,{my:2,children:[Object(d.jsx)(s.c,{children:n("Total")}),Object(d.jsx)(s.c,{color:"primary.main",children:"$285"})]}),Object(d.jsx)(i.a,{variant:"contained",fullWidth:!0,children:t||"Proceed to payment"})]}),Object(d.jsx)(a.a,{sx:{textAlign:"center",marginTop:5,padding:0},children:Object(d.jsx)("img",{src:"/static/illustration/cart-page.svg",alt:""})})]})}},1343:function(e,t,n){"use strict";n.r(t);var r=n(162),a=n(838),c=n(10),i=n(4),o=n(878),s=n(74),u=n(0),d=Object(s.a)(Object(u.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove"),b=n(744),j=n(839),l=n(808),p=n(13),m=n(143),f=n(40),h=n(29),O=n(1),x=Object(p.a)(b.a)((function(e){var t=e.theme;return{width:30,height:30,borderRadius:"10px",backgroundColor:"light"===t.palette.mode?t.palette.secondary[200]:t.palette.divider}})),v=Object(p.a)(j.a)((function(){return{display:"flex",flexWrap:"wrap",alignItems:"center",padding:"1rem 2rem",marginBottom:"1.5rem",justifyContent:"space-between"}})),g=Object(p.a)(r.a)((function(e){var t=e.theme;return Object(i.a)({},t.breakpoints.down(868),{marginTop:16})})),w=function(e){var t=e.item,n=Object(O.useState)(t.quantity),a=Object(c.a)(n,2),i=a[0],s=a[1];return Object(u.jsxs)(v,{children:[Object(u.jsxs)(f.a,{alignItems:"center",children:[Object(u.jsx)(m.a,{src:t.image,sx:{width:60,height:60,borderRadius:"10%"}}),Object(u.jsxs)(r.a,{marginLeft:2,children:[Object(u.jsx)(h.e,{lineHeight:1.5,children:t.name}),Object(u.jsxs)(h.e,{lineHeight:1.5,children:["$",t.price]}),Object(u.jsx)(h.h,{color:"text.disabled",children:t.stock>0?"In Stock":"Out of Stock"})]})]}),Object(u.jsx)(g,{children:i>0?Object(u.jsxs)(f.a,{alignItems:"center",children:[Object(u.jsx)(x,{sx:{backgroundColor:"action.hover"},onClick:function(){return s((function(e){return e+1}))},children:Object(u.jsx)(o.a,{sx:{color:"text.disabled",fontSize:16}})}),Object(u.jsx)(h.e,{width:40,textAlign:"center",children:i}),Object(u.jsx)(x,{sx:{backgroundColor:"action.hover"},onClick:function(){return s((function(e){return e>0?e-1:e}))},children:Object(u.jsx)(d,{sx:{color:"text.disabled",fontSize:16}})})]}):Object(u.jsx)(l.a,{variant:"contained",onClick:function(){return s(i+1)},children:"Add To Cart"})})]})},k=n(1042),S=[{image:"/static/products/shoe-4.png",name:"Nike Pro Max 270",price:450,stock:48,quantity:2},{image:"/static/products/light.png",name:"Nike Lamp Light",price:450,stock:48,quantity:1},{image:"/static/products/chair.png",name:"Comfortable Chair",price:450,stock:48,quantity:3}];t.default=function(){return Object(u.jsx)(r.a,{pt:2,pb:4,children:Object(u.jsxs)(a.a,{container:!0,spacing:3,children:[Object(u.jsx)(a.a,{item:!0,md:7,sm:7,xs:12,children:S.map((function(e,t){return Object(u.jsx)(w,{item:e},t)}))}),Object(u.jsx)(a.a,{item:!0,md:5,sm:5,xs:12,children:Object(u.jsx)(k.a,{})})]})})}},838:function(e,t,n){"use strict";var r=n(33),a=n(4),c=n(9),i=n(2),o=n(1),s=n(11),u=n(45),d=n(733),b=n(442),j=n(13),l=n(18),p=n(48);var m=o.createContext(),f=n(116),h=n(100);function O(e){return Object(h.a)("MuiGrid",e)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=Object(f.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(r.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(r.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(r.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(r.a)(x.map((function(e){return"grid-xs-".concat(e)}))),Object(r.a)(x.map((function(e){return"grid-sm-".concat(e)}))),Object(r.a)(x.map((function(e){return"grid-md-".concat(e)}))),Object(r.a)(x.map((function(e){return"grid-lg-".concat(e)}))),Object(r.a)(x.map((function(e){return"grid-xl-".concat(e)}))))),g=n(0),w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function S(e){var t=e.breakpoints,n=e.values,r="";Object.keys(n).forEach((function(e){""===r&&0!==n[e]&&(r=e)}));var a=Object.keys(t).sort((function(e,n){return t[e]-t[n]}));return a.slice(0,a.indexOf(r))}var y=Object(j.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.container,c=n.direction,i=n.item,o=n.spacing,s=n.wrap,u=n.zeroMinWidth,d=n.breakpoints,b=[];a&&(b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n["spacing-xs-".concat(String(e))]];var r=[];return t.forEach((function(t){var a=e[t];Number(a)>0&&r.push(n["spacing-".concat(t,"-").concat(String(a))])})),r}(o,d,t));var j=[];return d.forEach((function(e){var r=n[e];r&&j.push(t["grid-".concat(e,"-").concat(String(r))])})),[t.root,a&&t.container,i&&t.item,u&&t.zeroMinWidth].concat(Object(r.a)(b),["row"!==c&&t["direction-xs-".concat(String(c))],"wrap"!==s&&t["wrap-xs-".concat(String(s))]],j)}})((function(e){var t=e.ownerState;return Object(i.a)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,n=e.ownerState,r=Object(u.e)({values:n.direction,breakpoints:t.breakpoints.values});return Object(u.b)({theme:t},r,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(v.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,c=n.rowSpacing,i={};if(r&&0!==c){var o,s=Object(u.e)({values:c,breakpoints:t.breakpoints.values});"object"===typeof s&&(o=S({breakpoints:t.breakpoints.values,values:s})),i=Object(u.b)({theme:t},s,(function(e,n){var r,c=t.spacing(e);return"0px"!==c?Object(a.a)({marginTop:"-".concat(k(c))},"& > .".concat(v.item),{paddingTop:k(c)}):null!=(r=o)&&r.includes(n)?{}:Object(a.a)({marginTop:0},"& > .".concat(v.item),{paddingTop:0})}))}return i}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,c=n.columnSpacing,i={};if(r&&0!==c){var o,s=Object(u.e)({values:c,breakpoints:t.breakpoints.values});"object"===typeof s&&(o=S({breakpoints:t.breakpoints.values,values:s})),i=Object(u.b)({theme:t},s,(function(e,n){var r,c=t.spacing(e);return"0px"!==c?Object(a.a)({width:"calc(100% + ".concat(k(c),")"),marginLeft:"-".concat(k(c))},"& > .".concat(v.item),{paddingLeft:k(c)}):null!=(r=o)&&r.includes(n)?{}:Object(a.a)({width:"100%",marginLeft:0},"& > .".concat(v.item),{paddingLeft:0})}))}return i}),(function(e){var t,n=e.theme,r=e.ownerState;return n.breakpoints.keys.reduce((function(e,a){var c={};if(r[a]&&(t=r[a]),!t)return e;if(!0===t)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=Object(u.e)({values:r.columns,breakpoints:n.breakpoints.values}),s="object"===typeof o?o[a]:o;if(void 0===s||null===s)return e;var d="".concat(Math.round(t/s*1e8)/1e6,"%"),b={};if(r.container&&r.item&&0!==r.columnSpacing){var j=n.spacing(r.columnSpacing);if("0px"!==j){var l="calc(".concat(d," + ").concat(k(j),")");b={flexBasis:l,maxWidth:l}}}c=Object(i.a)({flexBasis:d,flexGrow:0,maxWidth:d},b)}return 0===n.breakpoints.values[a]?Object.assign(e,c):e[n.breakpoints.up(a)]=c,e}),{})}));var M=function(e){var t=e.classes,n=e.container,a=e.direction,c=e.item,i=e.spacing,o=e.wrap,s=e.zeroMinWidth,u=e.breakpoints,d=[];n&&(d=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];var n=[];return t.forEach((function(t){var r=e[t];if(Number(r)>0){var a="spacing-".concat(t,"-").concat(String(r));n.push(a)}})),n}(i,u));var j=[];u.forEach((function(t){var n=e[t];n&&j.push("grid-".concat(t,"-").concat(String(n)))}));var l={root:["root",n&&"container",c&&"item",s&&"zeroMinWidth"].concat(Object(r.a)(d),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==o&&"wrap-xs-".concat(String(o))],j)};return Object(b.a)(l,O,t)},W=o.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiGrid"}),r=Object(p.a)().breakpoints,a=Object(d.a)(n),u=a.className,b=a.columns,j=a.columnSpacing,f=a.component,h=void 0===f?"div":f,O=a.container,x=void 0!==O&&O,v=a.direction,k=void 0===v?"row":v,S=a.item,W=void 0!==S&&S,N=a.rowSpacing,C=a.spacing,z=void 0===C?0:C,R=a.wrap,T=void 0===R?"wrap":R,G=a.zeroMinWidth,L=void 0!==G&&G,E=Object(c.a)(a,w),B=N||z,q=j||z,A=o.useContext(m),H=x?b||12:A,I={},$=Object(i.a)({},E);r.keys.forEach((function(e){null!=E[e]&&(I[e]=E[e],delete $[e])}));var P=Object(i.a)({},a,{columns:H,container:x,direction:k,item:W,rowSpacing:B,columnSpacing:q,wrap:T,zeroMinWidth:L,spacing:z},I,{breakpoints:r.keys}),X=M(P);return Object(g.jsx)(m.Provider,{value:H,children:Object(g.jsx)(y,Object(i.a)({ownerState:P,className:Object(s.a)(X.root,u),as:h,ref:t},$))})}));t.a=W},839:function(e,t,n){"use strict";var r=n(2),a=n(9),c=n(1),i=n(11),o=n(442),s=n(13),u=n(18),d=n(807),b=n(116),j=n(100);function l(e){return Object(j.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var p=n(0),m=["className","raised"],f=Object(s.a)(d.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=c.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiCard"}),c=n.className,s=n.raised,d=void 0!==s&&s,b=Object(a.a)(n,m),j=Object(r.a)({},n,{raised:d}),h=function(e){var t=e.classes;return Object(o.a)({root:["root"]},l,t)}(j);return Object(p.jsx)(f,Object(r.a)({className:Object(i.a)(h.root,c),elevation:d?8:void 0,ref:t,ownerState:j},b))}));t.a=h},878:function(e,t,n){"use strict";var r=n(74),a=n(0);t.a=Object(r.a)(Object(a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")}}]);
//# sourceMappingURL=89.ca6f9913.chunk.js.map