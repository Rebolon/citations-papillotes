import{v as x}from"./chunk-WCIG5XE2.js";import{D as h,H as f,K as l,N,T as j,V as y,Z as S,ca as k,j as b,m as d,r as a,t as L,v}from"./chunk-RANHGFWP.js";var i=class{name;count;constructor(A,r=1){this.name=A,this.count=r}getName(){return this.name}getCount(){return this.count}addCount(){return this.count++,this.count}};var U=(()=>{class o{citeService=k(x);authors=new b([]);authors$=this.authors.asObservable().pipe(a(r=>r.map(e=>new i(e.getName(),e.getCount()))),l(),f(1));count=0;constructor(){let r=this.citeService,e=[];r.cites$.pipe(y(t=>d(t)),a(t=>t.getAuthor()),a(t=>{let s;if(e.find(n=>n.getName()===t)){let n=e.findIndex(m=>m.getName()===t);e[n].addCount(),s=e[n]}else s=new i(t),e.push(s);return s}),l(),j(r.cites$),N(t=>t.getName().toLowerCase().includes("proverbe")),L(t=>t.pipe(h(),a(s=>s.sort((n,m)=>{let c=n.getName().split(" "),u=m.getName().split(" "),g=(c.length>1?c.pop():c.shift())??"",p=c[0],w=(u.length>1?u.pop():u.shift())??"",C=u[0];return g.toLowerCase()<w.toLowerCase()?-1:g.toLowerCase()>w.toLowerCase()?1:p?p.toLowerCase()<C.toLowerCase()?-1:p.toLowerCase()>C.toLowerCase()?1:0:0})))),v(),h(),f(1)).subscribe(t=>{this.authors.next(t)})}static \u0275fac=function(e){return new(e||o)};static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();export{i as a,U as b};
