"use strict";exports.id=825,exports.ids=[825],exports.modules={3286:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>LinkCitesByAuthorComponent});var _angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6055),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8371);let LinkCitesByAuthorComponent=(()=>{class LinkCitesByAuthorComponent2{}return LinkCitesByAuthorComponent2.\u0275fac=function(t){return new(t||LinkCitesByAuthorComponent2)},LinkCitesByAuthorComponent2.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({type:LinkCitesByAuthorComponent2,selectors:[["app-link-cites-by-author"]],inputs:{author:"author"},standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__.jDz],decls:2,vars:4,consts:[[3,"routerLink","title"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"a",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.MGl("routerLink","/authors/",ctx.author,"")("title","Liste des citations de ",ctx.author,""),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q2q("aria-label","Liste des citations de ",ctx.author,""),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.hij(" ",ctx.author," "))},dependencies:[_angular_router__WEBPACK_IMPORTED_MODULE_1__.rH],encapsulation:2}),LinkCitesByAuthorComponent2})()},8825:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RandomComponent:()=>RandomComponent});var _link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3286),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4565),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2859),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8371),_services_Cites__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3368),_services_Click__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2790),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5781);function RandomComponent_ng_container_0_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ynx(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(1,"h1",1),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(3,"p",2),_angular_core__WEBPACK_IMPORTED_MODULE_1__._UZ(4,"app-link-cites-by-author",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.BQk()),2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.hij(" ",ctx_r0.cite$.getValue().getCite()," "),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("author",ctx_r0.cite$.getValue().getAuthor())}}let RandomComponent=(()=>{class RandomComponent2{constructor(citesService,click,title){this.citesService=citesService,this.click=click,this.title=title,this.cite$=new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null),this.title.setTitle("Citations - Citation al\xe9atoire")}ngOnInit(){this.click.refresh$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(()=>this.citesService.getRandomCite())).subscribe({next:cite=>this.cite$.next(cite)}),this.click.click()}}return RandomComponent2.\u0275fac=function(t){return new(t||RandomComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_services_Cites__WEBPACK_IMPORTED_MODULE_0__._),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_services_Click__WEBPACK_IMPORTED_MODULE_3__.T),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Dx))},RandomComponent2.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:RandomComponent2,selectors:[["app-random"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"my-4","text-3xl","md:text-5xl","text-violet-800","font-bold","leading-tight","text-center","md:text-left","slide-in-bottom-h1"],[1,"leading-normal","text-base","md:text-2xl","mb-8","text-center","md:text-left","slide-in-bottom-subtitle"],[3,"author"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(0,RandomComponent_ng_container_0_Template,5,2,"ng-container",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(1,"async")),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngIf",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(1,1,ctx.cite$))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.O5,_angular_common__WEBPACK_IMPORTED_MODULE_5__.Ov,_link_cites_by_author_link_cites_by_author_component__WEBPACK_IMPORTED_MODULE_6__.u],encapsulation:2}),RandomComponent2})()}};