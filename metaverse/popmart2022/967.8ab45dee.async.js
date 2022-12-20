"use strict";(self.webpackChunkljzw_virtualland=self.webpackChunkljzw_virtualland||[]).push([[967],{15928:function(M,e,t){var i=t(9189),s=t.n(i),x=t(58482),g=t.n(x),u=t(78349),j=function(){function M(){s()(this,M),localStorage.getItem("GPU_LEVEL")?this._level=localStorage.getItem("GPU_LEVEL"):(this.gpu=(0,u.O_)(),this._level="low",(0,u.tq)()?this.detectMobile():this.detectPC())}return g()(M,[{key:"detectMobile",value:function(){(0,u.gn)()?this._level=window.screen.height>=812&&window.devicePixelRatio>=2?"high":"low":(0,u.Dt)()&&(/adreno/i.test(this.gpu)?this._level=this.adrenoGPU():/mali/i.test(this.gpu)?this._level=this.maliGPU():/powervr/i.test(this.gpu)&&(this._level=this.powerVRGPU()))}},{key:"adrenoGPU",value:function(){var M=this.gpu.split(" "),e=parseInt(M[M.length-1]);return e>640?"high":e>=570?"middle":"low"}},{key:"maliGPU",value:function(){if(/mali-g/i.test(this.gpu)){var M=this.gpu.split("Mali-G"),e=parseInt(M[M.length-1]);return e>77?"high":76===e||31===e||52===e?"middle":"low"}return"low"}},{key:"powerVRGPU",value:function(){return/GT8/i.test(this.gpu)?"high":"low"}},{key:"detectPC",value:function(){/apple m/i.test(this.gpu)?this._level="high":/apple/i.test(this.gpu)?this._level="middle":/nvidia/i.test(this.gpu)?this._level=this.nvidiaGPU():/amd/i.test(this.gpu)?this._level=this.amdGPU():/intel/i.test(this.gpu)&&(this._level=this.intelGPU())}},{key:"nvidiaGPU",value:function(){return/(rtx|titan)/i.test(this.gpu)?"high":/gtx/i.test(this.gpu)?"middle":"low"}},{key:"amdGPU",value:function(){if(/(pro|radeon vii)/i.test(this.gpu))return"high";if(/(rx)/i.test(this.gpu)){var M=this.gpu.split("RX ");return parseInt(M[M.length-1])>560?"high":"middle"}return"middle"}},{key:"intelGPU",value:function(){if(/iris/i.test(this.gpu)){if(/opengl engine/i.test(this.gpu))return"middle";var M=this.gpu.split("Graphics ");return parseInt(M[1])>=650?"middle":"low"}if(/HD/i.test(this.gpu)){var e=this.gpu.split("HD ");return parseInt(e[1])>7e3?"middle":"low"}return/apple/i.test(this.gpu)?"middle":"low"}},{key:"level",get:function(){return this._level}}]),M}();e.Z=new j},74967:function(M,e,t){t.r(e),t.d(e,{default:function(){return L}});var i=t(46686),s=t.n(i),x=t(59082),g=t(5763),u=t(15928),j=t(93236);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var A=t(62086),I={low:1,middle:2,high:3},N=function(){var M=(0,j.useState)(3),e=s()(M,2),i=e[0],N=e[1],l=(0,x.useIntl)();(0,j.useLayoutEffect)((function(){return D(u.Z.level),u.Z.level&&N(I[u.Z.level]),function(){}}),[]);var D=function(M){M!==u.Z.level&&(localStorage.setItem("GPU_LEVEL",M||""),(0,g.R)("5_1",M||""),window.location.reload())};return(0,A.jsxs)("div",{className:"w-full flex justify-between",children:[(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)("img",{draggable:!1,className:"sm:w-[16px] sm:h-[16px] xl:w-[20px]",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTExLjYzMyAxNC4zMzJhLjMzMy4zMzMgMCAwIDEtLjMzNC0uMzI3bC0uMDEtLjY4NmEuMzMuMzMgMCAwIDEgLjMzNC0uMzI3aDguMDQ2YS4zMzEuMzMxIDAgMCAxIC4zMzQuMzI4di42ODZhLjMyOS4zMjkgMCAwIDEtLjMzMS4zMjdoLTguMDM2Wm0tLjAxNiAzLjAwNWEuMzMzLjMzMyAwIDAgMS0uMzM0LS4zMjdsLjAwNy0uNjg1YS4zMy4zMyAwIDAgMSAuMzMzLS4zMjVoOC4wNDZhLjMzMS4zMzEgMCAwIDEgLjMzMS4zMjdsLS4wMDcuNjgzYS4zMzMuMzMzIDAgMCAxLS4zMzEuMzI5aC04LjA0NVpNMTEuNjI0IDIwYS4zMzMuMzMzIDAgMCAxLS4zMzQtLjMyN1YxOWEuMzMuMzMgMCAwIDEgLjMzNC0uMzI3aDguMDQ2YS4zMzEuMzMxIDAgMCAxIC4zMzMuMzI3di42NzNhLjMzNS4zMzUgMCAwIDEtLjMzMS4zMjlabS0xLjc4NS01LjgxOUE0LjE4NCA0LjE4NCAwIDEgMSAxNC4wOSAxMGE0LjExOSA0LjExOSAwIDAgMS0uMjU0IDEuNDI5aC0xLjYzM0EyLjY3NSAyLjY3NSAwIDAgMCAxMi42MTcgMTBhMi43NzggMi43NzggMCAxIDAtMi43NzggMi43M3YxLjQ1MVpNMTAuMDAzIDE5di42NzNhLjMyLjMyIDAgMCAxLS4zMzkuMzI3SDguMDAzYy0uNjYuMDA3LS45NjYtLjY3My0xLTEuMzMxbC0uMzQtMS4zMzNhOC4xNyA4LjE3IDAgMCAxLTEuNzEtLjkzN2wtMS4zODguNTU5YTEuMjU2IDEuMjU2IDAgMCAxLTEuNjQ5LS40NzdsLTEuNzQ4LTIuOTZhMS4yMTMgMS4yMTMgMCAwIDEgLjQtMS42NDVsMS4xOS0uOTA3YTcuMjUyIDcuMjUyIDAgMCAxIDAtMS45NDJMLjU3NCA4LjEyMWExLjIxMSAxLjIxMSAwIDAgMS0uNDA2LTEuNjM3bDEuNzM1LTIuOTYzYTEuMjU3IDEuMjU3IDAgMCAxIDEuNjQ3LS40NzlsMS4zOTQuNTU4YTggOCAwIDAgMSAxLjcxLS45NjdsLjItMS40NjVBMS4yMzEgMS4yMzEgMCAwIDEgOC4xMDMgMGgzLjQ3NWExLjIzMiAxLjIzMiAwIDAgMSAxLjI0MyAxLjE2NmwuMiAxLjQ2OGE4LjE4NCA4LjE4NCAwIDAgMSAxLjcxMi45NjZsMS4zOTEtLjU1NmExLjI2IDEuMjYgMCAwIDEgMS42NDcuNDc2bDEuNzMyIDIuOTYxYTEuMjEzIDEuMjEzIDAgMCAxLS40IDEuNjQ1cS0uNTM4LjQ1Ny0xLjEuODggMCAuNjQzLjAyNCAyLjMzNGgtMS42OTZsLS4wMTktMi45MjcgMS44MTQtMS4zODEtMS41NS0yLjY0Ni0yLjEuODg4LS4zNDMtLjI4OGE2LjYgNi42IDAgMCAwLTIuMDM2LTEuMTUxbC0uNDE4LS4xNS0uMzA5LTIuMjM0SDguMzAzbC0uMzEgMi4yMzQtLjQxOC4xNWE2LjcgNi43IDAgMCAwLTIuMDM2IDEuMTU0bC0uMzQxLjI4My0yLjExNi0uODUxLTEuNTMzIDIuNjA2IDEuODEzIDEuMzgxLS4wOC40MzNhNi4zNjMgNi4zNjMgMCAwIDAtLjExMSAxLjE1MyA2LjYxNyA2LjYxNyAwIDAgMCAuMTA5IDEuMTU2bC4wNzguNDMzLTEuODEyIDEuMzgyIDEuNTU3IDIuNjQ1IDEuOTA4LS45MzQgMi45OTIgMS42NTkuMzM2IDIuMzMxaDEuMzNjLjAzNC4wMDQuMzM0LjE2Ni4zMzQuMzM0WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="}),(0,A.jsx)("span",{className:"sm:text-13 xl:text-16 font-OPPO-M text-white ml-[12px]",children:l.formatMessage({id:"setting.performance_set"})})]}),(0,A.jsx)("span",{className:"sm:text-12 xl:text-14 font-OPPO-R mt-[8px]  text-[rgba(255,255,255,0.62)] whitespace-pre-wrap text-left",children:l.formatMessage({id:"setting.performance_set.content"})})]}),(0,A.jsxs)("div",{className:"flex",children:[(0,A.jsx)("div",{className:"".concat(1===i?"bg-[rgba(255,255,255,0.6)]":"bg-[rgba(127,127,127,0.2)]"," xl:hover:bg-[rgba(255,255,255,0.6)] group sm:w-[58px] sm:h-[58px] xl:w-[70px] xl:h-[70px] xl:min-w-[49px] xl:min-h-[49px] xl:cursor-pointer\n          rounded-[10px]  flex-row-center-center sm:mr-[12px] xl:mr-[12px]"),onClick:function(){return D("low")},children:(0,A.jsxs)("div",{className:"flex-column-center-center sxl:scale-[0.8]",children:[(0,A.jsx)("img",{draggable:!1,className:"w-[50%] ".concat(1===i?"":"brightness-[.5]"," xl:group-hover:brightness-100"),src:t(48603)}),(0,A.jsx)("span",{className:"sm:text-10 xl:text-12 mt-[2px] relative top-[3px] ".concat(1===i?"text-white":"text-[#fff]/40"," xl:group-hover:text-white"),children:l.formatMessage({id:"setting.performance_set.low"})})]})}),(0,A.jsx)("div",{className:"".concat(2===i?"bg-[rgba(255,255,255,0.6)]":"bg-[rgba(127,127,127,0.2)]"," xl:hover:bg-[rgba(255,255,255,0.6)] group sm:w-[58px] sm:h-[58px] xl:w-[70px] xl:h-[70px] xl:min-w-[49px] xl:min-h-[49px] rounded-[10px]  xl:cursor-pointer\n           flex-row-center-center sm:mr-[12px] xl:mr-[12px]"),onClick:function(){return D("middle")},children:(0,A.jsxs)("div",{className:"flex-column-center-center sxl:scale-[0.8]",children:[(0,A.jsx)("img",{draggable:!1,className:"w-[50%] ".concat(2===i?"":"brightness-[.5]"," xl:group-hover:brightness-100"),src:t(32524)}),(0,A.jsx)("span",{className:"sm:text-10 xl:text-12 mt-[2px] relative top-[3px] ".concat(2===i?"text-white":"text-[#fff]/40"," xl:group-hover:text-white"),children:l.formatMessage({id:"setting.performance_set.middle"})})]})}),(0,A.jsx)("div",{className:"".concat(3===i?"bg-[rgba(255,255,255,0.6)]":"bg-[rgba(127,127,127,0.2)]"," xl:hover:bg-[rgba(255,255,255,0.6)] group sm:w-[58px] sm:h-[58px] xl:w-[70px] xl:h-[70px] xl:min-w-[49px] xl:min-h-[49px] rounded-[10px]  xl:cursor-pointer\n            flex-row-center-center "),onClick:function(){return D("high")},children:(0,A.jsxs)("div",{className:"flex-column-center-center sxl:scale-[0.8]",children:[(0,A.jsx)("img",{draggable:!1,className:"w-[50%] ".concat(3===i?"":"brightness-[.5]"," xl:group-hover:brightness-100"),src:t(25251)}),(0,A.jsx)("span",{className:"sm:text-10 xl:text-12 mt-[2px] relative top-[3px] ".concat(3===i?"text-white":"text-[#fff]/40"," xl:group-hover:text-white"),children:l.formatMessage({id:"setting.performance_set.high"})})]})})]})]})},l=t(32446),D=t(93435);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var c={1:"firstPerson",3:"thridPerson"},r=function(){var M=(0,x.useModel)("setting"),e=M.viewIndex,i=M.setViewIndex,s=(0,x.useIntl)(),u=function(M){M!==e&&(i(M),(0,g.R)("5_2",M.toString()),D.Z.emit(l.Z.R2T_CHANGE_VIEW,c[M]))};return(0,A.jsxs)("div",{className:"flex w-full sm:h-[87px] xl:h-[110px] items-center  justify-between border-t-[1px] border-b-[1px] border-[rgba(255,255,255,0.3)] sm:mt-[15px] sm:mb-[20px] xl:mt-[20px] xl:mb-[30px] ",children:[(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)("img",{draggable:!1,className:"sm:w-[16px] sm:h-[16px] xl:w-[20px]",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi44ODMiIGhlaWdodD0iMTcuNjU2Ij48cGF0aCBkPSJNMTYuNDQ3IDkuMzY2YTMuNjEzIDMuNjEzIDAgMCAxIC4yMzYgMS4yNzljMCAyLjg3My0zLjQxMyA1LjExMS03LjY2MSA1LjNsLjU0MS41NGEuNTQ5LjU0OSAwIDAgMSAuMDM4LjczNmwtLjAzOC4wNDJhLjU0OS41NDkgMCAwIDEtLjczNi4wMzhsLS4wNDItLjAzOC0xLjQ2NS0xLjQ2N2EuNTQ5LjU0OSAwIDAgMS0uMDM4LS43MzZsLjAzOC0uMDQyIDEuNDY2LTEuNDY0YS41NS41NSAwIDAgMSAuODE1LjczNmwtLjAzOC4wNDItLjUxMi41MTJjMy42OTItLjE4NyA2LjUzMy0yLjA1NyA2LjUzMy00LjJhMi41MTYgMi41MTYgMCAwIDAtLjE2Ni0uODkyLjU1LjU1IDAgMSAxIDEuMDI4LS4zODhaTTEuMTU0IDkuMDI5YS41NDkuNTQ5IDAgMCAxIC4zMTYuNzEgMi41MTggMi41MTggMCAwIDAtLjE3MS45MDdjMCAxLjU3MyAxLjU1NCAzLjA2MSA0LjAxNSAzLjc4MWEuNTUuNTUgMCAxIDEtLjMwOCAxLjA1NUMyLjEyNyAxNC42MzguMiAxMi43OTQuMiAxMC42NDVhMy42MTEgMy42MTEgMCAwIDEgLjI0NC0xLjMuNTQ5LjU0OSAwIDAgMSAuNzEtLjMxNlpNOC4yOTIuMjY5YS41NDkuNTQ5IDAgMCAxIC41MjUuMDA5bDUuMTc2IDIuOTNhLjU1MS41NTEgMCAwIDEgLjEyMS4wOTJsLjAxMi4wMTRhLjQ2Ni40NjYgMCAwIDEgLjA0Ni4wNTdsLjAwNy4wMS4wMTIuMDE5LjAwOS4wMTZ2LjAwOGwuMDE0LjAyNy0uMDE0LS4wMzZhLjU1NS41NTUgMCAwIDEgLjA0Ny4xMDh2LjAxMmMwIC4wMTMuMDA3LjAyNi4wMDkuMDM4di4wMTFhLjQ3Ny40NzcgMCAwIDEgLjAwOS4xdi0uMDUxIDUuOTEyYS41NDkuNTQ5IDAgMCAxLS4yNzkuNDc4bC01LjE2OCAyLjkzMWEuNTQ5LjU0OSAwIDAgMS0uNTI1LjAwOWwtNS42LTIuOTNhLjU0OS41NDkgMCAwIDEtLjI5NC0uNDg3di01Ljg2YS41NS41NSAwIDAgMSAuMjk1LS40ODdabS00LjggNC4yNzR2NC42NzFsNC41IDIuMzU2VjYuOTQ1bC00LjUtMi40Wm05LjY3Ny4wODZMOS4xIDYuOTM2djQuNmw0LjA3Ni0yLjMwOHYtNC42Wk04LjUzMyAxLjM4MSA0LjE3NCAzLjY2MiA4LjUzNSA1Ljk5bDQuMDY4LTIuM1oiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNCIvPjwvc3ZnPg=="}),(0,A.jsx)("span",{className:"sm:text-13 xl:text-16 font-OPPO-M text-white ml-[12px]",children:s.formatMessage({id:"setting.view_select"})})]}),(0,A.jsxs)("div",{className:"flex",children:[(0,A.jsx)("div",{className:"".concat(1===e?"bg-[rgba(255,255,255,0.6)]":"bg-[rgba(127,127,127,0.2)]"," xl:hover:bg-[rgba(255,255,255,0.6)] sm:w-[58px] sm:h-[58px] xl:w-[70px] xl:h-[70px] xl:min-w-[49px] xl:min-h-[49px] rounded-[10px]  xl:cursor-pointer group\n           flex-row-center-center sm:mr-[12px] xl:mr-[12px]"),onClick:function(){return u(1)},children:(0,A.jsxs)("div",{className:"flex-column-between-center sxl:scale-[0.8]",children:[(0,A.jsx)("img",{draggable:!1,className:"w-[50%] ".concat(1===e?"":"brightness-[.5]"," xl:group-hover:brightness-100"),src:t(17207)}),(0,A.jsx)("span",{className:"sm:text-10 xl:text-12 mt-[2px] relative top-[3px] ".concat(1===e?"text-white":"text-[#fff]/40"," xl:group-hover:text-white"),children:s.formatMessage({id:"setting.view_select.first"})})]})}),(0,A.jsx)("div",{className:"sm:w-[58px] sm:h-[58px] xl:w-[70px] xl:h-[70px] xl:min-w-[49px] xl:min-h-[49px] rounded-[10px]  xl:cursor-pointer xl:hover:bg-[rgba(255,255,255,0.6)] group\n          ".concat(3===e?"bg-[rgba(255,255,255,0.6)]":"bg-[rgba(127,127,127,0.2)]"," flex-row-center-center sm:mr-[12px] xl:mr-[12px]"),onClick:function(){return u(3)},children:(0,A.jsxs)("div",{className:"flex-column-between-center sxl:scale-[0.8]",children:[(0,A.jsx)("img",{draggable:!1,className:"w-[50%] ".concat(3===e?"":"brightness-[.5]"," xl:group-hover:brightness-100"),src:t(98489)}),(0,A.jsx)("span",{className:"sm:text-10 xl:text-12 mt-[2px] relative top-[3px] ".concat(3===e?"text-white":"text-[#fff]/40"," xl:group-hover:text-white"),children:s.formatMessage({id:"setting.view_select.third"})})]})}),(0,A.jsx)("div",{className:"sm:w-[58px] sm:h-[58px] xl:w-[70px] xl:h-[70px] xl:min-w-[49px] xl:min-h-[49px]"})]})]})};Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var n=t(99106),a=function(){var M=(0,x.useIntl)(),e=(0,x.useModel)("setting"),i=e.isImmer,u=e.setIsImmer,I=(0,j.useState)(!1),N=s()(I,2),c=N[0],r=N[1],a=(0,j.useState)(!1),L=s()(a,2),w=L[0],o=L[1];(0,j.useLayoutEffect)((function(){localStorage.getItem("bac_music")||localStorage.setItem("bac_music","true")}),[]);return(0,A.jsxs)("div",{className:"flex justify-between w-full",children:[(0,A.jsxs)("div",{className:"flex sm:w-[198px] xl:w-[268px] items-center justify-between",children:[(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)("img",{className:"sm:w-[16px] sm:h-[16px] xl:w-[20px]",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS44NzEiIGhlaWdodD0iMjEuODY3Ij48ZyBmaWxsPSIjZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiPjxwYXRoIGQ9Ik0xMC45MzMgMjEuNjE3YTEwLjY4MiAxMC42ODIgMCAwIDEtMTAuNTM2LTguOUExMC43IDEwLjcgMCAwIDEgNS45MDkgMS41MDggMTAuNTQ3IDEwLjU0NyAwIDAgMSA4LjgwNC40NjFhMTAuOTM2IDEwLjkzNiAwIDAgMSAxLjY1OC0uMiAxMS43MyAxMS43MyAwIDAgMSAxLjYzLjA0Ny43MTguNzE4IDAgMCAxIC42NjMuNTU3LjY5My42OTMgMCAwIDEtLjczLjg0NGMtLjQzMi0uMDM1LS44NjEtLjA2LTEuMy0uMDUyYTkuMjE1IDkuMjE1IDAgMCAwLTUuODY4IDIuMjYgOS4yMiA5LjIyIDAgMCAwLTIuOTYyIDQuOSA5LjM0NCA5LjM0NCAwIDAgMCAuNjI2IDYuMDMyIDkuMzg0IDkuMzg0IDAgMCAwIDEuMzU4IDIuMTA5IDkuMTkzIDkuMTkzIDAgMCAwIDIuNDg1IDIuMDQ3IDkuMDI5IDkuMDI5IDAgMCAwIDIuNzQ4IDEuMDIzIDkuOTUzIDkuOTUzIDAgMCAwIDEuNS4xNzEgOS4yODQgOS4yODQgMCAwIDAgOC42NzktNS4yMjcgOC45ODkgOC45ODkgMCAwIDAgLjgzOC0yLjc4NyA5LjE4NiA5LjE4NiAwIDAgMCAuMDg2LTEuMzU2IDkuMyA5LjMgMCAwIDAtLjQ1Ni0yLjc4MS43MDMuNzAzIDAgMSAxIDEuMzMyLS40NTEgMTAuMjYxIDEwLjI2MSAwIDAgMSAuNDE3IDEuNzc3IDEwLjgwOCAxMC44MDggMCAwIDEgLjEwNiAxLjk0MSAxMC41ODYgMTAuNTg2IDAgMCAxLS44ODEgMy44NzcgMTAuNyAxMC43IDAgMCAxLTcuMjggNi4xMjMgMTAuMzUzIDEwLjM1MyAwIDAgMS0xLjcuMjY2IDguOTk2IDguOTk2IDAgMCAxLS44Mi4wMzZaIi8+PHBhdGggZD0iTTcuMDY5IDExLjc3YTQuNDI0IDQuNDI0IDAgMCAxIC44MjctMi41QTUuMjA5IDUuMjA5IDAgMCAxIDkuOTUxIDcuNWE0LjMgNC4zIDAgMCAxIDEuNTUyLS40MjEgMy4xODIgMy4xODIgMCAwIDEgMS45NzMuNDY0Yy4wNi4wMzcuMDY5LjAyNC4wNzMtLjA0MWwuMDkzLTEuNjIxYy4wMy0uNTI1LjA2My0xLjA0OS4wOTMtMS41NzRsLjExLTEuODcyYy4wMTctLjMuMDI2LS41OTQuMDYtLjg4N2EuNjkzLjY5MyAwIDAgMSAuOTQ2LS41NTkgMTAuNzU1IDEwLjc1NSAwIDAgMSAzLjY3IDIuNDE2IDEwLjgzMiAxMC44MzIgMCAwIDEgMS4yNjEgMS41MjkuNy43IDAgMCAxLS40NzMgMS4xMTQuNjc3LjY3NyAwIDAgMS0uNjg5LS4zMjIgOS4xODggOS4xODggMCAwIDAtMS4xOTItMS40MjUgOS4zIDkuMyAwIDAgMC0yLjEtMS41NDJjLS4wODQtLjA0NS0uMDg5LS4wNDUtLjA5NS4wNTJsLS4wNTguOTExcS0uMDM5LjYzNS0uMDc2IDEuMjcyYy0uMDE3LjI4NS0uMDMyLjU3Mi0uMDUuODU3cS0uMDM5LjYzNS0uMDc2IDEuMjcyYy0uMDE3LjI4OS0uMDMyLjU3Ni0uMDUuODY2bC0uMDkxIDEuNTI5Yy0uMDExLjE5NC0uMDMuMzkxLS4wMzIuNTg1YTQuNDA5IDQuNDA5IDAgMCAxLS43MDYgMi4zMTcgNS4yMjkgNS4yMjkgMCAwIDEtMi4wNyAxLjkgNC4yODkgNC4yODkgMCAwIDEtMS42LjQ2OCAzLjIzOSAzLjIzOSAwIDAgMS0xLjY3OC0uMjcgMi43ODIgMi43ODIgMCAwIDEtMS41NS0xLjgyIDMuMTU0IDMuMTU0IDAgMCAxLS4xMzItLjkyOFptNC43MjgtMy4yOTVhMi43OTQgMi43OTQgMCAwIDAtMS4zNjcuMzU2IDMuNzkyIDMuNzkyIDAgMCAwLTEuNTc0IDEuNTU0IDIuNjczIDIuNjczIDAgMCAwLS4zNTYgMS43MDYgMS40NjQgMS40NjQgMCAwIDAgLjU0Ni45NzYgMS42NDMgMS42NDMgMCAwIDAgMS4wMy4zMjggMi43MjYgMi43MjYgMCAwIDAgMS4yNDEtLjMgMy43NzggMy43NzggMCAwIDAgMS43LTEuNjE5IDIuNjc1IDIuNjc1IDAgMCAwIC4zNTQtMS43MDYgMS40NCAxLjQ0IDAgMCAwLS41ODctMSAxLjYwOSAxLjYwOSAwIDAgMC0uOTkxLS4yOTRabS0uOTg5LTUuOTkxYS44MjIuODIyIDAgMCAxIC41MjIuMTIxLjcwOC43MDggMCAwIDEgLjI4Ny43NTYuNy43IDAgMCAxLS42LjUyNWMtLjE5Mi4wMjItLjM4NC4wMTEtLjU3Ni4wMjRhNy4wMzYgNy4wMzYgMCAwIDAtMi4yLjUxOCA2Ljg4OCA2Ljg4OCAwIDAgMC0xLjk2MiAxLjIzMyA3LjA3OCA3LjA3OCAwIDAgMC0uNzc5LjgxLjcuNyAwIDAgMS0uODc3LjIzMS42OTIuNjkyIDAgMCAxLS4yNzYtMS4wMzIgNC43ODEgNC43ODEgMCAwIDEgLjQ3My0uNTUxIDguNDE1IDguNDE1IDAgMCAxIDUuMDA5LTIuNTU4IDkuMzA4IDkuMzA4IDAgMCAxIC45NzktLjA3NlptLjEyMyAxNi45YTIuMDQgMi4wNCAwIDAgMS0uMzI4LS4wMTUuNy43IDAgMCAxIC4xMjUtMS4zODggNy4zNDQgNy4zNDQgMCAwIDAgMi4xNTItLjMzMiA3LjAxNiA3LjAxNiAwIDAgMCAyLjMtMS4yMzkgNy4xNTYgNy4xNTYgMCAwIDAgMS4wMTMtMS4wMTcuNzAzLjcwMyAwIDEgMSAxLjEyLjg1MSA4LjQzMSA4LjQzMSAwIDAgMS02LjM4NCAzLjEzN1oiLz48L2c+PC9zdmc+"}),(0,A.jsx)("span",{className:"sm:text-13 xl:text-16 font-OPPO-M text-white ml-[12px]",children:M.formatMessage({id:"setting.bac_music"})})]}),(0,A.jsx)("div",{className:"switch-button sxl:scale-[0.8]",children:(0,A.jsx)(n.Z,{loading:c,checked:"true"==localStorage.getItem("bac_music"),onChange:function(M){r(!0),M?((0,g.R)("5_3","true"),localStorage.setItem("bac_music","true"),D.Z.emit(l.Z.MAIN_SQUARE_BGM_PLAY)):((0,g.R)("5_3","false"),localStorage.setItem("bac_music","false"),D.Z.emit(l.Z.MAIN_SQUARE_BGM_PAUSE)),setTimeout((function(){r(!1)}),1e3)},checkedChildren:(0,A.jsx)("div",{className:"on-text",children:(0,A.jsx)("img",{src:t(95809)})}),unCheckedChildren:(0,A.jsx)("div",{className:"off-text",children:(0,A.jsx)("img",{src:t(84624)})})})})]}),(0,A.jsxs)("div",{className:"flex sm:w-[198px] xl:w-[238px] items-center justify-between",children:[(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)("img",{className:"sm:w-[16px] sm:h-[16px] xl:w-[20px]",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi43ODEiIGhlaWdodD0iMTYuNzgxIj48cGF0aCBkPSJNMS4yODQgMTEuOTg1djMuM2EuMjE3LjIxNyAwIDAgMCAuMjE2LjIxNmgzLjN2MS4yODRIMS4xMTlBMS4xMjIgMS4xMjIgMCAwIDEgMCAxNS42NjZ2LTMuNjc3Wm0xNS41IDB2My42NzdhMS4xMjIgMS4xMjIgMCAwIDEtMS4xMTkgMS4xMTloLTMuNjc3di0xLjI4NGgzLjI4NmEuMjE3LjIxNyAwIDAgMCAuMjE2LS4yMTZ2LTMuM1pNOC4zOTQgNC4xOXEzLjYzNSAwIDYuNTkzIDQuMmMtMS45NzIgMi43OTMtNC4xNyA0LjItNi41OTMgNC4ycy00LjYyMS0xLjQtNi41OTMtNC4yYzEuOTY4LTIuNzkzIDQuMTY2LTQuMiA2LjU4OS00LjJabTAgMS4yYy0xLjc0NiAwLTMuMzg5LjktNC45NSAyLjgxNGwtLjE1NC4xODUuMTU0LjE4NWE2LjU4MSA2LjU4MSAwIDAgMCA0LjcgMi44bC4yNDYuMDFjMS43NDYgMCAzLjM4OS0uOSA0Ljk1LTIuODE0bC4xNTQtLjE4NS0uMTU0LS4xODVhNi41ODEgNi41ODEgMCAwIDAtNC43LTIuOFptMCAuOWEyLjEgMi4xIDAgMSAxLTIuMSAyLjFBMi4wOTIgMi4wOTIgMCAwIDEgOC4zOSA2LjI5NVptMCAxLjE5MWEuOS45IDAgMSAwIC45LjkuOTA1LjkwNSAwIDAgMC0uOTA0LS44OTRaTTQuNzk2LjAwNHYxLjI4SDEuNTA0YS4yMTcuMjE3IDAgMCAwLS4yMTYuMjE2djMuM0guMDA0VjEuMTE5QTEuMTIyIDEuMTIyIDAgMCAxIDEuMTE5LjAwNFptMTEuOTg1IDEuMTE5VjQuOGgtMS4yOTRWMS41MDRhLjIxNy4yMTcgMCAwIDAtLjIxNi0uMjE2aC0zLjI4NlYuMDA0aDMuNjc3YTEuMTIyIDEuMTIyIDAgMCAxIDEuMTE5IDEuMTE1WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="}),(0,A.jsx)("span",{className:"sm:text-13 xl:text-16 font-OPPO-M text-white ml-[12px]",children:M.formatMessage({id:"setting.immerse_mode"})})]}),(0,A.jsx)("div",{className:"switch-button sxl:scale-[0.8]",children:(0,A.jsx)(n.Z,{loading:w,checked:i,onChange:function(M){o(!0),M?((0,g.R)("5_4","true"),u(!0)):((0,g.R)("5_4","false"),u(!1)),setTimeout((function(){o(!1)}),1e3)},checkedChildren:(0,A.jsx)("div",{className:"on-text",children:(0,A.jsx)("img",{src:t(95809)})}),unCheckedChildren:(0,A.jsx)("div",{className:"off-text",children:(0,A.jsx)("img",{src:t(84624)})})})})]})]})},L=function(M){var e=M.onClose,t=(0,x.useIntl)(),i=(0,x.useModel)("user").setIsNew,u=(0,j.useState)(!1),I=s()(u,2),l=(I[0],I[1],(0,x.useModel)("global")),D=l.setRuleVis,c=l.setRuleType,n=(0,x.useModel)("loading").setShowGuide,L=(0,x.useModel)("venue").inVenue;return(0,A.jsxs)(A.Fragment,{children:[" ",(0,A.jsx)("div",{className:"w-full h-full sm:px-[16%] xl:px-[90px] flex flex-col  justify-center font-OPPO-R relative",children:(0,A.jsxs)("div",{className:"flex flex-col items-center",children:[(0,A.jsx)(N,{}),(0,A.jsx)(r,{}),(0,A.jsx)(a,{}),(0,A.jsxs)("div",{className:"ab-x-center flex sm:bottom-[15px] xl:bottom-[30px] sm:text-12 xl:text-14 text-white ",children:[(0,A.jsx)("div",{className:"border-b-[1px] border-[rgba(255,255,255)] cursor-pointer sm:mr-[30px] xl:mr-[30px]",onClick:function(){e&&e(),i(L?1:0),n(!0),(0,g.R)("5_7")},children:(0,A.jsx)("span",{children:t.formatMessage({id:"setting.new_guide"})})}),(0,A.jsx)("div",{className:"border-b-[1px] border-[rgba(255,255,255)] cursor-pointer",onClick:function(){D(!0),c("privacy"),(0,g.R)("5_8")},children:(0,A.jsx)("span",{children:t.formatMessage({id:"setting.privacy"})})})]})]})})]})}},84624:function(M,e,t){M.exports=t.p+"static/off_text.baf1b287.png"},95809:function(M,e,t){M.exports=t.p+"static/on_text.d0859b27.png"},25251:function(M,e,t){M.exports=t.p+"static/option_high.4f4b2ec1.png"},48603:function(M,e,t){M.exports=t.p+"static/option_low.f487e9a5.png"},32524:function(M,e,t){M.exports=t.p+"static/option_middle.21caea1a.png"},17207:function(M,e,t){M.exports=t.p+"static/view_first.97ecafe7.png"},98489:function(M,e,t){M.exports=t.p+"static/view_third.fdd5a216.png"}}]);