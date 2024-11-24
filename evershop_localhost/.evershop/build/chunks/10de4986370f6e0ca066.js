/*! For license information please see 10de4986370f6e0ca066.js.LICENSE.txt */
"use strict";(self.webpackChunkevershop_localhost=self.webpackChunkevershop_localhost||[]).push([[9149],{99149:(e,t,r)=>{r.d(t,{default:()=>s}),function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}}();class s{constructor({data:e,config:t,api:r,readOnly:s}){this.api=r,this.readOnly=s,this._settings=t,this._data=this.normalizeData(e),this._element=this.getTag()}get _CSS(){return{block:this.api.styles.block,wrapper:"ce-header"}}isHeaderData(e){return void 0!==e.text}normalizeData(e){const t={text:"",level:this.defaultLevel.number};return this.isHeaderData(e)&&(t.text=e.text||"",void 0!==e.level&&!isNaN(parseInt(e.level.toString()))&&(t.level=parseInt(e.level.toString()))),t}render(){return this._element}renderSettings(){return this.levels.map((e=>({icon:e.svg,label:this.api.i18n.t(`Heading ${e.number}`),onActivate:()=>this.setLevel(e.number),closeOnActivate:!0,isActive:this.currentLevel.number===e.number,render:()=>document.createElement("div")})))}setLevel(e){this.data={level:e,text:this.data.text}}merge(e){this._element.insertAdjacentHTML("beforeend",e.text)}validate(e){return""!==e.text.trim()}save(e){return{text:e.innerHTML,level:this.currentLevel.number}}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{level:!1,text:{}}}static get isReadOnlySupported(){return!0}get data(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data}set data(e){if(this._data=this.normalizeData(e),void 0!==e.level&&this._element.parentNode){const e=this.getTag();e.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(e,this._element),this._element=e}void 0!==e.text&&(this._element.innerHTML=this._data.text||"")}getTag(){const e=document.createElement(this.currentLevel.tag);return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper),e.contentEditable=this.readOnly?"false":"true",e.dataset.placeholder=this.api.i18n.t(this._settings.placeholder||""),e}get currentLevel(){let e=this.levels.find((e=>e.number===this._data.level));return e||(e=this.defaultLevel),e}get defaultLevel(){if(this._settings.defaultLevel){const e=this.levels.find((e=>e.number===this._settings.defaultLevel));if(e)return e;console.warn("(\u0e07'\u0300-'\u0301)\u0e07 Heading Tool: the default level specified was not found in available levels")}return this.levels[1]}get levels(){const e=[{number:1,tag:"H1",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>'},{number:2,tag:"H2",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>'},{number:3,tag:"H3",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>'},{number:4,tag:"H4",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>'},{number:5,tag:"H5",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>'},{number:6,tag:"H6",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>'}];return this._settings.levels?e.filter((e=>this._settings.levels.includes(e.number))):e}onPaste(e){const t=e.detail;if("data"in t){const e=t.data;let r=this.defaultLevel.number;switch(e.tagName){case"H1":r=1;break;case"H2":r=2;break;case"H3":r=3;break;case"H4":r=4;break;case"H5":r=5;break;case"H6":r=6}this._settings.levels&&(r=this._settings.levels.reduce(((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e))),this.data={level:r,text:e.innerHTML}}}static get pasteConfig(){return{tags:["H1","H2","H3","H4","H5","H6"]}}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>',title:"Heading"}}}}}]);