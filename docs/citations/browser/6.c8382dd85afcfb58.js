"use strict";(self.webpackChunkcitations=self.webpackChunkcitations||[]).push([[6],{1006:(L,l,n)=>{n.r(l),n.d(l,{ListCitesByAuthorsComponent:()=>E});var c=n(3482),r=n(5259),u=n(7476),_=n(6814),t=n(9467),h=n(570),p=n(6593);function g(i,a){return this.trackByCiteId}function m(i,a){if(1&i&&t._uU(0),2&i){const e=t.oxw(2);t.hij('Aucune citation de "',e.author,'"\xa0')}}function C(i,a){if(1&i&&t._uU(0),2&i){const e=t.oxw(2);t.AsE("",e.cites.length,' citation de "',e.author,'":\xa0')}}function d(i,a){if(1&i&&t._uU(0),2&i){const e=t.oxw(2);t.AsE("",e.cites.length,' citations de "',e.author,'":\xa0')}}function P(i,a){if(1&i&&(t.TgZ(0,"h1",7),t.YNc(1,m,1,1,"ng-template",8)(2,C,1,2,"ng-template",9)(3,d,1,2,"ng-template",10),t.qZA()),2&i){const e=t.oxw();t.Q6J("ngPlural",e.cites.length)}}function f(i,a){if(1&i&&(t.TgZ(0,"li",11)(1,"cite"),t._uU(2),t.qZA()()),2&i){const e=a.$implicit;t.xp6(2),t.hij("\u201d",e.getCite(),"\u201d")}}const A=i=>({itemPerPage:i});let E=(()=>{class i extends r._{constructor(e,s,o){super(),this.citeService=e,this.title=s,this.device=o,this.cites=[],this.paginatedCites=[],this.title.setTitle("Citations - Liste des citations"),this.itemsPerPage=10,o.isMobile()&&(this.itemsPerPage=4)}ngOnInit(){this.citeService.searchByAuthor(this.author).subscribe(e=>this.fillCites(e))}fillCites(e){this.cites=[],this.paginatedCites=[],e.forEach((s,o)=>{this.cites.push(s)}),this.paginatedCites=this.cites.slice(0,this.itemsPerPage)}trackByCiteId(e,s){return s.getId()}setPaginatedList(e){this.paginatedCites=e}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(h._),t.Y36(p.Dx),t.Y36(c.A))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-cites-by-authors"]],inputs:{author:"author"},standalone:!0,features:[t._Bn([c.A]),t.qOj,t.jDz],decls:9,vars:5,consts:[[1,"container","mb-36"],["class","text-3xl font-bold text-stone-900 mb-2",3,"ngPlural"],[1,"list-none"],[1,"container"],[1,"w-full"],["id","bottom-navigation",1,"block","fixed","inset-x-0","bottom-10","z-10","bg-white"],[3,"list","options","paginatedList$"],[1,"text-3xl","font-bold","text-stone-900","mb-2",3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"],[1,"p-1"],["class","p-1"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0),t.YNc(1,P,4,1,"h1",1),t.TgZ(2,"ul",2),t.SjG(3,f,3,1,"li",12,g,!0),t.qZA()(),t.TgZ(5,"div",3)(6,"div",4)(7,"section",5)(8,"app-pager",6),t.NdJ("paginatedList$",function(x){return o.setPaginatedList(x)}),t.qZA()()()()),2&s&&(t.xp6(1),t.um2(1,o.author?1:-1),t.wJu(3,o.paginatedCites),t.xp6(7),t.Q6J("list",o.cites)("options",t.VKq(3,A,o.getItemsPerPage())))},dependencies:[_.iq,_.zE,u.P],encapsulation:2})}return i})()}}]);