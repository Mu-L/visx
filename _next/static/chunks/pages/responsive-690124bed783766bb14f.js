(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3403],{47538:function(n,e){"use strict";e.Z=Math.random},56426:function(n,e,r){"use strict";r.r(e),r.d(e,{randomBates:function(){return u},randomBernoulli:function(){return f},randomBeta:function(){return x},randomBinomial:function(){return m},randomCauchy:function(){return g},randomExponential:function(){return c},randomGamma:function(){return h},randomGeometric:function(){return p},randomInt:function(){return o},randomIrwinHall:function(){return l},randomLcg:function(){return w.Z},randomLogNormal:function(){return s},randomLogistic:function(){return b},randomNormal:function(){return a.Z},randomPareto:function(){return d},randomPoisson:function(){return y},randomUniform:function(){return i},randomWeibull:function(){return v}});var t=r(47538),i=function n(e){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,1===arguments.length?(r=n,n=0):r-=n,function(){return e()*r+n}}return r.source=n,r}(t.Z),o=function n(e){function r(n,r){return arguments.length<2&&(r=n,n=0),n=Math.floor(n),r=Math.floor(r)-n,function(){return Math.floor(e()*r+n)}}return r.source=n,r}(t.Z),a=r(80086),s=function n(e){var r=a.Z.source(e);function t(){var n=r.apply(this,arguments);return function(){return Math.exp(n())}}return t.source=n,t}(t.Z),l=function n(e){function r(n){return(n=+n)<=0?()=>0:function(){for(var r=0,t=n;t>1;--t)r+=e();return r+t*e()}}return r.source=n,r}(t.Z),u=function n(e){var r=l.source(e);function t(n){if(0===(n=+n))return e;var t=r(n);return function(){return t()/n}}return t.source=n,t}(t.Z),c=function n(e){function r(n){return function(){return-Math.log1p(-e())/n}}return r.source=n,r}(t.Z),d=function n(e){function r(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-e(),n)}}return r.source=n,r}(t.Z),f=function n(e){function r(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(e()+n)}}return r.source=n,r}(t.Z),p=function n(e){function r(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-e())/n)})}return r.source=n,r}(t.Z),h=function n(e){var r=a.Z.source(e)();function t(n,t){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(t=null==t?1:+t,1===n)return()=>-Math.log1p(-e())*t;var i=(n<1?n+1:n)-1/3,o=1/(3*Math.sqrt(i)),a=n<1?()=>Math.pow(e(),1/n):()=>1;return function(){do{do{var n=r(),s=1+o*n}while(s<=0);s*=s*s;var l=1-e()}while(l>=1-.0331*n*n*n*n&&Math.log(l)>=.5*n*n+i*(1-s+Math.log(s)));return i*s*a()*t}}return t.source=n,t}(t.Z),x=function n(e){var r=h.source(e);function t(n,e){var t=r(n),i=r(e);return function(){var n=t();return 0===n?0:n/(n+i())}}return t.source=n,t}(t.Z),m=function n(e){var r=p.source(e),t=x.source(e);function i(n,e){return n=+n,(e=+e)>=1?()=>n:e<=0?()=>0:function(){for(var i=0,o=n,a=e;o*a>16&&o*(1-a)>16;){var s=Math.floor((o+1)*a),l=t(s,o-s+1)();l<=a?(i+=s,o-=s,a=(a-l)/(1-l)):(o=s-1,a/=l)}for(var u=a<.5,c=r(u?a:1-a),d=c(),f=0;d<=o;++f)d+=c();return i+(u?f:o-f)}}return i.source=n,i}(t.Z),v=function n(e){function r(n,r,t){var i;return 0===(n=+n)?i=n=>-Math.log(n):(n=1/n,i=e=>Math.pow(e,n)),r=null==r?0:+r,t=null==t?1:+t,function(){return r+t*i(-Math.log1p(-e()))}}return r.source=n,r}(t.Z),g=function n(e){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,function(){return n+r*Math.tan(Math.PI*e())}}return r.source=n,r}(t.Z),b=function n(e){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,function(){var t=e();return n+r*Math.log(t/(1-t))}}return r.source=n,r}(t.Z),y=function n(e){var r=h.source(e),t=m.source(e);function i(n){return function(){for(var i=0,o=n;o>16;){var a=Math.floor(.875*o),s=r(a)();if(s>o)return i+t(a-1,o/s)();i+=a,o-=s}for(var l=-Math.log1p(-e()),u=0;l<=o;++u)l-=Math.log1p(-e());return i+u}}return i.source=n,i}(t.Z),w=r(89422)},89422:function(n,e,r){"use strict";r.d(e,{Z:function(){return i}});const t=1/4294967296;function i(n=Math.random()){let e=0|(0<=n&&n<1?n/t:Math.abs(n));return()=>(e=1664525*e+1013904223|0,t*(e>>>0))}},80086:function(n,e,r){"use strict";var t=r(47538);e.Z=function n(e){function r(n,r){var t,i;return n=null==n?0:+n,r=null==r?1:+r,function(){var o;if(null!=t)o=t,t=null;else do{t=2*e()-1,o=2*e()-1,i=t*t+o*o}while(!i||i>1);return n+r*o*Math.sqrt(-2*Math.log(i)/i)}}return r.source=n,r}(t.Z)},59576:function(n,e,r){"use strict";r.d(e,{Z:function(){return u}});var t=r(76422),i=(r(2784),r(48090)),o=r(18476),a=r.n(o),s=(r(73113),r(15961),r(2847),r(52322));function l(n){var e=n.lines;return(0,s.jsx)("span",{"aria-hidden":"true",className:"line-numbers-rows",children:e.map((function(n,r){return(0,s.jsx)("span",{},"line-number-".concat(e.length,"-").concat(r))}))})}function u(n){var e=n.children,r=e.match(/\n(?!$)/g),o=r?r.length+1:1,u=new Array(o+1).fill(1),c=[i.renderToString((0,s.jsx)(l,{lines:u})),a().highlight(e,a().languages.ts,"tsx")].join("");return(0,s.jsxs)("pre",{className:"jsx-3645412256 codeblock line-numbers",children:[(0,s.jsx)("code",{dangerouslySetInnerHTML:{__html:c},className:"jsx-3645412256"}),(0,s.jsx)(t.default,{id:"3645412256",children:[".codeblock.jsx-3645412256 code.jsx-3645412256{display:block;padding:0 0 0 1.5rem;border-radius:0;font-weight:300;font-size:14px;line-height:1.4em;background:white;color:#495057;}",".codeblock.line-numbers.jsx-3645412256{padding-left:0;}","@media (max-width:600px){.codeblock.jsx-3645412256 code.jsx-3645412256{font-size:10px;padding:0;pointer-events:none;}}"]})]})}try{Codeblock.displayName="Codeblock",Codeblock.__docgenInfo={description:"",displayName:"Codeblock",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Codeblock.tsx#Codeblock"]={docgenInfo:Codeblock.__docgenInfo,name:"Codeblock",path:"src/components/Codeblock.tsx#Codeblock"})}catch(c){}},73545:function(n,e,r){"use strict";r.d(e,{Z:function(){return g}});var t=r(76422),i=r(2784),o=r(72779),a=r.n(o),s=r(60594),l=r(52322),u=(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,l.jsx)("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),(0,l.jsx)("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),(0,l.jsx)("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),(0,l.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,l.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]});function c(n){var e=n.branch,r=void 0===e?"master":e,i=n.exampleDirectoryName;return i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("a",{href:"https://codesandbox.io/s/github/airbnb/visx/tree/".concat(r,"/packages/visx-demo/src/sandboxes/").concat(i),rel:"nofollow noopener noreferrer",target:"_blank",className:"jsx-3803197895 sandbox-link",children:[u,"\xa0Try it on CodeSandbox"]}),(0,l.jsx)(t.default,{id:"3803197895",children:[".sandbox-link.jsx-3803197895{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#222;}"]})]}):null}var d=c;try{c.displayName="CodeSandboxLink",c.__docgenInfo={description:"",displayName:"CodeSandboxLink",props:{branch:{defaultValue:{value:"master"},description:"",name:"branch",required:!1,type:{name:"string"}},exampleDirectoryName:{defaultValue:null,description:"",name:"exampleDirectoryName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeSandboxLink.tsx#CodeSandboxLink"]={docgenInfo:c.__docgenInfo,name:"CodeSandboxLink",path:"src/components/CodeSandboxLink.tsx#CodeSandboxLink"})}catch(b){}var f=r(89022),p=r(59576),h=r(39097);function x(n){var e=n.packageName,r=function(n){var e=n.split("@visx/")[1];return e?"docs/".concat(e):null}(e);return r?(0,l.jsx)(h.default,{href:r,children:(0,l.jsx)("a",{children:e})}):null}var m=x;try{x.displayName="VisxDocLink",x.__docgenInfo={description:"",displayName:"VisxDocLink",props:{packageName:{defaultValue:null,description:"",name:"packageName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisxDocLink.tsx#VisxDocLink"]={docgenInfo:x.__docgenInfo,name:"VisxDocLink",path:"src/components/VisxDocLink.tsx#VisxDocLink"})}catch(b){}var v=r(48422),g=(0,s.Z)((function(n){var e=n.screenWidth,r=n.children,o=n.title,s=n.component,u=n.shadow,c=void 0!==u&&u,h=n.events,x=void 0!==h&&h,g=n.margin,b=n.description,y=n.codeSandboxDirectoryName,w=n.packageJson,j=Math.min(800,(e||0)-40),k=.6*j,Z=(0,i.useMemo)((function(){return(0,v.Z)(w)}),[w]);return(0,l.jsxs)(f.Z,{title:o,children:[(0,l.jsx)("div",{className:"jsx-1780118371 container",children:(0,l.jsxs)("div",{style:{width:j},className:"jsx-1780118371",children:[(0,l.jsx)("h1",{className:"jsx-1780118371",children:o}),(0,l.jsx)("div",{className:"jsx-1780118371 "+(a()(!!c&&"shadow",o.split(" ").join("-"),"chart")||""),children:i.createElement(s,{width:j,height:k,margin:g,events:x})}),b&&i.createElement(b,{width:j,height:k}),y&&(0,l.jsx)("div",{className:"jsx-1780118371 sandbox-link",children:(0,l.jsx)(d,{exampleDirectoryName:y})}),Z.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"jsx-1780118371",children:"Documentation"}),(0,l.jsx)("div",{className:"jsx-1780118371 doc-links",children:Z.map((function(n){return(0,l.jsx)(m,{packageName:n},n)}))})]}),r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:"jsx-1780118371",children:"Code"}),(0,l.jsx)("div",{className:"jsx-1780118371 code",children:(0,l.jsx)(p.Z,{children:r})})]})]})}),(0,l.jsx)(t.default,{id:"1780118371",children:[".container.jsx-1780118371{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-bottom:40px;}",".container.jsx-1780118371 h1.jsx-1780118371{margin-top:15px;line-height:0.9em;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}",".container.jsx-1780118371 h2.jsx-1780118371{margin-top:15px;margin-bottom:5px;}",".chart.jsx-1780118371{border-radius:14px;}",".shadow.jsx-1780118371{border-radius:14px;box-shadow:0 1px 6px rgba(0,0,0,0.1);}",".sandbox-link.jsx-1780118371{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",".doc-links.jsx-1780118371{font-size:13px;}",".doc-links.jsx-1780118371 a{margin-right:6px;}"]})]})}))},48422:function(n,e,r){"use strict";function t(n){var e,r=[];return Object.keys(null!==(e=null===n||void 0===n?void 0:n.dependencies)&&void 0!==e?e:{}).forEach((function(n){n.startsWith("@visx/")&&r.push(n)})),r}r.d(e,{Z:function(){return t}});try{t.displayName="extractVisxDepsFromPackageJson",t.__docgenInfo={description:"",displayName:"extractVisxDepsFromPackageJson",props:{dependencies:{defaultValue:null,description:"",name:"dependencies",required:!1,type:{name:"{ [packageName: string]: string; }"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/util/extractVisxDepsFromPackageJson.ts#extractVisxDepsFromPackageJson"]={docgenInfo:t.__docgenInfo,name:"extractVisxDepsFromPackageJson",path:"src/components/util/extractVisxDepsFromPackageJson.ts#extractVisxDepsFromPackageJson"})}catch(i){}},17564:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});r(2784);var t=r(62050),i=r(33242),o=r(73545),a=r(52322);var s=function(){return(0,a.jsx)(o.Z,{component:t.Z,title:"Responsive",codeSandboxDirectoryName:"visx-responsive",packageJson:i,children:'import React, { useState } from \'react\';\nimport ParentSize from \'@visx/responsive/lib/components/ParentSize\';\n\nimport Lines from \'./Lines\';\n\nexport type ResponsiveProps = {\n  width: number;\n  height: number;\n};\n\nfunction Nav() {\n  return (\n    <ul>\n      <li>\n        <span role="img" aria-label="robot">\n          \ud83e\udd16\n        </span>\n      </li>\n      <li>Home</li>\n      <li>Profile</li>\n      <li>Favorites</li>\n      <li>Settings</li>\n    </ul>\n  );\n}\n\nexport default function Example({ width, height }: ResponsiveProps) {\n  const [showSidebar, setShowSidebar] = useState<boolean>(true);\n\n  return width < 20 || height < 20 ? null : (\n    <div className="app" style={{ width, height }}>\n      {showSidebar && (\n        <div className="app-nav">\n          <Nav />\n        </div>\n      )}\n      <div className="app-content">\n        <div>\n          <button\n            onClick={(event) => {\n              // on gallery page, don\'t go to example\n              event.preventDefault();\n              event.stopPropagation();\n              setShowSidebar(!showSidebar);\n            }}\n          >\n            toggle nav\n          </button>\n        </div>\n        <div className="app-graph">\n          <ParentSize className="graph-container" debounceTime={10}>\n            {({ width: visWidth, height: visHeight }) => (\n              <Lines width={visWidth} height={visHeight} />\n            )}\n          </ParentSize>\n        </div>\n      </div>\n\n      <style jsx>{`\n        .app {\n          display: flex;\n        }\n\n        .app-nav {\n          border: 1px solid lightgray;\n          border-right: none;\n          display: flex;\n          flex: 0.5;\n          padding: 1rem;\n        }\n\n        .app-content {\n          display: flex;\n          flex: 1;\n          flex-direction: column;\n          overflow: hidden;\n          padding: 1rem;\n          border: 1px solid lightgray;\n        }\n\n        .app-graph {\n          display: flex;\n          flex: 1;\n          overflow: hidden;\n          background: #222;\n        }\n      `}</style>\n    </div>\n  );\n}\n'})}},62050:function(n,e,r){"use strict";r.d(e,{Z:function(){return k}});var t=r(76422),i=r(2784),o=r(95642),a=r(89549),s=r(58500),l=r(86989),u=r(82790),c=r(42613),d=r(54048),f=r(29135),p=r(52322),h=new Array(12).fill(null).map((function(n,e){return(0,l.Z)(25,e/47)})),x=h.reduce((function(n,e){return n.concat(e)}),[]),m=function(n){return n.date},v=function(n){return n.value},g=(0,u.Z)({domain:(0,d.Z)(x,m)}),b=(0,c.Z)({domain:[0,(0,f.Z)(x,v)]});function y(n){var e=n.width,r=n.height,t=r/12;return g.range([0,e]),b.range([t,0]),(0,p.jsx)("svg",{width:e,height:r,children:e>8&&h.map((function(n,e){return(0,p.jsx)(a.Z,{top:e*t,children:(0,p.jsx)(s.Z,{data:n,x:function(n){var e;return null!==(e=g(m(n)))&&void 0!==e?e:0},y:function(n){var e;return null!==(e=b(v(n)))&&void 0!==e?e:0},stroke:"#ffffff",strokeWidth:1.5,shapeRendering:"geometricPrecision"})},"lines-".concat(e))}))})}var w=y;try{y.displayName="Lines",y.__docgenInfo={description:"",displayName:"Lines",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-responsive/Lines.tsx#Lines"]={docgenInfo:y.__docgenInfo,name:"Lines",path:"src/sandboxes/visx-responsive/Lines.tsx#Lines"})}catch(Z){}function j(){return(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("span",{role:"img","aria-label":"robot",children:"\ud83e\udd16"})}),(0,p.jsx)("li",{children:"Home"}),(0,p.jsx)("li",{children:"Profile"}),(0,p.jsx)("li",{children:"Favorites"}),(0,p.jsx)("li",{children:"Settings"})]})}function k(n){var e=n.width,r=n.height,a=(0,i.useState)(!0),s=a[0],l=a[1];return e<20||r<20?null:(0,p.jsxs)("div",{style:{width:e,height:r},className:"jsx-598333498 app",children:[s&&(0,p.jsx)("div",{className:"jsx-598333498 app-nav",children:(0,p.jsx)(j,{})}),(0,p.jsxs)("div",{className:"jsx-598333498 app-content",children:[(0,p.jsx)("div",{className:"jsx-598333498",children:(0,p.jsx)("button",{onClick:function(n){n.preventDefault(),n.stopPropagation(),l(!s)},className:"jsx-598333498",children:"toggle nav"})}),(0,p.jsx)("div",{className:"jsx-598333498 app-graph",children:(0,p.jsx)(o.Z,{className:"graph-container",debounceTime:10,children:function(n){var e=n.width,r=n.height;return(0,p.jsx)(w,{width:e,height:r})}})})]}),(0,p.jsx)(t.default,{id:"598333498",children:[".app.jsx-598333498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".app-nav.jsx-598333498{border:1px solid lightgray;border-right:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;padding:1rem;}",".app-content.jsx-598333498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden;padding:1rem;border:1px solid lightgray;}",".app-graph.jsx-598333498{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;background:#222;}"]})]})}try{k.displayName="Example",k.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-responsive/Example.tsx#Example"]={docgenInfo:k.__docgenInfo,name:"Example",path:"src/sandboxes/visx-responsive/Example.tsx#Example"})}catch(Z){}},23225:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/responsive",function(){return r(17564)}])},89549:function(n,e,r){"use strict";r.d(e,{Z:function(){return c}});var t=r(13980),i=r.n(t),o=r(2784),a=r(72779),s=r.n(a),l=["top","left","transform","className","children","innerRef"];function u(){return(u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(null,arguments)}function c(n){var e=n.top,r=void 0===e?0:e,t=n.left,i=void 0===t?0:t,a=n.transform,c=n.className,d=n.children,f=n.innerRef,p=function(n,e){if(null==n)return{};var r={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(e.includes(t))continue;r[t]=n[t]}return r}(n,l);return o.createElement("g",u({ref:f,className:s()("visx-group",c),transform:a||"translate("+i+", "+r+")"},p),d)}c.propTypes={top:i().number,left:i().number,transform:i().string,className:i().string,children:i().node,innerRef:i().oneOfType([i().string,i().func,i().object])}},86989:function(n,e,r){"use strict";e.Z=function(n,e,r){var t=null==e?Math.random:(0,i.default)(e),o=null==r?Date.now():new Date(r).valueOf();return new Array(n).fill(1).map((function(n,e){return{date:new Date(o-36e5*e),value:3e3*t()|0}}))};var t,i=(t=r(40922))&&t.__esModule?t:{default:t}},40922:function(n,e,r){"use strict";e.__esModule=!0,e.default=function(n){return(0,t.randomLcg)(n)};var t=r(56426)},95642:function(n,e,r){"use strict";e.Z=f;var t=l(r(13980)),i=l(r(2784)),o=l(r(98421)),a=["className","children","debounceTime","ignoreDimensions","initialSize","parentSizeStyles","enableDebounceLeadingCall","resizeObserverPolyfill"],s=["parentRef","resize"];function l(n){return n&&n.__esModule?n:{default:n}}function u(){return(u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(null,arguments)}function c(n,e){if(null==n)return{};var r={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(e.includes(t))continue;r[t]=n[t]}return r}var d={width:"100%",height:"100%"};function f(n){var e=n.className,r=n.children,t=n.debounceTime,l=n.ignoreDimensions,f=n.initialSize,p=n.parentSizeStyles,h=void 0===p?d:p,x=n.enableDebounceLeadingCall,m=void 0===x||x,v=n.resizeObserverPolyfill,g=c(n,a),b=(0,o.default)({initialSize:f,debounceTime:t,ignoreDimensions:l,enableDebounceLeadingCall:m,resizeObserverPolyfill:v}),y=b.parentRef,w=b.resize,j=c(b,s);return i.default.createElement("div",u({style:h,ref:y,className:e},g),r(u({},j,{ref:y.current,resize:w})))}f.propTypes={className:t.default.string,children:t.default.func.isRequired}},60594:function(n,e,r){"use strict";e.Z=function(n){return function(e){function r(){for(var r,i,o,a,s,l,u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return(l=e.call.apply(e,[this].concat(c))||this).displayName="withScreenSize("+(null!=(r=null!=(i=n.displayName)?i:n.name)?r:"Component")+")",l.state={screenWidth:void 0,screenHeight:void 0},l.resize=(0,t.default)((function(){l.setState((function(){return{screenWidth:window.innerWidth,screenHeight:window.innerHeight}}))}),null!=(o=null!=(a=l.props.debounceTime)?a:l.props.windowResizeDebounceTime)?o:300,{leading:null==(s=l.props.enableDebounceLeadingCall)||s}),l}var o,l;l=e,(o=r).prototype=Object.create(l.prototype),o.prototype.constructor=o,s(o,l);var u=r.prototype;return u.componentDidMount=function(){window.addEventListener("resize",this.resize,!1),this.resize()},u.componentWillUnmount=function(){window.removeEventListener("resize",this.resize,!1),this.resize.cancel()},u.render=function(){var e=this.state,r=e.screenWidth,t=e.screenHeight;return null==r||null==t?null:i.default.createElement(n,a({screenWidth:r,screenHeight:t},this.props))},r}(i.default.Component)};var t=o(r(54073)),i=o(r(2784));function o(n){return n&&n.__esModule?n:{default:n}}function a(){return(a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(null,arguments)}function s(n,e){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n})(n,e)}},98421:function(n,e,r){"use strict";e.__esModule=!0,e.default=function(n){var e=void 0===n?{}:n,r=e.initialSize,t=void 0===r?l:r,u=e.debounceTime,c=void 0===u?300:u,d=e.ignoreDimensions,f=void 0===d?s:d,p=e.enableDebounceLeadingCall,h=void 0===p||p,x=e.resizeObserverPolyfill,m=(0,o.useRef)(null),v=(0,o.useRef)(0),g=(0,o.useState)(a({},l,t)),b=g[0],y=g[1],w=(0,o.useMemo)((function(){var n=Array.isArray(f)?f:[f];return(0,i.default)((function(e){y((function(r){return Object.keys(r).filter((function(n){return r[n]!==e[n]})).every((function(e){return n.includes(e)}))?r:e}))}),c,{leading:h})}),[c,h,f]);return(0,o.useEffect)((function(){var n=new(x||window.ResizeObserver)((function(n){n.forEach((function(n){var e,r=null!=(e=null==n?void 0:n.contentRect)?e:{},t=r.left,i=r.top,o=r.width,a=r.height;v.current=window.requestAnimationFrame((function(){w({width:o,height:a,top:i,left:t})}))}))}));return m.current&&n.observe(m.current),function(){window.cancelAnimationFrame(v.current),n.disconnect(),w.cancel()}}),[w,x]),a({parentRef:m,resize:w},b)};var t,i=(t=r(54073))&&t.__esModule?t:{default:t},o=r(2784);function a(){return(a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(null,arguments)}var s=[],l={width:0,height:0,top:0,left:0}},42613:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(39554),i=(0,r(63458).Z)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(n){return i((0,t.Z)(),n)}},82790:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(4696),i=(0,r(63458).Z)("domain","range","reverse","clamp","interpolate","nice","round");function o(n){return i((0,t.Z)(),n)}},58500:function(n,e,r){"use strict";r.d(e,{Z:function(){return u}});var t=r(2784),i=r(72779),o=r.n(i),a=r(87520),s=["children","data","x","y","fill","className","curve","innerRef","defined"];function l(){return(l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)({}).hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(null,arguments)}function u(n){var e=n.children,r=n.data,i=void 0===r?[]:r,u=n.x,c=n.y,d=n.fill,f=void 0===d?"transparent":d,p=n.className,h=n.curve,x=n.innerRef,m=n.defined,v=void 0===m?function(){return!0}:m,g=function(n,e){if(null==n)return{};var r={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(e.includes(t))continue;r[t]=n[t]}return r}(n,s),b=(0,a.jv)({x:u,y:c,defined:v,curve:h});return e?t.createElement(t.Fragment,null,e({path:b})):t.createElement("path",l({ref:x,className:o()("visx-linepath",p),d:b(i)||"",fill:f,strokeLinecap:"round"},g))}},87520:function(n,e,r){"use strict";r.d(e,{Nb:function(){return f},SO:function(){return p},jv:function(){return h},ve:function(){return x},aJ:function(){return m},kn:function(){return v}});var t=r(38764),i=r(79493),o=r(79767),a=r(15001),s=r(8329),l=r(98926),u=r(19616),c=r(42679),d=r(70271);function f(n){var e=void 0===n?{}:n,r=e.innerRadius,i=e.outerRadius,o=e.cornerRadius,a=e.startAngle,s=e.endAngle,l=e.padAngle,c=e.padRadius,d=(0,t.Z)();return null!=r&&(0,u.Z)(d.innerRadius,r),null!=i&&(0,u.Z)(d.outerRadius,i),null!=o&&(0,u.Z)(d.cornerRadius,o),null!=a&&(0,u.Z)(d.startAngle,a),null!=s&&(0,u.Z)(d.endAngle,s),null!=l&&(0,u.Z)(d.padAngle,l),null!=c&&(0,u.Z)(d.padRadius,c),d}function p(n){var e=void 0===n?{}:n,r=e.x,t=e.x0,o=e.x1,a=e.y,s=e.y0,l=e.y1,c=e.defined,d=e.curve,f=(0,i.Z)();return r&&(0,u.Z)(f.x,r),t&&(0,u.Z)(f.x0,t),o&&(0,u.Z)(f.x1,o),a&&(0,u.Z)(f.y,a),s&&(0,u.Z)(f.y0,s),l&&(0,u.Z)(f.y1,l),c&&f.defined(c),d&&f.curve(d),f}function h(n){var e=void 0===n?{}:n,r=e.x,t=e.y,i=e.defined,a=e.curve,s=(0,o.Z)();return r&&(0,u.Z)(s.x,r),t&&(0,u.Z)(s.y,t),i&&s.defined(i),a&&s.curve(a),s}function x(n){var e=void 0===n?{}:n,r=e.startAngle,t=e.endAngle,i=e.padAngle,o=e.value,s=e.sort,l=e.sortValues,c=(0,a.Z)();return(null===s||null!=s)&&c.sort(s),(null===l||null!=l)&&c.sortValues(l),null!=o&&c.value(o),null!=i&&(0,u.Z)(c.padAngle,i),null!=r&&(0,u.Z)(c.startAngle,r),null!=t&&(0,u.Z)(c.endAngle,t),c}function m(n){var e=void 0===n?{}:n,r=e.angle,t=e.radius,i=e.defined,o=e.curve,a=(0,s.Z)();return r&&(0,u.Z)(a.angle,r),t&&(0,u.Z)(a.radius,t),i&&a.defined(i),o&&a.curve(o),a}function v(n){var e=n.keys,r=n.value,t=n.order,i=n.offset,o=(0,l.Z)();return e&&o.keys(e),r&&(0,u.Z)(o.value,r),t&&o.order((0,c.ZP)(t)),i&&o.offset((0,d.ZP)(i)),o}},19616:function(n,e,r){"use strict";function t(n,e){n(e)}r.d(e,{Z:function(){return t}})},70271:function(n,e,r){"use strict";r.d(e,{nW:function(){return l},ed:function(){return u},ZP:function(){return c}});var t=r(22254),i=r(76751),o=r(90541),a=r(36538),s=r(34928),l={expand:t.Z,diverging:i.Z,none:o.Z,silhouette:a.Z,wiggle:s.Z},u=Object.keys(l);function c(n){return n&&l[n]||l.none}},42679:function(n,e,r){"use strict";r.d(e,{un:function(){return l},s2:function(){return u},ZP:function(){return c}});var t=r(19721),i=r(82564),o=r(12197),a=r(81182),s=r(40277),l={ascending:t.Z,descending:i.Z,insideout:o.Z,none:a.Z,reverse:s.Z},u=Object.keys(l);function c(n){return n&&l[n]||l.none}},54048:function(n,e,r){"use strict";function t(n,e){let r,t;if(void 0===e)for(const i of n)null!=i&&(void 0===r?i>=i&&(r=t=i):(r>i&&(r=i),t<i&&(t=i)));else{let i=-1;for(let o of n)null!=(o=e(o,++i,n))&&(void 0===r?o>=o&&(r=t=o):(r>o&&(r=o),t<o&&(t=o)))}return[r,t]}r.d(e,{Z:function(){return t}})},29135:function(n,e,r){"use strict";function t(n,e){let r;if(void 0===e)for(const t of n)null!=t&&(r<t||void 0===r&&t>=t)&&(r=t);else{let t=-1;for(let i of n)null!=(i=e(i,++t,n))&&(r<i||void 0===r&&i>=i)&&(r=i)}return r}r.d(e,{Z:function(){return t}})},39554:function(n,e,r){"use strict";r.d(e,{Z:function(){return d},Q:function(){return c}});var t=r(36346),i=r(55101),o=r(88478),a=r(11912),s=r(35206);var l=r(22094);function u(n,e,r,i){var o,u=(0,t.ly)(n,e,r);switch((i=(0,a.Z)(null==i?",f":i)).type){case"s":var c=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=function(n,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,s.Z)(e)/3)))-(0,s.Z)(Math.abs(n)))}(u,c))||(i.precision=o),(0,l.jH)(i,c);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=function(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,(0,s.Z)(e)-(0,s.Z)(n))+1}(u,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=function(n){return Math.max(0,-(0,s.Z)(Math.abs(n)))}(u))||(i.precision=o-2*("%"===i.type))}return(0,l.WU)(i)}function c(n){var e=n.domain;return n.ticks=function(n){var r=e();return(0,t.ZP)(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var t=e();return u(t[0],t[t.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var i,o,a=e(),s=0,l=a.length-1,u=a[s],c=a[l],d=10;for(c<u&&(o=u,u=c,c=o,o=s,s=l,l=o);d-- >0;){if((o=(0,t.G9)(u,c,r))===i)return a[s]=u,a[l]=c,e(a);if(o>0)u=Math.floor(u/o)*o,c=Math.ceil(c/o)*o;else{if(!(o<0))break;u=Math.ceil(u*o)/o,c=Math.floor(c*o)/o}i=o}return n},n}function d(){var n=(0,i.ZP)();return n.copy=function(){return(0,i.JG)(n,d())},o.o.apply(n,arguments),c(n)}},33242:function(n){"use strict";n.exports=JSON.parse('{"name":"@visx/demo-responsive","description":"Standalone @visx/responsive demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/vendor":"latest","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx"]}')}},function(n){n.O(0,[9774,1603,2218,5450,9097,377,4696,8231,2888,179],(function(){return e=23225,n(n.s=e);var e}));var e=n.O();_N_E=e}]);