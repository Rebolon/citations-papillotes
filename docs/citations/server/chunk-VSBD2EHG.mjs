import{a as _}from"./chunk-OFZNWPJH.mjs";import{b as l}from"./chunk-52Y72HIO.mjs";import{Ba as d,Da as c,Ia as y,Ka as m,La as x,Oa as f,Pa as u,Qa as a,Ya as h,_a as v,db as D,eb as b,f as n,ia as o,kb as r,na as p,pb as S,rb as A,za as g}from"./chunk-D654P62Y.mjs";n();o();A();r();n();o();r();r();var M=(()=>{class e{citesService=p(l);cite=g.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["app-cite"]],inputs:{cite:[1,"cite"]},decls:4,vars:2,consts:[[1,"my-4","text-3xl","md:text-5xl","text-violet-800","font-bold","leading-tight","text-center","md:text-left","slide-in-bottom-h1"],[1,"leading-normal","text-base","md:text-2xl","mb-8","text-center","md:text-left","slide-in-bottom-subtitle"],[3,"author"]],template:function(t,i){t&1&&(f(0,"h1",0),h(1),u(),f(2,"p",1),a(3,"app-link-cites-by-author",2),u()),t&2&&(d(),v(" ",i.cite().getCite()," "),d(2),m("author",i.cite().getAuthor()))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})();r();function j(e,T){e&1&&a(0,"app-cite",0),e&2&&m("cite",T)}var N=(()=>{class e{citesService=p(l);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["app-home"]],decls:2,vars:3,consts:[[3,"cite"]],template:function(t,i){if(t&1&&(y(0,j,1,1,"app-cite",0),D(1,"async")),t&2){let C;x((C=b(1,1,i.citesService.getCiteOfTheDay()))?0:-1,C)}},dependencies:[S,M],encapsulation:2,changeDetection:0})}return e})();export{N as HomeComponent};
