(self["webpackChunkcarodromo_2022"]=self["webpackChunkcarodromo_2022"]||[]).push([[69],{3069:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>N});var i=t(3673),s=t(8880),l=t(9572),o=t.n(l);const n=e=>((0,i.dD)("data-v-926ee350"),e=e(),(0,i.Cn)(),e),r={class:"q-my-sm"},m={class:"text-white flex justify-between items-center full-width"},d={class:"inicio-img anime1"},u=n((()=>(0,i._)("img",{src:o(),alt:"",style:{"max-width":"270px"}},null,-1))),c={class:"inicio-btn anime2 flex"},p={class:"inicio-btn anime2 flex"},f=n((()=>(0,i._)("div",{class:"flex items-center bg-white",style:{height:"35vh",width:"100%"}},[(0,i._)("div",{class:"text-center full-width text-h2 text__inicio__header text__txt"},"Login")],-1))),g={class:"row flex items-center justify-center"},v={class:"flex items-center justify-center col-xs-12 col-sm-12 col-md-4"},y={class:"items-center full-width"},h={class:"flex flex-center q-mt-xl"},w={class:"flex flex-center q-mt-xl"},b={class:"flex flex-center q-mt-xl q-pa-md"};function x(e,a,t,l,o,n){const x=(0,i.up)("q-item"),_=(0,i.up)("q-btn"),q=(0,i.up)("q-toolbar"),k=(0,i.up)("q-header"),W=(0,i.up)("q-icon"),Z=(0,i.up)("q-input"),Q=(0,i.up)("q-space"),S=(0,i.up)("q-form"),V=(0,i.up)("q-page"),E=(0,i.up)("q-layout");return(0,i.wg)(),(0,i.j4)(E,{view:"hHh Lpr lFf"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{elevated:""},{default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i._)("div",m,[(0,i._)("div",d,[(0,i.Wm)(x,{"manual-focus":"",to:"/"},{default:(0,i.w5)((()=>[u])),_:1})]),(0,i._)("div",c,[(0,i._)("div",p,[(0,i.Wm)(_,{class:"q-px-md q-ml-md","no-caps":"",to:"/Register",outline:"","text-color":"white",rounded:"",color:"primary",label:"SignUp"})])])])])),_:1})])])),_:1}),(0,i.Wm)(V,{padding:""},{default:(0,i.w5)((()=>[(0,i._)("div",null,[f,(0,i._)("div",g,[(0,i._)("div",v,[(0,i._)("div",y,[(0,i.Wm)(S,{class:"q-gutter-md",onSubmit:(0,s.iM)(e.handleLogin,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{outlined:"",modelValue:e.form.email,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.email=a),type:"email",label:"Email",rules:[e=>!!e||"Este item é obrigatório"]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(W,{name:"mdi-email-outline"})])),_:1},8,["modelValue","rules"]),(0,i.Wm)(Z,{outlined:"",modelValue:e.form.password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.password=a),type:e.form.isPwd?"password":"text",label:"Senha",rules:[e=>!!e||"Este item é obrigatório"]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(W,{name:"mdi-lock-outline"})])),append:(0,i.w5)((()=>[(0,i.Wm)(W,{name:e.form.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[1]||(a[1]=a=>e.form.isPwd=!e.form.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,i.Wm)(Q),(0,i._)("div",h,[(0,i.Wm)(_,{outline:"",class:"full-width",style:{"max-width":"50%"},"text-color":"blue-grey-8",rounded:"",type:"submit",label:"Enviar"})]),(0,i._)("div",w,[(0,i.Wm)(_,{flat:"",color:"blue-grey-8",rounded:"",class:"full-width",style:{"max-width":"50%"},label:"Esqueci a senha",to:{name:"resetpassword"}})]),(0,i._)("div",b,[(0,i.Wm)(_,{class:"q-px-md",dense:"",size:"md","no-caps":"",to:"/",rounded:"","text-color":"blue-grey-1",color:"negative",icon:"mdi-keyboard-backspace",label:"Voltar"})])])),_:1},8,["onSubmit"])])])])])])),_:1})])),_:1})}var _=t(1959),q=t(9582),k=t(8825),W=t(4444);const Z=(0,i.aZ)({data(){const e=(0,q.tv)(),a=(0,k.Z)(),t=(0,W.v0)(),i=(0,_.iH)({email:"",password:"",isPwd:!0}),s=async()=>{(0,W.e5)(t,i.value.email,i.value.password).then((t=>{const i=t.user;!0!==i.emailVerified?a.notify({type:"negative",message:"Verifique seu email"}):(a.notify({icon:"mdi-thumb-up-outline",type:"positive",message:"Logado com Sucesso!"}),e.push({path:"/MainLayout"}))})).catch((e=>{const t=e.code;switch(t){case"auth/invalid-password":a.notify({type:"negative",message:"Senha Inválida!"});break;case"auth/invalid-email":a.notify({type:"negative",message:"Email Inválido!"});break;case"auth/user-not-found":a.notify({type:"negative",message:"Usuário Não Encontrado!"});break;case"auth/email-already-exists":a.notify({type:"negative",message:"Email já existe!"});break;case"auth/wrong-password":a.notify({type:"negative",message:"Senha Incorreta!"});break;case"auth/null-user":a.notify({type:"negative",message:"Usuário Nulo!"});break;case"auth/invalid-claims":a.notify({type:"negative",message:"Usuário Claims!"});break;case"auth/too-many-requests":a.notify({type:"negative",message:"Solicitação Bloqueadas, tente mas tarde!"});break;default:console.log(e.message);break}}))};return{form:i,handleLogin:s}}});var Q=t(4260),S=t(3066),V=t(3812),E=t(9570),I=t(3414),L=t(6819),P=t(4379),U=t(5269),j=t(4510),C=t(4554),H=t(2025),B=t(7518),F=t.n(B);const M=(0,Q.Z)(Z,[["render",x],["__scopeId","data-v-926ee350"]]),N=M;F()(Z,"components",{QLayout:S.Z,QHeader:V.Z,QToolbar:E.Z,QItem:I.Z,QBtn:L.Z,QPage:P.Z,QForm:U.Z,QInput:j.Z,QIcon:C.Z,QSpace:H.Z})},9572:(e,a,t)=>{e.exports=t.p+"img/logo_escola.ca0675db.png"}}]);