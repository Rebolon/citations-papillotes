import{a as S}from"./chunk-J55U6K2W.js";import{j as l}from"./chunk-HKLPJZQ3.js";import{$a as g,Da as s,Fa as C,Ga as v,Ka as f,La as u,Ma as c,Sa as x,Ua as y,Ya as p,aa as a,ab as T,ta as d,ua as o,ub as b,yb as m}from"./chunk-BTHD7Z2M.js";var j=(()=>{let t=class t{constructor(n,e){this.citesService=n,this.title=e,this.title.setTitle("Citations - Citation du jour")}};t.\u0275fac=function(e){return new(e||t)(o(l),o(m))},t.\u0275cmp=a({type:t,selectors:[["app-cite"]],inputs:{cite:"cite"},standalone:!0,features:[p],decls:4,vars:2,consts:[[1,"my-4","text-3xl","md:text-5xl","text-violet-800","font-bold","leading-tight","text-center","md:text-left","slide-in-bottom-h1"],[1,"leading-normal","text-base","md:text-2xl","mb-8","text-center","md:text-left","slide-in-bottom-subtitle"],[3,"author"]],template:function(e,r){e&1&&(f(0,"h1",0),x(1),u(),f(2,"p",1),c(3,"app-link-cites-by-author",2),u()),e&2&&(d(1),y(" ",r.cite.getCite()," "),d(2),s("author",r.cite.getAuthor()))},dependencies:[S],encapsulation:2});let i=t;return i})();function M(i,t){i&1&&c(0,"app-cite",0),i&2&&s("cite",t)}var E=(()=>{let t=class t{constructor(n,e){this.citesService=n,this.title=e,this.title.setTitle("Citations - Citation du jour")}};t.\u0275fac=function(e){return new(e||t)(o(l),o(m))},t.\u0275cmp=a({type:t,selectors:[["app-home"]],standalone:!0,features:[p],decls:2,vars:3,consts:[[3,"cite"]],template:function(e,r){if(e&1&&(C(0,M,1,1,"app-cite",0),g(1,"async")),e&2){let h;v(0,(h=T(1,1,r.citesService.getCiteOfTheDay()))?0:-1,h)}},dependencies:[b,j],encapsulation:2});let i=t;return i})();export{E as HomeComponent};
