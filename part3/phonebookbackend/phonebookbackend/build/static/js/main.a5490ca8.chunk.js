(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),o=t(6),u=t(3),a=t(2),i=t(4),s=t.n(i),d="/api/persons",b={getAll:function(){return s.a.get(d).then((function(e){return e.data}))},create:function(e){return s.a.post(d,e).then((function(e){return e.data}))},update:function(e){return s.a.put("".concat(d,"/").concat(e.id),e).then((function(e){return e.data}))},remove:function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))}},l=t(0),j=function(e){var n=e.filter,t=e.setFilter;return Object(l.jsxs)("div",{children:["filter shown with",Object(l.jsx)("input",{value:n,onChange:function(e){return t(e.target.value)}})]})},f=function(e){var n=e.createPerson,t=e.name,r=e.setName,c=e.number,o=e.setNumber;return Object(l.jsxs)("form",{onSubmit:n,children:[Object(l.jsxs)("div",{children:["name:",Object(l.jsx)("input",{value:t,onChange:function(e){return r(e.target.value)}})]}),Object(l.jsxs)("div",{children:["number:",Object(l.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"add"})]})},m=function(e){var n=e.persons,t=e.removePerson;return Object(l.jsx)("div",{children:n.map((function(e){return Object(l.jsx)(h,{person:e,removePerson:function(){return t(e)}},e.id)}))})},h=function(e){var n=e.person,t=e.removePerson;return Object(l.jsxs)("p",{children:[n.name," ",n.number,Object(l.jsx)("button",{onClick:t,children:"delete"})]})},O=function(e){var n=e.message,t=e.isSuccessfulOperation?{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:Object(l.jsx)("div",{style:t,children:n})},p=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],h=Object(a.useState)(""),p=Object(u.a)(h,2),v=p[0],g=p[1],x=Object(a.useState)(""),w=Object(u.a)(x,2),S=w[0],k=w[1],y=Object(a.useState)(!0),P=Object(u.a)(y,2),C=P[0],N=P[1],A=Object(a.useState)(null),B=Object(u.a)(A,2),D=B[0],R=B[1];Object(a.useEffect)((function(){b.getAll().then((function(e){return r(e)}))}),[]);var z=function(e){var n=Object(o.a)(Object(o.a)({},e),{},{number:S});window.confirm(v+" is already added to phonebook, replace the old number with a new one?")&&b.update(n).then((function(n){r(t.map((function(t){return t.id!==e.id?t:n}))),E(),F("Replaced ".concat(e.name,"'s number"),!0)})).catch((function(){r(t.filter((function(n){return n.id!==e.id}))),F("Information of "+e.name+" has already been removed from server",!1)}))},E=function(){g(""),k("")},F=function(e,n){N(n),R(e),setTimeout((function(){return R(null)}),5e3)},I=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(O,{message:D,isSuccessfulOperation:C}),Object(l.jsx)(j,{filter:s,setFilter:d}),Object(l.jsx)("h2",{children:"Add a new"}),Object(l.jsx)(f,{createPerson:function(e){e.preventDefault();var n=t.find((function(e){return v===e.name})),c={name:v,number:S};n?z(n):b.create(c).then((function(e){r(t.concat(e)),E(),F("Added ".concat(e.name),!0)}))},name:v,setName:g,number:S,setNumber:k}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)(m,{persons:I,removePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&b.remove(e.id).then((function(){r(t.filter((function(n){return n.id!==e.id}))),F("Deleted ".concat(e.name),!0)}))}})]})};c.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a5490ca8.chunk.js.map