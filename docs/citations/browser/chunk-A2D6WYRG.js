import{a as P}from"./chunk-C2V7MVMA.js";import{$a as _,A as k,Aa as T,Ab as B,Ca as w,Da as j,La as p,Na as V,Oa as E,Pa as N,Qa as $,Ra as q,Sa as s,Ta as c,V as M,Va as y,Xa as d,Ya as o,_a as m,ba as f,ca as L,cb as R,e as O,ea as D,fa as g,fb as U,ga as u,gb as C,i as I,j as S,oa as h,pa as F,ya as v,za as a}from"./chunk-DRO5L2YF.js";function A(t){t||(h(A),t=f(w));let r=new O(e=>t.onDestroy(e.next.bind(e)));return e=>e.pipe(M(r))}function G(t,r){!r?.injector&&h(G);let e=r?.injector??f(F),n=new S(1),i=j(()=>{let l;try{l=t()}catch(b){v(()=>n.error(b));return}v(()=>n.next(l))},{injector:e,manualCleanup:!0});return e.get(w).onDestroy(()=>{i.destroy(),n.complete()}),n.asObservable()}var z=class{constructor(){this.itemsPerPage=10}getCurrentPage(){return this.currentPage}setCurrentPage(r){this.currentPage=r}getItemsPerPage(){return this.itemsPerPage}};var H=t=>({current:t});function J(t,r){if(t&1){let e=y();s(0,"li",2)(1,"a",3),d("click",function(){let l=g(e).$implicit,b=o(2);return u(b.pager.goToPage(l.index))}),s(2,"span"),m(3),c()()()}if(t&2){let e=r.$implicit,n=o(2);a(1),p("ngClass",C(2,H,n.isCurrentPage(e.index))),a(2),_(e.label)}}var x=t=>({disabled:t});function K(t,r){if(t&1){let e=y();s(0,"ul",1)(1,"li",2)(2,"a",3),d("click",function(){g(e);let i=o();return u(i.pager.goToFirstPage())}),s(3,"span"),m(4),c()()(),s(5,"li",2)(6,"a",3),d("click",function(){g(e);let i=o();return u(i.pager.goToPreviousPage())}),s(7,"span"),m(8),c()()(),$(9,J,4,4,"li",4,N),s(11,"li",2)(12,"a",3),d("click",function(){g(e);let i=o();return u(i.pager.goToNextPage())}),s(13,"span"),m(14),c()()(),s(15,"li",2)(16,"a",3),d("click",function(){g(e);let i=o();return u(i.pager.goToLastPage())}),s(17,"span"),m(18),c()()()()}if(t&2){let e=o();a(2),p("ngClass",C(8,x,e.previousIsDisabled())),a(2),_(e.pager.getPagerItemList().getFirstEdges()[0].label),a(2),p("ngClass",C(10,x,e.previousIsDisabled())),a(2),_(e.pager.getPagerItemList().getFirstEdges()[1].label),a(1),q(e.pager.getPagerItemList().getNumbers()),a(3),p("ngClass",C(12,x,e.nextIsDisabled())),a(2),_(e.pager.getPagerItemList().getLastEdges()[0].label),a(2),p("ngClass",C(14,x,e.nextIsDisabled())),a(2),_(e.pager.getPagerItemList().getLastEdges()[1].label)}}var le=(()=>{let r=class r{constructor(n){this.pager=n,this.list=0,this.paginatedList=new I(this.pager.getPaginatedList()),this.paginatedList$=this.paginatedList.asObservable().pipe(k(i=>!!i))}ngOnChanges(n){let i=n.list;i&&(this.subscription&&this.subscription.unsubscribe(),this.pager.init(i.currentValue,this.options),this.subscription=this.pager.currentOffset$.pipe().subscribe(()=>{this.paginatedList.next(this.pager.getPaginatedList())}))}ngOnDestroy(){this.subscription.unsubscribe()}previousIsDisabled(){return this.pager.getCurrentPage()===this.pager.getPreviousPage()}nextIsDisabled(){return this.pager.getCurrentPage()===this.pager.getNextPage()}isCurrentPage(n){return this.pager.isCurrentPage(n)}hasList(){return typeof this.list=="object"?this.pager.getTotalPage()>1:!1}};r.\u0275fac=function(i){return new(i||r)(T(P))},r.\u0275cmp=L({type:r,selectors:[["app-pager"]],inputs:{list:"list",options:"options"},outputs:{paginatedList$:"paginatedList$"},standalone:!0,features:[R([P]),D,U],decls:2,vars:1,consts:[["class","ng-pager nav","aria-label","Pagination"],["aria-label","Pagination",1,"ng-pager","nav"],[1,"w-12"],[3,"ngClass","click"],["class","w-12"]],template:function(i,l){i&1&&(s(0,"nav"),V(1,K,19,16,"ul",0),c()),i&2&&(a(1),E(1,l.hasList()?1:-1))},dependencies:[B],styles:[".ng-pager[_ngcontent-%COMP%]{margin-left:0;margin-bottom:1rem}.ng-pager[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}ul.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:inline-block;padding:5px 10px;list-style:none;width:40px}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{cursor:pointer}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.current[_ngcontent-%COMP%]{font-weight:700}.ng-pager[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ng-pager[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{padding:.1875rem .625rem;color:#cacaca;cursor:default}"]});let t=r;return t})();export{A as a,G as b,z as c,le as d};
