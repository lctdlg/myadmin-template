import{C as l,k as e,o as n,e as a,f as u,F as s,A as m,g as o}from"./vendor.f7dd4e9f.js";const d={name:"scroll-page",setup:()=>({num:l(50)})},r=u("span",null,"设置h1标签数量：",-1);d.render=function(l,d,t,p,f,i){const c=e("el-input-number");return n(),a("div",null,[r,u(c,{modelValue:p.num,"onUpdate:modelValue":d[1]||(d[1]=l=>p.num=l),size:"small",min:1,max:1e3,label:"设置h1标签数量"},null,8,["modelValue"]),(n(!0),a(s,null,m(p.num,(l=>(n(),a("h1",null,"这是个标题-"+o(l),1)))),256))])};export default d;
