import './polyfills.server.mjs';
import{a as F}from"./chunk-SPQDYUHZ.mjs";import{b as l}from"./chunk-LZIJJ2NM.mjs";import"./chunk-Y7TPO2NZ.mjs";import{$a as f,Ca as d,Da as o,Sa as x,Va as s,Wa as y,X as C,Yb as j,Z as v,_ as a,_a as u,ab as c,ic as m,jb as g,lb as T,ob as p,rb as S,sb as b}from"./chunk-DRGC2GBD.mjs";import"./chunk-K7YHPIF3.mjs";var I=(()=>{let t=class t{constructor(n,e){this.citesService=n,this.title=e,this.cite=C.required(),this.title.setTitle("Citations - Citation du jour")}};t.\u0275fac=function(e){return new(e||t)(o(l),o(m))},t.\u0275cmp=a({type:t,selectors:[["app-cite"]],inputs:{cite:[v.SignalBased,"cite"]},standalone:!0,features:[p],decls:4,vars:2,consts:[[1,"my-4","text-3xl","md:text-5xl","text-violet-800","font-bold","leading-tight","text-center","md:text-left","slide-in-bottom-h1"],[1,"leading-normal","text-base","md:text-2xl","mb-8","text-center","md:text-left","slide-in-bottom-subtitle"],[3,"author"]],template:function(e,r){e&1&&(u(0,"h1",0),g(1),f(),u(2,"p",1),c(3,"app-link-cites-by-author",2),f()),e&2&&(d(),T(" ",r.cite().getCite()," "),d(2),s("author",r.cite().getAuthor()))},dependencies:[F],encapsulation:2});let i=t;return i})();function A(i,t){i&1&&c(0,"app-cite",0),i&2&&s("cite",t)}var L=(()=>{let t=class t{constructor(n,e){this.citesService=n,this.title=e,this.title.setTitle("Citations - Citation du jour")}};t.\u0275fac=function(e){return new(e||t)(o(l),o(m))},t.\u0275cmp=a({type:t,selectors:[["app-home"]],standalone:!0,features:[p],decls:2,vars:3,consts:[[3,"cite"]],template:function(e,r){if(e&1&&(x(0,A,1,1,"app-cite",0),S(1,"async")),e&2){let h;y(0,(h=b(1,1,r.citesService.getCiteOfTheDay()))?0:-1,h)}},dependencies:[j,I],encapsulation:2});let i=t;return i})();export{L as HomeComponent};
