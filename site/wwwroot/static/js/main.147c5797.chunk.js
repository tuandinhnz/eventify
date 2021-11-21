(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{275:function(e,t,n){},448:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return Ue}));var i=n(0),c=n(36),r=n.n(c),a=(n(271),n(272),n(273),n(274),n(275),n(22)),s=n(14),o=n(466),l=n(19),d=n(477),u=n(205),j=n(476),b=n(254),h=n(135),O=n(46),v=n(33),x=n(20),p=n.n(x),m=n(40),f=n(13),g=n(16),y=n(15),A=n(35),w=n.n(A),k=n(93);w.a.defaults.baseURL="/api",w.a.interceptors.request.use((function(e){var t=G.commonStore.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),w.a.interceptors.response.use(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){var t=e.response,n=t.data,i=t.status,c=t.config;switch(i){case 400:if("string"===typeof n&&k.b.error(n),"get"===c.method&&n.errors.hasOwnProperty("id")&&Ue.push("/not-found"),n.errors){var r=[];for(var a in n.errors)n.errors[a]&&r.push(n.errors[a]);throw r.flat()}break;case 401:k.b.error("unauthorised");break;case 404:k.b.error("not found"),Ue.push("/not-found");break;case 500:G.commonStore.setServerError(n),Ue.push("/server-error"),k.b.error("server error")}return Promise.reject(e)}));var S=function(e){return e.data},C=function(e){return w.a.get(e).then(S)},I=function(e,t){return w.a.post(e,t).then(S)},L=function(e,t){return w.a.put(e,t).then(S)},M=function(e){return w.a.delete(e).then(S)},T={Activities:{list:function(){return C("/activities")},details:function(e){return C("/Activities/".concat(e))},create:function(e){return I("/Activities",e)},update:function(e){return L("Activities/".concat(e.id),e)},delete:function(e){return M("/Activities/".concat(e))},attend:function(e){return I("/activities/".concat(e,"/attend"),{})}},Account:{current:function(){return C("/account")},login:function(e){return I("/account/login",e)},register:function(e){return I("/account/register",e)}}},E=function e(t){Object(f.a)(this,e),Object.assign(this,t)},F=function e(t){Object(f.a)(this,e),this.id=void 0,this.title="",this.category="",this.description="",this.date=null,this.city="",this.venue="",t&&(this.id=t.id,this.title=t.title,this.category=t.category,this.description=t.description,this.date=t.date,this.venue=t.venue,this.city=t.city)},R=n(450),z=function e(t){Object(f.a)(this,e),this.username=t.username,this.displayName=t.displayName,this.image=t.image},q=function(){function e(){var t=this;Object(f.a)(this,e),this.activityRegistry=new Map,this.isLoading=!1,this.selectedActivity=void 0,this.editMode=!1,this.loadingInitial=!0,this.loadActivities=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingInitial(!0),e.prev=1,e.next=4,T.Activities.list();case 4:e.sent.forEach((function(e){t.setActivity(e)})),t.setLoadingInitial(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t.setLoadingInitial(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),this.loadActivity=function(){var e=Object(m.a)(p.a.mark((function e(n){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=t.getActivity(n))){e.next=6;break}return t.selectedActivity=i,e.abrupt("return",i);case 6:return t.setLoadingInitial(!0),e.prev=7,e.next=10,T.Activities.details(n);case 10:return i=e.sent,t.setActivity(i),Object(y.h)((function(){t.selectedActivity=i})),t.setLoadingInitial(!1),e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(7),console.log(e.t0),t.setLoadingInitial(!1);case 21:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t){return e.apply(this,arguments)}}(),this.getActivity=function(e){return t.activityRegistry.get(e)},this.setActivity=function(e){var n,i=G.userStore.user;i&&(e.isGoing=e.attendees.some((function(e){return e.username===i.username})),e.isHost=e.hostUsername===i.username,e.host=null===(n=e.attendees)||void 0===n?void 0:n.find((function(t){return t.username===e.hostUsername})));e.date=new Date(e.date),t.activityRegistry.set(e.id,e)},this.setLoadingInitial=function(e){t.loadingInitial=e},this.setIsLoading=function(e){t.isLoading=e},this.createActivity=function(){var e=Object(m.a)(p.a.mark((function e(n){var i,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=G.userStore.user,c=new z(i),e.prev=2,e.next=5,T.Activities.create(n);case 5:(r=new E(n)).hostUsername=i.username,r.attendees=[c],t.setActivity(r),Object(y.h)((function(){t.selectedActivity=r})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),this.updateActivity=function(){var e=Object(m.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.Activities.update(n);case 3:Object(y.h)((function(){if(n.id){var e=Object(v.a)(Object(v.a)({},t.getActivity(n.id)),n);t.activityRegistry.set(n.id,e),t.selectedActivity=e}})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteActivity=function(){var e=Object(m.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setIsLoading(!0),e.prev=1,e.next=4,T.Activities.delete(n);case 4:Object(y.h)((function(){t.activityRegistry.delete(n),t.setIsLoading(!1)})),t.setIsLoading(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t.setIsLoading(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.updateAttendance=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=G.userStore.user,t.isLoading=!0,e.prev=2,e.next=5,T.Activities.attend(t.selectedActivity.id);case 5:Object(y.h)((function(){var e;if(null===(e=t.selectedActivity)||void 0===e?void 0:e.isGoing){var i;t.selectedActivity.attendees=null===(i=t.selectedActivity.attendees)||void 0===i?void 0:i.filter((function(e){return e.username!==(null===n||void 0===n?void 0:n.username)})),t.selectedActivity.isGoing=!1}else{var c,r,a=new z(n);null===(c=t.selectedActivity)||void 0===c||null===(r=c.attendees)||void 0===r||r.push(a),t.selectedActivity.isGoing=!0}t.activityRegistry.set(t.selectedActivity.id,t.selectedActivity)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:return e.prev=11,Object(y.h)((function(){return t.isLoading=!1})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])}))),this.cancelActivityToggle=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,T.Activities.attend(t.selectedActivity.id);case 4:Object(y.h)((function(){var e;t.selectedActivity.isCancelled=!(null===(e=t.selectedActivity)||void 0===e?void 0:e.isCancelled),t.activityRegistry.set(t.selectedActivity.id,t.selectedActivity)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.prev=10,Object(y.h)((function(){return t.isLoading=!1})),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])}))),Object(y.d)(this)}return Object(g.a)(e,[{key:"activitiesByDate",get:function(){return Array.from(this.activityRegistry.values()).sort((function(e,t){return e.date.getTime()-t.date.getTime()}))}},{key:"groupedActivities",get:function(){return Object.entries(this.activitiesByDate.reduce((function(e,t){var n=Object(R.default)(t.date,"dd MMM yyyy");return e[n]=e[n]?[].concat(Object(O.a)(e[n]),[t]):[t],e}),{}))}}]),e}(),D=function(){function e(){var t=this;Object(f.a)(this,e),this.user=null,this.login=function(){var e=Object(m.a)(p.a.mark((function e(n){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.Account.login(n);case 3:i=e.sent,G.commonStore.setToken(i.token),console.log(i),t.setUser(i),Ue.push("/activities"),G.modalStore.closeModal(),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(m.a)(p.a.mark((function e(n){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.Account.register(n);case 3:i=e.sent,G.commonStore.setToken(i.token),console.log(i),t.setUser(i),Ue.push("/activities"),G.modalStore.closeModal(),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),this.logout=function(){G.commonStore.setToken(null),window.localStorage.removeItem("jwt"),t.setUser(null),Ue.push("/")},this.setUser=function(e){t.user=e},this.getUser=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.Account.current();case 3:n=e.sent,t.setUser(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),Object(y.d)(this)}return Object(g.a)(e,[{key:"isLoggedIn",get:function(){return!!this.user}}]),e}(),G={activityStore:new q,commonStore:new function e(){var t=this;Object(f.a)(this,e),this.error=null,this.token=window.localStorage.getItem("jwt"),this.appLoaded=!1,this.setServerError=function(e){t.error=e},this.setToken=function(e){t.token=e},this.setAppLoaded=function(){t.appLoaded=!0},Object(y.d)(this),Object(y.g)((function(){return t.token}),(function(e){e?window.localStorage.setItem("jwt",e):window.localStorage.removeItem("jwt")}))},userStore:new D,modalStore:new function e(){var t=this;Object(f.a)(this,e),this.modal={open:!1,body:null},this.openModal=function(e){t.modal.open=!0,t.modal.body=e},this.closeModal=function(){t.modal.open=!1,t.modal.body=null},Object(y.d)(this)}},N=Object(i.createContext)(G);function P(){return Object(i.useContext)(N)}var U=n(1),B=Object(s.a)((function(){var e=P().userStore,t=e.user,n=e.logout;return Object(U.jsx)(d.a,{inverted:!0,fixed:"top",children:Object(U.jsxs)(o.a,{children:[Object(U.jsxs)(d.a.Item,{as:l.b,exact:!0,to:"/",header:!0,children:[Object(U.jsx)("img",{src:"/assets/logo.png",alt:"logo",style:{marginRight:"10px"}}),"Eventify"]}),Object(U.jsx)(u.a,{as:l.b,name:"Activities",to:"/activities"}),Object(U.jsx)(u.a,{as:l.b,name:"Errors",to:"/errors"}),Object(U.jsx)(d.a.Item,{children:Object(U.jsx)(j.a,{as:l.b,to:"/createActivity",positive:!0,content:"Create Activity"})}),Object(U.jsxs)(d.a.Item,{position:"right",children:[Object(U.jsx)(b.a,{src:(null===t||void 0===t?void 0:t.image)||"/assets/user.png",avatar:!0,spaced:"right"}),Object(U.jsx)(h.a,{pointing:"top left",text:null===t||void 0===t?void 0:t.displayName,children:Object(U.jsxs)(h.a.Menu,{children:[Object(U.jsx)(h.a.Item,{as:l.a,to:"/profile/".concat(null===t||void 0===t?void 0:t.username),text:"My Profile",icon:"user"}),Object(U.jsx)(h.a.Item,{onClick:n,text:"Logout",icon:"power"})]})})]})]})})})),H=n(482),V=n(478),J=n(467),Y=function(e){var t=e.inverted,n=void 0===t||t,i=e.content,c=void 0===i?"Loading...":i;return Object(U.jsx)(V.a,{active:!0,inverted:n,children:Object(U.jsx)(J.a,{content:c})})},W=n(480),K=n(253),Q=Object(s.a)((function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(d.a,{vertical:!0,size:"large",style:{width:"100%",marginTop:25},children:[Object(U.jsx)(W.a,{icon:"filter",attached:!0,color:"teal",content:"Filters"}),Object(U.jsx)(d.a.Item,{content:"All Activities"}),Object(U.jsx)(d.a.Item,{content:"I am going"}),Object(U.jsx)(d.a.Item,{content:"I am hosting"})]}),Object(U.jsx)(W.a,{}),Object(U.jsx)(K.a,{})]})})),X=n(21),Z=n(481),$=n(173),_=n(471),ee=n(84),te=n(472),ne=Object(s.a)((function(e){var t=e.attendees;return Object(U.jsx)(te.a,{horizontal:!0,children:t.map((function(e){return Object(U.jsx)(te.a.Item,{as:l.a,to:"/profiles/".concat(e.username),children:Object(U.jsx)(b.a,{size:"mini",circular:!0,src:e.image||"/assets/user.png"})},e.username)}))})})),ie=function(e){var t,n=e.activity;return Object(U.jsxs)(Z.a.Group,{children:[Object(U.jsxs)(Z.a,{children:[n.isCancelled&&Object(U.jsx)($.a,{attached:"top",color:"red",content:"Cancelled",style:{textAlign:"center"}}),Object(U.jsx)(_.a.Group,{children:Object(U.jsxs)(_.a,{children:[Object(U.jsx)(_.a.Image,{site:"tiny",circular:!0,src:"/assets/user.png"}),Object(U.jsxs)(_.a.Content,{children:[Object(U.jsx)(_.a.Header,{as:l.a,to:"/activities/".concat(n.id),children:n.title}),Object(U.jsxs)(_.a.Description,{children:["Hosted by ",null===(t=n.host)||void 0===t?void 0:t.username]}),n.isHost&&Object(U.jsx)(_.a.Description,{children:Object(U.jsx)($.a,{basic:!0,color:"orange",children:"You are hosting this activity"})}),n.isGoing&&!n.isHost&&Object(U.jsx)(_.a.Description,{children:Object(U.jsx)($.a,{basic:!0,color:"green",children:"You are going this activity"})})]})]})})]}),Object(U.jsx)(Z.a,{children:Object(U.jsxs)("span",{children:[Object(U.jsx)(ee.a,{name:"clock"}),Object(R.default)(n.date,"dd MMM yyyy h:mm aa"),Object(U.jsx)(ee.a,{name:"marker"}),n.venue]})}),Object(U.jsx)(Z.a,{secondary:!0,children:Object(U.jsx)(ne,{attendees:n.attendees})}),Object(U.jsxs)(Z.a,{clearing:!0,children:[Object(U.jsx)("span",{children:n.description}),Object(U.jsx)(j.a,{as:l.a,to:"/activities/".concat(n.id),color:"teal",floated:"right",content:"View"})]})]})},ce=Object(s.a)((function(){var e=P().activityStore.groupedActivities;return Object(U.jsx)(U.Fragment,{children:e.map((function(e){var t=Object(X.a)(e,2),n=t[0],c=t[1];return Object(U.jsxs)(i.Fragment,{children:[Object(U.jsx)(W.a,{sub:!0,color:"teal",children:n}),c.map((function(e){return Object(U.jsx)(ie,{activity:e},e.id)}))]},n)}))})})),re=Object(s.a)((function(){var e=P().activityStore,t=e.loadActivities,n=e.activityRegistry,c=e.loadingInitial;return Object(i.useEffect)((function(){n.size<=1&&t()}),[t,n.size]),c?Object(U.jsx)(Y,{content:"Loading activities"}):Object(U.jsxs)(H.a,{children:[Object(U.jsx)(H.a.Column,{width:"10",children:Object(U.jsx)(ce,{})}),Object(U.jsx)(H.a.Column,{width:"6",children:Object(U.jsx)(Q,{})})]})})),ae=n(28),se=n(469),oe=function(e){var t=Object(ae.d)(e.name),n=Object(X.a)(t,2),i=n[0],c=n[1];return Object(U.jsxs)(se.a.Field,{error:c.touched&&!!c.error,children:[Object(U.jsx)("label",{children:e.label}),Object(U.jsx)("input",Object(v.a)(Object(v.a)({},i),e)),c.touched&&c.error?Object(U.jsx)($.a,{basic:!0,color:"red",children:c.error}):null]})},le=Object(s.a)((function(){var e=P().userStore.login,t=Object(i.useState)({email:"",password:"",error:null}),n=Object(X.a)(t,1)[0];return Object(U.jsx)(ae.c,{initialValues:n,onSubmit:function(t,n){var i=n.setErrors,c=n.setSubmitting;e(t).then((function(){return c(!1)})).catch((function(e){i({error:"Invalid email or password"}),c(!1)}))},children:function(e){var t=e.handleSubmit,n=e.isSubmitting,i=e.errors;return Object(U.jsxs)(ae.b,{className:"ui form",onSubmit:t,autoComplete:"off",children:[Object(U.jsx)(W.a,{as:"h2",content:"Login to Eventify",color:"teal",textAlign:"center"}),Object(U.jsx)(oe,{name:"email",placeholder:"Email"}),Object(U.jsx)(oe,{name:"password",placeholder:"Password",type:"password"}),Object(U.jsx)(ae.a,{name:"error",render:function(){return Object(U.jsx)($.a,{style:{marginBottom:10},basic:!0,color:"red",content:i.error})}}),Object(U.jsx)(j.a,{loading:n,positive:!0,content:"Login",type:"submit",fluid:!0})]})}})})),de=n(42),ue=n(474),je=function(e){var t=e.errors;return Object(U.jsx)(ue.a,{error:!0,children:t&&Object(U.jsx)(ue.a.List,{children:t.map((function(e,t){return Object(U.jsx)(ue.a.Item,{children:e},t)}))})})},be=Object(s.a)((function(){var e=P().userStore.register,t=Object(i.useState)({email:"",password:"",displayName:"",username:"",error:null}),n=Object(X.a)(t,1)[0];return Object(U.jsx)(ae.c,{initialValues:n,onSubmit:function(t,n){var i=n.setErrors,c=n.setSubmitting;e(t).then((function(){return c(!1)})).catch((function(e){i({error:e}),c(!1)}))},validationSchema:de.a({displayName:de.b().required(),username:de.b().required(),email:de.b().required().email(),password:de.b().required()}),children:function(e){var t=e.handleSubmit,n=e.isSubmitting,i=e.errors,c=e.isValid,r=e.dirty;return Object(U.jsxs)(ae.b,{className:"ui form error",onSubmit:t,autoComplete:"off",children:[Object(U.jsx)(W.a,{as:"h2",content:"Sign up to Eventify",color:"teal",textAlign:"center"}),Object(U.jsx)(oe,{name:"displayName",placeholder:"Display Name"}),Object(U.jsx)(oe,{name:"username",placeholder:"Username"}),Object(U.jsx)(oe,{name:"email",placeholder:"Email"}),Object(U.jsx)(oe,{name:"password",placeholder:"Password",type:"password"}),Object(U.jsx)(ae.a,{name:"error",render:function(){return Object(U.jsx)(je,{errors:i.error})}}),Object(U.jsx)(j.a,{disabled:!c||!r||n,loading:n,positive:!0,content:"Submit",type:"submit",fluid:!0})]})}})})),he=Object(s.a)((function(){var e=P(),t=e.userStore,n=e.modalStore,i=t.isLoggedIn,c=n.openModal;return Object(U.jsx)(Z.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(U.jsxs)(o.a,{text:!0,children:[Object(U.jsxs)(W.a,{as:"h1",inverted:!0,children:[Object(U.jsx)(b.a,{size:"massive",src:"/assets/logo.png",alt:"logo",style:{marginBottom:12}}),"Eventify"]}),i?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W.a,{as:"h2",inverted:!0,content:"Welcome to Eventify"}),Object(U.jsx)(j.a,{as:l.a,to:"/activities",size:"huge",inverted:!0,children:"Take me to the Events"})]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(j.a,{onClick:function(){return c(Object(U.jsx)(le,{}))},size:"huge",inverted:!0,children:"Login"}),Object(U.jsx)(j.a,{onClick:function(){return c(Object(U.jsx)(be,{}))},size:"huge",inverted:!0,children:"Register"})]})]})})})),Oe=n(475),ve=function(e){var t=Object(ae.d)(e.name),n=Object(X.a)(t,2),i=n[0],c=n[1];return Object(U.jsxs)(se.a.Field,{error:c.touched&&!!c.error,children:[Object(U.jsx)("label",{children:e.label}),Object(U.jsx)("textarea",Object(v.a)(Object(v.a)({},i),e)),c.touched&&c.error?Object(U.jsx)($.a,{basic:!0,color:"red",children:c.error}):null]})},xe=n(468),pe=function(e){var t=Object(ae.d)(e.name),n=Object(X.a)(t,3),i=n[0],c=n[1],r=n[2];return Object(U.jsxs)(se.a.Field,{error:c.touched&&!!c.error,children:[Object(U.jsx)("label",{children:e.label}),Object(U.jsx)(xe.a,{clearable:!0,options:e.options,value:i.value||null,onChange:function(e,t){return r.setValue(t.value)},onBlur:function(){return r.setTouched(!0)},placeholder:e.placeholder}),c.touched&&c.error?Object(U.jsx)($.a,{basic:!0,color:"red",children:c.error}):null]})},me=[{text:"Drinks",value:"drinks"},{text:"Culture",value:"culture"},{text:"Film",value:"film"},{text:"Food",value:"food"},{text:"Music",value:"music"},{text:"Travel",value:"travel"}],fe=n(250),ge=n.n(fe),ye=function(e){var t=Object(ae.d)(e.name),n=Object(X.a)(t,3),i=n[0],c=n[1],r=n[2];return Object(U.jsxs)(se.a.Field,{error:c.touched&&!!c.error,children:[Object(U.jsx)(ge.a,Object(v.a)(Object(v.a)(Object(v.a)({},i),e),{},{selected:i.value&&new Date(i.value)||null,onChange:function(e){return r.setValue(e)}})),c.touched&&c.error?Object(U.jsx)($.a,{basic:!0,color:"red",children:c.error}):null]})},Ae=de.a().shape({title:de.b().required("The activity title is required"),date:de.b().required("Date is required").nullable(),description:de.b().required("The activity description is required"),category:de.b().required(),city:de.b().required(),venue:de.b().required()}),we=Object(s.a)((function(){var e=P().activityStore,t=(e.isLoading,e.updateActivity),n=e.createActivity,c=e.loadActivity,r=e.loadingInitial,s=e.setLoadingInitial,o=Object(a.h)().id,d=Object(a.f)(),u=i.useState(new F),b=Object(X.a)(u,2),h=b[0],O=b[1];Object(i.useEffect)((function(){o?c(o).then((function(e){O(new F(e))})):s(!1)}),[o,c,s]);return r?Object(U.jsx)(Y,{content:"Loading activity ..."}):Object(U.jsxs)(Z.a,{clearing:!0,children:[Object(U.jsx)(W.a,{content:"Activity Details",sub:!0,color:"teal"}),Object(U.jsx)(ae.c,{validationSchema:Ae,enableReinitialize:!0,initialValues:h,onSubmit:function(e){return function(e){if(e.id)t(e).then((function(){return d.push("/activities/".concat(e.id))}));else{var i=Object(v.a)(Object(v.a)({},e),{},{id:Object(Oe.a)()});n(i).then((function(){return d.push("/activities/".concat(i.id))}))}}(e)},children:function(e){var t=e.handleSubmit,n=e.isValid,i=e.isSubmitting,c=e.dirty;return Object(U.jsxs)(ae.b,{className:"ui form",onSubmit:t,autoComplete:"off",children:[Object(U.jsx)(oe,{placeholder:"Title",name:"title"}),Object(U.jsx)(ye,{placeholderText:"Date",name:"date",showTimeSelect:!0,timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa"}),Object(U.jsx)(ve,{placeholder:"Description",name:"description",rows:3}),Object(U.jsx)(pe,{placeholder:"Category",name:"category",options:me}),Object(U.jsx)(W.a,{content:"Location Details",sub:!0,color:"teal"}),Object(U.jsx)(oe,{placeholder:"City",name:"city"}),Object(U.jsx)(oe,{placeholder:"Venue",name:"venue"}),Object(U.jsx)(j.a,{disabled:i||!c||!n,loading:i,floated:"right",positive:!0,type:"submit",content:"Submit"}),Object(U.jsx)(j.a,{as:l.a,to:"/activities",floated:"right",type:"button",content:"Cancel"})]})}})]})})),ke=n(470),Se=Object(s.a)((function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Z.a,{textAlign:"center",attached:"top",inverted:!0,color:"teal",style:{border:"none"},children:Object(U.jsx)(W.a,{children:"Chat about this event"})}),Object(U.jsx)(Z.a,{attached:!0,children:Object(U.jsxs)(ke.a.Group,{children:[Object(U.jsxs)(ke.a,{children:[Object(U.jsx)(ke.a.Avatar,{src:"/assets/user.png"}),Object(U.jsxs)(ke.a.Content,{children:[Object(U.jsx)(ke.a.Author,{as:"a",children:"Matt"}),Object(U.jsx)(ke.a.Metadata,{children:Object(U.jsx)("div",{children:"Today at 5:42PM"})}),Object(U.jsx)(ke.a.Text,{children:"How artistic!"}),Object(U.jsx)(ke.a.Actions,{children:Object(U.jsx)(ke.a.Action,{children:"Reply"})})]})]}),Object(U.jsxs)(ke.a,{children:[Object(U.jsx)(ke.a.Avatar,{src:"/assets/user.png"}),Object(U.jsxs)(ke.a.Content,{children:[Object(U.jsx)(ke.a.Author,{as:"a",children:"Joe Henderson"}),Object(U.jsx)(ke.a.Metadata,{children:Object(U.jsx)("div",{children:"5 days ago"})}),Object(U.jsx)(ke.a.Text,{children:"Dude, this is awesome. Thanks so much"}),Object(U.jsx)(ke.a.Actions,{children:Object(U.jsx)(ke.a.Action,{children:"Reply"})})]})]}),Object(U.jsxs)(se.a,{reply:!0,children:[Object(U.jsx)(se.a.TextArea,{}),Object(U.jsx)(j.a,{content:"Add Reply",labelPosition:"left",icon:"edit",primary:!0})]})]})})]})})),Ce={filter:"brightness(30%)"},Ie={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"},Le=Object(s.a)((function(e){var t,n,i=e.activity,c=P().activityStore,r=c.updateAttendance,a=c.isLoading,s=c.cancelActivityToggle;return Object(U.jsxs)(Z.a.Group,{children:[Object(U.jsxs)(Z.a,{basic:!0,attached:"top",style:{padding:"0"},children:[i.isCancelled&&Object(U.jsx)($.a,{style:{position:"absolute",zIndex:1e3,left:-14,top:20},ribbon:!0,color:"red",content:"Cancelled"}),Object(U.jsx)(b.a,{src:"/assets/categoryImages/".concat(i.category,".jpg"),fluid:!0,style:Ce}),Object(U.jsx)(Z.a,{style:Ie,basic:!0,children:Object(U.jsx)(_.a.Group,{children:Object(U.jsx)(_.a,{children:Object(U.jsxs)(_.a.Content,{children:[Object(U.jsx)(W.a,{size:"huge",content:i.title,style:{color:"white"}}),Object(U.jsx)("p",{children:Object(R.default)(i.date,"dd MMM yyyy h:mm aa")}),Object(U.jsxs)("p",{children:["Hosted by"," ",Object(U.jsx)("strong",{children:Object(U.jsx)(l.a,{to:"/profiles/".concat(null===(t=i.host)||void 0===t?void 0:t.username),children:null===(n=i.host)||void 0===n?void 0:n.displayName})})]})]})})})})]}),Object(U.jsx)(Z.a,{clearing:!0,attached:"bottom",children:i.isHost?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(j.a,{color:i.isCancelled?"green":"red",floated:"left",basic:!0,content:i.isCancelled?"Re-activate Activity":"Cancel Activity",onClick:s,loading:a}),Object(U.jsx)(j.a,{as:l.a,to:"/manage/".concat(i.id),color:"orange",floated:"right",disabled:i.isCancelled,children:"Manage Event"})]}):i.isGoing?Object(U.jsx)(j.a,{loading:a,onClick:r,children:"Cancel attendance"}):Object(U.jsx)(j.a,{loading:a,onClick:r,color:"teal",disabled:i.isCancelled,children:"Join Activity"})})]})})),Me=Object(s.a)((function(e){var t=e.activity,n=t.attendees,i=t.host;return n?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(Z.a,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal",children:[n.length," ",1===n.length?"Person":"People"," going"]}),Object(U.jsx)(Z.a,{attached:!0,children:Object(U.jsx)(te.a,{relaxed:!0,divided:!0,children:n.map((function(e){return Object(U.jsxs)(_.a,{style:{position:"relative"},children:[e.username===(null===i||void 0===i?void 0:i.username)?Object(U.jsx)($.a,{style:{position:"absolute"},color:"orange",ribbon:"right",children:"Host"}):null,Object(U.jsx)(b.a,{size:"tiny",src:e.image||"/assets/user.png"}),Object(U.jsxs)(_.a.Content,{verticalAlign:"middle",children:[Object(U.jsx)(_.a.Header,{as:"h3",children:Object(U.jsx)(l.a,{to:"/profiles/".concat(e.username),children:e.username})}),Object(U.jsx)(_.a.Extra,{style:{color:"orange"},children:"Following"})]})]},e.username)}))})})]}):null})),Te=Object(s.a)((function(e){var t=e.activity;return Object(U.jsxs)(Z.a.Group,{children:[Object(U.jsx)(Z.a,{attached:"top",children:Object(U.jsxs)(H.a,{children:[Object(U.jsx)(H.a.Column,{width:1,children:Object(U.jsx)(ee.a,{size:"large",color:"teal",name:"info"})}),Object(U.jsx)(H.a.Column,{width:15,children:Object(U.jsx)("p",{children:t.description})})]})}),Object(U.jsx)(Z.a,{attached:!0,children:Object(U.jsxs)(H.a,{verticalAlign:"middle",children:[Object(U.jsx)(H.a.Column,{width:1,children:Object(U.jsx)(ee.a,{name:"calendar",size:"large",color:"teal"})}),Object(U.jsx)(H.a.Column,{width:15,children:Object(U.jsx)("span",{children:Object(R.default)(t.date,"dd MMM yyyy h:mm aa")})})]})}),Object(U.jsx)(Z.a,{attached:!0,children:Object(U.jsxs)(H.a,{verticalAlign:"middle",children:[Object(U.jsx)(H.a.Column,{width:1,children:Object(U.jsx)(ee.a,{name:"marker",size:"large",color:"teal"})}),Object(U.jsx)(H.a.Column,{width:11,children:Object(U.jsxs)("span",{children:[t.venue,", ",t.city]})})]})})]})})),Ee=Object(s.a)((function(){var e=P().activityStore,t=e.selectedActivity,n=e.loadActivity,c=e.loadingInitial,r=Object(a.h)().id;return Object(i.useEffect)((function(){r&&n(r)}),[r,n]),c||!t?Object(U.jsx)(Y,{content:"Loading"}):Object(U.jsxs)(H.a,{children:[Object(U.jsxs)(H.a.Column,{width:10,children:[Object(U.jsx)(Le,{activity:t}),Object(U.jsx)(Te,{activity:t}),Object(U.jsx)(Se,{})]}),Object(U.jsx)(H.a.Column,{width:6,children:Object(U.jsx)(Me,{activity:t})})]})})),Fe=function(){var e=Object(i.useState)(null),t=Object(X.a)(e,2),n=t[0],c=t[1];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W.a,{as:"h1",content:"Test Error component"}),Object(U.jsx)(Z.a,{children:Object(U.jsxs)(j.a.Group,{widths:"7",children:[Object(U.jsx)(j.a,{onClick:function(){w.a.get("/apibuggy/not-found").catch((function(e){return console.log(e.response)}))},content:"Not Found",basic:!0,primary:!0}),Object(U.jsx)(j.a,{onClick:function(){w.a.get("/apibuggy/bad-request").catch((function(e){return console.log(e.response)}))},content:"Bad Request",basic:!0,primary:!0}),Object(U.jsx)(j.a,{onClick:function(){w.a.post("/apiactivities",{}).catch((function(e){return c(e)}))},content:"Validation Error",basic:!0,primary:!0}),Object(U.jsx)(j.a,{onClick:function(){w.a.get("/apibuggy/server-error").catch((function(e){return console.log(e.response)}))},content:"Server Error",basic:!0,primary:!0}),Object(U.jsx)(j.a,{onClick:function(){w.a.get("/apibuggy/unauthorised").catch((function(e){return console.log(e.response)}))},content:"Unauthorised",basic:!0,primary:!0}),Object(U.jsx)(j.a,{onClick:function(){w.a.get("/apiactivities/notaguid").catch((function(e){return console.log(e)}))},content:"Bad Guid",basic:!0,primary:!0})]})}),n&&Object(U.jsx)(je,{errors:n})]})},Re=function(){return Object(U.jsxs)(Z.a,{placeholder:!0,children:[Object(U.jsxs)(W.a,{icon:!0,children:[Object(U.jsx)(ee.a,{name:"search"}),"Oops - we've look everywhere and could not find this."]}),Object(U.jsx)(Z.a.Inline,{children:Object(U.jsx)(j.a,{as:l.a,to:"activities",primary:!0,children:"Return to activities page"})})]})},ze=Object(s.a)((function(){var e=P().commonStore.error;return Object(U.jsxs)(o.a,{children:[Object(U.jsx)(W.a,{as:"h1",content:"Server Error"}),Object(U.jsx)(W.a,{sub:!0,as:"h5",color:"red",content:null===e||void 0===e?void 0:e.message}),(null===e||void 0===e?void 0:e.details)&&Object(U.jsxs)(Z.a,{children:[Object(U.jsx)(W.a,{as:"h4",content:"Stack trace",color:"teal"}),Object(U.jsx)("code",{style:{marginTop:"10px"},children:e.details})]})]})})),qe=n(473),De=Object(s.a)((function(){var e=P().modalStore,t=e.modal,n=e.closeModal;return Object(U.jsx)(qe.a,{open:t.open,onClose:n,size:"mini",children:Object(U.jsx)(qe.a.Content,{children:t.body})})}));var Ge=Object(s.a)((function(){var e=Object(a.g)(),t=P(),n=t.commonStore,c=t.userStore,r=n.token,s=n.setAppLoaded,l=n.appLoaded,d=c.getUser;return Object(i.useEffect)((function(){r?d().finally((function(){return s()})):s()}),[n,c,d,s,r]),l?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(k.a,{position:"bottom-right",hideProgressBar:!0}),Object(U.jsx)(De,{}),Object(U.jsx)(a.a,{path:"/",exact:!0,component:he}),Object(U.jsx)(a.a,{path:"/(.+)",render:function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(B,{}),Object(U.jsx)(o.a,{style:{marginTop:"7em"},children:Object(U.jsxs)(a.c,{children:[Object(U.jsx)(a.a,{exact:!0,path:"/activities",component:re}),Object(U.jsx)(a.a,{path:"/activities/:id",component:Ee}),Object(U.jsx)(a.a,{path:["/manage/:id","/createActivity"],component:we},e.key),Object(U.jsx)(a.a,{path:"/errors",component:Fe}),Object(U.jsx)(a.a,{path:"/server-error",component:ze}),Object(U.jsx)(a.a,{path:"/login",component:le}),Object(U.jsx)(a.a,{component:Re})]})})]})}})]}):Object(U.jsx)(Y,{content:"Loading App ..."})})),Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,484)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))},Pe=n(41),Ue=Object(Pe.a)();r.a.render(Object(U.jsx)(N.Provider,{value:G,children:Object(U.jsx)(a.b,{history:Ue,children:Object(U.jsx)(Ge,{})})}),document.getElementById("root")),Ne()}},[[448,1,2]]]);
//# sourceMappingURL=main.147c5797.chunk.js.map