"use strict";window.g_aws=class{constructor(c,a){this.g_alR=c,this.g_awt=a,this.g_awu=!1,this.g_akW=()=>this.g_JS()}g_awv(){}g_aww(e,a,b,c){this.g_alR.g_awx(this.g_awt,e,a,b,c)}g_awy(e,a,b,c){return this.g_alR.g_awz(this.g_awt,e,a,b,c)}g_awA(d,a,b){this.g_alR.g_awB()?this.g_aww(d,a,b):this.g_alR.g_awC()._OnMessageFromDOM({type:"event",component:this.g_awt,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_awD(c,a){this.g_alR.g_awE(this.g_awt,c,a)}g_awF(d){for(const[a,b]of d)this.g_awD(a,b)}g_awG(){return this.g_alR}g_awH(){return this.g_awt}g_$t(){this.g_awu||(this.g_alR.g_awI(this.g_akW),this.g_awu=!0)}g_$g(){this.g_awu&&(this.g_alR.g_awJ(this.g_akW),this.g_awu=!1)}g_JS(){}},"use strict",window.g_awK=class extends g_aws{constructor(c,a){super(c,a),this.g_awL=new Map,this.g_awM=!0,this.g_awD("create",b=>this.g_awN(b)),this.g_awD("destroy",b=>this.g_awO(b)),this.g_awD("set-visible",b=>this.g_awP(b)),this.g_awD("update-position",b=>this.g_awQ(b)),this.g_awD("update-state",b=>this.g_awR(b)),this.g_awD("focus",b=>this.g_awS(b)),this.g_awD("set-css-style",b=>this.g_awT(b))}g_awU(b){this.g_awM=!!b}g_awV(c,e){this.g_awD(c,b=>{const a=b.elementId,c=this.g_awL.get(a);return e(c,b)})}g_awN(d){const a=d.elementId,b=this.g_$T(a,d);this.g_awL.set(a,b),d.isVisible||(b.style.display="none"),this.g_awM&&document.body.appendChild(b)}g_$T(){throw new Error("required override")}g_awW(){}g_awO(d){const a=d.elementId,b=this.g_awL.get(a);this.g_awW(b),this.g_awM&&b.parentElement.removeChild(b),this.g_awL.delete(a)}g_awX(d,a,b){b||(b={}),b.elementId=a,this.g_aww(d,b)}g_awY(d,a,b){b||(b={}),b.elementId=a,this.g_awA(d,b)}g_awP(c){if(this.g_awM){const a=this.g_awL.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_awQ(d){if(this.g_awM){const a=this.g_awL.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_awR(c){const a=this.g_awL.get(c.elementId);this.g_awZ(a,c)}g_awZ(){throw new Error("required override")}g_awS(c){const a=this.g_awL.get(c.elementId);c.focus?a.focus():a.blur()}g_awT(c){const a=this.g_awL.get(c.elementId);a.style[c.prop]=c.val}g_aw_(b){return this.g_awL.get(b)}},"use strict";{function n(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function o(c){const a=await p(c),b=new TextDecoder("utf-8");return b.decode(a)}function p(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;window.RealFile=window.File;const f=[],i=new Map,g=new Map;let h=0;const j=[];self.g_aw$=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");j.push(b)},window.g_axa=class b{constructor(b){this.g_axb=b.g_axc,this.g_axd=null,this.g_ajX="",this.g_axe=b.g_axf,this.g_axg={},this.g_axh=null,this.g_axi=null,this.g_axj=[],this.g_axk=null,this.g_ahY=null,this.g_alL=null,this.g_aiF=-1,this.g_axl=()=>this.g_axm(),this.g_axn=[],this.g_aka=b.g_axo,"cordova"===this.g_aka&&this.g_axb&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Cordova due to crbug.com/939775. Reverting to DOM mode."),this.g_axb=!1),this.g_axp=!1,this.g_axq=null,("html5"===this.g_aka||"playable-ad"===this.g_aka)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_awE("runtime","cordova-fetch-local-file",b=>this.g_axr(b)),this.g_awE("runtime","create-job-worker",b=>this.g_axs(b)),"cordova"===this.g_aka?document.addEventListener("deviceready",()=>this.g__j(b)):this.g__j(b)}g_em(){this.g_axt(),this.g_axd&&(this.g_axd.onmessage=null,this.g_axd=null),this.g_axh&&(this.g_axh.terminate(),this.g_axh=null),this.g_axi&&(this.g_axi.g_em(),this.g_axi=null),this.g_ahY&&(this.g_ahY.parentElement.removeChild(this.g_ahY),this.g_ahY=null)}g_axu(){return this.g_ahY}g_fg(){return this.g_ajX}g_awB(){return this.g_axb}g_ann(){return this.g_aka}g_amg(){return"cordova"===this.g_aka&&a}g_axv(){return"cordova"===this.g_aka&&!1===a}async g__j(d){if("playable-ad"===this.g_aka){this.g_axq=self.c3_base64files,await this.g_axw();for(let a=0,b=d.g_axx.length;a<b;++a){const b=d.g_axx[a].toLowerCase();this.g_axq.hasOwnProperty(b)&&(d.g_axx[a]=URL.createObjectURL(this.g_axq[b]))}}if(d.g_axy)this.g_ajX=d.g_axy;else{const c=location.origin;this.g_ajX=("null"===c?"file:///":c)+location.pathname;const a=this.g_ajX.lastIndexOf("/");-1!==a&&(this.g_ajX=this.g_ajX.substr(0,a+1))}if(d.g_axz)for(const[a,b]of Object.entries(d.g_axz))this.g_axg[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_axd=a.port1,this.g_axd.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_axA(b)),this.g_alL=new self.g_axB(this),await this.g_alL.g_ae_(),this.g_axC(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_axD(),this.g_axb?await this.g_axE(d,a.port2):await this.g_axF(d,a.port2)}g_axG(b){return this.g_axg.hasOwnProperty(b)?this.g_axg[b]:b.endsWith("/workermain.js")&&this.g_axg.hasOwnProperty("workermain.js")?this.g_axg["workermain.js"]:"playable-ad"===this.g_aka&&this.g_axq.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_axq[b.toLowerCase()]):b}async g_axH(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_amg()){const a=await this.g_Aj(this.g_axe+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_axC(){if(this.g_amg()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_axI(d){return{baseUrl:this.g_ajX,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_ajh(),projectData:d.g_axJ,previewImageBlobs:window.cr_previewImageBlobs||this.g_axq,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:d.g_axo,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_axK,jobScheduler:this.g_alL.g_axL(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_axe+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_axe+"opus.wasm.wasm",isWKWebView:this.g_amg(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_axE(e,a){const b=this.g_axG(e.g_axM);this.g_axh=await this.g_axH(b,this.g_ajX,{name:"Runtime"}),this.g_ahY=document.createElement("canvas"),this.g_ahY.style.display="none";const c=this.g_ahY.transferControlToOffscreen();document.body.appendChild(this.g_ahY),window.c3canvas=this.g_ahY,this.g_axh.postMessage(Object.assign(this.g_axI(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_axN||[],engineScripts:e.g_axx,projectScripts:window.g_axO,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_alL.g_axP()]),this.g_axj=f.map(b=>new b(this)),this.g_axQ(),self.c3_callFunction=(c,a)=>this.g_axk.g_QP(c,a),"preview"===this.g_aka&&(self.goToLastErrorScript=()=>this.g_awx("runtime","go-to-last-error-script"))}async g_axF(a,b){this.g_ahY=document.createElement("canvas"),this.g_ahY.style.display="none",document.body.appendChild(this.g_ahY),window.c3canvas=this.g_ahY,this.g_axj=f.map(b=>new b(this)),this.g_axQ();const c=a.g_axx.map(b=>new URL(b,this.g_ajX).toString());if(await Promise.all(c.map(a=>n(a))),a.g_axR&&0<a.g_axR.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_axR.map(a=>n(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_axS(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_axS(b),100)}}if("preview"===this.g_aka&&"object"!=typeof self.g_aQ.g_awr)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_axI(a),{isInWorker:!1,messagePort:b,canvas:this.g_ahY,runOnStartupFunctions:j});this.g_axi=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_axi,d)}g_axS(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_axs(){const b=await this.g_alL.g_axT();return{outputPort:b,transferables:[b]}}g_awC(){if(this.g_axb)throw new Error("not available in worker mode");return this.g_axi}g_awx(f,a,b,c,d){this.g_axd.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_axp?void 0:d)}g_awz(i,a,b,c,d){const e=h++,f=new Promise((c,a)=>{g.set(e,{resolve:c,reject:a})});return this.g_axd.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_axp?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_axU(c);else if("result"===a)this.g_axV(c);else if("runtime-ready"===a)this.g_axW();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_axU(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_axX(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_axX(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_axX(c,!1,d.toString())}):this.g_axX(c,!0,f))}g_axX(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_axd.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_axV(f){const a=f.responseId,b=f.isOk,c=f.result,d=g.get(a);b?d.resolve(c):d.reject(c),g.delete(a)}g_awE(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_axY(b){if(f.includes(b))throw new Error("DOM handler already added");f.push(b)}g_axQ(){for(const b of this.g_axj)if("runtime"===b.g_awH())return void(this.g_axk=b);throw new Error("cannot find runtime DOM handler")}g_axA(b){this.g_awx("debugger","message",b)}g_axW(){for(const b of this.g_axj)b.g_awv()}static g_ajh(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_axZ(){return await this.g_awz("runtime","get-remote-preview-status-info")}g_awI(b){this.g_axn.push(b),this.g_ax_()}g_awJ(c){const a=this.g_axn.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_axn.splice(a,1),this.g_axn.length||this.g_axt()}g_ax_(){-1===this.g_aiF&&this.g_axn.length&&(this.g_aiF=requestAnimationFrame(this.g_axl))}g_axt(){-1!==this.g_aiF&&(cancelAnimationFrame(this.g_aiF),this.g_aiF=-1)}g_axm(){this.g_aiF=-1;for(const b of this.g_axn)b();this.g_ax_()}g_ax$(b){this.g_axk.g_ax$(b)}g_aya(b){this.g_axk.g_aya(b)}g_ayb(){this.g_axk.g_ayb()}g_ayc(b){this.g_axk.g_ayc(b)}g_AG(b){return!!c[b]}async g_abh(c){const a=await this.g_awz("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fS(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fT(b){return!this.g_fS(b)}async g_axr(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ak(a);case"buffer":return await this.g_Aj(a);default:throw new Error("unsupported type");}}g_ayd(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ak(b){const a=await this.g_ayd(b);return await o(a)}g_aye(){if(d.length&&!(8<=e)){e++;const b=d.shift();this.g_ayf(b.filename,b.g_ayg,b.g_ayh)}}g_Aj(f){return new Promise((g,b)=>{d.push({filename:f,g_ayg:b=>{e--,this.g_aye(),g(b)},g_ayh:c=>{e--,this.g_aye(),b(c)}}),this.g_aye()})}async g_ayf(c,a,b){try{const b=await this.g_ayd(c),d=await p(b);a(d)}catch(c){b(c)}}async g_axw(){const d=[];for(const[a,b]of Object.entries(this.g_axq))d.push(this.g_ayi(a,b));await Promise.all(d)}async g_ayi(e,a){if("object"==typeof a)this.g_axq[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_axq[e]=c}}g_axD(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_axp=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function k(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function l(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function m(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function c(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}const e={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},d={dispatchUserScriptEvent:!0};self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let f=!1;document.addEventListener("pause",()=>f=!0),document.addEventListener("resume",()=>f=!1);const g=class extends g_aws{constructor(d){super(d,"runtime"),this.g_ayj=!0,this.g_ayk=-1,this.g_ayl="any",this.g_aym=!1,this.g_ayn=!1,this.g_ayo=null,d.g_awE("canvas","update-size",b=>this.g_ayp(b)),d.g_awE("runtime","invoke-download",b=>this.g_ayq(b)),d.g_awE("runtime","raster-svg-image",b=>this.g_ayr(b)),d.g_awE("runtime","set-target-orientation",b=>this.g_ays(b)),d.g_awE("runtime","register-sw",()=>this.g_ayt()),d.g_awE("runtime","post-to-debugger",b=>this.g_ayu(b)),d.g_awE("runtime","go-to-script",b=>this.g_ayu(b)),d.g_awE("runtime","before-start-ticking",()=>this.g_ayv()),d.g_awE("runtime","debug-highlight",b=>this.g_ayw(b)),d.g_awE("runtime","enable-device-orientation",()=>this.g_ayx()),d.g_awE("runtime","enable-device-motion",()=>this.g_ayy());const f=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();f.has(c)||m(a)||b.preventDefault()}),window.addEventListener("selectstart",b=>b.preventDefault()),window.addEventListener("gesturehold",b=>b.preventDefault()),window.addEventListener("touchstart",b=>b.preventDefault(),{passive:!1}),this.g_ayz=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",c,{passive:!1}),window.addEventListener("wheel",c,{passive:!1}),window.addEventListener("resize",()=>this.g_aiW()),this.g_ayA=new Set,this.g_ayB=new WeakSet,this.g_ayC=!1}g_ayv(){return document.addEventListener("visibilitychange",()=>this.g_alN(document.hidden)),document.addEventListener("pause",()=>this.g_alN(!0)),document.addEventListener("resume",()=>this.g_alN(!1)),{isSuspended:!!(document.hidden||f)}}g_awv(){window.addEventListener("focus",()=>this.g_ayD("window-focus")),window.addEventListener("blur",()=>{this.g_ayD("window-blur",{parentHasFocus:b()}),this.g_ayz=0}),window.addEventListener("fullscreenchange",()=>this.g_aiX()),window.addEventListener("webkitfullscreenchange",()=>this.g_aiX()),window.addEventListener("mozfullscreenchange",()=>this.g_aiX()),window.addEventListener("fullscreenerror",b=>this.g_aiY(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aiY(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aiY(b)),window.addEventListener("keydown",b=>this.g_ayE("keydown",b)),window.addEventListener("keyup",b=>this.g_ayE("keyup",b)),window.addEventListener("dblclick",b=>this.g_ayF("dblclick",b,e)),window.addEventListener("wheel",b=>this.g_ayG("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_ayH("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_ayH("pointermove",b)),window.addEventListener("mouseup",b=>this.g_ayH("pointerup",b)),window.addEventListener("touchstart",b=>this.g_ayI("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_ayI("pointermove",b)),window.addEventListener("touchend",b=>this.g_ayI("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_ayI("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_ayJ("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_ayJ("pointermove",b)),window.addEventListener("pointerup",b=>this.g_ayJ("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_ayJ("pointercancel",b))),window.addEventListener("mousedown",b=>this.g_ayF("mousedown",b,d)),window.addEventListener("mousemove",b=>this.g_ayF("mousemove",b,d)),window.addEventListener("mouseup",b=>this.g_ayF("mouseup",b,d));const c=()=>this.g_ayb();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_ayx(){this.g_aym||(this.g_aym=!0,window.addEventListener("deviceorientation",b=>this.g_atL(b)))}g_ayy(){this.g_ayn||(this.g_ayn=!0,window.addEventListener("devicemotion",b=>this.g_atM(b)))}g_ayD(c,a){this.g_aww(c,a||null,{dispatchRuntimeEvent:!0})}g_aiW(){const c=window.innerWidth,a=window.innerHeight;this.g_ayD("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_alR.g_amg()&&(-1!==this.g_ayk&&clearTimeout(this.g_ayk),this.g_ayK(c,a,0))}g_ayL(d,a,b){-1!==this.g_ayk&&clearTimeout(this.g_ayk),this.g_ayk=setTimeout(()=>this.g_ayK(d,a,b),48)}g_ayK(f,a,b){const c=window.innerWidth,d=window.innerHeight;this.g_ayk=-1,c!=f||d!=a?this.g_ayD("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_ayL(c,d,b+1)}g_ays(b){this.g_ayl=b.targetOrientation}g_ayM(){const c=this.g_ayl;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aiX(){const b=g_axa.g_ajh();b&&"any"!==this.g_ayl&&this.g_ayM(),this.g_aww("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aiY(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aww("fullscreenerror",{isFullscreen:g_axa.g_ajh(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_alN(b){b?this.g_alR.g_axt():this.g_alR.g_ax_(),this.g_aww("visibilitychange",{hidden:b})}g_ayE(c,a){this.g_awA(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},e)}g_ayG(c,a){this.g_aww(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},e)}g_ayF(a,b,c){k(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_awA(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_ayH(a,f){if(!k(f)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_ayz;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==f.buttons&&(a="pointermove"),this.g_awA(a,{pointerId:1,pointerType:"mouse",button:f.button,buttons:f.buttons,lastButtons:b,clientX:f.clientX,clientY:f.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:f.timeStamp},e),this.g_ayz=f.buttons}}g_ayJ(d,a){"pointerdown"===d&&window!==window.top&&window.focus();let b=0;"mouse"===a.pointerType&&(b=this.g_ayz),this.g_awA(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},e),"mouse"===a.pointerType&&(this.g_ayz=a.buttons)}g_ayI(f,a){"pointerdown"===f&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_awA(f,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},e)}}g_atL(b){this.g_ayD("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp})}g_atM(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_ayD("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp})}g_ayp(d){const a=this.g_awG(),b=a.g_axu();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_axC(),this.g_ayj&&(b.style.display="",this.g_ayj=!1)}g_ayq(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_ayr(c){const a=c.blob,b=c.width,d=c.height,e=await l(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_ayb(){const c=[...this.g_ayA];if(this.g_ayA.clear(),!this.g_ayC)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_ayB.has(d)||this.g_ayA.add(d)})}}g_ax$(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_ayB.delete(c);let a;try{a=c.play()}catch(a){return void this.g_ayA.add(c)}a&&a.catch(()=>{this.g_ayB.has(c)||this.g_ayA.add(c)})}g_aya(b){this.g_ayA.delete(b),this.g_ayB.add(b)}g_ayc(b){this.g_ayC=!!b}g_ayw(d){const a=d.show;if(!a)return void(this.g_ayo&&(this.g_ayo.style.display="none"));this.g_ayo||(this.g_ayo=document.createElement("div"),this.g_ayo.id="inspectOutline",document.body.appendChild(this.g_ayo));const b=this.g_ayo;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_ayt(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_ayu(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_QP(c,a){return this.g_awy("js-invoke-function",{name:c,params:a})}};g_axa.g_axY(g)}{const c=document.currentScript.src;self.g_axB=class{constructor(a){this.g_ayN=a,this.g_ajX=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fg(),this.g_anV=Math.min(navigator.hardwareConcurrency||2,16),this.g_ayO=null,this.g_ayP=[],this.g_anT=null,this.g_ayQ=null}async g_ae_(){if(this.g_ayR)throw new Error("already initialised");this.g_ayR=!0;const c=this.g_ayN.g_axG("dispatchworker.js");this.g_ayO=await this.g_ayN.g_axH(c,this.g_ajX,{name:"DispatchWorker"});const a=new MessageChannel;this.g_anT=a.port1,this.g_ayO.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_ayQ=await this.g_axT()}async g_axT(){const f=this.g_ayP.length,a=this.g_ayN.g_axG("jobworker.js"),b=await this.g_ayN.g_axH(a,this.g_ajX,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_ayO.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_ayP.push(b),d.port1}g_axL(){return{inputPort:this.g_anT,outputPort:this.g_ayQ,maxNumWorkers:this.g_anV}}g_axP(){return[this.g_anT,this.g_ayQ]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_axa({g_axc:!1,g_axM:"workermain.js",g_axx:["scripts/c3runtime.js"],g_axf:"scripts/",g_axN:[],g_axo:"html5"})}