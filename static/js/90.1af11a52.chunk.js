"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[90],{7090:function(e,t,n){n.r(t);var a=n(9439),r=n(2791),u=n(1243),c=n(1087),i=n(7689),s=n(184);t.default=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],o=t[1],l=(0,r.useState)(""),h=(0,a.Z)(l,2),f=h[0],m=h[1],d=(0,c.lr)(),p=(0,a.Z)(d,2),g=p[0],v=p[1],x=(0,i.TH)(),b=g.get("movie"),j=(0,r.useState)((function(){return b||""})),k=(0,a.Z)(j,2),S=k[0],_=k[1];return(0,r.useEffect)((function(){""!==S&&u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US&query=".concat(S,"&page=1&include_adult=false")).then((function(e){m(e.data.results)}))}),[S]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),v({movie:n}),_(n)},children:[(0,s.jsx)("input",{type:"text",name:"search",value:n,onChange:function(e){o(e.currentTarget.value)}}),(0,s.jsx)("label",{htmlFor:"search"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),f.length>1&&(0,s.jsx)("ul",{children:f.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:x},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=90.1af11a52.chunk.js.map