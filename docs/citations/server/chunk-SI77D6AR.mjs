import './polyfills.server.mjs';
import{a as k}from"./chunk-QDBRHCH7.mjs";import{a as A,b as B}from"./chunk-YKLTUIIX.mjs";import{b as L}from"./chunk-KS5CTFF5.mjs";import"./chunk-SNHYI5K2.mjs";import{e as P}from"./chunk-IWPG2T2Y.mjs";import{Ea as v,Ia as p,Ib as T,Na as y,Oa as x,Pa as s,Qa as a,Ua as m,Wa as b,Xa as l,Xb as S,Za as c,_ as f,bb as C,cb as _,db as h,ya as o,za as u}from"./chunk-JHH2AAIU.mjs";import"./chunk-KRLCULJA.mjs";var E=(i,e)=>e.getName();function $(i,e){if(i&1&&(s(0,"li",9)(1,"a",10),l(2),s(3,"small"),l(4),a()()()),i&2){let d=e.$implicit;o(1),b("routerLink","/authors/",d.getName(),""),o(1),c("",d.getName()," "),o(2),c("(",d.getCount(),")")}}var I=(i,e)=>({"font-semibold":i,"font-normal":e}),D=i=>({itemPerPage:i}),G=(()=>{let e=class e extends A{constructor(r,n,t){super(),this.authorService=r,this.title=n,this.device=t,this.authors=[],this.paginatedAuthors=[],this.itemsPerPage=11,this.sort="text",this.title.setTitle("Citations - Liste des auteurs"),this.itemsPerPage=11,t.isMobile()&&(this.itemsPerPage=8)}ngOnInit(){this.sortByAlpha()}sortByAlpha(){this.sort="text",this.authorService.authors$.subscribe({next:r=>{this.authors=r},complete:()=>{this.paginatedAuthors=this.authors.slice(0,this.itemsPerPage)}})}sortByCount(){this.sort="total",this.authorService.authors$.subscribe({next:r=>{this.authors=r.sort((n,t)=>n.getCount()>t.getCount()?-1:n.getCount()<t.getCount()?1:0)},complete:()=>{this.paginatedAuthors=this.authors.slice(0,this.itemsPerPage)}})}isSortByText(){return this.sort==="text"}isSortByTotal(){return this.sort==="total"}setPaginatedList(r){this.paginatedAuthors=r}};e.\u0275fac=function(n){return new(n||e)(u(k),u(S),u(L))},e.\u0275cmp=f({type:e,selectors:[["app-list-authors"]],standalone:!0,features:[v,C],decls:14,vars:15,consts:[[1,"container","mb-36"],[1,"text-3xl","font-bold","text-stone-900","mb-2"],["title","Trier par nom",1,"bg-gray-100","text-violet-800","text-xs","inline-flex","items-center","px-2.5","py-0.5","rounded-full","mr-2",3,"ngClass","disabled","click"],["title","Trier par total de citations",1,"bg-gray-100","text-violet-800","text-xs","inline-flex","items-center","px-2.5","py-0.5","rounded-full",3,"ngClass","disabled","click"],[1,"list-none"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"list","options","paginatedList$"],[1,"p-1"],[3,"routerLink"],["class","p-1"]],template:function(n,t){n&1&&(s(0,"div",0)(1,"h1",1),l(2),a(),s(3,"button",2),m("click",function(){return t.sortByAlpha()}),l(4," Trier par nom "),a(),s(5,"button",3),m("click",function(){return t.sortByCount()}),l(6," Trier par total "),a(),s(7,"ul",4),y(8,$,5,3,"li",11,E),a()(),s(10,"div",5)(11,"div",6)(12,"section",7)(13,"app-pager",8),m("paginatedList$",function(F){return t.setPaginatedList(F)}),a()()()()),n&2&&(o(2),c(" ",t.authors.length," Auteurs. "),o(1),p("ngClass",h(7,I,t.isSortByText()===!0,t.isSortByText()===!1))("disabled",t.isSortByText()),o(2),p("ngClass",h(10,I,t.isSortByTotal()===!0,t.isSortByTotal()===!1))("disabled",t.isSortByTotal()),o(3),x(t.paginatedAuthors),o(5),p("list",t.authors)("options",_(13,D,t.getItemsPerPage())))},dependencies:[T,P,B],encapsulation:2});let i=e;return i})();export{G as ListAuthorsComponent};
