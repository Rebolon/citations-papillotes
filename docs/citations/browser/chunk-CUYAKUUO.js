import{a as b}from"./chunk-KOJZ6LSC.js";import{a as v}from"./chunk-4AQIKSTI.js";import{e as g,v as y}from"./chunk-657E2MCB.js";import{Eb as u,Fb as C,Ja as o,Qa as r,V as p,ca as n,cb as l,fb as d,gb as s,jb as m,kb as a,lb as f,xb as x,zb as h}from"./chunk-NIGT2CQE.js";function S(t,_){if(t&1&&(m(0,"h1",0),x(1),a(),m(2,"p",1),f(3,"app-link-cites-by-author",2),a()),t&2){let e=_;o(),h(" ",e.getCite()," "),o(2),d("author",e.getAuthor())}}var j=(()=>{class t{citesService=n(y);click=n(b);cite$=this.click.refresh$.pipe(p(()=>this.citesService.getRandomCite()));static \u0275fac=function(i){return new(i||t)};static \u0275cmp=r({type:t,selectors:[["app-random"]],decls:2,vars:3,consts:[[1,"my-4","text-3xl","md:text-5xl","text-violet-800","font-bold","leading-tight","text-center","md:text-left","slide-in-bottom-h1"],[1,"leading-normal","text-base","md:text-2xl","mb-8","text-center","md:text-left","slide-in-bottom-subtitle"],[3,"author"]],template:function(i,k){if(i&1&&(l(0,S,4,2),u(1,"async")),i&2){let c;s((c=C(1,1,k.cite$))?0:-1,c)}},dependencies:[g,v],encapsulation:2,changeDetection:0})}return t})();export{j as RandomComponent};