import{a as T,t as R,b as M,e as le}from"../chunks/disclose-version.DO2YKsTc.js";import{ab as se,Q as ie,K as I,_ as N,M as ne,z as oe,al as K,ao as ve,ap as J,ae as U,W as D,ay as B,aq as X,T as Q,ar as de,w as G,az as ce,aA as fe,aB as pe,J as ue,m as Z,aC as me,aD as xe,ak as he,aE as _e,V as ge,a0 as Ce,ai as be,aa as we,X as Se,j as n,s as u,k as l,g as L,t as F,H as Le,p as ye,h as Te,i as Re}from"../chunks/runtime.DmIzA1C0.js";import{i as Me}from"../chunks/lifecycle.BrAqMedO.js";import{I as W,b as ke,c as Ie,d as De,e as E,f as Fe,g as Be,h as Ee,i as je,j as Y,k as $e,s as ee,a as j,l as Ae}from"../chunks/index.Cc0kzOuV.js";import{p as Pe}from"../chunks/props.8ybBnxoE.js";let H=null;function $(f,t){return t}function Ve(f,t,a,m){for(var d=[],o=t.length,v=0;v<o;v++)xe(t[v].e,d,!0);var _=o>0&&d.length===0&&a!==null;if(_){var x=a.parentNode;he(x),x.append(a),m.clear(),k(f,t[0].prev,t[o-1].next)}_e(d,()=>{for(var h=0;h<o;h++){var e=t[h];_||(m.delete(e.k),k(f,e.prev,e.next)),ge(e.e,!_)}})}function A(f,t,a,m,d,o=null){var v=f,_={flags:t,items:new Map,first:null};{var x=f;v=I?N(Ce(x)):x.appendChild(se())}I&&ne();var h=null,e=!1;ie(()=>{var c=a(),r=oe(c)?c:c==null?[]:K(c),s=r.length;if(e&&s===0)return;e=s===0;let i=!1;if(I){var b=v.data===ve;b!==(s===0)&&(v=J(),N(v),U(!1),i=!0)}if(I){for(var C=null,p,g=0;g<s;g++){if(D.nodeType===8&&D.data===be){v=D,i=!0,U(!1);break}var S=r[g],w=m(S,g);p=te(D,_,C,null,S,w,g,d,t),_.items.set(w,p),C=p}s>0&&N(J())}if(!I){var y=we;Ne(r,_,v,d,t,(y.f&B)!==0,m)}o!==null&&(s===0?h?X(h):h=Q(()=>o(v)):h!==null&&de(h,()=>{h=null})),i&&U(!0),a()}),I&&(v=D)}function Ne(f,t,a,m,d,o,v){var _=f.length,x=t.items,h=t.first,e=h,c,r=null,s=[],i=[],b,C,p,g;for(g=0;g<_;g+=1){if(b=f[g],C=v(b,g),p=x.get(C),p===void 0){var S=e?e.e.nodes_start:a;r=te(S,t,r,r===null?t.first:r.next,b,C,g,m,d),x.set(C,r),s=[],i=[],e=r.next;continue}if(Ue(p,b,g),p.e.f&B&&X(p.e),p!==e){if(c!==void 0&&c.has(p)){if(s.length<i.length){var w=i[0],y;r=w.prev;var O=s[0],P=s[s.length-1];for(y=0;y<s.length;y+=1)q(s[y],w,a);for(y=0;y<i.length;y+=1)c.delete(i[y]);k(t,O.prev,P.next),k(t,r,O),k(t,P,w),e=w,r=P,g-=1,s=[],i=[]}else c.delete(p),q(p,e,a),k(t,p.prev,p.next),k(t,p,r===null?t.first:r.next),k(t,r,p),r=p;continue}for(s=[],i=[];e!==null&&e.k!==C;)(o||!(e.e.f&B))&&(c??(c=new Set)).add(e),i.push(e),e=e.next;if(e===null)continue;p=e}s.push(p),r=p,e=p.next}if(e!==null||c!==void 0){for(var V=c===void 0?[]:K(c);e!==null;)(o||!(e.e.f&B))&&V.push(e),e=e.next;var ae=V.length;if(ae>0){var re=_===0?a:null;Ve(t,V,re,x)}}G.first=t.first&&t.first.e,G.last=r&&r.e}function Ue(f,t,a,m){ce(f.v,t),f.i=a}function te(f,t,a,m,d,o,v,_,x){var h=H;try{var e=(x&fe)!==0,c=(x&pe)===0,r=e?c?ue(d):Z(d):d,s=x&me?Z(v):v,i={i:s,v:r,k:o,a:null,e:null,prev:a,next:m};return H=i,i.e=Q(()=>_(f,r,s),I),i.e.prev=a&&a.e,i.e.next=m&&m.e,a===null?t.first=i:(a.next=i,a.e.next=i.e),m!==null&&(m.prev=i,m.e.prev=i.e),i}finally{H=h}}function q(f,t,a){for(var m=f.next?f.next.e.nodes_start:a,d=t?t.e.nodes_start:a,o=f.e.nodes_start;o!==m;){var v=Se(o);d.before(o),o=v}}function k(f,t,a){t===null?f.first=a:(t.next=a,t.e.next=a&&a.e),a!==null&&(a.prev=t,a.e.prev=t&&t.e)}const He={a:{viewBox:"0 0 24 24",fill:"currentColor"},c:'<path d="M10.9999 12L3.92886 19.0711L2.51465 17.6569L8.1715 12L2.51465 6.34317L3.92886 4.92896L10.9999 12ZM10.9999 19H20.9999V21H10.9999V19Z"></path>'},ze={a:{viewBox:"0 0 24 24",fill:"currentColor"},c:'<path d="M10.99 1.97431C13.9093 0.114363 17.947 0.981629 19.9913 3.90757C20.4765 4.58662 20.8221 5.35574 21.006 6.16979C21.1898 6.98383 21.2092 7.82641 21.063 8.64806C20.9214 9.43262 20.6222 10.1804 20.1836 10.8461C20.8234 12.0671 21.0379 13.4666 20.793 14.8231C20.6485 15.6286 20.3376 16.395 19.8801 17.0734C19.4225 17.7518 18.8284 18.3273 18.1357 18.763L13.0086 22.0307C10.0897 23.8913 6.05178 23.0238 4.00745 20.0975C3.52241 19.4184 3.17783 18.6493 2.99394 17.8352C2.81004 17.0212 2.79053 16.1787 2.93654 15.357C3.07828 14.5723 3.37766 13.8245 3.81658 13.1587C3.17613 11.938 2.96114 10.5386 3.20565 9.18194C3.35026 8.37642 3.6614 7.60994 4.11916 6.93153C4.57692 6.25311 5.17122 5.6777 5.86406 5.24209L10.99 1.97431ZM8.04892 20.2498C8.8306 20.5396 9.68237 20.5825 10.4892 20.3727C10.8578 20.2742 11.2092 20.1198 11.531 19.9149L16.6586 16.6483C17.0751 16.3862 17.4323 16.0401 17.7075 15.6321C17.9827 15.2241 18.1697 14.7632 18.2567 14.2789C18.3445 13.7848 18.3327 13.2782 18.2221 12.7888C18.1115 12.2993 17.9043 11.8369 17.6125 11.4286C17.1374 10.7436 16.4635 10.221 15.6818 9.93121C14.9002 9.64145 14.0484 9.59854 13.2416 9.80828C12.873 9.90665 12.5216 10.061 12.1998 10.2659L10.2435 11.5125C10.1463 11.5741 10.0402 11.6205 9.929 11.6501C9.68583 11.7132 9.42916 11.7001 9.19365 11.6127C8.95813 11.5253 8.75511 11.3677 8.61198 11.1613C8.52418 11.0381 8.46182 10.8986 8.42855 10.7511C8.39527 10.6035 8.39174 10.4508 8.41816 10.3019C8.44437 10.156 8.50072 10.0172 8.58361 9.89433C8.6665 9.77146 8.77411 9.66724 8.89956 9.58832L14.0279 6.31995C14.1251 6.25833 14.2312 6.21193 14.3424 6.18235C14.5855 6.11913 14.8422 6.13208 15.0777 6.21944C15.3133 6.3068 15.5163 6.46436 15.6594 6.67083C15.816 6.89261 15.8893 7.1626 15.8662 7.43313L15.8485 7.62341L16.0392 7.6812C16.7597 7.89874 17.4378 8.23778 18.0442 8.6837L18.3068 8.87615L18.4033 8.58129C18.455 8.42472 18.496 8.2648 18.526 8.10264C18.6137 7.60859 18.602 7.10199 18.4913 6.61255C18.3807 6.12311 18.1735 5.66068 17.8818 5.25238C17.4066 4.56741 16.7327 4.04476 15.951 3.755C15.1693 3.46524 14.3175 3.42232 13.5107 3.63205C13.1421 3.73063 12.7908 3.88502 12.4689 4.08987L7.34135 7.35745C6.92461 7.61925 6.56709 7.96514 6.29167 8.37301C6.01625 8.78088 5.82899 9.24174 5.74186 9.72612C5.65406 10.2202 5.66581 10.7268 5.77643 11.2162C5.88704 11.7057 6.09429 12.1681 6.38602 12.5764C6.8612 13.2614 7.53514 13.784 8.31683 14.0738C9.09852 14.3636 9.9503 14.4065 10.7571 14.1967C11.1257 14.0982 11.477 13.944 11.799 13.7395L13.7554 12.4922C13.8527 12.4306 13.9587 12.3842 14.0699 12.3546C14.3131 12.2916 14.5698 12.3046 14.8053 12.392C15.0408 12.4795 15.2439 12.637 15.387 12.8435C15.4748 12.9667 15.5371 13.1061 15.5705 13.2536C15.6038 13.4011 15.6075 13.5538 15.5812 13.7027C15.5548 13.8486 15.4984 13.9875 15.4154 14.1103C15.3325 14.2332 15.2249 14.3375 15.0994 14.4165L9.97244 17.6846C9.87522 17.7463 9.76916 17.7927 9.65793 17.8222C9.4148 17.8855 9.15811 17.8726 8.92257 17.7852C8.68703 17.6978 8.48399 17.5403 8.34091 17.3338C8.18411 17.1123 8.11078 16.8424 8.13392 16.5721L8.15142 16.3818L7.96094 16.324C7.24041 16.1064 6.56232 15.7673 5.95593 15.3215L5.69311 15.1286L5.5966 15.4235C5.54476 15.58 5.50384 15.74 5.47413 15.9021C5.38636 16.3962 5.3981 16.9028 5.50868 17.3922C5.61926 17.8817 5.82645 18.3441 6.1181 18.7524C6.59329 19.4374 7.26723 19.96 8.04892 20.2498Z"></path>'},Oe={a:{viewBox:"0 0 24 24",fill:"currentColor"},c:'<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.9999 8H14.6499V12H15.9999V8ZM9.34609 9.70937L15.405 17.5379L16.4591 16.7293L9.68281 8H8V15.9969H9.34609V9.70937Z"></path>'};var Je=R('<div class="w-[44%] md:w-1/5 h-full hover:bg-black transition-all hover:text-white"><div><!></div> <div class=" font-bold"> </div></div>'),Ge=R('<div id="skill" class="w-full flex flex-col items-center p-4 gap-3 md:px-20  "><h2 class=" text-3xl"> <span class=" font-semibold"></span></h2> <div class="h-4"></div> <div class=" w-full flex flex-row flex-wrap gap-6  justify-between  *:rounded *:h-32    *:border-black *:border-2 *:flex *:flex-col *:justify-between *:items-center *:py-4"></div></div>');function Ze(f){let t=[{src:ke,label:"Sass/Scss"},{src:Ie,label:"TypeScript"},{src:De,label:"JavaScript"},{src:Oe,label:"NextJs"},{src:ze,label:"Svelte"},{src:E,label:"Flutter"},{src:Fe,label:"Git"},{src:Be,label:"Linux"},{src:Ee,label:"Docker"},{src:je,label:"Sockets"},{src:Y,label:"python"},{src:$e,label:"fastApi"}],a="Мои",m="Навыки";var d=Ge(),o=n(d),v=n(o);v.nodeValue=`${a} `;var _=u(v);_.textContent=m,l(o);var x=u(o,4);A(x,5,()=>t,$,(h,e)=>{var c=Je(),r=n(c),s=n(r);W(s,{size:"42",get src(){return L(e).src}}),l(r);var i=u(r,2),b=n(i,!0);l(i),l(c),F(()=>M(b,L(e).label)),T(h,c)}),l(x),l(d),T(f,d)}const qe=""+new URL("../assets/ill.CK0kJXEI.svg",import.meta.url).href;var Ke=R('<div class="w-full flex flex-col px-4 py-10 items-center gap-8 md:flex-row md:p-20 "><div class="md:flex-[1] md:order-2"><img alt="preview"></div> <div class="flex flex-col gap-8 md:flex-[1] md:order-1"><h1 class="text-3xl md:text-5xl"> <span class="font-semibold"> <br><span class="dev svelte-s3eljd"></span></span> <span class=" font-semibold "></span></h1> <p class=" text-zinc-500 text-sm md:text-base"> </p></div></div>');function Xe(f,t){let a=Pe(t,"bodyText",8),m="Добрый день! Я",d="Демин Иван",o="Мобильный и Веб Разработчик",v="из",_="России";var x=Ke(),h=n(x),e=n(h);ee(e,"w-full   md:flex-1 svelte-s3eljd"),j(e,"src",qe),l(h);var c=u(h,2),r=n(c),s=n(r);s.nodeValue=`${m} `;var i=u(s),b=n(i);b.nodeValue=`${d} `;var C=u(b,2);C.textContent=o,l(i);var p=u(i);p.nodeValue=` ${v} `;var g=u(p);g.textContent=_,l(r);var S=u(r,2),w=n(S,!0);l(S),l(c),l(x),F(()=>M(w,a())),le("load",e,()=>{}),T(f,x)}const Qe={icon:"",label:"test",aboutMe:"About me",skills:"Skills",project:"Project",contactMe:"Testimonial",resumeUrl:""},We={icon:"",label:"test",aboutMe:"Обо мне",skills:"Навыки",project:"Проекты",contactMe:"Отзывы",resumeUrl:""},Ye="Hi, I'm Ivan, a mobile and web developer. I live in Russia and in my free time, I develop apps. Currently, I have released my own VPN service for work and am actively studying AI and server administration on Linux. I am interested in network security and OSS solutions and/or alternatives to SaaS applications. (replaced Firebase with Supabase, Start with N8N, GPT with Mistral, etc.)",et="Привет, я Иван, разработчик мобильных и веб-приложений. Я живу в России, и в свободное время разрабатываю приложения. В настоящее время я выпустил свой собственный VPN-сервис для работы и активно изучаю искусственный интеллект и администрирование серверов на Linux. Меня интересует сетевая безопасность и решения OSS и/или альтернативы SaaS-приложениям. (заменил Firebase на Supabase, Start на N8N, GPT на Mistral и т.д.)",tt={nav:Qe,ru_nav:We,wellcome:Ye,ru_wellcome:et};var at=R('<div class="flex flex-col w-full gap-2 p-2 border-zinc-500 border rounded px-4 md:p-8 hover:bg-zinc-800 "><div class="flex flex-row w-full items-center text-lg  md:text-xl gap-2 "><!> <p> </p></div> <div class="flex flex-row w-full items-center text-base gap-2 "><p> </p></div> <div class="flex flex-row w-full items-center text-sm  text-zinc-400 gap-2 "><p> </p></div></div>'),rt=R('<div class="  bg-primary-black w-full p-4 text-white flex flex-col items-center md:px-20"><h2 class="text-xl md:text-3xl"> <span class=" font-semibold"></span></h2> <div class="flex flex-col w-full py-4 gap-4 md:gap-8 md:py-14"></div></div>');function lt(f){let t=[{icon:Y,title:"Python Developer ",date:"Nov 2017 - 2019",describe:"Занимался разработкой автоматизированных тестов на Python. Это включало написание скриптов и ботов с использованием Selenium."},{icon:E,title:"Flutter Developer  (Measoft)",date:"2019-2020",describe:"Разработал веб и мобильное приложение для пунктов выдачи заказов. Я использовал Bloc для управления состоянием и Sqflite для локальной базы данных. (В то время веб-версия Flutter была в бета-версии.)"},{icon:E,title:"Flutter Developer  (BSTR)",date:"2020-2022",describe:"Разработал приложение BSTR, используя DIO, Hive, Riverpod и Freeze. Само приложение BSTR предлагает быстрые и удобные варианты оплаты проезда и парковок."},{icon:E,title:" LEAD Flutter Developer  (MBUSH)",date:"2022- 2023",describe:"Разработал приложение Insight Box для метафорических карт, написав как само приложение с использованием Dart (Flutter), так и серверную часть на Python с использованием CMS STRAPI."},{icon:He,title:" LEAD Developer  (ByteBridge)",date:"2023- 2024",describe:"Был ведущим разработчиком на проектах, разрабатывая такие приложения, как FriFri и веб-сайт Omoservice. Я использовал следующий технологический стек: Svelte/Next/Flutter/Prisma/n8n/Strapi."}],a="Мой",m="Опыт";var d=rt(),o=n(d),v=n(o);v.nodeValue=`${a} `;var _=u(v);_.textContent=m,l(o);var x=u(o,2);A(x,5,()=>[...t],$,(h,e)=>{var c=at(),r=n(c),s=n(r);W(s,{get src(){return L(e).icon}});var i=u(s,2),b=n(i,!0);l(i),l(r);var C=u(r,2),p=n(C),g=n(p,!0);l(p),l(C);var S=u(C,2),w=n(S),y=n(w,!0);l(w),l(S),l(c),F(()=>{M(b,L(e).title),M(g,L(e).date),M(y,L(e).describe)}),T(h,c)}),l(x),l(d),T(f,d)}const st=""+new URL("../assets/about.ComPTGEJ.svg",import.meta.url).href;var it=R('<div id="about" class="flex flex-col  w-full p-4 gap-8 md:px-20 md:flex-row md:py-20"><div class="w-full h-96 p-4  flex-1"><img class="w-full " alt=""></div> <div class="flex flex-col gap-2 flex-[2] items-center"><div class=" text-3xl"> <span class="font-semibold "></span></div> <p class="text-zinc-600 text-base "><!></p> <p class="text-zinc-600 text-sm "></p> <p class="text-zinc-600 text-sm "></p></div></div>');function nt(f){let t="About",a="Me",m='Я Иван, разработчик из Омска. Мой Telegram-канал > <a class="text-blue-950" href="https://t.me/tangorain">https://t.me/tangorain</a>. Мне 23 года, и я полностековый разработчик с более чем 7-летним интересом к IT и разработке. В свободное время я создаю игры, изучаю нейронные сети и исследую другие области разработки. Чтобы не запутаться в инструментах и фреймворках, я выбрал основной стек для коммерческой работы, а именно: Flutter (с Dio, Freeze, Hive/Sqflite, Riverpod/Bloc, BaseUI, Rive и Lottie), Backend (Python/FastAPI, Node/Express, PostgreSQL, MongoDB, Redis), Дополнительные инструменты (Supabase, n8n, Strapi), DevOps (Nginx, Docker, Linux), и Frontend (Svelte+SvelteKit, Strapi CMS, Next.js (React)).',d="В настоящее время мой основной интерес — это разработка полного цикла для бизнес-решений в России. В частности, замена SaaS-приложений на OSS-решения. Например, я заменил: ChatGPT -> Mistral, Firebase -> Supabase, CMS -> Strapi, Make -> n8n. Этот подход позволяет бизнесу иметь больше контроля над своим технологическим стеком и снижать затраты, связанные с проприетарным программным обеспечением.",o="Сосредотачиваясь на решениях с открытым исходным кодом, я стремлюсь предоставлять надежные, масштабируемые и экономически эффективные решения для бизнеса. Это не только помогает снизить зависимость от сторонних сервисов, но и обеспечивает возможность адаптации технологий под конкретные потребности бизнеса. Кроме того, решения с открытым исходным кодом часто сопровождаются сильной поддержкой сообщества, что может быть бесценным для устранения неполадок и постоянного улучшения.";var v=it(),_=n(v),x=n(_);j(x,"src",st),l(_);var h=u(_,2),e=n(h),c=n(e);c.nodeValue=`${t} `;var r=u(c);r.textContent=a,l(e);var s=u(e,2),i=n(s);Ae(i,()=>m,!1,!1),l(s);var b=u(s,2);b.textContent=d;var C=u(b,2);C.textContent=o,l(h),l(v),T(f,v)}const ot=""+new URL("../assets/bsom.CTMnanCX.jpeg",import.meta.url).href,vt=""+new URL("../assets/bstr.D8nFUYJj.jpeg",import.meta.url).href,dt=""+new URL("../assets/chari.Cuaec_em.jpeg",import.meta.url).href,ct=""+new URL("../assets/frifri.DC03028E.jpeg",import.meta.url).href,ft=""+new URL("../assets/insight.DuoWIIuC.jpeg",import.meta.url).href,pt=""+new URL("../assets/omoservice.DTtRi8PJ.jpeg",import.meta.url).href,ut=""+new URL("../assets/pranamat.DjxcvoKC.jpeg",import.meta.url).href,mt=""+new URL("../assets/pvz.B1S6HMAp.jpeg",import.meta.url).href;var xt=R('<div class=" w-full flex flex-col"><div class=" flex flex-col md:flex-row w-full gap-8"><div><img class="rounded" alt=""></div> <div class="flex-1 flex flex-col  text-start  gap-2 px-5  order-2"><h3 class="text-2xl"> </h3> <p class="text-sm text-zinc-500"> </p></div></div></div>'),ht=R('<div id="project" class="p-4 md:p-20 bg-black text-white flex flex-col items-center gap-3"><h2 class="text-3xl"> <span class=" font-semibold"></span></h2> <div class="h-5"></div> <div class="flex flex-col gap-24 "></div></div>');function _t(f){let t=[{title:"Boson, Loyalty program",desc:"Приложение для подключения программ лояльности в разных магазинах..",img:ot},{title:"BSTR, Транспорт Петербурга",desc:"Приложение для покупки платных парковок в Санкт-Петербурге и обновления проездных билетов..",img:vt},{title:"Chari, благотворительный фонд",desc:"Charity — это благотворительный фонд неравнодушных людей, специализирующийся на различных видах помощи нуждающимся.",img:dt},{title:"FriFri- ერთად შემოვიაროთ მსოფლიო!",desc:"FriFri — это промежуточный сервис между GE и Aviasales.",img:ct},{title:"Insight - Медитации и метафорические карты",desc:"Insight Box — это сервис, предлагающий медитации, аффирмации и метафорические карты в одном приложении.",img:ft},{title:"Omoservice -Marketplace delivery orders",desc:"Omoservice — это платформа, где можно покупать заказы и выполнять их без посредников и комиссий.",img:pt},{title:"Pranamat",desc:"Pranamat — это приложение, предлагающее медитации и умиротворение в одном месте.",img:ut},{title:"Measoft",desc:"Приложение для пунктов выдачи заказов от Measoft.",img:mt}];const a="Мои",m="Проекты";var d=ht(),o=n(d),v=n(o);v.nodeValue=`${a} `;var _=u(v);_.textContent=m,l(o);var x=u(o,4);A(x,5,()=>t,$,(h,e)=>{var c=xt(),r=n(c),s=n(r);const i=Le(()=>`flex-1 ${t.indexOf(L(e))%2==0?"md:order-1":" md:order-3"}  `);var b=n(s);l(s);var C=u(s,2),p=n(C),g=n(p,!0);l(p);var S=u(p,2),w=n(S,!0);l(S),l(C),l(r),l(c),F(()=>{ee(s,L(i)),j(b,"src",L(e).img),M(g,L(e).title),M(w,L(e).desc)}),T(h,c)}),l(x),l(d),T(f,d)}const z=""+new URL("../assets/avatar.C-ochPzp.png",import.meta.url).href,gt=""+new URL("../assets/fem_avatar.CF8zlnQt.png",import.meta.url).href;var Ct=R('<div class="bg-white  transition-all rounded-3xl shadow-lg flex flex-col h-max items-center p-6 gap-3 hover:bg-black hover:text-white hover:border-none md:w-80 border border-gray-50"><div class="avatar rounded-full border h-16"><img class="h-full" alt=""></div> <p> </p> <div class=" w-40 border"></div> <p> </p> <p> </p></div>'),bt=R('<div id="testi" class="p-4 md:p-20 flex flex-col w-full "><div class="flex flex-row w-full justify-center"><p class="text-2xl"> <span class="font-semibold"></span></p></div> <div class="flex flex-col w-full p-8 gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-6"></div></div>');function wt(f){console.log(z);let t=[{img:z,title:"Опытный специалист, приятный в работе и быстро реагирующий на правки.",name:"Roman D",job:"businessman"},{img:gt,title:"Ответственный исполнитель, умеющий работать в команде. Рекомендую этого специалиста.",name:"Tatiana BSTR",job:" Project ownmer"},{img:z,title:"Ответственный исполнитель, умеющий работать в команде. Рекомендую Ивана.",name:"Tatiana BSTR",job:" Project ownmer"}],a="Мои",m="Рекомендации";var d=bt(),o=n(d),v=n(o),_=n(v);_.nodeValue=`${a} `;var x=u(_);x.textContent=m,l(v),l(o);var h=u(o,2);A(h,5,()=>[...t],$,(c,r)=>{var s=Ct(),i=n(s),b=n(i);l(i);var C=u(i,2),p=n(C,!0);l(C);var g=u(C,4),S=n(g,!0);l(g);var w=u(g,2),y=n(w,!0);l(w),l(s),F(()=>{j(b,"src",L(r).img),M(p,L(r).title),M(S,L(r).name),M(y,L(r).job)}),T(c,s)}),l(h),l(d),T(f,d)}var St=R('<!> <!> <div class="h-4"></div> <!> <!> <div class=" h-5"></div> <!> <!>',1);function kt(f,t){ye(t,!1),document.querySelectorAll('a[href^="#"]').forEach(h=>{h.addEventListener("click",e=>{e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})}),Me();var a=St(),m=Te(a);Xe(m,{get bodyText(){return tt.ru_wellcome}});var d=u(m,2);Ze(d);var o=u(d,4);lt(o);var v=u(o,2);nt(v);var _=u(v,4);_t(_);var x=u(_,2);wt(x),T(f,a),Re()}export{kt as component};
