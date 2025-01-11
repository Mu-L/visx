"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9065],{88714:function(t,e,n){n.d(e,{Oq:function(){return N},ZP:function(){return G},or:function(){return L}});var r=n(64993),o=n(77460),i=n(2784),a=n(73805),l=n(89549),c=n(13980),s=n.n(c),u=n(72779),f=n.n(u),p=n(62401),d=n(86363),h=["top","left","xScale","yScale","width","height","className","stroke","strokeWidth","strokeDasharray","numTicksRows","numTicksColumns","rowLineStyle","columnLineStyle","xOffset","yOffset","rowTickValues","columnTickValues"];function v(){return(v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}function y(t){var e=t.top,n=t.left,r=t.xScale,o=t.yScale,a=t.width,c=t.height,s=t.className,u=t.stroke,y=t.strokeWidth,m=t.strokeDasharray,g=t.numTicksRows,b=t.numTicksColumns,x=t.rowLineStyle,O=t.columnLineStyle,w=t.xOffset,k=t.yOffset,j=t.rowTickValues,T=t.columnTickValues,S=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}(t,h);return i.createElement(l.Z,{className:f()("visx-grid",s),top:e,left:n},i.createElement(p.Z,v({className:s,scale:o,width:a,stroke:u,strokeWidth:y,strokeDasharray:m,numTicks:g,lineStyle:x,offset:k,tickValues:j},S)),i.createElement(d.Z,v({className:s,scale:r,height:c,stroke:u,strokeWidth:y,strokeDasharray:m,numTicks:b,lineStyle:O,offset:w,tickValues:T},S)))}y.propTypes={rowTickValues:s().array,columnTickValues:s().array};var m=n(35381),g=n(52085),b=n(27069),x=n(42613),O=n(53188),w=n(16721),k=n(68209),j=n(37409),T=n(77372),S=n(23228),P=n(9527),R=n(52322);function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C,L="#a44afe",N="#eaedff",_={top:40,right:0,bottom:0,left:0},D=E(E({},k.j),{},{minWidth:60,backgroundColor:"rgba(0,0,0,0.9)",color:"white"}),V=g.Z.slice(0,12),z=Object.keys(V[0]).filter((function(t){return"date"!==t})),B=V.reduce((function(t,e){var n=z.reduce((function(t,n){return t+=Number(e[n])}),0);return t.push(n),t}),[]),I=(0,w.Z1)("%Y-%m-%d"),M=(0,w.i$)("%b %d"),Y=function(t){return M(I(t))},A=function(t){return t.date},W=(0,b.Z)({domain:V.map(A),padding:.2}),F=(0,x.Z)({domain:[0,Math.max.apply(Math,(0,r.Z)(B))],nice:!0}),q=(0,O.Z)({domain:z,range:["#6c5efb","#c998ff",L]});function G(t){var e=t.width,n=t.height,r=t.events,o=void 0!==r&&r,i=t.margin,c=void 0===i?_:i,s=(0,j.Z)(),u=s.tooltipOpen,f=s.tooltipLeft,p=s.tooltipTop,d=s.tooltipData,h=s.hideTooltip,v=s.showTooltip,g=(0,T.Z)({scroll:!0}),b=g.containerRef,x=g.TooltipInPortal;if(e<10)return null;var O=e,w=n-c.top-100;return W.rangeRound([0,O]),F.range([w,0]),e<10?null:(0,R.jsxs)("div",{style:{position:"relative"},children:[(0,R.jsxs)("svg",{ref:b,width:e,height:n,children:[(0,R.jsx)("rect",{x:0,y:0,width:e,height:n,fill:N,rx:14}),(0,R.jsx)(y,{top:c.top,left:c.left,xScale:W,yScale:F,width:O,height:w,stroke:"black",strokeOpacity:.1,xOffset:W.bandwidth()/2}),(0,R.jsx)(l.Z,{top:c.top,children:(0,R.jsx)(a.Z,{data:V,keys:z,x:A,xScale:W,yScale:F,color:q,children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,R.jsx)("rect",{x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color,onClick:function(){o&&alert("clicked: ".concat(JSON.stringify(e)))},onMouseLeave:function(){C=window.setTimeout((function(){h()}),300)},onMouseMove:function(t){C&&clearTimeout(C);var n=(0,P.Z)(t),r=e.x+e.width/2;v({tooltipData:e,tooltipTop:null===n||void 0===n?void 0:n.y,tooltipLeft:r})}},"bar-stack-".concat(t.index,"-").concat(e.index))}))}))}})}),(0,R.jsx)(m.Z,{top:w+c.top,scale:W,tickFormat:Y,stroke:L,tickStroke:L,tickLabelProps:{fill:L,fontSize:11,textAnchor:"middle"}})]}),(0,R.jsx)("div",{style:{position:"absolute",top:c.top/2-10,width:"100%",display:"flex",justifyContent:"center",fontSize:"14px"},children:(0,R.jsx)(S.Z,{scale:q,direction:"row",labelMargin:"0 15px 0 0"})}),u&&d&&(0,R.jsxs)(x,{top:p,left:f,style:D,children:[(0,R.jsx)("div",{style:{color:q(d.key)},children:(0,R.jsx)("strong",{children:d.key})}),(0,R.jsxs)("div",{children:[d.bar.data[d.key],"\u2109"]}),(0,R.jsx)("div",{children:(0,R.jsx)("small",{children:Y(A(d.bar.data))})})]})]})}try{G.displayName="Example",G.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; }"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-barstack/Example.tsx#Example"]={docgenInfo:G.__docgenInfo,name:"Example",path:"src/sandboxes/visx-barstack/Example.tsx#Example"})}catch(H){}},35381:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(2784),o=n(72779),i=n.n(o),a=n(26543),l=n(34237),c=["axisClassName","labelOffset","tickLength","tickLabelProps"];function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}var u={dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"};function f(t){var e=t.axisClassName,n=t.labelOffset,o=void 0===n?8:n,f=t.tickLength,p=void 0===f?8:f,d=t.tickLabelProps,h=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}(t,c),v="function"===typeof d?d:s({},u,d);return r.createElement(a.Z,s({axisClassName:i()("visx-axis-bottom",e),labelOffset:o,orientation:l.Z.bottom,tickLabelProps:v,tickLength:p},h))}},41781:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(2784),o=n(28316);function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var l={top:0,right:0,bottom:0,left:0,width:0,height:0};function c(t){var e;return(e=function(e){function n(t){var n;return(n=e.call(this,t)||this).state={rect:void 0,parentRect:void 0},n.nodeRef=r.createRef(),n.getRects=n.getRects.bind(n),n}var c,s;s=e,(c=n).prototype=Object.create(s.prototype),c.prototype.constructor=c,a(c,s);var u=n.prototype;return u.componentDidMount=function(){var t,e=this;this.node=null!=(t=this.nodeRef)&&t.current?this.nodeRef.current:o.findDOMNode(this),this.setState((function(){return e.getRects()}))},u.getRects=function(){if(!this.node)return this.state;var t=this.node,e=t.parentNode;return{rect:t.getBoundingClientRect?t.getBoundingClientRect():l,parentRect:null!=e&&e.getBoundingClientRect?e.getBoundingClientRect():l}},u.render=function(){return r.createElement(t,i({nodeRef:this.nodeRef,getRects:this.getRects},this.state,this.props))},n}(r.PureComponent)).displayName="withBoundingRects("+(t.displayName||"")+")",e}},9527:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(78481),o=n(47513);function i(t,e){if((0,o.kK)(t)&&e)return(0,r.Z)(t,e);if((0,o.cO)(t)){var n=t,i=n.target;if(i)return(0,r.Z)(i,n)}return null}},78481:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(79196),o=n(47513);function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}var a={x:0,y:0};function l(t,e){if(!t||!e)return null;var n=function(t){if(!t)return i({},a);if((0,o.z6)(t))return t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:i({},a);if((0,o.N5)(t))return{x:t.clientX,y:t.clientY};var e=null==t?void 0:t.target,n=e&&"getBoundingClientRect"in e?e.getBoundingClientRect():null;return n?{x:n.x+n.width/2,y:n.y+n.height/2}:i({},a)}(e),l=(0,o.vZ)(t)?t.ownerSVGElement:t,c=(0,o.DY)(l)?l.getScreenCTM():null;if((0,o.r4)(l)&&c){var s=l.createSVGPoint();return s.x=n.x,s.y=n.y,s=s.matrixTransform(c.inverse()),new r.Z({x:s.x,y:s.y})}var u=t.getBoundingClientRect();return new r.Z({x:n.x-u.left-t.clientLeft,y:n.y-u.top-t.clientTop})}},47513:function(t,e,n){function r(t){return!!t&&t instanceof Element}function o(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function i(t){return!!t&&"createSVGPoint"in t}function a(t){return!!t&&"getScreenCTM"in t}function l(t){return!!t&&"changedTouches"in t}function c(t){return!!t&&"clientX"in t}function s(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}n.d(e,{kK:function(){return r},vZ:function(){return o},r4:function(){return i},DY:function(){return a},z6:function(){return l},N5:function(){return c},cO:function(){return s}})},37409:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(2784),o=["tooltipOpen"];function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}function a(t){var e=(0,r.useState)(i({tooltipOpen:!1},t)),n=e[0],a=e[1],l=(0,r.useCallback)((function(t){return a("function"===typeof t?function(e){e.tooltipOpen;var n=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}(e,o);return i({},t(n),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:t.tooltipLeft,tooltipTop:t.tooltipTop,tooltipData:t.tooltipData})}),[a]),c=(0,r.useCallback)((function(){return a({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[a]);return{tooltipOpen:n.tooltipOpen,tooltipLeft:n.tooltipLeft,tooltipTop:n.tooltipTop,tooltipData:n.tooltipData,updateTooltip:a,showTooltip:l,hideTooltip:c}}},77372:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(2784),o=n(731),i=n(13980),a=n.n(i),l=n(28316);function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function e(){return t.apply(this,arguments)||this}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,c(n,r);var o=e.prototype;return o.componentWillUnmount=function(){this.node&&document.body&&(document.body.removeChild(this.node),delete this.node)},o.render=function(){return this.node||"undefined"===typeof document||(this.node=document.createElement("div"),null!=this.props.zIndex&&(this.node.style.zIndex=""+this.props.zIndex),document.body.append(this.node)),this.node?l.createPortal(this.props.children,this.node):null},e}(r.PureComponent);s.propTypes={zIndex:a().oneOfType([a().number,a().string])};var u=n(68209),f=n(2459),p=["detectBounds","zIndex"],d=["left","top","detectBounds","zIndex"];function h(){return(h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}function v(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function y(t){var e=void 0===t?{}:t,n=e.detectBounds,i=void 0===n||n,a=e.zIndex,l=v(e,p),c=(0,o.Z)(l),y=c[0],m=c[1],g=c[2],b=(0,r.useState)(!1),x=b[0],O=b[1];(0,r.useEffect)((function(){O(!1)}),[]);var w=(0,r.useMemo)((function(){return function(t){var e=t.left,n=void 0===e?0:e,o=t.top,l=void 0===o?0:o,c=t.detectBounds,p=t.zIndex,y=v(t,d),g=null==p?a:p,b=(null==c?i:c)?f.Z:u.Z,O=x?0:window.scrollX,w=x?0:window.scrollY,k=n+(m.left||0)+O,j=l+(m.top||0)+w;return r.createElement(s,{zIndex:g},r.createElement(b,h({left:k,top:j},y)))}}),[i,a,m.left,m.top,x]);return{containerRef:y,containerBounds:m,forceRefreshBounds:g,TooltipInPortal:w}}},68209:function(t,e,n){n.d(e,{j:function(){return u}});var r=n(13980),o=n.n(r),i=n(2784),a=n(72779),l=n.n(a),c=["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"];function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}var u={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"},f=i.forwardRef((function(t,e){var n=t.className,r=t.top,o=t.left,a=t.offsetLeft,f=void 0===a?10:a,p=t.offsetTop,d=void 0===p?10:p,h=t.style,v=void 0===h?u:h,y=t.children,m=t.unstyled,g=void 0!==m&&m,b=t.applyPositionStyle,x=void 0!==b&&b,O=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}(t,c);return i.createElement("div",s({ref:e,className:l()("visx-tooltip",n),style:s({top:null==r||null==d?r:r+d,left:null==o||null==f?o:o+f},x&&{position:"absolute"},!g&&v)},O),y)}));f.propTypes={children:o().node,className:o().string,left:o().number,offsetLeft:o().number,offsetTop:o().number,top:o().number,applyPositionStyle:o().bool,unstyled:o().bool},f.displayName="Tooltip",e.Z=f},2459:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(13980),o=n.n(r),i=n(2784),a=n(41781),l=n(68209),c=(0,i.createContext)({isFlippedVertically:!1,isFlippedHorizontally:!1}),s=c.Provider,u=(c.Consumer,["children","getRects","left","offsetLeft","offsetTop","parentRect","rect","style","top","unstyled","nodeRef"]);function f(){return(f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}function p(t){var e,n=t.children,r=(t.getRects,t.left),o=void 0===r?0:r,a=t.offsetLeft,c=void 0===a?10:a,p=t.offsetTop,d=void 0===p?10:p,h=t.parentRect,v=t.rect,y=t.style,m=void 0===y?l.j:y,g=t.top,b=void 0===g?0:g,x=t.unstyled,O=void 0!==x&&x,w=t.nodeRef,k=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}(t,u),j=!1,T=!1;if(v&&h){var S=o,P=b;if(h.width){var R=S+c+v.width-h.width,Z=v.width-S-c;j=R>0&&R>Z}else{var E=S+c+v.width-window.innerWidth,C=v.width-S-c;j=E>0&&E>C}if(h.height){var L=P+d+v.height-h.height,N=v.height-P-d;T=L>0&&L>N}else T=P+d+v.height>window.innerHeight;S=j?S-v.width-c:S+c,P=T?P-v.height-d:P+d,e="translate("+(S=Math.round(S))+"px, "+(P=Math.round(P))+"px)"}return i.createElement(l.Z,f({ref:w,style:f({left:0,top:0,transform:e},!O&&m)},k),i.createElement(s,{value:{isFlippedVertically:!T,isFlippedHorizontally:!j}},n))}p.propTypes={nodeRef:o().oneOfType([o().string,o().func,o().object])};var d=(0,a.Z)(p)},76074:function(t){t.exports=JSON.parse('{"name":"@visx/demo-barstack","description":"Standalone visx stacked bar demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/axis":"latest","@visx/event":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/legend":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","@visx/vendor":"latest","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","barstack"]}')}}]);