(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{0:function(e,t,n){n("55Il"),n("p2bk"),e.exports=n("7RL8")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"7RL8":function(e,t,n){"use strict";n.r(t);var o=n("YHGo"),i=n("q1tI"),c=n.n(i),r=n("i8i4"),a=n("ANjH"),s=n("Igns"),u=n("/MKj"),l=n("gyEF"),p=n.n(l),f=n("aJ4A"),d=n("sINF"),h=n("N2Rb");function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseURL="https://api.babelchat.tk/"}var t,n,o;return t=e,(n=[{key:"fetch",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){var t=e.body,n=e.endpoint,o=e.headers,r=void 0===o?{}:o,i=e.method,a=void 0===i?"GET":i,c=this.authorization,s=this.baseURL;return c&&(r.Authorization=c),!t||t instanceof FormData||(t=JSON.stringify(t),r["Content-Type"]="application/json"),fetch("".concat(s).concat(n),{body:t,headers:r,method:a}).then(function(e){var t=e.headers,n=e.status;if(n<200||400<=n)throw new Error(n);switch((t.get("Content-Type")||"").split(";")[0]){case"text/plain":return e.arrayBuffer();case"application/json":return e.json();default:return e}})})},{key:"setAuthorization",value:function(e){e?this.authorization="Bearer ".concat(e):delete this.authorization,this.token=e}}])&&y(t.prototype,n),o&&y(t,o),e}()),g="SESSION/REFRESH_FULFILLED",v="SESSION/REFRESH_REJECTED",b="SESSION/SIGNOUT",O="ROOM/ADD_PHOTO",w="ROOM/JOIN",E="ROOM/PEER_JOIN",k="ROOM/PEER_LEAVE",R="ROOM/PEER_POINTER",j="ROOM/PEER_SIGNAL",S="ROOM/PEER_STREAM",P="ROOM/MOVE_PHOTO",_="ROOM/REMOVE_PHOTO",x="ROOM/RESET",T="ROOM/STREAM_START";function I(e){return e?{type:g,payload:e}:function(e){return e({type:"SESSION/REFRESH",payload:m.fetch({endpoint:"user"})}).catch(function(){})}}n("bo1M");var L=n("wcCE");var M={en:{NotFound:{description:"This is not the web page you're looking for.",goBack:"Take me back home"},Room:{joining:"Joining room...",welcome:'Welcome to: "%{name}"'},Rooms:{peers:"%{count} peers",peers_1:"%{count} peer"},User:{signIn:"Sign-In",signOut:"Sign-Out"}},es:{NotFound:{description:"Esta no es la página que estás buscando.",goBack:"Vplver al inicio"},Room:{joining:"Entrando en la habitación...",welcome:'Bienvenido a: "%{name}"'},Rooms:{peers:"%{count} personas",peers_1:"%{count} persona"},User:{signIn:"Iniciar Sesión",signOut:"Cerrar Sesión"}}},A=Object.keys(M),N={};A.forEach(function(e){N[e]=Object(L.recursive)(!0,M.en,M[e])});var q=n("1339"),C=n.n(q);function W(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var D=(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.promises=[],this.getPromise=this.getPromise.bind(this),this.onKey=this.onKey.bind(this),this.onPointer=this.onPointer.bind(this),this.touches=C()(window,{filtered:!0,preventSimulated:!1}).on("start",this.onPointer).on("end",this.onPointer),window.addEventListener("keydown",this.onKey,!1),window.addEventListener("keyup",this.onKey,!1)}var t,n,o;return t=e,(n=[{key:"getPromise",value:function(){var t=this.isReady,n=this.promises;return new Promise(function(e){t?e():n.push(e)})}},{key:"onFirstInteraction",value:function(){var e=this.promises;this.touches.disable(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKey),this.isReady=!0,e.forEach(function(e){return e()})}},{key:"onKey",value:function(){this.onFirstInteraction()}},{key:"onPointer",value:function(){this.onFirstInteraction()}}])&&W(t.prototype,n),o&&W(t,o),e}())).getPromise;function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(e){U(t,e,n[e])})}return t}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var B=Object(a.c)({name:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w:return t.payload.name;case x:return"";default:return e}},peers:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length?arguments[1]:void 0;switch(n.type){case w:return e.forEach(function(e){return e.connection.destroy()}),n.payload.peers;case E:return[].concat(F(e),[n.payload.peer]);case k:return e.filter(function(e){var t=e.connection;return e.peer===n.payload.peer&&(t.destroy(),!0)});case R:return e.map(function(e){return e.peer===n.payload.peer?z({},e,{pointer:n.payload.pointer}):e});case j:return e.forEach(function(e){var t=e.connection;e.peer===n.payload.peer&&t.signal(n.payload.signal)}),e;case S:return e.map(function(e){if(e.peer!==n.payload.peer)return e;var t=document.createElement("video");return t.srcObject=n.payload.stream,t.onloadedmetadata=function(){return D().then(function(){return t.play()})},z({},e,{video:t})});case T:return e.forEach(function(e){e.connection.addStream(n.payload.stream)}),e;case x:return e.forEach(function(e){return e.connection.destroy()}),[];default:return e}},photos:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w:return t.payload.photos;case O:return[].concat(F(e),[t.payload]);case P:return e.map(function(e){return e._id===t.payload.photo?z({},e,{origin:{x:t.payload.origin.x,y:t.payload.origin.y}}):e});case _:return e.filter(function(e){return e._id!==t.payload.photo});case x:return[];default:return e}},socket:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w:return t.payload.socket;case x:return!1;default:return e}},stream:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case T:return t.payload.stream;case x:return e&&e.getTracks().forEach(function(e){return e.stop()}),!1;default:return e}},video:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case T:var n=document.createElement("video");return n.muted=!0,n.srcObject=t.payload.stream,n.onloadedmetadata=function(){return D().then(function(){return n.play()})},n;case x:return e&&(e.srcObject=null),!1;default:return e}}}),J=Object(a.c)({list:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"ROOMS/FETCH_FULFILLED":return t.payload.sort(function(e,t){var n=e.name,o=t.name;return n.localeCompare(o)});default:return e}}}),H="BABELCHAT::SESSION",G=JSON.parse(localStorage.getItem(H)||"false");G&&m.setAuthorization(G.token);var K=Object(a.c)({isAuth:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!!G;switch((1<arguments.length?arguments[1]:void 0).type){case g:return!0;case v:case b:return!1;default:return e}},profile:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:G?G.profile:{},t=1<arguments.length?arguments[1]:void 0;switch(t.type){case g:return t.payload.profile;case v:case b:return{};default:return e}},token:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:G?G.token:"",t=1<arguments.length?arguments[1]:void 0;switch(t.type){case g:return m.setAuthorization(t.payload.token),localStorage.setItem(H,JSON.stringify(t.payload)),t.payload.token;case v:case b:return m.setAuthorization(!1),localStorage.removeItem(H),"";default:return e}}}),V=Object(a.c)({i18n:h.i18nReducer,loadingBar:l.loadingBarReducer,room:B,rooms:J,session:K}),X=n("2INN"),Y=n("mf+E"),Q=n("jKe7"),Z=n("17x9"),$=n.n(Z),ee=n("vOnD");function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function oe(e,t){return!t||"object"!==te(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ae=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=oe(this,re(n).call(this,e))).dom=c.a.createRef(),t}var t,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(n,i["Component"]),t=n,(o=[{key:"componentDidMount",value:function(){var e=this.dom,t=this.props.video;e.current.appendChild(t)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.dom;return c.a.createElement("div",{ref:e})}}])&&ne(t.prototype,o),r&&ne(t,r),n}();ae.propTypes={video:$.a.object.isRequired};var ce=ae,se=ee.a.div.withConfig({displayName:"session__Wrapper",componentId:"sc-1s88h5i-0"})(["position:absolute;top:0;right:0;.toggle{> img,> div > video{background:#000;width:100px;height:100px;vertical-align:middle;box-shadow:0 0 10px rgba(0,0,0,.5);}}.menu{display:none;position:absolute;top:100%;right:0;background:#eee;border:1px solid #000;box-shadow:0 0 10px rgba(0,0,0,.5);z-index:1;> a,> span{display:block;padding:0.5rem 1rem;white-space:nowrap;}> span{color:#bebebe;border-bottom:1px solid #bebebe;}> a{text-decoration:none;cursor:pointer;}}&:hover .menu{display:block;}"]),ue=function(e){var t=e.isAuth,n=e.profile,o=e.video,r=e.signout;return t?c.a.createElement(se,null,c.a.createElement("div",{className:"toggle"},o&&o.srcObject.getVideoTracks().length?c.a.createElement(ce,{video:o}):c.a.createElement("img",{alt:n.name,src:"".concat(m.baseURL,"user/").concat(n._id,"/photo?auth=").concat(m.token)})),c.a.createElement("div",{className:"menu"},c.a.createElement("span",null,n.name),c.a.createElement("a",{onClick:r},c.a.createElement(h.Translate,{value:"User.signOut"})))):null};ue.propTypes={isAuth:$.a.bool.isRequired,profile:$.a.shape({_id:$.a.string,name:$.a.string}).isRequired,video:$.a.oneOfType([$.a.bool,$.a.object]).isRequired,signout:$.a.func.isRequired};var le=Object(u.connect)(function(e){var t=e.session;return{isAuth:t.isAuth,profile:t.profile,video:e.room.video}},{signout:function(){return{type:b}}})(ue),pe=ee.a.div.withConfig({displayName:"layout__Route",componentId:"wopef3-0"})(["display:flex;height:100vh;"]),fe={backgroundColor:"#bebebe"},de=function(e){var t=e.children;return c.a.createElement("div",null,c.a.createElement(p.a,{style:fe}),c.a.createElement(le,null),c.a.createElement(pe,null,t))};de.propTypes={children:$.a.node.isRequired};var he=de,ye=n("fWck");function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ve(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ee=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(t=!(o=be(r).call(this,e))||"object"!==me(o)&&"function"!=typeof o?Oe(n):o).dom=c.a.createRef(),t.onDrop=t.onDrop.bind(Oe(t)),t.onPointerWheel=t.onPointerWheel.bind(Oe(t)),t.onResize=t.onResize.bind(Oe(t)),t.origin={x:0,y:0},t.scale=1,t.peers={},t.photos={},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&we(e,t)}(r,i["Component"]),t=r,o=[{key:"onDragOver",value:function(e){e.preventDefault()}}],(n=[{key:"componentDidMount",value:function(){var e=this.dom.current;this.loadPhotos(this.props),e.addEventListener("dragover",r.onDragOver,!1),e.addEventListener("drop",this.onDrop,!1),window.addEventListener("resize",this.onResize,!1),this.touches=C()(window,{filtered:!0,preventSimulated:!1}).on("start",this.onPointerStart.bind(this)).on("move",this.onPointerMove.bind(this)).on("end",this.onPointerEnd.bind(this)),Object(ye.addWheelListener)(window,this.onPointerWheel),this.onResize()}},{key:"componentWillReceiveProps",value:function(e){this.loadPhotos(e),this.draw(e)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){var e=this.dom.current;this.touches.disable(),e.removeEventListener("dragover",r.onDragOver),e.removeEventListener("drop",this.onDrop),Object(ye.removeWheelListener)(window,this.onPointerWheel),window.removeEventListener("resize",this.onResize)}},{key:"onDrop",value:function(e){var t=this.props.socket,n=e.clientX,o=e.clientY,r=ge(e.dataTransfer.files,1)[0];if(e.preventDefault(),r){var i=this.getPointer([n,o]),a=new FileReader;a.onload=function(){t.send(JSON.stringify({type:"ROOM/ADD_PHOTO",payload:{origin:i,photo:a.result.substr(a.result.indexOf("base64")+7)}}))},a.readAsDataURL(r)}}},{key:"onPointerStart",value:function(e,t){var a=this,n=this.props,o=n.photos,r=n.socket,i=e.button||0,c=this.getPointer(t),s=c.x,u=c.y,l=o.filter(function(e){var t=e._id,n=e.origin,o=a.photos[t];if(!o)return!1;var r=o.width,i=o.height;return!(s<n.x||s>n.x+r||u<n.y||u>n.y+i)});l.reverse();var p=l[0];0===i&&!p||2===i?this.dragging={canvas:t}:0===i&&p&&(e.shiftKey?r.send(JSON.stringify({type:"ROOM/REMOVE_PHOTO",payload:{photo:p._id}})):this.dragging={offset:{x:p.origin.x-s,y:p.origin.y-u},photo:p})}},{key:"onPointerMove",value:function(e,t){var n=this.dragging,o=this.origin,r=this.scale,i=this.props.peers,a=this.getPointer(t),c=a.x,s=a.y;if(i.forEach(function(e){var t=e.connection;t.destroyed||t.send(new Int32Array([c,s]))}),n){if(n.canvas&&(o.x+=(t[0]-n.canvas[0])/r,o.y+=(t[1]-n.canvas[1])/r,n.canvas=t),n.photo){var u=n.offset,l=n.photo;l.origin.x=c+u.x,l.origin.y=s+u.y}this.draw()}}},{key:"onPointerEnd",value:function(){var e=this.dragging,t=this.props.socket;if(e&&(delete this.dragging,e.photo)){var n=e.photo,o=n._id,r=n.origin;t.send(JSON.stringify({type:"ROOM/MOVE_PHOTO",payload:{origin:r,photo:o}}))}}},{key:"onPointerWheel",value:function(e){var t=e.deltaY,n=1+.075*Math.min(Math.max(-t,-1),1);this.scale*=n,this.scale=Math.min(Math.max(this.scale,.25),2),this.draw()}},{key:"onResize",value:function(){var e=this.dom.current;e.width=window.innerWidth,e.height=window.innerHeight,this.draw()}},{key:"getPointer",value:function(e){var t=ge(e,2),n=t[0],o=t[1],r=this.dom.current,i=this.origin,a=this.scale;return{x:Math.round((n-.5*r.width)/a-i.x),y:Math.round((o-.5*r.height)/a-i.y)}}},{key:"loadPhotos",value:function(e){var r=this,t=e.peers,n=e.photos;t.forEach(function(e){var t=e._id;if(!r.peers[t]){var n=new Image;n.src="".concat(m.baseURL,"user/").concat(t,"/photo?auth=").concat(m.token),n.onload=function(){return r.draw()},r.peers[t]=n}}),n.forEach(function(e){var t=e._id,n=e.photo;if(!r.photos[t]){var o=new Image;o.src="data:image/jpeg;base64,".concat(n),o.onload=function(){return r.draw()},r.photos[t]=o}})}},{key:"draw",value:function(e){var c=this,t=this.dom.current,n=this.origin,s=this.scale,o=e||this.props,r=o.name,i=o.peers,a=o.photos,u=t.getContext("2d");t.width=t.width,u.translate(.5*t.width,.5*t.height),u.scale(s,s),u.translate(n.x,n.y),u.textAlign="center",u.textBaseline="middle",u.fillStyle="#999",u.font="32px Arial",u.fillText(h.I18n.t("Room.".concat(r?"welcome":"joining"),{name:r}),0,0),a.forEach(function(e){var t=e._id,n=e.origin;c.photos[t]&&u.drawImage(c.photos[t],n.x,n.y)}),i.forEach(function(e){var t=e._id,n=e.pointer;if(c.peers[t]&&n){var o=ge(n,2),r=o[0],i=o[1],a=24/s;u.beginPath(),u.arc(r,i,a,0,2*Math.PI),u.fill(),u.save(),u.beginPath(),u.arc(r,i,.9*a,0,2*Math.PI),u.clip(),u.drawImage(c.peers[t],r-a,i-a,2*a,2*a),u.restore()}})}},{key:"render",value:function(){var e=this.dom;return c.a.createElement("canvas",{ref:e})}}])&&ve(t.prototype,n),o&&ve(t,o),r}();Ee.propTypes={name:$.a.string.isRequired,peers:$.a.arrayOf($.a.shape({_id:$.a.string.isRequired,connection:$.a.object.isRequired,pointer:$.a.arrayOf($.a.number)})).isRequired,photos:$.a.arrayOf($.a.shape({origin:$.a.shape({x:$.a.number.isRequired,y:$.a.number.isRequired}),photo:$.a.string.isRequired})).isRequired,socket:$.a.oneOfType([$.a.bool,$.a.object]).isRequired};var ke=Object(u.connect)(function(e){var t=e.room;return{name:t.name,peers:t.peers,photos:t.photos,socket:t.socket}})(Ee),Re=n("9C/b"),je=n("TX9C"),Se=n("BRrH"),Pe=n.n(Se);function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Te(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Me(e,t){return(Me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ae=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(t=!(o=Ie(r).call(this,e))||"object"!==_e(o)&&"function"!=typeof o?Le(n):o).onMessage=t.onMessage.bind(Le(t)),t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Me(e,t)}(r,i["Component"]),t=r,(n=[{key:"componentWillMount",value:function(){var e=this.props,t=e.match.params.slug,n=e.startStream;this.connectToServer(t),navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user",width:640,height:640}}).then(n).catch(function(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(n).catch(function(){})})}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.slug,n=this.props,o=n.match.params.slug,r=n.reset;o!==t&&(r(),this.connectToServer(t))}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){var e=this.socket,t=this.props,n=t.hideLoading,o=t.reset;e.readyState===je.a.CONNECTING&&n(),e.close(1e3),o()}},{key:"onMessage",value:function(e){var t,n=this,o=e.data,r=this.socket,i=this.props,a=i.addPhoto,c=i.history,s=i.join,u=i.movePhoto,l=i.peerJoin,p=i.peerLeave,f=i.peerSignal,d=i.removePhoto;try{t=JSON.parse(o)}catch(e){return}switch(t.type){case O:a(t.payload);break;case P:u(t.payload);break;case _:d(t.payload);break;case w:s(function(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,o;t=r,o=i[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return r}({},t.payload,{peers:t.payload.peers.map(function(e){return n.connectToPeer(e,!0)}),socket:r}));break;case E:l(this.connectToPeer(t.payload));break;case k:p(t.payload);break;case j:f(t.payload);break;case"ROOM/ERROR":case"ROOM/NOT_FOUND":c.replace("/404")}}},{key:"connectToServer",value:function(e){var t=this,n=this.props,o=n.hideLoading,r=n.showLoading;this.socket&&(this.socket.readyState===je.a.CONNECTING&&o(),this.socket.close(1e3)),r(),this.socket=new je.a("".concat(m.baseURL.replace(/http/,"ws"),"room/").concat(e),m.token),this.socket.onopen=function(){t.socket.onclose=null,t.socket.onerror=null,o()},this.socket.onmessage=this.onMessage}},{key:"connectToPeer",value:function(n){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],t=this.socket,o=this.props,r=o.stream,i=o.peerPointer,a=o.peerStream;return n.connection=new Pe.a({initiator:e,stream:r}),n.connection.on("signal",function(e){t.send(JSON.stringify({type:"ROOM/PEER_SIGNAL",payload:{peer:n.peer,signal:e}}))}),n.connection.on("data",function(e){var t=e.buffer;return i({peer:n.peer,pointer:xe(new Int32Array(t))})}),n.connection.on("stream",function(e){return a({peer:n.peer,stream:e})}),n}},{key:"render",value:function(){return null}}])&&Te(t.prototype,n),o&&Te(t,o),r}();Ae.propTypes={history:$.a.object.isRequired,match:$.a.shape({params:$.a.shape({slug:$.a.string.isRequired}).isRequired}).isRequired,stream:$.a.oneOfType([$.a.bool,$.a.object]).isRequired,addPhoto:$.a.func.isRequired,hideLoading:$.a.func.isRequired,join:$.a.func.isRequired,movePhoto:$.a.func.isRequired,removePhoto:$.a.func.isRequired,reset:$.a.func.isRequired,peerJoin:$.a.func.isRequired,peerLeave:$.a.func.isRequired,peerPointer:$.a.func.isRequired,peerSignal:$.a.func.isRequired,peerStream:$.a.func.isRequired,showLoading:$.a.func.isRequired,startStream:$.a.func.isRequired};var Ne=Object(Re.a)(Object(u.connect)(function(e){return{stream:e.room.stream}},{addPhoto:function(e){var t=e._id,n=e.origin,o=e.photo;return{type:O,payload:{_id:t,origin:n,photo:o}}},hideLoading:l.hideLoading,join:function(e){var t=e.name,n=e.peers,o=e.photos,r=e.socket;return{type:w,payload:{name:t,peers:n,photos:o,socket:r}}},movePhoto:function(e){var t=e.origin,n=e.photo;return{type:P,payload:{origin:t,photo:n}}},removePhoto:function(e){var t=e.photo;return{type:_,payload:{photo:t}}},reset:function(){return{type:x}},peerJoin:function(e){return{type:E,payload:{peer:e}}},peerLeave:function(e){var t=e.peer;return{type:k,payload:{peer:t}}},peerPointer:function(e){var t=e.peer,n=e.pointer;return{type:R,payload:{peer:t,pointer:n}}},peerSignal:function(e){var t=e.peer,n=e.signal;return{type:j,payload:{peer:t,signal:n}}},peerStream:function(e){var t=e.peer,n=e.stream;return{type:S,payload:{peer:t,stream:n}}},showLoading:l.showLoading,startStream:function(e){return{type:T,payload:{stream:e}}}})(Ae)),qe=ee.a.div.withConfig({displayName:"peers__Listing",componentId:"j59ndp-0"})(["position:absolute;top:100px;right:0;> img,> div > video{display:block;background:#000;width:100px;height:100px;vertical-align:middle;box-shadow:0 0 10px rgba(0,0,0,.5);}"]),Ce=function(e){var t=e.peers;return c.a.createElement(qe,null,t.map(function(e){var t=e._id,n=e.name,o=e.peer,r=e.video;return r&&r.srcObject.getVideoTracks().length?c.a.createElement(ce,{key:o,video:r}):c.a.createElement("img",{key:o,alt:n,src:"".concat(m.baseURL,"user/").concat(t,"/photo?auth=").concat(m.token)})}))};Ce.propTypes={peers:$.a.arrayOf($.a.shape({name:$.a.string.isRequired,peer:$.a.string.isRequired,video:$.a.object})).isRequired};var We=Object(u.connect)(function(e){return{peers:e.room.peers}})(Ce),De=function(){return c.a.createElement("div",null,c.a.createElement(ke,null),c.a.createElement(Ne,null),c.a.createElement(We,null))},ze=n("2iEm");function Ue(e){return(Ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Be(e,t){return!t||"object"!==Ue(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function Je(e){return(Je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function He(e,t){return(He=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ge=ee.a.div.withConfig({displayName:"rooms__Listing",componentId:"tnos5q-0"})(["display:flex;flex-direction:column;align-items:center;width:512px;margin:0 auto;background:#fff;> a{display:flex;box-sizing:border-box;width:100%;align-items:center;justify-content:space-between;font-size:1.5em;padding:0.5rem 1rem;color:#000;text-decoration:none;&:hover{background:#bbb;}}> h1{box-sizing:border-box;width:100%;margin:0 0 1rem;padding:1rem;border-bottom:1px solid #aaa;}"]),Ke=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Be(this,Je(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}(t,i["PureComponent"]),n=t,(o=[{key:"componentDidMount",value:function(){(0,this.props.fetch)()}},{key:"render",value:function(){var e=this.props.list;return c.a.createElement(Ge,null,c.a.createElement("h1",null,"Rooms"),e.map(function(e){var t=e.name,n=e.peers,o=e.slug;return c.a.createElement(ze.a,{key:o,to:{pathname:"/".concat(o)}},c.a.createElement("strong",null,t),c.a.createElement(h.Translate,{count:n,value:"Rooms.peers"}))}))}}])&&Fe(n.prototype,o),r&&Fe(n,r),t}();Ke.propTypes={list:$.a.arrayOf($.a.shape({name:$.a.string.isRequired,peers:$.a.number.isRequired,slug:$.a.string.isRequired})).isRequired,fetch:$.a.func.isRequired};var Ve=Object(u.connect)(function(e){return{list:e.rooms.list}},{fetch:function(){return{type:"ROOMS/FETCH",payload:m.fetch({endpoint:"rooms"})}}})(Ke),Xe=n("O1PE"),Ye=ee.a.button.withConfig({displayName:"button",componentId:"sc-182fno4-0"})(["display:flex;align-items:center;justify-content:center;padding:0.5rem 1rem;margin:0;background-color:",";color:",";border:1px solid #151515;border-radius:2px;outline:0;font-family:inherit;font-size:inherit;font-weight:700;transition:background-color ease-out .2s,opacity ease-out .2s;will-change:background-color,opacity;cursor:pointer;> span{margin-left:0.5rem;}&:hover{background-color:",";}"],function(e){return e.primary?"#eee":"#333"},function(e){return e.primary?"#333":"#eee"},function(e){return e.primary?"#fff":"#555"});function Qe(e){return(Qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ze(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function $e(e){return($e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function et(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tt(e,t){return(tt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var nt=ee.a.div.withConfig({displayName:"login__Wrapper",componentId:"iowkj6-0"})(["display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;"]),ot=ee.a.div.withConfig({displayName:"login__Box",componentId:"iowkj6-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;background:#bebebe;border:1px solid #000;padding:3rem 6rem;> button{width:100%;font-size:1rem;align-items:center;justify-content:flex-start;> svg{font-size:2rem;margin-right:0.75rem;}}"]),rt=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=this,(t=!(o=$e(r).call(this,e))||"object"!==Qe(o)&&"function"!=typeof o?et(n):o).loginWithGoogle=t.loginWithGoogle.bind(et(t)),t.onMessage=t.onMessage.bind(et(t)),t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&tt(e,t)}(r,i["PureComponent"]),t=r,(n=[{key:"componentDidMount",value:function(){window.addEventListener("message",this.onMessage,!1)}},{key:"componentWillUnmount",value:function(){var e=this.popupWatcher;window.removeEventListener("message",this.onMessage),e&&(clearInterval(e),delete this.popupWatcher)}},{key:"onMessage",value:function(e){var t=e.origin,n=e.data.session,o=this.popupWatcher,r=this.props.refresh;0===m.baseURL.indexOf(t)&&(clearInterval(o),delete this.popupWatcher,n&&r(n))}},{key:"loginWithGoogle",value:function(e){var t=this,n=e.screenX,o=e.screenY,r=(n||window.screen.width/2)-256,i=(o||window.screen.height/2)-256,a=window.open("".concat(m.baseURL,"user/google"),"loginWithGoogle","width=".concat(512,",height=").concat(512,",top=").concat(i,",left=").concat(r));this.popupWatcher&&clearInterval(this.popupWatcher),this.popupWatcher=setInterval(function(){if(!a.window)return clearInterval(t.popupWatcher),void delete t.popupWatcher;a.postMessage(!0,m.baseURL)},100)}},{key:"render",value:function(){return c.a.createElement(nt,null,c.a.createElement(ot,null,c.a.createElement(Ye,{type:"button",onClick:this.loginWithGoogle},c.a.createElement(Xe.TiSocialGooglePlus,null),c.a.createElement(h.Translate,{value:"User.signIn"}))))}}])&&Ze(t.prototype,n),o&&Ze(t,o),r}();rt.propTypes={refresh:$.a.func.isRequired};var it=Object(u.connect)(function(){return{}},{refresh:I})(rt),at=ee.a.div.withConfig({displayName:"sc-404__Wrapper",componentId:"ga9xrh-0"})(["display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;"]),ct=ee.a.div.withConfig({displayName:"sc-404__Status",componentId:"ga9xrh-1"})(["font-size:6em;line-height:0.8em;color:#656565;margin-bottom:2rem;"]),st=ee.a.div.withConfig({displayName:"sc-404__Description",componentId:"ga9xrh-2"})(["font-size:1.5em;"]),ut=ee.a.div.withConfig({displayName:"sc-404__Alternative",componentId:"ga9xrh-3"})(["margin:2rem 0 4rem;> a{text-decoration:none;font-size:1.2em;}"]),lt=function(){return c.a.createElement(at,null,c.a.createElement(ct,null,"404"),c.a.createElement(st,null,c.a.createElement(h.Translate,{value:"NotFound.description"})),c.a.createElement(ut,null,c.a.createElement(ze.a,{to:{pathname:"/"}},c.a.createElement(Ye,{type:"button",primary:!0},c.a.createElement(Xe.TiArrowBack,null),c.a.createElement(h.Translate,{value:"NotFound.goBack"})))))};function pt(){return(pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function ft(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var dt,ht,yt,mt,gt=Object(u.connect)(function(e){return{isAuth:e.session.isAuth}})(function(e){var t=e.component,n=e.isAuth,o=e.requiresAuth,r=e.requiresNoAuth,i=ft(e,["component","isAuth","requiresAuth","requiresNoAuth"]),a=o&&!n||r&&n;return c.a.createElement(X.a,pt({},i,{render:function(e){return a?c.a.createElement(Y.a,{to:n?"/":"/login"}):c.a.createElement(t,e)}}))}),vt=function(){return c.a.createElement(he,null,c.a.createElement(Q.a,null,c.a.createElement(gt,{exact:!0,path:"/404",component:lt}),c.a.createElement(gt,{exact:!0,path:"/login",component:it,requiresNoAuth:!0}),c.a.createElement(gt,{exact:!0,path:"/rooms",component:Ve,requiresAuth:!0}),c.a.createElement(gt,{exact:!0,path:"/:slug",component:De,requiresAuth:!0}),c.a.createElement(Y.a,{exact:!0,from:"/",to:"/rooms"}),c.a.createElement(gt,{path:"*",component:lt})))},bt=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,a.d),Ot=Object(a.e)(V,{},bt(Object(a.a)(d.a,s.a,Object(l.loadingBarMiddleware)())));dt=Ot,ht=localStorage.getItem("BABELCHAT::LOCALE"),yt=((window.navigator.languages?window.navigator.languages[0]:null)||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage||"en").substr(0,2).toLowerCase(),mt="en",~A.indexOf(ht)?mt=ht:~A.indexOf(yt)&&(mt=yt),Object(h.syncTranslationWithStore)(dt),dt.dispatch(Object(h.loadTranslations)(N)),dt.dispatch(Object(h.setLocale)(mt)),Ot.getState().session.isAuth&&Ot.dispatch(I());var wt=Object(o.a)({basename:"/"}),Et=document.getElementById("mount");Object(r.render)(c.a.createElement(u.Provider,{store:Ot},c.a.createElement(f.a,{history:wt},c.a.createElement(vt,null))),Et),window.addEventListener("contextmenu",function(e){return e.preventDefault()},!1)},p2bk:function(e,t,n){}},[[0,1,2]]]);
//# sourceMappingURL=main.e1226553e497bed42b0edb1314d2f89c.js.map