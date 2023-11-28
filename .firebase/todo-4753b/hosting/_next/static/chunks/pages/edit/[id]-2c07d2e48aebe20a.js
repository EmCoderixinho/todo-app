(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{6239:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit/[id]",function(){return s(2662)}])},2662:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return g}});var n=s(5893),a=s(7294),l=s(3878),r=s(722),i=s.n(r),d=s(6100),o=s(3920),c=s(1163),u=s(9198),m=s.n(u);s(5890);var g=!0;t.default=e=>{let{item:t}=e,[s,r]=(0,a.useState)(),[u,g]=(0,a.useState)(t.hasDeadline),[x,b]=(0,a.useState)(t.isPublic),[h,f]=(0,a.useState)(t.title),[p,y]=(0,a.useState)(t.description),{user:j}=(0,o.E)(),[w,N]=(0,a.useState)(t.attachedFile),v=(0,c.useRouter)();if(!j)return v.push("/login"),null;let k=async e=>{e.preventDefault();let n=null,a=null,r=null,i=null,o=null;s&&u&&(n=s.getDate(),a=s.getMonth()+1,r=s.getFullYear(),i=s.getHours(),o=s.getMinutes());let c={uid:j.uid,title:h,description:p,hasDeadline:u,day:n,month:a,year:r,hours:i,minutes:o,isPublic:x,attachedFile:null,done:!1};await (0,d.pl)((0,d.JU)(l.db,"todo-items",t.id),c),v.push("/")};return(0,n.jsx)("div",{className:"".concat(i().new," dark:bg-gray-900 dark:border-gray-700 bg-gray-100 flex items-center justify-center relative"),children:(0,n.jsx)("div",{className:"max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-md",children:(0,n.jsxs)("form",{onSubmit:k,children:[(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"title",className:"block text-gray-200 text-sm font-bold mb-2",children:"Title:"}),(0,n.jsx)("input",{required:!0,type:"text",id:"title",name:"title",value:h,onChange:e=>{f(e.target.value)},className:"w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"description",className:"block text-gray-200 text-sm font-bold mb-2",children:"Description:"}),(0,n.jsx)("textarea",{required:!0,id:"description",name:"description",value:p,onChange:e=>{y(e.target.value)},rows:6,className:"w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"fileAttachment",className:"block text-gray-200 text-sm font-bold mb-2",children:"Attach File:"}),(0,n.jsxs)("div",{className:"relative border-2 rounded-md px-4 py-3 bg-gray-700 flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out",children:[(0,n.jsx)("input",{type:"file",id:"fileAttachment",name:"fileAttachment",onChange:e=>{N(null);let t=e.target.files[0];t&&t.type.includes("image")&&N(t)},className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),(0,n.jsxs)("div",{className:"flex items-center",children:[!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("svg",{className:"w-6 h-6 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),(0,n.jsx)("span",{className:"ml-2 text-sm text-gray-300",children:"Choose a file"})]}),w&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("span",{className:"ml-2 text-sm text-gray-300",children:["Chosen file: ",w.name]})})]})]})]}),(0,n.jsxs)("div",{className:"flex items-center mb-4",children:[(0,n.jsx)("input",{id:"deadline_box",type:"checkbox",checked:u,onChange:e=>g(e.target.checked),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),(0,n.jsx)("label",{htmlFor:"deadline_box",className:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Has deadline"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"deadline",className:"block text-gray-200 text-sm font-bold mb-2",children:"Deadline:"}),(0,n.jsx)(m(),{id:"deadline",selected:s,onChange:e=>{r(e)},showTimeSelect:!0,dateFormat:"Pp",className:"w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"})]}),(0,n.jsxs)("div",{className:"flex items-center mb-4",children:[(0,n.jsx)("input",{id:"public",type:"checkbox",checked:x,onChange:e=>b(e.target.checked),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),(0,n.jsx)("label",{htmlFor:"public",className:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Public"})]}),(0,n.jsx)("div",{className:"flex items-center justify-between",children:(0,n.jsxs)("button",{type:"submit",className:"flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2",children:["Update todo item",(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",viewBox:"0 0 24 24",id:"send",fill:"#fff",children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),(0,n.jsx)("path",{d:"M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"})]})]})})]})})})}},722:function(e){e.exports={new:"new_new__ZKbcX"}}},function(e){e.O(0,[40,917,774,888,179],function(){return e(e.s=6239)}),_N_E=e.O()}]);