(this["webpackJsonpcourse-work"]=this["webpackJsonpcourse-work"]||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n(18),a=n.n(o),r=(n(9),n(8)),i=n(6),u=n(0),s=function(t){var e=t.note,n=t.toggle;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:"list-element grid-item",children:[" ",e.content,Object(u.jsx)("button",{className:"imp",onClick:n,children:e.important?"Make not important":"Make important"})]})})},l=n(3),f=n.n(l),m="/api/notes",j=function(){return f.a.get(m).then((function(t){return t.data}))},b=function(t){return f.a.post(m,t).then((function(t){return t.data}))},d=function(t,e){return f.a.put("".concat(m,"/").concat(t),e).then((function(t){return t.data}))},p=function(t){var e=Object(c.useState)([]),n=Object(i.a)(e,2),o=n[0],a=n[1],l=Object(c.useState)(""),f=Object(i.a)(l,2),m=f[0],p=f[1],h=Object(c.useState)(!1),O=Object(i.a)(h,2),g=O[0],x=O[1],v=document.querySelector("textarea");Object(c.useEffect)((function(){j().then((function(t){a(t)}))}),[o.length]);var S=g?o:o.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"heading",children:"Notes"}),Object(u.jsxs)("form",{className:"form",onSubmit:function(t){if(t.preventDefault(),""===v.value)window.alert("Input can't be empty");else{var e={content:m,date:(new Date).toISOString(),important:Math.random()<.5};b(e).then((function(t){a(o.concat(t)),console.log(t)})),console.log(o),p("")}},children:[Object(u.jsx)("textarea",{className:"form-input",type:"text",value:m,onChange:function(t){p(t.target.value)}}),Object(u.jsx)("button",{className:"form-btn",type:"submit",children:"Save"})]}),Object(u.jsx)("button",{className:"toggle-btn",onClick:function(){x(!g)},children:g?"Show Important":"Show All"}),Object(u.jsx)("ul",{className:"note-container",children:S.map((function(t,e){return Object(u.jsx)(s,{note:t,toggle:function(){return function(t){console.log("Importance of ".concat(t," needs to be toggled")),"/api/notes/".concat(t);var e=o.find((function(e){return e.id===t})),n=Object(r.a)(Object(r.a)({},e),{},{important:!e.important});d(t,n).then((function(e){a(o.map((function(n){return n.id!==t?n:e})))}))}(t.id)}},e)}))})]})};a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))},9:function(t,e,n){}},[[42,1,2]]]);
//# sourceMappingURL=main.0e2c1b63.chunk.js.map