import{a as N,b as W}from"./chunk-6FRAWVWF.js";import{a as g,e as z}from"./chunk-WWKZI2YL.js";import{j as k,k as O}from"./chunk-MXWGLAQY.js";import{Ca as l,Da as h,Jb as F,Kb as E,La as c,Ma as A,Pb as M,Ra as x,T as b,Ua as P,Va as I,X as _,Xa as S,Y as v,Ya as T,Za as r,_ as d,_a as m,bb as B,cb as p,ha as L,ib as u,kb as C,l as y,lb as D,n as $,nb as w,ob as j,u as f}from"./chunk-J7AB6YBJ.js";var U=(t,n)=>n.getId(),q=t=>({itemPerPage:t});function G(t,n){if(t&1&&u(0),t&2){let s=p();C('Aucune citation de "',s,'"\xA0')}}function H(t,n){if(t&1&&u(0),t&2){let s=p();C('1 citation de "',s,'":\xA0')}}function J(t,n){if(t&1&&u(0),t&2){let s=p(),e=p();D("",e.citesCount(),' citations de "',s,'":\xA0')}}function K(t,n){if(t&1&&(r(0,"h1",1),x(1,G,1,1,"ng-template",8)(2,H,1,1,"ng-template",9)(3,J,1,2,"ng-template",10),m()),t&2){let s=p();P("ngPlural",s.citesCount())}}function Q(t,n){if(t&1&&(r(0,"li",3)(1,"cite"),u(2),m()()),t&2){let s=n.$implicit;l(2),C("\u201D",s.getCite(),"\u201D")}}var lt=(()=>{let n=class n extends N{set author(e){e||(e=""),this.authorOfCites.set(e),this.author$.next(e)}constructor(e,o,a){super(),this.citeService=e,this.title=o,this.device=a,this.authorOfCites=c(""),this.author$=new $(1),this.cites=c([]),this.cites$=this.author$.pipe(v(i=>this.citeService.searchByAuthor(i)),_([]),d(i=>this.cites.set(i)),g()),this.citesCount=c(0),this.citesCount$=this.cites$.pipe(f(i=>i.length),_(0),d(i=>this.citesCount.set(i)),g()),this.pagerPaginatedCites$=new y,this.displayedPaginatedCites=c([]),this.displayedPaginatedCites$=this.cites$.pipe(b(this.pagerPaginatedCites$),f(i=>i.slice(0,this.itemsPerPage)),d(i=>this.displayedPaginatedCites.set(i)),g()),this.title.setTitle("Citations - Liste des citations"),this.itemsPerPage=10,a.isMobile()&&(this.itemsPerPage=4),this.cites$.subscribe(),this.citesCount$.subscribe(),this.displayedPaginatedCites$.subscribe()}setPaginatedList(e){e[0]&&(e[0]instanceof k||!e[0])&&this.pagerPaginatedCites$.next(e)}};n.\u0275fac=function(o){return new(o||n)(h(O),h(M),h(z))},n.\u0275cmp=L({type:n,selectors:[["app-list-cites-by-authors"]],inputs:{author:"author"},standalone:!0,features:[A,w],decls:9,vars:5,consts:[[1,"container","mb-36"],[1,"text-3xl","font-bold","text-stone-900","mb-2",3,"ngPlural"],[1,"list-none"],[1,"p-1"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"paginatedList$","list","options"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"]],template:function(o,a){if(o&1&&(r(0,"div",0),x(1,K,4,1,"h1",1),r(2,"ul",2),S(3,Q,3,1,"li",3,U),m()(),r(5,"div",4)(6,"div",5)(7,"section",6)(8,"app-pager",7),B("paginatedList$",function(R){return a.setPaginatedList(R)}),m()()()()),o&2){let i;l(),I(1,(i=a.authorOfCites())?1:-1,i),l(2),T(a.displayedPaginatedCites()),l(5),P("list",a.cites())("options",j(3,q,a.getItemsPerPage()))}},dependencies:[F,E,W],encapsulation:2});let t=n;return t})();export{lt as ListCitesByAuthorsComponent};
