(function(){"use strict";var e={9483:function(e,t,n){var o=n(9242),a={async categories(){return window.Parse.Cloud.run("categories")},async content(e){return fetch(`db/content-${e}.json`).then((e=>e.json()))},async video(e){return window.Parse.Cloud.run("get",{category_id:e})},rateVideo(e,t){window.Parse.Cloud.run("rate",{id:e,rating:t})}},i=n(3396);const r=(0,i._)("svg",{height:"2.5em",width:"2.5em",viewBox:"0 0 24 24",fill:"currentColor"},[(0,i._)("path",{d:"m 11,6 v 2 h 2 V 6 Z m -1,4 -0.9999999,1 H 11 v 6 H 9.0000001 v 1 H 10 h 4 1 v -1 h -2 v -7 z"})],-1),l=[r],s={class:"container-lg"},c={class:"row"},d={class:"col-12 col-lg"},u={class:"col-12 col-lg-auto"};function g(e,t,n,a,r,g){const h=(0,i.up)("SideBar"),y=(0,i.up)("YouTube"),p=(0,i.up)("WelcomeModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r.loaded?((0,i.wg)(),(0,i.iD)("button",{key:0,type:"button",id:"info-btn",class:"btn btn-outline-default",onClick:t[0]||(t[0]=t=>e.$refs.infoBtn.show())},l)):(0,i.kq)("",!0),(0,i.wy)((0,i._)("div",s,[(0,i._)("div",c,[(0,i._)("div",d,[(0,i.Wm)(h,{history:r.history,onChange:g.categoryChanged,onClear:g.clearHistory,content:r.content},null,8,["history","onChange","onClear","content"])]),(0,i._)("div",u,[r.loading?((0,i.wg)(),(0,i.j4)(y,{key:0,category:r.category,paused:r.paused,onChange:g.changed,onReady:g.playerLoaded,content:r.content},null,8,["category","paused","onChange","onReady","content"])):(0,i.kq)("",!0)])])],512),[[o.F8,r.loaded]]),r.loaded?((0,i.wg)(),(0,i.j4)(p,{key:1,ref:"infoBtn",onChange:g.opened,onChangeLang:g.langChanged,content:r.content.modal},null,8,["onChange","onChangeLang","content"])):(0,i.kq)("",!0)],64)}n(7658);var h=n(7139);const y={class:"modal"},p={class:"body"},m=(0,i._)("hr",null,null,-1),w={class:"row"},v={class:"col-auto"},_=["value"],f=(0,i._)("div",{class:"col"},null,-1),b={class:"col-auto"};function k(e,t,n,a,r,l){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"fade"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",{id:"welcome-modal",ref:"welcomeModal",onClick:t[2]||(t[2]=(...e)=>l.close&&l.close(...e)),class:"modal-overlay"},[(0,i._)("div",y,[(0,i._)("div",p,[(0,i._)("h2",null,(0,h.zw)(n.content.header),1),(0,i._)("p",null,(0,h.zw)(n.content.content),1),(0,i._)("ol",null,[(0,i._)("li",null,(0,h.zw)(n.content.rules[0]),1),(0,i._)("li",null,(0,h.zw)(n.content.rules[1]),1),(0,i._)("li",null,(0,h.zw)(n.content.rules[2]),1),(0,i._)("li",null,(0,h.zw)(n.content.rules[3]),1),(0,i._)("li",null,(0,h.zw)(n.content.rules[4]),1)]),(0,i._)("p",null,(0,h.zw)(n.content.congrat),1),m,(0,i._)("div",w,[(0,i._)("div",v,[(0,i.wy)((0,i._)("select",{class:"lang-select btn btn-outline-default","onUpdate:modelValue":t[0]||(t[0]=e=>r.lang=e)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.langList,(({value:e,text:t})=>((0,i.wg)(),(0,i.iD)("option",{key:e,value:e},(0,h.zw)(t),9,_)))),128))],512),[[o.bM,r.lang]])]),f,(0,i._)("div",b,[(0,i._)("button",{type:"button",class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>l.getMatured&&l.getMatured(...e))},(0,h.zw)(n.content.btn),1)])])])])],512),[[o.F8,r.opened]])])),_:1})}var C={name:"CWelcome",props:["content"],emits:["changeLang","open"],expose:["show"],data(){return{opened:"1"!=localStorage.getItem("matured"),lang:localStorage.getItem("lang"),langList:[{value:"en",text:"English"},{value:"ru",text:"Русский"}]}},watch:{opened:{handler(e){this.$emit("change",e)},immediate:!0},lang(e){a.content(e).then((t=>{localStorage.setItem("lang",e),this.$emit("changeLang",t)}))}},methods:{show(){this.opened=!0},close(e){"1"==localStorage.getItem("matured")&&e.target===this.$refs.welcomeModal&&(this.opened=!1)},getMatured(){localStorage.setItem("matured","1"),this.opened=!1},setLang(e){a.content(e).then((t=>{this.lang=e,localStorage.setItem("lang",e),this.$emit("changeLang",t)}))}}},x=n(89);const I=(0,x.Z)(C,[["render",k]]);var S=I;const z=(0,i._)("div",{id:"ytplayer"},null,-1),D={class:"row p-3"},L={class:"col"},O={class:"description"},B={class:"col-auto"},M={class:"row"},Y={class:"col"},j={class:"col"},H={class:"col"};function P(e,t,n,o,a,r){const l=(0,i.up)("RateButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[z,(0,i._)("div",D,[(0,i._)("div",L,[(0,i._)("p",O,(0,h.zw)(a.video.views.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g," "))+" "+(0,h.zw)(1==a.video.views?n.content.view:n.content.views),1)]),(0,i._)("div",B,[(0,i._)("div",M,[(0,i._)("div",Y,[(0,i.Wm)(l,{type:"plus",onClick:t[0]||(t[0]=e=>r.next("p")),remaining:a.timer.rate},null,8,["remaining"])]),(0,i._)("div",j,[(0,i.Wm)(l,{type:"default",onClick:t[1]||(t[1]=e=>r.next("e")),remaining:a.timer.skip},null,8,["remaining"])]),(0,i._)("div",H,[(0,i.Wm)(l,{type:"minus",onClick:t[2]||(t[2]=e=>r.next("n")),remaining:a.timer.rate},null,8,["remaining"])])])])])],64)}function T(e,t,n){return Math.min(Math.max(e,t),n)}var $=class{constructor(){this.id=0,this.rate=1/0,this.skip=1/0}start(e){0===this.id&&(this.skip=3,this.rate=T(Math.ceil(e),3,90)),this.id=setInterval(this.decrease.bind(this),1e3)}stop(){clearInterval(this.id)}decrease(){this.rate>0&&(this.rate-=1),this.skip>0&&(this.skip-=1)}};const V=["disabled"],E={key:0},N={style:{"shape-rendering":"auto"},width:"32px",height:"32px",viewBox:"0 0 100 100"},R=(0,i._)("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-dasharray":"179.61224975585938 76.97667846679687",d:"M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z","stroke-linecap":"round"},[(0,i._)("animate",{attributeName:"stroke-dashoffset",repeatCount:"indefinite",dur:"1s",keyTimes:"0;1",values:"0;256.58892822265625"})],-1),W=[R],A={key:1},Z={key:2},F={width:"32",height:"32",fill:"currentColor"},U=(0,i._)("rect",{x:"4",y:"14",width:"24",height:"4",rx:"2"},null,-1),q=(0,i._)("rect",{x:"14",y:"4",width:"4",height:"24",rx:"2"},null,-1),K={key:1,x:"4",y:"14",width:"24",height:"4",rx:"2"},G=(0,i._)("rect",{x:"4",y:"8",width:"24",height:"4",rx:"2"},null,-1),J=(0,i._)("rect",{x:"4",y:"20",width:"24",height:"4",rx:"2"},null,-1);function Q(e,t,n,o,a,r){return(0,i.wg)(),(0,i.iD)("button",{type:"button",class:(0,h.C_)([r.btnClass,"btn btn-rate"]),disabled:0!==n.remaining},[n.remaining==1/0?((0,i.wg)(),(0,i.iD)("span",E,[((0,i.wg)(),(0,i.iD)("svg",N,W))])):n.remaining>0?((0,i.wg)(),(0,i.iD)("span",A,(0,h.zw)(n.remaining),1)):((0,i.wg)(),(0,i.iD)("span",Z,[((0,i.wg)(),(0,i.iD)("svg",F,["plus"===n.type?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[U,q],64)):"minus"===n.type?((0,i.wg)(),(0,i.iD)("rect",K)):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[G,J],64))]))]))],10,V)}var X={props:["type","remaining"],data(){return{}},computed:{btnClass(){return"btn-outline-"+("plus"===this.type?"danger":"minus"===this.type?"primary":"default")}}};const ee=(0,x.Z)(X,[["render",Q]]);var te=ee,ne={name:"YouTube",components:{RateButton:te},props:{category:Number,paused:Boolean,content:Object},emits:["ready","change","error"],data(){return{timer:new $,video:{id:0,views:0},player:null}},watch:{paused(e){e?this.player.pauseVideo():this.player.playVideo()}},created(){a.video(this.category).then((e=>{window.onYouTubeIframeAPIReady=()=>{this.player=new window.YT.Player("ytplayer",{width:null,height:null,videoId:e.id,playerVars:{origin:location.origin,modestbranding:"1",iv_load_policy:"3",rel:"0",autoplay:this.paused?"0":"1",showinfo:"0"},events:{onReady:()=>{this.video=e,this.$emit("ready")},onStateChange:e=>{this.timer.stop(),e.data==window.YT.PlayerState.BUFFERING&&this.paused&&this.player.pauseVideo(),e.data==window.YT.PlayerState.PLAYING&&this.timer.start(e.target.getDuration()/64)},onError:()=>this.next("n")}})};const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}))},beforeUnmount(){this.rate("e")},methods:{next(e){this.timer=new $,this.rate(e),a.video(this.category).then((t=>{const n=this.player.getVideoData();n.title.length&&this.$emit("change",{id:n.video_id,title:n.title,rating:e}),this.player.loadVideoById(t.id),this.video=t})).catch((()=>{this.next("e")}))},rate(e){a.rateVideo(this.video.id,e)}}};const oe=(0,x.Z)(ne,[["render",P]]);var ae=oe;const ie={class:"sidebar"},re={class:"caption"},le=["disabled"],se=["href"],ce=["disabled","onClick"],de=(0,i._)("div",{class:"category-arrow"},[(0,i._)("svg",{width:"24",height:"24",viewBox:"0 0 32 32",fill:"currentColor"},[(0,i._)("path",{d:"M 27.721991,23.326889 A 1.4652985,1.4652985 0 0 1 26.681629,22.901953 L 15.999603,12.205274 5.3175771,22.901953 A 1.471294,1.471294 0 1 1 3.2368532,20.821229 L 14.959241,9.0988412 a 1.4652985,1.4652985 0 0 1 2.080724,0 L 28.762353,20.821229 a 1.4652985,1.4652985 0 0 1 0,2.080724 1.4652985,1.4652985 0 0 1 -1.040362,0.424936 z"})])],-1),ue={class:"category-caption"};function ge(e,t,n,o,a,r){return(0,i.wg)(),(0,i.iD)("div",ie,[(0,i._)("h3",re,[(0,i._)("span",null,[(0,i.Uk)((0,h.zw)(n.content.history),1),(0,i._)("button",{type:"button",class:"btn btn-danger",disabled:0==n.history.length,onClick:t[0]||(t[0]=t=>e.$emit("clear"))},(0,h.zw)(n.content.clear),9,le)]),(0,i._)("span",null,(0,h.zw)(n.history.length),1)]),(0,i._)("ul",{class:(0,h.C_)(["history-list",{active:!a.is_category_active}]),ref:"historyList"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.history,(({rating:e,id:t,title:n},o)=>((0,i.wg)(),(0,i.iD)("li",{key:o},[(0,i._)("a",{class:(0,h.C_)(e),href:"https://www.youtube.com/watch?v="+t,target:"_blank"},(0,h.zw)(n),11,se)])))),128))],2),(0,i._)("ul",{class:(0,h.C_)(["category-list",{active:a.is_category_active}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.categories,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e},[(0,i._)("button",{target:"_blank",disabled:a.category==e,onClick:t=>r.setCategory(e)},(0,h.zw)(n.content.category[e]),9,ce)])))),128))],2),(0,i._)("button",{class:(0,h.C_)(["category-show-btn",{active:a.is_category_active}]),onClick:t[1]||(t[1]=e=>a.is_category_active=!a.is_category_active)},[de,(0,i._)("div",ue,[(0,i._)("span",null,(0,h.zw)(n.content.categories),1),(0,i._)("span",null,(0,h.zw)(n.content.category[a.category]),1)])],2)])}var he={props:{history:Array,content:Object},emits:["change","clear"],data(){return{category:Number(localStorage.getItem("category")),is_category_active:!1}},methods:{setCategory(e){this.is_category_active=!1,this.category=e,localStorage.setItem("category",e),this.$emit("change",e)}},mounted(){const e=new MutationObserver((e=>{e[0].target.scrollTo(0,1073741824)}));e.observe(this.$refs.historyList,{childList:!0}),this.$emit("change",Number(localStorage.getItem("category")))}};const ye=(0,x.Z)(he,[["render",ge]]);var pe=ye;const me=document.getElementById("start-btn");var we={name:"App",components:{WelcomeModal:S,YouTube:ae,SideBar:pe},data(){const e=localStorage.getItem("history"),t=e?JSON.parse(e):[];return{content:this.content,history:t,category:Number(localStorage.getItem("category")),loading:!1,loaded:!1,paused:!1}},methods:{opened(e){this.paused=e},playerLoaded(){this.loaded=!0,me.disabled=!1,me.hidden=!0},langChanged(e){this.content=e},changed(e){this.history.push(e),localStorage.setItem("history",JSON.stringify(this.history))},categoryChanged(e){this.category=e},clearHistory(){localStorage.removeItem("history"),this.history.length=0}},created(){me.disabled=!1,me.addEventListener("click",(()=>{me.disabled=!0,this.loading=!0}))}};const ve=(0,x.Z)(we,[["render",g]]);var _e=ve;document.body.classList.toggle("dark",localStorage.getItem("darkmode")),document.getElementById("theme-toggle-btn").addEventListener("click",(()=>{let e=document.body.classList.toggle("dark");localStorage.setItem("darkmode",e)}));const fe=(0,o.ri)(_e);a.categories().then((e=>{fe.config.globalProperties.categories=e;let t=localStorage.getItem("lang");return null===t&&(t=-1===navigator.language.indexOf("ru")?"en":"ru",localStorage.setItem("lang",t)),t})).then(a.content).then((e=>{fe.config.globalProperties.content=e,fe.mount("#app")}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],i=e[d][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<r&&(r=i));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],l=o[1],s=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var d=s(n)}for(t&&t(o);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkfortube"]=self["webpackChunkfortube"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9483)}));o=n.O(o)})();
//# sourceMappingURL=app.fc75f4d4.js.map