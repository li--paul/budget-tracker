(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[17],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e,t,n){Object(r.useEffect)((function(){return n.onTitleChange(e),n.onActions(t),function(){n.onTitleChange(""),n.onActions(void 0)}}),[])}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";e.length>2?e.goBack():e.replace(t)}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(36),a=n(0),c=n(41),o=n(195),i=n(94);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){var t={component:e.to?c.b:void 0};return e.onClick&&e.to&&console.warn("Button should not have both onClick and href properties"),t}var f=function(e){return a.createElement(i.a,Object.assign({color:"inherit"},e,s(e)),e.icon&&a.createElement(e.icon,null))};var b=function(e){return a.createElement(o.a,Object.assign({style:l({position:"fixed",bottom:"1rem",zIndex:10},(t=e.color,"primary"===t||void 0===t?{right:"1rem"}:{left:"1rem"})),color:e.color||"secondary"},e,s(e)),e.children);var t}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(0),a=n(52),c=n.n(a),o=n(141),i=n(94),u=function(e){return r.createElement(i.a,Object.assign({color:"inherit","aria-label":"Close"},e,{onClick:e.onClick}),r.createElement(c.a,null))},l=function(e){return r.createElement(u,{onClick:function(){Object(o.a)(e.history,e.to)}})}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n(318),c=function(e){return r.createElement(a.a,Object.assign({id:"input-field-".concat(e.label),style:{margin:8},margin:"dense"},e))}},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(188),c=n.n(a),o=n(142),i=function(e){return r.createElement(o.a,Object.assign({icon:c.a,"aria-label":"Delete"},e))}},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(174),c=n.n(a),o=n(142),i=function(e){return r.createElement(o.b,Object.assign({"aria-label":"Save"},e),r.createElement(c.a,null))}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r),c=n(198),o=n(325),i=n(257),u=n(255),l=n(256),s=n(254),f=n(51),b=function(e){var t=function(){return e.onClose(!1)},n=Object(f.a)();return a.a.createElement(o.a,{open:e.open,onClose:t,"aria-labelledby":"y-n-dialog-title","aria-describedby":"y-n-dialog-description"},a.a.createElement(s.a,{id:"y-n-dialog-title"},e.question),e.description&&a.a.createElement(u.a,null,a.a.createElement(l.a,{id:"y-n-dialog-description"},e.description)),a.a.createElement(i.a,null,a.a.createElement(c.a,{onClick:t,color:"primary"},n("Disagree")),a.a.createElement(c.a,{onClick:function(){return e.onClose(!0)},color:"primary",autoFocus:!0},n("Agree"))))}},167:function(e,t,n){"use strict";var r=n(0),a=n(2),c=n.n(a),o=n(4),i=n(16),u=n(40);t.a=function(e){var t=e.name,n=function(e){var t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],l=n[1],s=Object(u.b)();return Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.getIconsStore();case 2:n=t.sent,l(n.getIcon(e));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var n=!0;return n&&function(){t.apply(this,arguments)}(),function(){n=!1}}),[e,s]),a}(t);return r.createElement(r.Suspense,{fallback:t},n?r.createElement(n.Icon,{style:{color:n.color}}):null)}},184:function(e,t,n){"use strict";var r=n(36),a=n(16),c=n(0),o=n(197),i=n(149),u=n(198),l=n(167),s=function(e){var t=e.name;return c.createElement(u.a,{onClick:function(){return e.onClick(t)},variant:"outlined"},c.createElement(l.a,{name:t}))},f=s,b=n(325),p=n(254),m=n(255),d=n(2),g=n.n(d),y=n(4),O=n(40);var v=function(e){function t(t){e.onClose(t)}var n=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(O.b)();return Object(c.useEffect)((function(){function e(){return(e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getIconsStore();case 2:t=e.sent,r(t.iconNames);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=!0;return t&&function(){e.apply(this,arguments)}(),function(){t=!1}}),[o]),n}();return c.createElement(b.a,{onClose:function(){e.onClose(e.selectedValue)},"aria-labelledby":"dialog-title",open:e.open},c.createElement(p.a,{id:"dialog-title"},"Select icon for category"),c.createElement(m.a,null,c.createElement(o.a,{container:!0,direction:"row",justify:"center"},n&&n.map((function(e){return c.createElement(s,{onClick:t,name:e,key:"icon-".concat(e)})})))))},j=n(156),E=n(162),h=n(51);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=c.useState(!1),n=Object(a.a)(t,2),r=n[0],u=n[1],l=c.useState(!1),s=Object(a.a)(l,2),b=s[0],p=s[1],m=c.useState(e.category),d=Object(a.a)(m,2),g=d[0],y=d[1],O=Object(h.a)();return c.createElement(c.Fragment,null,c.createElement(o.a,{container:!0,direction:e.direction||"row",wrap:"nowrap"},c.createElement(o.a,{item:!0},c.createElement(i.a,{label:"row"===e.direction?"":O("Name"),value:g.name,onChange:function(t){t.preventDefault();var n=t.target.value,r=w({},g,{name:n});y(r),e.onChange(r)}})),c.createElement(o.a,{item:!0},c.createElement(f,{name:g.icon,onClick:function(){u(!0)}})),e.onDelete&&c.createElement(o.a,{item:!0},c.createElement(j.a,{onClick:function(){p(!0)}}))),c.createElement(v,{onClose:function(t){if(g.icon!==t){var n=w({},g,{icon:t});y(n),e.onChange(n)}u(!1)},open:r,selectedValue:g.icon}),c.createElement(E.a,{open:b,onClose:function(t){p(!1),e.onDelete&&t&&e.onDelete(e.category.identifier)},question:'Do your really want to delete "'.concat(e.category.name,'" category?'),description:"The expenses assigned to this category will be assigned to default."}))}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(16),a=n(0),c=n(184),o=n(158),i=n(58),u=function(e){var t=a.useState(e.category||{name:"",icon:"Label",identifier:Object(i.a)()}),n=Object(r.a)(t,2),u=n[0],l=n[1];return a.createElement("form",{onSubmit:function(t){t.stopPropagation(),t.preventDefault(),e.onSubmit(u)}},a.createElement(c.a,{category:u,onChange:l}),a.createElement(o.a,{type:"submit",color:"primary",disabled:""===u.name}))}},263:function(e,t,n){"use strict";n.r(t),n.d(t,"AddCategory",(function(){return m}));var r=n(2),a=n.n(r),c=n(4),o=n(0),i=n(206),u=n(141),l=n(37),s=n(144),f=n(40),b=n(140),p=n(51),m=function(e){var t=Object(f.b)(),n=Object(p.a)();function r(){return(r=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getCategoriesStore();case 2:return n.t0=[r],n.next=5,n.sent.setCategories(n.t0);case 5:Object(u.a)(e.history,l.a.List);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(b.a)(n("Add category"),o.createElement(s.b,{history:e.history}),e),o.createElement(i.a,{onSubmit:function(e){return r.apply(this,arguments)}})};t.default=m}}]);
//# sourceMappingURL=17.091aac10.chunk.js.map