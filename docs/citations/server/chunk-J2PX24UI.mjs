import './polyfills.server.mjs';
import{a as H,b as J}from"./chunk-DHRXJUJO.mjs";import{a as U,b as q}from"./chunk-UXD6WDFG.mjs";import{a as _,b as R,e as G}from"./chunk-QD4JVIT5.mjs";import"./chunk-WVHRYZRP.mjs";import{e as O}from"./chunk-IXBV37FZ.mjs";import{$a as l,Da as o,Ea as g,Jb as P,Ma as m,N as A,Na as B,R as S,S as $,Sa as k,U as c,Va as h,Vb as j,Wb as M,Xb as W,Ya as I,Za as F,_a as s,ca as L,cb as f,db as E,eb as N,f as T,ic as z,jb as a,lb as C,o as d,ob as w,pb as D,qb as y}from"./chunk-CRI4ACI5.mjs";import"./chunk-K7YHPIF3.mjs";var Q=(t,i)=>i.getName(),K=(t,i)=>({"font-semibold":t,"font-normal":i}),V=t=>({itemPerPage:t});function X(t,i){t&1&&a(0,"0 Auteur.")}function Y(t,i){t&1&&a(0,"1 Auteur.")}function Z(t,i){if(t&1&&a(0),t&2){let p=E();C("",p.authorsCount()," Auteurs.")}}function tt(t,i){if(t&1&&(s(0,"li",8)(1,"a",13),a(2),s(3,"small"),a(4),l()()()),t&2){let p=i.$implicit;o(),N("routerLink","/authors/",p.getName(),""),o(),C("",p.getName()," "),o(2),C("(",p.getCount(),")")}}var ct=(()=>{let i=class i extends U{constructor(n,u,e){super(),this.authorService=n,this.title=u,this.device=e,this.sort=m("text"),this.isSortByText=P(()=>this.sort()==="text"),this.isSortByTotal=P(()=>this.sort()==="total"),this.authors=m([]),this.authors$=R(this.sort).pipe($(r=>r==="text"?this.authorService.authors$:this.authorService.authors$.pipe(d(x=>x.sort((b,v)=>b.getCount()>v.getCount()?-1:b.getCount()<v.getCount()?1:0)))),c(r=>this.authors.set(r)),_()),this.authorsCount=m(0),this.authorsCount$=this.authors$.pipe(d(r=>r.length),S(0),c(r=>this.authorsCount.set(r)),_()),this.pagerPaginatedAuthors$=new T,this.displayedPaginatedAuthors=m([]),this.displayedPaginatedAuthors$=this.authors$.pipe(A(this.pagerPaginatedAuthors$),d(r=>r.slice(0,this.itemsPerPage)),c(r=>this.displayedPaginatedAuthors.set(r)),_()),this.itemsPerPage=11,this.title.setTitle("Citations - Liste des auteurs"),e.isMobile()&&(this.itemsPerPage=8),this.authors$.subscribe(),this.authorsCount$.subscribe(),this.displayedPaginatedAuthors$.subscribe()}sortByAuthor(){this.sort.set("text")}sortByCount(){this.sort.set("total")}setPaginatedList(n){n[0]&&(n[0]instanceof H||!n[0])&&this.pagerPaginatedAuthors$.next(n)}};i.\u0275fac=function(u){return new(u||i)(g(J),g(z),g(G))},i.\u0275cmp=L({type:i,selectors:[["app-list-authors"]],standalone:!0,features:[B,w],decls:16,vars:15,consts:[[1,"container","mb-36"],[1,"text-3xl","font-bold","text-stone-900","mb-2",3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"],["title","Trier par nom",1,"bg-gray-100","text-violet-800","text-xs","inline-flex","items-center","px-2.5","py-0.5","rounded-full","mr-2",3,"click","ngClass","disabled"],["title","Trier par total de citations",1,"bg-gray-100","text-violet-800","text-xs","inline-flex","items-center","px-2.5","py-0.5","rounded-full",3,"click","ngClass","disabled"],[1,"list-none"],[1,"p-1"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"paginatedList$","list","options"],[3,"routerLink"]],template:function(u,e){u&1&&(s(0,"div",0)(1,"h1",1),k(2,X,1,0,"ng-template",2)(3,Y,1,0,"ng-template",3)(4,Z,1,1,"ng-template",4),l(),s(5,"button",5),f("click",function(){return e.sortByAuthor()}),a(6," Trier par nom "),l(),s(7,"button",6),f("click",function(){return e.sortByCount()}),a(8," Trier par total "),l(),s(9,"ul",7),I(10,tt,5,4,"li",8,Q),l()(),s(12,"div",9)(13,"div",10)(14,"section",11)(15,"app-pager",12),f("paginatedList$",function(x){return e.setPaginatedList(x)}),l()()()()),u&2&&(o(),h("ngPlural",e.authorsCount()),o(4),h("ngClass",y(7,K,e.isSortByText()===!0,e.isSortByText()===!1))("disabled",e.isSortByText()),o(2),h("ngClass",y(10,K,e.isSortByTotal(),e.isSortByTotal()))("disabled",e.isSortByTotal()),o(3),F(e.displayedPaginatedAuthors()),o(5),h("list",e.authors())("options",D(13,V,e.getItemsPerPage())))},dependencies:[j,M,W,O,q],encapsulation:2});let t=i;return t})();export{ct as ListAuthorsComponent};
