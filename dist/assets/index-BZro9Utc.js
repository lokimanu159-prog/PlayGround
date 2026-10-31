(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Yo="187",Md=0,Dl=1,yd=2,Sa=1,$o=2,Es=3,ui=0,jt=1,ut=2,ts=0,Dn=1,li=2,Nl=3,Ul=4,Sd=5,es=100,bd=101,wd=102,Ed=103,Td=104,Ad=200,Rd=201,Cd=202,Pd=203,Jc=204,Zc=205,Ld=206,Id=207,Dd=208,Nd=209,Ud=210,Fd=211,Od=212,Bd=213,zd=214,$r=0,Kr=1,Jr=2,Is=3,Zr=4,Qr=5,jr=6,eo=7,Qc=0,kd=1,Gd=2,Yn=0,jc=1,eh=2,th=3,$a=4,nh=5,ih=6,sh=7,ah=300,is=301,Ds=302,dr=303,ur=304,to=1e3,Xn=1001,no=1002,Gt=1003,Hd=1004,Vs=1005,nn=1006,fr=1007,ci=1008,ln=1009,rh=1010,oh=1011,Ns=1012,Ko=1013,Fn=1014,Pn=1015,On=1016,Jo=1017,Zo=1018,ss=1020,lh=35902,ch=35899,hh=1021,dh=1022,Ln=1023,fi=1026,hi=1027,uh=1028,Qo=1029,Di=1030,jo=1031,el=1033,ba=33776,wa=33777,Ea=33778,Ta=33779,io=35840,so=35841,ao=35842,ro=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,Pa=37490,fo=37491,po=37808,mo=37809,go=37810,_o=37811,xo=37812,vo=37813,Mo=37814,yo=37815,So=37816,bo=37817,wo=37818,Eo=37819,To=37820,Ao=37821,Ro=36492,Co=36494,Po=36495,Lo=36283,Io=36284,La=36285,Do=36286,Vd=3200,No=0,Wd=1,oi="",Qt="srgb",Ia="srgb-linear",Da="linear",rt="srgb",pr=7680,Xd=519,qd=512,Yd=513,$d=514,fh=515,Kd=516,Jd=517,ph=518,mh=519,gh=35044,Fl="300 es",Sn=2e3,Us=2001;function Zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){const i=Na("canvas");return i.style.display="block",i}const Ol={};function Ua(...i){const e="THREE."+i.shift();console.log(e,...i)}function _h(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Fe(...i){i=_h(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=_h(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Aa(...i){const e=i.join(" ");e in Ol||(Ol[e]=!0,Fe(...i))}function jd(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const eu={[$r]:$r,[Jr]:jr,[Zr]:Zr,[Is]:Qr,[Kr]:Kr,[jr]:Jr,[eo]:eo,[Qr]:Is};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,Uo=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function tu(i,e){return(i%e+e)%e}function gr(i,e,t){return(1-t)*i+t*e}function nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ka(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xh(i,e){if(e.constructor===Float32Array)return i;const t=Ka(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function vh(i,e){if(e.constructor===Float32Array)return i;const t=Ka(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const xl=class xl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xl.prototype.isVector2=!0;let be=xl;class os{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];if(f!==_||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*_;p<0&&(u=-u,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+_*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+_*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=a[r],u=a[r+1],d=a[r+2],g=a[r+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(a/2),u=l(n/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vl=class vl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),f=2*(a*n-r*t);return this.x=t+l*c+r*f-o*h,this.y=n+l*h+o*c-a*f,this.z=s+l*f+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vl.prototype.isVector3=!0;let L=vl;const _r=new L,Bl=new os,Ml=class Ml{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],w=s[4],b=s[7],R=s[2],T=s[5],x=s[8];return a[0]=r*_+o*v+l*R,a[3]=r*p+o*w+l*T,a[6]=r*m+o*b+l*x,a[1]=c*_+h*v+f*R,a[4]=c*p+h*w+f*T,a[7]=c*m+h*b+f*x,a[2]=u*_+d*v+g*R,a[5]=u*p+d*w+g*T,a[8]=u*m+d*b+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*r-o*c,u=o*l-h*a,d=c*a-r*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*r)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*a-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Aa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xr.makeScale(e,t)),this}rotate(e){return Aa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return Aa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ml.prototype.isMatrix3=!0;let Be=Ml;const xr=new Be,zl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iu(){const i={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===rt&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===rt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ia]:{primaries:e,whitePoint:n,transfer:Da,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const Qe=iu();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class su{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oi===void 0&&(Oi=Na("canvas")),Oi.width=e.width,Oi.height=e.height;const s=Oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=$n(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let au=0;class tl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(vr(s[r].image)):a.push(vr(s[r]))}else a=vr(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let ru=0;const Mr=new L;class Yt extends Ui{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Xn,s=Xn,a=nn,r=ci,o=Ln,l=ln,c=Yt.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Fi(),this.name="",this.source=new tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mr).x}get height(){return this.source.getSize(Mr).y}get depth(){return this.source.getSize(Mr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case to:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case to:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=ah;Yt.DEFAULT_ANISOTROPY=1;const yl=class yl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(d+1)/2,R=(m+1)/2,T=(h+u)/4,x=(f+_)/4,y=(g+p)/4;return w>b&&w>R?w<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(w),s=T/n,a=x/n):b>R?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=T/s,a=y/s):R<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),n=x/a,s=y/a),this.set(n,s,a,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yl.prototype.isVector4=!0;let vt=yl;class ou extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=new Yt({width:e,height:t,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mh extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lu extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ya=class Ya{constructor(e,t,n,s,a,r,o,l,c,h,f,u,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,f,u,d,g,_,p)}set(e,t,n,s,a,r,o,l,c,h,f,u,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=a,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),a=1/Bi.setFromMatrixColumn(e,1).length(),r=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=r*h,d=r*f,g=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+d*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u+_*o,t[4]=g*o-d,t[8]=r*c,t[1]=r*f,t[5]=r*h,t[9]=-o,t[2]=d*o-g,t[6]=_+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u-_*o,t[4]=-r*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*h,t[9]=_-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,d=r*f,g=o*h,_=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,d=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+d,t[1]=f,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-_*f}else if(e.order==="XZY"){const u=r*l,d=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=r*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cu,e,hu)}lookAt(e,t,n){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ei.crossVectors(n,rn),ei.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ei.crossVectors(n,rn)),ei.normalize(),Ws.crossVectors(rn,ei),s[0]=ei.x,s[4]=Ws.x,s[8]=rn.x,s[1]=ei.y,s[5]=Ws.y,s[9]=rn.y,s[2]=ei.z,s[6]=Ws.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],w=n[7],b=n[11],R=n[15],T=s[0],x=s[4],y=s[8],I=s[12],C=s[1],N=s[5],B=s[9],W=s[13],U=s[2],V=s[6],q=s[10],H=s[14],se=s[3],K=s[7],te=s[11],ne=s[15];return a[0]=r*T+o*C+l*U+c*se,a[4]=r*x+o*N+l*V+c*K,a[8]=r*y+o*B+l*q+c*te,a[12]=r*I+o*W+l*H+c*ne,a[1]=h*T+f*C+u*U+d*se,a[5]=h*x+f*N+u*V+d*K,a[9]=h*y+f*B+u*q+d*te,a[13]=h*I+f*W+u*H+d*ne,a[2]=g*T+_*C+p*U+m*se,a[6]=g*x+_*N+p*V+m*K,a[10]=g*y+_*B+p*q+m*te,a[14]=g*I+_*W+p*H+m*ne,a[3]=v*T+w*C+b*U+R*se,a[7]=v*x+w*N+b*V+R*K,a[11]=v*y+w*B+b*q+R*te,a[15]=v*I+w*W+b*H+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*d-c*u,w=o*d-c*f,b=o*u-l*f,R=r*d-c*h,T=r*u-l*h,x=r*f-o*h;return t*(_*v-p*w+m*b)-n*(g*v-p*R+m*T)+s*(g*w-_*R+m*x)-a*(g*b-_*T+p*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(a*h-o*l)+s*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*o-n*r,w=t*l-s*r,b=t*c-a*r,R=n*l-s*o,T=n*c-a*o,x=s*c-a*l,y=h*_-f*g,I=h*p-u*g,C=h*m-d*g,N=f*p-u*_,B=f*m-d*_,W=u*m-d*p,U=v*W-w*B+b*N+R*C-T*I+x*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/U;return e[0]=(o*W-l*B+c*N)*V,e[1]=(s*B-n*W-a*N)*V,e[2]=(_*x-p*T+m*R)*V,e[3]=(u*T-f*x-d*R)*V,e[4]=(l*C-r*W-c*I)*V,e[5]=(t*W-s*C+a*I)*V,e[6]=(p*b-g*x-m*w)*V,e[7]=(h*x-u*b+d*w)*V,e[8]=(r*B-o*C+c*y)*V,e[9]=(n*C-t*B-a*y)*V,e[10]=(g*T-_*b+m*v)*V,e[11]=(f*b-h*T-d*v)*V,e[12]=(o*I-r*N-l*y)*V,e[13]=(t*N-n*I+s*y)*V,e[14]=(_*w-g*R-p*v)*V,e[15]=(h*R-f*w+u*v)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,f=o+o,u=a*c,d=a*h,g=a*f,_=r*h,p=r*f,m=o*f,v=l*c,w=l*h,b=l*f,R=n.x,T=n.y,x=n.z;return s[0]=(1-(_+m))*R,s[1]=(d+b)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(u+m))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(g+w)*x,s[9]=(p-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),l=Bi.set(s[8],s[9],s[10]).length();a<0&&(r=-r),xn.copy(this);const c=1/r,h=1/o,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=Sn,l=!1){const c=this.elements,h=2*a/(t-e),f=2*a/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(l)g=a/(r-a),_=r*a/(r-a);else if(o===Sn)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Us)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Sn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(l)g=1/(r-a),_=r/(r-a);else if(o===Sn)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===Us)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ya.prototype.isMatrix4=!0;let ct=Ya;const Bi=new L,xn=new ct,cu=new L(0,0,0),hu=new L(1,1,1),ei=new L,Ws=new L,rn=new L,Gl=new ct,Hl=new os;class pi{constructor(e=0,t=0,n=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let du=0;const Vl=new L,zi=new os,kn=new ct,Xs=new L,fs=new L,uu=new L,fu=new os,Wl=new L(1,0,0),Xl=new L(0,1,0),ql=new L(0,0,1),Yl={type:"added"},pu={type:"removed"},ki={type:"childadded",child:null},yr={type:"childremoved",child:null};class At extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new L,t=new pi,n=new os,s=new L(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Be}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(fs,Xs,this.up):kn.lookAt(Xs,fs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(kn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),ki.child=e,this.dispatchEvent(ki),ki.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pu),yr.child=e,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),f=r(e.shapes),u=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new L(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ve extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mu={type:"move"};class Sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},qs={h:0,s:0,l:0};function br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=tu(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=br(r,a,e+1/3),this.g=br(r,a,e),this.b=br(r,a,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function n(a){a!==void 0&&parseFloat(a)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Qe.workingToColorSpace(Xt.copy(this),e),Math.round(Ye(Xt.r*255,0,255))*65536+Math.round(Ye(Xt.g*255,0,255))*256+Math.round(Ye(Xt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,a=Xt.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=h<=.5?f/(r+o):f/(2-r-o),r){case n:l=(s-a)/f+(s<a?6:0);break;case s:l=(a-n)/f+2;break;case a:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Qt){Qe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(qs);const n=gr(ti.h,qs.h,t),s=gr(ti.s,qs.s,t),a=gr(ti.l,qs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ge;Ge.NAMES=yh;class Ja{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new Ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ls extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new L,Gn=new L,wr=new L,Hn=new L,Gi=new L,Hi=new L,$l=new L,Er=new L,Tr=new L,Ar=new L,Rr=new vt,Cr=new vt,Pr=new vt;class mn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){vn.subVectors(s,t),Gn.subVectors(n,t),wr.subVectors(e,t);const r=vn.dot(vn),o=vn.dot(Gn),l=vn.dot(wr),c=Gn.dot(Gn),h=Gn.dot(wr),f=r*c-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Hn.x),l.addScaledVector(r,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return Rr.setScalar(0),Cr.setScalar(0),Pr.setScalar(0),Rr.fromBufferAttribute(e,t),Cr.fromBufferAttribute(e,n),Pr.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Rr,a.x),r.addScaledVector(Cr,a.y),r.addScaledVector(Pr,a.z),r}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),Gn.subVectors(e,t),vn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Gi.subVectors(s,n),Hi.subVectors(a,n),Er.subVectors(e,n);const l=Gi.dot(Er),c=Hi.dot(Er);if(l<=0&&c<=0)return t.copy(n);Tr.subVectors(e,s);const h=Gi.dot(Tr),f=Hi.dot(Tr);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),t.copy(n).addScaledVector(Gi,r);Ar.subVectors(e,a);const d=Gi.dot(Ar),g=Hi.dot(Ar);if(g>=0&&d<=g)return t.copy(a);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Hi,o);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return $l.subVectors(a,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector($l,o);const m=1/(p+_+u);return r=_*m,o=u*m,t.copy(n).addScaledVector(Gi,r).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Os{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Mn):Mn.fromBufferAttribute(a,r),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),$s.subVectors(this.max,ps),Vi.subVectors(e.a,ps),Wi.subVectors(e.b,ps),Xi.subVectors(e.c,ps),ni.subVectors(Wi,Vi),ii.subVectors(Xi,Wi),Ei.subVectors(Vi,Xi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!Lr(t,Vi,Wi,Xi,$s)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,Vi,Wi,Xi,$s))?!1:(Ks.crossVectors(ni,ii),t=[Ks.x,Ks.y,Ks.z],Lr(t,Vi,Wi,Xi,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,Ys=new Os,Vi=new L,Wi=new L,Xi=new L,ni=new L,ii=new L,Ei=new L,ps=new L,$s=new L,Ks=new L,Ti=new L;function Lr(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ti.fromArray(i,a);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tt=new L,Js=new be;let gu=0;class Un extends Ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=e!==void 0?Ka(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):vh(e,this.array)}}class Sh extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bh extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _u=new Os,ms=new L,Ir=new L;class Bs{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_u.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Ir)),this.expandByPoint(ms.copy(e.center).sub(Ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xu=0;const pn=new ct,Dr=new At,qi=new L,on=new Os,gs=new Os,Ot=new L;class bt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?bh:Sh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Be().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Dr.lookAt(e),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];on.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(on.min,gs.min),on.expandByPoint(Ot),Ot.addVectors(on.max,gs.max),on.expandByPoint(Ot)):(on.expandByPoint(gs.min),on.expandByPoint(gs.max))}on.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Ot.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),Ot.add(qi)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new L,l[I]=new L;const h=new L,f=new L,u=new L,d=new be,g=new be,_=new be,p=new L,m=new L;function v(I,C,N){c[I]=c[C]=c[N]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),d.fromBufferAttribute(a,I),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,N),f.sub(h),u.sub(h),g.sub(d),_.sub(d);const B=1/(g.x*_.y-_.x*g.y);isFinite(B)&&(p.copy(f).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(B),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(B),o[I].add(p),o[C].add(p),o[N].add(p),l[I].add(m),l[C].add(m),l[N].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,C=w.length;I<C;++I){const N=w[I],B=N.start,W=N.count;for(let U=B,V=B+W;U<V;U+=3)v(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const b=new L,R=new L,T=new L,x=new L;function y(I){T.fromBufferAttribute(s,I),x.copy(T);const C=o[I];b.copy(C),b.sub(T.multiplyScalar(T.dot(C))).normalize(),R.crossVectors(x,C);const B=R.dot(l[I])<0?-1:1;r.setXYZW(I,b.x,b.y,b.z,B)}for(let I=0,C=n.count;I<C;++I)c[I]&&y(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new L,a=new L,r=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new Un(u,h,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],f=a[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Kl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Kl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Kl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Fi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Jt=new L;class Fa{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ka(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),a=this._normalize(a)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xh(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):vh(e,this.data.array)}}const Nr=new L,Mu=new L,yu=new Be;class ai{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Nr.subVectors(n,t).cross(Mu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Nr),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yu.getNormalMatrix(e),s=this.coplanarPoint(Nr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Su=0;class Mi extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Dn,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Zc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class il extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yi;const _s=new L,$i=new L,Ki=new L,Ji=new be,xs=new be,wh=new ct,Zs=new L,vs=new L,Qs=new L,Jl=new be,Ur=new be,Zl=new be;class Eh extends At{constructor(e=new il){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vu(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Fa(n,3,0,!1)),Yi.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=Yi,this.material=e,this.center=new be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;js(Zs.set(-.5,-.5,0),Ki,r,$i,s,a),js(vs.set(.5,-.5,0),Ki,r,$i,s,a),js(Qs.set(.5,.5,0),Ki,r,$i,s,a),Jl.set(0,0),Ur.set(1,0),Zl.set(1,1);let o=e.ray.intersectTriangle(Zs,vs,Qs,!1,_s);if(o===null&&(js(vs.set(-.5,.5,0),Ki,r,$i,s,a),Ur.set(0,1),o=e.ray.intersectTriangle(Zs,Qs,vs,!1,_s),o===null))return;const l=e.ray.origin.distanceTo(_s);l<e.near||l>e.far||t.push({distance:l,point:_s.clone(),uv:mn.getInterpolation(_s,Zs,vs,Qs,Jl,Ur,Zl,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function js(i,e,t,n,s,a){Ji.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(xs.x=a*Ji.x-s*Ji.y,xs.y=s*Ji.x+a*Ji.y):xs.copy(Ji),i.copy(e),i.x+=xs.x,i.y+=xs.y,i.applyMatrix4(wh)}const Wn=new L,Fr=new L,ea=new L,ta=new L;class Za{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fr.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ta.copy(this.origin).sub(Fr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ea),o=ta.dot(this.direction),l=-ta.dot(ea),c=ta.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*l-o,u=r*o-l,g=a*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*o)+u*(r*f+u+2*l)+c}else u=a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(f=Math.max(0,-(r*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+u*(u+2*l)+c);else u=r>0?-a:a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fr).addScaledVector(ea,u),d}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-r.x,u=e.y-r.y,d=e.z-r.z,g=t.x-r.x,_=t.y-r.y,p=t.z-r.z,m=n.x-r.x,v=n.y-r.y,w=n.z-r.z,b=Math.abs(l),R=Math.abs(c),T=Math.abs(h);let x,y,I,C,N,B,W,U,V,q,H,se;if(b>=R&&b>=T?(I=l,B=f,V=g,se=m,l>=0?(x=c,y=h,C=u,N=d,W=_,U=p,q=v,H=w):(x=h,y=c,C=d,N=u,W=p,U=_,q=w,H=v)):R>=T?(I=c,B=u,V=_,se=v,c>=0?(x=h,y=l,C=d,N=f,W=p,U=g,q=w,H=m):(x=l,y=h,C=f,N=d,W=g,U=p,q=m,H=w)):(I=h,B=d,V=p,se=w,h>=0?(x=l,y=c,C=f,N=u,W=g,U=_,q=m,H=v):(x=c,y=l,C=u,N=f,W=_,U=g,q=v,H=m)),I===0)return null;const K=x/I,te=y/I,ne=1/I,Re=C-K*B,ze=N-te*B,Q=W-K*V,xe=U-te*V,Ee=q-K*se,De=H-te*se,Me=Ee*xe-De*Q,He=Re*De-ze*Ee,wt=Q*ze-xe*Re;if(s){if(Me<0||He<0||wt<0)return null}else if((Me<0||He<0||wt<0)&&(Me>0||He>0||wt>0))return null;const Ue=Me+He+wt;if(Ue===0)return null;const st=ne*(Me*B+He*V+wt*se);return(Ue>0?st<0:st>0)?null:this.at(st/Ue,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ql=new ct,Ai=new Za,na=new Bs,jl=new L,ia=new L,sa=new L,aa=new L,Or=new L,ra=new L,ec=new L,oa=new L;class qe extends At{constructor(e=new bt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){ra.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],f=a[l];h!==0&&(Or.fromBufferAttribute(f,e),r?ra.addScaledVector(Or,h):ra.addScaledVector(Or.sub(t),h))}t.add(ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(a),Ai.copy(e.ray).recast(e.near),!(na.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(na,jl)===null||Ai.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(Ql.copy(a).invert(),Ai.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,d.start),w=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let b=v,R=w;b<R;b+=3){const T=o.getX(b),x=o.getX(b+1),y=o.getX(b+2);s=la(this,m,e,n,c,h,f,T,x,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),w=o.getX(p+1),b=o.getX(p+2);s=la(this,r,e,n,c,h,f,v,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=v,R=w;b<R;b+=3){const T=b,x=b+1,y=b+2;s=la(this,m,e,n,c,h,f,T,x,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=p,w=p+1,b=p+2;s=la(this,r,e,n,c,h,f,v,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function bu(i,e,t,n,s,a,r,o){let l;if(e.side===jt?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===ui,o),l===null)return null;oa.copy(o),oa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:i}}function la(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,aa);const h=bu(i,e,t,n,ia,sa,aa,ec);if(h){const f=new L;mn.getBarycoord(ec,ia,sa,aa,f),s&&(h.uv=mn.getInterpolatedAttribute(s,o,l,c,f,new be)),a&&(h.uv1=mn.getInterpolatedAttribute(a,o,l,c,f,new be)),r&&(h.normal=mn.getInterpolatedAttribute(r,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};mn.getNormal(ia,sa,aa,u.normal),h.face=u,h.barycoord=f}return h}class wu extends Yt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=Gt,h=Gt,f,u){super(null,r,o,l,c,h,s,a,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ri=new Bs,Eu=new be(.5,.5),ca=new L;class Fs{constructor(e=new ai,t=new ai,n=new ai,s=new ai,a=new ai,r=new ai){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],f=a[5],u=a[6],d=a[7],g=a[8],_=a[9],p=a[10],m=a[11],v=a[12],w=a[13],b=a[14],R=a[15];if(s[0].setComponents(c-r,d-h,m-g,R-v).normalize(),s[1].setComponents(c+r,d+h,m+g,R+v).normalize(),s[2].setComponents(c+o,d+f,m+_,R+w).normalize(),s[3].setComponents(c-o,d-f,m-_,R-w).normalize(),n)s[4].setComponents(l,u,p,b).normalize(),s[5].setComponents(c-l,d-u,m-p,R-b).normalize();else if(s[4].setComponents(c-l,d-u,m-p,R-b).normalize(),t===Sn)s[5].setComponents(c+l,d+u,m+p,R+b).normalize();else if(t===Us)s[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=Eu.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ca.x=s.normal.x>0?e.max.x:e.min.x,ca.y=s.normal.y>0?e.max.y:e.min.y,ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const tc=new ct;class sl{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const a=t[s];tc.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[s]===void 0&&(n[s]=new Fs),n[s].setFromProjectionMatrix(tc,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Fs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new sl().copy(this)}}class Th extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oa=new L,Ba=new L,nc=new ct,Ms=new Za,ha=new Bs,Br=new L,ic=new L;class Tu extends At{constructor(e=new bt,t=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Oa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oa.distanceTo(Ba);e.setAttribute("lineDistance",new je(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=a,e.ray.intersectsSphere(ha)===!1)return;nc.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(nc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=c){const m=h.getX(_),v=h.getX(_+1),w=da(this,e,Ms,l,m,v,_);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=da(this,e,Ms,l,_,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=c){const m=da(this,e,Ms,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=da(this,e,Ms,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function da(i,e,t,n,s,a,r){const o=i.geometry.attributes.position;if(Oa.fromBufferAttribute(o,s),Ba.fromBufferAttribute(o,a),t.distanceSqToSegment(Oa,Ba,Br,ic)>n)return;Br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Br);if(!(c<e.near||c>e.far))return{distance:c,point:ic.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class al extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sc=new ct,Fo=new Za,ua=new Bs,fa=new L;class Ah extends At{constructor(e=new bt,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=a,e.ray.intersectsSphere(ua)===!1)return;sc.copy(s).invert(),Fo.copy(e.ray).applyMatrix4(sc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=u,_=d;g<_;g++){const p=c.getX(g);fa.fromBufferAttribute(f,p),ac(fa,p,l,s,e,t,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,_=d;g<_;g++)fa.fromBufferAttribute(f,g),ac(fa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ac(i,e,t,n,s,a,r){const o=Fo.distanceSqToPoint(i);if(o<t){const l=new L;Fo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Rh extends Yt{constructor(e=[],t=is,n,s,a,r,o,l,c,h){super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rl extends Yt{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class as extends Yt{constructor(e,t,n=Fn,s,a,r,o=Gt,l=Gt,c,h=fi,f=1){if(h!==fi&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ch extends as{constructor(e,t=Fn,n=is,s,a,r=Gt,o=Gt,l,c=fi){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,a,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ph extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yi extends bt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2));function g(_,p,m,v,w,b,R,T,x,y,I){const C=b/x,N=R/y,B=b/2,W=R/2,U=T/2,V=x+1,q=y+1;let H=0,se=0;const K=new L;for(let te=0;te<q;te++){const ne=te*N-W;for(let Re=0;Re<V;Re++){const ze=Re*C-B;K[_]=ze*v,K[p]=ne*w,K[m]=U,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[m]=T>0?1:-1,h.push(K.x,K.y,K.z),f.push(Re/x),f.push(1-te/y),H+=1}}for(let te=0;te<y;te++)for(let ne=0;ne<x;ne++){const Re=u+ne+V*te,ze=u+ne+V*(te+1),Q=u+(ne+1)+V*(te+1),xe=u+(ne+1)+V*te;l.push(Re,ze,xe),l.push(ze,Q,xe),se+=6}o.addGroup(d,se,I),d+=se,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mi extends bt{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const r=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,g=n*2+a,_=s+1,p=new L,m=new L;for(let v=0;v<=g;v++){let w=0,b=0,R=0,T=0;if(v<=n){const I=v/n,C=I*Math.PI/2;b=-h-e*Math.cos(C),R=e*Math.sin(C),T=-e*Math.cos(C),w=I*f}else if(v<=n+a){const I=(v-n)/a;b=-h+I*t,R=e,T=0,w=f+I*u}else{const I=(v-n-a)/n,C=I*Math.PI/2;b=h+e*Math.sin(C),R=e*Math.cos(C),T=e*Math.sin(C),w=f+u+I*f}const x=Math.max(0,Math.min(1,w/d));let y=0;v===0?y=.5/s:v===g&&(y=-.5/s);for(let I=0;I<=s;I++){const C=I/s,N=C*Math.PI*2,B=Math.sin(N),W=Math.cos(N);m.x=-R*W,m.y=b,m.z=R*B,o.push(m.x,m.y,m.z),p.set(-R*W,T,R*B),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+y,x)}if(v>0){const I=(v-1)*_;for(let C=0;C<s;C++){const N=I+C,B=I+C+1,W=v*_+C,U=v*_+C+1;r.push(N,B,W),r.push(B,U,W)}}}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class $t extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new L,h=new be;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Lt extends bt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=n/2;let m=0;v(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function v(){const b=new L,R=new L;let T=0;const x=(t-e)/n;for(let y=0;y<=a;y++){const I=[],C=y/a,N=C*(t-e)+e;for(let B=0;B<=s;B++){const W=B/s,U=W*l+o,V=Math.sin(U),q=Math.cos(U);R.x=N*V,R.y=-C*n+p,R.z=N*q,f.push(R.x,R.y,R.z),b.set(V,x,q).normalize(),u.push(b.x,b.y,b.z),d.push(W,1-C),I.push(g++)}_.push(I)}for(let y=0;y<s;y++)for(let I=0;I<a;I++){const C=_[I][y],N=_[I+1][y],B=_[I+1][y+1],W=_[I][y+1];(e>0||I!==0)&&(h.push(C,N,W),T+=3),(t>0||I!==a-1)&&(h.push(N,B,W),T+=3)}c.addGroup(m,T,0),m+=T}function w(b){const R=g,T=new be,x=new L;let y=0;const I=b===!0?e:t,C=b===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*C,0),u.push(0,C,0),d.push(.5,.5),g++;const N=g;for(let B=0;B<=s;B++){const U=B/s*l+o,V=Math.cos(U),q=Math.sin(U);x.x=I*q,x.y=p*C,x.z=I*V,f.push(x.x,x.y,x.z),u.push(0,C,0),T.x=V*.5+.5,T.y=q*.5*C+.5,d.push(T.x,T.y),g++}for(let B=0;B<s;B++){const W=R+B,U=N+B;b===!0?h.push(U,U+1,W):h.push(U+1,U,W),y+=3}c.addGroup(m,y,b===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qa extends Lt{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Qa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ja extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),c(n),h(),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(a.slice(),3)),this.setAttribute("uv",new je(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const w=new L,b=new L,R=new L;for(let T=0;T<t.length;T+=3)d(t[T+0],w),d(t[T+1],b),d(t[T+2],R),l(w,b,R,v)}function l(v,w,b,R){const T=R+1,x=[];for(let y=0;y<=T;y++){x[y]=[];const I=v.clone().lerp(b,y/T),C=w.clone().lerp(b,y/T),N=T-y;for(let B=0;B<=N;B++)B===0&&y===T?x[y][B]=I:x[y][B]=I.clone().lerp(C,B/N)}for(let y=0;y<T;y++)for(let I=0;I<2*(T-y)-1;I++){const C=Math.floor(I/2);I%2===0?(u(x[y][C+1]),u(x[y+1][C]),u(x[y][C])):(u(x[y][C+1]),u(x[y+1][C+1]),u(x[y+1][C]))}}function c(v){const w=new L;for(let b=0;b<a.length;b+=3)w.x=a[b+0],w.y=a[b+1],w.z=a[b+2],w.normalize().multiplyScalar(v),a[b+0]=w.x,a[b+1]=w.y,a[b+2]=w.z}function h(){const v=new L;for(let w=0;w<a.length;w+=3){v.x=a[w+0],v.y=a[w+1],v.z=a[w+2];const b=p(v)/2/Math.PI+.5,R=m(v)/Math.PI+.5;r.push(b,1-R)}g(),f()}function f(){for(let v=0;v<r.length;v+=6){const w=r[v+0],b=r[v+2],R=r[v+4],T=Math.max(w,b,R),x=Math.min(w,b,R);T>.9&&x<.1&&(w<.2&&(r[v+0]+=1),b<.2&&(r[v+2]+=1),R<.2&&(r[v+4]+=1))}}function u(v){a.push(v.x,v.y,v.z)}function d(v,w){const b=v*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function g(){const v=new L,w=new L,b=new L,R=new L,T=new be,x=new be,y=new be;for(let I=0,C=0;I<a.length;I+=9,C+=6){v.set(a[I+0],a[I+1],a[I+2]),w.set(a[I+3],a[I+4],a[I+5]),b.set(a[I+6],a[I+7],a[I+8]),T.set(r[C+0],r[C+1]),x.set(r[C+2],r[C+3]),y.set(r[C+4],r[C+5]),R.copy(v).add(w).add(b).divideScalar(3);const N=p(R);_(T,C+0,v,N),_(x,C+2,w,N),_(y,C+4,b,N)}}function _(v,w,b,R){R<0&&v.x===1&&(r[w]=v.x-1),b.x===0&&b.z===0&&(r[w]=R/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.vertices,e.indices,e.radius,e.detail)}}class ol extends ja{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new be:new L);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],a=[],r=[],o=new L,l=new ct;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new L)}a[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(s[d],a[d])}if(t===!0){let d=Math.acos(Ye(a[0].dot(a[e]),-1,1));d/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(d=-d);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Lh extends Jn{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Au extends Lh{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ll(){let i=0,e=0,t=0,n=0;function s(a,r,o,l){i=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,f){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+f)+(l-o)/f;u*=h,d*=h,s(r,o,u,d)},calc:function(a){const r=a*a,o=r*a;return i+e*a+t*r+n*o}}}const rc=new L,oc=new L,zr=new ll,kr=new ll,Gr=new ll;class Ih extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(oc.subVectors(s[0],s[1]).add(s[0]),c=oc);const f=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(rc.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=rc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),zr.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),kr.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),Gr.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(zr.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),kr.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Gr.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(zr.calc(l),kr.calc(l),Gr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lc(i,e,t,n,s){const a=(n-e)*.5,r=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+r)*l+(-3*t+3*n-2*a-r)*o+a*i+t}function Ru(i,e){const t=1-i;return t*t*e}function Cu(i,e){return 2*(1-i)*i*e}function Pu(i,e){return i*i*e}function Cs(i,e,t,n){return Ru(i,e)+Cu(i,t)+Pu(i,n)}function Lu(i,e){const t=1-i;return t*t*t*e}function Iu(i,e){const t=1-i;return 3*t*t*i*e}function Du(i,e){return 3*(1-i)*i*i*e}function Nu(i,e){return i*i*i*e}function Ps(i,e,t,n,s){return Lu(i,e)+Iu(i,t)+Du(i,n)+Nu(i,s)}class Uu extends Jn{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ps(e,s.x,a.x,r.x,o.x),Ps(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fu extends Jn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ps(e,s.x,a.x,r.x,o.x),Ps(e,s.y,a.y,r.y,o.y),Ps(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ou extends Jn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bu extends Jn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zu extends Jn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Cs(e,s.x,a.x,r.x),Cs(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dh extends Jn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Cs(e,s.x,a.x,r.x),Cs(e,s.y,a.y,r.y),Cs(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ku extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(lc(o,l.x,c.x,h.x,f.x),lc(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new be().fromArray(s))}return this}}var Gu=Object.freeze({__proto__:null,ArcCurve:Au,CatmullRomCurve3:Ih,CubicBezierCurve:Uu,CubicBezierCurve3:Fu,EllipseCurve:Lh,LineCurve:Ou,LineCurve3:Bu,QuadraticBezierCurve:zu,QuadraticBezierCurve3:Dh,SplineCurve:ku});class er extends ja{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new er(e.radius,e.detail)}}class cs extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*u-r;for(let w=0;w<c;w++){const b=w*f-a;g.push(b,-v,0),_.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const w=v+c*m,b=v+c*(m+1),R=v+1+c*(m+1),T=v+1+c*m;d.push(w,b,T),d.push(b,R,T)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class gn extends bt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/s,d=new L,g=new be;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=a+p/n*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const v=m+p,w=v,b=v+n+1,R=v+n+2,T=v+1;o.push(w,b,T),o.push(b,R,T)}}this.setIndex(o),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kn extends bt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],f=new L,u=new L,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],w=m/n,b=r+w*o,R=e*Math.cos(b),T=Math.sqrt(e*e-R*R);let x=0;m===0&&r===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const I=y/t,C=s+I*a;f.x=-T*Math.cos(C),f.y=R,f.z=T*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(I+x,1-w),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const w=h[m][v+1],b=h[m][v],R=h[m+1][v],T=h[m+1][v+1];(m!==0||r>0)&&d.push(w,b,T),(m!==n-1||l<Math.PI)&&d.push(b,R,T)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends bt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new L,d=new L,g=new L;for(let _=0;_<=n;_++){const p=r+_/n*o;for(let m=0;m<=s;m++){const v=m/s*a;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){const m=(s+1)*_+p-1,v=(s+1)*(_-1)+p-1,w=(s+1)*(_-1)+p,b=(s+1)*_+p;l.push(m,v,b),l.push(v,w,b)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class cl extends bt{constructor(e=new Dh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};const r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new L,l=new L,c=new be;let h=new L;const f=[],u=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(d,2));function _(){for(let w=0;w<t;w++)p(w);p(a===!1?t:0),v(),m()}function p(w){h=e.getPointAt(w/t,h);const b=r.normals[w],R=r.binormals[w];for(let T=0;T<=s;T++){const x=T/s*Math.PI*2,y=Math.sin(x),I=-Math.cos(x);l.x=I*b.x+y*R.x,l.y=I*b.y+y*R.y,l.z=I*b.z+y*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){const R=(s+1)*(w-1)+(b-1),T=(s+1)*w+(b-1),x=(s+1)*w+b,y=(s+1)*(w-1)+b;g.push(R,T,y),g.push(T,x,y)}}function v(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)c.x=w/t,c.y=b/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new cl(new Gu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(cc(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(cc(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=rs(i[t]);for(const s in n)e[s]=n[s]}return e}function cc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Vu={clone:rs,merge:Zt};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qu extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yu extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $u extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hl extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class dl extends hl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hr=new ct,hc=new L,dc=new L;class Uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hr,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===Us||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pa=new L,ma=new os,Tn=new L;class Fh extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pa,ma,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pa,ma,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new L,uc=new be,fc=new be;class qt extends Fh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,uc,fc),t.subVectors(fc,uc)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ku extends Uh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class cn extends hl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Oh extends Fh{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ju extends Uh{constructor(){super(new Oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class za extends hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Ju}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Zi=-90,Qi=1;class Oo extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Zi,Qi,e,t);s.layers=this.layers,this.add(s);const a=new qt(Zi,Qi,e,t);a.layers=this.layers,this.add(a);const r=new qt(Zi,Qi,e,t);r.layers=this.layers,this.add(r);const o=new qt(Zi,Qi,e,t);o.layers=this.layers,this.add(o);const l=new qt(Zi,Qi,e,t);l.layers=this.layers,this.add(l);const c=new qt(Zi,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zu extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const pc=new ct;class Qu{constructor(e,t,n=0,s=1/0){this.ray=new Za(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pc),this}intersectObject(e,t=!0,n=[]){return Bo(e,this,n,t),n.sort(mc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Bo(e[s],this,n,t);return n.sort(mc),n}}function mc(i,e){return i.distance-e.distance}function Bo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Bo(a[r],e,t,!0)}}class ju{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gc(i,e,t,n){const s=ef(n);switch(t){case hh:return i*e;case uh:return i*e/s.components*s.byteLength;case Qo:return i*e/s.components*s.byteLength;case Di:return i*e*2/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case dh:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case el:return i*e*4/s.components*s.byteLength;case ba:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:case ro:return Math.max(i,16)*Math.max(e,8)/4;case io:case ao:return Math.max(i,8)*Math.max(e,8)/2;case oo:case lo:case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case Pa:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lo:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*8;case La:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ef(i){switch(i){case ln:case rh:return{byteLength:1,components:1};case Ns:case oh:case On:return{byteLength:2,components:1};case Jo:case Zo:return{byteLength:2,components:4};case Fn:case Ko:case Pn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);function Bh(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function tf(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ep=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:af,alphamap_pars_fragment:rf,alphatest_fragment:of,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:hf,batching_pars_vertex:df,batching_vertex:uf,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:xf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:yf,color_fragment:Sf,color_pars_fragment:bf,color_pars_vertex:wf,color_vertex:Ef,common:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:If,colorspace_pars_fragment:Df,envmap_fragment:Nf,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:$f,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:kf,fog_fragment:Gf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:Yf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Jf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Qf,lights_physical_fragment:jf,lights_physical_pars_fragment:ep,lights_fragment_begin:tp,lights_fragment_maps:np,lights_fragment_end:ip,lightprobes_pars_fragment:sp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:lp,map_fragment:cp,map_pars_fragment:hp,map_particle_fragment:dp,map_particle_pars_fragment:up,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:xp,morphtarget_vertex:vp,normal_fragment_begin:Mp,normal_fragment_maps:yp,normal_pars_fragment:Sp,normal_pars_vertex:bp,normal_vertex:wp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Pp,packing:Lp,premultiplied_alpha_fragment:Ip,project_vertex:Dp,dithering_fragment:Np,dithering_pars_fragment:Up,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:zp,shadowmap_vertex:kp,shadowmask_pars_fragment:Gp,skinbase_vertex:Hp,skinning_pars_vertex:Vp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:$p,tonemapping_pars_fragment:Kp,transmission_fragment:Jp,transmission_pars_fragment:Zp,uv_pars_fragment:Qp,uv_pars_vertex:jp,uv_vertex:e0,worldpos_vertex:t0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:a0,cube_vert:r0,cube_frag:o0,depth_vert:l0,depth_frag:c0,distance_vert:h0,distance_frag:d0,equirect_vert:u0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:_0,meshlambert_vert:x0,meshlambert_frag:v0,meshmatcap_vert:M0,meshmatcap_frag:y0,meshnormal_vert:S0,meshnormal_frag:b0,meshphong_vert:w0,meshphong_frag:E0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:P0,points_frag:L0,shadow_vert:I0,shadow_frag:D0,sprite_vert:N0,sprite_frag:U0},_e={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Cn={basic:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Zt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Zt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Zt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Zt([_e.points,_e.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Zt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Zt([_e.common,_e.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Zt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Zt([_e.sprite,_e.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Zt([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Zt([_e.lights,_e.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Cn.physical={uniforms:Zt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ga={r:0,b:0,g:0},F0=new ct,zh=new Be;zh.set(-1,0,0,0,1,0,0,0,1);function O0(i,e,t,n,s,a){const r=new Ge(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const b=v.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(v){let w=!1;const b=d(v);b===null?p(r,o):b&&b.isColor&&(p(b,1),w=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,w){const b=d(w);b&&b.isCubeTexture?(c===void 0&&(c=new qe(new yi(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:rs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zh),c.material.toneMapped=Qe.getTransfer(b.colorSpace)!==rt,(h!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new qe(new cs(2,2),new gi({name:"BackgroundMaterial",uniforms:rs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(b.colorSpace)!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,w){v.getRGB(ga,Nh(i)),t.buffers.color.setClear(ga.r,ga.g,ga.b,w,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,w=1){r.set(v),o=w,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(r,o)},render:g,addToRenderList:_,dispose:m}}function B0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(N,B,W,U,V){let q=!1;const H=f(N,U,W,B);a!==H&&(a=H,c(a.object)),q=d(N,U,W,V),q&&g(N,U,W,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,b(N,B,W,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,B,W,U){const V=U.wireframe===!0;let q=n[B.id];q===void 0&&(q={},n[B.id]=q);const H=N.isInstancedMesh===!0?N.id:0;let se=q[H];se===void 0&&(se={},q[H]=se);let K=se[W.id];K===void 0&&(K={},se[W.id]=K);let te=K[V];return te===void 0&&(te=u(l()),K[V]=te),te}function u(N){const B=[],W=[],U=[];for(let V=0;V<t;V++)B[V]=0,W[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:U,object:N,attributes:{},index:null}}function d(N,B,W,U){const V=a.attributes,q=B.attributes;let H=0;const se=W.getAttributes();for(const K in se)if(se[K].location>=0){const ne=V[K];let Re=q[K];if(Re===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Re=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Re=N.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;H++}return a.attributesNum!==H||a.index!==U}function g(N,B,W,U){const V={},q=B.attributes;let H=0;const se=W.getAttributes();for(const K in se)if(se[K].location>=0){let ne=q[K];ne===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),V[K]=Re,H++}a.attributes=V,a.attributesNum=H,a.index=U}function _(){const N=a.newAttributes;for(let B=0,W=N.length;B<W;B++)N[B]=0}function p(N){m(N,0)}function m(N,B){const W=a.newAttributes,U=a.enabledAttributes,V=a.attributeDivisors;W[N]=1,U[N]===0&&(i.enableVertexAttribArray(N),U[N]=1),V[N]!==B&&(i.vertexAttribDivisor(N,B),V[N]=B)}function v(){const N=a.newAttributes,B=a.enabledAttributes;for(let W=0,U=B.length;W<U;W++)B[W]!==N[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function w(N,B,W,U,V,q,H){H===!0?i.vertexAttribIPointer(N,B,W,V,q):i.vertexAttribPointer(N,B,W,U,V,q)}function b(N,B,W,U){_();const V=U.attributes,q=W.getAttributes(),H=B.defaultAttributeValues;for(const se in q){const K=q[se];if(K.location>=0){let te=V[se];if(te===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){const ne=te.normalized,Re=te.itemSize,ze=e.get(te);if(ze===void 0)continue;const Q=ze.buffer,xe=ze.type,Ee=ze.bytesPerElement,De=xe===i.INT||xe===i.UNSIGNED_INT||te.gpuType===Ko;if(te.isInterleavedBufferAttribute){const Me=te.data,He=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,wt=te.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Ue=0;Ue<K.locationSize;Ue++)m(K.location+Ue,Me.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ue=0;Ue<K.locationSize;Ue++)p(K.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ue=0;Ue<K.locationSize;Ue++)w(K.location+Ue,Re/K.locationSize,xe,ne,He*Ee,(wt+Re/K.locationSize*Ue)*Ee,De)}else{if(te.isInstancedBufferAttribute){for(let Me=0;Me<K.locationSize;Me++)m(K.location+Me,te.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<K.locationSize;Me++)p(K.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Me=0;Me<K.locationSize;Me++)w(K.location+Me,Re/K.locationSize,xe,ne,Re*Ee,Re/K.locationSize*Me*Ee,De)}}else if(H!==void 0){const ne=H[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(K.location,ne);break;case 3:i.vertexAttrib3fv(K.location,ne);break;case 4:i.vertexAttrib4fv(K.location,ne);break;default:i.vertexAttrib1fv(K.location,ne)}}}}v()}function R(){I();for(const N in n){const B=n[N];for(const W in B){const U=B[W];for(const V in U){const q=U[V];for(const H in q)h(q[H].object),delete q[H];delete U[V]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;const B=n[N.id];for(const W in B){const U=B[W];for(const V in U){const q=U[V];for(const H in q)h(q[H].object),delete q[H];delete U[V]}}delete n[N.id]}function x(N){for(const B in n){const W=n[B];for(const U in W){const V=W[U];if(V[N.id]===void 0)continue;const q=V[N.id];for(const H in q)h(q[H].object),delete q[H];delete V[N.id]}}}function y(N){for(const B in n){const W=n[B],U=N.isInstancedMesh===!0?N.id:0,V=W[U];if(V!==void 0){for(const q in V){const H=V[q];for(const se in H)h(H[se].object),delete H[se];delete V[q]}delete W[U],Object.keys(W).length===0&&delete n[B]}}}function I(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function z0(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function k0(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(x){return!(x!==Ln&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const y=x===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ln&&x!==Pn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:R,samples:T}}function G0(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new ai,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||a&&!p)a?h(null):c();else{const v=a?0:n,w=v*4;let b=m.clippingState||null;l.value=b,b=h(g,u,w,d);for(let R=0;R!==w;++R)b[R]=t[R];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,b=d;w!==_;++w,b+=4)r.copy(f[w]).applyMatrix4(v,o),r.normal.toArray(p,b),p[b+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class ul extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),a=new gi({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ts});a.uniforms.tEquirect.value=t;const r=new qe(s,a),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=nn),new Oo(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const _c=256,H0=3,V0=20,kh=256,Gh=16,W0=3,X0=new L,q0=new Ge;class ka{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Oo(1,10,null),this._boxMesh=new qe(new yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=X0}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(q0));const p=new Oo(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_c,nu(e))}_fromTexture(e,t){e.mapping===is||e.mapping===Ds?this._setSize(e.image.length===0?_c:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=xc(e,!1,!1),n=Math.log2(e)-H0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,a=this._cubeCamera;s.material=n,a.renderTarget=e,a.activeMipmapLevel=t;const r=e.width>>t;e.viewport.set(0,0,r,r),a.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===is||e.mapping===Ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Y0(),this._integrationMaterial=$0());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/Gh);for(let r=0;r<=n;r++){const o=ka.lodToRoughness(r,n);if(r>n-W0)a.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(kh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=K0());const n=this._blurMaterial,s=n.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(a,0,n)}}function xc(i,e,t){return new ul(i,{minFilter:ci,generateMipmaps:e,type:On,colorSpace:Ia,depthBuffer:t})}function zs(i,e,t){return new gi({name:i,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:jt,blending:ts,depthTest:!1,depthWrite:!1})}function Y0(){return zs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $0(){return zs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function K0(){return zs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${V0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vc(){return zs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Mc(){return zs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function J0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===dr||d===ur)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new ul(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,g=d===dr||d===ur,_=d===is||d===Ds;if(g||_){let p=t.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ka(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new ka(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===dr?u.mapping=is:d===ur&&(u.mapping=Ds),u}function l(u){let d=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Z0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Aa("WebGLRenderer: "+n+" extension not supported."),s}}}function Q0(i,e,t,n){const s={},a=new WeakMap,r=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],r.unregister(g);const _=a.get(g);_&&(e.remove(_),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),r.register(_,_.id,_),t.memory.geometries++),_}function h(g){const _=g.attributes;for(const p in _)e.update(_[p],i.ARRAY_BUFFER)}function f(g){const _=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const v=_!==null?_.array.length:p.array.length/3-1,w=p.count>=65535?bh:Sh,b=new w(Math.ceil(v/3)*6,1),R=b.array;if(_!==null){const x=_.array;m=_.version;for(let y=0,I=0;y<v;y+=3){const C=x[y+0],N=x[y+1],B=x[y+2];R[I++]=C,R[I++]=N,R[I++]=N,R[I++]=B,R[I++]=B,R[I++]=C}}else{m=p.version;for(let x=0,y=0;x<v;x+=3){const I=x+0,C=x+1,N=x+2;R[y++]=I,R[y++]=C,R[y++]=C,R[y++]=N,R[y++]=N,R[y++]=I}}b.version=m;const T=a.get(g);T&&e.remove(T),a.set(g,b)}function u(g){const _=a.get(g);if(_){const p=g.index;p!==null&&_.version<p.version&&f(g)}else f(g);return a.get(g)}function d(){for(const g in s){const _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function j0(i,e,t){let n;function s(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,a,f*r),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,a,f*r,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function em(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:tt("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tm(i,e,t){const n=new WeakMap,s=new vt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let C=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var d=C;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let R=o.attributes.position.count*b,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const x=new Float32Array(R*T*4*f),y=new Mh(x,R,T,f);y.type=Pn,y.needsUpdate=!0;const I=b*4;for(let N=0;N<f;N++){const B=m[N],W=v[N],U=w[N],V=R*T*4*N;for(let q=0;q<B.count;q++){const H=q*I;g===!0&&(s.fromBufferAttribute(B,q),x[V+H+0]=s.x,x[V+H+1]=s.y,x[V+H+2]=s.z,x[V+H+3]=0),_===!0&&(s.fromBufferAttribute(W,q),x[V+H+4]=s.x,x[V+H+5]=s.y,x[V+H+6]=s.z,x[V+H+7]=0),p===!0&&(s.fromBufferAttribute(U,q),x[V+H+8]=s.x,x[V+H+9]=s.y,x[V+H+10]=s.z,x[V+H+11]=U.itemSize===4?s.w:1)}}u={count:f,texture:y,size:new be(R,T)},n.set(o,u),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function nm(i,e,t,n,s){let a=new WeakMap;function r(c){const h=s.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==h&&(e.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const im={[jc]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function sm(i,e,t,n,s,a){const r=new Nn(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new bt;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));const f=new qu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qe(h,f),d=new Oh(-1,1,1,-1,0,1);let g=null,_=null,p=!1,m,v=null,w=[],b=!1;this.setSize=function(R,T){r.setSize(R,T),o!==null&&o.setSize(R,T),l!==null&&l.setSize(R,T);for(let x=0;x<w.length;x++){const y=w[x];y.setSize&&y.setSize(R,T)}},this.setEffects=function(R){w=R,b=w.length>0&&w[0].isRenderPass===!0;const T=r.width,x=r.height;w.length>0&&o===null&&(o=new Nn(T,x,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(T,x,{type:On,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&w.some(I=>I.needsDepthTexture===!0);y!==(r.depthTexture!==null)&&(y===!0&&c===null&&(c=new as(T,x),a===!0&&(c.format=hi,c.type=ss)),r.dispose(),r.depthTexture=y?c:null,r.resolveDepthBuffer=y,r.storeMultisampledDepthBuffer=y);for(let I=0;I<w.length;I++){const C=w[I];C.setSize&&C.setSize(T,x),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(R,T){if(p||R.toneMapping===Yn&&w.length===0)return!1;if(v=T,T!==null){const x=T.width,y=T.height;(r.width!==x||r.height!==y)&&this.setSize(x,y)}return b===!1&&R.setRenderTarget(r),m=R.toneMapping,R.toneMapping=Yn,!0},this.hasRenderPass=function(){return b},this.end=function(R,T){R.toneMapping=m,p=!0;let x=r,y=o;for(let I=0;I<w.length;I++){const C=w[I];C.enabled!==!1&&(C.render(R,y,x,T),C.needsSwap!==!1&&(x=y,y=y===o?l:o))}if(g!==R.outputColorSpace||_!==R.toneMapping){g=R.outputColorSpace,_=R.toneMapping,f.defines={},Qe.getTransfer(g)===rt&&(f.defines.SRGB_TRANSFER="");const I=im[_];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(v),R.render(u,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const Hh=new Yt,Vh=new as(1,1),Wh=new Ch(1),Xh=new Mh,qh=new lu,Yh=new Rh,yc=[],Sc=[],bc=new Float32Array(16),wc=new Float32Array(9),Ec=new Float32Array(4);function hs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=yc[s];if(a===void 0&&(a=new Float32Array(s),yc[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nr(i,e){let t=Sc[e];t===void 0&&(t=new Int32Array(e),Sc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Ec.set(n),i.uniformMatrix2fv(this.addr,!1,Ec),Dt(t,n)}}function hm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),Dt(t,n)}}function dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;bc.set(n),i.uniformMatrix4fv(this.addr,!1,bc),Dt(t,n)}}function um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function ir(i){return i.version===0&&(i.compareFunction=mh,i.needsUpdate=!0),i}function Mm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?a=ir(Vh):a=Hh,t.setTexture2D(e||a,s)}function ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qh,s)}function Sm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ir(Wh):a=Yh,t.setTextureCube(e||a,s)}function bm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xh,s)}function wm(i){switch(i){case 5126:return am;case 35664:return rm;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return dm;case 5124:case 35670:return um;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}function Em(i,e){i.uniform1fv(this.addr,e)}function Tm(i,e){const t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function Am(i,e){const t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Rm(i,e){const t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function Cm(i,e){const t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pm(i,e){const t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lm(i,e){const t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Im(i,e){i.uniform1iv(this.addr,e)}function Dm(i,e){i.uniform2iv(this.addr,e)}function Nm(i,e){i.uniform3iv(this.addr,e)}function Um(i,e){i.uniform4iv(this.addr,e)}function Fm(i,e){i.uniform1uiv(this.addr,e)}function Om(i,e){i.uniform2uiv(this.addr,e)}function Bm(i,e){i.uniform3uiv(this.addr,e)}function zm(i,e){i.uniform4uiv(this.addr,e)}function km(i,e,t){const n=this.cache,s=e.length,a=nr(t,s);It(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=ir(Vh):r=Hh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function Gm(i,e,t){const n=this.cache,s=e.length,a=nr(t,s);It(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||qh,a[r])}function Hm(i,e,t){const n=this.cache,s=e.length,a=nr(t,s);It(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ir(Wh):r=Yh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||r,a[o])}function Vm(i,e,t){const n=this.cache,s=e.length,a=nr(t,s);It(n,a)||(i.uniform1iv(this.addr,a),Dt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Xh,a[r])}function Wm(i){switch(i){case 5126:return Em;case 35664:return Tm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Im;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Um;case 5125:return Fm;case 36294:return Om;case 36295:return Bm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Vm}}class Xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wm(t.type)}}class qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wm(t.type)}}class Ym{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Tc(i,e){i.seq.push(e),i.map[e.id]=e}function $m(i,e,t){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const a=Vr.exec(n),r=Vr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Tc(t,c===void 0?new Xm(o,i,e):new qm(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ym(o),Tc(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);$m(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Ac(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Km=37297;let Jm=0;function Zm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Rc=new Be;function Qm(i){Qe._getMatrix(Rc,Qe.workingColorSpace,i);const e=`mat3( ${Rc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Da:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Zm(i.getShaderSource(e),o)}else return a}function jm(i,e){const t=Qm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const eg={[jc]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[$a]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function tg(i,e){const t=eg[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new L;function ng(){Qe.getLuminanceCoefficients(_a);const i=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function sg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ag(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Ts(i){return i!==""}function Pc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(rg,og)}function og(i,e){const t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zo(t)}const lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(lg,cg)}function cg(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Dc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hg={[Sa]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function dg(i){return hg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ug={[Ds]:"ENVMAP_MODE_REFRACTION"};function fg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pg={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[kd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function mg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pg[i.combine]||"ENVMAP_BLENDING_NONE"}function gg(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=dg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=fg(t),f=mg(t),u=ig(t),d=sg(a),g=s.createProgram();let _,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ts).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(_=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,jm("linearToOutputTexel",t.outputColorSpace),ng(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),r=zo(r),r=Pc(r,t),r=Lc(r,t),o=zo(o),o=Pc(o,t),o=Lc(o,t),r=Ic(r),o=Ic(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=m+_+r,w=m+p+o,b=Ac(s,s.VERTEX_SHADER,v),R=Ac(s,s.FRAGMENT_SHADER,w);s.attachShader(g,b),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(b)||"",W=s.getShaderInfoLog(R)||"",U=N.trim(),V=B.trim(),q=W.trim();let H=!0,se=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,R);else{const K=Cc(s,b,"vertex"),te=Cc(s,R,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+K+`
`+te)}else U!==""?Fe("WebGLProgram: Program Info Log:",U):(V===""||q==="")&&(se=!1);se&&(C.diagnostics={runnable:H,programLog:U,vertexShader:{log:V,prefix:_},fragmentShader:{log:q,prefix:p}})}s.deleteShader(b),s.deleteShader(R),x=new Ra(s,g),y=ag(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,Km)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=R,this}let _g=0;class xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vg(e),t.set(e,n)),n}}class vg{constructor(e){this.id=_g++,this.code=e,this.usedTimes=0}}function Mg(i){return i===Di||i===Pa||i===La}function yg(i,e,t,n,s,a){const r=new nl,o=new xg,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,y,I,C,N,B){const W=C.fog,U=N.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||V,q),se=u[x.type];let K=n.precision;x.precision!==null&&(K=n.getMaxPrecision(x.precision),K!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",K,"instead."));const te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=te!==void 0?te.length:0;let Re=0;U.morphAttributes.position!==void 0&&(Re=1),U.morphAttributes.normal!==void 0&&(Re=2),U.morphAttributes.color!==void 0&&(Re=3);let ze,Q,xe,Ee;if(se){const ge=Cn[se];ze=ge.vertexShader,Q=ge.fragmentShader}else{ze=x.vertexShader,Q=x.fragmentShader;const ge=o.getVertexShaderStage(x),at=o.getFragmentShaderStage(x);o.update(x,ge,at),xe=ge.id,Ee=at.id}const De=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,Ue=!!x.map,st=!!x.matcap,ht=!!H,$e=ht&&H.isPMREMTexture===!0,zt=!!x.aoMap,Rt=!!x.lightMap,tn=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,En=!!x.displacementMap,Nt=!!x.emissiveMap,hn=!!x.metalnessMap,dn=!!x.roughnessMap,un=x.anisotropy>0,O=x.clearcoat>0,fn=x.diffuseRoughness>0,mt=x.dispersion>0,gt=x.retroreflectivity>0,me=x.iridescence>0,Ct=x.sheen>0,Ne=x.transmission>0,Oe=un&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,M=O&&!!x.clearcoatNormalMap,k=O&&!!x.clearcoatRoughnessMap,ie=fn&&!!x.diffuseRoughnessMap,ee=me&&!!x.iridescenceMap,oe=me&&!!x.iridescenceThicknessMap,ue=Ct&&!!x.sheenColorMap,J=Ct&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ce=!!x.specularColorMap,P=!!x.specularIntensityMap,j=Ne&&!!x.transmissionMap,$=Ne&&!!x.thicknessMap,he=!!x.gradientMap,re=!!x.alphaMap,le=x.alphaTest>0,Le=!!x.alphaHash,We=!!x.extensions;let ae=Yn;x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Ie=$e?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ve={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:Q,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:K,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:st,envMap:ht,envMapMode:ht&&H.mapping,envMapPMREM:$e,envMapMaxLod:$e?Ie.length-1:null,envMapSize:$e?Ie[0].width:null,aoMap:zt,lightMap:Rt,bumpMap:tn,normalMap:_t,displacementMap:En,emissiveMap:Nt,normalMapObjectSpace:_t&&x.normalMapType===Wd,normalMapTangentSpace:_t&&x.normalMapType===No,packedNormalMap:_t&&x.normalMapType===No&&Mg(x.normalMap.format),metalnessMap:hn,roughnessMap:dn,anisotropy:un,anisotropyMap:Oe,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:fn,diffuseRoughnessMap:ie,dispersion:mt,retroreflection:gt,iridescence:me,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:Ct,sheenColorMap:ue,sheenRoughnessMap:J,specularMap:Z,specularColorMap:ce,specularIntensityMap:P,transmission:Ne,transmissionMap:j,thicknessMap:$,gradientMap:he,opaque:x.transparent===!1&&x.blending===Dn&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Le,combine:x.combine,mapUv:Ue&&d(x.map.channel),aoMapUv:zt&&d(x.aoMap.channel),lightMapUv:Rt&&d(x.lightMap.channel),bumpMapUv:tn&&d(x.bumpMap.channel),normalMapUv:_t&&d(x.normalMap.channel),displacementMapUv:En&&d(x.displacementMap.channel),emissiveMapUv:Nt&&d(x.emissiveMap.channel),metalnessMapUv:hn&&d(x.metalnessMap.channel),roughnessMapUv:dn&&d(x.roughnessMap.channel),anisotropyMapUv:Oe&&d(x.anisotropyMap.channel),clearcoatMapUv:A&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(x.sheenRoughnessMap.channel),specularMapUv:Z&&d(x.specularMap.channel),specularColorMapUv:ce&&d(x.specularColorMap.channel),specularIntensityMapUv:P&&d(x.specularIntensityMap.channel),transmissionMapUv:j&&d(x.transmissionMap.channel),thicknessMapUv:$&&d(x.thicknessMap.channel),alphaMapUv:re&&d(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||un),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Ue||re),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Re,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:B.filter(ge=>ge.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ut,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:We&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&x.extensions.multiDraw===!0||wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function _(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(y,x),m(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function m(x,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.retroreflection&&r.enable(24),y.diffuseRoughness&&r.enable(25),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),y.packedNormalMap&&r.enable(22),y.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),y.numLightProbeGrids>0&&r.enable(22),y.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function v(x){const y=u[x.type];let I;if(y){const C=Cn[y];I=Vu.clone(C.uniforms)}else I=x.uniforms;return I}function w(x,y){let I=h.get(y);return I!==void 0?++I.usedTimes:(I=new gg(i,y,x,s),c.push(I),h.set(y,I)),I}function b(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:T}}function Sg(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uc(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,_,p,m){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=m),e++,v}function l(u,d,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);const w=o(u,d,g,_,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(u,d,g,_,p,m){const v=o(u,d,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||bg),n.length>1&&n.sort(d||Nc),s.length>1&&s.sort(d||Nc)}function f(){for(let u=e,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:f,sort:h}}function wg(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Uc,i.set(n,[r])):s>=a.length?(r=new Uc,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Eg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ge};break;case"SpotLight":t={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ag=0;function Rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cg(i){const e=new Eg,t=Tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,a=new ct,r=new ct;function o(c){let h=0,f=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,v=0,w=0,b=0,R=0,T=0,x=0,y=0,I=0,C=0;c.sort(Rg);for(let B=0,W=c.length;B<W;B++){const U=c[B],V=U.color,q=U.intensity,H=U.distance;let se=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Di?se=U.shadow.map.texture:se=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=V.r*q,f+=V.g*q,u+=V.b*q;else if(U.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(U.sh.coefficients[K],q);C++}else if(U.isSunLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,ne=t.get(U);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=se;const Re=te.getViewportCount();for(let ze=0;ze<Re;ze++)n.sunShadowMatrix[_+ze]=te.getMatrix(ze),n.sunShadowCascade[_+ze]=te._cascadeData[ze];_+=Re,g++}n.sun[d]=K,d++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,ne=t.get(U);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=U.shadow.matrix,R++}n.directional[p]=K,p++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(V).multiplyScalar(q),K.distance=H,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,n.spot[v]=K;const te=U.shadow;if(U.map&&(n.spotLightMap[y]=U.map,y++,te.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[v]=te.matrix,U.castShadow){const ne=t.get(U);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=se,x++}v++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(V).multiplyScalar(q),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=K,w++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const te=U.shadow,ne=t.get(U);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=se,n.pointShadowMatrix[m]=U.shadow.matrix,T++}n.point[m]=K,m++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(q),K.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[b]=K,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==g||N.numDirectionalShadows!==R||N.numPointShadows!==T||N.numSpotShadows!==x||N.numSpotMaps!==y||N.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,N.sunLength=d,N.directionalLength=p,N.pointLength=m,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=g,N.numDirectionalShadows=R,N.numPointShadows=T,N.numSpotShadows=x,N.numSpotMaps=y,N.numLightProbes=C,n.version=Ag++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const b=c[v];if(b.isSunLight){const R=n.sun[f];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(m),f++}else if(b.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),u++}else if(b.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const R=n.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),r.identity(),a.copy(b.matrixWorld),a.premultiply(m),r.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(r),R.halfHeight.applyMatrix4(r),_++}else if(b.isPointLight){const R=n.point[d];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const R=n.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Fc(i){const e=new Cg(i),t=[],n=[],s=[];function a(f){h.camera=f,t.length=0,n.length=0,s.length=0}function r(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Pg(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Fc(i),e.set(s,[o])):a>=r.length?(o=new Fc(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Ng=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Oc=new ct,ys=new L,Wr=new L;function Ug(i,e,t){let n=new Fs;const s=new be,a=new be,r=new vt,o=new Yu,l=new $u,c={},h=t.maxTextureSize,f={[ui]:jt,[jt]:ui,[ut]:ut},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let m=this.type;this.render=function(T,x,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===$o&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sa);const I=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ts),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=m!==this.type;W&&x.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(V=>V.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,V=T.length;U<V;U++){const q=T[U],H=q.shadow;if(H===void 0){Fe("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const se=H.getFrameExtents();s.multiply(se),a.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/se.x),s.x=a.x*se.x,H.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/se.y),s.y=a.y*se.y,H.mapSize.y=a.y));const K=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=K,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Es){if(q.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Nn(s.x,s.y,{format:Di,type:On,minFilter:nn,magFilter:nn,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new as(s.x,s.y,Pn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=fi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt}else q.isPointLight?(H.map=new ul(s.x),H.map.depthTexture=new Ch(s.x,Fn)):(H.map=new Nn(s.x,s.y),H.map.depthTexture=new as(s.x,s.y,Fn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=fi,this.type===Sa?(H.map.depthTexture.compareFunction=K?ph:fh,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,y);const ne=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:y.layers;for(let Re=0;Re<te;Re++){const ze=H.getCamera(Re);if(q.isPointLight){const Q=H.camera,xe=H.matrix,Ee=q.distance||Q.far;Ee!==Q.far&&(Q.far=Ee,Q.updateProjectionMatrix()),ys.setFromMatrixPosition(q.matrixWorld),Q.position.copy(ys),Wr.copy(Q.position),Wr.add(Dg[Re]),Q.up.copy(Ng[Re]),Q.lookAt(Wr),Q.updateMatrixWorld(),xe.makeTranslation(-ys.x,-ys.y,-ys.z),Oc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oc,Q.coordinateSystem,Q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Re),i.clear();else{Re===0&&(i.setRenderTarget(H.map),i.clear());const Q=H.getViewport(Re);r.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),B.viewport(r)}n=H.getFrustum(Re),b(x,y,ze,q,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Es&&v(H,y),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,C,N)};function v(T,x){const y=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Nn(s.x,s.y,{format:Di,type:On}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,y,u,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,y,d,_,null)}function w(T,x,y,I){let C=null;const N=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)C=N;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const B=C.uuid,W=x.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let V=U[W];V===void 0&&(V=C.clone(),U[W]=V,x.addEventListener("dispose",R)),C=V}if(C.visible=x.visible,C.wireframe=x.wireframe,I===Es?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:f[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const B=i.properties.get(C);B.light=y}return C}function b(T,x,y,I,C,N){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Es)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const U=e.update(T),V=T.material;if(Array.isArray(V)){const q=U.groups;for(let H=0,se=q.length;H<se;H++){const K=q[H],te=V[K.materialIndex];if(te&&te.visible){const ne=w(T,te,I,N);T.onBeforeShadow(i,T,x,y,U,ne,K),i.renderBufferDirect(y,null,U,ne,T,K),T.onAfterShadow(i,T,x,y,U,ne,K)}}}else if(V.visible){const q=w(T,V,I,N);T.onBeforeShadow(i,T,x,y,U,q,null),i.renderBufferDirect(y,null,U,q,T,null),T.onAfterShadow(i,T,x,y,U,q,null)}}const W=T.children;for(let U=0,V=W.length;U<V;U++)b(W[U],x,y,I,C,N)}function R(T){T.target.removeEventListener("dispose",R);for(const y in c){const I=c[y],C=T.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function Fg(i,e){function t(){let P=!1;const j=new vt;let $=null;const he=new vt(0,0,0,0);return{setMask:function(re){$!==re&&!P&&(i.colorMask(re,re,re,re),$=re)},setLocked:function(re){P=re},setClear:function(re,le,Le,We,ae){ae===!0&&(re*=We,le*=We,Le*=We),j.set(re,le,Le,We),he.equals(j)===!1&&(i.clearColor(re,le,Le,We),he.copy(j))},reset:function(){P=!1,$=null,he.set(-1,0,0,0)}}}function n(){let P=!1,j=!1,$=null,he=null,re=null;return{setReversed:function(le){if(j!==le){const Le=e.get("EXT_clip_control");le?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),j=le;const We=re;re=null,this.setClear(We)}},getReversed:function(){return j},setTest:function(le){le?Me(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(le){$!==le&&!P&&(i.depthMask(le),$=le)},setFunc:function(le){if(j&&(le=eu[le]),he!==le){switch(le){case $r:i.depthFunc(i.NEVER);break;case Kr:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Zr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case jr:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=le}},setLocked:function(le){P=le},setClear:function(le){re!==le&&(re=le,j&&(le=1-le),i.clearDepth(le))},reset:function(){P=!1,$=null,he=null,re=null,j=!1}}}function s(){let P=!1,j=null,$=null,he=null,re=null,le=null,Le=null,We=null,ae=null;return{setTest:function(Ie){P||(Ie?Me(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(Ie){j!==Ie&&!P&&(i.stencilMask(Ie),j=Ie)},setFunc:function(Ie,Ve,ge){($!==Ie||he!==Ve||re!==ge)&&(i.stencilFunc(Ie,Ve,ge),$=Ie,he=Ve,re=ge)},setOp:function(Ie,Ve,ge){(le!==Ie||Le!==Ve||We!==ge)&&(i.stencilOp(Ie,Ve,ge),le=Ie,Le=Ve,We=ge)},setLocked:function(Ie){P=Ie},setClear:function(Ie){ae!==Ie&&(i.clearStencil(Ie),ae=Ie)},reset:function(){P=!1,j=null,$=null,he=null,re=null,le=null,Le=null,We=null,ae=null}}}const a=new t,r=new n,o=new s;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,w=null,b=null,R=null,T=null,x=null,y=new Ge(0,0,0),I=0,C=!1,N=null,B=null,W=null,U=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,se=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=se>=1):K.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=se>=2);let te=null,ne={};const Re=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Q=new vt().fromArray(Re),xe=new vt().fromArray(ze);function Ee(P,j,$,he){const re=new Uint8Array(4),le=i.createTexture();i.bindTexture(P,le),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<$;Le++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(j+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return le}const De={};De[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),r.setFunc(Is),tn(!1),_t(Dl),Me(i.CULL_FACE),zt(ts);function Me(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function He(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function wt(P,j){return u[P]!==j?(i.bindFramebuffer(P,j),u[P]=j,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ue(P,j){let $=g,he=!1;if(P){$=d.get(j),$===void 0&&($=[],d.set(j,$));const re=P.textures;if($.length!==re.length||$[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Le=re.length;le<Le;le++)$[le]=i.COLOR_ATTACHMENT0+le;$.length=re.length,he=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,he=!0);he&&i.drawBuffers($)}function st(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const ht={[es]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[wd]:i.FUNC_REVERSE_SUBTRACT};ht[Ed]=i.MIN,ht[Td]=i.MAX;const $e={[Ad]:i.ZERO,[Rd]:i.ONE,[Cd]:i.SRC_COLOR,[Jc]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Dd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[Zc]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(P,j,$,he,re,le,Le,We,ae,Ie){if(P===ts){p===!0&&(He(i.BLEND),p=!1);return}if(p===!1&&(Me(i.BLEND),p=!0),P!==Sd){if(P!==m||Ie!==C){if((v!==es||R!==es)&&(i.blendEquation(i.FUNC_ADD),v=es,R=es),Ie)switch(P){case Dn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",P);break}else switch(P){case Dn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nl:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",P);break}w=null,b=null,T=null,x=null,y.set(0,0,0),I=0,m=P,C=Ie}return}re=re||j,le=le||$,Le=Le||he,(j!==v||re!==R)&&(i.blendEquationSeparate(ht[j],ht[re]),v=j,R=re),($!==w||he!==b||le!==T||Le!==x)&&(i.blendFuncSeparate($e[$],$e[he],$e[le],$e[Le]),w=$,b=he,T=le,x=Le),(We.equals(y)===!1||ae!==I)&&(i.blendColor(We.r,We.g,We.b,ae),y.copy(We),I=ae),m=P,C=!1}function Rt(P,j){P.side===ut?He(i.CULL_FACE):Me(i.CULL_FACE);let $=P.side===jt;j&&($=!$),tn($),P.blending===Dn&&P.transparent===!1?zt(ts):zt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const he=P.stencilWrite;o.setTest(he),he&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function tn(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function _t(P){P!==Md?(Me(i.CULL_FACE),P!==B&&(P===Dl?i.cullFace(i.BACK):P===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),B=P}function En(P){P!==W&&(H&&i.lineWidth(P),W=P)}function Nt(P,j,$){P?(Me(i.POLYGON_OFFSET_FILL),(U!==j||V!==$)&&(U=j,V=$,r.getReversed()&&(j=-j,$=-$),i.polygonOffset(j,$))):He(i.POLYGON_OFFSET_FILL)}function hn(P){P?Me(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function dn(P){P===void 0&&(P=i.TEXTURE0+q-1),te!==P&&(i.activeTexture(P),te=P)}function un(P,j,$){$===void 0&&(te===null?$=i.TEXTURE0+q-1:$=te);let he=ne[$];he===void 0&&(he={type:void 0,texture:void 0},ne[$]=he),(he.type!==P||he.texture!==j)&&(te!==$&&(i.activeTexture($),te=$),i.bindTexture(P,j||De[P]),he.type=P,he.texture=j)}function O(){const P=ne[te];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fn(){try{i.compressedTexImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function mt(){try{i.compressedTexImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function gt(){try{i.texSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function me(){try{i.texSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function Ct(){try{i.compressedTexSubImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function Oe(){try{i.texStorage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function M(){try{i.texImage2D(...arguments)}catch(P){tt("WebGLState:",P)}}function k(){try{i.texImage3D(...arguments)}catch(P){tt("WebGLState:",P)}}function ie(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function ee(P,j){f[P]!==j&&(i.pixelStorei(P,j),f[P]=j)}function oe(P){Q.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function ue(P){xe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),xe.copy(P))}function J(P,j){let $=c.get(j);$===void 0&&($=new WeakMap,c.set(j,$));let he=$.get(P);he===void 0&&(he=i.getUniformBlockIndex(j,P.name),i.uniformBlockBinding(j,he,he),$.set(P,he))}function Z(P,j,$){const re=c.get(j).get(P);l[re]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,$),l[re]=$)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,ne={},u={},l={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,w=null,b=null,R=null,T=null,x=null,y=new Ge(0,0,0),I=0,C=!1,N=null,B=null,W=null,U=null,V=null,Q.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Me,disable:He,bindFramebuffer:wt,drawBuffers:Ue,useProgram:st,setBlending:zt,setMaterial:Rt,setFlipSided:tn,setCullFace:_t,setLineWidth:En,setPolygonOffset:Nt,setScissorTest:hn,activeTexture:dn,bindTexture:un,unbindTexture:O,compressedTexImage2D:fn,compressedTexImage3D:mt,texImage2D:M,texImage3D:k,pixelStorei:ee,getParameter:ie,updateUBOMapping:J,uniformBlockBinding:Z,texStorage2D:Oe,texStorage3D:A,texSubImage2D:gt,texSubImage3D:me,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ne,scissor:oe,viewport:ue,reset:ce}}function Og(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap,f=new Set;let u;const d=new WeakMap,g=new Set,_=new FinalizationRegistry(A=>g.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return p?new OffscreenCanvas(A,M):Na("canvas")}function v(A,M,k){let ie=1;const ee=Oe(A);if((ee.width>k||ee.height>k)&&(ie=k/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(ie*ee.width),ue=Math.floor(ie*ee.height);u===void 0&&(u=m(oe,ue));const J=M?m(oe,ue):u;return J.width=oe,J.height=ue,J.getContext("2d").drawImage(A,0,0,oe,ue),Fe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+ue+")."),J}else return"data"in A&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function w(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,M,k,ie,ee,oe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;ie&&(ue=e.get("EXT_texture_norm16"),ue||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8),k===i.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),k===i.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),M===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8),k===i.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),k===i.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),k===i.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),M===i.RGBA){const Z=oe?Da:Qe.getTransfer(ee);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=Z===rt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),k===i.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(A,M){let k;return A?M===null||M===Fn||M===ss?k=i.DEPTH24_STENCIL8:M===Pn?k=i.DEPTH32F_STENCIL8:M===Ns&&(k=i.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fn||M===ss?k=i.DEPTH_COMPONENT24:M===Pn?k=i.DEPTH_COMPONENT32F:M===Ns&&(k=i.DEPTH_COMPONENT16),k}function y(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){const M=new WeakRef(A);n.get(A).__ref=M,g.add(M),_.register(A,M,M)}function C(A){const M=n.get(A).__ref;M!==void 0&&(g.delete(M),_.unregister(M))}function N(A){W(A.target)}function B(A){U(A.target)}function W(A){A.removeEventListener("dispose",N),C(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function U(A){A.removeEventListener("dispose",B),C(A),se(A)}function V(){for(const A of g){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?U(M):W(M))}g.clear(),f.clear()}function q(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,ie=d.get(k);if(ie){const ee=ie[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&H(A),Object.keys(ie).length===0&&d.delete(k)}n.remove(A)}function H(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const k=A.source,ie=d.get(k);delete ie[M.__cacheKey],r.memory.textures--}function se(A){const M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const k=A.depthTexture;if(k&&k.renderTarget===A&&W(k),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let oe=0;oe<M.__webglFramebuffer[ee].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[ee][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[ee]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ie=A.textures;for(let ee=0,oe=ie.length;ee<oe;ee++){const ue=n.get(ie[ee]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),r.memory.textures--),n.remove(ie[ee])}n.remove(A)}let K=0;function te(){K=0}function ne(){return K}function Re(A){K=A}function ze(){const A=K;return A>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,A}function Q(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function xe(A,M){const k=n.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const ie=A.image;if(ie===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(k,A,M);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function Ee(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Rt(k,A,M);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function De(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Rt(k,A,M);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function Me(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){tn(k,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}const He={[to]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},wt={[Gt]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[fr]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Ue={[qd]:i.NEVER,[mh]:i.ALWAYS,[Yd]:i.LESS,[fh]:i.LEQUAL,[$d]:i.EQUAL,[ph]:i.GEQUAL,[Kd]:i.GREATER,[Jd]:i.NOTEQUAL};function st(A,M){if(M.type===Pn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===nn||M.magFilter===fr||M.magFilter===Vs||M.magFilter===ci||M.minFilter===nn||M.minFilter===fr||M.minFilter===Vs||M.minFilter===ci)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,He[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,He[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,He[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,wt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,wt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Vs&&M.minFilter!==ci||M.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ht(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),I(M));const ie=M.source;let ee=d.get(ie);ee===void 0&&(ee={},d.set(ie,ee));const oe=Q(M);if(oe!==A.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,k=!0),ee[oe].usedTimes++;const ue=ee[A.__cacheKey];ue!==void 0&&(ee[A.__cacheKey].usedTimes--,ue.usedTimes===0&&H(M)),A.__cacheKey=oe,A.__webglTexture=ee[oe].texture}return k}function $e(A,M,k){return Math.floor(Math.floor(A/k)/M)}function zt(A,M,k,ie){const oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,ie,M.data);else{oe.sort((P,j)=>P.start-j.start);let ue=0;for(let P=1;P<oe.length;P++){const j=oe[ue],$=oe[P],he=j.start+j.count,re=$e($.start,M.width,4),le=$e(j.start,M.width,4);$.start<=he+1&&re===le&&$e($.start+$.count-1,M.width,4)===re?j.count=Math.max(j.count,$.start+$.count-j.start):(++ue,oe[ue]=$)}oe.length=ue+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let P=0,j=oe.length;P<j;P++){const $=oe[P],he=Math.floor($.start/4),re=Math.ceil($.count/4),le=he%M.width,Le=Math.floor(he/M.width),We=re,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(i.TEXTURE_2D,0,le,Le,We,ae,k,ie,M.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function Rt(A,M,k){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);const ee=ht(A,M),oe=M.source;t.bindTexture(ie,A.__webglTexture,i.TEXTURE0+k);const ue=n.get(oe);if(oe.version!==ue.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ae=Qe.getPrimaries(Qe.workingColorSpace),Ie=M.colorSpace===oi?null:Qe.getPrimaries(M.colorSpace),Ve=M.colorSpace===oi||ae===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=v(M.image,!1,s.maxTextureSize);Z=Ne(M,Z);const ce=a.convert(M.format,M.colorSpace),P=a.convert(M.type);let j=T(M.internalFormat,ce,P,M.normalized,M.colorSpace,M.isVideoTexture);st(ie,M);let $;const he=M.mipmaps,re=M.isVideoTexture!==!0,le=ue.__version===void 0||ee===!0,Le=oe.dataReady,We=y(M,Z);if(M.isDepthTexture)j=x(M.format===hi,M.type),le&&(re?t.texStorage2D(i.TEXTURE_2D,1,j,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,j,Z.width,Z.height,0,ce,P,null));else if(M.isDataTexture)if(he.length>0){re&&le&&t.texStorage2D(i.TEXTURE_2D,We,j,he[0].width,he[0].height);for(let ae=0,Ie=he.length;ae<Ie;ae++)$=he[ae],re?Le&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,ce,P,$.data):t.texImage2D(i.TEXTURE_2D,ae,j,$.width,$.height,0,ce,P,$.data);M.generateMipmaps=!1}else re?(le&&t.texStorage2D(i.TEXTURE_2D,We,j,Z.width,Z.height),Le&&zt(M,Z,ce,P)):t.texImage2D(i.TEXTURE_2D,0,j,Z.width,Z.height,0,ce,P,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){re&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,j,he[0].width,he[0].height,Z.depth);for(let ae=0,Ie=he.length;ae<Ie;ae++)if($=he[ae],M.format!==Ln)if(ce!==null)if(re){if(Le)if(M.layerUpdates.size>0){const Ve=gc($.width,$.height,M.format,M.type);for(const ge of M.layerUpdates){const at=$.data.subarray(ge*Ve/$.data.BYTES_PER_ELEMENT,(ge+1)*Ve/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ge,$.width,$.height,1,ce,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,Z.depth,ce,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,j,$.width,$.height,Z.depth,0,$.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,Z.depth,ce,P,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,j,$.width,$.height,Z.depth,0,ce,P,$.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{re&&le&&t.texStorage2D(i.TEXTURE_2D,We,j,he[0].width,he[0].height);for(let ae=0,Ie=he.length;ae<Ie;ae++)$=he[ae],M.format!==Ln?ce!==null?re?Le&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,ce,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,j,$.width,$.height,0,$.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Le&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,$.width,$.height,ce,P,$.data):t.texImage2D(i.TEXTURE_2D,ae,j,$.width,$.height,0,ce,P,$.data)}else if(M.isDataArrayTexture)if(re){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,j,Z.width,Z.height,Z.depth),Le)if(M.layerUpdates.size>0){const ae=gc(Z.width,Z.height,M.format,M.type);for(const Ie of M.layerUpdates){const Ve=Z.data.subarray(Ie*ae/Z.data.BYTES_PER_ELEMENT,(Ie+1)*ae/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,Z.width,Z.height,1,ce,P,Ve)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,P,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Z.width,Z.height,Z.depth,0,ce,P,Z.data);else if(M.isData3DTexture)re?(le&&t.texStorage3D(i.TEXTURE_3D,We,j,Z.width,Z.height,Z.depth),Le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,P,Z.data)):t.texImage3D(i.TEXTURE_3D,0,j,Z.width,Z.height,Z.depth,0,ce,P,Z.data);else if(M.isFramebufferTexture){if(le)if(re)t.texStorage2D(i.TEXTURE_2D,We,j,Z.width,Z.height);else{let ae=Z.width,Ie=Z.height;for(let Ve=0;Ve<We;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,j,ae,Ie,0,ce,P,null),ae>>=1,Ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Z.parentNode!==ae){ae.appendChild(Z),f.add(M),ae.onpaint=Ie=>{const Ve=Ie.changedElements;for(const ge of f)Ve.includes(ge.image)&&(ge.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const Ve=i.RGBA,ge=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,ge,at,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(re&&le){const ae=Oe(he[0]);t.texStorage2D(i.TEXTURE_2D,We,j,ae.width,ae.height)}for(let ae=0,Ie=he.length;ae<Ie;ae++)$=he[ae],re?Le&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ce,P,$):t.texImage2D(i.TEXTURE_2D,ae,j,ce,P,$);M.generateMipmaps=!1}else if(re){if(le){const ae=Oe(Z);t.texStorage2D(i.TEXTURE_2D,We,j,ae.width,ae.height)}Le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,P,Z)}else t.texImage2D(i.TEXTURE_2D,0,j,ce,P,Z);w(M)&&M.mipmapsAutoUpdate===!0&&b(ie),ue.__version=oe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function tn(A,M,k){if(M.image.length!==6)return;const ie=ht(A,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const oe=n.get(ee);if(ee.version!==oe.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);const ue=Qe.getPrimaries(Qe.workingColorSpace),J=M.colorSpace===oi?null:Qe.getPrimaries(M.colorSpace),Z=M.colorSpace===oi||ue===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,j=[];for(let ge=0;ge<6;ge++)!ce&&!P?j[ge]=v(M.image[ge],!0,s.maxCubemapSize):j[ge]=P?M.image[ge].image:M.image[ge],j[ge]=Ne(M,j[ge]);const $=j[0],he=a.convert(M.format,M.colorSpace),re=a.convert(M.type);let le=T(M.internalFormat,he,re,M.normalized,M.colorSpace);const Le=M.isVideoTexture!==!0,We=oe.__version===void 0||ie===!0,ae=ee.dataReady;let Ie=y(M,$);st(i.TEXTURE_CUBE_MAP,M);let Ve;if(M.isDepthTexture){if(le=x(M.format===hi,M.type),We)if(Le)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,$.width,$.height);else for(let ge=0;ge<6;ge++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,$.width,$.height,0,he,re,null)}else if(ce){Le&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,le,$.width,$.height);for(let ge=0;ge<6;ge++){Ve=j[ge].mipmaps;for(let at=0;at<Ve.length;at++){const Ut=Ve[at];M.format!==Ln?he!==null?Le?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at,0,0,Ut.width,Ut.height,he,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at,le,Ut.width,Ut.height,0,Ut.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at,0,0,Ut.width,Ut.height,he,re,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at,le,Ut.width,Ut.height,0,he,re,Ut.data)}}}else{if(Ve=M.mipmaps,Le&&We){Ve.length>0&&Ie++;const ge=Oe(j[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(P){Le?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,j[ge].width,j[ge].height,he,re,j[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,j[ge].width,j[ge].height,0,he,re,j[ge].data);for(let at=0;at<Ve.length;at++){const Qn=Ve[at].image[ge].image;Le?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at+1,0,0,Qn.width,Qn.height,he,re,Qn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at+1,le,Qn.width,Qn.height,0,he,re,Qn.data)}}else{Le?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,he,re,j[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,he,re,j[ge]);for(let at=0;at<Ve.length;at++){const Ut=Ve[at];Le?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at+1,0,0,he,re,Ut.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,at+1,le,he,re,Ut.image[ge])}}}w(M)&&M.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),oe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function _t(A,M,k,ie,ee,oe){const ue=a.convert(k.format,k.colorSpace),J=a.convert(k.type),Z=T(k.internalFormat,ue,J,k.normalized,k.colorSpace),ce=n.get(M),P=n.get(k);if(P.__renderTarget=M,!ce.__hasExternalTextures){const j=Math.max(1,M.width>>oe),$=Math.max(1,M.height>>oe);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,Z,j,$,M.depth,0,ue,J,null):t.texImage2D(ee,oe,Z,j,$,0,ue,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,P.__webglTexture,0,gt(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,P.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function En(A,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const ie=M.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,oe=x(M.stencilBuffer,ee),ue=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(M),oe,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(M),oe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,oe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,A)}else{const ie=M.textures;for(let ee=0;ee<ie.length;ee++){const oe=ie[ee],ue=a.convert(oe.format,oe.colorSpace),J=a.convert(oe.type),Z=T(oe.internalFormat,ue,J,oe.normalized,oe.colorSpace);me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(M),Z,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(M),Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(A,M,k){const ie=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(M.depthTexture);ee.__renderTarget=M;const oe=ie?M.depthTexture.image[0]:M.depthTexture.image;(!ee.__webglTexture||oe.width!==M.width||oe.height!==M.height)&&(oe.width=M.width,oe.height=M.height,M.depthTexture.needsUpdate=!0),ie?Me(M.depthTexture,0):xe(M.depthTexture,0);const ue=ee.__webglTexture,J=gt(M),Z=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ce=M.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===fi)me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Z,ue,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Z,ue,0);else if(M.depthTexture.format===hi)me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Z,ue,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Z,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const ie=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ie){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=ie}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let ie=0;ie<6;ie++)Nt(M.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?Nt(M.__webglFramebuffer[0],A,0):Nt(M.__webglFramebuffer,A,0);else if(k){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]===void 0)M.__webglDepthbuffer[ie]=i.createRenderbuffer(),En(M.__webglDepthbuffer[ie],A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,oe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),En(M.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dn(A,M,k){const ie=n.get(A);M!==void 0&&_t(ie.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&hn(A)}function un(A){const M=A.texture,k=n.get(A),ie=n.get(M);A.addEventListener("dispose",B),I(A);const ee=A.textures,oe=A.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,r.memory.textures++),oe){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let Z=0;Z<M.mipmaps.length;Z++)k.__webglFramebuffer[J][Z]=i.createFramebuffer()}else k.__webglFramebuffer[J]=i.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)k.__webglFramebuffer[J]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ue)for(let J=0,Z=ee.length;J<Z;J++){const ce=n.get(ee[J]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&me(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<ee.length;J++){const Z=ee[J];k.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const ce=a.convert(Z.format,Z.colorSpace),P=a.convert(Z.type),j=T(Z.internalFormat,ce,P,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),$=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,k.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),En(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),st(i.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)_t(k.__webglFramebuffer[J][Z],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Z);else _t(k.__webglFramebuffer[J],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);w(M)?b(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let J=0,Z=ee.length;J<Z;J++){const ce=ee[J],P=n.get(ce);let j=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,P.__webglTexture),st(j,ce),_t(k.__webglFramebuffer,A,ce,i.COLOR_ATTACHMENT0+J,j,0),w(ce)&&b(j)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,ie.__webglTexture),st(J,M),M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)_t(k.__webglFramebuffer[Z],A,M,i.COLOR_ATTACHMENT0,J,Z);else _t(k.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,J,0);w(M)?b(J):M.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&hn(A)}function O(A){const M=A.textures;for(let k=0,ie=M.length;k<ie;k++){const ee=M[k];if(w(ee)&&ee.mipmapsAutoUpdate===!0){const oe=R(A),ue=n.get(ee).__webglTexture;t.bindTexture(oe,ue),b(oe),t.unbindTexture()}}}const fn=[];function mt(A){if(A.samples>0){if(me(A)===!1){const M=A.textures,k=A.width,ie=A.height;let ee=i.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),J=M.length>1;if(J)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const P=n.get(M[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,i.NEAREST),l===!0&&(fn.length=0,fn.push(i.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&fn.push(oe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const P=n.get(M[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function gt(A){return Math.min(s.maxSamples,A.samples)}function me(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(A){const M=r.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ne(A,M){const k=A.colorSpace,ie=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ia&&k!==oi&&(Qe.getTransfer(k)===rt?(ie!==Ln||ee!==ln)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",k)),M}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=Re,this.setTexture2D=xe,this.setTexture2DArray=Ee,this.setTexture3D=De,this.setTextureCube=Me,this.rebindTextures=dn,this.setupRenderTarget=un,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=me,this.dispose=V}function Bg(i,e){function t(n,s=oi){let a;const r=Qe.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rh)return i.BYTE;if(n===oh)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===dh)return i.RGB;if(n===Ln)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===uh)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===ba||n===wa||n===Ea||n===Ta)if(r===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ao||n===ro)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===io)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===Pa||n===fo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===oo||n===lo)return r===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===co)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return a.COMPRESSED_R11_EAC;if(n===uo)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Pa)return a.COMPRESSED_RG11_EAC;if(n===fo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===yo||n===So||n===bo||n===wo||n===Eo||n===To||n===Ao)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===po)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return r===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Co||n===Po)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ro)return r===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===Io||n===La||n===Do)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Lo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ph(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:zg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hg extends Ui{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Gg,m={},v=t.getContextAttributes();let w=null,b=null;const R=[],T=[],x=new be;let y=null,I=null;const C=new qt;C.viewport=new vt;const N=new qt;N.viewport=new vt;const B=[C,N],W=new Zu;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let xe=R[Q];return xe===void 0&&(xe=new Sr,R[Q]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Q){let xe=R[Q];return xe===void 0&&(xe=new Sr,R[Q]=xe),xe.getGripSpace()},this.getHand=function(Q){let xe=R[Q];return xe===void 0&&(xe=new Sr,R[Q]=xe),xe.getHandSpace()};function q(Q){const xe=T.indexOf(Q.inputSource);if(xe===-1)return;const Ee=R[xe];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||r),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",se);for(let Q=0;Q<R.length;Q++){const xe=T[Q];xe!==null&&(T[Q]=null,R[Q].disconnect(xe))}U=null,V=null,p.reset();for(const Q in m)delete m[Q];if(e.setRenderTarget(w),d=null,u=null,f=null,s=null,b=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),I!==null){const Q=I.camera;Q.fov=I.fov,Q.zoom=I.zoom,Q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,De=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?hi:fi,De=v.stencil?ss:Fn);const He={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Nn(u.textureWidth,u.textureHeight,{format:Ln,type:ln,depthTexture:new as(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Nn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(Q){for(let xe=0;xe<Q.removed.length;xe++){const Ee=Q.removed[xe],De=T.indexOf(Ee);De>=0&&(T[De]=null,R[De].disconnect(Ee))}for(let xe=0;xe<Q.added.length;xe++){const Ee=Q.added[xe];let De=T.indexOf(Ee);if(De===-1){for(let He=0;He<R.length;He++)if(He>=T.length){T.push(Ee),De=He;break}else if(T[He]===null){T[He]=Ee,De=He;break}if(De===-1)break}const Me=R[De];Me&&Me.connect(Ee)}}function K(Q,xe){xe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(xe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let xe=Q.near,Ee=Q.far;p.texture!==null&&(p.depthNear>0&&(xe=p.depthNear),p.depthFar>0&&(Ee=p.depthFar)),W.near=N.near=C.near=xe,W.far=N.far=C.far=Ee,(U!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),U=W.near,V=W.far),W.layers.mask=Q.layers.mask|6,C.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;const De=Q.parent,Me=W.cameras;K(W,De);for(let He=0;He<Me.length;He++)K(Me[He],De);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&Q.isPerspectiveCamera&&(I={camera:Q,fov:Q.fov,zoom:Q.zoom}),te(Q,W,De)};function te(Q,xe,Ee){Ee===null?Q.matrix.copy(xe.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(xe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(xe.projectionMatrix),Q.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Uo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(Q){return m[Q]};let ne=null;function Re(Q,xe){if(h=xe.getViewerPose(c||r),g=xe,h!==null){const Ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let De=!1;Ee.length!==W.cameras.length&&(W.cameras.length=0,De=!0);for(let Ue=0;Ue<Ee.length;Ue++){const st=Ee[Ue];let ht=null;if(d!==null)ht=d.getViewport(st);else{const zt=f.getViewSubImage(u,st);ht=zt.viewport,Ue===0&&(e.setRenderTargetTextures(b,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(b))}let $e=B[Ue];$e===void 0&&($e=new qt,$e.layers.enable(Ue),$e.viewport=new vt,B[Ue]=$e),$e.matrix.fromArray(st.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(st.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ht.x,ht.y,ht.width,ht.height),Ue===0&&(W.matrix.copy($e.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),De===!0&&W.cameras.push($e)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Ue=f.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,s.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Ue=0;Ue<Ee.length;Ue++){const st=Ee[Ue].camera;if(st){let ht=m[st];ht||(ht=new Ph,m[st]=ht);const $e=f.getCameraImage(st);ht.sourceTexture=$e}}}}for(let Ee=0;Ee<R.length;Ee++){const De=T[Ee],Me=R[Ee];De!==null&&Me!==void 0&&Me.update(De,xe,c||r)}ne&&ne(Q,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),g=null}const ze=new Bh;ze.setAnimationLoop(Re),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}}const Vg=new ct,$h=new Be;$h.set(-1,0,0,0,1,0,0,0,1);function Wg(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,w,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(p,m):m.isMeshLambertMaterial?(a(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(p,m),f(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),_(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),w=v.envMap,b=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply($h),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xg(i,e,t,n){let s={},a={};function r(v,w){const b=w.program;n.uniformBlockBinding(v,b,s[v.id])}function o(v,w){let b=s[v.id];b===void 0&&(g(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",p));const R=w.program;n.updateUBOMapping(v,R);const T=e.render.frame;a[v.id]!==T&&(c(v),a[v.id]=T)}function l(v){const w=i.createBuffer(),b=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){const w=s[v.id],b=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,x=b.length;T<x;T++){const y=b[T];if(Array.isArray(y))for(let I=0,C=y.length;I<C;I++)h(y[I],T,I,R);else h(y,T,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,b,R){if(u(v,w,b,R)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let I=0;I<x.length;I++){const C=x[I],N=_(C,!0);f(C,v.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function f(v,w,b){typeof v=="number"||typeof v=="boolean"?w[b]=v:v.isMatrix3?(w[b]=v.elements[0],w[b+1]=v.elements[1],w[b+2]=v.elements[2],w[b+3]=0,w[b+4]=v.elements[3],w[b+5]=v.elements[4],w[b+6]=v.elements[5],w[b+7]=0,w[b+8]=v.elements[6],w[b+9]=v.elements[7],w[b+10]=v.elements[8],w[b+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-b),b):v.toArray(w,b)}function u(v,w,b,R){const T=v.value,x=w+"_"+b;if(Array.isArray(T)){R[x]===void 0&&(R[x]=[]);const y=R[x];let I=!1;for(let C=0;C<T.length;C++)d(T[C],y,C)===!0&&(I=!0);return I}return d(T,R,x)}function d(v,w,b){if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{const R=w[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(v){const w=v.uniforms;let b=0;const R=16;for(let x=0,y=w.length;x<y;x++){const I=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,N=I.length;C<N;C++){const B=I[C],W=Array.isArray(B.value)?B.value:[B.value],U=Array.isArray(w[x])||Array.isArray(B.value);let V=b;for(let H=0,se=W.length;H<se;H++){const K=W[H],te=_(K,U),ne=b%R,Re=ne%te.boundary,ze=ne+Re;b+=Re,ze!==0&&R-ze<te.storage&&(b+=R-ze),H===0&&(V=b),b+=te.storage}const q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new q((b-V)/Float32Array.BYTES_PER_ELEMENT),B.__offset=V}}const T=b%R;return T>0&&(b+=R-T),v.__size=b,v.__cache={},this}function _(v,w){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(v){const w=v.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);s={},a={}}return{bind:r,update:o,dispose:m}}const qg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function Yg(){return An===null&&(An=new wu(qg,16,16,Di,On),An.name="DFG_LUT",An.minFilter=nn,An.magFilter=nn,An.wrapS=Xn,An.wrapT=Xn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class Kh{constructor(e={}){const{canvas:t=Qd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const _=d,p=new Set([el,jo,Qo]),m=new Set([ln,Fn,Ns,ss,Jo,Zo]),v=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let R=null,T=null;const x=[],y=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,B=null,W=null,U=null,V=null;this._outputColorSpace=Qt;let q=0,H=0,se=null,K=-1,te=null;const ne=new vt,Re=new vt;let ze=null;const Q=new Ge(0);let xe=0,Ee=t.width,De=t.height,Me=1,He=null,wt=null;const Ue=new vt(0,0,Ee,De),st=new vt(0,0,Ee,De);let ht=!1;const $e=new Fs,zt=new sl;let Rt=!1,tn=!1;const _t=new ct,En=new L,Nt=new vt,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function un(){return se===null?Me:1}let O=n;function fn(S,F){return t.getContext(S,F)}let mt,gt,me,Ct,Ne,Oe,A,M,k,ie,ee,oe,ue,J,Z,ce,P,j,$,he,re,le,Le;try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),O===null){const F="webgl2";if(O=fn(F,S),O===null)throw fn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(S){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),tt("WebGLRenderer: "+S.message),S}function We(){mt=new Z0(O),mt.init(),re=new Bg(O,mt),gt=new k0(O,mt,e,re),me=new Fg(O,mt),gt.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),W=O.createFramebuffer(),U=O.createFramebuffer(),V=O.createFramebuffer(),Ct=new em(O),Ne=new Sg,Oe=new Og(O,mt,me,Ne,gt,re,Ct),A=new J0(C),M=new tf(O),le=new B0(O,M),k=new Q0(O,M,Ct,le),ie=new nm(O,k,M,le,Ct),j=new tm(O,gt,Oe),Z=new G0(Ne),ee=new yg(C,A,mt,gt,le,Z),oe=new Wg(C,Ne),ue=new wg,J=new Pg(mt),P=new O0(C,A,me,ie,g,l),ce=new Ug(C,ie,gt),Le=new Xg(O,Ct,gt,me),$=new z0(O,mt,Ct),he=new j0(O,mt,Ct),Ct.programs=ee.programs,C.capabilities=gt,C.extensions=mt,C.properties=Ne,C.renderLists=ue,C.shadowMap=ce,C.state=me,C.info=Ct}_!==ln&&(I=new sm(_,t.width,t.height,o,s,a));const ae=new Hg(C,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=mt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=mt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(S){S!==void 0&&(Me=S,this.setSize(Ee,De,!1))},this.getSize=function(S){return S.set(Ee,De)},this.setSize=function(S,F,X=!0){if(ae.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=S,De=F,t.width=Math.floor(S*Me),t.height=Math.floor(F*Me),X===!0&&(t.style.width=S+"px",t.style.height=F+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Ee*Me,De*Me).floor()},this.setDrawingBufferSize=function(S,F,X){Ee=S,De=F,Me=X,t.width=Math.floor(S*X),t.height=Math.floor(F*X),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===ln){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ne)},this.getViewport=function(S){return S.copy(Ue)},this.setViewport=function(S,F,X,z){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,F,X,z),me.viewport(ne.copy(Ue).multiplyScalar(un()).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,F,X,z){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,F,X,z),me.scissor(Re.copy(st).multiplyScalar(un()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(S){me.setScissorTest(ht=S)},this.setOpaqueSort=function(S){He=S},this.setTransparentSort=function(S){wt=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,X=!0){let z=0;if(S){let G=!1;if(se!==null){const fe=se.texture.format;G=p.has(fe)}if(G){const fe=se.texture.type,we=m.has(fe),de=P.getClearColor(),ye=P.getClearAlpha(),Ce=de.r,ke=de.g,Ke=de.b;we?(v[0]=Ce,v[1]=ke,v[2]=Ke,v[3]=ye,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=Ce,w[1]=ke,w[2]=Ke,w[3]=ye,O.clearBufferiv(O.COLOR,0,w))}else z|=O.COLOR_BUFFER_BIT}F&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),P.dispose(),ue.dispose(),J.dispose(),Oe.dispose(),Ne.dispose(),A.dispose(),ie.dispose(),k.dispose(),le.dispose(),Le.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",bl),ae.removeEventListener("sessionend",wl),Si.stop()};function Ie(S){S.preventDefault(),Ua("WebGLRenderer: Context Lost."),N=!0}function Ve(){Ua("WebGLRenderer: Context Restored."),N=!1;const S=Ct.autoReset,F=ce.enabled,X=ce.autoUpdate,z=ce.needsUpdate,G=ce.type;We(),Ct.autoReset=S,ce.enabled=F,ce.autoUpdate=X,ce.needsUpdate=z,ce.type=G}function ge(S){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){const F=S.target;F.removeEventListener("dispose",at),Ut(F)}function Ut(S){Qn(S),Ne.remove(S)}function Qn(S){const F=Ne.get(S).programs;F!==void 0&&(F.forEach(function(X){ee.releaseProgram(X)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,X,z,G,fe){F===null&&(F=hn);const we=G.isMesh&&G.matrixWorld.determinantAffine()<0,de=_d(S,F,X,z,G);me.setMaterial(z,we);let ye=X.index,Ce=1;if(z.wireframe===!0){if(ye=k.getWireframeAttribute(X),ye===void 0)return;Ce=2}const ke=X.drawRange,Ke=X.attributes.position;let Te=ke.start*Ce,Je=(ke.start+ke.count)*Ce;fe!==null&&(Te=Math.max(Te,fe.start*Ce),Je=Math.min(Je,(fe.start+fe.count)*Ce)),ye!==null?(Te=Math.max(Te,0),Je=Math.min(Je,ye.count)):Ke!=null&&(Te=Math.max(Te,0),Je=Math.min(Je,Ke.count));const Et=Je-Te;if(Et<0||Et===1/0)return;le.setup(G,z,de,X,ye);let ft,dt=$;if(ye!==null&&(ft=M.get(ye),dt=he,dt.setIndex(ft)),G.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*un()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(G.isLine){let Ht=z.linewidth;Ht===void 0&&(Ht=1),me.setLineWidth(Ht*un()),G.isLineSegments?dt.setMode(O.LINES):G.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else G.isPoints?dt.setMode(O.POINTS):G.isSprite&&dt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ht=G._multiDrawStarts,Ae=G._multiDrawCounts,Kt=G._multiDrawCount,it=ye?M.get(ye).bytesPerElement:1,bi=Ne.get(z).currentProgram.getUniforms();for(let Vt=0;Vt<Kt;Vt++)bi.setValue(O,"_gl_DrawID",Vt),dt.render(Ht[Vt]/it,Ae[Vt])}else if(G.isInstancedMesh)dt.renderInstances(Te,Et,G.count);else if(X.isInstancedBufferGeometry){const Ht=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,Ht);dt.renderInstances(Te,Et,Ae)}else dt.render(Te,Et)};function Sl(S,F,X,z){B!==null&&S.isNodeMaterial&&B.setObject(z,S),Rt===!0&&Z.setState(S,X,!1),S.transparent===!0&&S.side===ut&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,us(S,F,z),S.side=ui,S.needsUpdate=!0,us(S,F,z),S.side=ut):us(S,F,z)}this.compile=function(S,F,X=null){X===null&&(X=S),B!==null&&B.renderStart(S,F,X),T=J.get(X),T.init(F),y.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),tn=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,tn),Rt===!0&&Z.setGlobalState(this.clippingPlanes,F),B!==null&&ce.render(T.state.shadowsArray,X,F);const z=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){const de=fe[we];Sl(de,X,F,G),z.add(de)}else Sl(fe,X,F,G),z.add(fe)}),T=y.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(S,F,X=null){const z=this.compile(S,F,X);return new Promise(G=>{function fe(){if(z.forEach(function(we){const ye=Ne.get(we).currentProgram;(ye===void 0||ye.isReady())&&z.delete(we)}),z.size===0){G(S);return}setTimeout(fe,10)}mt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let cr=null;function md(S){cr&&cr(S)}function bl(){Si.stop()}function wl(){Si.start()}const Si=new Bh;Si.setAnimationLoop(md),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(S){cr=S,ae.setAnimationLoop(S),S===null?Si.stop():Si.start()},ae.addEventListener("sessionstart",bl),ae.addEventListener("sessionend",wl),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(S,F);const X=ae.enabled===!0&&ae.isPresenting===!0,z=I!==null&&(se===null||X)&&I.begin(C,se);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,F,se),T=J.get(S,y.length),T.init(F),T.state.textureUnits=Oe.getTextureUnits(),y.push(T),_t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?zt.setFromArrayCamera(F):$e.setFromProjectionMatrix(_t,Sn,F.reversedDepth),tn=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,tn),R=ue.get(S,x.length),R.init(),x.push(R),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&hr(we,F,-1/0,C.sortObjects)}hr(S,F,0,C.sortObjects),R.finish(),B!==null&&B.updateLights(T.state.lightsArray),C.sortObjects===!0&&R.sort(He,wt),dn=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,dn&&P.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Z.beginShadows();const G=T.state.shadowsArray;if(ce.render(G,S,F),Rt===!0&&Z.endShadows(),(z&&I.hasRenderPass())===!1){const we=R.opaque,de=R.transmissive;if(T.setupLights(),F.isArrayCamera){const ye=F.cameras;if(de.length>0)for(let Ce=0,ke=ye.length;Ce<ke;Ce++){const Ke=ye[Ce];Tl(we,de,S,Ke)}dn&&P.render(S);for(let Ce=0,ke=ye.length;Ce<ke;Ce++){const Ke=ye[Ce];El(R,S,Ke,Ke.viewport)}}else de.length>0&&Tl(we,de,S,F),dn&&P.render(S),El(R,S,F)}se!==null&&H===0&&(Oe.updateMultisampleRenderTarget(se),Oe.updateRenderTargetMipmap(se)),z&&I.end(C),S.isScene===!0&&S.onAfterRender(C,S,F),le.resetDefaultState(),K=-1,te=null,y.pop(),y.length>0?(T=y[y.length-1],Oe.setTextureUnits(T.state.textureUnits),Rt===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,B!==null&&B.renderEnd()};function hr(S,F,X,z){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){const we=F.isArrayCamera?zt:$e;if(!S.frustumCulled||S.intersectsFrustum(we)){z&&Nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const de=ie.update(S),ye=S.material;ye.visible&&R.push(S,de,ye,X,Nt.z,null,F)}}else if(S.isMesh||S.isLine||S.isPoints){const we=F.isArrayCamera?zt:$e;if(!S.frustumCulled||S.intersectsFrustum(we)){const de=ie.update(S),ye=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Nt.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Nt.copy(de.boundingSphere.center)),Nt.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(ye)){const Ce=de.groups;for(let ke=0,Ke=Ce.length;ke<Ke;ke++){const Te=Ce[ke],Je=ye[Te.materialIndex];Je&&Je.visible&&R.push(S,de,Je,X,Nt.z,Te,F)}}else ye.visible&&R.push(S,de,ye,X,Nt.z,null,F)}}}const fe=S.children;for(let we=0,de=fe.length;we<de;we++)hr(fe[we],F,X,z)}function El(S,F,X,z){const{opaque:G,transmissive:fe,transparent:we}=S;T.setupLightsView(X),Rt===!0&&Z.setGlobalState(C.clippingPlanes,X),z&&me.viewport(ne.copy(z)),G.length>0&&Gs(G,F,X),fe.length>0&&Gs(fe,F,X),we.length>0&&Gs(we,F,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Tl(S,F,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Te=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Nn(1,1,{generateMipmaps:!0,type:Te?On:ln,minFilter:ci,samples:Math.max(4,gt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const fe=T.state.transmissionRenderTarget[z.id],we=z.viewport||ne;fe.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);const de=C.getRenderTarget(),ye=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Q),xe=C.getClearAlpha(),xe<1&&C.setClearColor(16777215,.5),C.clear(),dn&&P.render(X);const ke=C.toneMapping;C.toneMapping=Yn;const Ke=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Rt===!0&&Z.setGlobalState(C.clippingPlanes,z),Gs(S,X,z),Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Je=0,Et=F.length;Je<Et;Je++){const ft=F[Je],{object:dt,geometry:Ht,material:Ae,group:Kt}=ft;if(Ae.side===ut&&dt.layers.test(z.layers)){const it=Ae.side;Ae.side=jt,Ae.needsUpdate=!0,Al(dt,X,z,Ht,Ae,Kt),Ae.side=it,Ae.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(fe),Oe.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,ye,Ce),C.setClearColor(Q,xe),Ke!==void 0&&(z.viewport=Ke),C.toneMapping=ke}function Gs(S,F,X){const z=F.isScene===!0?F.overrideMaterial:null;for(let G=0,fe=S.length;G<fe;G++){const we=S[G],{object:de,geometry:ye,group:Ce}=we;let ke=we.material;ke.allowOverride===!0&&z!==null&&(ke=z),de.layers.test(X.layers)&&Al(de,F,X,ye,ke,Ce)}}function Al(S,F,X,z,G,fe){B!==null&&G.isNodeMaterial&&B.setObject(S,G),S.onBeforeRender(C,F,X,z,G,fe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,F,X,z,S,fe),G.transparent===!0&&G.side===ut&&G.forceSinglePass===!1?(G.side=jt,G.needsUpdate=!0,C.renderBufferDirect(X,F,z,G,S,fe),G.side=ui,G.needsUpdate=!0,C.renderBufferDirect(X,F,z,G,S,fe),G.side=ut):C.renderBufferDirect(X,F,z,G,S,fe),S.onAfterRender(C,F,X,z,G,fe)}function Rl(S){let F=0;for(const X of S)X.texture!==null&&F++;return F}function us(S,F,X){F.isScene!==!0&&(F=hn);const z=Ne.get(S),G=T.state.lights,fe=T.state.shadowsArray,we=G.state.version,de=ee.getParameters(S,G.state,fe,F,X,T.state.lightProbeGridArray),ye=ee.getProgramCacheKey(de);let Ce=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;const ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=A.get(S.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",at),Ce=new Map,z.programs=Ce,z.programVariants=new Map);let Ke=Ce.get(ye);if(Ke!==void 0){if(z.currentProgram===Ke&&z.lightsStateVersion===we)return Pl(S,de),Ke}else de.uniforms=ee.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,X,de),S.onBeforeCompile(de,C),Ke=ee.acquireProgram(de,ye),Ce.set(ye,Ke),z.uniforms=de.uniforms;const Te=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=Z.uniform),Pl(S,de),z.needsLights=vd(S),z.lightsStateVersion=we,z.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Rl(T.state.lightProbeGridArray),z.currentProgram=Ke,z.uniformsList=null,Ke}function gd(S,F,X,z,G){const fe=Ne.get(S),we=fe.currentProgram.id+","+z+","+G;let de=fe.programVariants.get(we);return de===void 0?(de=us(S,F,X),fe.programVariants.set(we,de)):(fe.currentProgram=de,fe.uniformsList=null,fe.outputColorSpace=z,fe.toneMapping=G),de}function Cl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Ra.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Pl(S,F){const X=Ne.get(S);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function _d(S,F,X,z,G){F.isScene!==!0&&(F=hn),Oe.resetTextureUnits();const fe=F.fog,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,de=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qe.workingColorSpace,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ce=A.get(z.envMap||we,ye),ke=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color;let ft=Yn;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ft=C.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ht=dt!==void 0?dt.length:0,Ae=Ne.get(z),Kt=T.state.lights;if(Rt===!0&&(tn===!0||S!==te)){const xt=S===te&&z.id===K;Z.setState(z,S,xt)}let it=!1,bi=!1;z.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==Kt.state.version||G.isBatchedMesh&&Ae.batching===!1||!G.isBatchedMesh&&Ae.batching===!0||G.isBatchedMesh&&Ae.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ae.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ae.instancing===!1||!G.isInstancedMesh&&Ae.instancing===!0||G.isSkinnedMesh&&Ae.skinning===!1||!G.isSkinnedMesh&&Ae.skinning===!0||G.isInstancedMesh&&Ae.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ae.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ae.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ae.instancingMorph===!1&&G.morphTexture!==null||Ae.envMap!==Ce||z.fog===!0&&Ae.fog!==fe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Z.numPlanes||Ae.numIntersection!==Z.numIntersection)||Ae.vertexAlphas!==ke||Ae.vertexTangents!==Ke||Ae.morphTargets!==Te||Ae.morphNormals!==Je||Ae.morphColors!==Et||Ae.morphTargetsCount!==Ht||Ae.numLightProbeGrids!==Rl(T.state.lightProbeGridArray)?it=!0:(Ae.outputColorSpace!==de||Ae.toneMapping!==ft)&&(bi=!0):(it=!0,Ae.__version=z.version);let Vt=Ae.currentProgram;(it===!0||bi===!0)&&(Vt=bi===!0?gd(z,F,G,de,ft):us(z,F,G),B&&z.isNodeMaterial&&B.onUpdateProgram(z,Vt,Ae));let Hs=!1,jn=!1,wi=!1;const et=Vt.getUniforms(),kt=Ae.uniforms;if(me.useProgram(Vt.program)&&(Hs=!0,jn=!0,wi=!0),z.id!==K&&(K=z.id,jn=!0),Hs||te!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),et.setValue(O,"projectionMatrix",S.projectionMatrix),et.setValue(O,"viewMatrix",S.matrixWorldInverse);const Ft=et.map.cameraPosition;Ft!==void 0&&Ft.setValue(O,En.setFromMatrixPosition(S.matrixWorld)),gt.logarithmicDepthBuffer&&et.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&et.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),te!==S&&(te=S,jn=!0,wi=!0)}if(Ae.needsLights&&(Kt.state.sunShadowMap.length>0&&et.setValue(O,"sunShadowMap",Kt.state.sunShadowMap,Oe),Kt.state.directionalShadowMap.length>0&&et.setValue(O,"directionalShadowMap",Kt.state.directionalShadowMap,Oe),Kt.state.spotShadowMap.length>0&&et.setValue(O,"spotShadowMap",Kt.state.spotShadowMap,Oe),Kt.state.pointShadowMap.length>0&&et.setValue(O,"pointShadowMap",Kt.state.pointShadowMap,Oe)),G.isSkinnedMesh){et.setOptional(O,G,"bindMatrix"),et.setOptional(O,G,"bindMatrixInverse");const xt=G.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),et.setValue(O,"boneTexture",xt.boneTexture,Oe))}G.isBatchedMesh&&(et.setOptional(O,G,"batchingTexture"),et.setValue(O,"batchingTexture",G._matricesTexture,Oe),et.setOptional(O,G,"batchingIdTexture"),et.setValue(O,"batchingIdTexture",G._indirectTexture,Oe),et.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&et.setValue(O,"batchingColorTexture",G._colorsTexture,Oe));const _n=X.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&j.update(G,X,Vt),(jn||Ae.receiveShadow!==G.receiveShadow)&&(Ae.receiveShadow=G.receiveShadow,et.setValue(O,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(kt.envMapIntensity.value=F.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Yg()),jn){if(et.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&xd(kt,wi),fe&&z.fog===!0&&oe.refreshFogUniforms(kt,fe),oe.refreshMaterialUniforms(kt,z,Me,De,T.state.transmissionRenderTarget[S.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){const xt=b;let Ft=0;for(const zn of T.state.lightProbeGridArray)zn.texture!==null&&(xt.textures[Ft]=zn.texture,xt.min[Ft]=zn.boundingBox.min,xt.max[Ft]=zn.boundingBox.max,xt.resolution[Ft]=zn.resolution,Ft++);for(const zn in xt)xt[zn].length=Ft;kt.probesSH.value=xt.textures,kt.probesMin.value=xt.min,kt.probesMax.value=xt.max,kt.probesResolution.value=xt.resolution}Ra.upload(O,Cl(Ae),kt,Oe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ra.upload(O,Cl(Ae),kt,Oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&et.setValue(O,"center",G.center),et.setValue(O,"modelViewMatrix",G.modelViewMatrix),et.setValue(O,"normalMatrix",G.normalMatrix),et.setValue(O,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const xt=z.uniformsGroups;for(let Ft=0,zn=xt.length;Ft<zn;Ft++){const Il=xt[Ft];Le.update(Il,Vt),Le.bind(Il,Vt)}}return Vt}function xd(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function vd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(S,F,X){const z=Ne.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ne.get(S.texture).__webglTexture=F,Ne.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const X=Ne.get(S);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,X=0){se=S,q=F,H=X;let z=null,G=!1,fe=!1;if(S){const de=Ne.get(S);if(de.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(O.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(S.viewport),Re.copy(S.scissor),ze=S.scissorTest,me.viewport(ne),me.scissor(Re),me.setScissorTest(ze),K=-1;return}else if(de.__webglFramebuffer===void 0)Oe.setupRenderTarget(S);else if(de.__hasExternalTextures)Oe.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&Ne.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(S)}}const ye=S.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);const Ce=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?z=Ce[F][X]:z=Ce[F],G=!0):S.samples>0&&Oe.useMultisampledRTT(S)===!1?z=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?z=Ce[X]:z=Ce,ne.copy(S.viewport),Re.copy(S.scissor),ze=S.scissorTest}else ne.copy(Ue).multiplyScalar(Me).floor(),Re.copy(st).multiplyScalar(Me).floor(),ze=ht;if(X!==0&&(z=W),me.bindFramebuffer(O.FRAMEBUFFER,z)&&me.drawBuffers(S,z),me.viewport(ne),me.scissor(Re),me.setScissorTest(ze),G){const de=Ne.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,X)}else if(fe){const de=F;for(let ye=0;ye<S.textures.length;ye++){const Ce=Ne.get(S.textures[ye]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ye,Ce.__webglTexture,X,de)}}else if(S!==null&&X!==0){const de=Ne.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,de.__webglTexture,X)}K=-1};function Ll(S){const F=Ne.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=gt.textureFormatReadable(S.format),F.__typeReadable=gt.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,X,z,G,fe,we,de=0){if(!(S&&S.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye){me.bindFramebuffer(O.FRAMEBUFFER,ye);try{const Ce=S.textures[de],ke=Ce.format,Ke=Ce.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);const Te=Ll(Ce);if(Te.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-z&&X>=0&&X<=S.height-G&&O.readPixels(F,X,z,G,re.convert(ke),re.convert(Ke),fe)}finally{const Ce=se!==null?Ne.get(se).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,F,X,z,G,fe,we,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(ye=ye[we],Array.isArray(ye)&&(ye=ye[0])),ye)if(F>=0&&F<=S.width-z&&X>=0&&X<=S.height-G){me.bindFramebuffer(O.FRAMEBUFFER,ye);const Ce=S.textures[de],ke=Ce.format,Ke=Ce.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);const Te=Ll(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Je),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(F,X,z,G,re.convert(ke),re.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Et=se!==null?Ne.get(se).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Et);const ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await jd(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Je),O.deleteSync(ft),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,X=0){const z=Math.pow(2,-X),G=Math.floor(S.image.width*z),fe=Math.floor(S.image.height*z),we=F!==null?F.x:0,de=F!==null?F.y:0;Oe.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,we,de,G,fe),me.unbindTexture()},this.copyTextureToTexture=function(S,F,X=null,z=null,G=0,fe=0){let we,de,ye,Ce,ke,Ke,Te,Je,Et;const ft=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(X!==null)we=X.max.x-X.min.x,de=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,ke=X.min.y,Ke=X.isBox3?X.min.z:0;else{const et=Math.pow(2,-G);we=Math.floor(ft.width*et),de=Math.floor(ft.height*et),S.isDataArrayTexture?ye=ft.depth:S.isData3DTexture?ye=Math.floor(ft.depth*et):ye=1,Ce=0,ke=0,Ke=0}z!==null?(Te=z.x,Je=z.y,Et=z.z):(Te=0,Je=0,Et=0);const dt=re.convert(F.format),Ht=re.convert(F.type);let Ae;F.isData3DTexture?(Oe.setTexture3D(F,0),Ae=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),Ae=O.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),Ae=O.TEXTURE_2D),me.activeTexture(O.TEXTURE0),me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),me.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Kt=me.getParameter(O.UNPACK_ROW_LENGTH),it=me.getParameter(O.UNPACK_IMAGE_HEIGHT),bi=me.getParameter(O.UNPACK_SKIP_PIXELS),Vt=me.getParameter(O.UNPACK_SKIP_ROWS),Hs=me.getParameter(O.UNPACK_SKIP_IMAGES);me.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),me.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),me.pixelStorei(O.UNPACK_SKIP_ROWS,ke),me.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);const jn=S.isDataArrayTexture||S.isData3DTexture,wi=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const et=Ne.get(S),kt=Ne.get(F),_n=Ne.get(et.__renderTarget),xt=Ne.get(kt.__renderTarget);me.bindFramebuffer(O.READ_FRAMEBUFFER,_n.__webglFramebuffer),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ft=0;Ft<ye;Ft++)jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(S).__webglTexture,G,Ke+Ft),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,fe,Et+Ft)),O.blitFramebuffer(Ce,ke,Ce+we,ke+de,Te,Je,Te+we,Je+de,O.DEPTH_BUFFER_BIT,O.NEAREST);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Ne.has(S)){const et=Ne.get(S),kt=Ne.get(F);me.bindFramebuffer(O.READ_FRAMEBUFFER,U),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let _n=0;_n<ye;_n++)jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,et.__webglTexture,G,Ke+_n):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,et.__webglTexture,G),wi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.__webglTexture,fe,Et+_n):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,kt.__webglTexture,fe),G!==0?O.blitFramebuffer(Ce,ke,Ce+we,ke+de,Te,Je,Te+we,Je+de,O.COLOR_BUFFER_BIT,O.NEAREST):wi?O.copyTexSubImage3D(Ae,fe,Te,Je,Et+_n,Ce,ke,we,de):O.copyTexSubImage2D(Ae,fe,Te,Je,Ce,ke,we,de);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else wi?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Ae,fe,Te,Je,Et,we,de,ye,dt,Ht,ft.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,fe,Te,Je,Et,we,de,ye,dt,ft.data):O.texSubImage3D(Ae,fe,Te,Je,Et,we,de,ye,dt,Ht,ft):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,Te,Je,we,de,dt,Ht,ft.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,Te,Je,ft.width,ft.height,dt,ft.data):O.texSubImage2D(O.TEXTURE_2D,fe,Te,Je,we,de,dt,Ht,ft);me.pixelStorei(O.UNPACK_ROW_LENGTH,Kt),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),me.pixelStorei(O.UNPACK_SKIP_PIXELS,bi),me.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),me.pixelStorei(O.UNPACK_SKIP_IMAGES,Hs),fe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Ae),me.unbindTexture()},this.initRenderTarget=function(S){Ne.get(S).__webglFramebuffer===void 0&&Oe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Oe.setTextureCube(S,0):S.isData3DTexture?Oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Oe.setTexture2DArray(S,0):Oe.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){q=0,H=0,se=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const di=[0,100,260,500,850,1300,1900,2600,3500,4600,6e3],_i=[{id:"warden",name:"Kaelen",title:"O Guardião",role:"Tanque",color:"#5b8fd6",glow:"rgba(91, 143, 214, 0.55)",description:"Um baluarte de aço e juramento. Kaelen absorve golpes que quebrariam outros heróis e devolve a violência com a lâmina do bastião.",quote:"Enquanto eu respirar, Aethermoor não cairá.",stats:{hp:240,mana:80,power:16,defense:14,speed:4.1,crit:.05},weaponType:"sword",weapon:{name:"Lâmina do Juramento",damage:26,range:2.8,arc:1.65,cooldown:.55,projectile:!1,icon:"sword"},abilities:[{id:"shieldBash",name:"Golpe de Escudo",short:"Avança e atordoa inimigos à frente.",desc:"Um avanço brutal com o escudo. Causa dano em cone e atordoa os inimigos por 1,6s.",icon:"shield",cooldown:7,mana:16,kind:"cone",damage:1.65,radius:4.1,arc:2.2,stun:1.6},{id:"bulwark",name:"Baluarte",short:"Reduz dano recebido e recupera vida.",desc:"Ergue um bastião de luz. Recebe 60% menos dano por 5s e recupera 18% da vida máxima.",icon:"shield",cooldown:17,mana:26,kind:"buff",duration:5,damageReduction:.6,heal:.18},{id:"whirlwind",name:"Redemoinho de Aço",short:"Gira a lâmina causando dano em área.",desc:"Gira como um vendaval de aço, atingindo todos os inimigos ao redor três vezes.",icon:"whirlwind",cooldown:11,mana:28,kind:"spin",damage:.95,radius:4.2,hits:3,interval:.24}]},{id:"sorceress",name:"Lyra",title:"A Feiticeira",role:"Maga",color:"#a879e8",glow:"rgba(168, 121, 232, 0.55)",description:"Chamas antigas obedecem à sua voz. Lyra troca fragilidade por um poder capaz de transformar campos de batalha em cinzas.",quote:"O fogo não pede licença. Ele apenas chega.",stats:{hp:150,mana:160,power:24,defense:6,speed:4.5,crit:.08},weaponType:"staff",weapon:{name:"Cajado de Brasa",damage:20,range:10,arc:.3,cooldown:.72,projectile:!0,projectileSpeed:15,icon:"spark"},abilities:[{id:"fireball",name:"Bola de Fogo",short:"Projétil explosivo de longo alcance.",desc:"Lança uma esfera incandescente que explode ao atingir, queimando todos os inimigos próximos.",icon:"flame",cooldown:5,mana:18,kind:"projectile",damage:2.1,speed:16,explodeRadius:2.4,burn:2.5},{id:"flameNova",name:"Nova de Chamas",short:"Explosão de fogo ao redor de Lyra.",desc:"Uma onda de fogo irrompe do solo, causando dano em área e incendiando inimigos.",icon:"nova",cooldown:9,mana:30,kind:"nova",damage:1.75,radius:4.4,burn:3.5},{id:"meteor",name:"Meteoro",short:"Invoca um meteoro devastador.",desc:"Marca o solo e invoca um meteoro após 1s. Causa dano massivo em uma grande área.",icon:"meteor",cooldown:15,mana:42,kind:"meteor",damage:3.4,radius:3.6,delay:1}]},{id:"assassin",name:"Vex",title:"A Lâmina Sombria",role:"Assassino",color:"#3fd0c0",glow:"rgba(63, 208, 192, 0.5)",description:"Uma sombra com duas lâminas e nenhuma piedade. Vex dança entre os inimigos, acumulando cortes antes que percebam o perigo.",quote:"Você não viu nada. Esse é o ponto.",stats:{hp:170,mana:100,power:21,defense:8,speed:5.3,crit:.18},weaponType:"dagger",weapon:{name:"Adagas Gêmeas",damage:17,range:2.45,arc:1.5,cooldown:.34,projectile:!1,icon:"dagger"},abilities:[{id:"shadowDash",name:"Investida Sombria",short:"Avança atravessando inimigos.",desc:"Desaparece em fumaça e reaparece adiante, cortando todos os inimigos no caminho.",icon:"dash",cooldown:7,mana:16,kind:"dash",damage:1.8,distance:6.5,radius:1.5},{id:"knifeFan",name:"Leque de Lâminas",short:"Arremessa cinco adagas em cone.",desc:"Uma rajada de cinco lâminas envenenadas que atravessa a linha de frente inimiga.",icon:"dagger",cooldown:8,mana:22,kind:"fan",damage:.95,count:5,spread:.9,speed:17},{id:"nightCloak",name:"Manto Noturno",short:"Ganha velocidade e crítico por 6s.",desc:"Vex se dissolve na penumbra: +55% velocidade, +40% chance de crítico e rastro de sombra.",icon:"moon",cooldown:19,mana:32,kind:"buff",duration:6,speed:.55,crit:.4}]},{id:"huntress",name:"Sylva",title:"A Domadora",role:"Patrulheira",color:"#78b46a",glow:"rgba(120, 180, 106, 0.5)",description:"Guardiã dos bosques de Verdan e amiga dos espíritos. Sylva luta à distância com arco e invoca a fúria da matilha.",quote:"A floresta ouve cada passo seu. Eu também.",stats:{hp:175,mana:120,power:19,defense:9,speed:4.9,crit:.12},weaponType:"bow",weapon:{name:"Arco de Verdan",damage:19,range:11,arc:.3,cooldown:.6,projectile:!0,projectileSpeed:20,icon:"bow"},abilities:[{id:"piercingArrow",name:"Flecha Perfurante",short:"Flecha que atravessa vários inimigos.",desc:"Uma flecha infundida com seiva antiga, capaz de perfurar toda uma fileira de inimigos.",icon:"bow",cooldown:6,mana:18,kind:"pierce",damage:2.5,speed:24,pierce:5},{id:"summonWolf",name:"Chamado do Lobo",short:"Invoca um lobo espiritual por 12s.",desc:"Sylva chama um lobo espiritual que caça e dilacera seus inimigos por 12 segundos.",icon:"wolf",cooldown:20,mana:34,kind:"summon",duration:12,damage:1.1},{id:"arrowRain",name:"Chuva de Flechas",short:"Bombardeia uma área com flechas.",desc:"Uma saraivada de flechas cai sobre a área marcada, atingindo repetidamente quem estiver nela.",icon:"arrowRain",cooldown:13,mana:34,kind:"rain",damage:1.1,radius:3.8,duration:2.4,interval:.55}]},{id:"whipdancer",name:"Seraphine",title:"A Dançarina do Açoite",role:"Lutadora",color:"#e06070",glow:"rgba(224, 96, 112, 0.55)",description:"Nobre exilada, Seraphine transformou um chicote cerimonial em arma de guerra. Seu açoite de fogo alcança onde a espada não chega.",quote:"A distância entre nós é apenas o comprimento do meu chicote.",stats:{hp:190,mana:110,power:20,defense:9,speed:4.7,crit:.12},weaponType:"whip",weapon:{name:"Açoite de Sangue",damage:21,range:4.8,arc:2.5,cooldown:.5,projectile:!1,icon:"whip"},abilities:[{id:"flamingLash",name:"Açoite Flamejante",short:"Chicote longo que incendeia.",desc:"Um estalo incandescente que alcança longe, queimando todos os inimigos na linha do açoite.",icon:"whip",cooldown:6,mana:16,kind:"cone",damage:1.95,radius:5.4,arc:2.7,burn:3},{id:"bladeVortex",name:"Vórtice de Lâminas",short:"Redemoinho que puxa e corta.",desc:"Seraphine gira o açoite em um vórtice, puxando inimigos próximos e cortando-os duas vezes.",icon:"vortex",cooldown:11,mana:28,kind:"vortex",damage:1.35,radius:4.6,hits:2,interval:.35},{id:"hundredFlames",name:"Dança das Cem Chamas",short:"Sequência de seis golpes flamejantes.",desc:"A dança proibida: seis estalos de fogo em sequência ao redor de Seraphine.",icon:"dance",cooldown:16,mana:40,kind:"spin",damage:.85,radius:4.8,hits:6,interval:.18,burn:2}]}],xi=Object.fromEntries(_i.map(i=>[i.id,i])),ko={skeleton:{name:"Esqueleto",model:"skeleton",hp:42,damage:7,speed:2.7,range:1.9,attackCooldown:1.25,xp:18,gold:6,radius:.55,scale:1,color:"#cfc7b0"},hound:{name:"Cão Cinzento",model:"hound",hp:30,damage:6,speed:3.9,range:1.7,attackCooldown:.95,xp:16,gold:5,radius:.5,scale:1,color:"#8b8a86"},cultist:{name:"Cultista de Brasa",model:"cultist",hp:32,damage:9,speed:2.2,range:7.5,attackCooldown:1.8,xp:24,gold:9,radius:.5,scale:1,ranged:!0,color:"#a33d32"},goblin:{name:"Goblin",model:"goblin",hp:48,damage:8,speed:3.1,range:1.9,attackCooldown:1.1,xp:20,gold:7,radius:.5,scale:1,color:"#6f9a50"},thorncaster:{name:"Lança-Espinhos",model:"cultist",hp:40,damage:10,speed:2.3,range:8,attackCooldown:1.7,xp:27,gold:10,radius:.5,scale:1.02,ranged:!0,color:"#4f8b47"},brute:{name:"Bruto de Musgo",model:"brute",hp:95,damage:13,speed:2.1,range:2.2,attackCooldown:1.5,xp:38,gold:14,radius:.75,scale:1.18,color:"#5b7045"},revenant:{name:"Renegado Gélido",model:"knight",hp:62,damage:10,speed:2.8,range:2,attackCooldown:1.2,xp:28,gold:11,radius:.58,scale:1.02,color:"#7fb4cf"},frostcaster:{name:"Tecelão de Gelo",model:"cultist",hp:44,damage:12,speed:2.2,range:8.5,attackCooldown:1.7,xp:30,gold:12,radius:.5,scale:1.03,ranged:!0,color:"#6faed6"},golem:{name:"Golem de Gelo",model:"golem",hp:135,damage:16,speed:1.9,range:2.3,attackCooldown:1.7,xp:48,gold:18,radius:.85,scale:1.28,color:"#8ac4d8"},voidknight:{name:"Cavaleiro do Vazio",model:"knight",hp:82,damage:14,speed:3,range:2.1,attackCooldown:1.1,xp:36,gold:15,radius:.6,scale:1.04,color:"#8b6bc6"},shadowarcher:{name:"Arqueiro Sombrio",model:"archer",hp:52,damage:12,speed:2.7,range:9.5,attackCooldown:1.6,xp:34,gold:13,radius:.5,scale:1,ranged:!0,color:"#6d5b9c"},wraith:{name:"Espectro",model:"wraith",hp:68,damage:11,speed:3.2,range:2,attackCooldown:1.2,xp:34,gold:13,radius:.55,scale:1.06,floating:!0,color:"#9b6fe0"},boneTyrant:{name:"Rei Ossada",model:"boneTyrant",hp:520,damage:22,speed:2.4,range:3.2,attackCooldown:1.45,xp:160,gold:90,radius:1.2,scale:1.6,boss:!0,color:"#d7c79e"},thornColossus:{name:"Colosso de Espinhos",model:"thornColossus",hp:760,damage:27,speed:2.1,range:3.4,attackCooldown:1.6,xp:240,gold:140,radius:1.35,scale:1.75,boss:!0,color:"#698a4d"},frostSentinel:{name:"Sentinela do Inverno",model:"frostSentinel",hp:980,damage:31,speed:2.1,range:3.5,attackCooldown:1.55,xp:340,gold:210,radius:1.4,scale:1.85,boss:!0,color:"#8ccbe0"},eclipseLord:{name:"Senhor do Eclipse",model:"eclipseLord",hp:1280,damage:36,speed:2.6,range:3.6,attackCooldown:1.35,xp:520,gold:320,radius:1.4,scale:1.9,boss:!0,color:"#9b6ee8"}},vi=[{id:"crypt",index:1,name:"Cripta de Brasa",kicker:"Domínio I",subtitle:"As brasas nunca esqueceram.",desc:"Corredores de pedra afundam em rios de magma. O Rei Ossada ainda reclama um trono que virou cinzas.",level:1,accent:"#f0a35a",glow:"rgba(240, 120, 52, 0.5)",bg:"linear-gradient(150deg, #2a1713, #120b0b)",reward:{gold:130,xp:140},boss:"boneTyrant",waves:[{label:"Onda 1 · Ossos antigos",enemies:[["skeleton",3]]},{label:"Onda 2 · Guarda da cripta",enemies:[["skeleton",2],["cultist",2]]},{label:"Chefe · Rei Ossada",enemies:[["boneTyrant",1]],boss:!0}]},{id:"ruins",index:2,name:"Ruínas de Verdan",kicker:"Domínio II",subtitle:"A floresta devora até a pedra.",desc:"Um templo esquecido sob raízes colossais. Algo antigo cresce no coração do bosque e não quer visitas.",level:3,accent:"#93d477",glow:"rgba(102, 190, 88, 0.45)",bg:"linear-gradient(150deg, #17251a, #0a100b)",reward:{gold:220,xp:260},boss:"thornColossus",waves:[{label:"Onda 1 · Emboscada verde",enemies:[["goblin",3],["hound",1]]},{label:"Onda 2 · Guardiões de raiz",enemies:[["goblin",2],["thorncaster",2]]},{label:"Onda 3 · Fúria do bosque",enemies:[["brute",1],["goblin",2]]},{label:"Chefe · Colosso de Espinhos",enemies:[["thornColossus",1]],boss:!0}]},{id:"ice",index:3,name:"Vale Glacial",kicker:"Domínio III",subtitle:"O silêncio também pode gritar.",desc:"Um vale onde o vento esculpe cristais e congela memórias. A Sentinela do Inverno guarda a passagem para o Eclipse.",level:5,accent:"#8fd3ef",glow:"rgba(111, 190, 230, 0.45)",bg:"linear-gradient(150deg, #14232c, #080f14)",reward:{gold:340,xp:420},boss:"frostSentinel",waves:[{label:"Onda 1 · Mortos do vale",enemies:[["revenant",3]]},{label:"Onda 2 · Ventos cortantes",enemies:[["revenant",2],["frostcaster",2]]},{label:"Onda 3 · Muralha de gelo",enemies:[["golem",2],["frostcaster",1]]},{label:"Chefe · Sentinela do Inverno",enemies:[["frostSentinel",1]],boss:!0}]},{id:"citadel",index:4,name:"Cidadela do Eclipse",kicker:"Domínio IV",subtitle:"A última noite começa aqui.",desc:"Uma fortaleza suspensa sobre o vazio. O Senhor do Eclipse reuniu tudo o que Aethermoor perdeu — e não pretende devolver.",level:7,accent:"#c59bf5",glow:"rgba(155, 110, 232, 0.5)",bg:"linear-gradient(150deg, #21152e, #0b0811)",reward:{gold:520,xp:680},boss:"eclipseLord",waves:[{label:"Onda 1 · Legião do vazio",enemies:[["voidknight",3]]},{label:"Onda 2 · Flechas na penumbra",enemies:[["voidknight",2],["shadowarcher",2]]},{label:"Onda 3 · Corte dos espectros",enemies:[["wraith",2],["voidknight",2]]},{label:"Chefe · Senhor do Eclipse",enemies:[["eclipseLord",1]],boss:!0}]}],Bc=Object.fromEntries(vi.map(i=>[i.id,i])),Jh=[{id:"w_warden_0",name:"Lâmina do Juramento",type:"weapon",classId:"warden",weaponType:"sword",rarity:"common",price:0,starter:!0,icon:"sword",weapon:{name:"Lâmina do Juramento",damage:26,range:2.8,arc:1.65,cooldown:.55,projectile:!1},stats:{},desc:"A espada jurada de Kaelen. Simples, pesada e honesta."},{id:"w_warden_1",name:"Espada do Bastião",type:"weapon",classId:"warden",weaponType:"sword",rarity:"rare",price:180,icon:"sword",weapon:{name:"Espada do Bastião",damage:38,range:2.95,arc:1.7,cooldown:.54,projectile:!1},stats:{defense:3},desc:"Forjada para segurar uma linha de frente inteira sozinha."},{id:"w_warden_2",name:"Lâmina do Alvorecer",type:"weapon",classId:"warden",weaponType:"sword",rarity:"epic",price:440,icon:"sword",weapon:{name:"Lâmina do Alvorecer",damage:52,range:3.1,arc:1.85,cooldown:.5,projectile:!1},stats:{power:5,crit:.08},desc:"Dizem que a lâmina corta a noite antes de o sol nascer."},{id:"w_sorceress_0",name:"Cajado de Brasa",type:"weapon",classId:"sorceress",weaponType:"staff",rarity:"common",price:0,starter:!0,icon:"spark",weapon:{name:"Cajado de Brasa",damage:20,range:10,arc:.3,cooldown:.72,projectile:!0,projectileSpeed:15},stats:{},desc:"Um cajado de madeira carbonizada com uma brasa que nunca apaga."},{id:"w_sorceress_1",name:"Cetro de Cinzas",type:"weapon",classId:"sorceress",weaponType:"staff",rarity:"rare",price:200,icon:"spark",weapon:{name:"Cetro de Cinzas",damage:31,range:10.5,arc:.3,cooldown:.68,projectile:!0,projectileSpeed:16},stats:{mana:20},desc:"Cada cinza carrega o último pensamento de alguém. Lyra aprendeu a usá-los."},{id:"w_sorceress_2",name:"Cajado do Eclipse",type:"weapon",classId:"sorceress",weaponType:"staff",rarity:"epic",price:470,icon:"spark",weapon:{name:"Cajado do Eclipse",damage:45,range:11,arc:.3,cooldown:.62,projectile:!0,projectileSpeed:18},stats:{power:7,crit:.06},desc:"Roubado do altar do Eclipse. Ainda sussurra nomes de estrelas mortas."},{id:"w_assassin_0",name:"Adagas Gêmeas",type:"weapon",classId:"assassin",weaponType:"dagger",rarity:"common",price:0,starter:!0,icon:"dagger",weapon:{name:"Adagas Gêmeas",damage:17,range:2.45,arc:1.5,cooldown:.34,projectile:!1},stats:{},desc:"Duas lâminas curtas, equilibradas e sem nenhum enfeite desnecessário."},{id:"w_assassin_1",name:"Presas da Noite",type:"weapon",classId:"assassin",weaponType:"dagger",rarity:"rare",price:190,icon:"dagger",weapon:{name:"Presas da Noite",damage:25,range:2.55,arc:1.55,cooldown:.32,projectile:!1},stats:{crit:.06,speed:.2},desc:"Aço escurecido em óleo de sombra. Ninguém ouve o primeiro corte."},{id:"w_assassin_2",name:"Lâminas do Vazio",type:"weapon",classId:"assassin",weaponType:"dagger",rarity:"epic",price:450,icon:"dagger",weapon:{name:"Lâminas do Vazio",damage:35,range:2.7,arc:1.65,cooldown:.29,projectile:!1},stats:{power:5,crit:.12},desc:"Cortam a distância entre dois instantes. Vex jura que isso faz sentido."},{id:"w_huntress_0",name:"Arco de Verdan",type:"weapon",classId:"huntress",weaponType:"bow",rarity:"common",price:0,starter:!0,icon:"bow",weapon:{name:"Arco de Verdan",damage:19,range:11,arc:.3,cooldown:.6,projectile:!0,projectileSpeed:20},stats:{},desc:"Um arco de teixo vivo, presenteado pela floresta quando Sylva ainda era criança."},{id:"w_huntress_1",name:"Arco do Vento",type:"weapon",classId:"huntress",weaponType:"bow",rarity:"rare",price:200,icon:"bow",weapon:{name:"Arco do Vento",damage:29,range:11.5,arc:.3,cooldown:.56,projectile:!0,projectileSpeed:23},stats:{speed:.2},desc:"A corda canta mesmo sem ser tocada. As flechas voam antes do pensamento."},{id:"w_huntress_2",name:"Chuva de Espinhos",type:"weapon",classId:"huntress",weaponType:"bow",rarity:"epic",price:460,icon:"bow",weapon:{name:"Chuva de Espinhos",damage:42,range:12,arc:.3,cooldown:.52,projectile:!0,projectileSpeed:26},stats:{power:6,crit:.08},desc:"Cada flecha carrega uma semente de espinho que floresce na ferida."},{id:"w_whipdancer_0",name:"Açoite de Sangue",type:"weapon",classId:"whipdancer",weaponType:"whip",rarity:"common",price:0,starter:!0,icon:"whip",weapon:{name:"Açoite de Sangue",damage:21,range:4.8,arc:2.5,cooldown:.5,projectile:!1},stats:{},desc:"O chicote cerimonial de Seraphine. O couro escuro parece pulsar com cada golpe."},{id:"w_whipdancer_1",name:"Chicote do Sol",type:"weapon",classId:"whipdancer",weaponType:"whip",rarity:"rare",price:210,icon:"whip",weapon:{name:"Chicote do Sol",damage:32,range:5.1,arc:2.6,cooldown:.47,projectile:!1},stats:{power:3},desc:"Fios de ouro incandescente trançados ao couro. A ponta deixa rastros de luz."},{id:"w_whipdancer_2",name:"Cauda do Dragão",type:"weapon",classId:"whipdancer",weaponType:"whip",rarity:"epic",price:480,icon:"whip",weapon:{name:"Cauda do Dragão",damage:46,range:5.6,arc:2.75,cooldown:.44,projectile:!1},stats:{power:6,crit:.08},desc:"Dizem que foi feita com a última vértebra de um dragão de fogo. Seraphine não confirma."},{id:"a_leather",name:"Couro Batido",type:"armor",rarity:"common",price:120,icon:"armor",stats:{defense:4,hp:20},desc:"Proteção de viagem para quem pretende voltar para casa."},{id:"a_runed",name:"Malha Rúnica",type:"armor",rarity:"rare",price:300,icon:"armor",stats:{defense:8,hp:45,mana:10},desc:"Anéis de aço gravados com runas de proteção de Aethermoor."},{id:"a_plates",name:"Placas de Aether",type:"armor",rarity:"epic",price:560,icon:"armor",stats:{defense:14,hp:85,speed:-.1},desc:"Armadura cerimonial dos antigos guardiões. Pesada como uma promessa."},{id:"r_traveler",name:"Amuleto do Viajante",type:"relic",rarity:"common",price:100,icon:"relic",stats:{mana:25,speed:.1},desc:"Uma pedra azul que aponta vagamente para casa."},{id:"r_ember",name:"Anel de Brasa",type:"relic",rarity:"rare",price:240,icon:"relic",stats:{power:6,crit:.05},desc:"O anel esquenta quando o perigo se aproxima. Nunca esfria por completo."},{id:"r_golem",name:"Coração de Golem",type:"relic",rarity:"epic",price:500,icon:"relic",stats:{hp:65,defense:6},desc:"Um núcleo de pedra que bate uma vez a cada cem anos. Ainda bate."},{id:"r_brasa",name:"Coleira do Brasa",type:"relic",rarity:"rare",price:160,icon:"relic",stats:{speed:.25,hp:25},desc:"Maelis jura que traz sorte. Brasa parece muito satisfeito com a venda."},{id:"c_health",name:"Poção de Vida",type:"consumable",rarity:"common",price:40,icon:"potion",stats:{heal:.5},desc:"Restaura 50% da vida máxima. Gosto de cereja com ferro."},{id:"c_mana",name:"Poção de Mana",type:"consumable",rarity:"common",price:35,icon:"potion",stats:{manaRestore:.6},desc:"Restaura 60% da mana máxima. Não pergunte do que é feita."}],Ls=Object.fromEntries(Jh.map(i=>[i.id,i])),zc={warden:"w_warden_0",sorceress:"w_sorceress_0",assassin:"w_assassin_0",huntress:"w_huntress_0",whipdancer:"w_whipdancer_0"},$g={common:"#a8b3c5",rare:"#5fb5e8",epic:"#c58cf5",legendary:"#f0b45a"};function Kg(i){let e=1;for(let t=0;t<di.length;t++)i>=di[t]&&(e=t+1);return Math.min(e,di.length)}const Zh="aethermoor-save-v1";function Jg(){const i={};for(const e of _i)i[e.id]={xp:0,level:1,equipment:{weapon:zc[e.id],armor:null,relic:null}};return{version:1,selectedClass:"warden",gold:320,potions:{health:2,mana:1},completed:[],owned:[...new Set(Object.values(zc))],classes:i}}function Zg(){const i=Jg();try{const e=localStorage.getItem(Zh);if(!e)return i;const t=JSON.parse(e);if(!t||t.version!==1)return i;const n={...i,...t,potions:{...i.potions,...t.potions||{}},completed:Array.isArray(t.completed)?t.completed:[],owned:Array.isArray(t.owned)?[...new Set([...i.owned,...t.owned])]:i.owned,classes:{...i.classes}};for(const s of _i){const a=t.classes?.[s.id];a&&(n.classes[s.id]={xp:Number(a.xp)||0,level:Number(a.level)||1,equipment:{...i.classes[s.id].equipment,...a.equipment||{}}})}return xi[n.selectedClass]||(n.selectedClass="warden"),n}catch{return i}}function In(i){try{localStorage.setItem(Zh,JSON.stringify(i))}catch{}}function ks(i,e=i.selectedClass){return i.classes[e]||i.classes.warden}function Qh(i,e=i.selectedClass){const t=ks(i,e);return{weapon:t.equipment.weapon?Ls[t.equipment.weapon]:null,armor:t.equipment.armor?Ls[t.equipment.armor]:null,relic:t.equipment.relic?Ls[t.equipment.relic]:null}}function Qg(i,e=i.selectedClass){const t=xi[e],s=ks(i,e).level||1,a={hp:t.stats.hp+(s-1)*15,mana:t.stats.mana+(s-1)*8,power:t.stats.power+(s-1)*2.1,defense:t.stats.defense+(s-1)*1.4,speed:t.stats.speed,crit:t.stats.crit},r=Qh(i,e);for(const c of Object.values(r))if(!(!c||!c.stats))for(const[h,f]of Object.entries(c.stats))h==="heal"||h==="manaRestore"||a[h]!=null&&(a[h]+=f);a.hp=Math.max(50,Math.round(a.hp)),a.mana=Math.max(20,Math.round(a.mana)),a.power=Math.max(1,Math.round(a.power*10)/10),a.defense=Math.max(0,Math.round(a.defense*10)/10),a.speed=Math.max(2.5,Math.round(a.speed*100)/100),a.crit=Math.min(.75,Math.max(0,a.crit));const o=r.weapon?.weapon||t.weapon,l=r.weapon;return{...a,maxHp:a.hp,maxMana:a.mana,weapon:{...o},weaponItem:l,equipped:r,level:s}}function jh(i,e=i.selectedClass){const t=ks(i,e),n=t.level||1,s=t.xp||0,a=di[Math.min(n-1,di.length-1)]||0,r=di[Math.min(n,di.length-1)]||a+1e3;return{current:s-a,needed:Math.max(1,r-a),percent:Math.min(100,(s-a)/Math.max(1,r-a)*100),level:n}}function kc(i,e,t){const n=ks(i,e);n.xp=(n.xp||0)+t;const s=Math.min(Kg(n.xp),di.length),a=Math.max(0,s-(n.level||1));return n.level=s,In(i),{levels:a,level:s,xp:n.xp}}function jg(i,e,t=i.selectedClass){return e?e.type==="consumable"?i.gold<e.price?{ok:!1,reason:"poor"}:(i.gold-=e.price,e.id==="c_health"&&(i.potions.health=(i.potions.health||0)+1),e.id==="c_mana"&&(i.potions.mana=(i.potions.mana||0)+1),In(i),{ok:!0,kind:"consumable"}):i.owned.includes(e.id)?{ok:!1,reason:"owned"}:e.classId&&e.classId!==t?{ok:!1,reason:"class"}:i.gold<e.price?{ok:!1,reason:"poor"}:(i.gold-=e.price,i.owned.push(e.id),In(i),{ok:!0,kind:"gear"}):{ok:!1,reason:"missing"}}function e_(i,e,t=i.selectedClass){if(!e||e.type==="consumable")return{ok:!1};if(e.classId&&e.classId!==t)return{ok:!1,reason:"class"};if(!i.owned.includes(e.id))return{ok:!1,reason:"not-owned"};const n=ks(i,t),s=e.type==="weapon"?"weapon":e.type==="armor"?"armor":"relic";return n.equipment[s]=e.id,In(i),{ok:!0,slot:s}}function t_(i){if(!i)return[];if(i.type==="consumable"){if(i.id==="c_health")return[["Vida","+50%"]];if(i.id==="c_mana")return[["Mana","+60%"]]}const e={hp:"Vida",mana:"Mana",power:"Poder",defense:"Defesa",speed:"Velocidade",crit:"Crítico"},t=[];for(const[n,s]of Object.entries(i.stats||{})){if(!e[n])continue;let a=s>0?`+${s}`:`${s}`;n==="crit"&&(a=`+${Math.round(s*100)}%`),n==="speed"&&(a=s>0?`+${Math.round(s*100)}%`:`${Math.round(s*100)}%`),t.push([e[n],a])}return t}function n_(i,e){return Jh.filter(t=>i==="weapon"?t.type==="weapon"&&t.classId===e:i==="armor"?t.type==="armor":i==="relic"?t.type==="relic":i==="consumable"?t.type==="consumable":!1)}const D={sphere:new Kn(1,12,9),sphereLow:new Kn(1,8,6),box:new yi(1,1,1),cylinder:new Lt(1,1,1,10),cone:new Qa(1,1,8),octa:new er(1,0),torus:new tr(1,.16,6,14),capsule:new mi(1,1,3,8),plane:new cs(1,1)};function Y(i,e={}){return new sn({color:i,roughness:e.roughness??.72,metalness:e.metalness??.08,flatShading:e.flatShading??!0,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??ui,depthWrite:e.depthWrite??!0})}function E(i,e,t,n=[0,0,0],s=[0,0,0],a=[1,1,1]){const r=new qe(e,t);return r.position.set(...n),r.rotation.set(...s),r.scale.set(...a),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function pt(i,e=2.2,t=1){return new sn({color:i,emissive:i,emissiveIntensity:e,roughness:.35,metalness:.1,transparent:t<1,opacity:t})}function fl(i){i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})}function sr(i,e,t=1){const n=new ve;E(n,D.box,i,[0,-.62,0],[0,0,0],[.075*t,.95*t,.022*t]);const s=E(n,D.box,pt(e,1.2),[0,-.62,.025],[0,0,0],[.018*t,.92*t,.008]);return s.castShadow=!1,E(n,D.box,Y("#b8934f",{metalness:.65,roughness:.35}),[0,-.14,0],[0,0,0],[.3*t,.055,.06]),E(n,D.cylinder,Y("#5a3a22"),[0,-.04,0],[0,0,0],[.035*t,.2,.035*t]),E(n,D.sphereLow,Y("#d4b56c",{metalness:.7,roughness:.3}),[0,.07,0],[0,0,0],[.05,.05,.05]),n}function Gc(i,e,t=1,n=1){const s=new ve;E(s,D.box,i,[0,-.34,0],[0,0,0],[.055*n,.55*n,.018*n]),E(s,D.cone,i,[0,-.67,0],[Math.PI,0,0],[.055*n,.18,.018*n]);const a=E(s,D.box,pt(e,1.1),[t*.026,-.34,.02],[0,0,0],[.008,.5*n,.005]);return a.castShadow=!1,E(s,D.box,Y("#9c7a44",{metalness:.6}),[0,-.06,0],[0,0,0],[.18*n,.035,.04]),E(s,D.cylinder,Y("#241a16"),[0,.04,0],[0,0,0],[.026,.15,.026]),s}function ed(i,e,t=1){const n=new ve;E(n,D.cylinder,i,[0,-.2,0],[0,0,0],[.032*t,1.75*t,.032*t]),E(n,D.torus,Y("#a6803d",{metalness:.7}),[0,.62,0],[Math.PI/2,0,0],[.11*t,.11,.11]);const s=E(n,D.sphere,pt(e,2.4),[0,.68,0],[0,0,0],[.12*t,.12*t,.12*t]);s.castShadow=!1;const a=new cn(e,1.1,3.5,2);return a.position.set(0,.68,0),n.add(a),E(n,D.cone,Y("#6b4b2b"),[0,-1.07,0],[Math.PI,0,0],[.055,.16,.055]),n}function td(i,e,t=1){const n=new ve,s=new Ih([new L(0,.62,0),new L(.17,.32,0),new L(.2,0,0),new L(.17,-.34,0),new L(0,-.65,0)]),a=new cl(s,12,.027*t,5,!1);E(n,a,i,[0,0,0]);const r=new bt().setFromPoints([new L(0,.62,0),new L(-.07,0,.02),new L(0,-.65,0)]),o=new Tu(r,new Th({color:e,transparent:!0,opacity:.8}));return n.add(o),E(n,D.sphereLow,pt(e,1.4),[.2,.16,0],[0,0,0],[.035,.035,.035]),n}function i_(i,e){const t=new ve;E(t,D.cylinder,i,[0,-.16,0],[0,0,0],[.045,.34,.045]),E(t,D.sphereLow,Y("#d4b56c",{metalness:.7}),[0,.04,0],[0,0,0],[.065,.065,.065]),E(t,D.torus,Y("#d4b56c",{metalness:.65}),[0,.01,0],[Math.PI/2,0,0],[.055,.055,.055]);const n=[],s=18;for(let a=0;a<s;a++){const r=.04-a/s*.017,o=E(t,D.sphereLow,pt(e,1.7+a/s*.6),[0,-.25,0],[0,0,0],[r,r,r]);o.castShadow=!1,n.push(o)}return{group:t,segments:n}}function nd(i,e){const t=new ve;E(t,D.cylinder,i,[0,0,0],[Math.PI/2,0,0],[.34,.055,.34]),E(t,D.cylinder,Y("#c7a45e",{metalness:.7,roughness:.3}),[0,0,.04],[Math.PI/2,0,0],[.24,.045,.24]),E(t,D.sphereLow,pt(e,1.1),[0,0,.09],[0,0,0],[.08,.08,.035]);const n=E(t,D.torus,Y("#c7a45e",{metalness:.7}),[0,0,.02],[0,0,0],[.34,.34,.34]);return n.rotation.z=0,t}const Hc={warden:{skin:"#d6a47d",outfit:"#3f5d8f",outfit2:"#243a5c",accent:"#8fc2ff",metal:"#b8c9e2",hair:"#5a3a25",cape:"#294a78"},sorceress:{skin:"#e1b08d",outfit:"#4d2c7a",outfit2:"#2a1747",accent:"#ff9b52",metal:"#c9a15c",hair:"#ead7ff",cape:"#3a1f60"},assassin:{skin:"#c99b77",outfit:"#22303a",outfit2:"#111a21",accent:"#45e0cd",metal:"#8fa4ad",hair:"#20201e",cape:"#152229"},huntress:{skin:"#d9a77e",outfit:"#3e5b38",outfit2:"#263b26",accent:"#b8e07c",metal:"#b08e54",hair:"#7a3f22",cape:"#2e482b"},whipdancer:{skin:"#dda98a",outfit:"#741f31",outfit2:"#3c0e1b",accent:"#ffcf73",metal:"#e0b65f",hair:"#2a1212",cape:"#4a1120"}};function ar(i){const e=Hc[i]||Hc.warden,t=new ve;t.name=`hero-${i}`;const n=new ve;t.add(n);const s=Y(e.skin,{roughness:.85}),a=Y(e.outfit,{roughness:.8}),r=Y(e.outfit2,{roughness:.85}),o=Y(e.accent,{roughness:.45,metalness:.2}),l=Y(e.metal,{roughness:.4,metalness:.65}),c=Y(e.hair,{roughness:.9}),h=Y("#3a2a20",{roughness:.95}),f=Y("#c9a25c",{roughness:.35,metalness:.75}),u=Y(e.cape,{roughness:.9,side:ut}),d=new ve;d.position.y=.84,n.add(d);const g=new ve;g.position.set(-.13,0,0),d.add(g);const _=new ve;_.position.set(.13,0,0),d.add(_);const p=new mi(.075,.48,4,7),m=new yi(.16,.18,.27);for(const[q,H]of[[g,-1],[_,1]])E(q,p,r,[0,-.33,0]),E(q,m,h,[0,-.66,.045]),i==="warden"&&E(q,D.box,l,[0,-.28,.055],[0,0,0],[.13,.34,.06]);const v=new ve;if(v.position.y=1.2,n.add(v),E(v,D.cylinder,a,[0,0,0],[0,0,0],[.235,.44,.17]),E(v,D.cylinder,r,[0,-.25,0],[0,0,0],[.215,.1,.16]),E(v,D.box,f,[0,-.2,.155],[0,0,0],[.28,.055,.03]),E(v,D.sphereLow,f,[0,-.2,.18],[0,0,0],[.035,.035,.018]),i==="warden")E(v,D.box,l,[0,.06,.16],[0,0,0],[.33,.34,.06]),E(v,D.box,o,[0,.1,.195],[0,0,0],[.035,.22,.015]),E(v,D.box,l,[0,-.09,.19],[0,0,0],[.25,.045,.03]);else if(i==="sorceress")E(v,D.cone,r,[0,-.52,0],[0,0,0],[.42,.9,.32]),E(v,D.cylinder,f,[0,-.16,0],[0,0,0],[.235,.045,.18]),E(v,D.sphereLow,pt(e.accent,2),[0,.02,.18],[0,0,0],[.055,.055,.02]);else if(i==="assassin")E(v,D.box,h,[0,.03,.15],[0,0,0],[.3,.3,.05]),E(v,D.box,o,[-.12,.09,.19],[0,0,.5],[.02,.2,.012]),E(v,D.box,o,[.12,.09,.19],[0,0,-.5],[.02,.2,.012]);else if(i==="huntress"){E(v,D.box,h,[0,.02,.16],[0,0,0],[.28,.32,.045]),E(v,D.box,r,[0,-.06,.19],[0,0,.15],[.26,.07,.02]);const q=E(v,D.cylinder,h,[.16,.06,-.2],[.2,0,-.2],[.09,.46,.09]);q.rotation.z=-.25;for(let H=0;H<3;H++)E(v,D.cylinder,Y("#d8c59a"),[.2+H*.025,.33,-.22],[.2,0,0],[.008,.38,.008])}else i==="whipdancer"&&(E(v,D.cylinder,r,[0,-.28,0],[0,0,0],[.26,.24,.19]),E(v,D.box,f,[0,-.05,.17],[0,0,0],[.3,.05,.03]),E(v,D.box,f,[-.1,.12,.18],[0,0,.6],[.02,.16,.01]),E(v,D.box,f,[.1,.12,.18],[0,0,-.6],[.02,.16,.01]));const w=new cs(.52,.9,4,5),b=E(n,w,u,[0,1.16,-.14],[.09,0,0]);b.castShadow=!1;const R=new ve;R.position.set(-.29,1.42,0),n.add(R);const T=new ve;T.position.set(.29,1.42,0),n.add(T);const x=new mi(.06,.34,4,7);for(const[q,H]of[[R,-1],[T,1]])E(q,x,i==="warden"?l:a,[0,-.2,0]),E(q,D.sphereLow,s,[0,-.43,0],[0,0,0],[.075,.075,.075]),i==="warden"&&E(q,D.sphereLow,l,[0,.02,0],[0,0,0],[.16,.13,.17]),i==="whipdancer"&&E(q,D.torus,f,[0,-.36,0],[Math.PI/2,0,0],[.062,.062,.062]),i==="assassin"&&E(q,D.box,h,[0,-.3,.02],[0,0,0],[.115,.08,.115]);(i==="sorceress"||i==="whipdancer")&&(E(n,D.sphereLow,r,[-.27,1.46,0],[0,0,0],[.12,.12,.13]),E(n,D.sphereLow,r,[.27,1.46,0],[0,0,0],[.12,.12,.13]));const y=new ve;if(y.position.y=1.7,n.add(y),E(y,D.sphere,s,[0,0,0],[0,0,0],[.17,.19,.165]),E(y,D.sphereLow,s,[0,-.05,.14],[0,0,0],[.055,.04,.04]),E(y,D.sphereLow,Y("#141018"),[-.06,.02,.15],[0,0,0],[.02,.023,.015]),E(y,D.sphereLow,Y("#141018"),[.06,.02,.15],[0,0,0],[.02,.023,.015]),i==="warden"){E(y,D.sphere,l,[0,.045,-.005],[0,0,0],[.185,.16,.18]),E(y,D.box,l,[0,0,.165],[0,0,0],[.055,.16,.04]),E(y,D.box,o,[0,.06,.19],[0,0,0],[.1,.025,.02]);const q=E(y,D.cone,Y("#b33a38"),[0,.27,-.04],[.1,0,0],[.07,.26,.07]);q.rotation.z=.2,E(y,D.box,l,[-.18,.02,-.02],[0,0,0],[.04,.15,.14]),E(y,D.box,l,[.18,.02,-.02],[0,0,0],[.04,.15,.14])}else if(i==="sorceress"){E(y,D.sphere,c,[0,.03,-.05],[0,0,0],[.19,.19,.19]),E(y,D.cylinder,c,[0,-.23,-.11],[0,0,0],[.11,.34,.08]);const q=E(y,D.cylinder,r,[0,.18,0],[0,0,0],[.42,.035,.42]);q.rotation.z=.05,E(y,D.cone,r,[.03,.4,0],[.06,0,-.08],[.2,.45,.2]),E(y,D.torus,f,[.03,.23,0],[Math.PI/2,0,0],[.17,.17,.17]),E(y,D.sphereLow,pt(e.accent,1.6),[.02,.22,.19],[0,0,0],[.035,.035,.02])}else if(i==="assassin"){E(y,D.sphere,r,[0,.04,-.02],[0,0,0],[.205,.2,.2]),E(y,D.box,r,[0,.05,.15],[0,0,0],[.22,.11,.06]),E(y,D.box,o,[0,.06,.19],[0,0,0],[.14,.018,.012]),E(y,D.cone,r,[0,.23,-.02],[0,0,0],[.18,.22,.18]);const q=E(n,D.plane,Y(e.accent,{transparent:!0,opacity:.55,side:ut}),[.16,1.34,-.12],[.2,.1,-.3],[.12,.65,1]);q.castShadow=!1}else i==="huntress"?(E(y,D.sphere,c,[0,.02,-.03],[0,0,0],[.19,.2,.19]),E(y,D.cone,r,[0,.18,-.01],[0,0,0],[.23,.34,.23]),E(y,D.cylinder,c,[.15,-.18,-.08],[0,0,-.15],[.06,.32,.06]),E(y,D.cone,Y("#e8dfc9"),[.06,.28,-.05],[.2,0,-.3],[.025,.15,.025])):i==="whipdancer"&&(E(y,D.sphere,c,[0,.035,-.04],[0,0,0],[.19,.2,.19]),E(y,D.cylinder,c,[.18,-.22,-.12],[0,0,-.2],[.07,.42,.07]),E(y,D.torus,f,[0,.12,0],[Math.PI/2,0,0],[.17,.17,.17]),E(y,D.sphereLow,pt(e.accent,1.5),[-.16,.14,.06],[0,0,0],[.03,.03,.03]),E(y,D.box,Y("#7a1528"),[.1,.2,.12],[.2,0,.4],[.07,.12,.02]));const I=new ve;I.position.set(0,-.43,.02),T.add(I);const C=new ve;C.position.set(0,-.43,.02),R.add(C);let N=null,B=null,W=null;if(i==="warden")N=sr(l,e.accent,1.05),N.rotation.set(.1,0,.05),I.add(N),B=nd(l,e.accent),B.position.set(-.1,.02,.06),B.rotation.y=.15,C.add(B);else if(i==="sorceress")N=ed(Y("#4b3422"),e.accent,1.05),N.rotation.set(.05,0,.05),I.add(N);else if(i==="assassin"){N=Gc(l,e.accent,1,1.05),I.add(N);const q=Gc(l,e.accent,-1,1.05);q.rotation.z=Math.PI,C.add(q)}else i==="huntress"?(N=td(Y("#5b3d22"),e.accent,1.05),N.rotation.set(0,0,.2),C.add(N),I.position.set(0,-.4,.1)):i==="whipdancer"&&(W=i_(Y("#3a1018"),e.accent),N=W.group,N.rotation.set(.15,0,.1),I.add(N));const U=new qe(new gn(.5,.58,28),new Pt({color:e.accent,transparent:!0,opacity:.28,side:ut,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.y=.02,t.add(U);const V=new qe(new $t(.44,20),new Pt({color:0,transparent:!0,opacity:.32,depthWrite:!1}));return V.rotation.x=-Math.PI/2,V.position.y=.01,t.add(V),t.userData={classId:i,style:e,rig:n,hips:d,torso:v,head:y,armL:R,armR:T,legL:g,legR:_,cape:b,weaponHolderR:I,weaponHolderL:C,weapon:N,shield:B,whip:W?W.segments:null,ring:U,baseArmL:R.rotation.clone(),baseArmR:T.rotation.clone(),baseTorsoY:v.position.y,baseCapeRot:b.rotation.x,glowMaterials:[],attackProgress:-1,abilityProgress:-1,dead:!1},fl(t),t.scale.setScalar(1),t}function rr(i,e,t={}){if(!i)return;const n=i.userData,s=Math.max(0,Math.min(1,t.moving||0)),a=t.attack??-1,r=t.ability??-1,o=e,l=Math.sin(o*9.5)*.62*s;if(n.legL.rotation.x=l,n.legR.rotation.x=-l,n.armL.rotation.x=n.baseArmL.x-l*.55,n.armR.rotation.x=n.baseArmR.x+l*.55,n.armL.rotation.z=n.baseArmL.z+Math.sin(o*1.7)*.02,n.armR.rotation.z=n.baseArmR.z-Math.sin(o*1.7)*.02,n.torso.position.y=n.baseTorsoY+Math.sin(o*2.1)*.012+(s?Math.abs(Math.sin(o*9.5))*.02:0),n.torso.rotation.y=Math.sin(o*1.1)*.035+l*.06,n.head.rotation.y=Math.sin(o*.75)*.07,n.head.rotation.x=Math.sin(o*1.3)*.02,n.cape.rotation.x=n.baseCapeRot+Math.sin(o*2.4)*.03+s*.2,a>=0){const c=Math.min(1,Math.max(0,a)),h=Math.sin(c*Math.PI),f=Math.sin(Math.min(1,c*2.2)*Math.PI*.5);n.armR.rotation.x=n.baseArmR.x-h*2.25,n.armR.rotation.z=n.baseArmR.z-f*.45,n.torso.rotation.y=-h*.5,n.armL.rotation.x=n.baseArmL.x+h*.35,n.classId==="whipdancer"&&(n.armR.rotation.z=n.baseArmR.z+h*.8,n.torso.rotation.y=-h*.7)}if(r>=0){const c=Math.min(1,Math.max(0,r)),h=Math.sin(c*Math.PI);n.armL.rotation.x=n.baseArmL.x-h*1.5,n.armR.rotation.x=n.baseArmR.x-h*1.5,n.torso.rotation.x=-h*.08}else n.torso.rotation.x*=.85;if(n.whip){const c=n.whip.length,h=a>=0?Math.min(1,a):-1,f=h>=0?Math.sin(Math.min(1,h*1.3)*Math.PI*.5):.26,u=h>=0?.2:.7;for(let d=0;d<c;d++){const g=d/(c-1),_=Math.sin(g*7-o*5.5)*.14*(1-f*.55)*u,p=Math.sin(g*Math.PI*2.4+o*1.3)*.18*u+_,m=-.24-g*(.55+f*3.2),v=g*f*1.05+Math.cos(g*6+o*2.2)*.12*u;n.whip[d].position.set(p,m,v)}}n.ring&&(n.ring.material.opacity=.2+Math.sin(o*2.2)*.07)}function wn(i,e,t=1,n=null){const s=new ve,a=new ve;s.add(a);const r=new ve;r.position.y=.8,a.add(r);const o=new ve;o.position.x=-.12,r.add(o);const l=new ve;l.position.x=.12,r.add(l);const c=new mi(.07,.46,4,6);E(o,c,i,[0,-.32,0]),E(l,c,i,[0,-.32,0]);const h=new ve;h.position.y=1.15,a.add(h),E(h,D.cylinder,i,[0,0,0],[0,0,0],[.22,.42,.16]);const f=new ve;f.position.set(-.28,1.36,0),a.add(f);const u=new ve;u.position.set(.28,1.36,0),a.add(u);const d=new mi(.055,.32,4,6);E(f,d,n||i,[0,-.18,0]),E(u,d,n||i,[0,-.18,0]);const g=new ve;return g.position.y=1.6,a.add(g),s.scale.setScalar(t),{group:s,rig:a,hips:r,legL:o,legR:l,torso:h,armL:f,armR:u,head:g}}function an(i,e="#ff5d4a",t=1,n=.02,s=.15){const a=pt(e,2.6);E(i,D.sphereLow,a,[-.06,n,s],[0,0,0],[.023*t,.027*t,.016]),E(i,D.sphereLow,a,[.06,n,s],[0,0,0],[.023*t,.027*t,.016])}function Vc(i){const e=Y(i||"#cfc7b0",{roughness:.85}),t=Y("#221e1a"),n=wn(e,e,1.02),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(s,D.sphere,e,[0,0,0],[0,0,0],[.15,.17,.15]),E(s,D.box,e,[0,-.08,.04],[0,0,0],[.16,.08,.14]),an(s,"#ff4b3e",1,.02,.14),E(s,D.cone,t,[-.06,-.13,.06],[0,0,.2],[.02,.06,.02]);for(let u=0;u<3;u++)E(a,D.box,e,[0,.12-u*.1,.15],[0,0,0],[.27-u*.03,.028,.02]);E(a,D.box,t,[0,-.02,0],[0,0,0],[.1,.4,.08]),E(r,D.box,e,[0,-.36,0],[0,0,0],[.055,.4,.055]),E(o,D.box,e,[0,-.36,0],[0,0,0],[.055,.4,.055]);const h=sr(Y("#8e8b80",{metalness:.6}),"#ff5a3c",.9);h.position.set(0,-.38,0),r.add(h);const f=nd(Y("#5b5549",{metalness:.5}),"#ff5a3c");return f.scale.setScalar(.72),f.position.set(-.08,0,.02),o.add(f),n.group.userData={...n,kind:"skeleton",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:h},n.group}function s_(i){const e=Y(i||"#6f9a50",{roughness:.85}),t=Y("#3a2b20"),n=wn(t,e,.86,e),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(s,D.sphere,e,[0,0,0],[0,0,0],[.18,.16,.17]),E(s,D.cone,e,[-.19,.02,0],[0,0,1.4],[.08,.24,.06]),E(s,D.cone,e,[.19,.02,0],[0,0,-1.4],[.08,.24,.06]),an(s,"#ffd25a",1.1,.02,.15),E(s,D.box,e,[0,-.08,.13],[0,0,0],[.15,.08,.06]),E(s,D.cone,Y("#e8dfc9"),[-.05,-.11,.17],[0,0,0],[.016,.05,.016]),E(a,D.box,t,[0,.02,.13],[0,0,0],[.26,.28,.05]),E(r,D.sphereLow,e,[0,-.38,0],[0,0,0],[.07,.07,.07]),E(o,D.sphereLow,e,[0,-.38,0],[0,0,0],[.07,.07,.07]);const h=new ve;return E(h,D.cylinder,Y("#4b3522"),[0,-.4,0],[0,0,0],[.035,.65,.035]),E(h,D.sphereLow,Y("#5b452e"),[0,-.75,0],[0,0,0],[.15,.2,.15]),r.add(h),n.group.userData={...n,kind:"goblin",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:h},n.group}function a_(i){const e=Y(i||"#a33d32",{roughness:.9}),t=Y("#24161b"),n=wn(e,e,1.04),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(a,D.cone,e,[0,-.5,0],[0,0,0],[.4,.95,.34]),E(s,D.sphere,t,[0,.02,-.02],[0,0,0],[.19,.2,.19]),E(s,D.cone,e,[0,.16,-.02],[0,0,0],[.22,.36,.22]),an(s,"#ffcf5a",1.1,.02,.15);const h=ed(Y("#3b2618"),"#ff8c3a",.92);return h.position.set(0,-.35,0),r.add(h),E(a,D.sphereLow,pt("#ff8c3a",1.6),[0,.06,.17],[0,0,0],[.05,.05,.02]),n.group.userData={...n,kind:"cultist",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:h},n.group}function r_(i){const e=Y(i||"#8b8a86",{roughness:.95}),t=Y("#262523"),n=new ve,s=new ve;s.position.y=.62,n.add(s),E(s,D.capsule,e,[0,0,0],[0,0,Math.PI/2],[.22,.52,.22]),E(s,D.sphereLow,e,[0,.06,.42],[0,0,0],[.17,.16,.2]),E(s,D.box,e,[0,-.03,.62],[0,0,0],[.13,.09,.18]),an(s,"#ffb13d",.9,.12,.58),E(s,D.cone,e,[-.1,.19,.38],[0,0,.2],[.06,.16,.06]),E(s,D.cone,e,[.1,.19,.38],[0,0,-.2],[.06,.16,.06]),E(s,D.cone,t,[0,.04,.72],[Math.PI/2,0,0],[.035,.08,.035]);const a=[];for(const[o,l]of[[-.15,.3],[.15,.3],[-.15,-.3],[.15,-.3]]){const c=new ve;c.position.set(o,-.15,l),s.add(c),E(c,D.cylinder,e,[0,-.2,0],[0,0,0],[.055,.4,.055]),a.push(c)}const r=new ve;return r.position.set(0,.08,-.48),s.add(r),E(r,D.cylinder,e,[0,.08,-.2],[.8,0,0],[.045,.4,.045]),n.scale.setScalar(1.02),n.userData={kind:"hound",body:s,head:s,legs:a,tail:r,baseY:0,armL:null,armR:null,legL:null,legR:null,torso:s},n}function o_(i){const e=Y(i||"#5b7045",{roughness:.95}),t=Y("#2e2a20"),n=wn(e,e,1.25,e),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(s,D.sphere,e,[0,0,0],[0,0,0],[.2,.18,.18]),an(s,"#ffd35a",1.1,.03,.17),E(s,D.cone,Y("#e8dfc9"),[-.08,-.09,.16],[0,0,.2],[.025,.09,.025]),E(s,D.cone,Y("#e8dfc9"),[.08,-.09,.16],[0,0,-.2],[.025,.09,.025]),E(a,D.box,t,[0,.02,.14],[0,0,0],[.36,.36,.06]),E(r,D.sphereLow,e,[0,.02,0],[0,0,0],[.18,.15,.18]),E(o,D.sphereLow,e,[0,.02,0],[0,0,0],[.18,.15,.18]);const h=new ve;return E(h,D.cylinder,Y("#4b3522"),[0,-.45,0],[0,0,0],[.05,.75,.05]),E(h,D.box,Y("#5b452e"),[0,-.85,0],[0,0,0],[.22,.28,.22]),r.add(h),n.group.userData={...n,kind:"brute",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:h},n.group}function l_(i){const e=Y(i||"#7fb4cf",{metalness:.55,roughness:.42}),t=Y("#1c2430"),n=wn(t,e,1.05),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(a,D.box,e,[0,.03,.14],[0,0,0],[.32,.38,.07]),E(s,D.sphere,e,[0,.02,0],[0,0,0],[.18,.19,.18]),E(s,D.box,e,[0,0,.16],[0,0,0],[.06,.17,.05]),an(s,"#ff6d55",1,.02,.18),E(s,D.cone,e,[0,.24,-.02],[0,0,0],[.08,.16,.08]),E(o,D.sphereLow,e,[0,.01,0],[0,0,0],[.13,.1,.14]),E(r,D.sphereLow,e,[0,.01,0],[0,0,0],[.13,.1,.14]);const h=sr(Y("#b8c6d6",{metalness:.65}),"#78d7ff",1);return h.position.set(0,-.38,0),r.add(h),n.group.userData={...n,kind:"knight",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:h},n.group}function c_(i){const e=Y(i||"#6d5b9c",{roughness:.9}),t=Y("#2d2334"),n=wn(t,e,1.02),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(a,D.cone,e,[0,-.45,0],[0,0,0],[.35,.85,.3]),E(s,D.sphere,t,[0,.02,-.02],[0,0,0],[.19,.2,.19]),E(s,D.cone,e,[0,.17,-.01],[0,0,0],[.23,.38,.23]),an(s,"#d7a2ff",1.1,.02,.15);const h=td(Y("#3e2d44"),"#c08cff",.9);return h.rotation.z=.15,o.add(h),E(a,D.cylinder,t,[.15,.05,-.2],[.2,0,-.2],[.08,.4,.08]),n.group.userData={...n,kind:"archer",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:h},n.group}function h_(i){const e=Y(i||"#8ac4d8",{roughness:.45,metalness:.15}),t=Y("#3e6470"),n=wn(t,e,1.45),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(a,D.box,e,[0,.05,0],[0,0,0],[.5,.5,.38]),E(a,D.octa,pt("#b7f1ff",1.8),[0,.02,.2],[0,0,0],[.12,.16,.08]),E(s,D.octa,e,[0,.02,0],[.2,0,0],[.2,.24,.2]),an(s,"#c9f6ff",1.2,.01,.17),E(r,D.box,e,[0,-.1,0],[0,0,0],[.22,.55,.22]),E(o,D.box,e,[0,-.1,0],[0,0,0],[.22,.55,.22]),E(r,D.octa,e,[0,-.45,0],[0,0,0],[.18,.22,.18]),E(o,D.octa,e,[0,-.45,0],[0,0,0],[.18,.22,.18]);for(let h=0;h<3;h++)E(d_(n),D.cone,e,[0,1.55+h*.1,-.15-h*.05],[.2,0,0],[.07,.3,.07]);return n.group.userData={...n,kind:"golem",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:null},n.group}function d_(i){return i.rig||i.group}function u_(i){const e=Y(i||"#9b6fe0",{transparent:!0,opacity:.82,roughness:.9,side:ut}),t=Y("#1b1426"),n=new ve,s=new ve;s.position.y=1.1,n.add(s),E(s,D.cone,e,[0,-.15,0],[0,0,0],[.42,1.1,.36]),E(s,D.sphere,t,[0,.42,0],[0,0,0],[.2,.22,.2]),E(s,D.cone,e,[0,.55,-.02],[0,0,0],[.25,.38,.25]),an(s,"#c98cff",1.2,.44,.16);for(let l=0;l<5;l++){const c=l/5*Math.PI*2;E(s,D.cone,e,[Math.cos(c)*.28,-.65,Math.sin(c)*.24],[Math.PI,0,0],[.06,.4,.06])}const a=new ve;a.position.set(-.3,.22,0),s.add(a);const r=new ve;r.position.set(.3,.22,0),s.add(r),E(a,D.capsule,e,[0,-.28,0],[0,0,.2],[.055,.3,.055]),E(r,D.capsule,e,[0,-.28,0],[0,0,-.2],[.055,.3,.055]);const o=new cn(10775551,.9,4,2);return o.position.set(0,.3,0),n.add(o),n.userData={kind:"wraith",body:s,head:s,armL:a,armR:r,legL:null,legR:null,torso:s,baseY:0,floating:!0},n}function f_(){const i=Y("#d7c79e",{roughness:.82}),e=Y("#d2a84e",{metalness:.7,roughness:.35}),t=Y("#2a211c"),n=wn(i,e,1.55),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c}=n;E(s,D.sphere,i,[0,0,0],[0,0,0],[.17,.19,.17]),E(s,D.box,i,[0,-.09,.04],[0,0,0],[.19,.1,.17]),an(s,"#ff3d2e",1.2,.02,.15),E(s,D.torus,e,[0,.15,0],[Math.PI/2,0,0],[.19,.19,.19]);for(let f=0;f<4;f++)E(s,D.cone,e,[-.14+f*.093,.3,0],[0,0,0],[.035,.17,.035]);for(let f=0;f<4;f++)E(a,D.box,i,[0,.18-f*.11,.16],[0,0,0],[.34-f*.03,.035,.025]);E(a,D.box,t,[0,0,0],[0,0,0],[.14,.44,.1]),E(a,D.box,e,[0,.08,.2],[0,0,0],[.28,.06,.03]);const h=new ve;return E(h,D.cylinder,Y("#4b3522"),[0,-.7,0],[0,0,0],[.06,1.4,.06]),E(h,D.box,Y("#b9c2c8",{metalness:.7,roughness:.3}),[.18,-1.15,0],[0,0,.2],[.36,.28,.06]),E(h,D.cone,Y("#b9c2c8",{metalness:.7}),[.38,-1.12,0],[0,0,-1.3],[.16,.28,.06]),r.add(h),E(o,D.sphereLow,i,[0,-.02,0],[0,0,0],[.18,.16,.18]),n.group.userData={...n,kind:"boneTyrant",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,weapon:h,boss:!0},n.group}function p_(){const i=Y("#5b4630",{roughness:.95}),e=Y("#698a4d",{roughness:.95}),t=Y("#8fbd62",{roughness:.9}),n=pt("#d4ff7a",1.7),s=wn(i,e,1.7),{head:a,torso:r,armR:o,armL:l,legL:c,legR:h,group:f}=s;E(r,D.cylinder,i,[0,0,0],[0,0,0],[.34,.5,.28]),E(r,D.sphereLow,e,[0,.15,.08],[0,0,0],[.3,.2,.24]),E(r,D.sphereLow,n,[0,.02,.2],[0,0,0],[.1,.12,.05]),E(a,D.octa,i,[0,0,0],[.2,0,0],[.19,.23,.18]),an(a,"#e2ff88",1.2,.02,.16);for(let u=0;u<7;u++){const d=u/7*Math.PI*2,g=E(f,D.cone,i,[Math.cos(d)*.45,1.6+Math.sin(u)*.2,Math.sin(d)*.35],[Math.cos(d)*.6,0,-Math.sin(d)*.6],[.055,.6,.055]);g.castShadow=!0,E(f,D.sphereLow,t,[Math.cos(d)*.75,1.9+Math.sin(u)*.2,Math.sin(d)*.55],[0,0,0],[.16,.12,.14])}for(let u=0;u<4;u++)E(o,D.cone,i,[.1,-.4-u*.06,0],[0,0,-.4-u*.1],[.06,.35,.06]),E(l,D.cone,i,[-.1,-.4-u*.06,0],[0,0,.4+u*.1],[.06,.35,.06]);return E(o,D.sphereLow,e,[0,-.15,0],[0,0,0],[.2,.18,.2]),E(l,D.sphereLow,e,[0,-.15,0],[0,0,0],[.2,.18,.2]),s.group.userData={...s,kind:"thornColossus",legL:c,legR:h,armL:l,armR:o,head:a,torso:r,baseY:0,boss:!0},s.group}function m_(){const i=Y("#8ccbe0",{roughness:.35,metalness:.2}),e=Y("#35657c",{roughness:.5}),t=pt("#d6f8ff",2.2),n=wn(e,i,1.8),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c,group:h}=n;E(a,D.box,i,[0,.02,0],[0,0,0],[.56,.58,.44]),E(a,D.octa,t,[0,.02,.24],[0,0,0],[.14,.2,.08]),E(s,D.octa,i,[0,.03,0],[.2,0,0],[.21,.26,.21]),an(s,"#e0fbff",1.3,.02,.18);for(let u=0;u<6;u++){const d=u/6*Math.PI*2;E(h,D.octa,i,[Math.cos(d)*.52,1.7+u%2*.2,Math.sin(d)*.4],[.4,d,.2],[.12,.32,.12])}const f=new ve;return E(f,D.box,i,[0,-.75,0],[0,0,0],[.1,1.4,.06]),E(f,D.cone,t,[0,-1.5,0],[Math.PI,0,0],[.1,.25,.06]),r.add(f),E(r,D.octa,i,[0,-.4,0],[0,0,0],[.18,.24,.18]),E(o,D.octa,i,[0,-.4,0],[0,0,0],[.18,.24,.18]),n.group.userData={...n,kind:"frostSentinel",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,boss:!0,weapon:f},n.group}function g_(){const i=Y("#2b1d3f",{metalness:.5,roughness:.42}),e=Y("#9b6ee8",{metalness:.65,roughness:.3}),t=pt("#c08cff",2.2),n=wn(i,e,1.95),{head:s,torso:a,armR:r,armL:o,legL:l,legR:c,group:h}=n;E(a,D.box,i,[0,.02,.13],[0,0,0],[.38,.46,.1]),E(a,D.box,e,[0,.02,.2],[0,0,0],[.07,.34,.02]),E(a,D.octa,t,[0,.08,.22],[0,0,0],[.07,.1,.04]),E(s,D.sphere,i,[0,.02,0],[0,0,0],[.2,.21,.2]),an(s,"#d6a2ff",1.3,.02,.17);const f=E(s,D.cone,e,[-.16,.22,-.02],[.1,0,.4],[.07,.32,.07]),u=E(s,D.cone,e,[.16,.22,-.02],[.1,0,-.4],[.07,.32,.07]);f.castShadow=!0,u.castShadow=!0,E(h,D.cone,Y("#1a1026",{side:ut}),[0,1.2,-.2],[.1,0,0],[.5,1.3,.4]);const d=sr(Y("#b8a6d8",{metalness:.7}),"#c08cff",1.45);d.position.set(0,-.4,0),r.add(d);const g=E(o,D.sphere,t,[0,-.48,.12],[0,0,0],[.12,.12,.12]);return g.castShadow=!1,n.group.userData={...n,kind:"eclipseLord",legL:l,legR:c,armL:o,armR:r,head:s,torso:a,baseY:0,boss:!0,weapon:d},n.group}function __(i,e){switch(i){case"skeleton":return Vc(e);case"goblin":return s_(e);case"cultist":return a_(e);case"hound":return r_(e);case"brute":return o_(e);case"knight":return l_(e);case"archer":return c_(e);case"golem":return h_(e);case"wraith":return u_(e);case"boneTyrant":return f_();case"thornColossus":return p_();case"frostSentinel":return m_();case"eclipseLord":return g_();default:return Vc(e)}}function Xr(i,e,t={}){if(!i)return;const n=i.userData,s=e,a=Math.max(0,Math.min(1,t.moving||0)),r=t.attack??-1,o=t.dead||!1,l=Math.sin(s*8.5+(n.phase||0))*.55*a;if(n.floating&&(i.position.y=(n.baseY||0)+Math.sin(s*2+(n.phase||0))*.12,n.body&&(n.body.rotation.z=Math.sin(s*1.2)*.06)),n.legL&&(n.legL.rotation.x=l),n.legR&&(n.legR.rotation.x=-l),n.legs&&(n.legs.forEach((c,h)=>{c.rotation.x=(h%2===0?1:-1)*l}),n.tail&&(n.tail.rotation.y=Math.sin(s*5)*.4)),n.armL&&(n.armL.rotation.x=n.armL.rotation.x*.8+(a?-l*.3:0)),n.armR&&(n.armR.rotation.x=n.armR.rotation.x*.8+(a?l*.3:0)),n.head&&(n.head.rotation.y=Math.sin(s*.9+(n.phase||0))*.08),n.torso&&(n.torso.rotation.z=Math.sin(s*1.7)*.025),n.body&&!n.floating&&(n.body.position.y=.62+Math.abs(Math.sin(s*8.5))*.03*a),r>=0){const c=Math.min(1,Math.max(0,r)),h=Math.sin(c*Math.PI);n.armR&&(n.armR.rotation.x=-h*2.1),n.armL&&(n.armL.rotation.x=-h*.5),n.torso&&(n.torso.rotation.y=h*.35),n.head&&(n.head.rotation.x=h*.2)}else n.torso&&(n.torso.rotation.y*=.9);o&&(i.rotation.z=Math.min(1.5,i.rotation.z+.04),i.position.y-=.01)}function id(){const i=new ve,e=Y("#d7a07d",{roughness:.85}),t=Y("#4c5c3e",{roughness:.9}),n=Y("#b98955",{roughness:.9}),s=Y("#7a3d25",{roughness:.95}),a=Y("#d2a84e",{metalness:.7,roughness:.3}),r=new ve;r.position.y=.75,i.add(r),E(r,D.cone,t,[0,.1,0],[0,0,0],[.34,1.15,.3]),E(r,D.box,n,[0,.02,.2],[0,0,0],[.34,.62,.04]),E(r,D.box,a,[0,-.28,.23],[0,0,0],[.35,.05,.03]);const o=new ve;o.position.y=.78,r.add(o),E(o,D.cylinder,t,[0,0,0],[0,0,0],[.22,.36,.17]),E(o,D.sphereLow,Y("#8d5d3c"),[0,.1,.16],[0,0,0],[.11,.13,.08]);const l=new ve;l.position.set(-.28,1.42,0),i.add(l);const c=new ve;c.position.set(.28,1.42,0),i.add(c);const h=new mi(.055,.32,4,6);E(l,h,t,[0,-.18,0]),E(c,h,t,[0,-.18,0]),E(l,D.sphereLow,e,[0,-.38,0],[0,0,0],[.06,.06,.06]),E(c,D.sphereLow,e,[0,-.38,0],[0,0,0],[.06,.06,.06]);const f=new ve;f.position.y=1.82,i.add(f),E(f,D.sphere,e,[0,0,0],[0,0,0],[.16,.18,.155]),E(f,D.sphere,s,[0,.04,-.03],[0,0,0],[.18,.18,.18]),E(f,D.sphereLow,s,[0,.18,-.12],[0,0,0],[.1,.09,.1]),E(f,D.sphereLow,Y("#2a1a12"),[-.055,.02,.145],[0,0,0],[.018,.022,.012]),E(f,D.sphereLow,Y("#2a1a12"),[.055,.02,.145],[0,0,0],[.018,.022,.012]),E(f,D.torus,a,[0,.06,0],[Math.PI/2,0,0],[.15,.15,.15]),E(f,D.sphereLow,a,[.16,.12,0],[0,0,0],[.025,.025,.025]);const u=new ve;u.position.y=2.55,i.add(u);const d=E(u,D.octa,pt("#f0c76a",2.4),[0,0,0],[0,0,0],[.09,.14,.09]);return d.castShadow=!1,i.userData={body:r,torso:o,head:f,armL:l,armR:c,marker:u,diamond:d,baseY:0},fl(i),i}function pl(){const i=new ve,e=Y("#c48b4b",{roughness:.95}),t=Y("#8e5a2e",{roughness:.95}),n=Y("#3f7a74",{roughness:.7}),s=Y("#d2a84e",{metalness:.6,roughness:.35}),a=new ve;a.position.y=.52,i.add(a),E(a,D.capsule,e,[0,0,0],[0,0,Math.PI/2],[.19,.45,.19]),E(a,D.sphereLow,e,[0,.13,.42],[0,0,0],[.17,.16,.18]),E(a,D.box,t,[0,.02,.6],[0,0,0],[.13,.1,.18]),an(a,"#2a1b10",1,.18,.57),E(a,D.sphereLow,Y("#20140c"),[0,.07,.7],[0,0,0],[.045,.035,.03]),E(a,D.cone,t,[-.11,.27,.36],[0,0,.25],[.06,.18,.06]),E(a,D.cone,t,[.11,.27,.36],[0,0,-.25],[.06,.18,.06]),E(a,D.box,n,[0,.12,.1],[0,0,0],[.36,.1,.45]),E(a,D.box,n,[0,.02,.05],[0,0,0],[.4,.06,.5]),E(a,D.torus,s,[0,.14,.33],[.2,0,0],[.15,.15,.15]);const r=E(a,D.cylinder,s,[0,.32,.05],[0,0,0],[.018,.3,.018]);r.rotation.z=.15,E(a,D.torus,s,[.03,.46,.05],[0,0,0],[.12,.12,.12]);const o=[];for(const[h,f]of[[-.14,.27],[.14,.27],[-.14,-.28],[.14,-.28]]){const u=new ve;u.position.set(h,-.12,f),a.add(u),E(u,D.cylinder,e,[0,-.2,0],[0,0,0],[.05,.38,.05]),E(u,D.sphereLow,t,[0,-.4,.03],[0,0,0],[.06,.04,.08]),o.push(u)}const l=new ve;l.position.set(0,.1,-.42),a.add(l),E(l,D.cylinder,e,[0,.05,-.2],[.9,0,0],[.035,.38,.035]);const c=E(a,D.box,Y("#a93b36"),[0,.23,.37],[0,0,0],[.22,.06,.12]);return c.castShadow=!1,i.userData={body:a,legs:o,tail:l,head:a,baseY:0},fl(i),i}function x_(i,e){if(!i)return;const t=i.userData,n=e;t.torso.position.y=.78+Math.sin(n*1.6)*.012,t.head.rotation.y=Math.sin(n*.6)*.18,t.head.rotation.x=Math.sin(n*.8)*.04,t.armL.rotation.x=-.15+Math.sin(n*1.2)*.05,t.armR.rotation.x=-.25+Math.sin(n*1.2+1)*.05,t.marker.position.y=2.55+Math.sin(n*2)*.08,t.marker.rotation.y=n*1.2,t.diamond.rotation.y=n*2}function sd(i,e){if(!i)return;const t=i.userData,n=e;t.tail.rotation.y=Math.sin(n*6)*.65,t.tail.rotation.x=Math.sin(n*3)*.15,t.body.position.y=.52+Math.sin(n*2.2)*.008,t.head.rotation.y=Math.sin(n*.8)*.2,t.legs.forEach((s,a)=>{s.rotation.x=Math.sin(n*2+a)*.03})}function qr(i,e="#f0d99e",t=.45){const n=document.createElement("canvas"),s=n.getContext("2d"),a=2;n.width=512*a,n.height=128*a,s.scale(a,a),s.clearRect(0,0,512,128),s.font="600 34px Cinzel, Georgia, serif",s.textAlign="center",s.textBaseline="middle",s.shadowColor="rgba(0,0,0,0.9)",s.shadowBlur=12,s.fillStyle=e,s.fillText(i,256,64);const r=new rl(n);r.colorSpace=Qt,r.anisotropy=4;const o=new il({map:r,transparent:!0,depthWrite:!1,depthTest:!1}),l=new Eh(o);return l.scale.set(t*4,t,1),l}function or(i,e=1,t=.4){const n=new qe(new gn(e*.82,e,40),new Pt({color:i,transparent:!0,opacity:t,side:ut,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.03,n}function v_(){const i=new ve,e=E(i,D.sphere,pt("#58d68d",2.2),[0,0,0],[0,0,0],[.13,.13,.13]);e.castShadow=!1;const t=or("#58d68d",.3,.35);return i.add(t),i.userData={orb:e,ring:t},i}function M_(){const i=new ve,e=E(i,D.octa,pt("#6ea8e8",2.2),[0,0,0],[0,0,0],[.12,.16,.12]);e.castShadow=!1;const t=or("#6ea8e8",.3,.35);return i.add(t),i.userData={orb:e,ring:t},i}function y_(){const i=new ve,e=E(i,D.octa,pt("#f0c76a",2.4),[0,0,0],[0,0,0],[.1,.13,.1]);e.castShadow=!1;const t=or("#f0c76a",.26,.35);return i.add(t),i.userData={orb:e,ring:t},i}function S_(){const i=pl();i.scale.setScalar(1.12);const e=new cn("#7ef0b5",1.2,5,2);return e.position.y=.6,i.add(e),i.traverse(t=>{t.isMesh&&t.material&&t.material.color&&(t.material=t.material.clone(),t.material.color.lerp(new Ge("#8cf0b5"),.55),t.material.emissive=new Ge("#2a8f5f"),t.material.emissiveIntensity=.8,t.material.transparent=!0,t.material.opacity=.82)}),i}const Pe={rock:new ol(1,0),stone:new Lt(1,1,1,6),cone:new Qa(1,1,7),sphere:new Kn(1,10,8),octa:new er(1,0),box:new yi(1,1,1),circle:new $t(1,32),ring:new gn(1,1.04,48)};function Ci(i,e,t,n,s,a,r=!1){const o=new Kn(100,28,18),l=new gi({side:jt,depthWrite:!1,fog:!1,uniforms:{topColor:{value:new Ge(e)},bottomColor:{value:new Ge(t)},offset:{value:12},exponent:{value:.75}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, pow(max(h, 0.0), exponent)), 1.0);
      }
    `}),c=new qe(o,l);if(i.add(c),i.fog=new Ja(n,s,a),r){const f=new Float32Array(960);for(let g=0;g<320;g++){const _=55+Math.random()*30,p=Math.random()*Math.PI*2,m=Math.random()*Math.PI*.42;f[g*3]=Math.cos(p)*Math.sin(m)*_,f[g*3+1]=8+Math.cos(m)*_*.8,f[g*3+2]=Math.sin(p)*Math.sin(m)*_}const u=new bt;u.setAttribute("position",new Un(f,3));const d=new Ah(u,new al({color:14274815,size:.16,transparent:!0,opacity:.8,depthWrite:!1,fog:!1}));i.add(d)}return c}function Pi(i,e={}){const t=new dl(e.sky??10336480,e.ground??3812130,e.hemi??1.05);i.add(t);const n=new za(e.sun??16769456,e.sunIntensity??2.1);n.position.set(e.sunX??9,e.sunY??16,e.sunZ??7),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-24,n.shadow.camera.right=24,n.shadow.camera.top=24,n.shadow.camera.bottom=-24,n.shadow.camera.near=1,n.shadow.camera.far=55,n.shadow.bias=-7e-4,i.add(n);const s=new za(e.fill??5994936,e.fillIntensity??.45);return s.position.set(-10,7,-8),i.add(s),{hemi:t,dir:n,fill:s}}function As(i,e,t=25,n={}){const s=new $t(t,64),a=new sn({color:e,roughness:n.roughness??.94,metalness:.02,flatShading:!1}),r=new qe(s,a);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,i.add(r);const o=new Pt({color:n.ringColor??9401672,transparent:!0,opacity:.2,side:ut,depthWrite:!1});for(const c of[5.5,11.5,18.5]){const h=new qe(new gn(c,c+.05,72),o);h.rotation.x=-Math.PI/2,h.position.y=.012,i.add(h)}const l=new sn({color:n.patchColor??e,roughness:1,transparent:!0,opacity:.5});for(let c=0;c<18;c++){const h=new qe(new $t(1+Math.random()*2.6,8),l),f=Math.random()*Math.PI*2,u=3+Math.random()*20;h.position.set(Math.cos(f)*u,.008,Math.sin(f)*u),h.rotation.x=-Math.PI/2,h.rotation.z=Math.random()*Math.PI,h.scale.y=.45+Math.random()*.5,i.add(h)}return r}function Bt(i,e={}){const t=e.count??80,n=e.area??20,s=e.height??8,a=new Float32Array(t*3),r=new Float32Array(t*4);for(let u=0;u<t;u++)a[u*3]=(Math.random()-.5)*n*2,a[u*3+1]=Math.random()*s,a[u*3+2]=(Math.random()-.5)*n*2,r[u*4]=Math.random()*Math.PI*2,r[u*4+1]=.5+Math.random(),r[u*4+2]=.5+Math.random(),r[u*4+3]=Math.random()*100;const o=new bt;o.setAttribute("position",new Un(a,3));const l=new al({color:e.color??16757850,size:e.size??.09,transparent:!0,opacity:e.opacity??.75,depthWrite:!1,blending:e.blending??li,sizeAttenuation:!0,fog:!1}),c=new Ah(o,l);i.add(c);const h=e.mode??"rise",f=e.speed??.4;return{points:c,update(u,d){const g=o.attributes.position.array;for(let _=0;_<t;_++){const p=_*3;h==="rise"?(g[p+1]+=d*f*r[_*4+1],g[p]+=Math.sin(u*.7+r[_*4])*d*.12,g[p+1]>s&&(g[p+1]=0)):h==="fall"?(g[p+1]-=d*f*r[_*4+1],g[p]+=Math.sin(u*.4+r[_*4])*d*.16,g[p+1]<0&&(g[p+1]=s)):h==="drift"?(g[p]+=Math.sin(u*.3+r[_*4])*d*.3,g[p+1]+=Math.cos(u*.4+r[_*4+1])*d*.1,g[p+2]+=Math.cos(u*.25+r[_*4+2])*d*.3):h==="void"&&(g[p+1]+=d*f*.35,g[p]+=Math.sin(u*.25+r[_*4])*d*.08,g[p+1]>s&&(g[p+1]=0,g[p]=(Math.random()-.5)*n*2,g[p+2]=(Math.random()-.5)*n*2))}o.attributes.position.needsUpdate=!0}}}function Li(i,e,t,n=16752714,s=1,a=!0){const r=new ve;r.position.set(e,0,t);const o=Y("#4a3424",{roughness:.95});E(r,Pe.stone,o,[0,1.15*s,0],[0,0,0],[.045*s,2.3*s,.045*s]),E(r,Pe.cone,Y("#2a1b12"),[0,2.38*s,0],[0,0,0],[.18*s,.26*s,.18*s]);const l=pt(n,2.6,.9),c=E(r,Pe.sphere,l,[0,2.55*s,0],[0,0,0],[.14*s,.26*s,.14*s]);c.castShadow=!1;const h=E(r,Pe.sphere,pt(16773568,3.2),[0,2.55*s,0],[0,0,0],[.06*s,.16*s,.06*s]);h.castShadow=!1;let f=null;return a&&(f=new cn(n,1.8,9*s,2),f.position.set(0,2.5*s,0),r.add(f)),i.add(r),{group:r,flame:c,inner:h,light:f,baseY:2.55*s,phase:Math.random()*10}}function Wc(i,e,t,n,s,a=null){const r=Y(s,{roughness:.98}),o=new qe(Pe.rock,r);return o.position.set(e,n*.36,t),o.scale.set(n*(.8+Math.random()*.5),n*(.5+Math.random()*.4),n*(.8+Math.random()*.5)),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),o.castShadow=!0,o.receiveShadow=!0,i.add(o),{mesh:o,obstacle:{x:e,z:t,r:a??n*.65}}}function Ii(i,e,t,n,s,a={}){const r=new ve;r.position.set(e,0,t);const o=Y(s,{roughness:.95}),l=Y(a.dark??"#2b2522",{roughness:1});if(E(r,Pe.box,l,[0,.18,0],[0,0,0],[1.05,.36,1.05]),E(r,Pe.stone,o,[0,n*.5+.2,0],[0,0,0],[.4,n,.4]),E(r,Pe.box,o,[0,n+.26,0],[0,0,0],[.75,.22,.75]),a.moss&&(E(r,Pe.sphere,Y("#4e6b3c",{roughness:1}),[.16,n*.62,.22],[0,0,0],[.22,.38,.16]),E(r,Pe.sphere,Y("#5d7d46",{roughness:1}),[-.2,.25,.25],[0,0,0],[.28,.2,.24])),a.broken&&E(r,Pe.cone,o,[.15,n+.42,.05],[.3,0,.4],[.38,.3,.38]),a.glow){const c=E(r,Pe.octa,pt(a.glow,2.2),[0,n*.58,.3],[0,0,0],[.09,.13,.09]);c.castShadow=!1;const h=new cn(a.glow,.7,5,2);h.position.set(0,n*.58,.3),r.add(h)}return i.add(r),{group:r,obstacle:{x:e,z:t,r:.6}}}function Ga(i,e,t,n=1,s={}){const a=new ve;a.position.set(e,0,t);const r=Y(s.trunk??"#4b3625",{roughness:1}),o=Y(s.leaf??"#355d36",{roughness:1}),l=Y(s.leaf2??"#477a42",{roughness:1});return E(a,Pe.stone,r,[0,1.1*n,0],[0,0,0],[.17*n,2.2*n,.17*n]),E(a,Pe.cone,o,[0,2.4*n,0],[0,0,0],[1.15*n,1.5*n,1.15*n]),E(a,Pe.cone,l,[.1*n,3.15*n,.05*n],[0,.4,0],[.88*n,1.3*n,.88*n]),E(a,Pe.cone,o,[-.05*n,3.8*n,0],[0,1,0],[.6*n,1.1*n,.6*n]),i.add(a),{group:a,obstacle:{x:e,z:t,r:.5*n}}}function Ha(i,e,t,n,s,a=!0){const r=new ve;r.position.set(e,0,t);const o=pt(s,1.4,.92),l=E(r,Pe.octa,o,[0,1.2*n,0],[.1,0,.06],[.28*n,1.3*n,.28*n]);l.castShadow=!1,E(r,Pe.octa,o,[.32*n,.55*n,.08],[.2,.4,.2],[.12*n,.65*n,.12*n]),E(r,Pe.octa,o,[-.3*n,.45*n,-.06],[.2,.8,-.2],[.1*n,.5*n,.1*n]);let c=null;return a&&(c=new cn(s,1.3,8,2),c.position.set(0,1.2*n,0),r.add(c)),i.add(r),{group:r,main:l,light:c,obstacle:{x:e,z:t,r:.45*n}}}function ad(i,e,t,n){const s=new ve;s.position.set(e,0,t);const a=new qe(new $t(n*1.15,28),new sn({color:"#2b1a12",roughness:1}));a.rotation.x=-Math.PI/2,a.position.y=.006,s.add(a);const r=new sn({color:"#ff6b22",emissive:"#ff3d0d",emissiveIntensity:1.9,roughness:.35,transparent:!0,opacity:.96}),o=new qe(new $t(n,28),r);o.rotation.x=-Math.PI/2,o.position.y=.018,s.add(o);const l=new cn("#ff6a24",1.5,n*5,2);return l.position.y=1.2,s.add(l),i.add(s),{group:s,lava:o,light:l,phase:Math.random()*8}}function Go(i,e,t,n,s){const a=new ve;a.position.set(e,0,t),a.rotation.y=n;const r=Y(s,{roughness:.95});return E(a,Pe.box,r,[-1.15,1.5,0],[0,0,0],[.5,3,.55]),E(a,Pe.box,r,[1.15,1.5,0],[0,0,0],[.5,3,.55]),E(a,Pe.box,r,[0,3.05,0],[0,0,0],[2.8,.45,.55]),E(a,Pe.box,r,[0,3.35,0],[0,0,0],[2.1,.18,.45]),i.add(a),{group:a,obstacle:{x:e,z:t,r:1.2}}}function Va(i,e,t,n,s=1){const a=new ve;a.position.set(e,0,t);const r=Y(n,{roughness:1});for(let o=0;o<4;o++){const l=E(a,Pe.cone,r,[(Math.random()-.5)*.3,.2*s,(Math.random()-.5)*.3],[(Math.random()-.5)*.5,0,(Math.random()-.5)*.5],[.03*s,.45*s,.03*s]);l.castShadow=!1}return i.add(a),a}function b_(i){const e=new ve;e.position.set(-6.2,0,-6.2);const t=Y("#4a3424",{roughness:.95}),n=Y("#7a2a2a",{roughness:.9,side:ut}),s=Y("#c9a25c",{roughness:.9,side:ut});E(e,Pe.box,t,[0,1.5,0],[0,0,0],[4.8,.16,2.6]);for(const a of[-2.1,2.1])for(const r of[-1.05,1.05])E(e,Pe.stone,t,[a,1.1,r],[0,0,0],[.11,2.2,.11]);for(let a=0;a<5;a++){const r=E(e,Pe.box,a%2?n:s,[-1.9+a*.95,2.75,-.1],[0,0,0],[.96,.12,2.8]);r.rotation.x=-.08,r.castShadow=!0}return E(e,Pe.box,t,[0,1.08,1.15],[0,0,0],[3.8,.95,.35]),E(e,Pe.cylinder,Y("#7a4d28"),[-1.2,1.65,.95],[0,0,0],[.18,.45,.18]),E(e,Pe.cylinder,Y("#6c5a8e"),[-.7,1.6,.9],[0,0,0],[.15,.38,.15]),E(e,Pe.box,Y("#a58145"),[.2,1.62,.95],[0,.3,0],[.55,.32,.35]),E(e,Pe.sphere,Y("#b85d3e"),[1.1,1.65,.92],[0,0,0],[.16,.14,.16]),i.add(e),{group:e,obstacle:{x:-6.2,z:-6.2,r:2.1}}}function w_(i){const e=new ve;e.position.set(0,0,-1.5);const t=Y("#666a68",{roughness:.9}),n=Y("#3f4443",{roughness:1});E(e,new Lt(2.1,2.35,.45,18),n,[0,.22,0]),E(e,new Lt(1.95,2,.2,18),t,[0,.5,0]);const s=E(e,new $t(1.75,28),new sn({color:"#4f93a8",emissive:"#1f5364",emissiveIntensity:.8,roughness:.2,metalness:.25,transparent:!0,opacity:.88}),[0,.58,0],[-Math.PI/2,0,0]);E(e,new Lt(.35,.6,1.9,12),t,[0,1.25,0]),E(e,new Lt(.9,1,.18,14),t,[0,2.2,0]);const a=E(e,new $t(.8,20),new sn({color:"#6cb6c7",emissive:"#2a7082",emissiveIntensity:.8,transparent:!0,opacity:.85}),[0,2.32,0],[-Math.PI/2,0,0]),r=new cn("#7dd8e8",1.1,8,2);return r.position.set(0,1.8,0),e.add(r),i.add(e),{group:e,water:s,topWater:a,obstacle:{x:0,z:-1.5,r:2.45}}}function E_(i){const e=new ve;e.position.set(6.4,0,-3.4);const t=Y("#555c60",{roughness:.85}),n=Y("#2e3338",{roughness:.9});E(e,new Lt(1.25,1.55,.55,8),n,[0,.27,0]),E(e,new Lt(1.12,1.2,.18,8),t,[0,.62,0]),E(e,new Lt(.18,.32,1,8),n,[0,1.15,0]);const s=["#ff9a4d","#8ee078","#8ed8f0","#c08cff"],a=[];s.forEach((o,l)=>{const c=l/4*Math.PI*2-Math.PI/2,h=new ve;h.position.set(Math.cos(c)*.78,1.55,Math.sin(c)*.78);const f=E(h,Pe.octa,pt(o,2),[0,0,0],[0,0,0],[.13,.26,.13]);f.castShadow=!1,h.userData={baseY:1.55,phase:l*1.7,color:o},e.add(h),a.push(h)});const r=new cn("#b69cff",1.2,8,2);return r.position.set(0,1.9,0),e.add(r),i.add(e),{group:e,crystals:a,light:r,obstacle:{x:6.4,z:-3.4,r:1.45}}}function T_(i,e,t,n,s=0){const a=new ve;a.position.set(e,0,t),a.rotation.y=s;const r=Y("#3d2c1d",{roughness:.9});return E(a,Pe.stone,r,[0,1.7,0],[0,0,0],[.06,3.4,.06]),E(a,Pe.box,Y(n,{side:ut,roughness:.9}),[.35,2.6,0],[0,0,0],[.7,1.6,.02]),E(a,Pe.cone,Y(n,{side:ut}),[.35,1.75,0],[Math.PI,0,0],[.35,.4,.02]),E(a,Pe.sphere,Y("#d4b56c",{metalness:.6}),[0,3.5,0],[0,0,0],[.09,.09,.09]),i.add(a),a}function A_(){const i=new ls;Ci(i,"#1a2238","#6b3a2c","#171a24",16,50,!0),Pi(i,{sky:9414360,ground:3875864,sun:16760954,sunIntensity:2.4,sunX:7,sunY:12,sunZ:8,fill:5008286,fillIntensity:.6});const e=new qe(new $t(22,64),new sn({color:"#2b2a2d",roughness:.95}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,i.add(e),E(i,new Lt(8.2,8.6,.45,48),Y("#3a3434"),[2.4,.22,0]),E(i,new Lt(7.6,7.8,.12,48),Y("#4c4340"),[2.4,.5,0]);const t=new Pt({color:"#d7b36c",transparent:!0,opacity:.35,side:ut,depthWrite:!1});for(const u of[3.2,5.3,7]){const d=new qe(new gn(u,u+.035,64),t);d.rotation.x=-Math.PI/2,d.position.set(2.4,.57,0),i.add(d)}const n=[],s=[[-1.9,.6,-.2],[-.4,.9,-1.1],[1.2,.5,-.6],[2.8,.8,-1.2],[4.3,.5,0]];_i.forEach((u,d)=>{const g=ar(u.id);g.position.set(s[d][0],.56,s[d][2]),g.rotation.y=.25-d*.12,g.scale.setScalar(1.02+(d===2?.06:0)),i.add(g),n.push(g)});const a=[];for(const[u,d]of[[-3.6,-4],[1,-5.4],[5.8,-4.2],[8,1],[-3.5,2.4]])a.push(Li(i,u,d,16751178,1.15,!0));for(let u=0;u<12;u++){const d=u/12*Math.PI*2+.2,g=17+Math.random()*4,_=new qe(Pe.rock,Y("#1c1b22",{roughness:1}));_.position.set(Math.cos(d)*g,.6+Math.random()*2,Math.sin(d)*g),_.scale.set(2+Math.random()*3,3+Math.random()*5,2+Math.random()*3),_.rotation.set(Math.random(),Math.random(),Math.random()),i.add(_)}const r=new qe(new Kn(2.8,24,18),new Pt({color:"#e8d9b8",fog:!1}));r.position.set(-11,12,-26),i.add(r);const o=new Eh(new il({map:R_("#e8d9b8"),color:"#e8d9b8",transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));o.scale.set(17,17,1),o.position.copy(r.position),i.add(o);const l=Bt(i,{count:100,area:18,height:8,color:16754778,size:.075,speed:.55,mode:"rise"}),c=Bt(i,{count:60,area:14,height:7,color:14075044,size:.04,speed:.15,mode:"drift",opacity:.35,blending:Dn}),h=new qt(46,16/9,.1,140);return{scene:i,camera:h,update:(u,d)=>{const g=Math.sin(u*.09)*1.2;h.position.set(2.4+g,3.6+Math.sin(u*.16)*.15,12.6),h.lookAt(2.4,1.45,-.6),n.forEach((_,p)=>rr(_,u+p*.6,{moving:0})),a.forEach((_,p)=>{const m=.85+Math.sin(u*9+p*2.1)*.15;_.flame.scale.y=.26*m,_.light&&(_.light.intensity=1.5+Math.sin(u*8+p)*.3)}),l.update(u,d),c.update(u,d)},heroes:n}}function R_(i){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,2,64,64,64);n.addColorStop(0,i),n.addColorStop(.25,i),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const s=new rl(e);return s.colorSpace=Qt,s}function rd(){const i=new ls;Ci(i,"#0b0f19","#232b3e","#0b0f19",8,26,!0),Pi(i,{sky:8427716,ground:1842468,sun:16766624,sunIntensity:1.5,sunX:6,sunY:12,sunZ:8,fill:6179466,fillIntensity:.8});const e=new qe(new $t(14,48),new sn({color:"#181b24",roughness:.9}));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,i.add(e);const t=new ve;E(t,new Lt(1.65,1.95,.28,32),Y("#2d3039"),[0,.14,0]),E(t,new Lt(1.5,1.62,.12,32),Y("#4d4640"),[0,.34,0]);const n=new qe(new gn(1.72,1.8,48),new Pt({color:"#e7c477",transparent:!0,opacity:.5,side:ut,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.42,t.add(n),i.add(t);const s=new cn("#6ea8e8",3,10,2);s.position.set(0,2.4,2.6),i.add(s);const a=new cn("#c08cff",2,9,2);a.position.set(-2.8,2,-2.2),i.add(a);const r=new Pt({color:"#6ea8e8",transparent:!0,opacity:.05,side:ut,depthWrite:!1,blending:li}),o=new qe(new Lt(.7,1.5,7,24,1,!0),r);o.position.y=3.4,i.add(o);const l=Bt(i,{count:70,area:7,height:6,color:14139790,size:.045,speed:.2,mode:"rise",opacity:.6}),c=Bt(i,{count:34,area:5,height:4,color:16751194,size:.035,speed:.4,mode:"rise",opacity:.5}),h=new qt(35,16/9,.1,60),f={color:"#6ea8e8"};return{scene:i,camera:h,update:(g,_)=>{h.position.set(-.42+Math.sin(g*.18)*.25,1.36+Math.sin(g*.22)*.04,4.05),h.lookAt(-.15,1.02,0),n.material.opacity=.38+Math.sin(g*2)*.12,l.update(g,_),c.update(g,_)},setClass:g=>{const _=_i.find(p=>p.id===g)||_i[0];s.color.set(_.color),a.color.set(_.glow||_.color),r.color.set(_.color),f.color=_.color},pedestal:t,state:f}}function C_(){const i=new ls;Ci(i,"#12182b","#7b4a34","#1b1d2a",18,55,!0),Pi(i,{sky:9676756,ground:4862756,sun:16760707,sunIntensity:2.2,sunX:10,sunY:15,sunZ:9,fill:6188974,fillIntensity:.5}),As(i,"#5c574d",23,{ringColor:"#d5b978",patchColor:"#4a463f"});const e=w_(i),t=b_(i),n=new ve;n.position.set(-6.2,0,-4.25),E(n,Pe.box,Y("#4a3424"),[0,.65,0],[0,0,0],[3.8,1.3,.7]),E(n,Pe.box,Y("#7c5a35"),[0,1.34,0],[0,0,0],[4,.12,.9]),E(n,Pe.box,Y("#2f241a"),[0,.2,.36],[0,0,0],[3.5,.28,.04]),i.add(n);const s=id();s.position.set(-6.2,0,-5.3),s.rotation.y=.05,i.add(s);const a=pl();a.position.set(-3.65,0,-4.55),a.rotation.y=-.55,i.add(a);const r=qr("Maelis  ·  Mercadora","#f2d699",.44);r.position.set(-6.2,2.95,-5.3),i.add(r);const o=qr("Brasa  ·  Cão-guia","#d8c39b",.35);o.position.set(-3.65,1.4,-4.55),i.add(o);const l=E_(i),c=qr("Pedra dos Domínios","#d9c6f5",.42);c.position.set(6.4,2.85,-3.4),i.add(c);for(const[m,v,w]of[[-8.6,1.6,"#7a2a2a"],[9.2,2.4,"#2e4d7a"],[-9.5,-8.5,"#6c5328"],[9.8,-8.2,"#4f6a3a"]])T_(i,m,v,w,Math.atan2(-m,-v));const h=[];for(const[m,v]of[[-9.2,-2.2],[-2.6,-7.6],[3.4,-7.4],[9.5,-1.2],[2.2,5],[-8.8,5.8]])h.push(Li(i,m,v,16757596,1.1,!0));const f=[];for(const[m,v,w]of[[-11.5,4.5,1.1],[11.8,5.4,1.25],[12.2,-10.2,1],[-12.4,-10.8,1.15]])f.push(Ga(i,m,v,w,{leaf:"#3c5d3a",leaf2:"#537b48"}));for(const[m,v,w]of[[-9.8,-4.6,.45],[-8.9,-4.1,.35],[8.9,-6.4,.4],[9.7,-5.7,.3]]){const b=new ve;b.position.set(m,0,v),E(b,Pe.box,Y("#5a432b"),[0,w,0],[0,.2,0],[w*1.4,w*1.4,w*1.4]),E(b,Pe.box,Y("#3d2c1b"),[0,w,0],[0,.2,0],[w*1.5,w*.12,w*1.5]),i.add(b),f.push({obstacle:{x:m,z:v,r:w*.9}})}for(let m=0;m<16;m++){const v=Math.random()*Math.PI*2,w=8+Math.random()*10;Va(i,Math.cos(v)*w,Math.sin(v)*w,m%2?"#6d8a4d":"#8a7c45",.7)}const u=Bt(i,{count:55,area:15,height:4.5,color:16766602,size:.055,speed:.12,mode:"drift",opacity:.6}),d=Bt(i,{count:40,area:12,height:6,color:14207144,size:.035,speed:.08,mode:"rise",opacity:.22,blending:Dn}),g=[e.obstacle,t.obstacle,l.obstacle,...f.map(m=>m.obstacle)],_=[{type:"shop",x:-5.6,z:-4.2,range:3.1,label:"Falar com Maelis"},{type:"maps",x:6.4,z:-2,range:2.9,label:"Consultar os domínios"}],p=(m,v)=>{x_(s,m),sd(a,m),h.forEach((w,b)=>{const R=.9+Math.sin(m*10+b*1.7)*.1;w.flame.scale.y=.26*R,w.inner.scale.y=.16*R,w.light&&(w.light.intensity=1.5+Math.sin(m*9+b)*.35)}),e.water.rotation.z=m*.05,e.topWater.rotation.z=-m*.1,e.water.material.emissiveIntensity=.6+Math.sin(m*2)*.2,l.crystals.forEach((w,b)=>{w.position.y=w.userData.baseY+Math.sin(m*1.8+w.userData.phase)*.08,w.rotation.y=m*.7+b}),l.light.intensity=1+Math.sin(m*2.2)*.3,r.position.y=2.95+Math.sin(m*1.4)*.035,o.position.y=1.4+Math.sin(m*1.6+1)*.03,c.position.y=2.85+Math.sin(m*1.5+2)*.04,u.update(m,v),d.update(m,v)};return{scene:i,vendor:s,dog:a,mapBoard:l,fountain:e,obstacles:g,interactables:_,playerStart:new L(0,0,7.4),bounds:19,update:p}}function P_(i){const e=vi.find(d=>d.id===i)||vi[0],t=new ls,n=[],s={};let a=[],r=[],o=[],l=[],c=[];if(i==="crypt"){Ci(t,"#160c10","#4a1e16","#241313",18,52),Pi(t,{sky:10387078,ground:3807764,sun:16758126,sunIntensity:2,sunX:8,sunY:14,sunZ:5,fill:7027784,fillIntensity:.5}),As(t,"#332a27",25,{ringColor:"#b86a3e",patchColor:"#241d1b"});for(const[d,g,_]of[[-7,-4,2.4],[6.5,3.5,1.8],[-4.5,8,1.5],[9,-8,2.1]])o.push(ad(t,d,g,_));for(let d=0;d<9;d++){const g=d/9*Math.PI*2+.25,_=17.5+Math.random()*2,p=Ii(t,Math.cos(g)*_,Math.sin(g)*_,3.2+Math.random()*2.2,"#4a3e38",{broken:d%3===0,moss:d%4===0,glow:d%5===0?"#ff7a3a":null});n.push(p.obstacle)}Go(t,-11.5,4.5,.4,"#4a3e38"),Go(t,11.8,-3.8,-.6,"#4a3e38");for(const[d,g,_]of[[-12,-6,1.2],[12.6,5.4,1.5],[-10.2,10.8,1],[7.8,-12,1.3],[-13,1.2,.8]]){const p=Wc(t,d,g,_,"#3a302b",_*.7);n.push(p.obstacle)}for(let d=0;d<12;d++){const g=Math.random()*Math.PI*2,_=6+Math.random()*12,p=E(t,Pe.sphere,Y("#a79c85",{roughness:.9}),[Math.cos(g)*_,.12,Math.sin(g)*_],[Math.random(),Math.random(),Math.random()],[.08,.05,.3]);p.castShadow=!1}for(const[d,g]of[[-9,-2],[-3,-9],[4,-9],[9,-2],[3,8],[-8,7]])r.push(Li(t,d,g,16747325,1.1,!0));a.push(Bt(t,{count:110,area:20,height:9,color:16742965,size:.08,speed:.5,mode:"rise"})),a.push(Bt(t,{count:50,area:18,height:6,color:11574146,size:.04,speed:.08,mode:"drift",opacity:.28,blending:Dn}))}else if(i==="ruins"){Ci(t,"#101c18","#4a5c35","#1a2a1d",18,52),Pi(t,{sky:10337678,ground:2898466,sun:15984048,sunIntensity:2.4,sunX:-8,sunY:15,sunZ:7,fill:5275490,fillIntensity:.6}),As(t,"#3e4c30",25,{ringColor:"#9bb269",patchColor:"#2d3b22"}),E(t,new Lt(4.2,4.5,.25,24),Y("#5a5b45"),[0,.12,0]);for(let g=0;g<10;g++){const _=g/10*Math.PI*2,p=17+Math.random()*2.5,m=Ii(t,Math.cos(_)*p,Math.sin(_)*p,2.8+Math.random()*2.6,"#5a5b45",{moss:!0,broken:g%2===0,glow:g%4===0?"#9fe06f":null});n.push(m.obstacle)}for(const[g,_,p]of[[-11.5,-4.5,1.4],[11.8,3.5,1.6],[-10.8,9.5,1.2],[12.5,-9.8,1.3],[8.2,11.5,1.1],[-13.5,1.5,.9],[1.5,-13.5,1]]){const m=Ga(t,g,_,p,{trunk:"#453322",leaf:"#355d36",leaf2:"#4f7f45"});n.push(m.obstacle)}const d=new ve;d.position.set(-6.5,0,-8.5),E(d,Pe.box,Y("#555b48"),[0,.4,0],[0,0,0],[1.6,.8,1.6]),E(d,Pe.stone,Y("#62684f"),[0,1.6,0],[0,0,0],[.55,2.2,.55]),E(d,Pe.sphere,Y("#62684f"),[0,3,0],[0,0,0],[.4,.45,.4]),E(d,Pe.box,Y("#62684f"),[0,2,.5],[.4,0,0],[1.3,.25,.25]),t.add(d),n.push({x:-6.5,z:-8.5,r:1.4});for(let g=0;g<30;g++){const _=Math.random()*Math.PI*2,p=4+Math.random()*18;Va(t,Math.cos(_)*p,Math.sin(_)*p,g%3===0?"#93a957":"#557a3d",.7+Math.random()*.6)}for(const[g,_]of[[-8,-2],[-2,-10],[5,-9],[10,-1],[4,8],[-9,7]])r.push(Li(t,g,_,16761962,1.05,!0));for(let g=0;g<24;g++){const _=Math.random()*Math.PI*2,p=5+Math.random()*14,m=E(t,Pe.sphere,pt(g%2?"#b9ff7a":"#7ce0c0",1.6),[Math.cos(_)*p,.2+Math.random()*.2,Math.sin(_)*p],[0,0,0],[.04,.04,.04]);m.castShadow=!1}a.push(Bt(t,{count:80,area:19,height:6,color:13041546,size:.06,speed:.15,mode:"drift",opacity:.65})),a.push(Bt(t,{count:40,area:16,height:5,color:15786672,size:.035,speed:.2,mode:"rise",opacity:.4}))}else if(i==="ice"){Ci(t,"#0a1722","#8fb4c4","#a9c6d3",20,56),Pi(t,{sky:12576511,ground:5403786,sun:15267583,sunIntensity:2.3,sunX:7,sunY:16,sunZ:8,fill:8169944,fillIntensity:.7}),As(t,"#b6d5df",25,{ringColor:"#6fa9c0",patchColor:"#9fc4d0",roughness:.5});const d=E(t,new $t(5.5,32),new sn({color:"#7fb8cc",emissive:"#35697d",emissiveIntensity:.5,roughness:.18,metalness:.3,transparent:!0,opacity:.72}),[-5,.015,-6],[-Math.PI/2,0,0]);s.pond=d;for(let g=0;g<12;g++){const _=g/12*Math.PI*2,p=17.5+Math.random()*2.5,m=Ha(t,Math.cos(_)*p,Math.sin(_)*p,.7+Math.random()*.9,g%2?"#9fe7ff":"#7cc8e8",g%3===0);c.push(m),n.push(m.obstacle)}for(const[g,_,p]of[[-12,3.5,1.2],[12.2,-4.5,1.4],[-11.2,-11,1.1],[11.5,9.5,1.25],[1.8,12.8,1],[-14,8,.9]]){const m=Ho(t,g,_,p);n.push(m.obstacle)}for(const[g,_,p]of[[-10,-3,1.2],[10.8,4.5,1.4],[-3.5,11.5,1],[7.5,-12,1.1],[13.8,-.5,.8]]){const m=Wc(t,g,_,p,"#7e9ba7",p*.7);n.push(m.obstacle)}for(const[g,_]of[[-8,-2],[-2,-9],[5,-9],[10,-1],[4,8],[-9,7]])r.push(Li(t,g,_,9428223,1.05,!0));a.push(Bt(t,{count:180,area:23,height:10,color:16777215,size:.07,speed:.55,mode:"fall",opacity:.8,blending:Dn})),a.push(Bt(t,{count:55,area:18,height:5,color:12577535,size:.04,speed:.12,mode:"drift",opacity:.5}))}else{Ci(t,"#08050e","#2a163d","#160d21",18,54,!0),Pi(t,{sky:9337796,ground:2364719,sun:13081855,sunIntensity:1.9,sunX:9,sunY:15,sunZ:6,fill:5122682,fillIntensity:.8}),As(t,"#241b31",25,{ringColor:"#9b6ee8",patchColor:"#170f22"}),E(t,new Lt(4.6,5,.3,8),Y("#332543"),[0,.14,0]);const d=new qe(new gn(4.7,4.9,8),new Pt({color:"#b78cff",transparent:!0,opacity:.5,side:ut,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.32,t.add(d),s.runeRing=d;for(let g=0;g<11;g++){const _=g/11*Math.PI*2,p=17.5+Math.random()*2.5,m=Ii(t,Math.cos(_)*p,Math.sin(_)*p,3.5+Math.random()*2.6,"#3a2b4e",{dark:"#1a1124",broken:g%4===0,glow:g%3===0?"#a779ff":null});n.push(m.obstacle)}for(const[g,_,p]of[[-11,-4,1.2],[12,5,1.5],[-9,11,1],[10.5,-11,1.3],[13.8,-2,.9]]){const m=Ha(t,g,_,p,"#b07cff",!0);c.push(m),n.push(m.obstacle)}for(let g=0;g<14;g++){const _=Math.random()*Math.PI*2,p=6+Math.random()*13,m=new qe(Pe.rock,Y("#2e203d",{roughness:1}));m.position.set(Math.cos(_)*p,2+Math.random()*3.5,Math.sin(_)*p),m.scale.set(.4+Math.random()*.8,.3+Math.random()*.6,.4+Math.random()*.8),m.castShadow=!0,t.add(m),l.push({mesh:m,baseY:m.position.y,phase:Math.random()*6,speed:.4+Math.random()*.6})}for(const[g,_]of[[-8,-2],[-2,-9],[5,-9],[10,-1],[4,8],[-9,7]])r.push(Li(t,g,_,11566335,1.1,!0));for(let g=0;g<7;g++){const _=Math.random()*Math.PI*2,p=7+Math.random()*11,m=E(t,Pe.box,pt("#8c56e8",1.2,.6),[Math.cos(_)*p,.012,Math.sin(_)*p],[0,Math.random()*Math.PI,0],[.06,.01,1+Math.random()*2.5]);m.castShadow=!1}a.push(Bt(t,{count:100,area:21,height:9,color:11566335,size:.07,speed:.3,mode:"void"})),a.push(Bt(t,{count:45,area:16,height:7,color:8018603,size:.04,speed:.1,mode:"drift",opacity:.4}))}for(let d=0;d<20;d++){const g=d/20*Math.PI*2+.1,_=23.5+Math.random()*2.2,p=1.2+Math.random()*1.8,m=i==="ice"?"#7e9ba7":i==="ruins"?"#3d4a32":i==="citadel"?"#1d1428":"#2e2420",v=new qe(Pe.rock,Y(m,{roughness:1}));v.position.set(Math.cos(g)*_,p*.3,Math.sin(g)*_),v.scale.set(p*1.4,p*.8,p*1.4),v.rotation.set(Math.random(),Math.random(),Math.random()),v.castShadow=!0,t.add(v)}const h=[];for(let d=0;d<16;d++){const g=d/16*Math.PI*2,_=12+d%3*2.2;h.push(new L(Math.cos(g)*_,0,Math.sin(g)*_))}const f=(d,g)=>{r.forEach((_,p)=>{const m=.88+Math.sin(d*10+p*1.9)*.12;_.flame.scale.y=.26*m,_.inner.scale.y=.16*m,_.light&&(_.light.intensity=1.4+Math.sin(d*9+p)*.3)}),o.forEach(_=>{_.lava.scale.setScalar(1+Math.sin(d*1.4+_.phase)*.025),_.light.intensity=1.3+Math.sin(d*2.3+_.phase)*.3}),c.forEach((_,p)=>{_.group.rotation.y=d*.15+p,_.main&&(_.main.scale.y=1.3+Math.sin(d*1.8+p)*.04),_.light&&(_.light.intensity=1+Math.sin(d*2+p)*.3)}),l.forEach(_=>{_.mesh.position.y=_.baseY+Math.sin(d*_.speed+_.phase)*.5,_.mesh.rotation.y+=g*.1,_.mesh.rotation.x+=g*.04}),s.runeRing&&(s.runeRing.rotation.z=d*.08,s.runeRing.material.opacity=.35+Math.sin(d*1.7)*.15),s.pond&&(s.pond.material.emissiveIntensity=.4+Math.sin(d*1.2)*.15),a.forEach(_=>_.update(d,g))},u=new qt(48,16/9,.1,120);return{scene:t,camera:u,obstacles:n,spawnPoints:h,playerStart:new L(0,0,9),bounds:21,bossSpawn:new L(0,0,-11),update:f,map:e}}function Ho(i,e,t,n){const s=new ve;s.position.set(e,0,t);const a=Y("#3e3428",{roughness:1}),r=Y("#2f5a5f",{roughness:.95}),o=Y("#e8f4f7",{roughness:.9});return E(s,Pe.stone,a,[0,1.2*n,0],[0,0,0],[.14*n,2.4*n,.14*n]),E(s,Pe.cone,r,[0,2.5*n,0],[0,0,0],[1*n,1.8*n,1*n]),E(s,Pe.cone,o,[0,2.9*n,0],[0,.3,0],[.86*n,1.2*n,.86*n]),E(s,Pe.cone,r,[0,3.5*n,0],[0,.8,0],[.65*n,1.4*n,.65*n]),E(s,Pe.cone,o,[0,3.9*n,0],[0,.2,0],[.5*n,.8*n,.5*n]),i.add(s),{group:s,obstacle:{x:e,z:t,r:.55*n}}}function L_(i){const e=vi.find(l=>l.id===i)||vi[0],t=new ls;t.background=new Ge(i==="ice"?"#a8c6d4":i==="ruins"?"#28381f":i==="citadel"?"#160d24":"#251313"),t.fog=new Ja(t.background,8,26);const n=new dl(16777215,3351057,1.4);t.add(n);const s=new za(16777215,2.2);s.position.set(5,9,6),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.camera.left=-8,s.shadow.camera.right=8,s.shadow.camera.top=8,s.shadow.camera.bottom=-8,t.add(s);const a=i==="ice"?"#b6d5df":i==="ruins"?"#3e4c30":i==="citadel"?"#241b31":"#332a27",r=new qe(new $t(9,40),new sn({color:a,roughness:.95}));if(r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r),i==="crypt")ad(t,1.2,.5,1.3),Ii(t,-2.2,-1.2,3.2,"#4a3e38",{broken:!0,glow:"#ff7a3a"}),Go(t,1.8,-2.2,.5,"#4a3e38"),Li(t,-3.1,2.1,16747325,.8,!1);else if(i==="ruins")Ga(t,-1.8,-1.2,1.15,{leaf:"#355d36",leaf2:"#4f7f45"}),Ga(t,2.4,1.2,.8,{leaf:"#355d36",leaf2:"#4f7f45"}),Ii(t,1.2,-2.4,2.6,"#5a5b45",{moss:!0,broken:!0}),Va(t,-1,2.2,"#93a957",1.2),Va(t,2.8,2.8,"#557a3d",.9);else if(i==="ice"){Ha(t,.4,-.5,1.1,"#9fe7ff",!0),Ho(t,-2.5,-1,1),Ho(t,2.7,.6,.8);const l=E(t,new $t(2.2,24),new sn({color:"#7fb8cc",emissive:"#35697d",emissiveIntensity:.5,roughness:.18,metalness:.3,transparent:!0,opacity:.75}),[1.6,.02,2.2],[-Math.PI/2,0,0]);l.castShadow=!1}else{Ii(t,-1.7,-1.4,3.5,"#3a2b4e",{dark:"#1a1124",glow:"#a779ff"}),Ii(t,2.2,-.8,2.8,"#3a2b4e",{dark:"#1a1124",broken:!0,glow:"#a779ff"}),Ha(t,.2,1.4,1,"#b07cff",!0);const l=new qe(new gn(2,2.15,8),new Pt({color:"#b78cff",transparent:!0,opacity:.55,side:ut}));l.rotation.x=-Math.PI/2,l.position.y=.03,t.add(l);for(let c=0;c<4;c++){const h=new qe(Pe.rock,Y("#2e203d"));h.position.set(-3+c*2,1.4+c%2*.6,-2.5+c%3),h.scale.setScalar(.3+c%2*.2),t.add(h)}}i==="ice"?Bt(t,{count:90,area:9,height:6,color:16777215,size:.07,speed:.5,mode:"fall",opacity:.9,blending:Dn}).update(0,.4):i==="crypt"?Bt(t,{count:55,area:8,height:5,color:16742965,size:.07,speed:.5,mode:"rise"}).update(0,.4):i==="ruins"?Bt(t,{count:45,area:8,height:4,color:13041546,size:.06,speed:.1,mode:"drift"}).update(0,.4):Bt(t,{count:50,area:8,height:5,color:11566335,size:.07,speed:.3,mode:"void"}).update(0,.4);const o=new qt(40,16/9,.1,40);return o.position.set(.5,3,7.2),o.lookAt(0,1,0),{scene:t,camera:o,map:e}}const Xc={sword:'<path d="M14.5 3.5L21 10l-8.5 8.5-3-3L18 7l-3.5-3.5z"/><path d="M6 15l3 3M4 20l2-2M9.5 12.5l2 2"/>',axe:'<path d="M14 3l-3 18M11 6c-3-2-6-1-7 2 2 3 5 4 8 2M11 6c3-2 6-1 7 2-2 3-5 4-8 2"/>',shield:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M12 7v7M9 10h6"/>',flame:'<path d="M12 3c1 4 5 5 5 10a5 5 0 11-10 0c0-2 1-4 3-6 0 2 1 3 2 4 1-3 0-5 0-8z"/>',spark:'<path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5L19 19M19 5l-3.5 3.5M8.5 15.5L5 19"/>',whirlwind:'<path d="M20 8c-2-4-6-5-9-4M4 8c1 3 4 4 7 4M4 16c2 4 6 5 9 4M20 16c-1-3-4-4-7-4"/><path d="M7 4L4 8l4 1M17 20l3-4-4-1"/>',meteor:'<path d="M3 21L14 10M8 3l1 4M3 8l4 1M20 8l-3 2M16 3l-1 4"/><circle cx="17" cy="13" r="3"/>',nova:'<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M19 5l-2.8 2.8M7.8 16.2L5 19"/>',dagger:'<path d="M12 2l3 7-3 4-3-4 3-7zM12 13v7M9 18h6"/>',dash:'<path d="M3 12h12M11 7l5 5-5 5M19 4v16"/>',moon:'<path d="M20 14.5A8 8 0 019.5 4 8.5 8.5 0 1020 14.5z"/><path d="M17 4l.7 1.8L19.5 6l-1.8.7L17 8.5l-.7-1.8L14.5 6l1.8-.2z"/>',bow:'<path d="M6 3c8 2 12 8 12 18M6 3l3 3M18 21l-3-3M8 7l8 10"/><path d="M8 7l8 10"/>',wolf:'<path d="M4 5l3 4h10l3-4v8c0 4-3 7-8 7s-8-3-8-7V5z"/><path d="M9 12h.01M15 12h.01M10 16l2 1 2-1"/>',arrowRain:'<path d="M5 3v10M2 10l3 3 3-3M12 3v7M9 7l3 3 3-3M19 3v10M16 10l3 3 3-3"/><path d="M3 21h18"/>',whip:'<path d="M3 4l4 3c4 3 5 6 5 10 0 2 1 3 3 3s3-1 3-3c0-4 2-7 5-8"/><path d="M3 4l1-2 3 1M6 7l-2 1"/>',vortex:'<path d="M21 12a9 9 0 11-3-6.7M21 3v6h-6"/><path d="M12 8a4 4 0 104 4"/>',dance:'<path d="M9 3l2 5-2 4M15 3l-2 5 2 4M6 21l4-6h4l4 6M12 12v3"/>',potion:'<path d="M10 3h4v5l3 5a5 5 0 11-10 0l3-5V3zM9 13h6"/>',coin:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5h4.5a2 2 0 010 4H9M9 13.5h5"/>',map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14"/>',shop:'<path d="M3 9l2-5h14l2 5M4 9v11h16V9M3 9h18M9 20v-6h6v6"/>',home:'<path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/>',skull:'<path d="M5 10a7 7 0 1114 0v4l-2 2v3H7v-3l-2-2v-4z"/><path d="M9 10h.01M15 10h.01M10 16v3M14 16v3"/>',heart:'<path d="M12 20s-8-4.5-8-10a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.5-8 10-8 10z"/>',mana:'<path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"/>',star:'<path d="M12 2l2.9 6.2 6.8.8-5 4.7 1.3 6.8L12 17l-6 3.5 1.3-6.8-5-4.7 6.8-.8L12 2z"/>',lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3M12 14v3"/>',check:'<path d="M4 12l5 5L20 6"/>',play:'<path d="M7 4l13 8-13 8V4z"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9H4zM17 8a5 5 0 010 8M19.5 5.5a9 9 0 010 13"/>',mute:'<path d="M4 9v6h4l5 4V5L8 9H4zM17 9l4 6M21 9l-4 6"/>',pause:'<path d="M8 5v14M16 5v14"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 00-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 00-1.7-1L14.5 3h-4l-.4 2.5a7 7 0 00-1.7 1l-2.3-1-2 3.4 2 1.6a7 7 0 000 2l-2 1.6 2 3.4 2.3-1a7 7 0 001.7 1l.4 2.5h4l.4-2.5a7 7 0 001.7-1l2.3 1 2-3.4-2-1.6a7 7 0 00.1-1z"/>',chevron:'<path d="M9 5l7 7-7 7"/>',armor:'<path d="M8 3l4 2 4-2 4 3-2 5v8H6v-8L4 6l4-3z"/><path d="M9 12h6M12 9v6"/>',relic:'<path d="M12 2l3 5 5 1-3.5 4 .8 5.5L12 15l-5.3 2.5.8-5.5L4 8l5-1 3-5z"/><circle cx="12" cy="10" r="2.5"/>',bag:'<path d="M5 8h14l-1 13H6L5 8zM9 8V6a3 3 0 016 0v2M9 12v5M15 12v5"/>',crown:'<path d="M3 8l4 3 5-6 5 6 4-3-2 11H5L3 8z"/><path d="M7 19h10"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'};function xa(i,e=""){const t=Xc[i]||Xc.star;return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true">${t}</svg>`}const I_={weapon:"sword",armor:"armor",relic:"relic",consumable:"potion",whip:"whip",bow:"bow",staff:"spark",dagger:"dagger",sword:"sword",axe:"axe"},pe=i=>document.getElementById(i);class D_{constructor(){this.handlers={},this.selectedClassId="warden",this.shopTab="weapon",this.portraits={classes:{},vendor:null},this.mapThumbs={},this.enemyBars=new Map,this.toastTimer=null,this.currentClass=null,this.projector=null,this.bindStatic()}bindStatic(){const e=(t,n)=>{const s=pe(t);s&&s.addEventListener("click",a=>{a.preventDefault(),n(a)})};e("btn-start",()=>this.handlers.onStart?.()),e("btn-back-title",()=>this.handlers.onBackTitle?.()),e("btn-confirm-class",()=>this.handlers.onConfirmClass?.(this.selectedClassId)),e("btn-shop",()=>this.handlers.onOpenShop?.()),e("btn-maps",()=>this.handlers.onOpenMaps?.()),e("btn-shop-close",()=>this.handlers.onCloseModal?.("shop")),e("btn-maps-close",()=>this.handlers.onCloseModal?.("maps")),e("btn-lobby",()=>this.handlers.onLobby?.()),e("btn-pause",()=>this.handlers.onPause?.()),e("btn-resume",()=>this.handlers.onResume?.()),e("btn-pause-lobby",()=>this.handlers.onPauseLobby?.()),e("btn-pause-help",()=>this.handlers.onOpenHelp?.()),e("btn-result-lobby",()=>this.handlers.onResultLobby?.()),e("btn-result-retry",()=>this.handlers.onRetry?.()),e("btn-help-close",()=>this.handlers.onCloseHelp?.()),e("btn-help-ok",()=>this.handlers.onCloseHelp?.()),e("btn-lobby-help",()=>this.handlers.onOpenHelp?.()),e("btn-title-sound",()=>this.handlers.onSound?.()),e("btn-lobby-sound",()=>this.handlers.onSound?.()),document.querySelectorAll(".shop-tab").forEach(t=>{t.addEventListener("click",()=>{this.shopTab=t.dataset.tab,document.querySelectorAll(".shop-tab").forEach(n=>n.classList.toggle("active",n===t)),this.renderShop()})}),document.querySelectorAll(".modal-scrim").forEach(t=>{t.addEventListener("click",()=>{const n=t.closest(".modal");n&&!n.classList.contains("pause-modal")&&!n.id.includes("result")&&this.handlers.onCloseModal?.(n.id.replace("-modal",""))})})}setPortraits(e){this.portraits=e,document.querySelectorAll(".class-card").forEach(n=>{const s=n.dataset.class,a=n.querySelector("img");a&&e.classes[s]&&(a.src=e.classes[s])});const t=pe("vendor-portrait");t&&e.vendor&&(t.src=e.vendor),this.updatePortrait()}setMapThumbs(e){this.mapThumbs=e,this.renderMaps?.(this.profile)}setProfile(e){this.profile=e,this.updateProfileUI(e)}updatePortrait(){const e=this.selectedClassId,t=this.portraits.classes[e];if(!t)return;const n=pe("lobby-portrait"),s=pe("hud-portrait");n&&(n.src=t),s&&(s.src=t)}buildClassCards(e,t){const n=pe("class-cards");n&&(n.innerHTML=e.map(s=>`
        <button class="class-card ${s.id===t?"active":""}" data-class="${s.id}" role="option" aria-selected="${s.id===t}" style="--class-glow:${s.glow};--class-color:${s.color}">
          <img src="${this.portraits.classes[s.id]||""}" alt="${s.name}, ${s.title}" />
          <span class="card-role">${s.role}</span>
          <span class="class-card-copy"><b>${s.name}</b><span>${s.title}</span></span>
        </button>`).join(""),n.querySelectorAll(".class-card").forEach(s=>{s.addEventListener("click",()=>{this.selectedClassId=s.dataset.class,this.handlers.onSelectClass?.(s.dataset.class)})}))}setSelectedClass(e){this.selectedClassId=e,document.querySelectorAll(".class-card").forEach(t=>{const n=t.dataset.class===e;t.classList.toggle("active",n),t.setAttribute("aria-selected",String(n))}),this.updatePortrait()}updateSelectPanel(e,t){const n=xi[e];if(!n)return;this.currentClass=n,pe("select-name").textContent=n.name,pe("select-title").textContent=n.title,pe("select-role").textContent=n.role,pe("select-desc").textContent=n.description,pe("select-gold").textContent=t.gold;const s=[["Vida",n.stats.hp,280],["Mana",n.stats.mana,180],["Poder",n.stats.power,30],["Defesa",n.stats.defense,20],["Velocidade",n.stats.speed,6]];pe("select-stats").innerHTML=s.map(([a,r,o])=>`
        <div class="stat-row">
          <span>${a}</span>
          <span class="stat-track"><i style="width:${Math.min(100,r/o*100)}%"></i></span>
          <b>${r}</b>
        </div>`).join(""),pe("select-abilities").innerHTML=n.abilities.map(a=>`
        <div class="ability-preview-row">
          <span class="ability-glyph">${xa(a.icon)}</span>
          <span><b>${a.name}</b><span>${a.short}</span></span>
        </div>`).join(""),this.selectedClassId=n.id,this.setSelectedClass(n.id),this.updateProfileUI(t)}updateProfileUI(e){if(!e)return;const t=e.selectedClass,n=xi[t],s=e.classes[t],a=jh(e,t),r=e.gold;["select-gold","lobby-gold","hud-gold","shop-gold"].forEach(h=>{const f=pe(h);f&&(f.textContent=r)});const o=n?.name||"",l=s?.level||1;pe("lobby-hero-name")&&(pe("lobby-hero-name").textContent=o),pe("hud-hero-name")&&(pe("hud-hero-name").textContent=o),pe("lobby-hero-level")&&(pe("lobby-hero-level").textContent=`Nv. ${l}`),pe("hud-hero-level")&&(pe("hud-hero-level").textContent=`Nv. ${l}`),pe("lobby-hero-class")&&(pe("lobby-hero-class").textContent=n?.title||"");const c=pe("lobby-xp-fill");c&&(c.style.width=`${a.percent}%`),pe("potion-count")&&(pe("potion-count").textContent=e.potions.health||0),pe("mana-potion-count")&&(pe("mana-potion-count").textContent=e.potions.mana||0),this.updatePortrait()}showOnly(e){const t={boot:"boot",title:"title-screen",select:"select-screen",lobby:"lobby-ui",adventure:"adventure-hud"};Object.values(t).forEach(n=>pe(n)?.classList.add("hidden")),t[e]&&pe(t[e])?.classList.remove("hidden"),document.querySelectorAll(".modal").forEach(n=>n.classList.add("hidden"))}hideBoot(){const e=pe("boot");e&&(e.classList.add("fade-out"),setTimeout(()=>e.classList.add("hidden"),650))}showTitle(){this.showOnly("title"),this.hideAllModals()}showSelect(){this.showOnly("select"),this.hideAllModals()}showLobby(e){this.showOnly("lobby"),this.hideAllModals(),this.updateProfileUI(e)}showAdventure(e){this.showOnly("adventure"),this.hideAllModals(),this.updateProfileUI(e)}hideAllModals(){document.querySelectorAll(".modal").forEach(e=>e.classList.add("hidden"))}openModal(e){pe(e)?.classList.remove("hidden")}closeModal(e){pe(e)?.classList.add("hidden")}openShop(e){this.profile=e,this.shopTab="weapon",document.querySelectorAll(".shop-tab").forEach(t=>t.classList.toggle("active",t.dataset.tab==="weapon")),this.renderShop(),this.openModal("shop-modal")}renderShop(){if(!this.profile)return;const e=this.profile.selectedClass,t=n_(this.shopTab,e),n=pe("shop-items");if(!n)return;const s=this.profile.gold;n.innerHTML=t.map(o=>{const l=this.profile.owned.includes(o.id),c=Object.values(this.profile.classes[e].equipment).includes(o.id),h=o.type==="consumable",f=h?o.id==="c_health"?this.profile.potions.health:this.profile.potions.mana:0,u=t_(o),d=$g[o.rarity]||"#a8b3c5",g=o.price===0?"Inicial":`<span class="coin-icon">◆</span>${o.price}`;let _="";return h?_=`<button class="item-buy" data-buy="${o.id}" ${s<o.price?"disabled":""}>Comprar</button>`:c?_='<button class="item-buy equipped" disabled>Equipado</button>':l?_=`<button class="item-equip" data-equip="${o.id}">Equipar</button>`:_=`<button class="item-buy" data-buy="${o.id}" ${s<o.price?"disabled":""}>Comprar</button>`,`
          <article class="shop-item ${l?"owned":""} ${c?"equipped":""}" style="--rarity:${d}">
            <span class="item-icon">${xa(I_[o.icon]||o.icon||"star")}</span>
            <div class="item-body">
              <div class="item-top">
                <div><div class="item-name">${o.name}${h&&f?` <small>×${f}</small>`:""}</div><div class="item-rarity">${o.rarity}${o.type==="weapon"?" · Arma":""}</div></div>
                <div class="item-price">${g}</div>
              </div>
              <div class="item-stats">${u.map(([p,m])=>`<span>${p} <b>${m}</b></span>`).join("")}</div>
              <p class="item-desc">${o.desc}</p>
              <div class="item-actions"><span></span>${_}</div>
            </div>
          </article>`}).join(""),n.querySelectorAll("[data-buy]").forEach(o=>{o.addEventListener("click",()=>this.handlers.onBuy?.(o.dataset.buy))}),n.querySelectorAll("[data-equip]").forEach(o=>{o.addEventListener("click",()=>this.handlers.onEquip?.(o.dataset.equip))}),pe("shop-gold").textContent=s;const a=Qh(this.profile,e),r=pe("shop-equip-summary");r&&(r.textContent=`Arma: ${a.weapon?.name||"—"} · Armadura: ${a.armor?.name||"—"}`)}renderMaps(e){if(!e)return;this.profile=e;const t=pe("map-cards");if(!t)return;t.innerHTML=vi.map(s=>{const a=ko[s.boss],r=e.completed.includes(s.id),o=this.mapThumbs[s.id]?`<img class="map-thumb" src="${this.mapThumbs[s.id]}" alt="" />`:"";return`
        <button class="map-card ${r?"cleared":""}" data-map="${s.id}" style="--map-bg:${s.bg};--map-glow:${s.glow};--map-accent:${s.accent}">
          ${o}
          <span class="map-enter">${r?"✓ Purificado":"Entrar ›"}</span>
          <span class="map-card-content">
            <span class="map-num">${s.kicker} · Nv. ${s.level}+</span>
            <h3>${s.name}</h3>
            <p>${s.desc}</p>
            <span class="map-meta">
              <span>Chefe: <b>${a?.name||"—"}</b></span>
              <span>Recompensa: <b>◆ ${s.reward.gold}</b></span>
            </span>
          </span>
        </button>`}).join(""),t.querySelectorAll("[data-map]").forEach(s=>{s.addEventListener("click",()=>this.handlers.onEnterMap?.(s.dataset.map))});const n=pe("maps-progress");n&&(n.textContent=`${e.completed.length} / ${vi.length} domínios purificados`)}openMaps(e){this.profile=e,this.renderMaps(e),this.openModal("maps-modal")}showInteract(e){const t=pe("interact-prompt");t&&(t.querySelector("span:last-child").textContent=e,t.classList.remove("hidden"))}hideInteract(){pe("interact-prompt")?.classList.add("hidden")}showMapBanner(e){const t=pe("map-banner");if(!t)return;pe("map-banner-kicker").textContent=e.kicker,pe("map-banner-name").textContent=e.name,pe("map-banner-sub").textContent=e.subtitle,t.classList.remove("hidden"),t.style.animation="none",t.offsetWidth,t.style.animation="",clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>t.classList.add("hidden"),3400);const n=pe("hud-map-name");n&&(n.textContent=e.name)}setObjective(e,t,n,s,a=!1){const r=pe("objective-kicker"),o=pe("objective-text");r&&(r.textContent=e),o&&(o.textContent=t);const l=pe("wave-pips");l&&(l.innerHTML=Array.from({length:s},(c,h)=>{const f=h===s-1,u=h<n;return`<i class="${f?"boss":""} ${u||h===n&&a?"done":""}"></i>`}).join(""))}setupAbilities(e){e&&document.querySelectorAll(".ability-btn").forEach(t=>{const n=Number(t.dataset.ability),s=e.abilities[n];s&&(t.querySelector(".ability-icon").innerHTML=xa(s.icon),t.setAttribute("aria-label",`${s.name}: ${s.short}`),t.title=`${s.name} — ${s.short} (${s.mana} mana)`)})}updateCooldowns(e,t,n){document.querySelectorAll(".ability-btn").forEach(a=>{const r=Number(a.dataset.ability),o=e[r]||0,l=this.currentClass?.abilities[r]?.cooldown||1,c=Math.max(0,Math.min(1,o/l));a.style.setProperty("--cd",c.toFixed(3));const h=a.querySelector(".cooldown-text");h&&(h.textContent=o>.15?Math.ceil(o).toString():"");const f=this.currentClass?.abilities[r];a.classList.toggle("unaffordable",!!f&&t<f.mana&&o<=.15)});const s=pe("btn-dodge");if(s){const a=this.dodgeRatio||0;s.style.setProperty("--cd",a.toFixed(3))}}updateVitals(e,t,n){const s=Math.max(0,Math.min(100,e.hp/t.maxHp*100)),a=Math.max(0,Math.min(100,e.mana/t.maxMana*100));pe("hp-fill")&&(pe("hp-fill").style.width=`${s}%`),pe("mana-fill")&&(pe("mana-fill").style.width=`${a}%`),pe("hp-text")&&(pe("hp-text").textContent=`${Math.max(0,Math.ceil(e.hp))} / ${t.maxHp}`),pe("mana-text")&&(pe("mana-text").textContent=`${Math.max(0,Math.floor(e.mana))} / ${t.maxMana}`),pe("hud-gold")&&(pe("hud-gold").textContent=this.profile?.gold??0),pe("potion-count")&&(pe("potion-count").textContent=this.profile?.potions.health??0),pe("mana-potion-count")&&(pe("mana-potion-count").textContent=this.profile?.potions.mana??0);const r=pe("lobby-xp-fill");r&&n&&(r.style.width=`${n.percent}%`)}updateBuffs(e){const t=pe("buffs");t&&(t.innerHTML=e.map(n=>`<span class="buff-chip">${xa(n.icon||"spark")}${n.name} ${Math.ceil(n.time)}s</span>`).join(""))}showBoss(e){const t=pe("boss-bar");t&&(pe("boss-name").textContent=e,t.classList.remove("hidden"))}updateBoss(e,t){const n=pe("boss-fill");n&&(n.style.width=`${Math.max(0,e/t*100)}%`)}hideBoss(){pe("boss-bar")?.classList.add("hidden")}toast(e,t="✦"){const n=pe("toast-layer");if(!n)return;n.innerHTML="";const s=document.createElement("div");s.className="toast",s.innerHTML=`<span class="toast-glyph">${t}</span><span>${e}</span>`,n.appendChild(s),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>s.remove(),3e3)}levelFlash(){const e=document.createElement("div");e.className="level-flash",document.getElementById("app").appendChild(e),setTimeout(()=>e.remove(),950)}spawnDamage(e,t,n,s=""){const a=pe("damage-layer");if(!a)return;const r=document.createElement("div");r.className=`dmg-number ${s}`,r.textContent=n,r.style.left=`${e}px`,r.style.top=`${t}px`,a.appendChild(r);const o=(Math.random()-.5)*36,l=r.animate([{transform:"translate(-50%, -50%) scale(0.8)",opacity:0},{transform:"translate(-50%, -70%) scale(1.08)",opacity:1,offset:.18},{transform:`translate(calc(-50% + ${o}px), -150%) scale(1)`,opacity:0}],{duration:900,easing:"cubic-bezier(.18,.7,.3,1)"});l.onfinish=()=>r.remove()}createEnemyBar(e,t,n=!1){if(this.enemyBars.has(e))return;const s=pe("enemy-layer");if(!s)return;const a=document.createElement("div");a.className=`enemy-bar ${n?"boss":""}`,a.innerHTML=`<div class="enemy-bar-name">${t}</div><div class="enemy-bar-track"><div class="enemy-bar-fill"></div></div>`,s.appendChild(a),this.enemyBars.set(e,{el:a,fill:a.querySelector(".enemy-bar-fill"),visible:!0})}updateEnemyBar(e,t,n,s,a){const r=this.enemyBars.get(e);if(r){if(!a){r.el.style.display="none";return}r.el.style.display="block",r.el.style.transform=`translate(${t}px, ${n}px) translate(-50%, -50%)`,r.fill.style.width=`${Math.max(0,s)*100}%`}}removeEnemyBar(e){const t=this.enemyBars.get(e);t&&(t.el.remove(),this.enemyBars.delete(e))}clearEnemyBars(){for(const[,e]of this.enemyBars)e.el.remove();this.enemyBars.clear()}drawMinimap(e,t,n=21){const s=pe("minimap");if(!s)return;const a=s.getContext("2d"),r=s.width,o=s.height;a.clearRect(0,0,r,o);const l=r/2,c=o/2,h=r*.42/n;a.strokeStyle="rgba(231,196,119,0.22)",a.lineWidth=1;for(const d of[6,12,18])a.beginPath(),a.arc(l,c,d*h,0,Math.PI*2),a.stroke();for(const d of t){if(!d.alive)continue;const g=l+d.mesh.position.x*h,_=c+d.mesh.position.z*h;a.beginPath(),a.fillStyle=d.boss?"#ff7d6a":"#e05e52",a.arc(g,_,d.boss?5:2.6,0,Math.PI*2),a.fill(),d.boss&&(a.strokeStyle="rgba(255,180,120,0.7)",a.beginPath(),a.arc(g,_,8,0,Math.PI*2),a.stroke())}const f=l+e.x*h,u=c+e.z*h;a.save(),a.translate(f,u),a.rotate(e.facing||0),a.fillStyle="#f0d18a",a.shadowColor="rgba(240,209,138,0.8)",a.shadowBlur=8,a.beginPath(),a.moveTo(0,-7),a.lineTo(5,5),a.lineTo(0,2.5),a.lineTo(-5,5),a.closePath(),a.fill(),a.restore()}openPause(){this.openModal("pause-modal")}closePause(){this.closeModal("pause-modal")}openHelp(){this.openModal("help-modal")}closeHelp(){this.closeModal("help-modal")}showResult({victory:e,rewards:t,map:n,levelUps:s=0}){const a=document.querySelector(".result-card");a&&a.classList.toggle("defeat",!e);const r=pe("result-sigil");r&&(r.textContent=e?"✦":"☠"),pe("result-kicker").textContent=e?"Domínio purificado":"A chama se apagou",pe("result-title").textContent=e?"Vitória!":"Você caiu",pe("result-sub").textContent=e?`${n?.name||"O domínio"} está livre. A próxima brasa aguarda.`:"A escuridão avança, mas a lenda ainda pode ser reescrita.";const o=pe("result-rewards");o&&(e?o.innerHTML=`
          <span class="reward-chip"><span class="coin-icon">◆</span> +${t?.gold||0} ouro</span>
          <span class="reward-chip">✦ +${t?.xp||0} XP</span>
          ${s?`<span class="reward-chip">▲ ${s} nível${s>1?"s":""}</span>`:""}
        `:o.innerHTML=`<span class="reward-chip">Ouro preservado: ◆ ${t?.gold||0}</span>`),this.openModal("result-modal")}hideResult(){this.closeModal("result-modal")}setSoundIcon(e){document.querySelectorAll(".icon-sound").forEach(t=>{t.parentElement?.classList.toggle("muted",e)})}showBootProgress(e){const t=pe("boot-bar-fill");t&&(t.style.width=`${Math.max(0,Math.min(100,e))}%`)}}class N_{constructor(){this.keys=new Set,this.joy={x:0,y:0,active:!1,pointerId:null,element:null,knob:null,radius:42},this.attackHeld=!1,this.attackQueued=!1,this.abilityQueue=[],this.callbacks={},this.enabled=!0,this.bindKeyboard(),this.bindJoystick(document.getElementById("combat-joystick")),this.bindJoystick(document.getElementById("lobby-joystick")),this.bindButtons(),this.preventGestures()}on(e,t){this.callbacks[e]=t}emit(e,...t){this.callbacks[e]&&this.callbacks[e](...t)}bindKeyboard(){window.addEventListener("keydown",e=>{const t=document.activeElement?.tagName;t==="INPUT"||t==="TEXTAREA"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),!e.repeat&&(e.code==="Space"&&(this.attackQueued=!0,this.emit("attack")),e.code==="Digit1"&&this.emit("ability",0),e.code==="Digit2"&&this.emit("ability",1),e.code==="Digit3"&&this.emit("ability",2),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&this.emit("dodge"),e.code==="KeyF"&&this.emit("potion"),e.code==="Escape"&&this.emit("pause"),e.code==="KeyB"&&this.emit("lobby")))}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.resetJoystick(),this.attackHeld=!1})}bindJoystick(e){if(!e)return;const t=e.querySelector(".joystick-knob"),n=()=>{const r=e.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top+r.height/2,radius:r.width*.34}},s=r=>{if(!this.joy.active||this.joy.pointerId!==r.pointerId)return;const o=n();let l=r.clientX-o.x,c=r.clientY-o.y;const h=Math.hypot(l,c),f=o.radius;h>f&&(l=l/h*f,c=c/h*f),this.joy.x=l/f,this.joy.y=c/f,t&&(t.style.transform=`translate(${l}px, ${c}px)`)};e.addEventListener("pointerdown",r=>{this.enabled&&(r.preventDefault(),r.stopPropagation(),e.setPointerCapture(r.pointerId),this.joy.active=!0,this.joy.pointerId=r.pointerId,this.joy.element=e,this.joy.knob=t,s(r))}),e.addEventListener("pointermove",r=>{!this.joy.active||this.joy.pointerId!==r.pointerId||(r.preventDefault(),s(r))});const a=r=>{this.joy.pointerId===r.pointerId&&this.resetJoystick()};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.addEventListener("lostpointercapture",a)}resetJoystick(){this.joy.x=0,this.joy.y=0,this.joy.active=!1,this.joy.pointerId=null,this.joy.knob&&(this.joy.knob.style.transform="translate(0px, 0px)")}bindButtons(){const e=(t,n,s=null)=>{const a=document.getElementById(t);a&&(a.addEventListener("pointerdown",r=>{this.enabled&&(r.preventDefault(),r.stopPropagation(),a.setPointerCapture?.(r.pointerId),n?.(r))}),s&&(a.addEventListener("pointerup",r=>{r.preventDefault(),s(r)}),a.addEventListener("pointercancel",s),a.addEventListener("pointerleave",r=>{r.buttons&&s(r)})))};e("btn-attack",()=>{this.attackHeld=!0,this.attackQueued=!0,this.emit("attack")},()=>{this.attackHeld=!1}),e("btn-dodge",()=>this.emit("dodge")),e("btn-potion",()=>this.emit("potion","health")),e("btn-mana-potion",()=>this.emit("potion","mana")),document.querySelectorAll(".ability-btn").forEach(t=>{const n=Number(t.dataset.ability);t.addEventListener("pointerdown",s=>{this.enabled&&(s.preventDefault(),s.stopPropagation(),this.emit("ability",n))})}),document.querySelectorAll(".lobby-action, .class-card, .btn, .icon-btn, .shop-tab, .map-card, .shop-item button").forEach(t=>{t.addEventListener("pointerdown",()=>this.emit("uiClick"))})}preventGestures(){document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("gesturestart",e=>e.preventDefault()),document.addEventListener("dblclick",e=>e.preventDefault(),{passive:!1}),window.addEventListener("touchmove",e=>{e.target.closest("#shop-items, #class-cards, .select-panel, .map-cards, .help-card")||e.touches.length>1&&e.preventDefault()},{passive:!1})}getMove(){let e=this.joy.x,t=this.joy.y;(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t+=1);const n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),{x:e,y:t,magnitude:Math.min(1,n)}}consumeAttack(){return this.attackQueued?(this.attackQueued=!1,!0):!1}consumeAbility(){return this.abilityQueue.shift()??-1}}const qc="aethermoor-audio-muted";class U_{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.muted=localStorage.getItem(qc)==="1",this.mood="title",this.started=!1,this.timer=null,this.step=0,this.padNodes=[]}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.18,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.master),this.startPad(),this.schedule())}startPad(){if(!this.ctx)return;[110,164.81,220].forEach((s,a)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=620,l.Q.value=.6,r.type=a===0?"sine":"triangle",r.frequency.value=s,r.detune.value=a===1?4:a===2?-5:0,o.gain.value=a===0?.09:.035,r.connect(l),l.connect(o),o.connect(this.musicGain),r.start(),this.padNodes.push({osc:r,gain:o,filter:l,base:s})});const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.value=.08,n.gain.value=.02,t.connect(n),n.connect(this.musicGain.gain),t.start()}schedule(){this.timer&&clearInterval(this.timer),this.timer=setInterval(()=>this.tick(),250)}setMood(e){if(this.mood=e,!this.ctx)return;const t={title:{root:110,notes:[0,3,7,10,12,15],tempo:1.35,pad:.18,wave:"sine"},lobby:{root:130.81,notes:[0,4,7,11,12,16],tempo:1.15,pad:.2,wave:"triangle"},adventure:{root:98,notes:[0,3,5,7,10,12],tempo:.46,pad:.16,wave:"triangle"},boss:{root:82.41,notes:[0,1,5,6,8,12],tempo:.34,pad:.2,wave:"sawtooth"},victory:{root:130.81,notes:[0,4,7,12,16,19],tempo:.8,pad:.22,wave:"triangle"}}[e]||{root:110,notes:[0,3,7,10],tempo:1.2,pad:.18,wave:"sine"};this.config=t,this.musicGain&&(this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime),this.musicGain.gain.linearRampToValueAtTime(t.pad,this.ctx.currentTime+.8)),this.padNodes.forEach((n,s)=>{const a=[1,1.5,2];n.osc.frequency.cancelScheduledValues(this.ctx.currentTime),n.osc.frequency.linearRampToValueAtTime(t.root*a[s],this.ctx.currentTime+.8),n.filter.frequency.linearRampToValueAtTime(e==="boss"?900:620,this.ctx.currentTime+.8)})}tick(){if(!this.ctx||this.muted)return;const e=this.config||{root:110,notes:[0,3,7,10],wave:"sine"};if(this.step++,this.step%2===0){const t=e.notes[this.step/2%e.notes.length],n=e.root*Math.pow(2,t/12)*2;this.pluck(n,e.wave,.07,.9)}(this.mood==="adventure"||this.mood==="boss")&&(this.step%4===0&&this.kick(.5),this.step%2===1&&this.hat(.15)),this.mood==="boss"&&this.step%8===0&&this.pluck(e.root*.5,"sawtooth",.05,1.6)}pluck(e,t="sine",n=.06,s=.8){if(!this.ctx)return;const a=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=1400,r.type=t,r.frequency.setValueAtTime(e,a),o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(n,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+s),r.connect(l),l.connect(o),o.connect(this.musicGain),r.start(a),r.stop(a+s+.05)}kick(e=.4){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(38,t+.18),s.gain.setValueAtTime(e,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.2),n.connect(s),s.connect(this.musicGain),n.start(t),n.stop(t+.22)}hat(e=.12){if(!this.ctx)return;const t=this.ctx.currentTime,n=this.noiseBuffer(.06),s=this.ctx.createBufferSource();s.buffer=n;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=5500;const r=this.ctx.createGain();r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.06),s.connect(a),a.connect(r),r.connect(this.musicGain),s.start(t)}noiseBuffer(e=.2){const t=Math.floor(this.ctx.sampleRate*e),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let a=0;a<t;a++)s[a]=Math.random()*2-1;return n}tone(e,t,n="sine",s=.2,a=0,r=0){if(!this.ctx||this.muted)return;const o=this.ctx.currentTime+r,l=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.value=2800,l.type=n,l.frequency.setValueAtTime(e,o),a&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e+a),o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+.008),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(h),h.connect(c),c.connect(this.sfxGain),l.start(o),l.stop(o+t+.02)}noise(e=.2,t=.15,n=1200,s=0){if(!this.ctx||this.muted)return;const a=this.ctx.currentTime+s,r=this.ctx.createBufferSource();r.buffer=this.noiseBuffer(e);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(120,a+e);const l=this.ctx.createGain();l.gain.setValueAtTime(t,a),l.gain.exponentialRampToValueAtTime(1e-4,a+e),r.connect(o),o.connect(l),l.connect(this.sfxGain),r.start(a)}play(e){if(!(!this.ctx||this.muted))switch(e){case"ui":this.tone(660,.06,"sine",.12,120);break;case"click":this.tone(420,.05,"triangle",.1,90);break;case"attack":this.noise(.12,.16,2400),this.tone(190,.1,"triangle",.08,-60);break;case"whip":this.noise(.16,.2,3600),this.tone(520,.09,"sawtooth",.06,-300);break;case"hit":this.noise(.1,.18,1500),this.tone(120,.08,"square",.08,-60);break;case"crit":this.noise(.16,.24,2200),this.tone(260,.16,"square",.12,-120);break;case"cast":this.tone(330,.22,"sine",.13,300),this.tone(495,.18,"triangle",.07,220,.03);break;case"fire":this.noise(.35,.22,900),this.tone(140,.25,"sawtooth",.08,-60);break;case"ice":this.tone(880,.18,"sine",.1,300),this.tone(1320,.22,"triangle",.06,200,.04);break;case"arrow":this.noise(.14,.1,4e3),this.tone(600,.07,"triangle",.05,-200);break;case"pickup":this.tone(880,.07,"sine",.1,200),this.tone(1320,.09,"sine",.08,200,.06);break;case"coin":this.tone(1180,.05,"triangle",.09,200),this.tone(1560,.1,"triangle",.06,200,.05);break;case"heal":this.tone(523,.22,"sine",.12,200),this.tone(784,.3,"sine",.08,100,.1);break;case"buy":this.tone(600,.08,"triangle",.1,200),this.tone(900,.12,"triangle",.08,200,.08),this.tone(1200,.14,"sine",.06,100,.16);break;case"error":this.tone(160,.14,"square",.09,-30);break;case"levelup":[523,659,784,1046].forEach((t,n)=>this.tone(t,.28,"triangle",.1,20,n*.1));break;case"victory":[392,523,659,784,1046].forEach((t,n)=>this.tone(t,.45,"triangle",.11,10,n*.13));break;case"defeat":[220,196,165,110].forEach((t,n)=>this.tone(t,.45,"sawtooth",.07,-20,n*.16));break;case"boss":this.tone(55,.8,"sawtooth",.16,-10),this.noise(.6,.16,400);break;case"dodge":this.noise(.18,.12,2600);break;case"summon":this.tone(440,.4,"sine",.08,220),this.tone(660,.5,"triangle",.06,110,.1);break;default:this.tone(500,.05,"sine",.08)}}setMuted(e){this.muted=e,localStorage.setItem(qc,e?"1":"0"),this.master&&this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(e?0:.5,this.ctx.currentTime+.2))}toggleMute(){return this.setMuted(!this.muted),this.muted}}class F_{constructor(e){this.scene=e,this.items=[],this.sphereGeo=new Kn(1,10,8),this.shockGeo=new tr(1,.035,6,28)}add(e,t,n){this.scene.add(e),this.items.push({mesh:e,life:Math.max(.05,t),t:0,update:n})}ring(e,t,n,s=.55,a=.18){const r=or(n,t,.72);r.position.set(e.x,.065,e.z),r.scale.setScalar(a);const o=r.material;this.add(r,s,l=>{const c=a+(1-a)*l;r.scale.setScalar(c),o.opacity=.72*(1-l)})}slash(e,t,n,s,a){const r=new gn(n*.22,n,30,1,-Math.PI/2-s/2,s),o=new Pt({color:a,transparent:!0,opacity:.72,side:ut,depthWrite:!1,blending:li}),l=new qe(r,o);l.rotation.x=-Math.PI/2;const c=new ve;c.position.set(e.x,.11,e.z),c.rotation.y=t,c.add(l),this.add(c,.34,h=>{o.opacity=.72*(1-h),c.scale.setScalar(.9+h*.16)})}impact(e,t,n=1,s=.38){const a=new Pt({color:t,transparent:!0,opacity:.92,depthWrite:!1,blending:li}),r=new qe(this.sphereGeo,a);r.position.set(e.x,e.y??.9,e.z),r.scale.setScalar(.12*n),this.add(r,s,o=>{r.scale.setScalar(.12*n+o*.62*n),a.opacity=.92*(1-o)})}shockwave(e,t,n=1,s=.5){const a=new Pt({color:t,transparent:!0,opacity:.75,depthWrite:!1,blending:li}),r=new qe(this.shockGeo,a);r.rotation.x=-Math.PI/2,r.position.set(e.x,.12,e.z),r.scale.setScalar(.4*n),this.add(r,s,o=>{r.scale.setScalar(.4*n+o*1.8*n),a.opacity=.75*(1-o)})}burst(e,t,n=5,s=1.1,a=.5){for(let r=0;r<n;r++){const o=new Pt({color:t,transparent:!0,opacity:.9,depthWrite:!1,blending:li}),l=new qe(this.sphereGeo,o),c=Math.random()*Math.PI*2,h=Math.random()*s;l.position.set(e.x+Math.cos(c)*h,(e.y??1)+Math.random()*.8,e.z+Math.sin(c)*h),l.scale.setScalar(.035+Math.random()*.05);const f=Math.cos(c)*(.6+Math.random()*1.2),u=Math.sin(c)*(.6+Math.random()*1.2),d=.7+Math.random()*1.4;this.add(l,a*(.6+Math.random()*.6),(g,_)=>{l.position.x+=f*_,l.position.z+=u*_,l.position.y+=(d-g*1.2)*_,o.opacity=.9*(1-g)})}}update(e){for(let t=this.items.length-1;t>=0;t--){const n=this.items[t];n.t+=e;const s=Math.min(1,n.t/n.life);n.update?.(s,e),s>=1&&(this.scene.remove(n.mesh),n.mesh.traverse(a=>{a.isMesh&&(a.geometry&&a.geometry!==this.sphereGeo&&a.geometry!==this.shockGeo&&a.geometry.dispose(),a.material&&a.material.dispose())}),this.items.splice(t,1))}}clear(){for(const e of this.items)this.scene.remove(e.mesh),e.mesh.traverse(t=>{t.isMesh&&(t.geometry&&t.geometry!==this.sphereGeo&&t.geometry!==this.shockGeo&&t.geometry.dispose(),t.material&&t.material.dispose())});this.items.length=0}}function O_(i,e){const t=i.player,n=t.mesh.position,s=i.cls.color,a=i.nearestEnemy(26),r=(o,l,c={})=>{const h=i.enemiesInRadius(n,o);for(const f of h)i.hitEnemy(f,i.abilityDamage(l),c);return h.length};switch(e.kind){case"cone":{a&&i.faceToward(a.mesh.position);const o=i.enemiesInCone(e.radius||4,e.arc||2.2);for(const l of o)i.hitEnemy(l,i.abilityDamage(e.damage||1.5),{burn:e.burn,stun:e.stun});i.fx.slash(n,t.facing,e.radius||4,e.arc||2.2,e.burn?"#ff8a3a":s),i.fx.ring(n,(e.radius||4)*.55,e.burn?"#ff8a3a":s,.5,.3),i.audio.play(e.burn?"fire":i.cls.weaponType==="whip"?"whip":"attack"),i.shake=Math.max(i.shake,.22);break}case"buff":{if(e.heal){const o=t.stats.maxHp*e.heal;t.hp=Math.min(t.stats.maxHp,t.hp+o),i.damageNumber(n,`+${Math.round(o)}`,"heal",2.2)}i.addBuff({name:e.name,icon:e.icon,time:e.duration||5,damageReduction:e.damageReduction||0,speed:e.speed||0,crit:e.crit||0}),i.fx.ring(n,2.3,s,.75,.25),i.fx.burst({x:n.x,y:1.2,z:n.z},s,8,1.3,.7),i.audio.play("cast");break}case"spin":{const o=e.hits||3,l=e.interval||.25;for(let c=0;c<o;c++)i.delayed.push({time:c*l,fn:()=>{i.finished||(r(e.radius||4,e.damage||1,{burn:e.burn}),i.fx.slash(i.player.mesh.position,i.player.facing+c*.7,e.radius||4,Math.PI*1.85,s),i.fx.ring(i.player.mesh.position,(e.radius||4)*.7,s,.3,.4),i.audio.play(i.cls.weaponType==="whip"?"whip":"attack"),i.shake=Math.max(i.shake,.16))}});break}case"nova":{r(e.radius||4,e.damage||1.5,{burn:e.burn}),i.fx.ring(n,e.radius||4,"#ff7a3a",.75,.15),i.fx.impact({x:n.x,y:.8,z:n.z},"#ff9a4a",3.1,.6),i.fx.burst({x:n.x,y:1,z:n.z},"#ff9a4a",14,2.2,.7),i.shake=Math.max(i.shake,.45),i.audio.play("fire");break}case"meteor":{let o=a?{x:a.mesh.position.x,z:a.mesh.position.z}:null;if(!o){const c=i.facingDir();o={x:n.x+c.x*4.5,z:n.z+c.z*4.5}}const l=e.radius||3.6;i.fx.ring(o,l,"#ffb066",e.delay||1,.05),i.fx.ring(o,l*.55,"#ff7a3a",e.delay||1,.1),i.audio.play("cast"),i.delayed.push({time:e.delay||1,fn:()=>{if(i.finished)return;const c=i.enemiesInRadius(o,l);for(const h of c)i.hitEnemy(h,i.abilityDamage(e.damage||3.2),{burn:e.burn});i.fx.impact({x:o.x,y:.5,z:o.z},"#ff8a3a",4.4,.8),i.fx.shockwave(o,"#ffb066",4.2,.8),i.fx.burst({x:o.x,y:1,z:o.z},"#ffd36a",18,2.8,.9),i.shake=Math.max(i.shake,.75),i.audio.play("fire")}});break}case"dash":{a&&i.faceToward(a.mesh.position);const o=i.facingDir(),l={x:n.x,z:n.z},c=e.distance||6.5,h=10;for(let u=0;u<h;u++)n.x+=o.x*c/h,n.z+=o.z*c/h,i.collidePlayer?.();const f={x:n.x,z:n.z};for(const u of i.enemies)u.alive&&B_(u.mesh.position.x,u.mesh.position.z,l.x,l.z,f.x,f.z)<=(e.radius||1.5)+u.radius&&i.hitEnemy(u,i.abilityDamage(e.damage||1.8),{});t.invuln=.45,i.fx.ring(l,1.1,s,.4,.4),i.fx.ring(f,1.4,s,.45,.4),i.fx.burst({x:f.x,y:1,z:f.z},s,8,1,.5),i.audio.play("dodge"),i.shake=Math.max(i.shake,.2);break}case"fan":{a&&i.faceToward(a.mesh.position);const o=e.count||5,l=e.spread||.9;for(let c=0;c<o;c++){const h=(c-(o-1)/2)*(l/Math.max(1,o-1)),f=t.facing+h;i.spawnPlayerProjectile({dir:{x:Math.sin(f),z:Math.cos(f)},speed:e.speed||17,damage:i.abilityDamage(e.damage||.95),radius:.32,pierce:1,life:1.8,color:s})}i.fx.ring(n,1.2,s,.35,.4),i.audio.play("arrow");break}case"pierce":{a&&i.faceToward(a.mesh.position),i.spawnPlayerProjectile({dir:i.facingDir(),speed:e.speed||24,damage:i.abilityDamage(e.damage||2.5),radius:.38,pierce:e.pierce||5,life:2.2,color:"#b9ff7a"}),i.audio.play("arrow");break}case"summon":{i.spawnWolf(e);break}case"rain":{let o=a?{x:a.mesh.position.x,z:a.mesh.position.z}:null;if(!o){const c=i.facingDir();o={x:n.x+c.x*4.5,z:n.z+c.z*4.5}}const l=e.radius||3.8;i.areas.push({x:o.x,z:o.z,radius:l,remaining:e.duration||2.4,duration:e.duration||2.4,interval:e.interval||.55,tick:.1,damage:i.abilityDamage(e.damage||1.1),color:"#b9ff7a",burn:0,sound:"arrow"}),i.fx.ring(o,l,"#b9ff7a",e.duration||2.4,.75),i.audio.play("cast");break}case"vortex":{for(const c of i.enemiesInRadius(n,e.radius||4.6)){const h=n.x-c.mesh.position.x,f=n.z-c.mesh.position.z,u=Math.hypot(h,f)||1,d=Math.min(u-.8,1.6);d>0&&(c.mesh.position.x+=h/u*d,c.mesh.position.z+=f/u*d),c.slow=Math.max(c.slow||0,1.4)}const o=e.hits||2,l=e.interval||.35;for(let c=0;c<o;c++)i.delayed.push({time:c*l,fn:()=>{i.finished||(r(e.radius||4.6,e.damage||1.35),i.fx.slash(i.player.mesh.position,i.player.facing+c*Math.PI,e.radius||4.6,Math.PI*1.9,s),i.fx.ring(i.player.mesh.position,(e.radius||4.6)*.6,s,.35,.3),i.audio.play("whip"),i.shake=Math.max(i.shake,.18))}});break}case"projectile":{a&&i.faceToward(a.mesh.position),i.spawnPlayerProjectile({dir:i.facingDir(),speed:e.speed||16,damage:i.abilityDamage(e.damage||2),radius:.5,pierce:1,explodeRadius:e.explodeRadius||2.2,burn:e.burn||0,life:2.4,color:"#ff8a3a"}),i.audio.play("fire");break}default:r(e.radius||4,e.damage||1.2),i.fx.ring(n,e.radius||4,s,.5,.2),i.audio.play("cast")}}function B_(i,e,t,n,s,a){const r=s-t,o=a-n,l=r*r+o*o;if(l<1e-4)return Math.hypot(i-t,e-n);let c=((i-t)*r+(e-n)*o)/l;return c=Math.max(0,Math.min(1,c)),Math.hypot(i-(t+r*c),e-(n+o*c))}const Rs=(i,e,t)=>Math.max(e,Math.min(t,i)),Ss=(i,e)=>i+Math.random()*(e-i),bs=new L;function va(i,e,t,n){const s=n-t;i.x=Rs(i.x,-s,s),i.z=Rs(i.z,-s,s);for(const a of e){const r=i.x-a.x,o=i.z-a.z,l=(a.r||0)+t,c=Math.hypot(r,o);if(c<l&&c>1e-4){const h=(l-c)/c;i.x+=r*h,i.z+=o*h}}i.x=Rs(i.x,-s,s),i.z=Rs(i.z,-s,s)}class z_{constructor({world:e,player:t,profile:n,ui:s,audio:a,input:r,camera:o,fx:l,onExit:c,onPlayerHit:h,onFinished:f}){this.world=e,this.map=e.map||Bc[e.map?.id]||Bc.crypt,this.player=t,this.profile=n,this.ui=s,this.audio=a,this.input=r,this.camera=o,this.fx=l,this.onExit=c,this.onPlayerHit=h,this.onFinished=f,this.cls=xi[t.classId],this.weapon=t.stats.weapon,this.enemies=[],this.projectiles=[],this.pickups=[],this.areas=[],this.delayed=[],this.wolf=null,this.enemySeq=0,this.waveIndex=-1,this.waveActive=!1,this.nextWaveTimer=1.5,this.loot={gold:0,xp:0},this.kills=0,this.finished=!1,this.lootGranted=!1,this.shake=0,this.attackQueued=!1,this.time=0,this.uiTimer=0,this.buffTimer=0,this.boss=null,this.projGeo=new Kn(.15,8,6),this.projLightMat=new Pt({color:"#ffe0a0"})}start(){this.ui.showMapBanner(this.map),this.ui.setObjective(this.map.kicker,"A primeira onda se aproxima…",0,this.map.waves.length,!1),this.ui.updateBuffs([]),this.audio.setMood("adventure")}get playerPos(){return this.player.mesh.position}project(e){return bs.copy(e).project(this.camera),{x:(bs.x*.5+.5)*window.innerWidth,y:(-bs.y*.5+.5)*window.innerHeight,visible:bs.z>-1&&bs.z<1}}facingDir(){return{x:Math.sin(this.player.facing),z:Math.cos(this.player.facing)}}faceToward(e){this.player.facing=Math.atan2(e.x-this.playerPos.x,e.z-this.playerPos.z),this.player.mesh.rotation.y=this.player.facing}nearestEnemy(e=99){let t=null,n=e;for(const s of this.enemies){if(!s.alive)continue;const a=Math.hypot(s.mesh.position.x-this.playerPos.x,s.mesh.position.z-this.playerPos.z);a<n&&(n=a,t=s)}return t}enemiesInRadius(e,t){return this.enemies.filter(n=>n.alive&&Math.hypot(n.mesh.position.x-e.x,n.mesh.position.z-e.z)<=t+n.radius*.5)}enemiesInCone(e,t){const n=this.facingDir(),s=Math.cos(t/2);return this.enemies.filter(a=>{if(!a.alive)return!1;const r=a.mesh.position.x-this.playerPos.x,o=a.mesh.position.z-this.playerPos.z,l=Math.hypot(r,o);return l>e+a.radius||l<.001?!1:l<1.1?!0:r/l*n.x+o/l*n.z>=s})}attackDamage(){return this.weapon.damage*(.65+this.player.stats.power/28)}abilityDamage(e){return this.attackDamage()*e*1.05}critChance(){let e=this.player.stats.crit;for(const t of this.player.buffs)e+=t.crit||0;return Math.min(.8,e)}speedMultiplier(){let e=1;for(const t of this.player.buffs)e+=t.speed||0;return e}addBuff(e){const t=this.player.buffs.find(n=>n.name===e.name);t?t.time=Math.max(t.time,e.time):this.player.buffs.push({...e}),this.ui.updateBuffs(this.player.buffs)}queueAttack(){this.attackQueued=!0}update(e,t){if(this.finished){this.fx.update(e);return}this.time+=e;const n=this.player,s=n.mesh.position;n.attackTimer=Math.max(0,n.attackTimer-e),n.dodgeCooldown=Math.max(0,n.dodgeCooldown-e),n.invuln=Math.max(0,n.invuln-e),n.abilityCooldowns=n.abilityCooldowns.map(l=>Math.max(0,l-e)),n.attackAnim>=0&&(n.attackAnim+=e/.32,n.attackAnim>1&&(n.attackAnim=-1)),n.abilityAnim>=0&&(n.abilityAnim+=e/.45,n.abilityAnim>1&&(n.abilityAnim=-1)),n.mana=Math.min(n.stats.maxMana,n.mana+1.25*e),n.hp=Math.min(n.stats.maxHp,n.hp+n.stats.maxHp*.0012*e);let a=!1;for(let l=n.buffs.length-1;l>=0;l--)n.buffs[l].time-=e,n.buffs[l].time<=0&&(n.buffs.splice(l,1),a=!0);a&&this.ui.updateBuffs(n.buffs);const r=this.inputMove();let o=0;if(n.dodgeTimer>0)n.dodgeTimer-=e,s.x+=n.dodgeDir.x*13*e,s.z+=n.dodgeDir.z*13*e,va(s,this.world.obstacles,.46,this.world.bounds),o=1;else if(r.magnitude>.08){const l=n.stats.speed*this.speedMultiplier()*1.55;s.x+=r.x*l*e,s.z+=r.y*l*e,va(s,this.world.obstacles,.46,this.world.bounds),n.facing=Math.atan2(r.x,r.y),n.mesh.rotation.y=n.facing,o=r.magnitude}if((this.attackQueued||this.input?.attackHeld)&&(this.attackQueued=!1,this.tryAttack()),rr(n.mesh,t,{moving:o,attack:n.attackAnim,ability:n.abilityAnim}),this.updateDelayed(e),this.updateProjectiles(e),this.updateEnemies(e,t),this.updateAreas(e),this.updateWolf(e,t),this.updatePickups(e,t),this.fx.update(e),this.shake=Math.max(0,this.shake-e*2.4),n.dodgeRatio=Rs(n.dodgeCooldown/1.1,0,1),this.ui.dodgeRatio=n.dodgeRatio,!this.waveActive)this.nextWaveTimer-=e,this.nextWaveTimer<=0&&(this.waveIndex+1<this.map.waves.length?this.spawnWave(this.waveIndex+1):this.victory());else if(this.enemies.every(l=>!l.alive)){this.waveActive=!1;const l=this.waveIndex>=this.map.waves.length-1;this.nextWaveTimer=l?1.7:2.3,this.ui.setObjective(this.map.kicker,l?"O chefe caiu. O domínio está livre.":"Onda limpa — prepare-se.",this.waveIndex+1,this.map.waves.length,l)}this.updateUI(e)}inputMove(){return this.input?this.input.getMove():{x:0,y:0,magnitude:0}}collidePlayer(){va(this.player.mesh.position,this.world.obstacles,.46,this.world.bounds)}tryAttack(){const e=this.player;if(this.finished||e.attackTimer>0||e.dodgeTimer>0)return;const t=this.weapon;e.attackTimer=Math.max(.24,t.cooldown||.5),e.attackAnim=0;const n=this.nearestEnemy((t.projectile?t.range||9:t.range||2.6)*1.6);if(n&&this.faceToward(n.mesh.position),t.projectile){const s=this.facingDir();this.spawnPlayerProjectile({dir:s,speed:t.projectileSpeed||17,damage:this.attackDamage(),radius:.45,pierce:1,life:2.2,color:this.cls.color}),this.audio.play(this.cls.weaponType==="bow"?"arrow":"fire")}else{const s=this.enemiesInCone(t.range||2.6,t.arc||1.6);for(const a of s)this.hitEnemy(a,this.attackDamage(),{});this.fx.slash(ji(e.mesh.position),e.facing,(t.range||2.6)*.96,t.arc||1.6,this.cls.color),this.cls.weaponType==="whip"?(this.fx.ring(ji(e.mesh.position),1.5,this.cls.color,.3,.5),this.audio.play("whip")):this.audio.play("attack")}}useAbility(e){if(this.finished)return;const t=this.cls.abilities[e];if(t&&!(this.player.abilityCooldowns[e]>0)){if(this.player.mana<t.mana){this.ui.toast("Mana insuficiente","✦"),this.audio.play("error");return}this.player.mana-=t.mana,this.player.abilityCooldowns[e]=t.cooldown,this.player.abilityAnim=0,O_(this,t)}}dodge(){const e=this.player;if(this.finished||e.dodgeCooldown>0)return;const t=this.inputMove(),n=t.magnitude>.1?{x:t.x,z:t.y}:this.facingDir(),s=Math.hypot(n.x,n.z)||1;e.dodgeDir={x:n.x/s,z:n.z/s},e.dodgeTimer=.26,e.dodgeCooldown=1.1,e.invuln=.38,e.facing=Math.atan2(e.dodgeDir.x,e.dodgeDir.z),e.mesh.rotation.y=e.facing,this.fx.ring(ji(e.mesh.position),.9,"#d8e8ff",.35,.6),this.audio.play("dodge")}usePotion(e){const t=this.profile.potions;if((t[e]||0)<=0){this.ui.toast(e==="health"?"Sem poções de vida":"Sem poções de mana","✦"),this.audio.play("error");return}const n=this.player;if(e==="health"){if(n.hp>=n.stats.maxHp-.5){this.ui.toast("Sua vida já está cheia","✦");return}t.health-=1;const s=n.stats.maxHp*.5;n.hp=Math.min(n.stats.maxHp,n.hp+s),this.fx.ring(ji(n.mesh.position),1.3,"#58d68d",.55),this.damageNumber(n.mesh.position,`+${Math.round(s)}`,"heal",1.9),this.audio.play("heal")}else{if(n.mana>=n.stats.maxMana-.5){this.ui.toast("Sua mana já está cheia","✦");return}t.mana-=1;const s=n.stats.maxMana*.6;n.mana=Math.min(n.stats.maxMana,n.mana+s),this.fx.ring(ji(n.mesh.position),1.3,"#6ea8e8",.55),this.damageNumber(n.mesh.position,`+${Math.round(s)}`,"mana",1.9),this.audio.play("heal")}In(this.profile),this.ui.updateProfileUI(this.profile)}spawnWave(e){const t=this.map.waves[e];if(this.waveIndex=e,this.waveActive=!0,this.ui.setObjective(this.map.kicker,t.label,e,this.map.waves.length,!!t.boss),t.boss){this.audio.setMood("boss"),this.audio.play("boss"),this.shake=.55;const n=ko[t.enemies[0][0]],s=this.world.bossSpawn.clone();s.y=0,this.spawnEnemy(t.enemies[0][0],s),this.ui.showBoss(n.name),this.fx.ring(s,5,"#ff6a5a",1.1,.2),this.fx.shockwave(s,"#ff6a5a",3.4,.8)}else{this.audio.setMood("adventure");const n=[...this.world.spawnPoints].sort(()=>Math.random()-.5);let s=0;for(const[a,r]of t.enemies)for(let o=0;o<r;o++){const c=n[s++%n.length].clone();c.x+=Ss(-1.3,1.3),c.z+=Ss(-1.3,1.3),c.y=0,this.spawnEnemy(a,c)}}}spawnEnemy(e,t){const n=ko[e];if(!n)return;const s=__(n.model,n.color);s.position.copy(t),s.rotation.y=Math.random()*Math.PI*2,n.boss||s.scale.multiplyScalar(n.scale||1),this.world.scene.add(s);const a=1+Math.max(0,(this.player.stats.level||1)-(this.map.level||1))*.045,r=Math.round(n.hp*a),o={id:`e${++this.enemySeq}`,type:e,def:n,mesh:s,hp:r,maxHp:r,alive:!0,dying:0,attackTimer:Ss(.4,1.2),attackAnim:-1,stun:0,burn:null,boss:!!n.boss,radius:n.radius||.55,barHeight:n.boss?4.2:n.model==="hound"?1.15:1.95,specialTimer:4.5,phase:Math.random()*6,slow:0};return this.enemies.push(o),n.boss&&(this.boss=o),this.ui.createEnemyBar(o.id,n.name,!!n.boss),this.fx.ring(t,n.boss?2.4:.9,n.boss?"#ff6a5a":"#d8c9a8",.6,.15),o}hitEnemy(e,t,n={}){if(!e||!e.alive)return;let s=t*Ss(.92,1.08);const a=n.crit!==!1&&Math.random()<this.critChance();a&&(s*=1.75),e.hp-=s,e.flash=.12,this.fx.impact({x:e.mesh.position.x,y:e.barHeight*.55,z:e.mesh.position.z},a?"#ffd36a":"#ff9a6a",a?1.4:.9),this.damageNumber(e.mesh.position,`${Math.round(s)}`,a?"crit":"",e.barHeight),this.audio.play(a?"crit":"hit"),n.burn&&(e.burn={time:Math.max(e.burn?.time||0,n.burn),dps:Math.max(e.burn?.dps||0,s*.12),tick:.45}),n.stun&&(e.stun=Math.max(e.stun,n.stun)),e.hp<=0&&this.killEnemy(e)}killEnemy(e){if(!e.alive)return;e.alive=!1,e.dying=1.35,e.hp=0,this.ui.removeEnemyBar(e.id),this.loot.xp+=e.def.xp||0,this.kills+=1;const t=e.mesh.position;if(this.spawnPickup("gold",t,e.def.gold||5),Math.random()<.2&&this.spawnPickup("health",t,1),Math.random()<.16&&this.spawnPickup("mana",t,1),e.boss){this.boss=null,this.ui.hideBoss(),this.shake=.9,this.audio.play("victory"),this.fx.shockwave(t,"#ffd36a",4.2,.9),this.fx.burst({x:t.x,y:1.4,z:t.z},"#ffd36a",16,2.4,.9);for(let n=0;n<4;n++)this.spawnPickup("gold",t,Math.round((e.def.gold||20)/3),n);this.spawnPickup("health",t,1,2),this.spawnPickup("mana",t,1,2)}else this.fx.burst({x:t.x,y:.8,z:t.z},e.def.color||"#d8c9a8",5,.7,.55);this.fx.ring(t,e.boss?4.5:.8,e.boss?"#ffd36a":"#8f1f24",.55,.3)}damageNumber(e,t,n,s=1.8){const a=this.project({x:e.x,y:(e.y||0)+s,z:e.z});a.visible&&this.ui.spawnDamage(a.x,a.y,t,n)}updateEnemies(e,t){const s=this.player.mesh.position;for(let a=this.enemies.length-1;a>=0;a--){const r=this.enemies[a];if(!r.alive){r.dying-=e,Xr(r.mesh,t,{dead:!0}),r.dying<=0&&(this.world.scene.remove(r.mesh),this.enemies.splice(a,1));continue}if(r.flash>0&&(r.flash-=e),r.slow>0&&(r.slow-=e),r.stun>0){r.stun-=e,Xr(r.mesh,t,{moving:0});continue}if(r.burn){if(r.burn.time-=e,r.burn.tick-=e,r.burn.tick<=0&&(r.burn.tick=.45,this.hitEnemy(r,r.burn.dps,{crit:!1}),!r.alive))continue;r.burn.time<=0&&(r.burn=null)}const o=s.x-r.mesh.position.x,l=s.z-r.mesh.position.z,c=Math.hypot(o,l)||.001,h=r.def,f=(h.range||2)+r.radius*.35;let u=0;if(r.attackTimer-=e,r.attackAnim>=0&&(r.attackAnim-=e/.38,r.attackAnim<0&&(r.attackAnim=-1)),c>f*.94){const d=(h.speed||2.5)*(r.slow>0?.55:1),g=Math.min(d*e,Math.max(0,c-f*.86));r.mesh.position.x+=o/c*g,r.mesh.position.z+=l/c*g,va(r.mesh.position,this.world.obstacles,r.radius*.75,this.world.bounds),u=1}else r.attackTimer<=0&&(r.attackTimer=h.attackCooldown||1.2,r.attackAnim=.38,this.enemyStrike(r,c));r.mesh.rotation.y=Math.atan2(o,l),Xr(r.mesh,t,{moving:u,attack:r.attackAnim>=0?1-r.attackAnim/.38:-1}),r.boss&&(r.specialTimer-=e,r.specialTimer<=0&&(r.specialTimer=Ss(6.5,8.5),this.bossSlam(r)))}}enemyStrike(e,t){const n=e.def;n.ranged?(this.spawnEnemyProjectile(e),this.audio.play(this.map.id==="ice"?"ice":"cast")):t<=(n.range||2)+e.radius*.5+.35&&this.damagePlayer(n.damage||6)}bossSlam(e){const t=ji(e.mesh.position);this.fx.ring(t,4.8,"#ff5b45",.95,.25),this.delayed.push({time:.92,fn:()=>{if(!e.alive)return;const n=this.playerPos;Math.hypot(n.x-t.x,n.z-t.z)<=4.9&&this.damagePlayer((e.def.damage||20)*1.35),this.fx.shockwave(t,"#ff5b45",4.6,.7),this.shake=Math.max(this.shake,.55),this.audio.play("hit")}})}damagePlayer(e){if(this.finished||this.player.invuln>0)return;const t=this.player.stats.defense;let n=e*(1-Math.min(.72,t/(t+55)));for(const s of this.player.buffs)n*=1-(s.damageReduction||0);n=Math.max(1,n),this.player.hp-=n,this.shake=Math.max(this.shake,.18+Math.min(.5,n/this.player.stats.maxHp)),this.damageNumber(this.playerPos,`-${Math.round(n)}`,"player",2.05),this.audio.play("hit"),this.onPlayerHit?.(),this.player.hp<=0&&(this.player.hp=0,this.defeat())}spawnPlayerProjectile({dir:e,speed:t,damage:n,radius:s,pierce:a,explodeRadius:r,burn:o,life:l,color:c}){const h=new Pt({color:c,transparent:!0,opacity:.95}),f=new qe(this.projGeo,h),u=Math.hypot(e.x,e.z)||1;f.position.set(this.playerPos.x+e.x/u*.7,1.02,this.playerPos.z+e.z/u*.7),f.scale.setScalar((s||.4)/.15),this.world.scene.add(f),this.projectiles.push({owner:"player",mesh:f,dir:{x:e.x/u,z:e.z/u},speed:t,damage:n,radius:s||.4,pierce:a||1,hitSet:new Set,explodeRadius:r||0,burn:o||0,life:l||2,color:c})}spawnEnemyProjectile(e){const t=e.mesh.position,n=this.playerPos.x-t.x,s=this.playerPos.z-t.z,a=Math.hypot(n,s)||1,r=this.map.id==="ice"?"#8fdcff":this.map.id==="ruins"?"#a8e06a":"#ff8a5a",o=new Pt({color:r,transparent:!0,opacity:.95}),l=new qe(this.projGeo,o);l.position.set(t.x,1.05,t.z),l.scale.setScalar(.95),this.world.scene.add(l),this.projectiles.push({owner:"enemy",mesh:l,dir:{x:n/a,z:s/a},speed:8.5+(this.map.index||1)*.55,damage:e.def.damage||6,radius:.4,life:2.6,color:r})}updateProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t--){const n=this.projectiles[t];n.life-=e,n.mesh.position.x+=n.dir.x*n.speed*e,n.mesh.position.z+=n.dir.z*n.speed*e,n.mesh.rotation.y+=e*8;let s=n.life<=0;if(!s&&n.owner==="player")for(const a of this.enemies){if(!a.alive||n.hitSet.has(a.id))continue;if(Math.hypot(a.mesh.position.x-n.mesh.position.x,a.mesh.position.z-n.mesh.position.z)<=n.radius+a.radius*.85){if(n.explodeRadius>0){this.explode(n.mesh.position,n.explodeRadius,n.damage,n.color,n.burn),s=!0;break}if(this.hitEnemy(a,n.damage,{burn:n.burn}),n.hitSet.add(a.id),n.hitSet.size>=(n.pierce||1)){s=!0;break}}}else!s&&n.owner==="enemy"&&Math.hypot(this.playerPos.x-n.mesh.position.x,this.playerPos.z-n.mesh.position.z)<.72&&(this.damagePlayer(n.damage),s=!0);(Math.abs(n.mesh.position.x)>this.world.bounds+3||Math.abs(n.mesh.position.z)>this.world.bounds+3)&&(s=!0),s&&(this.world.scene.remove(n.mesh),n.mesh.material.dispose(),this.projectiles.splice(t,1))}}explode(e,t,n,s,a){for(const r of this.enemiesInRadius(e,t))this.hitEnemy(r,n,{burn:a});this.fx.impact({x:e.x,y:1,z:e.z},s||"#ff9a5a",2.6,.5),this.fx.ring(e,t,s||"#ff9a5a",.55,.25),this.fx.burst({x:e.x,y:1,z:e.z},s||"#ff9a5a",7,1.1,.5),this.shake=Math.max(this.shake,.3),this.audio.play("fire")}updateDelayed(e){for(let t=this.delayed.length-1;t>=0;t--)if(this.delayed[t].time-=e,this.delayed[t].time<=0){const n=this.delayed[t].fn;this.delayed.splice(t,1),n()}}updateAreas(e){for(let t=this.areas.length-1;t>=0;t--){const n=this.areas[t];if(n.remaining-=e,n.tick-=e,n.tick<=0){n.tick=n.interval;for(const s of this.enemiesInRadius(n,n.radius))this.hitEnemy(s,n.damage,{burn:n.burn});this.fx.ring(n,n.radius*.7,n.color,.35,.5);for(let s=0;s<3;s++){const a=Math.random()*Math.PI*2,r=Math.random()*n.radius;this.fx.impact({x:n.x+Math.cos(a)*r,y:.4,z:n.z+Math.sin(a)*r},n.color,.8,.3)}this.audio.play(n.sound||"arrow")}n.remaining<=0&&this.areas.splice(t,1)}}spawnWolf(e){this.wolf&&(this.world.scene.remove(this.wolf.mesh),this.wolf=null);const t=S_();t.position.set(this.playerPos.x+1.2,0,this.playerPos.z+.6),this.world.scene.add(t),this.wolf={mesh:t,time:e.duration||12,attackTimer:.4,damage:this.abilityDamage((e.damage||1)*.5)},this.audio.play("summon"),this.fx.ring(t.position,1.6,"#7ef0b5",.7,.25)}updateWolf(e,t){const n=this.wolf;if(!n)return;if(n.time-=e,n.time<=0){this.fx.ring(n.mesh.position,1.2,"#7ef0b5",.5,.4),this.world.scene.remove(n.mesh),this.wolf=null;return}n.attackTimer-=e;const s=this.nearestEnemy(40);if(s){const a=s.mesh.position.x-n.mesh.position.x,r=s.mesh.position.z-n.mesh.position.z,o=Math.hypot(a,r)||.001;if(o>1.3){const l=Math.min(5.6*e,o-1.2);n.mesh.position.x+=a/o*l,n.mesh.position.z+=r/o*l,n.mesh.rotation.y=Math.atan2(a,r)}else n.attackTimer<=0&&(n.attackTimer=.8,this.hitEnemy(s,n.damage,{}),this.fx.impact({x:s.mesh.position.x,y:.8,z:s.mesh.position.z},"#7ef0b5",.9),this.audio.play("hit"))}else{const a=this.playerPos.x-n.mesh.position.x,r=this.playerPos.z-n.mesh.position.z,o=Math.hypot(a,r);o>2&&(n.mesh.position.x+=a/o*4.5*e,n.mesh.position.z+=r/o*4.5*e,n.mesh.rotation.y=Math.atan2(a,r))}sd(n.mesh,t)}spawnPickup(e,t,n=1,s=0){const a=e==="gold"?y_():e==="health"?v_():M_(),r=s?s/4*Math.PI*2:Math.random()*Math.PI*2,o=s?.5+Math.random()*.8:Math.random()*.5;a.position.set(t.x+Math.cos(r)*o,0,t.z+Math.sin(r)*o),a.userData.orb.position.y=.36,this.world.scene.add(a),this.pickups.push({type:e,value:n,mesh:a,life:24,phase:Math.random()*6,baseY:.36})}updatePickups(e,t){for(let n=this.pickups.length-1;n>=0;n--){const s=this.pickups[n];s.life-=e,s.mesh.rotation.y+=e*1.8,s.mesh.userData.orb.position.y=s.baseY+Math.sin(t*2.4+s.phase)*.09;const a=this.playerPos.x-s.mesh.position.x,r=this.playerPos.z-s.mesh.position.z,o=Math.hypot(a,r)||.001;if(o<2.6){const c=Math.min(1,(2.6-o)*2.2)*5.5*e;s.mesh.position.x+=a/o*c,s.mesh.position.z+=r/o*c}let l=o<1.05;if(l)if(s.type==="gold")this.profile.gold+=s.value,this.loot.gold+=s.value,this.audio.play("coin"),this.damageNumber(this.playerPos,`+${s.value} ◆`,"gold",2.3);else if(s.type==="health"){const c=this.player.stats.maxHp*.18;this.player.hp=Math.min(this.player.stats.maxHp,this.player.hp+c),this.audio.play("heal"),this.damageNumber(this.playerPos,`+${Math.round(c)}`,"heal",2.3)}else{const c=this.player.stats.maxMana*.25;this.player.mana=Math.min(this.player.stats.maxMana,this.player.mana+c),this.audio.play("pickup"),this.damageNumber(this.playerPos,`+${Math.round(c)}`,"mana",2.3)}(l||s.life<=0)&&(this.world.scene.remove(s.mesh),this.pickups.splice(n,1))}}updateUI(e){this.uiTimer-=e,this.buffTimer-=e,this.ui.updateCooldowns(this.player.abilityCooldowns,this.player.mana,this.player.stats.maxMana),this.buffTimer<=0&&(this.buffTimer=.2,this.ui.updateBuffs(this.player.buffs)),this.uiTimer<=0&&(this.uiTimer=.08,this.ui.updateVitals(this.player,this.player.stats,jh(this.profile,this.player.classId)),this.ui.drawMinimap({x:this.playerPos.x,z:this.playerPos.z,facing:this.player.facing+Math.PI},this.enemies,this.world.bounds)),this.boss&&this.boss.alive&&this.ui.updateBoss(this.boss.hp,this.boss.maxHp);for(const t of this.enemies){if(!t.alive)continue;const n=this.project({x:t.mesh.position.x,y:t.barHeight,z:t.mesh.position.z});this.ui.updateEnemyBar(t.id,n.x,n.y,t.hp/t.maxHp,n.visible)}}victory(){if(this.finished)return;this.finished=!0,this.waveActive=!1,this.ui.hideBoss(),this.fx.clear();const e=this.map,t=this.loot.xp+(e.reward?.xp||0),n=e.reward?.gold||0;this.profile.gold+=n,this.profile.completed.includes(e.id)||this.profile.completed.push(e.id);const s=kc(this.profile,this.player.classId,t);In(this.profile),this.lootGranted=!0,this.ui.updateProfileUI(this.profile),this.ui.showResult({victory:!0,rewards:{gold:n+this.loot.gold,xp:t},map:e,levelUps:s.levels||0}),this.audio.setMood("victory"),this.audio.play("victory"),s.levels>0&&(this.ui.levelFlash(),this.ui.toast(`Nível ${s.level}!`,"▲"),this.audio.play("levelup")),this.onFinished?.(!0)}defeat(){this.finished||(this.finished=!0,this.waveActive=!1,this.ui.hideBoss(),this.fx.clear(),In(this.profile),this.lootGranted=!0,this.ui.showResult({victory:!1,rewards:{gold:this.loot.gold},map:this.map,levelUps:0}),this.audio.setMood("defeat"),this.audio.play("defeat"),this.onFinished?.(!1))}exitToLobby(){!this.finished&&!this.lootGranted&&(this.lootGranted=!0,this.loot.xp>0&&kc(this.profile,this.player.classId,this.loot.xp),In(this.profile)),this.dispose(),this.onExit?.()}dispose(){this.fx.clear(),this.ui.clearEnemyBars(),this.ui.hideBoss();for(const e of this.enemies)this.world.scene.remove(e.mesh);for(const e of this.projectiles)this.world.scene.remove(e.mesh),e.mesh.material.dispose();for(const e of this.pickups)this.world.scene.remove(e.mesh);this.wolf&&this.world.scene.remove(this.wolf.mesh),this.enemies.length=0,this.projectiles.length=0,this.pickups.length=0,this.delayed.length=0,this.areas.length=0,this.wolf=null}}function ji(i){return{x:i.x,y:i.y||0,z:i.z}}function ws(i,e){const t=new Ge(i);return`rgba(${Math.round(t.r*255)},${Math.round(t.g*255)},${Math.round(t.b*255)},${e})`}function Yc(i,e,t,n=!1){const s=document.createElement("canvas");s.width=e,s.height=t;const a=s.getContext("2d"),r=a.createLinearGradient(0,0,0,t);r.addColorStop(0,n?"#21140d":"#0b111d"),r.addColorStop(.55,n?"#17100c":"#0c111a"),r.addColorStop(1,n?"#0a0705":"#070a11"),a.fillStyle=r,a.fillRect(0,0,e,t);const o=a.createRadialGradient(e*.5,t*.32,2,e*.5,t*.32,e*.62);o.addColorStop(0,ws(i,n?.5:.4)),o.addColorStop(.45,ws(i,.14)),o.addColorStop(1,ws(i,0)),a.fillStyle=o,a.fillRect(0,0,e,t);const l=a.createRadialGradient(e*.5,t*.92,2,e*.5,t*.92,e*.52);l.addColorStop(0,ws(i,.26)),l.addColorStop(1,ws(i,0)),a.fillStyle=l,a.fillRect(0,0,e,t);const c=a.createRadialGradient(e*.5,t*.45,e*.2,e*.5,t*.45,e*.75);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,0.5)"),a.fillStyle=c,a.fillRect(0,0,e,t);const h=new rl(s);return h.colorSpace=Qt,h}function k_(){const i={classes:{},vendor:null},e={};let t;try{t=new Kh({antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch{return{portraits:i,thumbs:e}}t.setPixelRatio(1),t.shadowMap.enabled=!0,t.shadowMap.type=$o,t.toneMapping=$a,t.toneMappingExposure=1.08;const n=new ls,s=new qt(34,320/420,.1,40);s.position.set(.14,1.26,3.55),s.lookAt(0,1.04,0);const a=new dl(12570862,1709072,1.35);n.add(a);const r=new za(16769200,2.6);r.position.set(2.4,4.2,3.2),r.castShadow=!0,r.shadow.mapSize.set(512,512),r.shadow.camera.left=-2.5,r.shadow.camera.right=2.5,r.shadow.camera.top=3,r.shadow.camera.bottom=-1,r.shadow.camera.near=.5,r.shadow.camera.far=12,r.shadow.bias=-.001,n.add(r);const o=new cn(7252200,3.2,9,2);o.position.set(-2.4,2.2,2.2),n.add(o);const l=new cn(12619007,2.6,8,2);l.position.set(1.6,2.6,-2.6),n.add(l);const c=new qe(new $t(2.4,40),new sn({color:"#171b24",roughness:.95,metalness:.05}));c.rotation.x=-Math.PI/2,c.position.y=-.015,c.receiveShadow=!0,n.add(c);const h=new qe(new gn(1.35,1.43,48),new Pt({color:"#6ea8e8",transparent:!0,opacity:.4,side:ut,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.005,n.add(h);let f=null;const u=()=>{f&&(n.remove(f),f=null)};try{t.setSize(320,420,!1),s.aspect=320/420,s.updateProjectionMatrix();for(const _ of _i)n.background=Yc(_.color,320,420),r.color.set(_.color),o.color.set(_.color),l.color.set(_.color),h.material.color.set(_.color),u(),f=ar(_.id),f.position.set(0,0,0),f.rotation.y=.06,n.add(f),t.render(n,s),i.classes[_.id]=t.domElement.toDataURL("image/jpeg",.9);u(),n.background=Yc("#d2a84e",320,320,!0),r.color.set("#ffcf8a"),o.color.set("#ff9a4a"),l.color.set("#e8c477"),h.material.color.set("#d2a84e"),s.aspect=1,s.position.set(.25,1.32,4.05),s.lookAt(0,1.02,0),s.updateProjectionMatrix(),t.setSize(320,320,!1);const d=id();d.position.set(-.52,0,0),d.rotation.y=.05,n.add(d);const g=pl();g.position.set(.78,0,.22),g.rotation.y=-.62,n.add(g),t.render(n,s),i.vendor=t.domElement.toDataURL("image/jpeg",.9),n.remove(d),n.remove(g),t.setSize(480,300,!1);for(const _ of vi){const p=L_(_.id);p.camera.aspect=480/300,p.camera.updateProjectionMatrix(),t.render(p.scene,p.camera),e[_.id]=t.domElement.toDataURL("image/jpeg",.88)}}catch(d){console.warn("Falha ao gerar arte procedural",d)}finally{try{t.dispose(),t.forceContextLoss()}catch{}}return{portraits:i,thumbs:e}}const Ma=(i,e,t)=>Math.max(e,Math.min(t,i)),ya=()=>new Promise(i=>requestAnimationFrame(i)),Vo=document.getElementById("game-canvas"),Bn=new Kh({canvas:Vo,antialias:!0,powerPreference:"high-performance"});Bn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Bn.setSize(window.innerWidth,window.innerHeight);Bn.shadowMap.enabled=!0;Bn.shadowMap.type=$o;Bn.toneMapping=$a;Bn.toneMappingExposure=1.1;const Wa=document.createElement("div");Wa.id="hit-flash";document.getElementById("app").appendChild(Wa);function G_(){Wa.getAnimations?.().forEach(i=>i.cancel()),Wa.animate([{opacity:.9},{opacity:0}],{duration:280,easing:"ease-out"})}const lt=Zg(),Se=new D_,yt=new N_,nt=new U_;Se.setProfile(lt);Se.setSoundIcon(nt.muted);let ot="boot",qn=null,yn=null,bn=null,ri=null,Mt=null,Rn=null,Ze=null,Wo=null,en=!1,St=!1,ds=!1,Zn=!1,Xa=null,Ca=0;const od=new ju,$c=new Qu,Yr=new be,qa=new L;let Kc=!1;function ml(){if(Kc)return;Kc=!0,nt.init();const i=ot==="adventure"?Ze?.boss?"boss":"adventure":ot==="lobby"?"lobby":"title";nt.setMood(i)}window.addEventListener("pointerdown",ml,{once:!0});window.addEventListener("keydown",ml,{once:!0});function Ni(i){qn=i,qn&&(qn.camera.aspect=window.innerWidth/window.innerHeight,qn.camera.updateProjectionMatrix())}function ld(){Bn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Bn.setSize(window.innerWidth,window.innerHeight);for(const i of[yn,bn,Mt,qn])i&&(i.camera.aspect=window.innerWidth/window.innerHeight,i.camera.updateProjectionMatrix())}window.addEventListener("resize",ld);window.addEventListener("orientationchange",()=>setTimeout(ld,250));function cd(i,e,t=Math.PI){const n=Qg(lt,i),s=ar(i);return s.position.copy(e),s.rotation.y=t,qn.scene.add(s),{classId:i,mesh:s,stats:n,hp:n.maxHp,mana:n.maxMana,facing:t,attackTimer:0,attackAnim:-1,abilityAnim:-1,abilityCooldowns:[0,0,0],dodgeCooldown:0,dodgeTimer:0,dodgeDir:{x:0,z:1},dodgeRatio:0,invuln:0,buffs:[]}}function H_(i,e,t,n){const s=n-t;i.x=Ma(i.x,-s,s),i.z=Ma(i.z,-s,s);for(const a of e){const r=i.x-a.x,o=i.z-a.z,l=(a.r||0)+t,c=Math.hypot(r,o);if(c<l&&c>1e-4){const h=(l-c)/c;i.x+=r*h,i.z+=o*h}}i.x=Ma(i.x,-s,s),i.z=Ma(i.z,-s,s)}function V_(){bn||(bn=rd()),ot="select",en=!1,St=!1,Zn=!1,yt.enabled=!0,Ni(bn),Se.showSelect(),hd(lt.selectedClass),nt.setMood("title")}function hd(i){xi[i]&&(lt.selectedClass=i,In(lt),Se.updateSelectPanel(i,lt),W_(i),nt.play("ui"))}function W_(i){bn&&(ri&&bn.scene.remove(ri),ri=ar(i),ri.position.set(0,.41,0),ri.rotation.y=-.05,bn.scene.add(ri),bn.setClass(i))}function Xo(){Mt||(Mt=C_()),Rn&&Mt.scene.remove(Rn.mesh),ot="lobby",en=!1,St=!1,ds=!1,Zn=!1,Ze=null,Ni(Mt),Rn=cd(lt.selectedClass,Mt.playerStart.clone(),Math.PI),Se.selectedClassId=lt.selectedClass,Se.showLobby(lt),Se.hideResult(),Se.closePause(),Se.closeHelp(),Se.hideInteract(),Se.setSoundIcon(nt.muted),yt.enabled=!0,Xa=null,Ca=0;const i=Mt.camera;i.position.set(Rn.mesh.position.x,9.2,Rn.mesh.position.z+8.4),i.lookAt(Rn.mesh.position.x,.9,Rn.mesh.position.z-2.2),nt.setMood("lobby");const e=xi[lt.selectedClass];Se.toast(`${e.name}, ${e.title}`,"✦")}function dd(i){Ze&&(Ze.dispose(),Ze=null);const e=P_(i);Wo=i,Ni(e);const t=cd(lt.selectedClass,e.playerStart.clone(),Math.PI),n=new F_(e.scene);ot="adventure",en=!1,St=!1,Zn=!1,yt.enabled=!0,Se.hideResult(),Se.closePause(),Se.closeHelp(),Se.showAdventure(lt),Se.currentClass=xi[lt.selectedClass],Se.setupAbilities(Se.currentClass),Se.clearEnemyBars(),Se.hideBoss(),Se.updateBuffs([]),Se.setSoundIcon(nt.muted),Ze=new z_({world:e,player:t,profile:lt,ui:Se,audio:nt,input:yt,camera:e.camera,fx:n,onExit:X_,onPlayerHit:G_,onFinished:q_}),Ze.start();const s=e.camera;s.position.set(t.mesh.position.x,9.7,t.mesh.position.z+8.7),s.lookAt(t.mesh.position.x,.9,t.mesh.position.z-2.2),nt.init(),nt.setMood("adventure")}function X_(){Ze=null,Xo()}function q_(){Zn=!0,St=!0,yt.enabled=!1}function Y_(){Wo&&(Ze&&(Ze.dispose(),Ze=null),Se.hideResult(),dd(Wo))}function ud(){ot!=="adventure"||!Ze||Ze.finished||Zn||(en?fd():(en=!0,St=!0,yt.enabled=!1,Se.openPause(),nt.play("ui")))}function fd(){en=!1,St=!1,Se.closePause(),yt.enabled=!0,nt.play("ui")}function gl(){ot==="lobby"&&(St=!0,yt.enabled=!1,Se.hideInteract(),Se.openShop(lt),nt.play("ui"))}function _l(){ot==="lobby"&&(St=!0,yt.enabled=!1,Se.hideInteract(),Se.openMaps(lt),nt.play("ui"))}function qo(i){if(i==="help"){lr();return}Se.closeModal(`${i}-modal`),St=!1,yt.enabled=ot==="lobby"||ot==="adventure"&&!en&&!Zn,nt.play("ui")}function $_(){ds=!0,St=!0,yt.enabled=!1,Se.openHelp(),nt.play("ui")}function lr(){ds=!1,Se.closeHelp(),ot==="adventure"&&en?(St=!0,yt.enabled=!1):(St=!1,yt.enabled=ot==="lobby"||ot==="adventure"&&!en&&!Zn),nt.play("ui")}function K_(i){const e=Ls[i],t=jg(lt,e,lt.selectedClass);if(t.ok)nt.play("buy"),Se.toast(`${e.name} ${e.type==="consumable"?"comprado":"adquirido"}`,"◆");else{nt.play("error");const n={poor:"Ouro insuficiente.",owned:"Você já possui este item.",class:"Este item não serve para sua classe.",missing:"Item indisponível."};Se.toast(n[t.reason]||"Compra recusada.","✦")}Se.renderShop(),Se.updateProfileUI(lt)}function J_(i){const e=Ls[i];e_(lt,e,lt.selectedClass).ok?(nt.play("buy"),Se.toast(`${e.name} equipado`,"✦")):(nt.play("error"),Se.toast("Não foi possível equipar.","✦")),Se.renderShop(),Se.updateProfileUI(lt)}function Z_(){nt.init(),nt.toggleMute(),Se.setSoundIcon(nt.muted),nt.muted||nt.play("ui")}Object.assign(Se.handlers,{onStart:()=>{ml(),V_()},onBackTitle:()=>{ot="title",en=!1,St=!1,Zn=!1,yt.enabled=!0,Ni(yn),Se.showTitle(),nt.setMood("title")},onSelectClass:i=>hd(i),onConfirmClass:()=>{lt.selectedClass=Se.selectedClassId,In(lt),Xo()},onOpenShop:()=>gl(),onOpenMaps:()=>_l(),onCloseModal:i=>qo(i),onEnterMap:i=>dd(i),onLobby:()=>{ot==="adventure"&&Ze&&Ze.exitToLobby()},onPause:()=>ud(),onResume:()=>fd(),onPauseLobby:()=>{Ze&&Ze.exitToLobby()},onRetry:()=>Y_(),onResultLobby:()=>{Ze?Ze.exitToLobby():Xo()},onOpenHelp:()=>$_(),onCloseHelp:()=>lr(),onBuy:i=>K_(i),onEquip:i=>J_(i),onSound:()=>Z_()});yt.on("uiClick",()=>{nt.init(),nt.play("ui")});yt.on("attack",()=>{ot==="adventure"&&Ze&&!en&&!St&&Ze.queueAttack()});yt.on("ability",i=>{ot==="adventure"&&Ze&&!en&&!St&&Ze.useAbility(i)});yt.on("dodge",()=>{ot==="adventure"&&Ze&&!en&&!St&&Ze.dodge()});yt.on("potion",i=>{ot==="adventure"&&Ze&&!en&&!St&&Ze.usePotion(i||"health")});yt.on("pause",()=>{ot==="adventure"?ds?lr():ud():ot==="lobby"&&St&&Q_()});yt.on("lobby",()=>{ot==="adventure"&&Ze&&Ze.exitToLobby()});function Q_(){if(ds){lr();return}const i=document.getElementById("shop-modal"),e=document.getElementById("maps-modal");i&&!i.classList.contains("hidden")?qo("shop"):e&&!e.classList.contains("hidden")&&qo("maps")}function j_(i,e){let t=i;for(;t;){if(t===e)return!0;t=t.parent}return!1}Vo.addEventListener("pointerdown",i=>{if(ot!=="lobby"||St||!Mt)return;const e=Vo.getBoundingClientRect();Yr.x=(i.clientX-e.left)/e.width*2-1,Yr.y=-((i.clientY-e.top)/e.height)*2+1,$c.setFromCamera(Yr,Mt.camera);const t=[Mt.vendor,Mt.dog,Mt.mapBoard].filter(Boolean),n=$c.intersectObjects(t,!0);if(!n.length)return;const s=t.find(c=>j_(n[0].object,c));if(!s)return;const a=Rn.mesh.position,r=s===Mt.dog?"dog":s===Mt.mapBoard?"maps":"shop";if(r==="dog"){Math.hypot(a.x- -3.65,a.z- -4.55)<6.5?(Se.toast("Brasa fareja sua bolsa e abana o rabo. “Ele aprova esta compra.”","🐕"),nt.play("ui")):Se.toast("Um cão-guia observa você de longe.","✦");return}const o=Mt.interactables.find(c=>c.type===r);if((o?Math.hypot(a.x-o.x,a.z-o.z):99)>(o?.range||3)+2.4){Se.toast(r==="maps"?"Aproxime-se da Pedra dos Domínios.":"Aproxime-se de Maelis.","✦");return}r==="maps"?_l():gl()});document.getElementById("interact-prompt")?.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),Xa&&(Xa.type==="shop"?gl():_l())});function ex(i,e){if(!Rn||!Mt)return;const t=Rn,s=!St&&!ds?yt.getMove():{x:0,y:0,magnitude:0};let a=0;if(s.magnitude>.08){const c=t.stats.speed*1.35;t.mesh.position.x+=s.x*c*i,t.mesh.position.z+=s.y*c*i,H_(t.mesh.position,Mt.obstacles,.46,Mt.bounds),t.facing=Math.atan2(s.x,s.y),t.mesh.rotation.y=t.facing,a=s.magnitude}rr(t.mesh,e,{moving:a});let r=null,o=1/0;for(const c of Mt.interactables){const h=Math.hypot(t.mesh.position.x-c.x,t.mesh.position.z-c.z);h<=c.range&&h<o&&(r=c,o=h)}Xa=r,r&&!St?Se.showInteract(r.label):Se.hideInteract();const l=Mt.camera;qa.set(t.mesh.position.x,9.2,t.mesh.position.z+8.4),l.position.lerp(qa,1-Math.exp(-i*4.2)),l.lookAt(t.mesh.position.x,.9,t.mesh.position.z-2.2),Ca-=i,Ca<=0&&(Ca=.3,Se.updateProfileUI(lt))}function tx(i,e){if(!Ze)return;!en&&!Zn&&Ze.update(i,e);const t=Ze.player.mesh.position,n=Ze.world.camera,s=Ze.shake||0;qa.set(t.x+(Math.random()-.5)*s*.55,9.7+(Math.random()-.5)*s*.4,t.z+8.7+(Math.random()-.5)*s*.55),n.position.lerp(qa,1-Math.exp(-i*5.2)),n.lookAt(t.x,.9,t.z-2.2)}function pd(){requestAnimationFrame(pd);const i=Math.min(.05,od.getDelta()),e=performance.now()/1e3;qn&&(ot==="title"&&yn?yn.update(e,i):ot==="select"&&bn?(bn.update(e,i),ri&&rr(ri,e,{moving:0})):ot==="lobby"&&Mt?(Mt.update(e,i),ex(i,e)):ot==="adventure"&&Ze&&(Ze.world.update(e,i),tx(i,e)),Bn.render(qn.scene,qn.camera))}async function nx(){Se.showBootProgress(8),await ya(),yn=A_(),Ni(yn),Bn.render(yn.scene,yn.camera),Se.showBootProgress(24),await ya();const i=k_();Se.setPortraits(i.portraits),Se.setMapThumbs(i.thumbs),Se.showBootProgress(72),await ya(),bn=rd(),Se.buildClassCards(_i,lt.selectedClass),Se.updateSelectPanel(lt.selectedClass,lt),Se.setSoundIcon(nt.muted),Se.showBootProgress(94),await ya(),ot="title",Ni(yn),Se.showTitle(),Se.showBootProgress(100),Se.hideBoot(),nt.setMood("title"),od.start(),pd()}nx().catch(i=>{console.error("Falha ao iniciar Lendas de Aethermoor",i),Se.hideBoot(),Se.showTitle(),ot="title",yn&&Ni(yn)});
