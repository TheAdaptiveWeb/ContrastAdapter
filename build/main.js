!function(r){var e={};function t(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)t.d(n,a,function(e){return r[e]}.bind(null,a));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=1)}([function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=t(2),o=(n=a)&&n.__esModule?n:{default:n};e.default=function(r,e){var t=(0,o.default)(r),n=(0,o.default)(e),a=(Math.max(t,n)+.05)/(Math.min(t,n)+.05);return Math.floor(100*a)/100}},function(r,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n);function o(r,e="black",t="white"){if("adaptiveweb-wrapper"===r.parentElement.class)return;let n=document.createElement("div");n.style.backgroundColor=e,n.style.color=t,n.style.padding="10px",n.style.borderRadius="5px",n.class="adaptiveweb-wrapper";let a=r.innerHTML;n.innerHTML=a,r.innerHTML="",r.appendChild(n)}let i={AA:{normal:4.5,large:3},AAA:{normal:7,large:4.5}};aw.getPreferences().then(r=>{let{backgroundColor:e,foregroundColor:t,useAAA:n}=r,u=[];["div","h1","h2","h3","h4","h5","p"].forEach(r=>{let e=document.getElementsByTagName(r);u.push(...e)});for(let r=0;r<u.length;r++){let l=u[r],c=getComputedStyle(l,null),s=!1,h=Number(c.fontSize.match(/(\d+)px/)[1]);(h>=18||"bold"===c.fontWeight&&h>=14)&&(s=!0);let f=c.backgroundColor,d=c.color;if("rgba(0, 0, 0, 0)"===c.backgroundColor){let r=getComputedStyle(l.parentElement).backgroundColor;if("rgba(0, 0, 0, 0)"===r)continue;f=r}let g=i[n?"AAA":"AA"][s?"large":"normal"];a()(d,f)<g&&l.innerHTML.trim()===l.innerText.trim()&&o(l,e,t)}})},function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=function(){return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,a=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=t(3),i=(n=o)&&n.__esModule?n:{default:n};e.default=function(r){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreTransparency,t=void 0!==e&&e;if(!r)throw new TypeError("getRelativeLuminance() needs you to pass the color parameter.");var n=(0,i.default)(r),o=a(n.rgba,4),u=o[0],l=o[1],c=o[2];if(o[3]<1&&!t)throw new TypeError("getRelativeLuminance() does not now how to handle transparency.");var s=[u,l,c].map(function(r){return r/255}).map(function(r){return r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}),h=a(s,3);return.2126*h[0]+.7152*h[1]+.0722*h[2]}},function(r,e,t){var n=t(4);r.exports=function(r){var e,t,a,o;if(e=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(r)){var i=e[1],u="cmyk"===(l=i.replace(/a$/,""))?4:3;t=n[l],a=e[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(r,e){return/%$/.test(r)&&e===u?parseFloat(r)/100:(/%$/.test(r),parseFloat(r))}),i===l&&a.push(1),o=void 0===a[u]?1:a[u],a=a.slice(0,u),t[l]=function(){return a}}else if(/^#[A-Fa-f0-9]+$/.test(r)){var l;u=(l=r.replace(/^#/,"")).length;t=n.rgb,a=(a=l.split(3===u?/(.)/:/(..)/)).filter(Boolean).map(function(r){return 3===u?parseInt(r+r,16):parseInt(r,16)}),o=1,t.rgb=function(){return a},a[0]||(a[0]=0),a[1]||(a[1]=0),a[2]||(a[2]=0)}else(t=n.keyword).keyword=function(){return r},a=r,o=1;var c={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{c.rgb=t.rgb(a)}catch(r){}try{c.hsl=t.hsl(a)}catch(r){}try{c.hsv=t.hsv(a)}catch(r){}try{c.cmyk=t.cmyk(a)}catch(r){}try{c.keyword=t.keyword(a)}catch(r){}return c.rgb&&(c.hex="#"+c.rgb.map(function(r){var e=r.toString(16);return 1===e.length?"0"+e:e}).join("")),c.rgb&&(c.rgba=c.rgb.concat(o)),c.hsl&&(c.hsla=c.hsl.concat(o)),c.hsv&&(c.hsva=c.hsv.concat(o)),c.cmyk&&(c.cmyka=c.cmyk.concat(o)),c}},function(r,e,t){var n=t(5),a=function(){return new c};for(var o in n){a[o+"Raw"]=function(r){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),n[r](e)}}(o);var i=/(\w+)2(\w+)/.exec(o),u=i[1],l=i[2];(a[u]=a[u]||{})[l]=a[o]=function(r){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var t=n[r](e);if("string"==typeof t||void 0===t)return t;for(var a=0;a<t.length;a++)t[a]=Math.round(t[a]);return t}}(o)}var c=function(){this.convs={}};c.prototype.routeSpace=function(r,e){var t=e[0];return void 0===t?this.getValues(r):("number"==typeof t&&(t=Array.prototype.slice.call(e)),this.setValues(r,t))},c.prototype.setValues=function(r,e){return this.space=r,this.convs={},this.convs[r]=e,this},c.prototype.getValues=function(r){var e=this.convs[r];if(!e){var t=this.space,n=this.convs[t];e=a[t][r](n),this.convs[r]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(r){c.prototype[r]=function(e){return this.routeSpace(r,arguments)}}),r.exports=a},function(e,t){function n(r){var e,t,n=r[0]/255,a=r[1]/255,o=r[2]/255,i=Math.min(n,a,o),u=Math.max(n,a,o),l=u-i;return u==i?e=0:n==u?e=(a-o)/l:a==u?e=2+(o-n)/l:o==u&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),t=(i+u)/2,[e,100*(u==i?0:t<=.5?l/(u+i):l/(2-u-i)),100*t]}function a(r){var e,t,n=r[0],a=r[1],o=r[2],i=Math.min(n,a,o),u=Math.max(n,a,o),l=u-i;return t=0==u?0:l/u*1e3/10,u==i?e=0:n==u?e=(a-o)/l:a==u?e=2+(o-n)/l:o==u&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,t,u/255*1e3/10]}function o(r){var e=r[0],t=r[1],a=r[2];return[n(r)[0],100*(1/255*Math.min(e,Math.min(t,a))),100*(a=1-1/255*Math.max(e,Math.max(t,a)))]}function i(r){var e,t=r[0]/255,n=r[1]/255,a=r[2]/255;return[100*((1-t-(e=Math.min(1-t,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function u(r){return A[JSON.stringify(r)]}function l(r){var e=r[0]/255,t=r[1]/255,n=r[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*t+.0722*n),100*(.0193*e+.1192*t+.9505*n)]}function c(r){var e=l(r),t=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function s(r){var e,t,n,a,o,i=r[0]/360,u=r[1]/100,l=r[2]/100;if(0==u)return[o=255*l,o,o];e=2*l-(t=l<.5?l*(1+u):l+u-l*u),a=[0,0,0];for(var c=0;c<3;c++)(n=i+1/3*-(c-1))<0&&n++,n>1&&n--,o=6*n<1?e+6*(t-e)*n:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e,a[c]=255*o;return a}function h(r){var e=r[0]/60,t=r[1]/100,n=r[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),i=255*n*(1-t),u=255*n*(1-t*o),l=255*n*(1-t*(1-o));n*=255;switch(a){case 0:return[n,l,i];case 1:return[u,n,i];case 2:return[i,n,l];case 3:return[i,u,n];case 4:return[l,i,n];case 5:return[n,i,u]}}function f(e){var t,n,a,o,i=e[0]/360,u=e[1]/100,l=e[2]/100,c=u+l;switch(c>1&&(u/=c,l/=c),a=6*i-(t=Math.floor(6*i)),0!=(1&t)&&(a=1-a),o=u+a*((n=1-l)-u),t){default:case 6:case 0:r=n,g=o,b=u;break;case 1:r=o,g=n,b=u;break;case 2:r=u,g=n,b=o;break;case 3:r=u,g=o,b=n;break;case 4:r=o,g=u,b=n;break;case 5:r=n,g=u,b=o}return[255*r,255*g,255*b]}function d(r){var e=r[0]/100,t=r[1]/100,n=r[2]/100,a=r[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function y(r){var e,t,n,a=r[0]/100,o=r[1]/100,i=r[2]/100;return t=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,e=(e=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]}function p(r){var e=r[0],t=r[1],n=r[2];return t/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(e-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function m(r){var e,t,n,a,o=r[0],i=r[1],u=r[2];return o<=8?a=(t=100*o/903.3)/100*7.787+16/116:(t=100*Math.pow((o+16)/116,3),a=Math.pow(t/100,1/3)),[e=e/95.047<=.008856?e=95.047*(i/500+a-16/116)/7.787:95.047*Math.pow(i/500+a,3),t,n=n/108.883<=.008859?n=108.883*(a-u/200-16/116)/7.787:108.883*Math.pow(a-u/200,3)]}function v(r){var e,t=r[0],n=r[1],a=r[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[t,Math.sqrt(n*n+a*a),e]}function w(r){return y(m(r))}function k(r){var e,t=r[0],n=r[1];return e=r[2]/360*2*Math.PI,[t,n*Math.cos(e),n*Math.sin(e)]}function M(r){return x[r]}e.exports={rgb2hsl:n,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:i,rgb2keyword:u,rgb2xyz:l,rgb2lab:c,rgb2lch:function(r){return v(c(r))},hsl2rgb:s,hsl2hsv:function(r){var e=r[0],t=r[1]/100,n=r[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(t*=(n*=2)<=1?n:2-n)/(n+t)),100*((n+t)/2)]},hsl2hwb:function(r){return o(s(r))},hsl2cmyk:function(r){return i(s(r))},hsl2keyword:function(r){return u(s(r))},hsv2rgb:h,hsv2hsl:function(r){var e,t,n=r[0],a=r[1]/100,o=r[2]/100;return e=a*o,[n,100*(e=(e/=(t=(2-a)*o)<=1?t:2-t)||0),100*(t/=2)]},hsv2hwb:function(r){return o(h(r))},hsv2cmyk:function(r){return i(h(r))},hsv2keyword:function(r){return u(h(r))},hwb2rgb:f,hwb2hsl:function(r){return n(f(r))},hwb2hsv:function(r){return a(f(r))},hwb2cmyk:function(r){return i(f(r))},hwb2keyword:function(r){return u(f(r))},cmyk2rgb:d,cmyk2hsl:function(r){return n(d(r))},cmyk2hsv:function(r){return a(d(r))},cmyk2hwb:function(r){return o(d(r))},cmyk2keyword:function(r){return u(d(r))},keyword2rgb:M,keyword2hsl:function(r){return n(M(r))},keyword2hsv:function(r){return a(M(r))},keyword2hwb:function(r){return o(M(r))},keyword2cmyk:function(r){return i(M(r))},keyword2lab:function(r){return c(M(r))},keyword2xyz:function(r){return l(M(r))},xyz2rgb:y,xyz2lab:p,xyz2lch:function(r){return v(p(r))},lab2xyz:m,lab2rgb:w,lab2lch:v,lch2lab:k,lch2xyz:function(r){return m(k(r))},lch2rgb:function(r){return w(k(r))}};var x={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},A={};for(var S in x)A[JSON.stringify(x[S])]=S}]);