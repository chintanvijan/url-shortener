(this.webpackJsonpshortener=this.webpackJsonpshortener||[]).push([[0],{10:function(e,t,n){},11:function(e,t){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),l=n(3),r=n.n(l),a=(n(10),n.p,n(11),n(4));n.p;var o=function(){var e=Object(s.useState)("undefined"),t=Object(a.a)(e,2),n=t[0],i=t[1];return"undefined"===n?Object(c.jsx)("div",{className:"s130",children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("Here");var t=document.getElementById("search").value;console.log(t),fetch("/post-link?link="+t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return i(e.generated_link),console.log(e),e})).catch((function(e){console.error(e)}))},children:Object(c.jsxs)("div",{className:"inner-form",children:[Object(c.jsxs)("div",{className:"input-field first-wrap",children:[Object(c.jsx)("div",{className:"svg-wrapper",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),Object(c.jsx)("input",{id:"search",type:"text",placeholder:"Paste the link to be shortened ...",name:"link"})]}),Object(c.jsx)("div",{className:"input-field second-wrap",children:Object(c.jsx)("button",{className:"btn-search",type:"submit",children:"SHORTEN"})})]})})}):Object(c.jsx)("div",{className:"s130",children:Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"inner-form",children:[Object(c.jsxs)("div",{className:"input-field first-wrap",children:[Object(c.jsx)("div",{className:"svg-wrapper",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),Object(c.jsx)("input",{id:"search",type:"text",placeholder:"Paste the link to be shortened ...",name:"link",value:n})]}),Object(c.jsx)("div",{className:"input-field second-wrap",children:Object(c.jsx)("button",{className:"btn-search",type:"button",onClick:function(e){var t=document.getElementById("search");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")},children:"COPY"})})]})})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),i(e),l(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(o,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.6ea4aa49.chunk.js.map