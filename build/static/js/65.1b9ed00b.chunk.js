(this["webpackJsonpuilib-react-admin"]=this["webpackJsonpuilib-react-admin"]||[]).push([[65],{1045:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s}));var o=a(4),r=a(13),c=a(808),n=a(162),i=a(1340),l=Object(r.a)(c.a)((function(e){var t=e.theme;return Object(o.a)({width:"48%",height:48,fontSize:13,borderRadius:"6px",border:"2px solid",borderColor:t.palette.divider},t.breakpoints.down("sm"),{width:"100%",marginTop:"0.5rem"})})),s=Object(r.a)(n.a)((function(e){var t=e.theme;return Object(o.a)({width:"48%"},t.breakpoints.down("sm"),{width:"100%",marginTop:"0.5rem"})}));Object(r.a)(i.a)((function(e){e.theme;return{"& .MuiOutlinedInput-input":{minHeight:30},"& .MuiOutlinedInput-notchedOutline":{}}}))},1295:function(e,t,a){"use strict";a.r(t);var o=a(10),r=a(1249),c=a(839),n=a(162),i=a(792),l=a(899),s=a(921),d=a(1363),b=a(808),u=a(288),h=a(831),m=a(830),j=a(29),p=a(863),O=a(295),g=a(911),f=a(919),v=a(1045),x=a(1),w=a(296),C=a.n(w),y=a(16),S=a(81),k=a(864),M=a(0);t.default=function(){var e=Object(O.a)().login,t=Object(x.useState)(""),a=Object(o.a)(t,2),w=a[0],I=a[1],L=Object(x.useState)(!1),P=Object(o.a)(L,2),R=P[0],z=P[1],B=Object(y.m)(),H=k.e().shape({email:k.g().email("Must be a valid email").max(255).required("Email is required"),password:k.g().min(6,"Password should be of minimum 6 characters length").required("Password is required")}),T=Object(p.d)({initialValues:{email:"demo@example.com",password:"123456",submit:null,remember:!0},validationSchema:H,onSubmit:function(t){z(!0),e(t.email,t.password).then((function(){z(!1),C.a.success("You Logged In Successfully test"),B("/dashboard/sales")})).catch((function(e){I(e.message),z(!1)}))}}),W=T.errors,D=T.values,F=T.touched,V=T.handleBlur,N=T.handleChange,A=T.handleSubmit;return Object(M.jsx)(h.a,{flexDirection:"column",sx:{height:{sm:"100%"}},children:Object(M.jsxs)(c.a,{sx:{padding:4,maxWidth:600,boxShadow:1},children:[Object(M.jsxs)(h.a,{flexDirection:"column",mb:5,children:[Object(M.jsx)(n.a,{width:38,mb:1,children:Object(M.jsx)("img",{src:"/static/logo/kartlogo.png",width:"100%",alt:"Uko Logo"})}),Object(M.jsx)(j.a,{fontSize:24,fontWeight:700,children:"Sign In to TerryKart"})]}),Object(M.jsxs)(u.a,{flexWrap:"wrap",my:"1rem",children:[Object(M.jsx)(v.a,{startIcon:Object(M.jsx)(f.a,{sx:{mr:1}}),children:"Sign in with Google"}),Object(M.jsx)(v.a,{startIcon:Object(M.jsx)(g.a,{sx:{mr:1}}),children:"Sign in with Facebook"}),Object(M.jsx)(i.a,{sx:{my:3,width:"100%",alignItems:"center"},children:Object(M.jsx)(j.c,{color:"text.disabled",px:1,children:"Or"})}),Object(M.jsxs)("form",{noValidate:!0,onSubmit:A,style:{width:"100%"},children:[Object(M.jsxs)(u.a,{flexWrap:"wrap",children:[Object(M.jsx)(v.b,{children:Object(M.jsx)(m.a,{fullWidth:!0,name:"email",type:"email",label:"Email",onBlur:V,onChange:N,value:D.email||"",error:Boolean(F.email&&W.email),helperText:F.email&&W.email,sx:{mb:{xs:1}}})}),Object(M.jsx)(v.b,{children:Object(M.jsx)(m.a,{fullWidth:!0,name:"password",type:"password",label:"Password",onBlur:V,onChange:N,value:D.password||"",error:Boolean(F.password&&W.password),helperText:F.password&&W.password})})]}),Object(M.jsxs)(u.a,{mt:2,children:[Object(M.jsx)(l.a,{control:Object(M.jsx)(s.a,{name:"remember",checked:D.remember,onChange:N}),label:"Remember Me",sx:{"& .MuiTypography-root":{fontWeight:500}}}),Object(M.jsx)(S.b,{to:"/forget-password",children:Object(M.jsx)(j.h,{color:"secondary.red",children:"Forgot Password?"})})]}),w&&Object(M.jsx)(d.a,{error:!0,sx:{mt:2,fontSize:13,fontWeight:500,textAlign:"center"},children:w}),Object(M.jsx)(n.a,{sx:{mt:4},children:R?Object(M.jsx)(r.a,{loading:!0,fullWidth:!0,variant:"contained",children:"Sign In"}):Object(M.jsx)(b.a,{fullWidth:!0,type:"submit",variant:"contained",children:"Sign In"})})]}),Object(M.jsxs)(j.g,{marginLeft:"auto",marginRight:"auto",mt:2,color:"text.disabled",children:["Don't have an account?"," ",Object(M.jsx)(S.b,{to:"/register",style:{display:"inline-block"},children:Object(M.jsx)(j.h,{color:"primary.main",children:"Create an account"})})]})]})]})})}},830:function(e,t,a){"use strict";var o=a(3),r=a(13),c=a(1340),n=(a(1),a(0)),i=Object(r.a)(c.a)((function(e){var t=e.theme;return{"& .MuiOutlinedInput-input":{fontWeight:500,height:"0.em"},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"8px",borderColor:t.palette.action.disabled},"& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.action.hover,width:"80%"},"& .MuiInputLabel-root":{fontWeight:500,color:t.palette.text.disabled},"& .MuiInputLabel-root.Mui-focused":{fontWeight:600},"& .MuiSvgIcon-root":{color:t.palette.text.disabled}}}));t.a=function(e){return Object(n.jsx)(i,Object(o.a)({},e))}},831:function(e,t,a){"use strict";var o=a(3),r=a(47),c=a(162),n=a(0),i=["children"];t.a=function(e){var t=e.children,a=Object(r.a)(e,i);return Object(n.jsx)(c.a,Object(o.a)(Object(o.a)({display:"flex",alignItems:"center",justifyContent:"center"},a),{},{children:t}))}},899:function(e,t,a){"use strict";var o=a(4),r=a(9),c=a(2),n=a(1),i=a(11),l=a(442),s=a(165),d=a(817),b=a(19),u=a(13),h=a(18),m=a(116),j=a(100);function p(e){return Object(j.a)("MuiFormControlLabel",e)}var O=Object(m.a)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),g=a(290),f=a(0),v=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],x=Object(u.a)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(o.a)({},"& .".concat(O.label),t.label),t.root,t["labelPlacement".concat(Object(b.a)(a.labelPlacement))]]}})((function(e){var t=e.theme,a=e.ownerState;return Object(c.a)(Object(o.a)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(O.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},Object(o.a)({},"& .".concat(O.label),Object(o.a)({},"&.".concat(O.disabled),{color:(t.vars||t).palette.text.disabled})))})),w=n.forwardRef((function(e,t){var a,o=Object(h.a)({props:e,name:"MuiFormControlLabel"}),u=o.className,m=o.componentsProps,j=void 0===m?{}:m,O=o.control,w=o.disabled,C=o.disableTypography,y=o.label,S=o.labelPlacement,k=void 0===S?"end":S,M=o.slotProps,I=void 0===M?{}:M,L=Object(r.a)(o,v),P=Object(s.a)(),R=w;"undefined"===typeof R&&"undefined"!==typeof O.props.disabled&&(R=O.props.disabled),"undefined"===typeof R&&P&&(R=P.disabled);var z={disabled:R};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof O.props[e]&&"undefined"!==typeof o[e]&&(z[e]=o[e])}));var B=Object(g.a)({props:o,muiFormControl:P,states:["error"]}),H=Object(c.a)({},o,{disabled:R,labelPlacement:k,error:B.error}),T=function(e){var t=e.classes,a=e.disabled,o=e.labelPlacement,r=e.error,c={root:["root",a&&"disabled","labelPlacement".concat(Object(b.a)(o)),r&&"error"],label:["label",a&&"disabled"]};return Object(l.a)(c,p,t)}(H),W=null!=(a=I.typography)?a:j.typography,D=y;return null==D||D.type===d.a||C||(D=Object(f.jsx)(d.a,Object(c.a)({component:"span"},W,{className:Object(i.a)(T.label,null==W?void 0:W.className),children:D}))),Object(f.jsxs)(x,Object(c.a)({className:Object(i.a)(T.root,u),ownerState:H,ref:t},L,{children:[n.cloneElement(O,z),D]}))}));t.a=w},911:function(e,t,a){"use strict";var o=a(3),r=a(163),c=a(0);t.a=function(e){return Object(c.jsx)(r.a,Object(o.a)(Object(o.a)({width:"8",height:"16",viewBox:"0 0 8 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(c.jsx)("path",{d:"M6.53945 2.65667H8V0.112667C7.74802 0.078 6.88143 0 5.87218 0C3.76635 0 2.32381 1.32467 2.32381 3.75933V6H0V8.844H2.32381V16H5.1729V8.84467H7.40272L7.75669 6.00067H5.17224V4.04133C5.1729 3.21933 5.39422 2.65667 6.53945 2.65667Z",fill:"#2174D8"})}))}},919:function(e,t,a){"use strict";var o=a(3),r=a(163),c=a(0);t.a=function(e){return Object(c.jsxs)(r.a,Object(o.a)(Object(o.a)({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(c.jsx)("path",{d:"M15.8444 6.4332H15.2V6.4H8V9.6H12.5212C11.8616 11.4628 10.0892 12.8 8 12.8C5.3492 12.8 3.2 10.6508 3.2 8C3.2 5.3492 5.3492 3.2 8 3.2C9.2236 3.2 10.3368 3.6616 11.1844 4.4156L13.4472 2.1528C12.0184 0.8212 10.1072 0 8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 7.4636 15.9448 6.94 15.8444 6.4332Z",fill:"#FFC107"}),Object(c.jsx)("path",{d:"M0.921875 4.2764L3.55028 6.204C4.26148 4.4432 5.98388 3.2 7.99948 3.2C9.22308 3.2 10.3363 3.6616 11.1839 4.4156L13.4467 2.1528C12.0179 0.8212 10.1067 0 7.99948 0C4.92668 0 2.26188 1.7348 0.921875 4.2764Z",fill:"#FF3D00"}),Object(c.jsx)("path",{d:"M7.99993 15.9995C10.0663 15.9995 11.9439 15.2087 13.3635 13.9227L10.8875 11.8275C10.0573 12.4588 9.04291 12.8003 7.99993 12.7995C5.91913 12.7995 4.15233 11.4727 3.48673 9.62109L0.87793 11.6311C2.20193 14.2219 4.89073 15.9995 7.99993 15.9995Z",fill:"#4CAF50"}),Object(c.jsx)("path",{d:"M15.8444 6.43359H15.2V6.40039H8V9.60039H12.5212C12.2057 10.487 11.6373 11.2617 10.8864 11.8288L10.8876 11.828L13.3636 13.9232C13.1884 14.0824 16 12.0004 16 8.00039C16 7.46399 15.9448 6.94039 15.8444 6.43359Z",fill:"#1976D2"})]}))}},921:function(e,t,a){"use strict";var o=a(4),r=a(9),c=a(2),n=a(1),i=a(11),l=a(442),s=a(141),d=a(19),b=a(832),u=a(18),h=a(13),m=a(116),j=a(100);function p(e){return Object(j.a)("MuiSwitch",e)}var O=Object(m.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),g=a(0),f=["className","color","edge","size","sx"],v=Object(h.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat(Object(d.a)(a.edge))],t["size".concat(Object(d.a)(a.size))]]}})((function(e){var t,a=e.ownerState;return Object(c.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},Object(o.a)(t,"& .".concat(O.thumb),{width:16,height:16}),Object(o.a)(t,"& .".concat(O.switchBase),Object(o.a)({padding:4},"&.".concat(O.checked),{transform:"translateX(16px)"})),t))})),x=Object(h.a)(b.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,Object(o.a)({},"& .".concat(O.input),t.input),"default"!==a.color&&t["color".concat(Object(d.a)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:"".concat("light"===a.palette.mode?a.palette.common.white:a.palette.grey[300]),transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},Object(o.a)(t,"&.".concat(O.checked),{transform:"translateX(20px)"}),Object(o.a)(t,"&.".concat(O.disabled),{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:"".concat("light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600])}),Object(o.a)(t,"&.".concat(O.checked," + .").concat(O.track),{opacity:.5}),Object(o.a)(t,"&.".concat(O.disabled," + .").concat(O.track),{opacity:a.vars?a.vars.opacity.switchTrackDisabled:"".concat("light"===a.palette.mode?.12:.2)}),Object(o.a)(t,"& .".concat(O.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,r=e.ownerState;return Object(c.a)({"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.activeChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):Object(s.a)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},Object(o.a)(t,"&.".concat(O.checked),Object(o.a)({color:(a.vars||a).palette[r.color].main,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):Object(s.a)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(O.disabled),{color:a.vars?a.vars.palette.Switch["".concat(r.color,"DisabledColor")]:"".concat("light"===a.palette.mode?Object(s.d)(a.palette[r.color].main,.62):Object(s.b)(a.palette[r.color].main,.55))})),Object(o.a)(t,"&.".concat(O.checked," + .").concat(O.track),{backgroundColor:(a.vars||a).palette[r.color].main}),t))})),w=Object(h.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),C=Object(h.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),y=n.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiSwitch"}),o=a.className,n=a.color,s=void 0===n?"primary":n,b=a.edge,h=void 0!==b&&b,m=a.size,j=void 0===m?"medium":m,O=a.sx,y=Object(r.a)(a,f),S=Object(c.a)({},a,{color:s,edge:h,size:j}),k=function(e){var t=e.classes,a=e.edge,o=e.size,r=e.color,n=e.checked,i=e.disabled,s={root:["root",a&&"edge".concat(Object(d.a)(a)),"size".concat(Object(d.a)(o))],switchBase:["switchBase","color".concat(Object(d.a)(r)),n&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},b=Object(l.a)(s,p,t);return Object(c.a)({},t,b)}(S),M=Object(g.jsx)(C,{className:k.thumb,ownerState:S});return Object(g.jsxs)(v,{className:Object(i.a)(k.root,o),sx:O,ownerState:S,children:[Object(g.jsx)(x,Object(c.a)({type:"checkbox",icon:M,checkedIcon:M,ref:t,ownerState:S},y,{classes:Object(c.a)({},k,{root:k.switchBase})})),Object(g.jsx)(w,{className:k.track,ownerState:S})]})}));t.a=y}}]);
//# sourceMappingURL=65.1b9ed00b.chunk.js.map