"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[810],{2639:function(e,t,s){s.d(t,{Z:function(){return n}});var r=s(8966),o="Loader_loader__+lRPl",a=s(184),n=function(){return(0,a.jsx)("div",{className:o,children:(0,a.jsx)(r.rj,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0})})}},3810:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var r=s(9439),o=s(2791),a=s(1243),n=s(1087),i=s(7689),c=s(7596),l=(s(5462),"Movies_form__6yqht"),u="Movies_inputSearch__N2nik",d="Movies_buttonSearch__ANyLv",h="Movies_moviesS__b5wRc",m="Movies_moviesItem__0BQFA",f="Movies_moviesList__ITGt1",p=s(2639),v=s(184),_=function(){var e,t=(0,o.useState)(""),s=(0,r.Z)(t,2),_=s[0],g=s[1],b=(0,n.lr)(""),x=(0,r.Z)(b,2),j=x[0],k=x[1],S=(0,i.TH)(),w=null!==(e=j.get("query"))&&void 0!==e?e:"",y=(0,o.useState)(""),N=(0,r.Z)(y,2),C=N[0],M=N[1],Z=(0,o.useState)((function(){return w})),F=(0,r.Z)(Z,2),O=F[0],L=F[1];return(0,o.useEffect)((function(){""!==O&&(M("loader"),a.Z.get("https://api.themoviedb.org/3/search/movie?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US&query=".concat(O,"&page=1&include_adult=false")).then((function(e){g(e.data.results),M(e.data.results.length>0?"success":"notFound")})).catch((function(e){console.log(e.message),M("error"),c.Am.error("".concat(e.message),{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})))}),[O]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{action:"",className:l,onSubmit:function(e){e.preventDefault(),L(w)},children:[(0,v.jsx)("input",{className:u,type:"text",name:"search",value:w,onChange:function(e){k({query:e.target.value})}}),(0,v.jsx)("label",{htmlFor:"search"}),(0,v.jsx)("button",{className:d,type:"submit",children:"Search"})]}),"success"===C&&(0,v.jsx)("ul",{className:f,children:_.map((function(e){return(0,v.jsx)("li",{className:m,children:(0,v.jsx)(n.rU,{className:h,to:"/movies/".concat(e.id),state:{from:S},children:e.title})},e.id)}))}),"notFound"===C&&(0,v.jsx)("div",{children:"Movies not found"}),"loader"===C&&(0,v.jsx)(p.Z,{}),"error"===C&&(0,v.jsx)(c.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}}}]);
//# sourceMappingURL=810.99153340.chunk.js.map