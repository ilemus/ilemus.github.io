var A=Object.defineProperty;var C=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as m,n as y,j as b,k as j,l as E,m as B,p as w,q as L,v as I,w as N,x as M,y as O,z as P}from"./scheduler.d3154425.js";let $=!1;function T(){$=!0}function q(){$=!1}function z(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function D(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=s?l+1:z(1,l,_=>t[n[_]].claim_order,s))-1;i[r]=n[o]+1;const c=o+1;n[c]=r,l=Math.max(c,l)}const u=[],a=[];let f=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(u.push(t[r-1]);f>=r;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);u.reverse(),a.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<a.length;r++){for(;s<u.length&&a[r].claim_order>=u[s].claim_order;)s++;const o=s<u.length?u[s]:null;e.insertBefore(a[r],o)}}function H(e,t){if($){for(D(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?H(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ae(e){return e.dataset.svelteH}function le(e){let t;return{p(...n){t=n,t.forEach(i=>e.push(i))},r(){t.forEach(n=>e.splice(e.indexOf(n),1))}}}function fe(e){return e===""?null:+e}function W(e){return Array.from(e.childNodes)}function F(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,l=!1){F(e);const u=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,l||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const r=n(f);return r===void 0?e.splice(a,1):e[a]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function G(e,t,n,i){return S(e,l=>l.nodeName===t,l=>{const u=[];for(let a=0;a<l.attributes.length;a++){const f=l.attributes[a];n[f.name]||u.push(f.name)}u.forEach(a=>l.removeAttribute(a))},()=>i(t))}function ue(e,t,n){return G(e,t,n,V)}function J(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ce(e){return J(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t){e.value=t??""}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function he(e,t){return new e(t)}const h=new Set;let d;function me(){d={r:0,c:[],p:d}}function $e(){d.r||m(d.c),d=d.p}function K(e,t){e&&e.i&&(h.delete(e),e.i(t))}function pe(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function xe(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),w(()=>{const u=e.$$.on_mount.map(M).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...u):m(u),e.$$.on_mount=[]}),l.forEach(w)}function U(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(O.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,l,u,a,f=[-1]){const r=I;N(e);const s=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:l,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(c,_,...g)=>{const v=g.length?g[0]:_;return s.ctx&&l(s.ctx[c],s.ctx[c]=v)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](v),o&&X(e,c)),_}):[],s.update(),o=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){T();const c=W(t.target);s.fragment&&s.fragment.l(c),c.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),q(),j()}N(r)}class be{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){U(this,1),this.$destroy=y}$on(t,n){if(!E(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{de as A,re as B,te as C,le as D,fe as E,be as S,ee as a,$e as b,ce as c,K as d,ie as e,R as f,V as g,ue as h,ve as i,W as j,se as k,_e as l,x as m,J as n,oe as o,me as p,he as q,xe as r,ne as s,pe as t,ge as u,Q as v,U as w,H as x,ye as y,ae as z};