import{b as I}from"./chunk-52Y72HIO.mjs";import{B as g,D as w,E as y,H as S,J as k,M as B,f as m,ia as p,k as L,ka as x,kb as F,n as v,na as A,q as a,r as N,s as j,z as l}from"./chunk-D654P62Y.mjs";m();p();var i=class{name;count;constructor($,r=1){this.name=$,this.count=r}getName(){return this.name}getCount(){return this.count}addCount(){return this.count++,this.count}};m();p();B();F();F();var H=(()=>{class o{citeService=A(I);authors=new L([]);authors$=this.authors.asObservable().pipe(a(r=>r.map(e=>new i(e.getName(),e.getCount()))),w(),g(1));count=0;constructor(){let r=this.citeService,e=[];r.cites$.pipe(k(t=>v(t)),a(t=>t.getAuthor()),a(t=>{let s;if(e.find(n=>n.getName()===t)){let n=e.findIndex(h=>h.getName()===t);e[n].addCount(),s=e[n]}else s=new i(t),e.push(s);return s}),w(),S(r.cites$),y(t=>t.getName().toLowerCase().includes("proverbe")),N(t=>t.pipe(l(),a(s=>s.sort((n,h)=>{let c=n.getName().split(" "),u=h.getName().split(" "),C=(c.length>1?c.pop():c.shift())??"",f=c[0],b=(u.length>1?u.pop():u.shift())??"",d=u[0];return C.toLowerCase()<b.toLowerCase()?-1:C.toLowerCase()>b.toLowerCase()?1:f?f.toLowerCase()<d.toLowerCase()?-1:f.toLowerCase()>d.toLowerCase()?1:0:0})))),j(),l(),g(1)).subscribe(t=>{this.authors.next(t)})}static \u0275fac=function(e){return new(e||o)};static \u0275prov=x({token:o,factory:o.\u0275fac})}return o})();export{i as a,H as b};
