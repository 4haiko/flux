"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[5528],{34547:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],s=a(47389);const o={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},l=o;var i=a(1001),d=(0,i.Z)(l,n,r,!1,null,"22d964ca",null);const u=d.exports},95528:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var n=function(){var t=this,e=t._self._c;return e("b-overlay",{attrs:{show:!t.callResponse.data,variant:"transparent",blur:"5px"}},[e("b-card",[t.callResponse.data?t._e():e("b-card-title",[t._v(" Loading... ")]),t.callResponse.data?e("b-form-textarea",{attrs:{plaintext:"","no-resize":"",rows:"11",value:t.callResponse.data}}):t._e()],1)],1)},r=[],s=a(86855),o=a(49379),l=a(333),i=a(66126),d=a(34547),u=a(27616);const c={components:{BCard:s._,BCardTitle:o._,BFormTextarea:l.y,BOverlay:i.X,ToastificationContent:d.Z},data(){return{callResponse:{status:"",data:""}}},mounted(){this.daemonGetWalletInfo()},methods:{async daemonGetWalletInfo(){const t=localStorage.getItem("zelidauth"),e=await u.Z.getWalletInfo(t);"error"===e.data.status?this.$toast({component:d.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=e.data.status,this.callResponse.data=JSON.stringify(e.data.data,null,4))}}},g=c;var m=a(1001),h=(0,m.Z)(g,n,r,!1,null,null,null);const f=h.exports},27616:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);