"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[8390],{51748:(e,t,a)=>{a.d(t,{Z:()=>u});var n=function(){var e=this,t=e._self._c;return t("dl",{staticClass:"row",class:e.classes},[t("dt",{staticClass:"col-sm-3"},[e._v(" "+e._s(e.title)+" ")]),e.href.length>0?t("dd",{staticClass:"col-sm-9 mb-0",class:`text-${e.variant}`},[e.href.length>0?t("b-link",{attrs:{href:e.href,target:"_blank",rel:"noopener noreferrer"}},[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")]):e._e()],1):e.click?t("dd",{staticClass:"col-sm-9 mb-0",class:`text-${e.variant}`,on:{click:function(t){return e.$emit("click")}}},[t("b-link",[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")])],1):t("dd",{staticClass:"col-sm-9 mb-0",class:`text-${e.variant}`},[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")])])},r=[],s=a(67347);const l={components:{BLink:s.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=l;var d=a(1001),i=(0,d.Z)(o,n,r,!1,null,null,null);const u=i.exports},81403:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=function(){var e=this,t=e._self._c;return t("b-card",{attrs:{title:"Current FluxNode winners that will be paid in the next Flux block"}},[t("app-collapse",e._l(e.callResponse.data,(function(a,n){return t("app-collapse-item",{key:n,attrs:{title:e.toPascalCase(n)}},[t("list-entry",{attrs:{title:"Address",data:e.callResponse.data[n].payment_address}}),t("list-entry",{attrs:{title:"IP Address",data:e.callResponse.data[n].ip}}),t("list-entry",{attrs:{title:"Added Height",number:e.callResponse.data[n].added_height}}),t("list-entry",{attrs:{title:"Collateral",data:e.callResponse.data[n].collateral}}),t("list-entry",{attrs:{title:"Last Paid Height",number:e.callResponse.data[n].last_paid_height}}),t("list-entry",{attrs:{title:"Confirmed Height",number:e.callResponse.data[n].confirmed_height}}),t("list-entry",{attrs:{title:"Last Confirmed Height",number:e.callResponse.data[n].last_confirmed_height}})],1)})),1)],1)},r=[],s=a(86855),l=a(34547),o=a(57796),d=a(22049),i=a(51748),u=a(27616);const c={components:{BCard:s._,ListEntry:i.Z,AppCollapse:o.Z,AppCollapseItem:d.Z,ToastificationContent:l.Z},data(){return{callResponse:{status:"",data:""}}},mounted(){this.daemonFluxCurrentWinner()},methods:{async daemonFluxCurrentWinner(){const e=await u.Z.fluxCurrentWinner();"error"===e.data.status?this.$toast({component:l.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=e.data.status,this.callResponse.data=e.data.data,console.log(e))},toPascalCase(e){const t=e.split(/\s|_/);let a,n;for(a=0,n=t.length;a<n;a+=1)t[a]=t[a].slice(0,1).toUpperCase()+(t[a].length>1?t[a].slice(1).toLowerCase():"");return t.join(" ")}}},g=c;var m=a(1001),h=(0,m.Z)(g,n,r,!1,null,null,null);const p=h.exports},27616:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(e){return(0,n.Z)().get(`/daemon/help/${e}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(e,t){return(0,n.Z)().get(`/daemon/getrawtransaction/${e}/${t}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(e){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark(e){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(e,t){return(0,n.Z)().get(`/daemon/validateaddress/${t}`,{headers:{zelidauth:e}})},getWalletInfo(e){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listFluxNodeConf(e){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start(e){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:e}})},restart(e){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon(e){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon(e,t){return(0,n.Z)().get(`/daemon/rescanblockchain/${t}`,{headers:{zelidauth:e}})},getBlock(e,t){return(0,n.Z)().get(`/daemon/getblock/${e}/${t}`)},tailDaemonDebug(e){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);