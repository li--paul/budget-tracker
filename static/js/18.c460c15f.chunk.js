(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[18],{140:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(e,a,t){Object(n.useEffect)((function(){return t.onTitleChange(e),t.onActions(a),function(){t.onTitleChange(""),t.onActions(void 0)}}),[])}},141:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";e.length>2?e.goBack():e.replace(a)}},144:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return s}));var n=t(0),r=t(52),o=t.n(r),c=t(141),i=t(94),l=function(e){return n.createElement(i.a,Object.assign({color:"inherit","aria-label":"Close"},e,{onClick:e.onClick}),n.createElement(o.a,null))},s=function(e){return n.createElement(l,{onClick:function(){Object(c.a)(e.history,e.to)}})}},171:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),c=t.n(o),i=(t(6),t(5)),l=t(95),s=t(7),d=c.a.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.raised,d=void 0!==s&&s,p=Object(r.a)(e,["classes","className","raised"]);return c.a.createElement(l.a,Object(n.a)({className:Object(i.a)(t.root,o),elevation:d?8:1,ref:a},p))}));a.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},172:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),c=t.n(o),i=(t(6),t(5)),l=t(7),s=c.a.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,d=Object(r.a)(e,["classes","className","component"]);return c.a.createElement(s,Object(n.a)({className:Object(i.a)(t.root,o),ref:a},d))}));a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},178:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),c=t.n(o),i=(t(6),t(5)),l=t(7),s=c.a.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,l=e.classes,s=e.className,d=Object(r.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(n.a)({className:Object(i.a)(l.root,s,!o&&l.spacing),ref:a},d))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiCardActions"})(s)},187:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),c=t.n(o),i=(t(6),t(5)),l=t(7),s=t(133),d=c.a.forwardRef((function(e,a){var t=e.action,o=e.avatar,l=e.classes,d=e.className,p=e.component,u=void 0===p?"div":p,m=e.disableTypography,b=void 0!==m&&m,y=e.subheader,f=e.subheaderTypographyProps,h=e.title,g=e.titleTypographyProps,v=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=h;null==x||x.type===s.a||b||(x=c.a.createElement(s.a,Object(n.a)({variant:o?"body2":"h5",className:l.title,component:"span",display:"block"},g),x));var O=y;return null==O||O.type===s.a||b||(O=c.a.createElement(s.a,Object(n.a)({variant:o?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},f),O)),c.a.createElement(u,Object(n.a)({className:Object(i.a)(l.root,d),ref:a},v),o&&c.a.createElement("div",{className:l.avatar},o),c.a.createElement("div",{className:l.content},x,O),t&&c.a.createElement("div",{className:l.action},t))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(d)},198:function(e,a,t){"use strict";var n=t(3),r=t(1),o=t(0),c=t.n(o),i=(t(6),t(5)),l=t(7),s=t(23),d=t(70),p=t(9),u=c.a.forwardRef((function(e,a){var t=e.children,o=e.classes,l=e.className,s=e.color,u=void 0===s?"default":s,m=e.component,b=void 0===m?"button":m,y=e.disabled,f=void 0!==y&&y,h=e.disableFocusRipple,g=void 0!==h&&h,v=e.endIcon,x=e.focusVisibleClassName,O=e.fullWidth,j=void 0!==O&&O,S=e.size,C=void 0===S?"medium":S,E=e.startIcon,k=e.type,z=void 0===k?"button":k,N=e.variant,w=void 0===N?"text":N,T=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),R=E&&c.a.createElement("span",{className:Object(i.a)(o.startIcon,o["iconSize".concat(Object(p.a)(C))])},E),L=v&&c.a.createElement("span",{className:Object(i.a)(o.endIcon,o["iconSize".concat(Object(p.a)(C))])},v);return c.a.createElement(d.a,Object(r.a)({className:Object(i.a)(o.root,o[w],o["".concat(w).concat("default"!==u&&"inherit"!==u?Object(p.a)(u):"")],l,"medium"!==C&&[o["".concat(w,"Size").concat(Object(p.a)(C))],o["size".concat(Object(p.a)(C))]],f&&o.disabled,j&&o.fullWidth,{inherit:o.colorInherit}[u]),component:b,disabled:f,focusRipple:!g,focusVisibleClassName:Object(i.a)(o.focusVisible,x),ref:a,type:z},T),c.a.createElement("span",{className:o.label},R,t,L))}));a.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4},endIcon:{display:"inherit",marginRight:-4,marginLeft:8},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},200:function(e,a,t){"use strict";var n=t(46);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(50)).default)(r.default.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Sync");a.default=o},217:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),c=t.n(o),i=(t(6),t(5)),l=t(7),s=t(133),d=t(32),p=c.a.forwardRef((function(e,a){var t=e.children,o=e.classes,l=e.className,p=e.disableTypography,u=void 0!==p&&p,m=e.inset,b=void 0!==m&&m,y=e.primary,f=e.primaryTypographyProps,h=e.secondary,g=e.secondaryTypographyProps,v=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),x=c.a.useContext(d.a).dense,O=null!=y?y:t;null==O||O.type===s.a||u||(O=c.a.createElement(s.a,Object(n.a)({variant:x?"body2":"body1",className:o.primary,component:"span"},f),O));var j=h;return null==j||j.type===s.a||u||(j=c.a.createElement(s.a,Object(n.a)({variant:"body2",className:o.secondary,color:"textSecondary"},g),j)),c.a.createElement("div",Object(n.a)({className:Object(i.a)(o.root,l,x&&o.dense,b&&o.inset,O&&j&&o.multiline),ref:a},v),O,j)}));a.a=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(p)},237:function(e,a,t){"use strict";var n=t(46);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(50)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0zm0 0h24v24H0z"}),r.default.createElement("path",{d:"M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z"})),"SyncDisabled");a.default=o},265:function(e,a,t){"use strict";t.r(a),t.d(a,"Sync",(function(){return N}));var n=t(2),r=t.n(n),o=t(4),c=t(16),i=t(0),l=t.n(i),s=t(171),d=t(178),p=t(198),u=t(57),m=t(217),b=t(130),y=t(172),f=t(187),h=t(237),g=t.n(h),v=t(200),x=t.n(v),O=t(134),j=t(41),S=t(26),C=t(144),E=t(40),k=t(140),z=t(51),N=function(e){var a=Object(E.b)(),t=l.a.useState(),n=Object(c.a)(t,2),i=n[0],m=n[1],b=l.a.useState(),h=Object(c.a)(b,2),v=h[0],N=h[1],R=e.history,L=Object(z.a)();function P(){return(P=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getAuth();case 3:return e.next=5,e.sent.startAuth();case 5:t=e.sent,m(!!t),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),N("".concat(L("Error synchronizing account"),". \n                ").concat(L("Try later"),".")),m(!1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function I(){return(I=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getAuth();case 2:return t=e.sent,e.prev=3,e.next=6,t.logout();case 6:m(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),N("".concat(L("Sign out problem"),". \n            ").concat(L("Try later"),".")),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}return Object(k.a)(L("Account sync"),l.a.createElement(C.b,{history:R}),e),l.a.useEffect((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getAuth();case 3:return t=e.sent,e.next=6,t.getUserId();case 6:n=e.sent,m(!!n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),N(a.localization.get("Error signing in")),m(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[a]),l.a.useLayoutEffect((function(){}),[i]),l.a.createElement(s.a,null,v&&l.a.createElement(u.a,{message:v}),l.a.createElement(f.a,{action:void 0===i?l.a.createElement(O.a,null):i?l.a.createElement(x.a,null):l.a.createElement(g.a,null),title:void 0===i?L("Synchronizing")+"...":L(i?"Account synched":"Account not synched")}),l.a.createElement(y.a,null,l.a.createElement(w,null)),l.a.createElement(d.a,null,l.a.createElement(T,{color:i?"secondary":"primary",disabled:void 0===i,onAction:i?function(){m(void 0),function(){I.apply(this,arguments)}()}:function(){m(void 0),function(){P.apply(this,arguments)}()}},L(i?"Logout":"Synchronize")),l.a.createElement(p.a,{component:j.b,to:S.a.Privacy,variant:"text"},L("Privacy policy"))))},w=function(){var e=Object(z.a)();return l.a.createElement(b.a,null,l.a.createElement(m.a,{primary:e("Benefits"),primaryTypographyProps:{variant:"subtitle1"}}),l.a.createElement(m.a,{primary:e("Different devices"),secondary:e("Different devices desc")}),l.a.createElement(m.a,{primary:e("No data loss"),secondary:e("No data loss desc")}))},T=function(e){var a=e.onAction,t=e.disabled,n=e.color,r=e.children;return l.a.createElement(p.a,{onClick:a,disabled:t,color:n},r)};a.default=N}}]);
//# sourceMappingURL=18.c460c15f.chunk.js.map