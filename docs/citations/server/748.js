"use strict";exports.id=748,exports.ids=[748],exports.modules={7415:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>BasePaginatedComponent});class BasePaginatedComponent{constructor(){this.itemsPerPage=10}getCurrentPage(){return this.currentPage}setCurrentPage(event){this.currentPage=event}getItemsPerPage(){return this.itemsPerPage}}},6748:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ListAuthorsComponent:()=>ListAuthorsComponent});var _angular_router__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6055),_tools_Device__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6465),_common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7415),_pager_pager_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1360),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4565),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8371),_services_Cites_Authors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(936),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5781);function ListAuthorsComponent_li_8_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"li",10)(1,"a",11),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(3,"small"),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()()),2&rf){const item_r1=ctx.$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.MGl("routerLink","/authors/",item_r1.getName(),""),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij("",item_r1.getName()," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij("(",item_r1.getCount(),")")}}const _c0=function(a0,a1){return{"font-semibold":a0,"font-normal":a1}},_c1=function(a0){return{itemPerPage:a0}};let ListAuthorsComponent=(()=>{class ListAuthorsComponent2 extends _common_BasePaginatedComponent__WEBPACK_IMPORTED_MODULE_2__._{constructor(authorService,title,device){super(),this.authorService=authorService,this.title=title,this.device=device,this.authors=[],this.paginatedAuthors=[],this.itemsPerPage=11,this.sort="text",this.title.setTitle("Citations - Liste des auteurs"),this.itemsPerPage=11,device.isMobile()&&(this.itemsPerPage=8)}ngOnInit(){this.sortByAlpha()}sortByAlpha(){this.sort="text",this.authorService.authors$.subscribe({next:next=>{this.authors=next},complete:()=>{this.paginatedAuthors=this.authors.slice(0,this.itemsPerPage)}})}sortByCount(){this.sort="total",this.authorService.authors$.subscribe({next:next=>{this.authors=next.sort((a,b)=>a.getCount()>b.getCount()?-1:a.getCount()<b.getCount()?1:0)},complete:()=>{this.paginatedAuthors=this.authors.slice(0,this.itemsPerPage)}})}isSortByText(){return"text"===this.sort}isSortByTotal(){return"total"===this.sort}trackByAuthorName(index,author){return author.getName()}setPaginatedList(ev){this.paginatedAuthors=ev}}return ListAuthorsComponent2.\u0275fac=function(t){return new(t||ListAuthorsComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_services_Cites_Authors__WEBPACK_IMPORTED_MODULE_0__.I),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Dx),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_tools_Device__WEBPACK_IMPORTED_MODULE_4__.A))},ListAuthorsComponent2.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:ListAuthorsComponent2,selectors:[["app-list-authors"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__._Bn([_tools_Device__WEBPACK_IMPORTED_MODULE_4__.A]),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qOj,_angular_core__WEBPACK_IMPORTED_MODULE_1__.jDz],decls:13,vars:17,consts:[[1,"container","mb-36"],[1,"text-3xl","font-bold","text-stone-900","mb-2"],["title","Trier par nom",1,"bg-gray-100","text-violet-800","text-xs","inline-flex","items-center","px-2.5","py-0.5","rounded-full","mr-2",3,"ngClass","disabled","click"],["title","Trier par total de citations",1,"bg-gray-100","text-violet-800","text-xs","inline-flex","items-center","px-2.5","py-0.5","rounded-full",3,"ngClass","disabled","click"],[1,"list-none"],["class","p-1",4,"ngFor","ngForOf","ngForTrackBy"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"list","options","paginatedList$"],[1,"p-1"],[3,"routerLink"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"div",0)(1,"h1",1),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(3,"button",2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.sortByAlpha()}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(4," Trier par nom "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(5,"button",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("click",function(){return ctx.sortByCount()}),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(6," Trier par total "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(7,"ul",4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(8,ListAuthorsComponent_li_8_Template,5,3,"li",5),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(9,"div",6)(10,"div",7)(11,"section",8)(12,"app-pager",9),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("paginatedList$",function($event){return ctx.setPaginatedList($event)}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",null==ctx.authors?null:ctx.authors.length," Auteurs. "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.WLB(9,_c0,!0===ctx.isSortByText(),!1===ctx.isSortByText()))("disabled",ctx.isSortByText()),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__.WLB(12,_c0,!0===ctx.isSortByTotal(),!1===ctx.isSortByTotal()))("disabled",ctx.isSortByTotal()),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngForOf",ctx.paginatedAuthors)("ngForTrackBy",ctx.trackByAuthorName),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("list",ctx.authors)("options",_angular_core__WEBPACK_IMPORTED_MODULE_1__.VKq(15,_c1,ctx.getItemsPerPage())))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.mk,_angular_common__WEBPACK_IMPORTED_MODULE_5__.ax,_angular_router__WEBPACK_IMPORTED_MODULE_6__.rH,_pager_pager_component__WEBPACK_IMPORTED_MODULE_7__.P],encapsulation:2}),ListAuthorsComponent2})()},1360:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>PagerComponent});class PagerListParts{constructor(pager){this.pager=[],this.pagerFirstEdges=[],this.pagerLastEdges=[],this.pagerNumbers=[],this.pager=pager,this.pagerFirstEdges=this.pager.filter((value,index)=>index<2),this.pagerLastEdges=this.pager.slice().reverse().filter((value,index)=>index<2).reverse(),this.pagerNumbers=this.pager.filter((value,index)=>!this.pagerFirstEdges.includes(value)&&!this.pagerLastEdges.includes(value))}getAll(){return this.pager}getFirstEdges(){return this.pagerFirstEdges}getLastEdges(){return this.pagerLastEdges}getNumbers(){return this.pagerNumbers}}var cjs=__webpack_require__(2859),core=__webpack_require__(8371);class TotalPageNotSet extends Error{}class FirstPageNotSet extends Error{}class LastPageNotSet extends Error{}class CurrentPageNotSet extends Error{}class PageRequestedIsLessThanFirstPage extends Error{}class PageIndexDoesNotExists extends Error{}let PagerService=(()=>{class PagerService2{constructor(){this.originalList=[],this.itemPerPage=5,this.maxPagerItem=5,this.firstPage=1,this.totalPage=1,this.lastPage=1,this.previousPage=1,this.nextPage=1,this.currentPage=new cjs.BehaviorSubject(1),this.pagerIndexList=[],this.pagerItemList={},this.currentPage$=this.currentPage.asObservable().pipe((0,cjs.filter)(value=>!!value)),this.currentOffset$=this.currentPage.asObservable().pipe((0,cjs.filter)(value=>!!value),(0,cjs.map)(value=>this.getOffsetForPage(value)))}init(list,options){this.originalList="object"!=typeof list?new Array(list).fill(0):list,this.setOptions(options).resetPage().setTotalPage(list).calculateLastPage().calculateCurrentPage().calculatePreviousPage().calculateNextPage().createIndexList().buildPagerList()}isCurrentPage(pageIndex){return this.currentPage.getValue()===pageIndex}getOffset(){return this.getOffsetForPage(this.getCurrentPage())}getOffsetForPage(page){if(page<this.firstPage)throw new PageRequestedIsLessThanFirstPage;return page===this.firstPage?0:(page-1)*this.itemPerPage}getTotalPage(){return this.totalPage}getFirstPage(){return this.firstPage}getLastPage(){return this.lastPage}getCurrentPage(){return this.currentPage.getValue()}getPreviousPage(){return this.previousPage}getNextPage(){return this.nextPage}getPaginatedList(){const startOffset=this.getOffset();return this.originalList.slice(startOffset,startOffset+this.itemPerPage)}goToPage(pageIndex){if(this.getCurrentPage()===pageIndex)return this.getCurrentPage();if(!this.pagerIndexList.includes(pageIndex))throw new PageIndexDoesNotExists;return this.currentPage.next(pageIndex),this.calculatePreviousPage(),this.calculateNextPage(),this.createIndexList(),this.buildPagerList(),this.currentPage.getValue()}goToFirstPage(){return this.currentPage.getValue()===this.firstPage||(this.currentPage.next(this.firstPage),this.previousPage=this.firstPage,this.calculateNextPage(),this.createIndexList(),this.buildPagerList()),this.currentPage.getValue()}goToLastPage(){return this.currentPage.getValue()===this.lastPage||(this.currentPage.next(this.lastPage),this.nextPage=this.lastPage,this.calculatePreviousPage(),this.createIndexList(),this.buildPagerList()),this.currentPage.getValue()}goToNextPage(){return this.currentPage.getValue()===this.nextPage||(this.previousPage=this.currentPage.getValue(),this.currentPage.next(this.nextPage),this.calculateNextPage(),this.createIndexList(),this.buildPagerList()),this.currentPage.getValue()}goToPreviousPage(){return this.currentPage.getValue()===this.previousPage||(this.nextPage=this.currentPage.getValue(),this.currentPage.next(this.previousPage),this.calculatePreviousPage(),this.createIndexList(),this.buildPagerList()),this.currentPage.getValue()}getPagerIndexList(){return this.pagerIndexList}getPagerItemList(){return this.pagerItemList}setOptions(options){return options?(typeof options.itemPerPage<"u"&&(this.itemPerPage=options.itemPerPage),typeof options.maxPagerItem<"u"&&(this.maxPagerItem=options.maxPagerItem),this):this}setTotalPage(list){return this.totalPage=Math.ceil(("object"==typeof list?list.length:list)/this.itemPerPage),this}setFirstPage(firstPage){return this.firstPage=firstPage>=0?firstPage:this.firstPage,this}resetPage(){return this.currentPage.next(this.firstPage),this}calculateLastPage(){if(null===this.totalPage)throw new TotalPageNotSet;if(null===this.firstPage)throw new FirstPageNotSet;return this.lastPage=this.totalPage-1+this.firstPage,this}calculateCurrentPage(){if(null===this.lastPage)throw new LastPageNotSet;if(null===this.firstPage)throw new FirstPageNotSet;const currentPage=this.getCurrentPage();return this.currentPage.next(this.currentPage.getValue()<this.firstPage?this.firstPage:currentPage>this.lastPage?this.lastPage:currentPage),this}calculatePreviousPage(){if(null===this.currentPage)throw new CurrentPageNotSet;if(null===this.firstPage)throw new FirstPageNotSet;const previousPage=this.currentPage.getValue()-1;return this.previousPage=previousPage>=this.firstPage?previousPage:this.firstPage,this}calculateNextPage(){if(null===this.lastPage)throw new LastPageNotSet;if(null===this.currentPage)throw new CurrentPageNotSet;const nextPage=this.currentPage.getValue()+1;return this.nextPage=nextPage<=this.lastPage?nextPage:this.lastPage,this}createIndexList(){if(null===this.lastPage)throw new LastPageNotSet;if(null===this.currentPage)throw new CurrentPageNotSet;if(null===this.totalPage)throw new TotalPageNotSet;if(null===this.firstPage)throw new FirstPageNotSet;const nbItemOnSide=Math.floor(this.maxPagerItem/2),nbItemPerPageFromEnd=this.lastPage-this.maxPagerItem+1;let startOffset;startOffset=this.currentPage.getValue()<=nbItemOnSide?this.firstPage:this.lastPage-this.currentPage.getValue()<=nbItemOnSide?nbItemPerPageFromEnd<=this.firstPage?this.firstPage:nbItemPerPageFromEnd:this.currentPage.getValue()-nbItemOnSide;const nbItemPerPageFromStart=startOffset+(this.maxPagerItem-1),endOffset=nbItemPerPageFromStart>this.lastPage?this.lastPage:nbItemPerPageFromStart;this.pagerIndexList=[];for(let i=startOffset;i<=endOffset;i++)this.pagerIndexList.push(i);return this}buildPagerList(){let pager=[];return this.pagerIndexList.length&&(this.pagerIndexList.forEach(item=>{pager.push({index:item,label:item.toString()})}),pager=pager.filter((item,index)=>index<this.maxPagerItem)),pager.unshift({index:this.getPreviousPage(),label:"<"}),pager.unshift({index:this.getFirstPage(),label:"<<"}),pager.push({index:this.getNextPage(),label:">"}),pager.push({index:this.getLastPage(),label:">>"}),this.pagerItemList=new PagerListParts(pager),this.pagerItemList}}return PagerService2.\u0275fac=function(t){return new(t||PagerService2)},PagerService2.\u0275prov=core.Yz7({token:PagerService2,factory:PagerService2.\u0275fac,providedIn:"root"}),PagerService2})();var common=__webpack_require__(4565);const _c0=function(a0){return{current:a0}};function PagerComponent_ul_1_li_9_Template(rf,ctx){if(1&rf){const _r4=core.EpF();core.TgZ(0,"li",2)(1,"a",3),core.NdJ("click",function(){const item_r2=core.CHM(_r4).$implicit,ctx_r3=core.oxw(2);return core.KtG(ctx_r3.pager.goToPage(item_r2.index))}),core.TgZ(2,"span"),core._uU(3),core.qZA()()()}if(2&rf){const item_r2=ctx.$implicit,ctx_r1=core.oxw(2);core.xp6(1),core.Q6J("ngClass",core.VKq(2,_c0,ctx_r1.isCurrentPage(item_r2.index))),core.xp6(2),core.Oqu(item_r2.label)}}const _c1=function(a0){return{disabled:a0}};function PagerComponent_ul_1_Template(rf,ctx){if(1&rf){const _r6=core.EpF();core.TgZ(0,"ul",1)(1,"li",2)(2,"a",3),core.NdJ("click",function(){core.CHM(_r6);const ctx_r5=core.oxw();return core.KtG(ctx_r5.pager.goToFirstPage())}),core.TgZ(3,"span"),core._uU(4),core.qZA()()(),core.TgZ(5,"li",2)(6,"a",3),core.NdJ("click",function(){core.CHM(_r6);const ctx_r7=core.oxw();return core.KtG(ctx_r7.pager.goToPreviousPage())}),core.TgZ(7,"span"),core._uU(8),core.qZA()()(),core.YNc(9,PagerComponent_ul_1_li_9_Template,4,4,"li",4),core.TgZ(10,"li",2)(11,"a",3),core.NdJ("click",function(){core.CHM(_r6);const ctx_r8=core.oxw();return core.KtG(ctx_r8.pager.goToNextPage())}),core.TgZ(12,"span"),core._uU(13),core.qZA()()(),core.TgZ(14,"li",2)(15,"a",3),core.NdJ("click",function(){core.CHM(_r6);const ctx_r9=core.oxw();return core.KtG(ctx_r9.pager.goToLastPage())}),core.TgZ(16,"span"),core._uU(17),core.qZA()()()()}if(2&rf){const ctx_r0=core.oxw();core.xp6(2),core.Q6J("ngClass",core.VKq(9,_c1,ctx_r0.previousIsDisabled())),core.xp6(2),core.Oqu(ctx_r0.pager.getPagerItemList().getFirstEdges()[0].label),core.xp6(2),core.Q6J("ngClass",core.VKq(11,_c1,ctx_r0.previousIsDisabled())),core.xp6(2),core.Oqu(ctx_r0.pager.getPagerItemList().getFirstEdges()[1].label),core.xp6(1),core.Q6J("ngForOf",ctx_r0.pager.getPagerItemList().getNumbers()),core.xp6(2),core.Q6J("ngClass",core.VKq(13,_c1,ctx_r0.nextIsDisabled())),core.xp6(2),core.Oqu(ctx_r0.pager.getPagerItemList().getLastEdges()[0].label),core.xp6(2),core.Q6J("ngClass",core.VKq(15,_c1,ctx_r0.nextIsDisabled())),core.xp6(2),core.Oqu(ctx_r0.pager.getPagerItemList().getLastEdges()[1].label)}}let PagerComponent=(()=>{class PagerComponent2{constructor(pager){this.pager=pager,this.list=0,this.paginatedList=new cjs.BehaviorSubject(this.pager.getPaginatedList()),this.paginatedList$=this.paginatedList.asObservable().pipe((0,cjs.filter)(value=>!!value))}ngOnInit(){this.pager.init(this.list,this.options),this.pager.currentOffset$.subscribe(value=>{this.paginatedList.next(this.pager.getPaginatedList())})}ngOnChanges(changes){changes.list&&(changes.list.isFirstChange()||this.pager.init(changes.list.currentValue,this.options))}previousIsDisabled(){return this.pager.getCurrentPage()===this.pager.getPreviousPage()}nextIsDisabled(){return this.pager.getCurrentPage()===this.pager.getNextPage()}isCurrentPage(index){return this.pager.isCurrentPage(index)}hasList(){return"object"==typeof this.list&&this.pager.getTotalPage()>1}}return PagerComponent2.\u0275fac=function(t){return new(t||PagerComponent2)(core.Y36(PagerService))},PagerComponent2.\u0275cmp=core.Xpm({type:PagerComponent2,selectors:[["app-pager"]],inputs:{list:"list",options:"options"},outputs:{paginatedList$:"paginatedList$"},standalone:!0,features:[core._Bn([PagerService]),core.TTD,core.jDz],decls:2,vars:1,consts:[["class","ng-pager nav","aria-label","Pagination",4,"ngIf"],["aria-label","Pagination",1,"ng-pager","nav"],[1,"w-12"],[3,"ngClass","click"],["class","w-12",4,"ngFor","ngForOf"]],template:function(rf,ctx){1&rf&&(core.TgZ(0,"nav"),core.YNc(1,PagerComponent_ul_1_Template,18,17,"ul",0),core.qZA()),2&rf&&(core.xp6(1),core.Q6J("ngIf",ctx.hasList()))},dependencies:[common.O5,common.mk,common.ax],styles:[".ng-pager[_ngcontent-%COMP%]{margin-left:0;margin-bottom:1rem}.ng-pager[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}ul.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:inline-block;padding:5px 10px;list-style:none;width:40px}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{cursor:pointer}.ng-pager[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.current[_ngcontent-%COMP%]{font-weight:700}.ng-pager[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ng-pager[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{padding:.1875rem .625rem;color:#cacaca;cursor:default}"]}),PagerComponent2})()},6465:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Device});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8371);let Device=(()=>{class Device2{isMobile(){return!!Object.keys(navigator).length&&navigator.userAgent.includes("Mobile")}isDesktop(){return!this.isMobile()}}return Device2.\u0275fac=function(t){return new(t||Device2)},Device2.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({token:Device2,factory:Device2.\u0275fac}),Device2})()}};