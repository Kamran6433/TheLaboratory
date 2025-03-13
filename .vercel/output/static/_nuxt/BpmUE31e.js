import{_ as q,R,e as L,s as O,r as x,G as k,f as G,U as J,W as y,X as v,af as M,ag as H,ah as K,ai as W,aj as V,ak as h,o as m,h as f,w as l,b as s,m as X,O as Q,V as U,i as d,D as Y,a as n,p as D,J as Z,K as ee,L as E,A as b,d as c,k as ae,t as w,I as g,E as te,z as se,al as le,B as P,c as re}from"./j--dK8i6.js";const ie={class:"d-flex justify-space-between align-center mt-4"},oe={class:"mt-1 text-base md:text-lg font-semibold"},ue={class:"mt-1 text-base md:text-lg font-semibold"},ne={__name:"UpdateUserProfile",setup(I){const _=R(),p=L(),{getUser:u,getIsCustomer:pe,getStripeCustomerId:fe,getEmail:B,getEmailVerified:T}=O(p),t=x({name:"",email:"",number:"",school:"",isCustomer:!1}),i=x({subscriptionId:null,subscriptionStatus:null,subscriptionEndDate:null}),o=x(!0);x(null);const S=k(()=>i.value.subscriptionStatus==="active"||i.value.subscriptionStatus==="cancelling"),N=k(()=>{const a=i.value.subscriptionEndDate;return a&&a.seconds?new Date(a.seconds*1e3).toLocaleString("en-GB",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Invalid Date"});G(async()=>{o.value=!0;try{if(u.value){const a=await J(y(v,"users",u.value.uid));if(a.exists()&&(t.value=a.data(),t.value.email=B.value,t.value.emailVerified=T.value,await C(),t.value.isCustomer)){const e=await M(H(K(v,"stripeCustomers"),W("userId","==",u.value.uid)));if(!e.empty){const r=e.docs[0].data();i.value={subscriptionId:r.subscriptionId,subscriptionStatus:r.subscriptionStatus,subscriptionEndDate:r.subscriptionEndDate}}}}}catch(a){console.error("Error loading user profile:",a)}finally{o.value=!1}});const F=async()=>{if(u.value){o.value=!0;try{await h(y(v,"users",u.value.uid),{name:t.value.name,number:t.value.number,school:t.value.school}),p.updateUser(t.value),alert("Profile updated successfully!")}catch(a){console.error("Error updating profile:",a),alert("Failed to update profile. Please try again.")}finally{o.value=!1}}},A=async()=>{const a=V();if(a.currentUser)try{await a.currentUser.verifyBeforeUpdateEmail(t.value.email),alert("A verification email has been sent to your new email address. Please check your inbox and verify before the change takes effect."),await h(y(v,"users",u.value.uid),{pendingEmail:t.value.email}),t.value.pendingEmail=t.value.email,p.updateUser({pendingEmail:t.value.email})}catch(e){console.error("Error updating email:",e),alert("Failed to update email. Please try again.")}},C=async()=>{const a=V();a.currentUser&&t.value.pendingEmail&&a.currentUser.email===t.value.pendingEmail&&await $()},$=async()=>{const a=V();if(a.currentUser)try{await h(y(v,"users",u.value.uid),{email:a.currentUser.email,pendingEmail:null}),p.updateUser({email:a.currentUser.email,pendingEmail:null}),t.value.email=a.currentUser.email,t.value.pendingEmail=null,alert("Email updated successfully!")}catch(e){console.error("Error finalizing email update:",e),alert("Failed to finalize email update. Please try again.")}},z=async()=>{if(o.value=!0,!i.value.subscriptionId){alert("No active subscription found"),o.value=!1;return}try{const a=await fetch("/api/stripe-subscription-cancel-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:u.value.uid,subscriptionId:i.value.subscriptionId})});if(!a.ok){const r=await a.text();throw new Error(`HTTP error! status: ${a.status}, message: ${r}`)}const e=await a.json();if(e.success)i.value.subscriptionStatus="cancelling",i.value.subscriptionEndDate=e.endDate,p.updateUser({subscriptionStatus:"cancelling",subscriptionEndDate:e.endDate}),alert(e.message);else throw new Error(e.message||"Failed to cancel subscription")}catch(a){console.error("Error cancelling subscription:",a),alert(`Failed to cancel subscription: ${a.message}`)}finally{o.value=!1}},j=()=>{_.push("/profile/user")};return(a,e)=>(m(),f(P,{fluid:"",class:"max-width-1600 py-24 px-4 px-lg-12 d-flex align-center min-height-100"},{default:l(()=>[s(X,{class:"user-profile mx-auto rounded-lg overflow-hidden","max-width":"700"},{default:l(()=>[s(Q,{height:"200",src:"https://picsum.photos/700/200?random",class:"bg-gray-100"},{default:l(()=>[s(U,{class:"fill-height ma-0",align:"end"},{default:l(()=>[s(d,{cols:"12"},{default:l(()=>[s(Y,{size:"128",class:"ml-6 mb-n8 avatar-border",style:{border:"4px solid white"}})]),_:1})]),_:1})]),_:1}),e[13]||(e[13]=n("h1",{class:"text-4xl md:text-5xl font-bold ml-4 mt-10 mb-4"}," Update Profile ",-1)),s(D,null,{default:l(()=>[s(Z,{class:"px-6",onSubmit:ee(F,["prevent"])},{default:l(()=>[s(U,null,{default:l(()=>[s(d,{cols:"12",sm:"6"},{default:l(()=>[s(E,{modelValue:t.value.name,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value.name=r),label:"Name",outlined:"",dense:"",required:"",class:"text-base md:text-lg"},null,8,["modelValue"])]),_:1}),s(d,{cols:"12",sm:"6"},{default:l(()=>[s(E,{modelValue:t.value.number,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value.number=r),label:"Phone Number",outlined:"",dense:"",required:"",class:"text-base md:text-lg"},null,8,["modelValue"])]),_:1}),s(d,{cols:"12"},{default:l(()=>[s(E,{modelValue:t.value.school,"onUpdate:modelValue":e[2]||(e[2]=r=>t.value.school=r),label:"School",outlined:"",dense:"",class:"text-base md:text-lg"},null,8,["modelValue"])]),_:1}),s(d,{cols:"12"},{default:l(()=>[s(E,{modelValue:t.value.email,"onUpdate:modelValue":e[3]||(e[3]=r=>t.value.email=r),label:"Email",type:"email",outlined:"",dense:"",required:"",class:"text-base md:text-lg"},null,8,["modelValue"])]),_:1})]),_:1}),n("div",ie,[s(b,{color:"primary",type:"submit",loading:o.value,class:"text-base"},{default:l(()=>e[4]||(e[4]=[c(" Update Profile ")])),_:1},8,["loading"]),s(b,{color:"secondary",disabled:o.value,class:"text-base",onClick:A},{default:l(()=>e[5]||(e[5]=[c(" Update Email ")])),_:1},8,["disabled"])]),t.value.pendingEmail?(m(),f(ae,{key:0,type:"info",class:"mt-4"},{default:l(()=>[c(" Pending email change to: "+w(t.value.pendingEmail)+" ",1),s(b,{text:"",color:"info",class:"text-base ml-2",onClick:C},{default:l(()=>e[6]||(e[6]=[c(" Check Verification Status ")])),_:1})]),_:1})):g("",!0)]),_:1})]),_:1}),s(te,{class:"my-4"}),t.value.isCustomer?(m(),f(D,{key:0},{default:l(()=>[e[9]||(e[9]=n("h1",{class:"text-2xl md:text-3xl font-bold mb-4"}," Subscription Information ",-1)),s(U,null,{default:l(()=>[s(d,{cols:"12",sm:"6"},{default:l(()=>[e[7]||(e[7]=n("p",{class:"text-sm font-medium text-gray-500 uppercase"}," Status ",-1)),n("p",oe,w(i.value.subscriptionStatus),1)]),_:1}),i.value.subscriptionStatus==="cancelling"?(m(),f(d,{key:0,cols:"12",sm:"6"},{default:l(()=>[e[8]||(e[8]=n("p",{class:"text-sm font-medium text-gray-500 uppercase"}," Cancels on ",-1)),n("p",ue,w(N.value),1)]),_:1})):g("",!0)]),_:1})]),_:1})):g("",!0),s(se,{class:"px-6 pb-6"},{default:l(()=>[S.value&&i.value.subscriptionStatus!=="cancelling"?(m(),f(b,{key:0,color:"error",loading:o.value,class:"text-base",onClick:z},{default:l(()=>e[10]||(e[10]=[c(" Cancel Subscription ")])),_:1},8,["loading"])):g("",!0),S.value?g("",!0):(m(),f(b,{key:1,color:"success",to:"/tutoring",class:"text-base"},{default:l(()=>e[11]||(e[11]=[c(" Subscribe ")])),_:1})),s(le),s(b,{color:"primary",text:"",class:"text-base",onClick:j},{default:l(()=>e[12]||(e[12]=[c(" Back to Profile ")])),_:1})]),_:1})]),_:1})]),_:1}))}},de=q(ne,[["__scopeId","data-v-d817899e"]]),ce={class:"max-width-1600 py-0 py-lg-8"},me={class:"box3 hero"},ve={__name:"update",setup(I){return(_,p)=>(m(),re("div",ce,[n("section",me,[s(P,{class:"box1 pa-2","data-aos":"fade-up","data-aos-duration":"300"},{default:l(()=>[s(de)]),_:1})])]))}};export{ve as default};
//# sourceMappingURL=BpmUE31e.js.map
