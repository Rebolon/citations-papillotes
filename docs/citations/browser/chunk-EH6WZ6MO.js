import{a as F,e as v}from"./chunk-TYD4F3NZ.js";import{b as S}from"./chunk-WCIG5XE2.js";import{Ab as m,B as b,Ja as i,Qa as y,ca as P,cb as w,fb as p,gb as I,hb as L,ia as O,ib as k,j as h,ja as l,jb as r,ka as c,kb as s,mb as f,ob as u,pb as o,qa as M,va as x,vb as _,wb as d,zb as T}from"./chunk-RANHGFWP.js";var V=class{currentPage;itemsPerPage=10;getCurrentPage(){return this.currentPage}setCurrentPage(g){this.currentPage=g}getItemsPerPage(){return this.itemsPerPage}};var E=(t,g)=>g.index,C=t=>({disabled:t}),$=t=>({current:t});function N(t,g){if(t&1){let e=f();r(0,"li",1)(1,"a",2),u("click",function(){let a=l(e).$implicit,D=o(2);return c(D.pager.goToPage(a.index))}),r(2,"span"),_(3),s()()()}if(t&2){let e=g.$implicit,n=o(2);i(),p("ngClass",m(2,$,n.isCurrentPage(e.index))),i(2),d(e.label)}}function j(t,g){if(t&1){let e=f();r(0,"ul",0)(1,"li",1)(2,"a",2),u("click",function(){l(e);let a=o();return c(a.pager.goToFirstPage())}),r(3,"span"),_(4),s()()(),r(5,"li",1)(6,"a",2),u("click",function(){l(e);let a=o();return c(a.pager.goToPreviousPage())}),r(7,"span"),_(8),s()()(),L(9,N,4,4,"li",1,E),r(11,"li",1)(12,"a",2),u("click",function(){l(e);let a=o();return c(a.pager.goToNextPage())}),r(13,"span"),_(14),s()()(),r(15,"li",1)(16,"a",2),u("click",function(){l(e);let a=o();return c(a.pager.goToLastPage())}),r(17,"span"),_(18),s()()()()}if(t&2){let e=o();i(2),p("ngClass",m(8,C,e.previousIsDisabled())),i(2),d(e.pager.getPagerItemList().getFirstEdges()[0].label),i(2),p("ngClass",m(10,C,e.previousIsDisabled())),i(2),d(e.pager.getPagerItemList().getFirstEdges()[1].label),i(),k(e.pager.getPagerItemList().getNumbers()),i(3),p("ngClass",m(12,C,e.nextIsDisabled())),i(2),d(e.pager.getPagerItemList().getLastEdges()[0].label),i(2),p("ngClass",m(14,C,e.nextIsDisabled())),i(2),d(e.pager.getPagerItemList().getLastEdges()[1].label)}}var Q=(()=>{class t{list=x(0);options=x();#t=P(M);pager=P(v);#e=new h(this.pager.getPaginatedList());paginatedList$=this.#e.asObservable().pipe(F(),b(e=>!!e));ngOnChanges(e){let n=e.list;n&&(this.pager.init(n.currentValue,this.options()),this.pager.currentOffset$.pipe().subscribe(()=>{this.#e.next(this.pager.getPaginatedList())}))}previousIsDisabled(){return this.pager.getCurrentPage()===this.pager.getPreviousPage()}nextIsDisabled(){return this.pager.getCurrentPage()===this.pager.getNextPage()}isCurrentPage(e){return this.pager.isCurrentPage(e)}hasList(){let e=this.list();return typeof e=="object"||typeof e=="number"?this.pager.getTotalPage()>1:!1}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=y({type:t,selectors:[["app-pager"]],inputs:{list:[1,"list"],options:[1,"options"]},outputs:{paginatedList$:"paginatedList$"},features:[T([v]),O],decls:2,vars:1,consts:[["aria-label","Pagination",1,"ng-pager","nav"],[1,"w-12"],[3,"click","ngClass"]],template:function(n,a){n&1&&(r(0,"nav"),w(1,j,19,16,"ul",0),s()),n&2&&(i(),I(a.hasList()?1:-1))},dependencies:[S],styles:[".ng-pager[_ngcontent-%COMP%]{margin-left:0;margin-bottom:1rem}.ng-pager[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}ul.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:inline-block;padding:5px 10px;list-style:none;width:40px}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{cursor:pointer}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.current[_ngcontent-%COMP%]{font-weight:700}.ng-pager[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ng-pager[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{padding:.1875rem .625rem;color:#cacaca;cursor:default}"],changeDetection:0})}return t})();export{V as a,Q as b};
