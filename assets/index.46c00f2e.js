import"./index.e44cb3b1.js";import{D as e,p as o,d as t,k as a,o as d,e as l,f as s,i as n,s as c}from"./vendor.f7dd4e9f.js";const i={name:"FileDownload",setup:()=>({blobDownload:function(){e({url:"/demo/download1",responseType:"blob",method:"get"}).then((e=>{let o=e;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(o);else{let e=document.createElement("a");e.href=window.URL.createObjectURL(o),e.download="bb.txt",e.click(),e.remove(),window.URL.revokeObjectURL(e.href)}})).catch((e=>{console.log(e)}))}})},r=n();o("data-v-1e8e9775");const w={class:"file-download-demo"},b=s("h1",null,"FileDownload",-1),p=s("a",{download:"dio",href:"/src/assets/dio.jpg"},"点我",-1),f=c(" 下载Dio.jpg，适用于静态资源，兼容性一般 "),u=c(" 下载bb.txt "),m=c(" download('后端数据流地址','文件名',\"video/mp4\"); ");t();const v=r(((e,o,t,n,c,i)=>{const v=a("el-alert");return d(),l("div",w,[b,s(v,{type:"success",title:"使用原生的download属性"},{default:r((()=>[p,f])),_:1}),s(v,{type:"success",title:"使用文件流下载,生产模式生效"},{default:r((()=>[s("a",{download:"dio",style:{cursor:"pointer"},onClick:o[1]||(o[1]=(...e)=>n.blobDownload&&n.blobDownload(...e))},"点我"),u])),_:1}),s(v,{type:"success",title:"使用download.js库"},{default:r((()=>[m])),_:1})])}));i.render=v,i.__scopeId="data-v-1e8e9775";export default i;
