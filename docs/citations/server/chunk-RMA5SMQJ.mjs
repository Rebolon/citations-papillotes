import './polyfills.server.mjs';
import{a as F}from"./chunk-LWXHOTYD.mjs";import{a as A}from"./chunk-CXXZ4SZR.mjs";import{a as B}from"./chunk-DQTIU5F5.mjs";import"./chunk-CLFCCJA5.mjs";import{$a as g,Ia as h,Ka as u,La as x,Mb as T,N as c,Pa as s,Q as p,Qa as a,Ra as b,S as d,Xa as C,Yb as w,Z as o,Za as v,_ as f,cb as y,f as m,fb as k,gb as S,ya as r}from"./chunk-QWE3LPUG.mjs";import"./chunk-KRLCULJA.mjs";function M(e,t){e&1&&(s(0,"h1",0),C(1),a(),s(2,"p",1),b(3,"app-link-cites-by-author",2),a()),e&2&&(r(1),v(" ",t.getCite()," "),r(2),h("author",t.getAuthor()))}var q=(()=>{let t=class t{constructor(){this.cite=new m({}),this.cite$=this.cite.asObservable().pipe(c(1)),this.citesService=o(B),this.click=o(F),this.title=o(w),this.title.setTitle("Citations - Citation al\xE9atoire"),this.click.refresh$.pipe(d(i=>console.info("refresh subscribe",i)),p(()=>this.citesService.getRandomCite())).subscribe({next:i=>this.cite.next(i)})}ngOnInit(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=f({type:t,selectors:[["app-random"]],standalone:!0,features:[g([]),y],decls:2,vars:3,consts:[[1,"my-4","text-3xl","md:text-5xl","text-violet-800","font-bold","leading-tight","text-center","md:text-left","slide-in-bottom-h1"],[1,"leading-normal","text-base","md:text-2xl","mb-8","text-center","md:text-left","slide-in-bottom-subtitle"],[3,"author"]],template:function(n,I){if(n&1&&(u(0,M,4,2),k(1,"async")),n&2){let l;x(0,(l=S(1,1,I.cite$))?0:-1,l)}},dependencies:[T,A],encapsulation:2});let e=t;return e})();export{q as RandomComponent};
