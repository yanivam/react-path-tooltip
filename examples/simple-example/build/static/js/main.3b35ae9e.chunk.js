(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,r){e.exports=r(10)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(2),c=r.n(a),o=(r(8),r(9),function(e){var t=Object(n.useState)(!0),r=t[0],a=t[1],c=Object(n.useState)({x:0,y:0,w:0,h:0,isLeft:!1,isTop:!1}),o=c[0],l=c[1],f=Object(n.useState)(e.fontSize||12)[0],s=Object(n.useState)(e.fontFamily||"sans-serif")[0],g=Object(n.useState)(e.bgColor||"black")[0],h=Object(n.useState)(e.textColor||"white")[0],u=e.pathRef,y=e.svgRef,m=i.a.createRef();Object(n.useEffect)((function(){u&&u.current&&(u.current.addEventListener("mouseover",(function(){a(!1)})),u.current.addEventListener("mouseleave",(function(){a(!0)})),u.current.addEventListener("mousemove",(function(e){r||function(e){if(y&&u&&m&&y.current&&u.current&&m.current){var t=y.current.getBoundingClientRect(),r=m.current.getBoundingClientRect(),n=e.x-t.x>t.width/2,i=e.y-t.y>t.height/2,a=r.width+20,c=r.height+20,o=n?e.x-t.x+8-a:e.x-t.x-8,f=i?e.y-t.y-12-c:e.y-t.y+8;l({x:o,y:f,w:a,h:c,isLeft:n,isTop:i})}}(e)})))}),[u,y,m]);var p=(o.x+7).toString()+","+(o.y-10).toString()+" "+(o.x+30).toString()+","+o.y.toString()+" "+(o.x+22).toString()+","+o.y.toString(),x=(o.x+o.w-8).toString()+","+(o.y-10).toString()+" "+(o.x+o.w-25).toString()+","+o.y.toString()+" "+(o.x+o.w-15).toString()+","+o.y.toString(),S=(o.x+7).toString()+","+(o.y+o.h+10).toString()+" "+(o.x+15).toString()+","+(o.y+o.h).toString()+" "+(o.x+7).toString()+","+(o.y+o.h).toString(),d=(o.x+o.w-7).toString()+","+(o.y+o.h+10).toString()+" "+(o.x+o.w-15).toString()+","+(o.y+o.h).toString()+" "+(o.x+o.w-7).toString()+","+(o.y+o.h).toString(),v=o.isLeft&&o.isTop?d:o.isTop?S:o.isLeft?x:p;return i.a.createElement("g",{pointerEvents:"none"},i.a.createElement("rect",{x:o.x,y:o.y,width:o.w,rx:5,ry:5,height:o.h,fill:g,visibility:r?"hidden":"visible"}),i.a.createElement("polygon",{fill:g,visibility:r?"hidden":"visible",points:v}),i.a.createElement("text",{ref:m,x:o.x+10,cursor:"default",y:o.y+o.h/1.66,fontFamily:s,fontSize:f,fill:h,visibility:r?"hidden":"visible"},e.tip))});var l=function(){var e=i.a.createRef(),t=i.a.createRef(),r=i.a.createRef(),n=i.a.createRef(),a=i.a.createRef(),c=i.a.createRef(),l=i.a.createRef();return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"The SVG"),i.a.createElement("div",{className:"Main"},i.a.createElement("svg",{width:"400",height:"400",ref:e},i.a.createElement("rect",{width:"400",height:"400",stroke:"black",fill:"none"}),i.a.createElement("circle",{cx:50,cy:50,r:50,fill:"red",ref:t}),i.a.createElement("circle",{cx:80,cy:80,r:50,fill:"green",ref:r}),i.a.createElement("circle",{cx:350,cy:350,r:30,fill:"blue",ref:n}),i.a.createElement("rect",{x:320,y:50,width:"50",height:"50",fill:"purple",ref:a}),i.a.createElement("circle",{cx:50,cy:320,r:10,fill:"grey",ref:c}),i.a.createElement("circle",{cx:190,cy:190,r:40,fill:"pink",ref:l}),i.a.createElement(o,{svgRef:e,pathRef:t,tip:"This is the long Red!"}),i.a.createElement(o,{svgRef:e,pathRef:r,tip:"Green"}),i.a.createElement(o,{svgRef:e,pathRef:n,tip:"BL",fontFamily:"system-ui"}),i.a.createElement(o,{svgRef:e,pathRef:a,tip:"Purple",fontSize:24}),i.a.createElement(o,{svgRef:e,pathRef:c,tip:"Grey",bgColor:"#909090",textColor:"blue"}),i.a.createElement(o,{svgRef:e,pathRef:l,tip:"Pink",textColor:"pink"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.3b35ae9e.chunk.js.map