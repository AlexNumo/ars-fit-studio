"use strict";(self.webpackChunkars_fit_studio=self.webpackChunkars_fit_studio||[]).push([[470],{4228:(e,a,r)=>{r.r(a),r.d(a,{default:()=>q});var t,n,s,o,c,i,d,l,u,g=r(5043),p=r(3216),h=r(9456),y=r(1770),x=r(4591),m=r(2696),f=(r(5016),r(6553)),b=r(3388),w=r(7528),k=r(197);const A=k.Ay.div(t||(t=(0,w.A)(["\n  text-align: center;\n  font-family: Arial, sans-serif;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: linear-gradient(to right, #e66465, #9198e5);\n  box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.5);\n  margin: 10px;\n"]))),R=k.Ay.form(n||(n=(0,w.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n"]))),j=k.Ay.div(s||(s=(0,w.A)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]))),v=k.Ay.button(o||(o=(0,w.A)(["\n  flex: 1;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 12px;\n  /* background-color: #ffb74d; */\n  margin: 10px;\n"]))),C=k.Ay.label(c||(c=(0,w.A)(["\n  margin: 5px 0;\n  font-weight: bold;\n"]))),O=k.Ay.input(i||(i=(0,w.A)(["\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n"]))),T=k.Ay.button(d||(d=(0,w.A)(["\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #007bff;\n  color: #fff;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),S=k.Ay.div(l||(l=(0,w.A)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]))),D=k.Ay.div(u||(u=(0,w.A)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 35px;\n  margin-right: 20px;\n"])));var U=r(579);const G=e=>{let{onLogin:a}=e;const[r,t]=(0,g.useState)(!0),[n,s]=(0,g.useState)(!1),[o,c]=(0,g.useState)(!1),[i,d]=(0,g.useState)(""),[l,u]=(0,g.useState)(""),[w,k]=(0,g.useState)("+380981058240"),[G,L]=(0,g.useState)("74Omevet"),_=(0,h.wA)(),q=(0,p.Zp)();(0,g.useEffect)((()=>{const e=localStorage.getItem("token");(async()=>{if(e)try{const a=await(async e=>await m.qD.OnAuth(e))(e),r=await(async()=>await m.qD.OnGetAllSeasonTickets())(),t={...a.data,isAuthenticated:!0};_((0,y.g)(t)),_((0,x.z)(r)),q("/cabinet")}catch(a){console.error("Error fetching data:",a)}})()}),[]);const E=e=>(e.preventDefault(),"login"===e.target.id?(s(!1),t(!0)):"registration"===e.target.id?(t(!1),s(!0)):void 0),z=e=>{e.preventDefault(),c(!o)};return(0,U.jsx)(A,{children:(0,U.jsxs)(R,{onSubmit:e=>(async e=>{e.preventDefault();const a=r?await m.qD.OnLogin(w,G):n?await m.qD.OnRegistration(i,l,w,G):null;if(a){const e=await m.qD.OnGetAllSeasonTickets(),r={...a.data,isAuthenticated:!0};_((0,y.g)(r)),_((0,x.z)(e)),localStorage.setItem("token",r.token),q("/cabinet")}})(e),children:[(0,U.jsxs)(j,{children:[(0,U.jsx)(v,{id:"login",className:r?"active_btn":"",onClick:E,children:"\u0412\u0445\u0456\u0434"}),(0,U.jsx)(v,{id:"registration",className:n?"active_btn":"",onClick:E,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]}),n?(0,U.jsxs)(S,{children:[(0,U.jsx)(C,{children:"\u0406\u043c'\u044f"}),(0,U.jsx)(O,{type:"text",placeholder:"\u0456\u043c'\u044f",value:i,onChange:e=>d(e.target.value)}),(0,U.jsx)(C,{children:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f"}),(0,U.jsx)(O,{type:"date",placeholder:"\u0434\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",value:l,onChange:e=>u(e.target.value)})]}):(0,U.jsx)(U.Fragment,{}),(0,U.jsxs)(S,{children:[(0,U.jsx)(C,{children:"\u041b\u043e\u0433\u0456\u043d"}),(0,U.jsx)(f.Ay,{placeholder:"\u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",international:!0,defaultCountry:"UA",initialValueFormat:"national",countryCallingCodeEditable:!1,value:w,onChange:k,style:{border:"1px solid #ccc",borderRadius:"5px",backgroundColor:"#fff",paddingLeft:"10px"}}),"Is possible: ",w&&(0,f.h1)(w)?"true":"false"]}),(0,U.jsxs)(S,{children:[(0,U.jsx)(C,{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,U.jsx)(O,{type:o?"text":"password",placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c",value:G,onChange:e=>L(e.target.value)}),(0,U.jsx)(D,{children:o?(0,U.jsx)(b.$tr,{onClick:z,size:20}):(0,U.jsx)(b.mt0,{onClick:z,size:20})})]}),r?(0,U.jsx)(T,{type:"submit",to:"/cabinet",children:"\u0423\u0432\u0456\u0439\u0442\u0438"}):(0,U.jsx)(T,{type:"submit",to:"/cabinet",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"})]})})};var L;const _=k.Ay.div(L||(L=(0,w.A)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 90px;\n  text-align: center;\n"]))),q=()=>(0,U.jsx)(_,{children:(0,U.jsx)(G,{})})},7756:(e,a,r)=>{r.d(a,{D:()=>s,u:()=>n});var t=r(7154);const n=t.A.create({baseURL:"https://ars-fit-studio-server-97360ba5d151.herokuapp.com/",headers:{"Content-Type":"application/json"}}),s=t.A.create({baseURL:"https://api.telegram.org/bot5673512453:AAH-Ac0g-PMN8FwXj16kLg8OiXl99PYJYi8/sendMessage?chat_id=525427019&text=",headers:{"Content-Type":"application/json"}})},2696:(e,a,r)=>{r.d(a,{qD:()=>s});var t=r(2145),n=(r(2342),r(7756));const s={OnLogin:async(e,a)=>{try{const r=await n.u.post("/user/login",{tel:e,password:a}),s=r.data.name;return t.oR.success("".concat(s,", \u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0443\u0432\u0456\u0439\u0448\u043b\u0438")),r}catch(r){console.log("Error: ",r),r.response&&r.response.data&&r.response.data.message?t.oR.error(r.response.data.message):t.oR.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}},OnAuth:async e=>{try{return await n.u.post("/user/auth",{token:e})}catch(a){console.log("Error: ",a),t.oR.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}},OnRegistration:async(e,a,r,s)=>{try{const o=await n.u.post("/user/registration",{name:e,birthday:a,tel:r,password:s});return t.oR.success("".concat(e,", \u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u043b\u0438\u0441\u044f")),o.data}catch(o){console.log("Error: ",o),o.response&&o.response.data&&o.response.data.message?t.oR.error(o.response.data.message):t.oR.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}},OnUpgradeUser:async e=>{try{const a=await n.u.post("/user/upgrade",e);return t.oR.success("\u0417\u043c\u0456\u043d\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u043e \u0443\u0441\u043f\u0456\u0448\u043d\u043e"),a}catch(a){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(a.message)}},OnUpgradeUserPassword:async e=>{try{const a=await n.u.post("/user/upgrade/password",e);return t.oR.success("\u0417\u043c\u0456\u043d\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u043e \u0443\u0441\u043f\u0456\u0448\u043d\u043e"),console.log(a),a}catch(a){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(a.message)}},OnGetAllSeasonTickets:async()=>{try{return(await n.u.get("/seasonTickets")).data}catch(e){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(e.message)}},OnSendTgBuySeasonTicket:async e=>{try{const a="https://www.instagram.com/".concat(e.user.instagram,"/");let r="";"group"===e.seasonTicket.kind&&(r="\u0433\u0440\u0443\u043f\u043e\u0432\u0438\u0445"),"personal"===e.seasonTicket.kind&&(r="\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0445");const t=e.user.tel.replace(/\D/g,""),s=t.startsWith("38")?t.slice(2):t;return await n.D.get("\u041a\u043b\u0456\u0454\u043d\u0442 ".concat(e.user.name," ").concat(e.user.surname," \u0431\u0430\u0436\u0430\u0454 \u043f\u0440\u0438\u0434\u0431\u0430\u0442\u0438 \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442 \u043d\u0430 ").concat(e.seasonTicket.name," \u0434\u043b\u044f ").concat(r," \u0437\u0430\u043d\u044f\u0442\u044c \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044e ").concat(e.seasonTicket.price," \u0433\u0440\u043d. \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043a\u043b\u0456\u0454\u043d\u0442\u0430: ").concat(s,", instagram: ").concat(a))}catch(a){t.oR.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.log(a.message)}},OnBuySeasonTicket:async e=>{try{return(await n.u.post("/seasonTickets",e)).data}catch(a){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(a.message)}},OnRecordTraining:async e=>{try{const a=await n.u.post("/user/signUpTraining",e);if(a.data.messages.error&&"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u044c \u043f\u043e \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442\u0443 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u043b\u0430\u0441\u044f. \u0412\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u0456 \u044f\u043a \u043d\u0430 \u0440\u0430\u0437\u043e\u0432\u0435 \u0437\u0430\u043d\u044f\u0442\u0442\u044f"===a.data.messages.error)return t.oR.warning("".concat(a.data.messages.error)),a;if("\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u043d\u0430 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"!==a.data.messages.error)return"\u0412\u0438 \u043d\u0435 \u043c\u0430\u0454\u0442\u0435 \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442\u0443. \u0417\u0430\u043f\u0438\u0441 \u043d\u0430 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0435\u0437 \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442\u0443"===a.data.messages.warning?(t.oR.info("\u0412\u0438 \u043d\u0435 \u043c\u0430\u0454\u0442\u0435 \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442\u0443. \u0417\u0430\u043f\u0438\u0441 \u043d\u0430 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0435\u0437 \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442\u0443"),a):(t.oR.success("\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044f \u043d\u0430 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"),a);t.oR.error("\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u043d\u0430 \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f")}catch(a){t.oR.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.log(a)}},OnGetCoachTrainings:async(e,a)=>{try{return(await n.u.post("/user/coach",{coachLabel:e,date:a})).data}catch(r){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(r.message)}},OnSendVisitTraining:async e=>{console.log(e);try{const a=await n.u.post("/user/coach/visit",e);return a.data.message.error&&t.oR.info(a.data.message.error),a.data.message.error}catch(a){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(a.message)}},OnGetCoaches:async()=>{try{return(await n.u.get("/user/coach")).data}catch(e){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(e.message)}},OnGetCoachSalary:async e=>{try{return(await n.u.put("/user/coach/salary",e)).data}catch(a){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(a.message)}},OnGetAllUsers:async()=>{try{return(await n.u.get("/user/all")).data}catch(e){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(e.message)}},OnGetSeasonTicketsNotConfirm:async()=>{try{return(await n.u.get("/user/seasonTicketsConfirm")).data}catch(e){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(e.message)}},OnSeasonTicketConfirm:async(e,a,r)=>{try{const s=await n.u.post("/user/seasonTicketsConfirm",{idSeasonTicket:e,idUser:a,selectedDateValue:r});return"\u0410\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442 \u0432\u0436\u0435 \u0431\u0443\u043b\u043e \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043e"===s.data.error?t.oR.error("".concat(s.data.error)):(t.oR.success("".concat(s.data)),s.data)}catch(s){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(s.message)}},OnGetCoachTrainingsPeriod:async e=>{try{return(await n.u.put("/user/coach/trainings",e)).data}catch(a){t.oR.error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),console.error(a.message)}}}}}]);
//# sourceMappingURL=470.bb8ca86b.chunk.js.map