"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[4671],{34547:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},s=[],l=a(47389);const r={components:{BAvatar:l.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=r;var i=a(1001),d=(0,i.Z)(o,n,s,!1,null,"22d964ca",null);const u=d.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},s=[],l=a(67347);const r={components:{BLink:l.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=r;var i=a(1001),d=(0,i.Z)(o,n,s,!1,null,null,null);const u=d.exports},14671:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var n=function(){var t=this,e=t._self._c;return e("b-card",[t.callResponse.data.total?e("list-entry",{attrs:{title:"Total",data:t.callResponse.data.total.toFixed(0)}}):t._e(),t.callResponse.data.stable?e("list-entry",{attrs:{title:"Stable",data:t.callResponse.data.stable.toFixed(0)}}):t._e(),t.callResponse.data["basic-enabled"]||t.callResponse.data["cumulus-enabled"]?e("list-entry",{attrs:{title:"Cumulus Tier",data:(t.callResponse.data["basic-enabled"]||t.callResponse.data["cumulus-enabled"]).toFixed(0)}}):t._e(),t.callResponse.data["super-enabled"]||t.callResponse.data["nimbus-enabled"]?e("list-entry",{attrs:{title:"Nimbus Tier",data:(t.callResponse.data["super-enabled"]||t.callResponse.data["nimbus-enabled"]).toFixed(0)}}):t._e(),t.callResponse.data["bamf-enabled"]||t.callResponse.data["stratus-enabled"]?e("list-entry",{attrs:{title:"Stratus Tier",data:(t.callResponse.data["bamf-enabled"]||t.callResponse.data["stratus-enabled"]).toFixed(0)}}):t._e(),t.callResponse.data.ipv4>=0?e("list-entry",{attrs:{title:"IPv4",data:t.callResponse.data.ipv4.toFixed(0)}}):t._e(),t.callResponse.data.ipv6>=0?e("list-entry",{attrs:{title:"IPv6",data:t.callResponse.data.ipv6.toFixed(0)}}):t._e(),t.callResponse.data.onion>=0?e("list-entry",{attrs:{title:"Tor",data:t.callResponse.data.onion.toFixed(0)}}):t._e()],1)},s=[],l=a(86855),r=a(34547),o=a(27616),i=a(51748);const d={components:{ListEntry:i.Z,BCard:l._,ToastificationContent:r.Z},data(){return{callResponse:{status:"",data:""}}},mounted(){this.daemonGetFluxNodeCount()},methods:{async daemonGetFluxNodeCount(){const t=await o.Z.getFluxNodeCount();"error"===t.data.status?this.$toast({component:r.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=t.data.status,this.callResponse.data=t.data.data,console.log(t.data))}}},u=d;var c=a(1001),m=(0,c.Z)(u,n,s,!1,null,null,null);const g=m.exports},27616:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(80914);const s={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);