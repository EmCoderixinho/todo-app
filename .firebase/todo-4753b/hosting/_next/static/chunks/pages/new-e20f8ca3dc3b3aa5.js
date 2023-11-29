(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{877:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new",function(){return s(8648)}])},9057:function(e,t,s){"use strict";s.d(t,{C:function(){return c}});var n=s(7294),l=s(3878),a=s(6650),r=s(6100),i=s(1163);let d={document:null,isPending:!1,error:null,succes:null},o=(e,t)=>{switch(t.type){case"IS_PENDING":return{document:null,error:null,isPending:!0,succes:!1};case"ADD_DOCUMENT":return{isPending:!1,document:t.payload,succes:!0,error:null};case"DELETE_DOCUMENT":return{isPending:!1,document:null,succes:!0,error:null};case"ERROR":return{isPending:!1,error:t.payload,succes:!1,document:null};default:return e}},c=e=>{let t=(0,i.useRouter)(),[s,c]=(0,n.useReducer)(o,d),[u,m]=(0,n.useState)(!1),g=e=>{u||c(e)},h=async(s,n)=>{g({type:"IS_PENDING"});try{let i=await (0,r.ET)((0,r.hJ)(l.db,e),s);if(n){let t="items/".concat(i.id,"/").concat(n.name),d=(0,a.iH)(l.t,t),o=(0,a.B0)(d,n);await o;let c=await (0,a.Jt)(o.snapshot.ref);console.log(c),await (0,r.pl)((0,r.JU)(l.db,e,i.id),{...s,attachedFile:c})}if(!i)throw Error("Could not complete item upload");g({type:"ADD_DOCUMENT",payload:s}),t.push("/")}catch(e){g({type:"ERROR",payload:e.message})}},x=async t=>{g({type:"IS_PENDING"});try{await (0,r.oe)((0,r.JU)(l.db,e,t)),g({type:"DELETE_DOCUMENT"})}catch(e){g({type:"ERROR",payload:"could not delete message"})}};return(0,n.useEffect)(()=>()=>m(!0)),{addDocument:h,deleteDocument:x,response:s}}},8648:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(5893),l=s(1163),a=s(3920),r=s(9198),i=s.n(r);s(5890);var d=s(7294),o=s(9057),c=s(722),u=s.n(c);function m(){let[e,t]=(0,d.useState)(null),[s,r]=(0,d.useState)(!1),[c,m]=(0,d.useState)(!1),[g,h]=(0,d.useState)(""),[x,b]=(0,d.useState)(""),{user:f}=(0,a.E)(),[p,y]=(0,d.useState)(null),{addDocument:w,response:N}=(0,o.C)("todo-items"),[j,v]=(0,d.useState)(""),k=(0,l.useRouter)();return((0,d.useEffect)(()=>{N.succes&&k.push("/")},[N.succes]),f)?(0,n.jsx)("div",{className:"".concat(u().new," bg-gray-900 border-gray-700 flex items-center justify-center relative"),children:(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault();let n=null,l=null,a=null,r=null,i=null;e&&s&&(n=e.getDate(),l=e.getMonth()+1,a=e.getFullYear(),r=e.getHours(),i=e.getMinutes()),w({uid:f.uid,title:g,description:x,hasDeadline:s,day:n,month:l,year:a,hours:r,minutes:i,isPublic:c,attachedFile:null,done:!1},p)},className:"max-w-md w-full p-8 rounded-lg shadow-md",children:[(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"title",className:"block text-gray-200 text-sm font-bold mb-2",children:"Title:"}),(0,n.jsx)("input",{required:!0,type:"text",id:"title",name:"title",value:g,onChange:e=>{h(e.target.value)},placeholder:"Add title",className:"w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"description",className:"block text-gray-200 text-sm font-bold mb-2",children:"Description:"}),(0,n.jsx)("textarea",{required:!0,id:"description",name:"description",value:x,onChange:e=>{b(e.target.value)},rows:6,className:"w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200",placeholder:"Add description"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"fileAttachment",className:"block text-gray-200 text-sm font-bold mb-2",children:"Attach File:"}),(0,n.jsxs)("div",{className:"relative border-2 rounded-md px-4 py-3 bg-gray-700 flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out",children:[(0,n.jsx)("input",{type:"file",id:"fileAttachment",name:"fileAttachment",onChange:e=>{y(null);let t=e.target.files[0];if(t){if(!t.type.includes("image")){v("Please select an image");return}v(""),y(t)}},className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"}),(0,n.jsxs)("div",{className:"flex items-center",children:[!p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("svg",{className:"w-6 h-6 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),(0,n.jsx)("span",{className:"ml-2 text-sm text-gray-300",children:"Choose a file"})]}),p&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("span",{className:"ml-2 text-sm text-gray-300",children:["Chosen file: ",p.name]})})]})]}),""!==j&&(0,n.jsx)("p",{className:"ml-2 text-sm text-red-600 mt-2",children:j})]}),(0,n.jsxs)("div",{className:"flex items-center mb-4",children:[(0,n.jsx)("input",{id:"deadline_box",type:"checkbox",checked:s,onChange:e=>r(e.target.checked),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),(0,n.jsx)("label",{htmlFor:"deadline_box",className:"ms-2 text-sm font-medium text-gray-200 dark:text-gray-300",children:"Has deadline"})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"deadline",className:"block text-gray-200 text-sm font-bold mb-2",children:"Deadline:"}),(0,n.jsx)(i(),{id:"deadline",selected:e,onChange:e=>{t(e)},showTimeSelect:!0,dateFormat:"Pp",className:"w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"})]}),(0,n.jsxs)("div",{className:"flex items-center mb-4",children:[(0,n.jsx)("input",{id:"public",type:"checkbox",checked:c,onChange:e=>m(e.target.checked),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),(0,n.jsx)("label",{htmlFor:"public",className:"ms-2 text-sm font-medium text-gray-200 dark:text-gray-300",children:"Public"})]}),(0,n.jsx)("div",{className:"flex items-center justify-between",children:(0,n.jsxs)("button",{type:"submit",className:"flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2",children:["Add todo item",(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",viewBox:"0 0 24 24",id:"send",fill:"#fff",children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),(0,n.jsx)("path",{d:"M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"})]})]})})]})}):(k.push("/login"),null)}},722:function(e){e.exports={new:"new_new__ZKbcX"}}},function(e){e.O(0,[40,917,774,888,179],function(){return e(e.s=877)}),_N_E=e.O()}]);