import{r as a,j as o,S as U,c as I,R as j,u as D,a as Ue,b as Ve,d as ne,C as P,e as E,f as M,g as _,h as H,B as Be,i as Ke}from"./index-BaQniTDb.js";import{c as We}from"./createLucideIcon-DPIuDmrb.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=We("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);function L(e,t=[]){let n=[];function r(l,d){const c=a.createContext(d),u=n.length;n=[...n,d];function i(f){const{scope:p,children:g,...m}=f,h=(p==null?void 0:p[e][u])||c,N=a.useMemo(()=>m,Object.values(m));return o.jsx(h.Provider,{value:N,children:g})}function v(f,p){const g=(p==null?void 0:p[e][u])||c,m=a.useContext(g);if(m)return m;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${l}\``)}return i.displayName=l+"Provider",[i,v]}const s=()=>{const l=n.map(d=>a.createContext(d));return function(c){const u=(c==null?void 0:c[e])||l;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return s.scopeName=e,[r,qe(s,...t)]}function qe(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(l){const d=r.reduce((c,{useScope:u,scopeName:i})=>{const f=u(l)[`__scope${i}`];return{...c,...f}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return n.scopeName=t.scopeName,n}var Ye=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],y=Ye.reduce((e,t)=>{const n=a.forwardRef((r,s)=>{const{asChild:l,...d}=r,c=l?U:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(c,{...d,ref:s})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),z="Progress",q=100,[Xe,Mt]=L(z),[Je,Qe]=Xe(z),re=a.forwardRef((e,t)=>{const{__scopeProgress:n,value:r=null,max:s,getValueLabel:l=Ze,...d}=e;(s||s===0)&&!ee(s)&&console.error(He(`${s}`,"Progress"));const c=ee(s)?s:q;r!==null&&!te(r,c)&&console.error(et(`${r}`,"Progress"));const u=te(r,c)?r:null,i=O(u)?l(u,c):void 0;return o.jsx(Je,{scope:n,value:u,max:c,children:o.jsx(y.div,{"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":O(u)?u:void 0,"aria-valuetext":i,role:"progressbar","data-state":ae(u,c),"data-value":u??void 0,"data-max":c,...d,ref:t})})});re.displayName=z;var oe="ProgressIndicator",se=a.forwardRef((e,t)=>{const{__scopeProgress:n,...r}=e,s=Qe(oe,n);return o.jsx(y.div,{"data-state":ae(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...r,ref:t})});se.displayName=oe;function Ze(e,t){return`${Math.round(e/t*100)}%`}function ae(e,t){return e==null?"indeterminate":e===t?"complete":"loading"}function O(e){return typeof e=="number"}function ee(e){return O(e)&&!isNaN(e)&&e>0}function te(e,t){return O(e)&&!isNaN(e)&&e<=t&&e>=0}function He(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${q}\`.`}function et(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${q} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var ie=re,tt=se;const ce=a.forwardRef(({className:e,value:t,...n},r)=>o.jsx(ie,{ref:r,className:I("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...n,children:o.jsx(tt,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})}));ce.displayName=ie.displayName;function R(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function nt(e){const t=e+"CollectionProvider",[n,r]=L(t),[s,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=g=>{const{scope:m,children:h}=g,N=j.useRef(null),x=j.useRef(new Map).current;return o.jsx(s,{scope:m,itemMap:x,collectionRef:N,children:h})};d.displayName=t;const c=e+"CollectionSlot",u=j.forwardRef((g,m)=>{const{scope:h,children:N}=g,x=l(c,h),b=D(m,x.collectionRef);return o.jsx(U,{ref:b,children:N})});u.displayName=c;const i=e+"CollectionItemSlot",v="data-radix-collection-item",f=j.forwardRef((g,m)=>{const{scope:h,children:N,...x}=g,b=j.useRef(null),S=D(m,b),A=l(i,h);return j.useEffect(()=>(A.itemMap.set(b,{ref:b,...x}),()=>void A.itemMap.delete(b))),o.jsx(U,{[v]:"",ref:S,children:N})});f.displayName=i;function p(g){const m=l(e+"CollectionConsumer",g);return j.useCallback(()=>{const N=m.collectionRef.current;if(!N)return[];const x=Array.from(N.querySelectorAll(`[${v}]`));return Array.from(m.itemMap.values()).sort((A,w)=>x.indexOf(A.ref.current)-x.indexOf(w.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:d,Slot:u,ItemSlot:f},p,r]}var V=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},rt=Ue.useId||(()=>{}),ot=0;function ue(e){const[t,n]=a.useState(rt());return V(()=>{e||n(r=>r??String(ot++))},[e]),e||(t?`radix-${t}`:"")}function Y(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function le({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,s]=st({defaultProp:t,onChange:n}),l=e!==void 0,d=l?e:r,c=Y(n),u=a.useCallback(i=>{if(l){const f=typeof i=="function"?i(e):i;f!==e&&c(f)}else s(i)},[l,e,s,c]);return[d,u]}function st({defaultProp:e,onChange:t}){const n=a.useState(e),[r]=n,s=a.useRef(r),l=Y(t);return a.useEffect(()=>{s.current!==r&&(l(r),s.current=r)},[r,s,l]),n}var at=a.createContext(void 0);function de(e){const t=a.useContext(at);return e||t||"ltr"}var G="rovingFocusGroup.onEntryFocus",it={bubbles:!1,cancelable:!0},$="RovingFocusGroup",[B,fe,ct]=nt($),[ut,me]=L($,[ct]),[lt,dt]=ut($),ve=a.forwardRef((e,t)=>o.jsx(B.Provider,{scope:e.__scopeRovingFocusGroup,children:o.jsx(B.Slot,{scope:e.__scopeRovingFocusGroup,children:o.jsx(ft,{...e,ref:t})})}));ve.displayName=$;var ft=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:s=!1,dir:l,currentTabStopId:d,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:u,onEntryFocus:i,preventScrollOnEntryFocus:v=!1,...f}=e,p=a.useRef(null),g=D(t,p),m=de(l),[h=null,N]=le({prop:d,defaultProp:c,onChange:u}),[x,b]=a.useState(!1),S=Y(i),A=fe(n),w=a.useRef(!1),[Oe,Q]=a.useState(0);return a.useEffect(()=>{const C=p.current;if(C)return C.addEventListener(G,S),()=>C.removeEventListener(G,S)},[S]),o.jsx(lt,{scope:n,orientation:r,dir:m,loop:s,currentTabStopId:h,onItemFocus:a.useCallback(C=>N(C),[N]),onItemShiftTab:a.useCallback(()=>b(!0),[]),onFocusableItemAdd:a.useCallback(()=>Q(C=>C+1),[]),onFocusableItemRemove:a.useCallback(()=>Q(C=>C-1),[]),children:o.jsx(y.div,{tabIndex:x||Oe===0?-1:0,"data-orientation":r,...f,ref:g,style:{outline:"none",...e.style},onMouseDown:R(e.onMouseDown,()=>{w.current=!0}),onFocus:R(e.onFocus,C=>{const Le=!w.current;if(C.target===C.currentTarget&&Le&&!x){const Z=new CustomEvent(G,it);if(C.currentTarget.dispatchEvent(Z),!Z.defaultPrevented){const k=A().filter(T=>T.focusable),$e=k.find(T=>T.active),ke=k.find(T=>T.id===h),Ge=[$e,ke,...k].filter(Boolean).map(T=>T.ref.current);xe(Ge,v)}}w.current=!1}),onBlur:R(e.onBlur,()=>b(!1))})})}),pe="RovingFocusGroupItem",ge=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:s=!1,tabStopId:l,...d}=e,c=ue(),u=l||c,i=dt(pe,n),v=i.currentTabStopId===u,f=fe(n),{onFocusableItemAdd:p,onFocusableItemRemove:g}=i;return a.useEffect(()=>{if(r)return p(),()=>g()},[r,p,g]),o.jsx(B.ItemSlot,{scope:n,id:u,focusable:r,active:s,children:o.jsx(y.span,{tabIndex:v?0:-1,"data-orientation":i.orientation,...d,ref:t,onMouseDown:R(e.onMouseDown,m=>{r?i.onItemFocus(u):m.preventDefault()}),onFocus:R(e.onFocus,()=>i.onItemFocus(u)),onKeyDown:R(e.onKeyDown,m=>{if(m.key==="Tab"&&m.shiftKey){i.onItemShiftTab();return}if(m.target!==m.currentTarget)return;const h=pt(m,i.orientation,i.dir);if(h!==void 0){if(m.metaKey||m.ctrlKey||m.altKey||m.shiftKey)return;m.preventDefault();let x=f().filter(b=>b.focusable).map(b=>b.ref.current);if(h==="last")x.reverse();else if(h==="prev"||h==="next"){h==="prev"&&x.reverse();const b=x.indexOf(m.currentTarget);x=i.loop?gt(x,b+1):x.slice(b+1)}setTimeout(()=>xe(x))}})})})});ge.displayName=pe;var mt={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function vt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function pt(e,t,n){const r=vt(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return mt[r]}function xe(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function gt(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var xt=ve,ht=ge;function bt(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}var he=e=>{const{present:t,children:n}=e,r=Nt(t),s=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),l=D(r.ref,Ct(s));return typeof n=="function"||r.isPresent?a.cloneElement(s,{ref:l}):null};he.displayName="Presence";function Nt(e){const[t,n]=a.useState(),r=a.useRef({}),s=a.useRef(e),l=a.useRef("none"),d=e?"mounted":"unmounted",[c,u]=bt(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const i=F(r.current);l.current=c==="mounted"?i:"none"},[c]),V(()=>{const i=r.current,v=s.current;if(v!==e){const p=l.current,g=F(i);e?u("MOUNT"):g==="none"||(i==null?void 0:i.display)==="none"?u("UNMOUNT"):u(v&&p!==g?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,u]),V(()=>{if(t){const i=f=>{const g=F(r.current).includes(f.animationName);f.target===t&&g&&Ve.flushSync(()=>u("ANIMATION_END"))},v=f=>{f.target===t&&(l.current=F(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:a.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}function F(e){return(e==null?void 0:e.animationName)||"none"}function Ct(e){var r,s;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var X="Tabs",[Rt,_t]=L(X,[me]),be=me(),[It,J]=Rt(X),Ne=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:s,defaultValue:l,orientation:d="horizontal",dir:c,activationMode:u="automatic",...i}=e,v=de(c),[f,p]=le({prop:r,onChange:s,defaultProp:l});return o.jsx(It,{scope:n,baseId:ue(),value:f,onValueChange:p,orientation:d,dir:v,activationMode:u,children:o.jsx(y.div,{dir:v,"data-orientation":d,...i,ref:t})})});Ne.displayName=X;var Ce="TabsList",Re=a.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...s}=e,l=J(Ce,n),d=be(n);return o.jsx(xt,{asChild:!0,...d,orientation:l.orientation,dir:l.dir,loop:r,children:o.jsx(y.div,{role:"tablist","aria-orientation":l.orientation,...s,ref:t})})});Re.displayName=Ce;var Ie="TabsTrigger",ye=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:s=!1,...l}=e,d=J(Ie,n),c=be(n),u=Se(d.baseId,r),i=Ae(d.baseId,r),v=r===d.value;return o.jsx(ht,{asChild:!0,...c,focusable:!s,active:v,children:o.jsx(y.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":i,"data-state":v?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:u,...l,ref:t,onMouseDown:R(e.onMouseDown,f=>{!s&&f.button===0&&f.ctrlKey===!1?d.onValueChange(r):f.preventDefault()}),onKeyDown:R(e.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&d.onValueChange(r)}),onFocus:R(e.onFocus,()=>{const f=d.activationMode!=="manual";!v&&!s&&f&&d.onValueChange(r)})})})});ye.displayName=Ie;var Te="TabsContent",je=a.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:s,children:l,...d}=e,c=J(Te,n),u=Se(c.baseId,r),i=Ae(c.baseId,r),v=r===c.value,f=a.useRef(v);return a.useEffect(()=>{const p=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(p)},[]),o.jsx(he,{present:s||v,children:({present:p})=>o.jsx(y.div,{"data-state":v?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":u,hidden:!p,id:i,tabIndex:0,...d,ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0},children:p&&l})})});je.displayName=Te;function Se(e,t){return`${e}-trigger-${t}`}function Ae(e,t){return`${e}-content-${t}`}var yt=Ne,we=Re,Pe=ye,Ee=je;const Tt=yt,Me=a.forwardRef(({className:e,...t},n)=>o.jsx(we,{ref:n,className:I("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));Me.displayName=we.displayName;const K=a.forwardRef(({className:e,...t},n)=>o.jsx(Pe,{ref:n,className:I("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));K.displayName=Pe.displayName;const W=a.forwardRef(({className:e,...t},n)=>o.jsx(Ee,{ref:n,className:I("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));W.displayName=Ee.displayName;const jt=ne("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),_e=a.forwardRef(({className:e,variant:t,...n},r)=>o.jsx("div",{ref:r,role:"alert",className:I(jt({variant:t}),e),...n}));_e.displayName="Alert";const Fe=a.forwardRef(({className:e,...t},n)=>o.jsx("h5",{ref:n,className:I("mb-1 font-medium leading-none tracking-tight",e),...t}));Fe.displayName="AlertTitle";const De=a.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:I("text-sm [&_p]:leading-relaxed",e),...t}));De.displayName="AlertDescription";const St=ne("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function At({className:e,variant:t,...n}){return o.jsx("div",{className:I(St({variant:t}),e),...n})}const Ft=()=>{const[e,t]=a.useState(75),n=()=>{t(r=>Math.max(r-10,0))};return o.jsxs("div",{className:"container mx-auto p-4 space-y-6",children:[o.jsx("h1",{className:"text-4xl font-bold text-center mb-8",children:"Space Exploration Dashboard"}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[o.jsxs(P,{children:[o.jsx(E,{children:o.jsx(M,{children:"Mission Status"})}),o.jsx(_,{children:o.jsxs(_e,{children:[o.jsx(ze,{className:"h-4 w-4"}),o.jsx(Fe,{children:"Attention"}),o.jsx(De,{children:"Approaching asteroid field. Proceed with caution."})]})}),o.jsx(H,{children:o.jsx(Be,{onClick:n,children:"Engage Thrusters"})})]}),o.jsxs(P,{children:[o.jsx(E,{children:o.jsx(M,{children:"Fuel Levels"})}),o.jsxs(_,{className:"space-y-4",children:[o.jsx(ce,{value:e,className:"w-full"}),o.jsxs("p",{className:"text-center",children:[e,"% Remaining"]})]}),o.jsx(H,{children:o.jsx(At,{variant:e>20?"secondary":"destructive",children:e>20?"Sufficient":"Low Fuel"})})]}),o.jsxs(P,{children:[o.jsx(E,{children:o.jsx(M,{children:"Communication"})}),o.jsx(_,{children:o.jsxs(Tt,{defaultValue:"incoming",className:"w-full",children:[o.jsxs(Me,{className:"grid w-full grid-cols-2",children:[o.jsx(K,{value:"incoming",children:"Incoming"}),o.jsx(K,{value:"outgoing",children:"Outgoing"})]}),o.jsx(W,{value:"incoming",children:o.jsx("p",{children:'Last message: "Good luck, explorers!"'})}),o.jsx(W,{value:"outgoing",children:o.jsx("p",{children:"Signal strength: Strong"})})]})})]})]}),o.jsxs(P,{children:[o.jsxs(E,{children:[o.jsx(M,{children:"Mission Progress"}),o.jsx(Ke,{children:"Distance traveled over time"})]}),o.jsxs(_,{children:[o.jsx("p",{className:"text-center text-lg font-semibold",children:"Total Distance: 19,550 km"}),o.jsx("p",{className:"text-center text-sm text-muted-foreground",children:"(Data visualization not available in this view)"})]})]}),o.jsxs(P,{children:[o.jsx(E,{children:o.jsx(M,{children:"Nearby Celestial Bodies"})}),o.jsx(_,{children:o.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[o.jsx("li",{children:"Mars (Red Planet) - Distance: 78.3 million km"}),o.jsx("li",{children:"Europa (Jupiter's Moon) - Distance: 628.3 million km"}),o.jsx("li",{children:"Andromeda Galaxy - Distance: 2.537 million light-years"})]})})]})]})};export{Ft as default};
