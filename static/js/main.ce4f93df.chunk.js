(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),s=a(3),c=a(5),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(9),m=a.n(u),j=(a(15),a(0)),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=(a(17),function(e){var t=e.todo;return Object(j.jsxs)("article",{"data-id":t.id,className:m()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(j.jsx)(b,{user:t.user})]})}),f=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})};function O(e){return l.find((function(t){return t.id===e}))||null}var p=function(){var e=Object(o.useState)(d.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})}))),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),u=Object(s.a)(i,2),m=u[0],b=u[1],h=Object(o.useState)(0),p=Object(s.a)(h,2),x=p[0],v=p[1],y=Object(o.useState)(!1),S=Object(s.a)(y,2),N=S[0],I=S[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),""!==m.trim()&&0!==x){var t=O(x),i={id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:m,completed:!1,userId:x,user:t};n((function(e){return[].concat(Object(r.a)(e),[i])})),I(!1),v(0),b("")}else I(!0)},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["Title: ",Object(j.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",placeholder:"Enter a title",value:m,onChange:function(e){b(e.target.value.replace(/[^a-z\s\u0430-\u044f]/gi,""))}})]}),""===m.trim()&&N&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["User: ",Object(j.jsxs)("select",{"data-cy":"userSelect",onChange:function(e){return v(+e.target.value)},children:[Object(j.jsx)("option",{value:"0",selected:0===x,disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(c.a)({},e)})).map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),0===x&&N&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(f,{todos:a})]})};i.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ce4f93df.chunk.js.map