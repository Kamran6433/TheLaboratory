import{_ as z,R as X,e as Z,r as s,G as S,am as H,ao as ee,f as ae,P as le,o as p,h as R,w as i,b as l,V as te,i as T,m as B,C as j,a as r,p as N,c as E,A as c,d as n,t as L,Q as ie,J as se,K as re,L as q,z as oe,al as ne,j as ue,I as de,B as F,ap as ce,aq as fe,ar as me,ak as h,W as P,X as U,an as G}from"./j--dK8i6.js";const ve=""+new URL("Saly-13.lZlfU7hi.png",import.meta.url).href,Y=window.setInterval,pe={key:0,class:"text-center"},ge={key:1,class:"text-center"},xe={key:2,class:"text-center"},ye={class:"d-flex align-center justify-center mb-6"},Ve={class:"text-md text-gray-600 me-2"},Ee={__name:"EmailVerification",setup(M){const w=X(),y=Z(),f=s(!1),g=s(60),a=S(()=>H.currentUser),u=s(!0),m=s(!1),o=s(""),v=s(""),x=s(""),b=s(""),k=s(!1),V=s(null),W=()=>{const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;x.value=t.test(o.value)?"":"Please enter a valid email address"},$=S(()=>o.value&&v.value&&!x.value),A=async()=>{if($.value){k.value=!0;try{const t=ce.credential(a.value.email,v.value);await fe(a.value,t),await me(a.value,o.value),await h(P(U,"users",a.value.uid),{email:o.value,emailVerified:!1}),await G(a.value),await D(),m.value=!1,o.value="",v.value="",alert("Email updated successfully. Please check your new email for verification.")}catch(t){console.error("Error changing email:",t),t.code==="auth/wrong-password"?b.value="Incorrect password":t.code==="auth/email-already-in-use"?x.value="Email already in use":alert(t.message)}finally{k.value=!1}}},D=async()=>{a.value&&(await a.value.reload(),y.updateUser({uid:a.value.uid,email:a.value.email,emailVerified:a.value.emailVerified}))},J=async()=>{if(!(f.value||!a.value))try{await G(a.value),alert("Verification email resent. Please check your inbox."),K()}catch(t){console.error("Error resending verification email:",t),alert(t.message)}},K=()=>{f.value=!0,g.value=60;const t=Y(()=>{g.value--,g.value<=0&&(clearInterval(t),f.value=!1)},1e3)},O=()=>{V.value=Y(async()=>{if(a.value)try{await a.value.reload(),a.value.emailVerified&&(await h(P(U,"users",a.value.uid),{emailVerified:!0,email:a.value.email}),y.updateUser({emailVerified:!0,email:a.value.email}),C(),alert("Email verified successfully!"),_())}catch(t){console.error("Error in verification polling:",t)}},3e3)},C=()=>{V.value&&(clearInterval(V.value),V.value=null)},Q=async()=>{if(a.value){u.value=!0;try{await a.value.reload(),a.value.emailVerified?(await h(P(U,"users",a.value.uid),{emailVerified:!0,email:a.value.email}),y.updateUser({emailVerified:!0,email:a.value.email}),C(),alert("Email verified successfully!"),_()):alert("Email not yet verified. Please check your inbox and click the verification link.")}catch(t){console.error("Error checking verification status:",t),alert("Error checking verification status. Please try again.")}finally{u.value=!1}}},_=()=>{w.push("/profile/user")},I=()=>{w.push("/login")};return ee(m,t=>{t||(o.value="",v.value="",x.value="",b.value="")}),ae(async()=>{u.value=!0;try{await D(),a.value?a.value.emailVerified||O():I()}catch(t){console.error("Error in mounted hook:",t)}finally{u.value=!1}}),le(()=>{C()}),(t,e)=>(p(),R(F,{fluid:"",class:"max-width-1600 py-24 px-4 px-lg-12 d-flex align-center min-height-100"},{default:i(()=>[l(te,{class:"justify-center align-center"},{default:i(()=>[l(T,{cols:"12",md:"6",class:"d-flex justify-center"},{default:i(()=>[l(B,{class:"pa-6 rounded-xl verification-card w-100"},{default:i(()=>[l(j,null,{default:i(()=>e[5]||(e[5]=[r("h1",{class:"text-3xl md:text-4xl font-bold mb-6"}," Verify Your Email ",-1)])),_:1}),l(N,null,{default:i(()=>[a.value?a.value.emailVerified?(p(),E("div",ge,[e[9]||(e[9]=r("p",{class:"text-lg mb-6"}," Your email has been verified. You can now access your profile. ",-1)),l(c,{color:"#7C3AED","x-large":"",block:"",class:"mb-4 px-6 py-3 text-lg font-semibold rounded-xl",onClick:_},{default:i(()=>e[8]||(e[8]=[n(" Go to Profile ")])),_:1})])):(p(),E("div",xe,[e[15]||(e[15]=r("p",{class:"text-lg mb-4"}," Please check your inbox and click the verification link to complete your registration. ",-1)),r("div",ye,[r("p",Ve," Email sent to: "+L(a.value.email),1),l(c,{color:"secondary",size:"small",variant:"text",onClick:e[0]||(e[0]=d=>m.value=!0)},{default:i(()=>e[10]||(e[10]=[n(" Change ")])),_:1})]),l(ie,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=d=>m.value=d),"max-width":"500px"},{default:i(()=>[l(B,{class:"pa-4"},{default:i(()=>[l(j,{class:"text-h5 mb-4"},{default:i(()=>e[11]||(e[11]=[n(" Change Email Address ")])),_:1}),l(N,null,{default:i(()=>[l(se,{onSubmit:re(A,["prevent"])},{default:i(()=>[l(q,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=d=>o.value=d),label:"New Email",type:"email","error-messages":x.value,required:"",outlined:"",dense:"",onBlur:W},null,8,["modelValue","error-messages"]),l(q,{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=d=>v.value=d),label:"Confirm Password",type:"password","error-messages":b.value,required:"",outlined:"",dense:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),l(oe,null,{default:i(()=>[l(ne),l(c,{color:"grey",variant:"text",onClick:e[3]||(e[3]=d=>m.value=!1)},{default:i(()=>e[12]||(e[12]=[n(" Cancel ")])),_:1}),l(c,{color:"#7C3AED",loading:k.value,disabled:!$.value,onClick:A},{default:i(()=>e[13]||(e[13]=[n(" Change Email ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(c,{disabled:f.value,color:"#7C3AED","x-large":"",block:"",class:"mb-4 px-6 py-3 text-lg font-semibold rounded-xl",onClick:J},{default:i(()=>[n(L(f.value?`Resend in ${g.value}s`:"Resend Verification Email"),1)]),_:1},8,["disabled"]),l(c,{color:"info","x-large":"",block:"",variant:"outlined",class:"mb-6 px-6 py-3 text-lg font-semibold rounded-xl",onClick:Q},{default:i(()=>e[14]||(e[14]=[n(" Check Verification Status ")])),_:1}),e[16]||(e[16]=r("p",{class:""}," Once verified, you can go back to your profile. ",-1))])):(p(),E("div",pe,[e[7]||(e[7]=r("p",{class:"text-lg mb-6"}," No authenticated user found. Please log in first. ",-1)),l(c,{color:"#7C3AED","x-large":"",block:"",class:"mb-4 px-6 py-3 text-lg font-semibold rounded-xl",onClick:I},{default:i(()=>e[6]||(e[6]=[n(" Go to Login ")])),_:1})])),u.value?(p(),R(ue,{key:3,indeterminate:"",color:"#7C3AED",class:"mt-4"})):de("",!0)]),_:1})]),_:1})]),_:1}),l(T,{cols:"12",md:"6",class:"d-flex justify-center align-center"},{default:i(()=>e[17]||(e[17]=[r("img",{src:ve,alt:"Email Verification Illustration",class:"max-w-full h-auto object-contain illustration",style:{"max-width":"400px"}},null,-1)])),_:1})]),_:1})]),_:1}))}},we=z(Ee,[["__scopeId","data-v-feb29c7a"]]),be={},ke={class:"full-width"},Ce={class:""};function _e(M,w,y,f,g,a){const u=we;return p(),E("div",ke,[r("section",Ce,[l(F,{class:"pa-0",fluid:"","data-aos":"fade-up","data-aos-duration":"300"},{default:i(()=>[l(u)]),_:1})])])}const Pe=z(be,[["render",_e]]);export{Pe as default};
//# sourceMappingURL=BClD2VfN.js.map
