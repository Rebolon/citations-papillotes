import './polyfills.server.mjs';
import{a as O}from"./chunk-L27HFEA3.mjs";import{a as H,b as J}from"./chunk-UXD6WDFG.mjs";import{a as y,b as T,c as q,e as K}from"./chunk-QD4JVIT5.mjs";import{a as U,b as G}from"./chunk-WVHRYZRP.mjs";import{e as z}from"./chunk-IXBV37FZ.mjs";import{$a as l,Da as p,Ea as x,Jb as d,N as k,Na as R,R as b,S as w,Sa as h,Va as c,Wa as A,Wb as S,Xb as v,Ya as M,Za as j,_a as m,ab as F,ba as g,ca as _,cb as B,db as u,f as E,h as $,ic as W,jb as r,lb as f,mb as D,o as I,ob as P,pb as N,ra as C,y as L}from"./chunk-CRI4ACI5.mjs";import"./chunk-K7YHPIF3.mjs";function Y(t,e){if(t&1&&r(0),t&2){let i=u(2);f('Aucune citation trouv\xE9e pour la recherche "',i.q(),'"\xA0')}}function Z(t,e){if(t&1&&r(0),t&2){let i=u(2);D("",i.count(),' citation trouv\xE9e pour la recherche "',i.q(),'":\xA0')}}function tt(t,e){if(t&1&&r(0),t&2){let i=u(2);D("",i.count(),' citations trouv\xE9es pour la recherche "',i.q(),'":\xA0')}}function et(t,e){if(t&1&&(m(0,"h2",0),h(1,Y,1,1,"ng-template",1)(2,Z,1,2,"ng-template",2)(3,tt,1,2,"ng-template",3),l()),t&2){let i=u();c("ngPlural",i.count())}}var Q=(()=>{let e=class e{constructor(){this.citesCount=C.required(),this.q=C(),this.count=d(()=>this.citesCount()??0)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=_({type:e,selectors:[["app-search-result-title"]],inputs:{citesCount:[g.SignalBased,"citesCount"],q:[g.SignalBased,"q"]},standalone:!0,features:[P],decls:1,vars:1,consts:[[1,"text-md","text-gray-600",3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"]],template:function(a,o){a&1&&h(0,et,4,1,"h2",0),a&2&&A(0,o.q()?0:-1)},dependencies:[S,v],encapsulation:2});let t=e;return t})();var it=(t,e)=>e.getId(),nt=t=>({itemPerPage:t});function ot(t,e){t&1&&r(0,"0 Citation.")}function at(t,e){t&1&&r(0,"1 Citation.")}function st(t,e){if(t&1&&r(0),t&2){let i=u();f("",i.citesCount()," Citations.")}}function rt(t,e){if(t&1&&(m(0,"li",8)(1,"cite"),r(2),l(),r(3," de "),F(4,"app-link-cites-by-author",13),l()),t&2){let i=e.$implicit;p(2),f("\u201D",i.getCite(),"\u201D"),p(2),c("author",i.getAuthor())}}var It=(()=>{let e=class e extends H{constructor(s,a,o){super(),this.citeService=s,this.title=a,this.device=o,this.q=C("",{transform:n=>n?n.trim():""}),this.q$=new $(1),this.cites=d(()=>this.citesSource()??[]),this.citesSource=q(T(this.q).pipe(b(""),w(n=>n?this.citeService.search(n):this.citeService.cites$),y())),this.citesCount=d(()=>this.citesCountSource()??0),this.citesCountSource=q(T(this.citesSource).pipe(L(n=>!!n),I(n=>n.length),b(0),y())),this.pagerPaginatedCites$=new E,this.displayedPaginatedCites=d(()=>this.displayedPaginatedCitesSource()??[]),this.displayedPaginatedCitesSource=q(T(this.citesSource).pipe(L(n=>!!n),k(this.pagerPaginatedCites$),I(n=>n.slice(0,this.itemsPerPage)),y())),this.title.setTitle("Citations - Liste des citations"),this.itemsPerPage=12,o.isMobile()&&(this.itemsPerPage=4)}setPaginatedList(s){s[0]&&(s[0]instanceof U||!s[0])&&this.pagerPaginatedCites$.next(s)}};e.\u0275fac=function(a){return new(a||e)(x(G),x(W),x(K))},e.\u0275cmp=_({type:e,selectors:[["app-list-cites"]],inputs:{q:[g.SignalBased,"q"]},standalone:!0,features:[R,P],decls:14,vars:8,consts:[[1,"container","mb-36"],[1,"text-3xl","font-bold","text-stone-900","mb-2"],["routerLink","/cites",3,"queryParams","ngPlural"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"],[3,"q","citesCount"],[1,"list-none"],[1,"p-1"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"paginatedList$","list","options"],[3,"author"]],template:function(a,o){a&1&&(m(0,"div",0)(1,"h1",1)(2,"a",2),h(3,ot,1,0,"ng-template",3)(4,at,1,0,"ng-template",4)(5,st,1,1,"ng-template",5),l()(),F(6,"app-search-result-title",6),m(7,"ul",7),M(8,rt,5,2,"li",8,it),l()(),m(10,"div",9)(11,"div",10)(12,"section",11)(13,"app-pager",12),B("paginatedList$",function(V){return o.setPaginatedList(V)}),l()()()()),a&2&&(p(2),c("queryParams",null)("ngPlural",o.citesCount()),p(4),c("q",o.q())("citesCount",o.citesCount()),p(2),j(o.displayedPaginatedCites()),p(5),c("list",o.cites())("options",N(6,nt,o.getItemsPerPage())))},dependencies:[z,S,v,O,Q,J],encapsulation:2});let t=e;return t})();export{It as ListCitesComponent};
