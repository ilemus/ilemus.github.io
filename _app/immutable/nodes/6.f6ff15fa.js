import{s as S,h as F,n as B,i as X,b as Z,f as ee}from"../chunks/scheduler.d3154425.js";import{S as z,i as G,g as p,s as M,m as te,h as _,j as T,f as w,c as j,n as ne,k as h,a as C,x as g,A as ae,o as se,y as le,r as J,u as O,z as H,v as Y,d as U,b as re,t as k,w as K,B as ie,p as oe}from"../chunks/index.a7ecb635.js";import{N as ce}from"../chunks/NavBar.18f832a5.js";function L(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function fe(a){let e,l,t,r,f,i,u,y,E,v;return{c(){e=p("tr"),l=p("td"),t=p("img"),f=M(),i=p("td"),u=te(a[1]),this.h()},l(d){e=_(d,"TR",{id:!0,class:!0});var m=T(e);l=_(m,"TD",{class:!0});var N=T(l);t=_(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(w),f=j(m),i=_(m,"TD",{class:!0});var I=T(i);u=ne(I,a[1]),I.forEach(w),m.forEach(w),this.h()},h(){F(t.src,r=a[2])||h(t,"src",r),h(t,"alt",a[1]),h(t,"class","w-12 bg-slate-500 rounded-md"),h(l,"class","flex justify-center items-center w-12 h-12 ms-2"),h(i,"class","flex-grow w-auto ms-4"),h(e,"id",y=`${a[0]}`),h(e,"class","flex flex-row justify-start items-center p-2 w-full hover:bg-slate-100 active:bg-white")},m(d,m){C(d,e,m),g(e,l),g(l,t),g(e,f),g(e,i),g(i,u),E||(v=ae(e,"click",a[3]),E=!0)},p(d,[m]){m&4&&!F(t.src,r=d[2])&&h(t,"src",r),m&2&&h(t,"alt",d[1]),m&2&&se(u,d[1]),m&1&&y!==(y=`${d[0]}`)&&h(e,"id",y)},i:B,o:B,d(d){d&&w(e),E=!1,v()}}}function de(a,e,l){let{id:t=-1}=e,{name:r="N/A"}=e,{iconUrl:f="N/A"}=e;function i(u){X.call(this,a,u)}return a.$$set=u=>{"id"in u&&l(0,t=u.id),"name"in u&&l(1,r=u.name),"iconUrl"in u&&l(2,f=u.iconUrl)},[t,r,f,i]}class ue extends z{constructor(e){super(),G(this,e,de,fe,S,{id:0,name:1,iconUrl:2})}}function R(a,e,l){const t=a.slice();return t[3]=e[l],t}function V(a){let e,l;return e=new ue({props:{id:a[3].id,name:a[3].name,iconUrl:a[3].iconUrl}}),{c(){J(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){Y(e,t,r),l=!0},p:B,i(t){l||(U(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){K(e,t)}}}function he(a){let e,l,t,r,f,i,u="Nashville, TN Property Managers",y,E,v,d,m=`<tr><th class="px-4 py-2" hidden="${!0}">Icon</th> <th class="px-4 py-2" hidden="${!0}">Name</th></tr>`,N,I,D;function Q(n){a[2](n)}let P={};a[0]!==void 0&&(P.loggedIn=a[0]),e=new ce({props:P}),Z.push(()=>le(e,"loggedIn",Q));let $=L(a[1]),s=[];for(let n=0;n<$.length;n+=1)s[n]=V(R(a,$,n));const W=n=>k(s[n],1,1,()=>{s[n]=null});return{c(){J(e.$$.fragment),t=M(),r=p("div"),f=p("div"),i=p("h1"),i.textContent=u,y=M(),E=p("div"),v=p("table"),d=p("thead"),d.innerHTML=m,N=M(),I=p("tbody");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){O(e.$$.fragment,n),t=j(n),r=_(n,"DIV",{class:!0});var o=T(r);f=_(o,"DIV",{class:!0});var b=T(f);i=_(b,"H1",{class:!0,["data-svelte-h"]:!0}),H(i)!=="svelte-1fgv5"&&(i.textContent=u),y=j(b),E=_(b,"DIV",{class:!0});var c=T(E);v=_(c,"TABLE",{class:!0});var x=T(v);d=_(x,"THEAD",{["data-svelte-h"]:!0}),H(d)!=="svelte-1bih9bv"&&(d.innerHTML=m),N=j(x),I=_(x,"TBODY",{class:!0});var q=T(I);for(let A=0;A<s.length;A+=1)s[A].l(q);q.forEach(w),x.forEach(w),c.forEach(w),b.forEach(w),o.forEach(w),this.h()},h(){h(i,"class","text-4xl mt-8 font-bold text-center text-black"),h(I,"class","divide-y divide-black w-full"),h(v,"class","w-full"),h(E,"class","shadow-md w-full"),h(f,"class","w-2/3"),h(r,"class","flex justify-center w-full h-screen bg-[#FFFBFE]")},m(n,o){Y(e,n,o),C(n,t,o),C(n,r,o),g(r,f),g(f,i),g(f,y),g(f,E),g(E,v),g(v,d),g(v,N),g(v,I);for(let b=0;b<s.length;b+=1)s[b]&&s[b].m(I,null);D=!0},p(n,[o]){const b={};if(!l&&o&1&&(l=!0,b.loggedIn=n[0],ee(()=>l=!1)),e.$set(b),o&2){$=L(n[1]);let c;for(c=0;c<$.length;c+=1){const x=R(n,$,c);s[c]?(s[c].p(x,o),U(s[c],1)):(s[c]=V(x),s[c].c(),U(s[c],1),s[c].m(I,null))}for(oe(),c=$.length;c<s.length;c+=1)W(c);re()}},i(n){if(!D){U(e.$$.fragment,n);for(let o=0;o<$.length;o+=1)U(s[o]);D=!0}},o(n){k(e.$$.fragment,n),s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)k(s[o]);D=!1},d(n){n&&(w(t),w(r)),K(e,n),ie(s,n)}}}function me(a,e,l){let t=!1,r=[{id:0,name:"Jack Costigan Real Estate",iconUrl:"https://images.squarespace-cdn.com/content/v1/6047d2beb02148755fb6e110/0f965ab8-d478-448e-8749-a3a7131b2bd1/jc+logo+png+white+.png?format=1500w"},{id:1,name:"Nashville Property Management Pros",iconUrl:"https://images.squarespace-cdn.com/content/v1/6047d2beb02148755fb6e110/0f965ab8-d478-448e-8749-a3a7131b2bd1/jc+logo+png+white+.png?format=1500w"}];function f(i){t=i,l(0,t)}return[t,r,f]}class pe extends z{constructor(e){super(),G(this,e,me,he,S,{})}}export{pe as component};
