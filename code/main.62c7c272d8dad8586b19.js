(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{0:function(e,t,n){n("55Il"),n("p2bk"),e.exports=n("7RL8")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"7RL8":function(e,t,n){"use strict";n.r(t);var o=n("YHGo"),i=n("q1tI"),c=n.n(i),r=n("i8i4"),a=n("ANjH"),s=n("Igns"),u=n("/MKj"),l=n("gyEF"),p=n.n(l),f=n("aJ4A"),d=n("sINF"),h=n("N2Rb");function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseURL="https://api.babelchat.tk/"}var t,n,o;return t=e,(n=[{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){var t=e.body,n=e.endpoint,o=e.headers,r=void 0===o?{}:o,i=e.method,a=void 0===i?"GET":i,c=this.authorization,s=this.baseURL;return c&&(r.Authorization=c),!t||t instanceof FormData||(t=JSON.stringify(t),r["Content-Type"]="application/json"),fetch("".concat(s).concat(n),{body:t,headers:r,method:a}).then(function(e){var t=e.headers,n=e.status;if(n<200||400<=n)throw new Error(n);switch((t.get("Content-Type")||"").split(";")[0]){case"text/plain":return e.arrayBuffer();case"application/json":return e.json();default:return e}})})},{key:"setAuthorization",value:function(e){e?this.authorization="Bearer ".concat(e):delete this.authorization,this.token=e}}])&&y(t.prototype,n),o&&y(t,o),e}()),g="SESSION/REFRESH_FULFILLED",v="SESSION/REFRESH_REJECTED",b="SESSION/SIGNOUT",O="ROOM/ADD_PHOTO",w="ROOM/JOIN",E="ROOM/PEER_JOIN",k="ROOM/PEER_LEAVE",R="ROOM/PEER_SIGNAL",j="ROOM/PEER_STREAM",S="ROOM/MOVE_PHOTO",P="ROOM/REMOVE_PHOTO",_="ROOM/RESET",x="ROOM/STREAM_START";function T(e){return e?{type:g,payload:e}:function(e){return e({type:"SESSION/REFRESH",payload:m.fetch({endpoint:"user"})}).catch(function(){})}}n("bo1M");var L=n("wcCE");var I={en:{NotFound:{description:"This is not the web page you're looking for.",goBack:"Take me back home"},Room:{joining:"Joining room...",welcome:'Welcome to: "%{name}"'},Rooms:{peers:"%{count} peers",peers_1:"%{count} peer"},User:{signIn:"Sign-In",signOut:"Sign-Out"}},es:{NotFound:{description:"Esta no es la página que estás buscando.",goBack:"Vplver al inicio"},Room:{joining:"Entrando en la habitación...",welcome:'Bienvenido a: "%{name}"'},Rooms:{peers:"%{count} personas",peers_1:"%{count} persona"},User:{signIn:"Iniciar Sesión",signOut:"Cerrar Sesión"}}},M=Object.keys(I),A={};M.forEach(function(e){A[e]=Object(L.recursive)(!0,I.en,I[e])});var q=n("1339"),N=n.n(q);function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var W=(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.promises=[],this.getPromise=this.getPromise.bind(this),this.onKey=this.onKey.bind(this),this.onPointer=this.onPointer.bind(this),this.touches=N()(window,{filtered:!0,preventSimulated:!1}).on("start",this.onPointer).on("end",this.onPointer),window.addEventListener("keydown",this.onKey,!1),window.addEventListener("keyup",this.onKey,!1)}var t,n,o;return t=e,(n=[{key:"getPromise",value:function(){var t=this.isReady,n=this.promises;return new Promise(function(e){t?e():n.push(e)})}},{key:"onFirstInteraction",value:function(){var e=this.promises;this.touches.disable(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),this.isReady=!0,e.forEach(function(e){return e()})}},{key:"onKey",value:function(){this.onFirstInteraction()}},{key:"onPointer",value:function(){this.onFirstInteraction()}}])&&C(t.prototype,n),o&&C(t,o),e}())).getPromise;function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){z(t,e,n[e])})}return t}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var F=Object(a.c)({name:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w:return t.payload.name;case _:return"";default:return e}},peers:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length?arguments[1]:void 0;switch(n.type){case w:return e.forEach(function(e){return e.connection.destroy()}),n.payload.peers;case E:return[].concat(U(e),[n.payload.peer]);case k:return e.filter(function(e){var t=e.connection;return e.peer===n.payload.peer&&(t.destroy(),!0)});case R:return e.forEach(function(e){var t=e.connection;e.peer===n.payload.peer&&t.signal(n.payload.signal)}),e;case j:return e.map(function(e){if(e.peer!==n.payload.peer)return e;var t=document.createElement("video");return t.srcObject=n.payload.stream,t.onloadedmetadata=function(){return W().then(function(){return t.play()})},D({},e,{video:t})});case x:return e.forEach(function(e){e.connection.addStream(n.payload.stream)}),e;case _:return e.forEach(function(e){return e.connection.destroy()}),[];default:return e}},photos:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w:return t.payload.photos;case O:return[].concat(U(e),[t.payload]);case S:return e.map(function(e){return e._id===t.payload.photo?D({},e,{origin:{x:t.payload.origin.x,y:t.payload.origin.y}}):e});case P:return e.filter(function(e){return e._id!==t.payload.photo});case _:return[];default:return e}},socket:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w:return t.payload.socket;case _:return!1;default:return e}},stream:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case x:return t.payload.stream;case _:return e&&e.getTracks().forEach(function(e){return e.stop()}),!1;default:return e}},video:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case x:var n=document.createElement("video");return n.muted=!0,n.srcObject=t.payload.stream,n.onloadedmetadata=function(){return W().then(function(){return n.play()})},n;case _:return e&&(e.srcObject=null),!1;default:return e}}}),B=Object(a.c)({list:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"ROOMS/FETCH_FULFILLED":return t.payload.sort(function(e,t){var n=e.name,o=t.name;return n.localeCompare(o)});default:return e}}}),J="BABELCHAT::SESSION",H=JSON.parse(localStorage.getItem(J)||"false");H&&m.setAuthorization(H.token);var G=Object(a.c)({isAuth:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!!H;switch((1<arguments.length?arguments[1]:void 0).type){case g:return!0;case v:case b:return!1;default:return e}},profile:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:H?H.profile:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case g:return t.payload.profile;case v:case b:return{};default:return e}},token:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:H?H.token:"",t=1<arguments.length?arguments[1]:void 0;switch(t.type){case g:return m.setAuthorization(t.payload.token),localStorage.setItem(J,JSON.stringify(t.payload)),t.payload.token;case v:case b:return m.setAuthorization(!1),localStorage.removeItem(J),"";default:return e}}}),K=Object(a.c)({i18n:h.i18nReducer,loadingBar:l.loadingBarReducer,room:F,rooms:B,session:G}),V=n("2INN"),X=n("mf+E"),Y=n("jKe7"),Q=n("17x9"),Z=n.n(Q),$=n("vOnD");function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ne(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=ne(this,oe(n).call(this,e))).dom=c.a.createRef(),t}var t,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(n,i["Component"]),t=n,(o=[{key:"componentDidMount",value:function(){var e=this.dom,t=this.props.video;e.current.appendChild(t)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.dom;return c.a.createElement("div",{ref:e})}}])&&te(t.prototype,o),r&&te(t,r),n}();ie.propTypes={video:Z.a.object.isRequired};var ae=ie,ce=$.a.div.withConfig({displayName:"session__Wrapper",componentId:"sc-1s88h5i-0"})(["position:absolute;top:0;right:0;.toggle{> img,> div > video{background:#000;width:100px;height:100px;vertical-align:middle;box-shadow:0 0 10px rgba(0,0,0,.5);}}.menu{display:none;position:absolute;top:100%;right:0;background:#eee;border:1px solid #000;box-shadow:0 0 10px rgba(0,0,0,.5);z-index:1;> a,> span{display:block;padding:0.5rem 1rem;white-space:nowrap;}> span{color:#bebebe;border-bottom:1px solid #bebebe;}> a{text-decoration:none;cursor:pointer;}}&:hover .menu{display:block;}"]),se=function(e){var t=e.isAuth,n=e.profile,o=e.video,r=e.signout;return t?c.a.createElement(ce,null,c.a.createElement("div",{className:"toggle"},o&&o.srcObject.getVideoTracks().length?c.a.createElement(ae,{video:o}):c.a.createElement("img",{alt:n.name,src:"".concat(m.baseURL,"user/").concat(n._id,"/photo?auth=").concat(m.token)})),c.a.createElement("div",{className:"menu"},c.a.createElement("span",null,n.name),c.a.createElement("a",{onClick:r},c.a.createElement(h.Translate,{value:"User.signOut"})))):null};se.propTypes={isAuth:Z.a.bool.isRequired,profile:Z.a.shape({_id:Z.a.string,name:Z.a.string}).isRequired,video:Z.a.oneOfType([Z.a.bool,Z.a.object]).isRequired,signout:Z.a.func.isRequired};var ue=Object(u.connect)(function(e){var t=e.session;return{isAuth:t.isAuth,profile:t.profile,video:e.room.video}},{signout:function(){return{type:b}}})(se),le=$.a.div.withConfig({displayName:"layout__Route",componentId:"wopef3-0"})(["display:flex;height:100vh;"]),pe={backgroundColor:"#bebebe"},fe=function(e){var t=e.children;return c.a.createElement("div",null,c.a.createElement(p.a,{style:pe}),c.a.createElement(ue,null),c.a.createElement(le,null,t))};fe.propTypes={children:Z.a.node.isRequired};var de=fe,he=n("fWck");function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ge(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var we=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(t=!(o=ve(r).call(this,e))||"object"!==ye(o)&&"function"!=typeof o?be(n):o).dom=c.a.createRef(),t.onDrop=t.onDrop.bind(be(t)),t.onPointerWheel=t.onPointerWheel.bind(be(t)),t.onResize=t.onResize.bind(be(t)),t.origin={x:0,y:0},t.scale=1,t.photos={},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(r,i["Component"]),t=r,o=[{key:"onDragOver",value:function(e){e.preventDefault()}}],(n=[{key:"componentDidMount",value:function(){var e=this.dom.current;this.loadPhotos(this.props),e.addEventListener("dragover",r.onDragOver,!1),e.addEventListener("drop",this.onDrop,!1),window.addEventListener("resize",this.onResize,!1),this.touches=N()(window,{filtered:!0,preventSimulated:!1}).on("start",this.onPointerStart.bind(this)).on("move",this.onPointerMove.bind(this)).on("end",this.onPointerEnd.bind(this)),Object(he.addWheelListener)(window,this.onPointerWheel),this.onResize()}},{key:"componentWillReceiveProps",value:function(e){this.loadPhotos(e),this.draw(e)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){var e=this.dom.current;this.touches.disable(),e.removeEventListener("dragover",r.onDragOver),e.removeEventListener("drop",this.onDrop),Object(he.removeWheelListener)(window,this.onPointerWheel),window.removeEventListener("resize",this.onResize)}},{key:"onDrop",value:function(e){var t=this.props.socket,n=e.clientX,o=e.clientY,r=me(e.dataTransfer.files,1)[0];if(e.preventDefault(),r){var i=this.getPointer([n,o]),a=new FileReader;a.onload=function(){t.send(JSON.stringify({type:"ROOM/ADD_PHOTO",payload:{origin:i,photo:a.result.substr(a.result.indexOf("base64")+7)}}))},a.readAsDataURL(r)}}},{key:"onPointerStart",value:function(e,t){var a=this,n=this.props,o=n.photos,r=n.socket,i=e.button||0,c=this.getPointer(t),s=c.x,u=c.y,l=o.filter(function(e){var t=e._id,n=e.origin,o=a.photos[t];if(!o)return!1;var r=o.width,i=o.height;return!(s<n.x||s>n.x+r||u<n.y||u>n.y+i)});l.reverse();var p=l[0];0===i&&!p||2===i?this.dragging={canvas:t}:0===i&&p&&(e.shiftKey?r.send(JSON.stringify({type:"ROOM/REMOVE_PHOTO",payload:{photo:p._id}})):this.dragging={offset:{x:p.origin.x-s,y:p.origin.y-u},photo:p})}},{key:"onPointerMove",value:function(e,t){var n=this.dragging,o=this.origin,r=this.scale;if(n){if(n.canvas&&(o.x+=(t[0]-n.canvas[0])/r,o.y+=(t[1]-n.canvas[1])/r,n.canvas=t),n.photo){var i=n.offset,a=n.photo,c=this.getPointer(t),s=c.x,u=c.y;a.origin.x=s+i.x,a.origin.y=u+i.y}this.draw()}}},{key:"onPointerEnd",value:function(){var e=this.dragging,t=this.props.socket;if(e&&(delete this.dragging,e.photo)){var n=e.photo,o=n._id,r=n.origin;t.send(JSON.stringify({type:"ROOM/MOVE_PHOTO",payload:{origin:r,photo:o}}))}}},{key:"onPointerWheel",value:function(e){var t=e.deltaY,n=1+.075*Math.min(Math.max(-t,-1),1);this.scale*=n,this.scale=Math.min(Math.max(this.scale,.25),2),this.draw()}},{key:"onResize",value:function(){var e=this.dom.current;e.width=window.innerWidth,e.height=window.innerHeight,this.draw()}},{key:"getPointer",value:function(e){var t=me(e,2),n=t[0],o=t[1],r=this.dom.current,i=this.origin,a=this.scale;return{x:(n-.5*r.width)/a-i.x,y:(o-.5*r.height)/a-i.y}}},{key:"loadPhotos",value:function(e){var r=this;e.photos.forEach(function(e){var t=e._id,n=e.photo;if(!r.photos[t]){var o=new Image;o.src="data:image/jpeg;base64,".concat(n),o.onload=function(){return r.draw()},r.photos[t]=o}})}},{key:"draw",value:function(e){var o=this,t=this.dom.current,n=this.origin,r=this.scale,i=e||this.props,a=i.name,c=i.photos,s=t.getContext("2d");t.width=t.width,s.translate(.5*t.width,.5*t.height),s.scale(r,r),s.translate(n.x,n.y),s.textAlign="center",s.textBaseline="middle",s.fillStyle="#999",s.font="32px Arial",s.fillText(h.I18n.t("Room.".concat(a?"welcome":"joining"),{name:a}),0,0),c.forEach(function(e){var t=e._id,n=e.origin;o.photos[t]&&s.drawImage(o.photos[t],n.x,n.y)})}},{key:"render",value:function(){var e=this.dom;return c.a.createElement("canvas",{ref:e})}}])&&ge(t.prototype,n),o&&ge(t,o),r}();we.propTypes={name:Z.a.string.isRequired,photos:Z.a.arrayOf(Z.a.shape({origin:Z.a.shape({x:Z.a.number.isRequired,y:Z.a.number.isRequired}),photo:Z.a.string.isRequired})).isRequired,socket:Z.a.oneOfType([Z.a.bool,Z.a.object]).isRequired};var Ee=Object(u.connect)(function(e){var t=e.room;return{name:t.name,photos:t.photos,socket:t.socket}})(we),ke=n("TX9C"),Re=n("BRrH"),je=n.n(Re);function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _e(e){return(_e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Le=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(t=!(o=_e(r).call(this,e))||"object"!==Se(o)&&"function"!=typeof o?xe(n):o).onMessage=t.onMessage.bind(xe(t)),t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}(r,i["Component"]),t=r,(n=[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.slug,o=t.hideLoading,r=t.showLoading,i=t.startStream;r(),this.socket=new ke.a("".concat(m.baseURL.replace(/http/,"ws"),"room/").concat(n),m.token),this.socket.onopen=function(){e.socket.onclose=null,e.socket.onerror=null,o()},this.socket.onmessage=this.onMessage,navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user",width:640,height:640}}).then(i).catch(function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(i).catch(function(){})})}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){var e=this.socket,t=this.props,n=t.hideLoading,o=t.reset;e.readyState===ke.a.CONNECTING&&n(),e.close(1e3),o()}},{key:"onMessage",value:function(e){var t,n=this,o=e.data,r=this.socket,i=this.props,a=i.addPhoto,c=i.join,s=i.movePhoto,u=i.peerJoin,l=i.peerLeave,p=i.peerSignal,f=i.removePhoto;try{t=JSON.parse(o)}catch(e){return}switch(t.type){case O:a(t.payload);break;case S:s(t.payload);break;case P:f(t.payload);break;case w:c(function(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,o;t=r,o=i[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return r}({},t.payload,{peers:t.payload.peers.map(function(e){return n.connectToPeer(e,!0)}),socket:r}));break;case E:u(this.connectToPeer(t.payload));break;case k:l(t.payload);break;case R:p(t.payload)}}},{key:"connectToPeer",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=this.socket,o=this.props,r=o.stream,i=o.peerStream;return t.connection=new je.a({initiator:e,stream:r}),t.connection.on("signal",function(e){n.send(JSON.stringify({type:"ROOM/PEER_SIGNAL",payload:{peer:t.peer,signal:e}}))}),t.connection.on("stream",function(e){return i({peer:t.peer,stream:e})}),t}},{key:"render",value:function(){return null}}])&&Pe(t.prototype,n),o&&Pe(t,o),r}();Le.propTypes={slug:Z.a.string.isRequired,stream:Z.a.oneOfType([Z.a.bool,Z.a.object]).isRequired,addPhoto:Z.a.func.isRequired,hideLoading:Z.a.func.isRequired,join:Z.a.func.isRequired,movePhoto:Z.a.func.isRequired,removePhoto:Z.a.func.isRequired,reset:Z.a.func.isRequired,peerJoin:Z.a.func.isRequired,peerLeave:Z.a.func.isRequired,peerSignal:Z.a.func.isRequired,peerStream:Z.a.func.isRequired,showLoading:Z.a.func.isRequired,startStream:Z.a.func.isRequired};var Ie=Object(u.connect)(function(e){return{stream:e.room.stream}},{addPhoto:function(e){var t=e._id,n=e.origin,o=e.photo;return{type:O,payload:{_id:t,origin:n,photo:o}}},hideLoading:l.hideLoading,join:function(e){var t=e.name,n=e.peers,o=e.photos,r=e.socket;return{type:w,payload:{name:t,peers:n,photos:o,socket:r}}},movePhoto:function(e){var t=e.origin,n=e.photo;return{type:S,payload:{origin:t,photo:n}}},removePhoto:function(e){var t=e.photo;return{type:P,payload:{photo:t}}},reset:function(){return{type:_}},peerJoin:function(e){return{type:E,payload:{peer:e}}},peerLeave:function(e){var t=e.peer;return{type:k,payload:{peer:t}}},peerSignal:function(e){var t=e.peer,n=e.signal;return{type:R,payload:{peer:t,signal:n}}},peerStream:function(e){var t=e.peer,n=e.stream;return{type:j,payload:{peer:t,stream:n}}},showLoading:l.showLoading,startStream:function(e){return{type:x,payload:{stream:e}}}})(Le),Me=$.a.div.withConfig({displayName:"peers__Listing",componentId:"j59ndp-0"})(["position:absolute;top:100px;right:0;> img,> div > video{display:block;background:#000;width:100px;height:100px;vertical-align:middle;box-shadow:0 0 10px rgba(0,0,0,.5);}"]),Ae=function(e){var t=e.peers;return c.a.createElement(Me,null,t.map(function(e){var t=e._id,n=e.name,o=e.peer,r=e.video;return r&&r.srcObject.getVideoTracks().length?c.a.createElement(ae,{key:o,video:r}):c.a.createElement("img",{key:o,alt:n,src:"".concat(m.baseURL,"user/").concat(t,"/photo?auth=").concat(m.token)})}))};Ae.propTypes={peers:Z.a.arrayOf(Z.a.shape({name:Z.a.string.isRequired,peer:Z.a.string.isRequired,video:Z.a.object})).isRequired};var qe=Object(u.connect)(function(e){return{peers:e.room.peers}})(Ae),Ne=function(e){var t=e.match.params.slug;return c.a.createElement("div",null,c.a.createElement(Ee,null),c.a.createElement(Ie,{slug:t}),c.a.createElement(qe,null))};Ne.propTypes={match:Z.a.shape({params:Z.a.shape({slug:Z.a.string.isRequired}).isRequired}).isRequired};var Ce=Ne,We=n("2iEm");function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ze(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ue(e,t){return!t||"object"!==De(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Be(e,t){return(Be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Je=$.a.div.withConfig({displayName:"rooms__Listing",componentId:"tnos5q-0"})(["display:flex;flex-direction:column;align-items:center;width:512px;margin:0 auto;background:#fff;> a{display:flex;box-sizing:border-box;width:100%;align-items:center;justify-content:space-between;font-size:1.5em;padding:0.5rem 1rem;color:#000;text-decoration:none;&:hover{background:#bbb;}}> h1{box-sizing:border-box;width:100%;margin:0 0 1rem;padding:1rem;border-bottom:1px solid #aaa;}"]),He=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ue(this,Fe(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Be(e,t)}(t,i["PureComponent"]),n=t,(o=[{key:"componentDidMount",value:function(){(0,this.props.fetch)()}},{key:"render",value:function(){var e=this.props.list;return c.a.createElement(Je,null,c.a.createElement("h1",null,"Rooms"),e.map(function(e){var t=e.name,n=e.peers,o=e.slug;return c.a.createElement(We.a,{key:o,to:{pathname:"r/".concat(o)}},c.a.createElement("strong",null,t),c.a.createElement(h.Translate,{count:n,value:"Rooms.peers"}))}))}}])&&ze(n.prototype,o),r&&ze(n,r),t}();He.propTypes={list:Z.a.arrayOf(Z.a.shape({name:Z.a.string.isRequired,peers:Z.a.number.isRequired,slug:Z.a.string.isRequired})).isRequired,fetch:Z.a.func.isRequired};var Ge=Object(u.connect)(function(e){return{list:e.rooms.list}},{fetch:function(){return{type:"ROOMS/FETCH",payload:m.fetch({endpoint:"rooms"})}}})(He),Ke=n("O1PE"),Ve=$.a.button.withConfig({displayName:"button",componentId:"sc-182fno4-0"})(["display:flex;align-items:center;justify-content:center;padding:0.5rem 1rem;margin:0;background-color:",";color:",";border:1px solid #151515;border-radius:2px;outline:0;font-family:inherit;font-size:inherit;font-weight:700;transition:background-color ease-out .2s,opacity ease-out .2s;will-change:background-color,opacity;cursor:pointer;> span{margin-left:0.5rem;}&:hover{background-color:",";}"],function(e){return e.primary?"#eee":"#333"},function(e){return e.primary?"#333":"#eee"},function(e){return e.primary?"#fff":"#555"});function Xe(e){return(Xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ye(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Qe(e){return(Qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $e(e,t){return($e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var et=$.a.div.withConfig({displayName:"login__Wrapper",componentId:"iowkj6-0"})(["display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;"]),tt=$.a.div.withConfig({displayName:"login__Box",componentId:"iowkj6-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;background:#bebebe;border:1px solid #000;padding:3rem 6rem;> button{width:100%;font-size:1rem;align-items:center;justify-content:flex-start;> svg{font-size:2rem;margin-right:0.75rem;}}"]),nt=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(t=!(o=Qe(r).call(this,e))||"object"!==Xe(o)&&"function"!=typeof o?Ze(n):o).loginWithGoogle=t.loginWithGoogle.bind(Ze(t)),t.onMessage=t.onMessage.bind(Ze(t)),t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$e(e,t)}(r,i["PureComponent"]),t=r,(n=[{key:"componentDidMount",value:function(){window.addEventListener("message",this.onMessage,!1)}},{key:"componentWillUnmount",value:function(){var e=this.popupWatcher;window.removeEventListener("message",this.onMessage),e&&(clearInterval(e),delete this.popupWatcher)}},{key:"onMessage",value:function(e){var t=e.origin,n=e.data.session,o=this.popupWatcher,r=this.props.refresh;0===m.baseURL.indexOf(t)&&(clearInterval(o),delete this.popupWatcher,n&&r(n))}},{key:"loginWithGoogle",value:function(e){var t=this,n=e.screenX,o=e.screenY,r=(n||window.screen.width/2)-256,i=(o||window.screen.height/2)-256,a=window.open("".concat(m.baseURL,"user/google"),"loginWithGoogle","width=".concat(512,",height=").concat(512,",top=").concat(i,",left=").concat(r));this.popupWatcher&&clearInterval(this.popupWatcher),this.popupWatcher=setInterval(function(){if(!a.window)return clearInterval(t.popupWatcher),void delete t.popupWatcher;a.postMessage(!0,m.baseURL)},100)}},{key:"render",value:function(){return c.a.createElement(et,null,c.a.createElement(tt,null,c.a.createElement(Ve,{type:"button",onClick:this.loginWithGoogle},c.a.createElement(Ke.TiSocialGooglePlus,null),c.a.createElement(h.Translate,{value:"User.signIn"}))))}}])&&Ye(t.prototype,n),o&&Ye(t,o),r}();nt.propTypes={refresh:Z.a.func.isRequired};var ot=Object(u.connect)(function(){return{}},{refresh:T})(nt),rt=$.a.div.withConfig({displayName:"sc-404__Wrapper",componentId:"ga9xrh-0"})(["display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;"]),it=$.a.div.withConfig({displayName:"sc-404__Status",componentId:"ga9xrh-1"})(["font-size:6em;line-height:0.8em;color:#656565;margin-bottom:2rem;"]),at=$.a.div.withConfig({displayName:"sc-404__Description",componentId:"ga9xrh-2"})(["font-size:1.5em;"]),ct=$.a.div.withConfig({displayName:"sc-404__Alternative",componentId:"ga9xrh-3"})(["margin:2rem 0 4rem;> a{text-decoration:none;font-size:1.2em;}"]),st=function(){return c.a.createElement(rt,null,c.a.createElement(it,null,"404"),c.a.createElement(at,null,c.a.createElement(h.Translate,{value:"NotFound.description"})),c.a.createElement(ct,null,c.a.createElement(We.a,{to:{pathname:"/"}},c.a.createElement(Ve,{type:"button",primary:!0},c.a.createElement(Ke.TiArrowBack,null),c.a.createElement(h.Translate,{value:"NotFound.goBack"})))))};function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function lt(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var pt,ft,dt,ht,yt=Object(u.connect)(function(e){return{isAuth:e.session.isAuth}})(function(e){var t=e.component,n=e.isAuth,o=e.requiresAuth,r=e.requiresNoAuth,i=lt(e,["component","isAuth","requiresAuth","requiresNoAuth"]),a=o&&!n||r&&n;return c.a.createElement(V.a,ut({},i,{render:function(e){return a?c.a.createElement(X.a,{to:n?"/":"/login"}):c.a.createElement(t,e)}}))}),mt=function(){return c.a.createElement(de,null,c.a.createElement(Y.a,null,c.a.createElement(X.a,{exact:!0,from:"/",to:"/rooms"}),c.a.createElement(yt,{exact:!0,path:"/(r|room)/:slug",component:Ce,requiresAuth:!0}),c.a.createElement(yt,{exact:!0,path:"/rooms",component:Ge,requiresAuth:!0}),c.a.createElement(yt,{exact:!0,path:"/login",component:ot,requiresNoAuth:!0}),c.a.createElement(yt,{path:"*",component:st})))},gt=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,a.d),vt=Object(a.e)(K,{},gt(Object(a.a)(d.a,s.a,Object(l.loadingBarMiddleware)())));pt=vt,ft=localStorage.getItem("BABELCHAT::LOCALE"),dt=((window.navigator.languages?window.navigator.languages[0]:null)||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage||"en").substr(0,2).toLowerCase(),ht="en",~M.indexOf(ft)?ht=ft:~M.indexOf(dt)&&(ht=dt),Object(h.syncTranslationWithStore)(pt),pt.dispatch(Object(h.loadTranslations)(A)),pt.dispatch(Object(h.setLocale)(ht)),vt.getState().session.isAuth&&vt.dispatch(T());var bt=Object(o.a)({basename:"/"}),Ot=document.getElementById("mount");Object(r.render)(c.a.createElement(u.Provider,{store:vt},c.a.createElement(f.a,{history:bt},c.a.createElement(mt,null))),Ot),window.addEventListener("contextmenu",function(e){return e.preventDefault()},!1)},p2bk:function(e,t,n){}},[[0,1,2]]]);
//# sourceMappingURL=main.5bce3ed50f89feb00f0d1b298d560c74.js.map