var L=Object.defineProperty,C=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var p=(a,l,i)=>l in a?L(a,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[l]=i,v=(a,l)=>{for(var i in l||(l={}))u.call(l,i)&&p(a,i,l[i]);if(n)for(var i of n(l))f.call(l,i)&&p(a,i,l[i]);return a},x=(a,l)=>C(a,B(l));var k=(a,l)=>{var i={};for(var s in a)u.call(a,s)&&l.indexOf(s)<0&&(i[s]=a[s]);if(a!=null&&n)for(var s of n(a))l.indexOf(s)<0&&f.call(a,s)&&(i[s]=a[s]);return i};import{j as m,C as d,h as Z,r as y,c as M,B as R}from"./vendor.f8fcd5cc.js";const A=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};A();const e=m.exports.jsx,r=m.exports.jsxs,V=m.exports.Fragment;function w(a){let t=a,{children:l,className:i}=t,s=k(t,["children","className"]);return i="btn"+(i?" "+i:""),e("button",x(v({className:i},s),{children:l}))}function P(){return e("div",{className:"bg-white bg-opacity-90 backdrop-blur-2xl border-b fixed left-0 right-0 h-16 flex items-center border-b border-gray-900/10 dark:border-gray-50/[0.06] z-10",children:r("div",{className:"deveo-container mx-auto w-full grid grid-cols-12 gap-4 items-center",children:[e("div",{className:"col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-2 flex",children:r("a",{href:"/",className:"logo inline-flex items-center gap-2",children:[r("svg",{width:"26",height:"26",viewBox:"0 0 233 233",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("rect",{width:"233",height:"233",rx:"50",fill:"url(#paint0_linear_9_12)"}),e("path",{d:"M165.967 115.431C165.967 115.385 165.96 115.34 165.954 115.288C165.651 110.464 163.357 105.777 159.189 102.559L95.8102 52.7357C88.072 46.7549 76.8756 48.1006 70.8008 55.7327C64.7259 63.3712 66.0803 74.4033 73.8119 80.3842L119.761 116.503L73.8119 152.622C66.0803 158.597 64.7259 169.635 70.8008 177.267C76.8756 184.899 88.072 186.245 95.8102 180.264L159.195 130.435C163.364 127.217 165.658 122.53 165.96 117.706C165.967 117.66 165.967 117.615 165.974 117.563C165.993 117.205 166 116.854 166 116.497C166 116.146 165.987 115.788 165.967 115.431Z",fill:"white"}),e("defs",{children:r("linearGradient",{id:"paint0_linear_9_12",x1:"116.5",y1:"0",x2:"116.5",y2:"233",gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"#182A4B"}),e("stop",{offset:"1",stopColor:"#12122B"})]})})]}),e("span",{className:"font-medium text-2xl",children:"deveo"})]})}),e("div",{className:"col-span-7 md:col-span-5 lg:col-span-5 xl:col-span-7 hidden md:block",children:r("div",{className:"search flex flex-grow relative text-sm leading-6 text-gray-400 shadow-sm rounded-md overflow-hidden bg-white ring-1 ring-gray-900/10 hover:ring-gray-300 dark:bg-gray-800 dark:highlight-white/5 dark:hover:bg-gray-700",children:[r("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",className:"absolute top-1.5 left-2.5 text-gray-400",children:[e("path",{d:"m19 19-3.5-3.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e("circle",{cx:"11",cy:"11",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e("input",{className:"p-1.5 w-full pl-10 pr-14 bg-transparent",type:"text",placeholder:"Search..."}),e("span",{className:"flex-none text-xs font-semibold absolute right-3 top-2.5 text-gray-400 pointer-events-none",children:"Ctrl K"})]})}),e("div",{className:"col-span-8 md:col-span-4 lg:col-span-4 xl:col-span-3",children:r("div",{className:"buttons flex items-center gap-2 justify-end",children:[e(w,{secondary:"",children:"Login"}),e(w,{children:"Create Account"})]})})]})})}function S(){return r("ul",{children:[e("li",{className:"mb-4",children:r("a",{href:"",className:"flex items-center lg:text-sm lg:leading-6 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",children:[e("div",{className:"mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5",children:r("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"m6 9 6-3 6 3v6l-6 3-6-3V9Z",className:"fill-indigo-100 group-hover:fill-indigo-200 dark:fill-gray-400"}),e("path",{d:"m6 9 6 3v7l-6-3V9Z",className:"fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-gray-500"}),e("path",{d:"m18 9-6 3v7l6-3V9Z",className:"fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-gray-600"})]})}),e("span",{className:"font-medium",children:"Home"})]})}),e("li",{className:"mb-4",children:r("a",{href:"",className:"flex items-center lg:text-sm lg:leading-6 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",children:[e("div",{className:"mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5",children:r("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",className:"fill-pink-400 group-hover:fill-pink-500 dark:group-hover:fill-pink-300 dark:fill-gray-600"}),e("path",{d:"M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z",className:"fill-pink-50 group-hover:fill-pink-100 dark:group-hover:fill-white dark:fill-gray-400"})]})}),e("span",{className:"font-medium",children:"Videos"})]})}),e("li",{className:"mb-4",children:r("a",{href:"",className:"flex items-center lg:text-sm lg:leading-6 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",children:[e("div",{className:"mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5",children:r("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z",className:"fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-400 dark:fill-gray-600"}),e("path",{d:"M10.25 9.75 7.75 12l2.5 2.25",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"stroke-blue-50 dark:stroke-gray-400 dark:group-hover:stroke-white dark:stroke-gray-400"}),e("path",{d:"m13.75 9.75 2.5 2.25-2.5 2.25",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"stroke-blue-200 dark:group-hover:stroke-white dark:stroke-gray-400"})]})}),e("span",{className:"font-medium",children:"Coding Challenges"})]})}),e("li",{className:"mb-4",children:r("a",{href:"",className:"flex items-center lg:text-sm lg:leading-6 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",children:[e("div",{className:"mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5",children:r("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{d:"M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z",className:"fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-gray-600"}),e("path",{d:"M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z",className:"fill-purple-200 group-hover:fill-purple-300 dark:group-hover:fill-white dark:fill-gray-400"}),e("path",{d:"M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z",className:"fill-purple-400 group-hover:fill-purple-500 dark:group-hover:fill-purple-300 dark:fill-gray-600"})]})}),e("span",{className:"font-medium",children:"Resources"})]})}),e("li",{className:"mb-4",children:r("a",{href:"",className:"flex items-center lg:text-sm lg:leading-6 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",children:[e("div",{className:"mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5",children:r("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z",className:"fill-violet-400 group-hover:fill-violet-500 dark:group-hover:fill-violet-300 dark:fill-gray-600"}),e("circle",{cx:"12",cy:"11",r:"1",className:"fill-white dark:group-hover:fill-white dark:fill-gray-400"}),e("circle",{cx:"9",cy:"11",r:"1",className:"fill-violet-200 dark:group-hover:fill-white dark:fill-gray-400"}),e("circle",{cx:"15",cy:"11",r:"1",className:"fill-violet-200 dark:fill-gray-400 dark:group-hover:fill-white"})]})}),e("span",{className:"font-medium",children:"Community"})]})}),e("li",{className:"mb-4",children:r("a",{href:"",className:"flex items-center lg:text-sm lg:leading-6 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",children:[e("div",{className:"mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5",children:r("svg",{className:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z",className:"fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z",className:"fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"})]})}),e("span",{className:"font-medium",children:"Books"})]})})]})}var N="assets/1.f925ffe7.jpeg",b="assets/2.b67cf341.jpeg",_="assets/3.dbcb741e.jpeg",j="assets/4.2b0044f0.jpeg",c=[{name:"Thomas Burke",picture:"4.jpeg",posts:5},{name:"Zak Adams",picture:"3.jpeg",posts:11},{name:"Anthony Perry",picture:"2.jpeg",posts:7},{name:"Max Schneider",picture:"1.jpeg",posts:17}];function T(){function a(l){return new URL({"../assets/avatar/1.jpeg":N,"../assets/avatar/2.jpeg":b,"../assets/avatar/3.jpeg":_,"../assets/avatar/4.jpeg":j}[`../assets/avatar/${l}`],self.location).href}return r("div",{className:"bg-white shadow rounded-md mb-4 h-max sticky top-20",children:[e("div",{className:"px-6 py-4 pb-2",children:e("h2",{className:"text-lg font-semibold text-gray-800",children:"Follow Developers"})}),e("div",{className:"flex flex-col px-6 divide-y divide-gray-100",children:c==null?void 0:c.map((l,i)=>r("div",{className:"flex items-center gap-2 py-4",children:[e("a",{href:"",children:e("img",{className:"h-10 w-10 rounded-full",src:a(l.picture),alt:l.name})}),r("div",{className:"flex flex-col items-start flex-grow",children:[e("a",{href:"",children:l.name}),e("span",{className:"text-sm text-gray-500",children:l.posts+" posts"})]}),e("button",{className:"text-xs font-semibold text-gray-400 px-3 py-1.5 rounded-md hover:text-white hover:bg-indigo-600 duration-150",children:"FOLLOW"})]},i))})]})}function g(){return r("div",{className:"post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75",children:[e("div",{className:"post-header",children:e(d,{className:"w-full h-40 sm:h-52 lg:h-64",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})})}),r("div",{className:"p-4 sm:p-8",children:[r("div",{className:"flex justify-between items-start mb-4 md:pb-4",children:[r("div",{className:"author flex items-center gap-3",children:[e(d,{className:"w-12 h-12 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})}),r("div",{className:"flex flex-col",children:[e(d,{className:"mb-2 w-36 h-4 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})}),e(d,{className:"w-24 h-4 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})})]})]}),e(d,{className:"mb-2 w-28 h-7 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})})]}),e(d,{className:"mb-10 w-8/12 h-7 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})}),r("div",{children:[e(d,{className:"mb-2 w-11/12 h-5 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})}),e(d,{className:"mb-2 w-9/12 h-5 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})}),e(d,{className:"mb-2 w-10/12 h-5 rounded-full",children:e("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"})})]})]})]})}var U="assets/js.11ebbf99.jpg",O="assets/kinesis.71e57edd.png",F="assets/react.7a4fe2c4.png",H="assets/vue.bfbff1d0.png";function I({post:a}){const l="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as...";function i(t){return new URL({"../assets/posters/js.jpg":U,"../assets/posters/kinesis.png":O,"../assets/posters/react.png":F,"../assets/posters/vue.png":H}[`../assets/posters/${t}`],self.location).href}function s(t){return new URL({"../assets/avatar/1.jpeg":N,"../assets/avatar/2.jpeg":b,"../assets/avatar/3.jpeg":_,"../assets/avatar/4.jpeg":j}[`../assets/avatar/${t}`],self.location).href}return r("div",{className:"post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75",children:[e("div",{className:"post-header",children:e("img",{className:"object-cover w-full h-40 sm:h-52 lg:h-64",src:i(a.poster),alt:a.title})}),r("div",{className:"p-4 sm:p-8",children:[r("div",{className:"flex justify-between items-start mb-4 md:pb-4",children:[r("div",{className:"author flex items-center gap-3",children:[e("img",{className:"w-12 h-12 rounded-full",src:s(a.author.picture),alt:a.author.name}),r("div",{className:"flex flex-col",children:[e("span",{className:"text-md font-medium text-gray-800",children:a.author.name}),e("time",{className:"published text-sm text-gray-500",children:Z(a.created_at).fromNow()})]})]}),e("span",{className:"read-time text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full",children:a.read_time+" min read"})]}),e("h3",{className:"text-2xl font-semibold text-gray-800 mb-4 md:mb-6",children:a.title}),e("p",{className:"text-gray-500 font-light",children:l})]})]})}var W=[{title:"Learn JavaScript in 2 hours!",poster:"js.jpg",read_time:3,created_at:"2022-03-17T23:04:18.594+00:00",author:{name:"Thomas Burke",picture:"4.jpeg"}},{title:"How to create react app with create-react-app",poster:"react.png",read_time:7,created_at:"2022-02-28T08:17:03.594+00:00",author:{name:"Zak Adams",picture:"3.jpeg"}},{title:"How to setup storybook in VueJS",poster:"vue.png",read_time:5,created_at:"2022-02-28T17:01:04.594+00:00",author:{name:"Anthony Perry",picture:"2.jpeg"}},{title:"Introduction to Amazon Kinesis",poster:"kinesis.png",read_time:10,created_at:"2022-01-14T16:34:08.594+00:00",author:{name:"Max Schneider",picture:"1.jpeg"}}];function $(){const[a,l]=y.exports.useState(null);return y.exports.useEffect(()=>{setTimeout(()=>{l(W)},1e3)},[]),r("div",{className:"app",children:[e(P,{}),e("div",{className:"deveo-container mx-auto pt-20 pb-12",children:r("div",{className:"grid grid-cols-12 gap-4",children:[e("div",{className:"sidebar hidden lg:flex lg:col-span-3 xl:col-span-2 flex-col h-max sticky top-20",children:e(S,{})}),r("div",{className:"posts col-span-full lg:col-span-9 xl:col-span-7 flex flex-col gap-10",children:[!a&&r(V,{children:[e(g,{}),e(g,{}),e(g,{})]}),a&&(a==null?void 0:a.map((i,s)=>e(I,{post:i},s)))]}),e("div",{className:"hidden xl:block xl:col-span-3",children:e(T,{})})]})})]})}const E=M.createRoot(document.getElementById("root"));E.render(e(R,{children:e($,{})}));
