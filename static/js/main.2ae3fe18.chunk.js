(this.webpackJsonpnsadecrypt=this.webpackJsonpnsadecrypt||[]).push([[0],[,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var a=t(0),r=t(1),c=t.n(r),n=t(4),o=t.n(n),u=t(2),s=(t(10),t(11),function(A){var e=A.valueTextarea,t=A.setValueTextarea,r=A.setDecryptText;return Object(a.jsxs)("div",{className:"textarea",children:[Object(a.jsx)("textarea",{value:e,onChange:function(A){var e=A.target.value;r(""),t(e.toLowerCase())}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{readOnly:!0,type:"text",size:"6",value:1e5-e.length}),"characters left"]})]})}),l=(t(12),function(A){var e=Object.assign({},A),t=e.setCheckbox,r=e.setValueTextarea,c=e.setDecryptText;return Object(a.jsx)("input",{type:"checkbox",onClick:function(A){A.target.checked?t(!0):t(!1),r(""),c("")}})}),b=(t(13),function(A){var e=A.valueTextarea,t=A.setDecryptText,r=A.checkbox,c=function A(e){var a=e.replaceAll(/([a-z])\1/g,"");a===e?t(a):A(a)};return Object(a.jsx)("input",{type:"button",className:"btn",value:r?"ENCRYPT":"DECRYPT",onClick:r?function(){for(var A=e.replaceAll(/[,.!?:;'"/ \u2014-]/g,""),a="",r="",c=0;c<2;c++)for(var n=0;n<A.length;n++){var o=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,1).repeat(2);A[n]===A[n+1]?(a+=A[n]+o,n++):1===c&&a[n]===a[n+1]?(r+=a[n]+o+a[n],n++):1===c&&a[n]!==a[n+1]?r+=a[n]+(Math.random()<=.6?o:""):a+=A[n]+(Math.random()<=.6?o:"")}t(r)}:function(){return c(e)}})}),i=(t(14),function(A){var e=A.valueTextarea,t=A.setValueTextarea,c=A.setDecryptText,n=Object(r.useState)(!1),o=Object(u.a)(n,2),s=o[0],i=o[1];return Object(a.jsxs)("div",{className:"decrypt-button",children:[Object(a.jsx)(l,{setCheckbox:i,setValueTextarea:t,setDecryptText:c}),Object(a.jsx)(b,{checkbox:s,valueTextarea:e,setDecryptText:c})]})}),h=(t(15),function(A){var e=A.decryptText;return Object(a.jsx)("div",{className:"text-result-block",children:e})}),p=(t(16),function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(a.jsx)("div",{className:"logo-text",children:"Edward Decrypt"})]})}),x=function(){var A=Object(r.useState)(""),e=Object(u.a)(A,2),t=e[0],c=e[1],n=Object(r.useState)(""),o=Object(u.a)(n,2),l=o[0],b=o[1];return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(p,{}),Object(a.jsx)(s,{valueTextarea:t,setValueTextarea:c,setDecryptText:b}),Object(a.jsx)(i,{valueTextarea:t,setValueTextarea:c,setDecryptText:b}),Object(a.jsx)(h,{decryptText:l})]})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.2ae3fe18.chunk.js.map