import{a as O,b as N}from"./chunk-EH6WZ6MO.js";import{a as C,d as k}from"./chunk-TYD4F3NZ.js";import{c as w,d as E,i as F,u as M,v as j}from"./chunk-WCIG5XE2.js";import{$a as p,Ab as I,Ja as r,Q as $,Qa as v,U as f,V as b,X as m,ab as L,ca as u,cb as _,fb as x,gb as A,hb as B,i as P,ib as S,jb as s,k as y,kb as c,ob as T,pb as o,r as h,vb as l,xb as d,yb as D}from"./chunk-RANHGFWP.js";var z=(e,i)=>i.getId(),R=e=>({itemPerPage:e});function U(e,i){if(e&1&&l(0),e&2){let t=o();d('Aucune citation de "',t,'"\xA0')}}function q(e,i){if(e&1&&l(0),e&2){let t=o();d('1 citation de "',t,'":\xA0')}}function G(e,i){if(e&1&&l(0),e&2){let t=o(),n=o();D("",n.citesCount(),' citations de "',t,'":\xA0')}}function H(e,i){if(e&1&&(s(0,"h1",1),_(1,U,1,1,"ng-template",8)(2,q,1,1,"ng-template",9)(3,G,1,2,"ng-template",10),c()),e&2){let t=o();x("ngPlural",t.citesCount())}}function J(e,i){if(e&1&&(s(0,"li",3)(1,"cite"),l(2),c()()),e&2){let t=i.$implicit;r(2),d("\u201D",t.getCite(),"\u201D")}}var pt=(()=>{class e extends O{citeService=u(j);title=u(F);device=u(k);set author(t){t||(t=""),this.authorOfCites.set(t),this.author$.next(t)}authorOfCites=p("");author$=new y(1);cites=p([]);cites$=this.author$.pipe(b(t=>this.citeService.searchByAuthor(t)),f([]),m(t=>this.cites.set(t)),C());citesCount=p(0);citesCount$=this.cites$.pipe(h(t=>t.length),f(0),m(t=>this.citesCount.set(t)),C());pagerPaginatedCites$=new P;displayedPaginatedCites=p([]);displayedPaginatedCites$=this.cites$.pipe($(this.pagerPaginatedCites$),h(t=>t.slice(0,this.itemsPerPage)),m(t=>this.displayedPaginatedCites.set(t)),C());constructor(){super();let t=this.device;this.title.setTitle("Citations - Liste des citations"),this.itemsPerPage=10,t.isMobile()&&(this.itemsPerPage=4),this.cites$.subscribe(),this.citesCount$.subscribe(),this.displayedPaginatedCites$.subscribe()}setPaginatedList(t){t[0]&&(t[0]instanceof M||!t[0])&&this.pagerPaginatedCites$.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=v({type:e,selectors:[["app-list-cites-by-authors"]],inputs:{author:"author"},features:[L],decls:9,vars:5,consts:[[1,"container","mb-36"],[1,"text-3xl","font-bold","text-stone-900","mb-2",3,"ngPlural"],[1,"list-none"],[1,"p-1"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"paginatedList$","list","options"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"]],template:function(n,a){if(n&1&&(s(0,"div",0),_(1,H,4,1,"h1",1),s(2,"ul",2),B(3,J,3,1,"li",3,z),c()(),s(5,"div",4)(6,"div",5)(7,"section",6)(8,"app-pager",7),T("paginatedList$",function(W){return a.setPaginatedList(W)}),c()()()()),n&2){let g;r(),A((g=a.authorOfCites())?1:-1,g),r(2),S(a.displayedPaginatedCites()),r(5),x("list",a.cites())("options",I(3,R,a.getItemsPerPage()))}},dependencies:[w,E,N],encapsulation:2,changeDetection:0})}return e})();export{pt as ListCitesByAuthorsComponent};
