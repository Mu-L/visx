"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7072],{91672:function(n,t){var r=Math.PI,i=2*r,e=1e-6,u=i-e;function o(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new o}o.prototype=a.prototype={constructor:o,moveTo:function(n,t){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,t){this._+="L"+(this._x1=+n)+","+(this._y1=+t)},quadraticCurveTo:function(n,t,r,i){this._+="Q"+ +n+","+ +t+","+(this._x1=+r)+","+(this._y1=+i)},bezierCurveTo:function(n,t,r,i,e,u){this._+="C"+ +n+","+ +t+","+ +r+","+ +i+","+(this._x1=+e)+","+(this._y1=+u)},arcTo:function(n,t,i,u,o){n=+n,t=+t,i=+i,u=+u,o=+o;var a=this._x1,c=this._y1,s=i-n,f=u-t,h=a-n,l=c-t,_=h*h+l*l;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=n)+","+(this._y1=t);else if(_>e)if(Math.abs(l*s-f*h)>e&&o){var p=i-a,d=u-c,y=s*s+f*f,M=p*p+d*d,v=Math.sqrt(y),g=Math.sqrt(_),x=o*Math.tan((r-Math.acos((y+_-M)/(2*v*g)))/2),m=x/g,Z=x/v;Math.abs(m-1)>e&&(this._+="L"+(n+m*h)+","+(t+m*l)),this._+="A"+o+","+o+",0,0,"+ +(l*p>h*d)+","+(this._x1=n+Z*s)+","+(this._y1=t+Z*f)}else this._+="L"+(this._x1=n)+","+(this._y1=t);else;},arc:function(n,t,o,a,c,s){n=+n,t=+t,s=!!s;var f=(o=+o)*Math.cos(a),h=o*Math.sin(a),l=n+f,_=t+h,p=1^s,d=s?a-c:c-a;if(o<0)throw new Error("negative radius: "+o);null===this._x1?this._+="M"+l+","+_:(Math.abs(this._x1-l)>e||Math.abs(this._y1-_)>e)&&(this._+="L"+l+","+_),o&&(d<0&&(d=d%i+i),d>u?this._+="A"+o+","+o+",0,1,"+p+","+(n-f)+","+(t-h)+"A"+o+","+o+",0,1,"+p+","+(this._x1=l)+","+(this._y1=_):d>e&&(this._+="A"+o+","+o+",0,"+ +(d>=r)+","+p+","+(this._x1=n+o*Math.cos(c))+","+(this._y1=t+o*Math.sin(c))))},rect:function(n,t,r,i){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)+"h"+ +r+"v"+ +i+"h"+-r+"Z"},toString:function(){return this._}},t.Z=a},47538:function(n,t){t.Z=Math.random},56426:function(n,t,r){r.r(t),r.d(t,{randomBates:function(){return s},randomBernoulli:function(){return l},randomBeta:function(){return d},randomBinomial:function(){return y},randomCauchy:function(){return v},randomExponential:function(){return f},randomGamma:function(){return p},randomGeometric:function(){return _},randomInt:function(){return u},randomIrwinHall:function(){return c},randomLcg:function(){return m.Z},randomLogNormal:function(){return a},randomLogistic:function(){return g},randomNormal:function(){return o.Z},randomPareto:function(){return h},randomPoisson:function(){return x},randomUniform:function(){return e},randomWeibull:function(){return M}});var i=r(47538),e=function n(t){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,1===arguments.length?(r=n,n=0):r-=n,function(){return t()*r+n}}return r.source=n,r}(i.Z),u=function n(t){function r(n,r){return arguments.length<2&&(r=n,n=0),n=Math.floor(n),r=Math.floor(r)-n,function(){return Math.floor(t()*r+n)}}return r.source=n,r}(i.Z),o=r(80086),a=function n(t){var r=o.Z.source(t);function i(){var n=r.apply(this,arguments);return function(){return Math.exp(n())}}return i.source=n,i}(i.Z),c=function n(t){function r(n){return(n=+n)<=0?()=>0:function(){for(var r=0,i=n;i>1;--i)r+=t();return r+i*t()}}return r.source=n,r}(i.Z),s=function n(t){var r=c.source(t);function i(n){if(0===(n=+n))return t;var i=r(n);return function(){return i()/n}}return i.source=n,i}(i.Z),f=function n(t){function r(n){return function(){return-Math.log1p(-t())/n}}return r.source=n,r}(i.Z),h=function n(t){function r(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-t(),n)}}return r.source=n,r}(i.Z),l=function n(t){function r(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(t()+n)}}return r.source=n,r}(i.Z),_=function n(t){function r(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-t())/n)})}return r.source=n,r}(i.Z),p=function n(t){var r=o.Z.source(t)();function i(n,i){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(i=null==i?1:+i,1===n)return()=>-Math.log1p(-t())*i;var e=(n<1?n+1:n)-1/3,u=1/(3*Math.sqrt(e)),o=n<1?()=>Math.pow(t(),1/n):()=>1;return function(){do{do{var n=r(),a=1+u*n}while(a<=0);a*=a*a;var c=1-t()}while(c>=1-.0331*n*n*n*n&&Math.log(c)>=.5*n*n+e*(1-a+Math.log(a)));return e*a*o()*i}}return i.source=n,i}(i.Z),d=function n(t){var r=p.source(t);function i(n,t){var i=r(n),e=r(t);return function(){var n=i();return 0===n?0:n/(n+e())}}return i.source=n,i}(i.Z),y=function n(t){var r=_.source(t),i=d.source(t);function e(n,t){return n=+n,(t=+t)>=1?()=>n:t<=0?()=>0:function(){for(var e=0,u=n,o=t;u*o>16&&u*(1-o)>16;){var a=Math.floor((u+1)*o),c=i(a,u-a+1)();c<=o?(e+=a,u-=a,o=(o-c)/(1-c)):(u=a-1,o/=c)}for(var s=o<.5,f=r(s?o:1-o),h=f(),l=0;h<=u;++l)h+=f();return e+(s?l:u-l)}}return e.source=n,e}(i.Z),M=function n(t){function r(n,r,i){var e;return 0===(n=+n)?e=n=>-Math.log(n):(n=1/n,e=t=>Math.pow(t,n)),r=null==r?0:+r,i=null==i?1:+i,function(){return r+i*e(-Math.log1p(-t()))}}return r.source=n,r}(i.Z),v=function n(t){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,function(){return n+r*Math.tan(Math.PI*t())}}return r.source=n,r}(i.Z),g=function n(t){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,function(){var i=t();return n+r*Math.log(i/(1-i))}}return r.source=n,r}(i.Z),x=function n(t){var r=p.source(t),i=y.source(t);function e(n){return function(){for(var e=0,u=n;u>16;){var o=Math.floor(.875*u),a=r(o)();if(a>u)return e+i(o-1,u/a)();e+=o,u-=a}for(var c=-Math.log1p(-t()),s=0;c<=u;++s)c-=Math.log1p(-t());return e+s}}return e.source=n,e}(i.Z),m=r(89422)},89422:function(n,t,r){r.d(t,{Z:function(){return e}});const i=1/4294967296;function e(n=Math.random()){let t=0|(0<=n&&n<1?n/i:Math.abs(n));return()=>(t=1664525*t+1013904223|0,i*(t>>>0))}},80086:function(n,t,r){var i=r(47538);t.Z=function n(t){function r(n,r){var i,e;return n=null==n?0:+n,r=null==r?1:+r,function(){var u;if(null!=i)u=i,i=null;else do{i=2*t()-1,u=2*t()-1,e=i*i+u*u}while(!e||e>1);return n+r*u*Math.sqrt(-2*Math.log(e)/e)}}return r.source=n,r}(i.Z)},33554:function(n,t,r){function i(n){return function(){return n}}r.d(t,{Z:function(){return i}})},46385:function(n,t,r){function i(n,t,r){n._context.bezierCurveTo(n._x1+n._k*(n._x2-n._x0),n._y1+n._k*(n._y2-n._y0),n._x2+n._k*(n._x1-t),n._y2+n._k*(n._y1-r),n._x2,n._y2)}function e(n,t){this._context=n,this._k=(1-t)/6}r.d(t,{xm:function(){return i},pC:function(){return e}}),e.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:i(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2,this._x1=n,this._y1=t;break;case 2:this._point=3;default:i(this,n,t)}this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=t}},t.ZP=function n(t){function r(n){return new e(n,t)}return r.tension=function(t){return n(+t)},r}(0)},20651:function(n,t,r){function i(n){this._context=n}function e(n){return new i(n)}r.d(t,{Z:function(){return e}}),i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;default:this._context.lineTo(n,t)}}}},79767:function(n,t,r){r.d(t,{Z:function(){return a}});var i=r(91672),e=r(33554),u=r(20651),o=r(11053);function a(){var n=o.x,t=o.y,r=(0,e.Z)(!0),a=null,c=u.Z,s=null;function f(e){var u,o,f,h=e.length,l=!1;for(null==a&&(s=c(f=(0,i.Z)())),u=0;u<=h;++u)!(u<h&&r(o=e[u],u,e))===l&&((l=!l)?s.lineStart():s.lineEnd()),l&&s.point(+n(o,u,e),+t(o,u,e));if(f)return s=null,f+""||null}return f.x=function(t){return arguments.length?(n="function"===typeof t?t:(0,e.Z)(+t),f):n},f.y=function(n){return arguments.length?(t="function"===typeof n?n:(0,e.Z)(+n),f):t},f.defined=function(n){return arguments.length?(r="function"===typeof n?n:(0,e.Z)(!!n),f):r},f.curve=function(n){return arguments.length?(c=n,null!=a&&(s=c(a)),f):c},f.context=function(n){return arguments.length?(null==n?a=s=null:s=c(a=n),f):a},f}},11053:function(n,t,r){function i(n){return n[0]}function e(n){return n[1]}r.d(t,{x:function(){return i},y:function(){return e}})},84698:function(n,t,r){function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=n[r];return i}r.d(t,{Z:function(){return i}})},64993:function(n,t,r){r.d(t,{Z:function(){return u}});var i=r(84698);var e=r(7245);function u(n){return function(n){if(Array.isArray(n))return(0,i.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,e.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7245:function(n,t,r){r.d(t,{Z:function(){return e}});var i=r(84698);function e(n,t){if(n){if("string"===typeof n)return(0,i.Z)(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,i.Z)(n,t):void 0}}},8270:function(n,t,r){function i(n,t,r){n=+n,t=+t,r=(e=arguments.length)<2?(t=n,n=0,1):e<3?1:+r;for(var i=-1,e=0|Math.max(0,Math.ceil((t-n)/r)),u=new Array(e);++i<e;)u[i]=n+i*r;return u}r.d(t,{Z:function(){return i}})},21214:function(n,t,r){r.d(t,{Z:function(){return o},x:function(){return c}});var i=r(8270),e=r(88478),u=r(61921);function o(){var n,t,r=(0,u.Z)().unknown(void 0),a=r.domain,c=r.range,s=0,f=1,h=!1,l=0,_=0,p=.5;function d(){var r=a().length,e=f<s,u=e?f:s,o=e?s:f;n=(o-u)/Math.max(1,r-l+2*_),h&&(n=Math.floor(n)),u+=(o-u-n*(r-l))*p,t=n*(1-l),h&&(u=Math.round(u),t=Math.round(t));var d=(0,i.Z)(r).map((function(t){return u+n*t}));return c(e?d.reverse():d)}return delete r.unknown,r.domain=function(n){return arguments.length?(a(n),d()):a()},r.range=function(n){return arguments.length?([s,f]=n,s=+s,f=+f,d()):[s,f]},r.rangeRound=function(n){return[s,f]=n,s=+s,f=+f,h=!0,d()},r.bandwidth=function(){return t},r.step=function(){return n},r.round=function(n){return arguments.length?(h=!!n,d()):h},r.padding=function(n){return arguments.length?(l=Math.min(1,_=+n),d()):l},r.paddingInner=function(n){return arguments.length?(l=Math.min(1,n),d()):l},r.paddingOuter=function(n){return arguments.length?(_=+n,d()):_},r.align=function(n){return arguments.length?(p=Math.max(0,Math.min(1,n)),d()):p},r.copy=function(){return o(a(),[s,f]).round(h).paddingInner(l).paddingOuter(_).align(p)},e.o.apply(d(),arguments)}function a(n){var t=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return a(t())},n}function c(){return a(o.apply(null,arguments).paddingInner(1))}},39554:function(n,t,r){r.d(t,{Z:function(){return h},Q:function(){return f}});var i=r(36346),e=r(55101),u=r(88478),o=r(11912),a=r(35206);var c=r(22094);function s(n,t,r,e){var u,s=(0,i.ly)(n,t,r);switch((e=(0,o.Z)(null==e?",f":e)).type){case"s":var f=Math.max(Math.abs(n),Math.abs(t));return null!=e.precision||isNaN(u=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(t)/3)))-(0,a.Z)(Math.abs(n)))}(s,f))||(e.precision=u),(0,c.jH)(e,f);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(u=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,(0,a.Z)(t)-(0,a.Z)(n))+1}(s,Math.max(Math.abs(n),Math.abs(t))))||(e.precision=u-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(u=function(n){return Math.max(0,-(0,a.Z)(Math.abs(n)))}(s))||(e.precision=u-2*("%"===e.type))}return(0,c.WU)(e)}function f(n){var t=n.domain;return n.ticks=function(n){var r=t();return(0,i.ZP)(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var i=t();return s(i[0],i[i.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var e,u,o=t(),a=0,c=o.length-1,s=o[a],f=o[c],h=10;for(f<s&&(u=s,s=f,f=u,u=a,a=c,c=u);h-- >0;){if((u=(0,i.G9)(s,f,r))===e)return o[a]=s,o[c]=f,t(o);if(u>0)s=Math.floor(s/u)*u,f=Math.ceil(f/u)*u;else{if(!(u<0))break;s=Math.ceil(s*u)/u,f=Math.floor(f*u)/u}e=u}return n},n}function h(){var n=(0,e.ZP)();return n.copy=function(){return(0,e.JG)(n,h())},u.o.apply(n,arguments),f(n)}},61921:function(n,t,r){r.d(t,{Z:function(){return f}});class i extends Map{constructor(n,t=a){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=n)for(const[r,i]of n)this.set(r,i)}get(n){return super.get(e(this,n))}has(n){return super.has(e(this,n))}set(n,t){return super.set(u(this,n),t)}delete(n){return super.delete(o(this,n))}}Set;function e({_intern:n,_key:t},r){const i=t(r);return n.has(i)?n.get(i):r}function u({_intern:n,_key:t},r){const i=t(r);return n.has(i)?n.get(i):(n.set(i,r),r)}function o({_intern:n,_key:t},r){const i=t(r);return n.has(i)&&(r=n.get(i),n.delete(i)),r}function a(n){return null!==n&&"object"===typeof n?n.valueOf():n}var c=r(88478);const s=Symbol("implicit");function f(){var n=new i,t=[],r=[],e=s;function u(i){let u=n.get(i);if(void 0===u){if(e!==s)return e;n.set(i,u=t.push(i)-1)}return r[u%r.length]}return u.domain=function(r){if(!arguments.length)return t.slice();t=[],n=new i;for(const i of r)n.has(i)||n.set(i,t.push(i)-1);return u},u.range=function(n){return arguments.length?(r=Array.from(n),u):r.slice()},u.unknown=function(n){return arguments.length?(e=n,u):e},u.copy=function(){return f(t,r).unknown(e)},c.o.apply(u,arguments),u}}}]);