import './polyfills.server.mjs';
import{a as F}from"./chunk-JKLVL2PE.mjs";import{$ as v,Aa as O,Ja as p,Kb as k,La as I,Ma as M,Na as w,Oa as L,Pa as y,Qa as a,Ra as g,Ta as x,Va as u,Wa as o,Ya as d,Za as _,ba as b,ca as l,cb as T,da as c,eb as m,f,x as h,za as r}from"./chunk-K24IRBBC.mjs";var S=class{constructor(){this.itemsPerPage=10}getCurrentPage(){return this.currentPage}setCurrentPage(s){this.currentPage=s}getItemsPerPage(){return this.itemsPerPage}};var E=n=>({current:n});function D(n,s){if(n&1){let e=x();a(0,"li",2)(1,"a",3),u("click",function(){let P=l(e).$implicit,V=o(2);return c(V.pager.goToPage(P.index))}),a(2,"span"),d(3),g()()()}if(n&2){let e=s.$implicit,i=o(2);r(1),p("ngClass",m(2,E,i.isCurrentPage(e.index))),r(2),_(e.label)}}var C=n=>({disabled:n});function $(n,s){if(n&1){let e=x();a(0,"ul",1)(1,"li",2)(2,"a",3),u("click",function(){l(e);let t=o();return c(t.pager.goToFirstPage())}),a(3,"span"),d(4),g()()(),a(5,"li",2)(6,"a",3),u("click",function(){l(e);let t=o();return c(t.pager.goToPreviousPage())}),a(7,"span"),d(8),g()()(),L(9,D,4,4,"li",4,w),a(11,"li",2)(12,"a",3),u("click",function(){l(e);let t=o();return c(t.pager.goToNextPage())}),a(13,"span"),d(14),g()()(),a(15,"li",2)(16,"a",3),u("click",function(){l(e);let t=o();return c(t.pager.goToLastPage())}),a(17,"span"),d(18),g()()()()}if(n&2){let e=o();r(2),p("ngClass",m(8,C,e.previousIsDisabled())),r(2),_(e.pager.getPagerItemList().getFirstEdges()[0].label),r(2),p("ngClass",m(10,C,e.previousIsDisabled())),r(2),_(e.pager.getPagerItemList().getFirstEdges()[1].label),r(1),y(e.pager.getPagerItemList().getNumbers()),r(3),p("ngClass",m(12,C,e.nextIsDisabled())),r(2),_(e.pager.getPagerItemList().getLastEdges()[0].label),r(2),p("ngClass",m(14,C,e.nextIsDisabled())),r(2),_(e.pager.getPagerItemList().getLastEdges()[1].label)}}var A=(()=>{let s=class s{constructor(i){this.pager=i,this.list=0,this.paginatedList=new f(this.pager.getPaginatedList()),this.paginatedList$=this.paginatedList.asObservable().pipe(h(t=>!!t))}ngOnInit(){this.pager.init(this.list,this.options),this.pager.currentOffset$.subscribe(()=>{this.paginatedList.next(this.pager.getPaginatedList())})}ngOnChanges(i){let t=i.list;t&&(t.isFirstChange()||this.pager.init(t.currentValue,this.options))}previousIsDisabled(){return this.pager.getCurrentPage()===this.pager.getPreviousPage()}nextIsDisabled(){return this.pager.getCurrentPage()===this.pager.getNextPage()}isCurrentPage(i){return this.pager.isCurrentPage(i)}hasList(){return typeof this.list=="object"?this.pager.getTotalPage()>1:!1}};s.\u0275fac=function(t){return new(t||s)(O(F))},s.\u0275cmp=v({type:s,selectors:[["app-pager"]],inputs:{list:"list",options:"options"},outputs:{paginatedList$:"paginatedList$"},standalone:!0,features:[b,T],decls:2,vars:1,consts:[["class","ng-pager nav","aria-label","Pagination"],["aria-label","Pagination",1,"ng-pager","nav"],[1,"w-12"],[3,"ngClass","click"],["class","w-12"]],template:function(t,P){t&1&&(a(0,"nav"),I(1,$,19,16,"ul",0),g()),t&2&&(r(1),M(1,P.hasList()?1:-1))},dependencies:[k],styles:[".ng-pager[_ngcontent-%COMP%]{margin-left:0;margin-bottom:1rem}.ng-pager[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}ul.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:inline-block;padding:5px 10px;list-style:none;width:40px}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{cursor:pointer}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.current[_ngcontent-%COMP%]{font-weight:700}.ng-pager[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ng-pager[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{padding:.1875rem .625rem;color:#cacaca;cursor:default}"]});let n=s;return n})();export{S as a,A as b};