import{a as H,b as J}from"./chunk-CI3NUKLP.js";import{a as y,b as T,c as q,e as K}from"./chunk-WUQPTMT7.js";import{a as O}from"./chunk-2UYYVBPZ.js";import{d as z,j as U,k as G}from"./chunk-JHKGSTDZ.js";import{$a as F,Ba as p,Bb as d,Ca as x,E as L,Jb as S,Kb as v,Ma as R,Pb as W,Ra as h,T as k,Ua as c,Va as A,X as b,Xa as M,Y as w,Ya as j,Za as m,_a as l,ba as g,bb as B,cb as u,da as C,ea as _,ib as r,kb as f,l as E,lb as D,n as $,nb as P,ob as N,u as I}from"./chunk-RWH3FFME.js";function Y(t,e){if(t&1&&r(0),t&2){let i=u(2);f('Aucune citation trouv\xE9e pour la recherche "',i.q(),'"\xA0')}}function Z(t,e){if(t&1&&r(0),t&2){let i=u(2);D("",i.count(),' citation trouv\xE9e pour la recherche "',i.q(),'":\xA0')}}function tt(t,e){if(t&1&&r(0),t&2){let i=u(2);D("",i.count(),' citations trouv\xE9es pour la recherche "',i.q(),'":\xA0')}}function et(t,e){if(t&1&&(m(0,"h2",1),h(1,Y,1,1,"ng-template",2)(2,Z,1,2,"ng-template",3)(3,tt,1,2,"ng-template",4),l()),t&2){let i=u();c("ngPlural",i.count())}}var Q=(()=>{let e=class e{constructor(){this.citesCount=g.required(),this.q=g(),this.count=d(()=>this.citesCount()??0)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=_({type:e,selectors:[["app-search-result-title"]],inputs:{citesCount:[C.SignalBased,"citesCount"],q:[C.SignalBased,"q"]},standalone:!0,features:[P],decls:1,vars:1,consts:[["class","text-md text-gray-600",3,"ngPlural"],[1,"text-md","text-gray-600",3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"]],template:function(a,o){a&1&&h(0,et,4,1,"h2",0),a&2&&A(0,o.q()?0:-1)},dependencies:[S,v],encapsulation:2});let t=e;return t})();var it=(t,e)=>e.getId();function nt(t,e){t&1&&r(0,"0 Citation.")}function ot(t,e){t&1&&r(0,"1 Citation.")}function at(t,e){if(t&1&&r(0),t&2){let i=u();f("",i.citesCount()," Citations.")}}function st(t,e){if(t&1&&(m(0,"li",12)(1,"cite"),r(2),l(),r(3," de "),F(4,"app-link-cites-by-author",13),l()),t&2){let i=e.$implicit;p(2),f("\u201D",i.getCite(),"\u201D"),p(2),c("author",i.getAuthor())}}var rt=t=>({itemPerPage:t}),It=(()=>{let e=class e extends H{constructor(s,a,o){super(),this.citeService=s,this.title=a,this.device=o,this.q=g("",{transform:n=>n?n.trim():""}),this.q$=new $(1),this.cites=d(()=>this.citesSource()??[]),this.citesSource=q(T(this.q).pipe(b(""),w(n=>n?this.citeService.search(n):this.citeService.cites$),y())),this.citesCount=d(()=>this.citesCountSource()??0),this.citesCountSource=q(T(this.citesSource).pipe(L(n=>!!n),I(n=>n.length),b(0),y())),this.pagerPaginatedCites$=new E,this.displayedPaginatedCites=d(()=>this.displayedPaginatedCitesSource()??[]),this.displayedPaginatedCitesSource=q(T(this.citesSource).pipe(L(n=>!!n),k(this.pagerPaginatedCites$),I(n=>n.slice(0,this.itemsPerPage)),y())),this.title.setTitle("Citations - Liste des citations"),this.itemsPerPage=12,o.isMobile()&&(this.itemsPerPage=4)}setPaginatedList(s){s[0]&&(s[0]instanceof U||!s[0])&&this.pagerPaginatedCites$.next(s)}};e.\u0275fac=function(a){return new(a||e)(x(G),x(W),x(K))},e.\u0275cmp=_({type:e,selectors:[["app-list-cites"]],inputs:{q:[C.SignalBased,"q"]},standalone:!0,features:[R,P],decls:14,vars:8,consts:[[1,"container","mb-36"],[1,"text-3xl","font-bold","text-stone-900","mb-2"],["routerLink","/cites",3,"queryParams","ngPlural"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"],[3,"q","citesCount"],[1,"list-none"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"list","options","paginatedList$"],[1,"p-1"],[3,"author"],["class","p-1"]],template:function(a,o){a&1&&(m(0,"div",0)(1,"h1",1)(2,"a",2),h(3,nt,1,0,"ng-template",3)(4,ot,1,0,"ng-template",4)(5,at,1,1,"ng-template",5),l()(),F(6,"app-search-result-title",6),m(7,"ul",7),M(8,st,5,2,"li",14,it),l()(),m(10,"div",8)(11,"div",9)(12,"section",10)(13,"app-pager",11),B("paginatedList$",function(V){return o.setPaginatedList(V)}),l()()()()),a&2&&(p(2),c("queryParams",null)("ngPlural",o.citesCount()),p(4),c("q",o.q())("citesCount",o.citesCount()),p(2),j(o.displayedPaginatedCites()),p(5),c("list",o.cites())("options",N(6,rt,o.getItemsPerPage())))},dependencies:[z,S,v,O,Q,J],encapsulation:2});let t=e;return t})();export{It as ListCitesComponent};
