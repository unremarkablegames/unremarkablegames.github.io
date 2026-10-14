(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Ql="180",ed=0,Wc=1,td=2,xh=1,yh=2,Zn=3,_i=0,on=1,Gt=2,mi=0,Er=1,zn=2,Xc=3,qc=4,nd=5,Pi=100,id=101,rd=102,sd=103,od=104,ad=200,ld=201,cd=202,ud=203,$a=204,Qa=205,hd=206,fd=207,dd=208,pd=209,md=210,gd=211,_d=212,vd=213,xd=214,el=0,tl=1,nl=2,Cr=3,il=4,rl=5,Ro=6,sl=7,Go=0,yd=1,Md=2,gi=0,Sd=1,wd=2,Ed=3,Mh=4,bd=5,Td=6,Ad=7,Yc="attached",Rd="detached",Sh=300,Pr=301,Ir=302,Co=303,ol=304,Wo=306,hs=1e3,Jn=1001,al=1002,fn=1003,Cd=1004,zs=1005,Nn=1006,aa=1007,Fi=1008,Vn=1009,wh=1010,Eh=1011,fs=1012,ec=1013,ki=1014,Fn=1015,Ps=1016,tc=1017,nc=1018,ds=1020,bh=35902,Th=35899,Ah=1021,Rh=1022,Sn=1023,ps=1026,ms=1027,Ch=1028,ic=1029,Ph=1030,rc=1031,sc=1033,So=33776,wo=33777,Eo=33778,bo=33779,ll=35840,cl=35841,ul=35842,hl=35843,fl=36196,dl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,yl=37813,Ml=37814,Sl=37815,wl=37816,El=37817,bl=37818,Tl=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Ll=36283,Dl=36284,Ul=36285,Nl=36286,Ih=2200,Pd=2201,Id=2202,Po=2300,Fl=2301,la=2302,xr=2400,yr=2401,Io=2402,oc=2500,Ld=2501,Dd=3200,Ud=3201,Xo=0,Nd=1,di="",mt="srgb",Lr="srgb-linear",Lo="linear",ct="srgb",$i=7680,Fd=7681,Od=517,jc=519,Bd=512,zd=513,kd=514,Lh=515,Vd=516,Hd=517,Gd=518,Wd=519,Kc=35044,Zc="300 es",On=2e3,Do=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const is=Math.PI/180,Dr=180/Math.PI;function ni(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[r&255]+qt[r>>8&255]+qt[r>>16&255]+qt[r>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function et(r,e,t){return Math.max(e,Math.min(t,r))}function ac(r,e){return(r%e+e)%e}function Xd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function qd(r,e,t){return r!==e?(t-r)/(e-r):0}function rs(r,e,t){return(1-t)*r+t*e}function Yd(r,e,t,n){return rs(r,e,1-Math.exp(-t*n))}function jd(r,e=1){return e-Math.abs(ac(r,e*2)-e)}function Kd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Zd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Jd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $d(r,e){return r+Math.random()*(e-r)}function Qd(r){return r*(.5-Math.random())}function ep(r){r!==void 0&&(Jc=r);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(r){return r*is}function np(r){return r*Dr}function ip(r){return(r&r-1)===0&&r!==0}function rp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function op(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),f=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*f,l*u,l*h,a*c);break;case"YZY":r.set(l*h,a*f,l*u,a*c);break;case"ZXZ":r.set(l*u,l*h,a*f,a*c);break;case"XZX":r.set(a*f,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*f,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:is,RAD2DEG:Dr,generateUUID:ni,clamp:et,euclideanModulo:ac,mapLinear:Xd,inverseLerp:qd,lerp:rs,damp:Yd,pingpong:jd,smoothstep:Kd,smootherstep:Zd,randInt:Jd,randFloat:$d,randFloatSpread:Qd,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:rp,floorPowerOfTwo:sp,setQuaternionFromProperEuler:op,normalize:$t,denormalize:mr};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],f=n[i+2],u=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==h||c!==d||f!==g){let m=1-a;const p=l*h+c*d+f*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,p*y);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const x=a*y;if(l=l*m+h*x,c=c*m+d*x,f=f*m+g*x,u=u*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=T,c*=T,f*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],f=n[i+3],u=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+f*u+l*d-c*h,e[t+1]=l*g+f*h+c*u-a*d,e[t+2]=c*g+f*d+a*h-l*u,e[t+3]=f*g-a*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(i/2),u=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"YZX":this._x=h*f*u+c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u-h*d*g;break;case"XZY":this._x=h*f*u-c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+i*c-s*l,this._y=i*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-i*a,this._w=o*f-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),f=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*f,this.y=n+l*f+a*c-s*u,this.z=i+l*u+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new R,$c=new wt;class je{constructor(e,t,n,i,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],v=i[4],x=i[7],T=i[2],b=i[5],C=i[8];return s[0]=o*_+a*y+l*T,s[3]=o*m+a*v+l*b,s[6]=o*p+a*x+l*C,s[1]=c*_+f*y+u*T,s[4]=c*m+f*v+u*b,s[7]=c*p+f*x+u*C,s[2]=h*_+d*y+g*T,s[5]=h*m+d*v+g*b,s[8]=h*p+d*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*s*f+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*s,d=c*s-o*l,g=t*u+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-f*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(f*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new je;function Dh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ap(){const r=gs("canvas");return r.style.display="block",r}const Qc={};function _s(r){r in Qc||(Qc[r]=!0,console.warn(r))}function lp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const eu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){const r={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Lo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Lr]:{primaries:e,whitePoint:n,transfer:Lo,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),r}const Je=cp();function $n(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qi;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=gs("canvas")),Qi.width=e.width,Qi.height=e.height;const i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=$n(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ha(i[o].image)):s.push(ha(i[o]))}else s=ha(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ha(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?up.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;const fa=new R;class Xt extends ji{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Jn,i=Jn,s=Nn,o=Fi,a=Sn,l=Vn,c=Xt.DEFAULT_ANISOTROPY,f=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ni(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Sh;Xt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,T=(p+1)/2,b=(f+h)/4,C=(u+_)/4,P=(g+m)/4;return v>x&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=C/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=P/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=C/s,i=P/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(h-f)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Xt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new lc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends dp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uh extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Vs.subVectors(this.max,Yr),er.subVectors(e.a,Yr),tr.subVectors(e.b,Yr),nr.subVectors(e.c,Yr),ri.subVectors(tr,er),si.subVectors(nr,tr),Mi.subVectors(er,nr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!da(t,er,tr,nr,Vs)||(t=[1,0,0,0,1,0,0,0,1],!da(t,er,tr,nr,Vs))?!1:(Hs.crossVectors(ri,si),t=[Hs.x,Hs.y,Hs.z],da(t,er,tr,nr,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new R,new R,new R,new R,new R,new R,new R,new R],wn=new R,ks=new Vr,er=new R,tr=new R,nr=new R,ri=new R,si=new R,Mi=new R,Yr=new R,Vs=new R,Hs=new R,Si=new R;function da(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Si.fromArray(r,s);const a=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),f=n.dot(Si);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const mp=new Vr,jr=new R,pa=new R;class Ki{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(pa)),this.expandByPoint(jr.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new R,ma=new R,Gs=new R,oi=new R,ga=new R,Ws=new R,_a=new R;class Is{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=oi.dot(this.direction),l=-oi.dot(Gs),c=oi.lengthSq(),f=Math.abs(1-o*o);let u,h,d,g;if(f>0)if(u=o*l-a,h=o*a-l,g=s*f,u>=0)if(h>=-g)if(h<=g){const _=1/f;u*=_,h*=_,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ma).addScaledVector(Gs,h),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,s){ga.subVectors(t,e),Ws.subVectors(n,e),_a.crossVectors(ga,Ws);let o=this.direction.dot(_a),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Ws.crossVectors(oi,Ws));if(l<0)return null;const c=a*this.direction.dot(ga.cross(oi));if(c<0||l+c>o)return null;const f=-a*oi.dot(_a);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,s,o,a,l,c,f,u,h,d,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,f,u,h,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,f,u,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,d=o*u,g=a*f,_=a*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,d=l*u,g=c*f,_=c*u;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,d=l*u,g=c*f,_=c*u;t[0]=h-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*f,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,d=o*u,g=a*f,_=a*u;t[0]=l*f,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=_-h*u,t[8]=g*u+d,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=d*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+_,t[5]=o*f,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ai.crossVectors(n,un),ai.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ai.crossVectors(n,un)),ai.normalize(),Xs.crossVectors(un,ai),i[0]=ai.x,i[4]=Xs.x,i[8]=un.x,i[1]=ai.y,i[5]=Xs.y,i[9]=un.y,i[2]=ai.z,i[6]=Xs.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],T=n[15],b=i[0],C=i[4],P=i[8],w=i[12],M=i[1],I=i[5],N=i[9],U=i[13],z=i[2],W=i[6],V=i[10],Z=i[14],k=i[3],ne=i[7],pe=i[11],ue=i[15];return s[0]=o*b+a*M+l*z+c*k,s[4]=o*C+a*I+l*W+c*ne,s[8]=o*P+a*N+l*V+c*pe,s[12]=o*w+a*U+l*Z+c*ue,s[1]=f*b+u*M+h*z+d*k,s[5]=f*C+u*I+h*W+d*ne,s[9]=f*P+u*N+h*V+d*pe,s[13]=f*w+u*U+h*Z+d*ue,s[2]=g*b+_*M+m*z+p*k,s[6]=g*C+_*I+m*W+p*ne,s[10]=g*P+_*N+m*V+p*pe,s[14]=g*w+_*U+m*Z+p*ue,s[3]=y*b+v*M+x*z+T*k,s[7]=y*C+v*I+x*W+T*ne,s[11]=y*P+v*N+x*V+T*pe,s[15]=y*w+v*U+x*Z+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*f-s*l*f)+m*(+t*c*u-t*a*d-s*o*u+n*o*d+s*a*f-n*c*f)+p*(-i*a*f-t*l*u+t*a*h+i*o*u-n*o*h+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*h*c+_*l*d-a*m*d-u*l*p+a*h*p,v=g*h*c-f*m*c-g*l*d+o*m*d+f*l*p-o*h*p,x=f*_*c-g*u*c+g*a*d-o*_*d-f*a*p+o*u*p,T=g*u*l-f*_*l-g*a*h+o*_*h+f*a*m-o*u*m,b=t*y+n*v+i*x+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=y*C,e[1]=(_*h*s-u*m*s-_*i*d+n*m*d+u*i*p-n*h*p)*C,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*C,e[3]=(u*l*s-a*h*s-u*i*c+n*h*c+a*i*d-n*l*d)*C,e[4]=v*C,e[5]=(f*m*s-g*h*s+g*i*d-t*m*d-f*i*p+t*h*p)*C,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*C,e[7]=(o*h*s-f*l*s+f*i*c-t*h*c-o*i*d+t*l*d)*C,e[8]=x*C,e[9]=(g*u*s-f*_*s-g*n*d+t*_*d+f*n*p-t*u*p)*C,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*C,e[11]=(f*a*s-o*u*s-f*n*c+t*u*c+o*n*d-t*a*d)*C,e[12]=T*C,e[13]=(f*_*i-g*u*i+g*n*h-t*_*h-f*n*m+t*u*m)*C,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*u*i-f*a*i+f*n*l-t*u*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+n,f*l-i*o,0,c*l-i*a,f*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,u=a+a,h=s*c,d=s*f,g=s*u,_=o*f,m=o*u,p=a*u,y=l*c,v=l*f,x=l*u,T=n.x,b=n.y,C=n.z;return i[0]=(1-(_+p))*T,i[1]=(d+x)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(h+p))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+v)*C,i[9]=(m-y)*C,i[10]=(1-(h+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ir.set(i[0],i[1],i[2]).length();const o=ir.set(i[4],i[5],i[6]).length(),a=ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/s,f=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=f,En.elements[5]*=f,En.elements[6]*=f,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=On,l=!1){const c=this.elements,f=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===On)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Do)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=On,l=!1){const c=this.elements,f=2/(t-e),u=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===On)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Do)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new R,En=new Le,gp=new R(0,0,0),_p=new R(1,1,1),ai=new R,Xs=new R,un=new R,nu=new Le,iu=new wt;class Ft{constructor(e=0,t=0,n=0,i=Ft.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],f=i[9],u=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ft.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vp=0;const ru=new R,rr=new wt,qn=new Le,qs=new R,Kr=new R,xp=new R,yp=new wt,su=new R(1,0,0),ou=new R(0,1,0),au=new R(0,0,1),lu={type:"added"},Mp={type:"removed"},sr={type:"childadded",child:null},va={type:"childremoved",child:null};class gt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new R,t=new Ft,n=new wt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new je}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Kr,qs,this.up):qn.lookAt(qs,Kr,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(qn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new R(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new R,Yn=new R,xa=new R,jn=new R,or=new R,ar=new R,cu=new R,ya=new R,Ma=new R,Sa=new R,wa=new nt,Ea=new nt,ba=new nt;class Rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),Yn.subVectors(n,t),xa.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Yn),l=bn.dot(xa),c=Yn.dot(Yn),f=Yn.dot(xa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,d=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return wa.setScalar(0),Ea.setScalar(0),ba.setScalar(0),wa.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(wa,s.x),o.addScaledVector(Ea,s.y),o.addScaledVector(ba,s.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Yn.subVectors(e,t),bn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;or.subVectors(i,n),ar.subVectors(s,n),ya.subVectors(e,n);const l=or.dot(ya),c=ar.dot(ya);if(l<=0&&c<=0)return t.copy(n);Ma.subVectors(e,i);const f=or.dot(Ma),u=ar.dot(Ma);if(f>=0&&u<=f)return t.copy(i);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(or,o);Sa.subVectors(e,s);const d=or.dot(Sa),g=ar.dot(Sa);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ar,a);const m=f*g-d*u;if(m<=0&&u-f>=0&&d-g>=0)return cu.subVectors(s,i),a=(u-f)/(u-f+(d-g)),t.copy(i).addScaledVector(cu,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=ac(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ta(o,s,e+1/3),this.g=Ta(o,s,e),this.b=Ta(o,s,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Je.workingToColorSpace(Yt.copy(this),e),Math.round(et(Yt.r*255,0,255))*65536+Math.round(et(Yt.g*255,0,255))*256+Math.round(et(Yt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=mt){Je.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Ys);const n=rs(li.h,Ys.h,t),i=rs(li.s,Ys.s,t),s=rs(li.l,Ys.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Fe;Fe.NAMES=Nh;let Sp=0;class ii extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Er,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Qa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new R,js=new ae;let wp=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class uc extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fh extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ep=0;const xn=new Le,Aa=new gt,lr=new R,hn=new Vr,Zr=new Vr,zt=new R;class dt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Fh:uc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(hn.min,Zr.min),hn.expandByPoint(zt),zt.addVectors(hn.max,Zr.max),hn.expandByPoint(zt)):(hn.expandByPoint(Zr.min),hn.expandByPoint(Zr.max))}hn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)zt.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),zt.add(lr)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new R,l[P]=new R;const c=new R,f=new R,u=new R,h=new ae,d=new ae,g=new ae,_=new R,m=new R;function p(P,w,M){c.fromBufferAttribute(n,P),f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),f.sub(c),u.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(I),a[P].add(_),a[w].add(_),a[M].add(_),l[P].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,w=y.length;P<w;++P){const M=y[P],I=M.start,N=M.count;for(let U=I,z=I+N;U<z;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new R,x=new R,T=new R,b=new R;function C(P){T.fromBufferAttribute(i,P),b.copy(T);const w=a[P];v.copy(w),v.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(b,w);const I=x.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,w=y.length;P<w;++P){const M=y[P],I=M.start,N=M.count;for(let U=I,z=I+N;U<z;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,f=new R,u=new R;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*f;for(let p=0;p<f;p++)h[g++]=c[d++]}return new pn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new Le,wi=new Is,Ks=new Ki,hu=new R,Zs=new R,Js=new R,$s=new R,Ra=new R,Qs=new R,fu=new R,eo=new R;class it extends gt{constructor(e=new dt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],u=s[l];f!==0&&(Ra.fromBufferAttribute(u,e),o?Qs.addScaledVector(Ra,f):Qs.addScaledVector(Ra.sub(t),f))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Ks.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ks,hu)===null||wi.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(uu.copy(s).invert(),wi.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,T=v;x<T;x+=3){const b=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);i=to(this,p,e,n,c,f,u,b,C,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=to(this,o,e,n,c,f,u,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,T=v;x<T;x+=3){const b=x,C=x+1,P=x+2;i=to(this,p,e,n,c,f,u,b,C,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;i=to(this,o,e,n,c,f,u,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function bp(r,e,t,n,i,s,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===_i,a),l===null)return null;eo.copy(a),eo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:r}}function to(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Zs),r.getVertexPosition(l,Js),r.getVertexPosition(c,$s);const f=bp(r,e,t,n,Zs,Js,$s,fu);if(f){const u=new R;Rn.getBarycoord(fu,Zs,Js,$s,u),i&&(f.uv=Rn.getInterpolatedAttribute(i,a,l,c,u,new ae)),s&&(f.uv1=Rn.getInterpolatedAttribute(s,a,l,c,u,new ae)),o&&(f.normal=Rn.getInterpolatedAttribute(o,a,l,c,u,new R),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new R,materialIndex:0};Rn.getNormal(Zs,Js,$s,h.normal),f.face=h,f.barycoord=u}return f}class Hr extends dt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(u,2));function g(_,m,p,y,v,x,T,b,C,P,w){const M=x/C,I=T/P,N=x/2,U=T/2,z=b/2,W=C+1,V=P+1;let Z=0,k=0;const ne=new R;for(let pe=0;pe<V;pe++){const ue=pe*I-U;for(let Se=0;Se<W;Se++){const Ue=Se*M-N;ne[_]=Ue*y,ne[m]=ue*v,ne[p]=z,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=b>0?1:-1,f.push(ne.x,ne.y,ne.z),u.push(Se/C),u.push(1-pe/P),Z+=1}}for(let pe=0;pe<P;pe++)for(let ue=0;ue<C;ue++){const Se=h+ue+W*pe,Ue=h+ue+W*(pe+1),Ge=h+(ue+1)+W*(pe+1),Ve=h+(ue+1)+W*pe;l.push(Se,Ue,Ve),l.push(Ue,Ge,Ve),k+=6}a.addGroup(d,k,w),d+=k,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(r){const e={};for(let t=0;t<r.length;t++){const n=Ur(r[t]);for(const i in n)e[i]=n[i]}return e}function Tp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Oh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Ap={clone:Ur,merge:Qt};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new R,du=new ae,pu=new ae;class rn extends Bh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,du,pu),t.subVectors(pu,du)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=-90,ur=1;class Pp extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(cr,ur,e,t);i.layers=this.layers,this.add(i);const s=new rn(cr,ur,e,t);s.layers=this.layers,this.add(s);const o=new rn(cr,ur,e,t);o.layers=this.layers,this.add(o);const a=new rn(cr,ur,e,t);a.layers=this.layers,this.add(a);const l=new rn(cr,ur,e,t);l.layers=this.layers,this.add(l);const c=new rn(cr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(u,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zh extends Xt{constructor(e=[],t=Pr,n,i,s,o,a,l,c,f){super(e,t,n,i,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ip extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hr(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:mi});s.uniforms.tEquirect.value=t;const o=new it(i,s),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Nn),new Pp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Ht extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mu=new R,gu=new nt,_u=new nt,Up=new R,vu=new Le,no=new R,Pa=new Ki,xu=new Le,Ia=new Is;class Np extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1&&(xu.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(xu),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;gu.fromBufferAttribute(i.attributes.skinIndex,e),_u.fromBufferAttribute(i.attributes.skinWeight,e),mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=_u.getComponent(s);if(o!==0){const a=gu.getComponent(s);vu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Up.copy(mu).applyMatrix4(vu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ol extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fp extends Xt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=fn,f=fn,u,h){super(null,o,a,l,c,f,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=new Le,Op=new Le;class fc{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Op;yu.multiplyMatrices(a,t[s]),yu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fp(t,e,e,Sn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ol),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const La=new R,Bp=new R,zp=new je;class Ai{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=La.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zp.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ki,kp=new ae(.5,.5),io=new R;class dc{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],v=s[13],x=s[14],T=s[15];if(i[0].setComponents(c-o,d-f,p-g,T-y).normalize(),i[1].setComponents(c+o,d+f,p+g,T+y).normalize(),i[2].setComponents(c+a,d+u,p+_,T+v).normalize(),i[3].setComponents(c-a,d-u,p-_,T-v).normalize(),n)i[4].setComponents(l,h,m,x).normalize(),i[5].setComponents(c-l,d-h,p-m,T-x).normalize();else if(i[4].setComponents(c-l,d-h,p-m,T-x).normalize(),t===On)i[5].setComponents(c+l,d+h,p+m,T+x).normalize();else if(t===Do)i[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=kp.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(io.x=i.normal.x>0?e.max.x:e.min.x,io.y=i.normal.y>0?e.max.y:e.min.y,io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pc extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new R,No=new R,Mu=new Le,Jr=new Is,ro=new Ki,Da=new R,Su=new R;class kh extends gt{constructor(e=new dt,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Uo.fromBufferAttribute(t,i-1),No.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uo.distanceTo(No);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;Mu.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(Mu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=f.getX(_),y=f.getX(_+1),v=so(this,e,Jr,l,p,y,_);v&&t.push(v)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(d),p=so(this,e,Jr,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=so(this,e,Jr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=so(this,e,Jr,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function so(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Uo.fromBufferAttribute(a,i),No.fromBufferAttribute(a,s),t.distanceSqToSegment(Uo,No,Da,Su)>n)return;Da.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Da);if(!(c<e.near||c>e.far))return{distance:c,point:Su.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class qo extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new Le,Bl=new Is,oo=new Ki,ao=new R;class mc extends gt{constructor(e=new dt,t=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(i),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;wu.copy(i).invert(),Bl.copy(e.ray).applyMatrix4(wu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ao.fromBufferAttribute(u,m),Eu(ao,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,_=d;g<_;g++)ao.fromBufferAttribute(u,g),Eu(ao,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Eu(r,e,t,n,i,s,o){const a=Bl.distanceSqToPoint(r);if(a<t){const l=new R;Bl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Vh extends Xt{constructor(e,t,n=ki,i,s,o,a=fn,l=fn,c,f=ps,u=1){if(f!==ps&&f!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hh extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gc extends dt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],f=t/2,u=Math.PI/2*e,h=t,d=2*u+h,g=n*2+s,_=i+1,m=new R,p=new R;for(let y=0;y<=g;y++){let v=0,x=0,T=0,b=0;if(y<=n){const w=y/n,M=w*Math.PI/2;x=-f-e*Math.cos(M),T=e*Math.sin(M),b=-e*Math.cos(M),v=w*u}else if(y<=n+s){const w=(y-n)/s;x=-f+w*t,T=e,b=0,v=u+w*h}else{const w=(y-n-s)/n,M=w*Math.PI/2;x=f+e*Math.sin(M),T=e*Math.cos(M),b=e*Math.sin(M),v=u+h+w*u}const C=Math.max(0,Math.min(1,v/d));let P=0;y===0?P=.5/i:y===g&&(P=-.5/i);for(let w=0;w<=i;w++){const M=w/i,I=M*Math.PI*2,N=Math.sin(I),U=Math.cos(I);p.x=-T*U,p.y=x,p.z=T*N,a.push(p.x,p.y,p.z),m.set(-T*U,b,T*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+P,C)}if(y>0){const w=(y-1)*_;for(let M=0;M<i;M++){const I=w+M,N=w+M+1,U=y*_+M,z=y*_+M+1;o.push(I,N,U),o.push(N,z,U)}}}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Yo extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new R,f=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ei extends dt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const f=[],u=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function y(){const x=new R,T=new R;let b=0;const C=(t-e)/n;for(let P=0;P<=s;P++){const w=[],M=P/s,I=M*(t-e)+e;for(let N=0;N<=i;N++){const U=N/i,z=U*l+a,W=Math.sin(z),V=Math.cos(z);T.x=I*W,T.y=-M*n+m,T.z=I*V,u.push(T.x,T.y,T.z),x.set(W,C,V).normalize(),h.push(x.x,x.y,x.z),d.push(U,1-M),w.push(g++)}_.push(w)}for(let P=0;P<i;P++)for(let w=0;w<s;w++){const M=_[w][P],I=_[w+1][P],N=_[w+1][P+1],U=_[w][P+1];(e>0||w!==0)&&(f.push(M,I,U),b+=3),(t>0||w!==s-1)&&(f.push(I,N,U),b+=3)}c.addGroup(p,b,0),p+=b}function v(x){const T=g,b=new ae,C=new R;let P=0;const w=x===!0?e:t,M=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*M,0),h.push(0,M,0),d.push(.5,.5),g++;const I=g;for(let N=0;N<=i;N++){const z=N/i*l+a,W=Math.cos(z),V=Math.sin(z);C.x=w*V,C.y=m*M,C.z=w*W,u.push(C.x,C.y,C.z),h.push(0,M,0),b.x=W*.5+.5,b.y=V*.5*M+.5,d.push(b.x,b.y),g++}for(let N=0;N<i;N++){const U=T+N,z=I+N;x===!0?f.push(z,z+1,U):f.push(z+1,z,U),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nr extends ei{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jo extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),f(),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(s.slice(),3)),this.setAttribute("uv",new Xe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new R,x=new R,T=new R;for(let b=0;b<t.length;b+=3)d(t[b+0],v),d(t[b+1],x),d(t[b+2],T),l(v,x,T,y)}function l(y,v,x,T){const b=T+1,C=[];for(let P=0;P<=b;P++){C[P]=[];const w=y.clone().lerp(x,P/b),M=v.clone().lerp(x,P/b),I=b-P;for(let N=0;N<=I;N++)N===0&&P===b?C[P][N]=w:C[P][N]=w.clone().lerp(M,N/I)}for(let P=0;P<b;P++)for(let w=0;w<2*(b-P)-1;w++){const M=Math.floor(w/2);w%2===0?(h(C[P][M+1]),h(C[P+1][M]),h(C[P][M])):(h(C[P][M+1]),h(C[P+1][M+1]),h(C[P+1][M]))}}function c(y){const v=new R;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(y),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function f(){const y=new R;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const x=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(x,1-T)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],x=o[y+2],T=o[y+4],b=Math.max(v,x,T),C=Math.min(v,x,T);b>.9&&C<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function d(y,v){const x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){const y=new R,v=new R,x=new R,T=new R,b=new ae,C=new ae,P=new ae;for(let w=0,M=0;w<s.length;w+=9,M+=6){y.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),b.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),T.copy(y).add(v).add(x).divideScalar(3);const I=m(T);_(b,M+0,y,I),_(C,M+2,v,I),_(P,M+4,x,I)}}function _(y,v,x,T){T<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.vertices,e.indices,e.radius,e.details)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const f=n[i],h=n[i+1]-f,d=(o-f)/h;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ae:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],s=[],o=[],a=new R,l=new Le;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const f=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);f<=c&&(c=f,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(et(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(et(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _c extends In{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*f-d*u+this.aX,c=h*u+d*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vp extends _c{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vc(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,u){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,d=(a-o)/f-(l-o)/(f+u)+(l-a)/u;h*=f,d*=f,i(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const lo=new R,Ua=new vc,Na=new vc,Fa=new vc;class Gh extends In{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=i[(a-1)%s]:(lo.subVectors(i[0],i[1]).add(i[0]),c=lo);const u=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?f=i[(a+2)%s]:(lo.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=lo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ua.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,g,_,m),Na.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,g,_,m),Fa.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,g,_,m)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),Na.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),Fa.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return n.set(Ua.calc(l),Na.calc(l),Fa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Hp(r,e){const t=1-r;return t*t*e}function Gp(r,e){return 2*(1-r)*r*e}function Wp(r,e){return r*r*e}function ss(r,e,t,n){return Hp(r,e)+Gp(r,t)+Wp(r,n)}function Xp(r,e){const t=1-r;return t*t*t*e}function qp(r,e){const t=1-r;return 3*t*t*r*e}function Yp(r,e){return 3*(1-r)*r*r*e}function jp(r,e){return r*r*r*e}function os(r,e,t,n,i){return Xp(r,e)+qp(r,t)+Yp(r,n)+jp(r,i)}class Wh extends In{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(os(e,i.x,s.x,o.x,a.x),os(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kp extends In{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(os(e,i.x,s.x,o.x,a.x),os(e,i.y,s.y,o.y,a.y),os(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xh extends In{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zp extends In{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qh extends In{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ss(e,i.x,s.x,o.x),ss(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yh extends In{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ss(e,i.x,s.x,o.x),ss(e,i.y,s.y,o.y),ss(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jh extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],f=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(bu(a,l.x,c.x,f.x,u.x),bu(a,l.y,c.y,f.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var Fo=Object.freeze({__proto__:null,ArcCurve:Vp,CatmullRomCurve3:Gh,CubicBezierCurve:Wh,CubicBezierCurve3:Kp,EllipseCurve:_c,LineCurve:Xh,LineCurve3:Zp,QuadraticBezierCurve:qh,QuadraticBezierCurve3:Yh,SplineCurve:jh});class Jp extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Fo[i.type]().fromJSON(i))}return this}}class Tu extends Jp{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Xh(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new qh(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Wh(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new jh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new _c(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vs extends Tu{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Tu().fromJSON(i))}return this}}function $p(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Kh(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=im(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let f=-1/0,u=-1/0;for(let h=t;h<i;h+=t){const d=r[h],g=r[h+1];d<a&&(a=d),g<l&&(l=g),d>f&&(f=d),g>u&&(u=g)}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return xs(s,o,t,a,l,c,0),o}function Kh(r,e,t,n,i){let s;if(i===pm(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Au(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Au(o/n|0,r[o],r[o+1],s);return s&&Fr(s,s.next)&&(Ms(s),s=s.next),s}function Hi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Fr(t,t.next)||Et(t.prev,t,t.next)===0)){if(Ms(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xs(r,e,t,n,i,s,o){if(!r)return;!o&&s&&lm(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?em(r,n,i,s):Qp(r)){e.push(l.i,r.i,c.i),Ms(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=tm(Hi(r),e),xs(r,e,t,n,i,s,2)):o===2&&nm(r,e,t,n,i,s):xs(Hi(r),e,t,n,i,s,1);break}}}function Qp(r){const e=r.prev,t=r,n=r.next;if(Et(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,f=Math.min(i,s,o),u=Math.min(a,l,c),h=Math.max(i,s,o),d=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=d&&Qr(i,a,s,l,o,c,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function em(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Et(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,f=i.y,u=s.y,h=o.y,d=Math.min(a,l,c),g=Math.min(f,u,h),_=Math.max(a,l,c),m=Math.max(f,u,h),p=zl(d,g,e,t,n),y=zl(_,m,e,t,n);let v=r.prevZ,x=r.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Qr(a,f,l,u,c,h,v.x,v.y)&&Et(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Qr(a,f,l,u,c,h,x.x,x.y)&&Et(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Qr(a,f,l,u,c,h,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Qr(a,f,l,u,c,h,x.x,x.y)&&Et(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tm(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Fr(n,i)&&Jh(n,t,t.next,i)&&ys(n,i)&&ys(i,n)&&(e.push(n.i,t.i,i.i),Ms(t),Ms(t.next),t=r=i),t=t.next}while(t!==r);return Hi(t)}function nm(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hm(o,a)){let l=$h(o,a);o=Hi(o,o.next),l=Hi(l,l.next),xs(o,e,t,n,i,s,0),xs(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function im(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Kh(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(um(c))}i.sort(rm);for(let s=0;s<i.length;s++)t=sm(i[s],t);return t}function rm(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function sm(r,e){const t=om(r,e);if(!t)return e;const n=$h(t,r);return Hi(n,n.next),Hi(t,t.next)}function om(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Fr(r,t))return t;do{if(Fr(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let f=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Zh(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);ys(t,r)&&(u<f||u===f&&(t.x>o.x||t.x===o.x&&am(o,t)))&&(o=t,f=u)}t=t.next}while(t!==a);return o}function am(r,e){return Et(r.prev,r,e.prev)<0&&Et(e.next,r,r.next)<0}function lm(r,e,t,n){let i=r;do i.z===0&&(i.z=zl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,cm(i)}function cm(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function zl(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function um(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Zh(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Qr(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Zh(r,e,t,n,i,s,o,a)}function hm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!fm(r,e)&&(ys(r,e)&&ys(e,r)&&dm(r,e)&&(Et(r.prev,r,e.prev)||Et(r,e.prev,e))||Fr(r,e)&&Et(r.prev,r,r.next)>0&&Et(e.prev,e,e.next)>0)}function Et(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Fr(r,e){return r.x===e.x&&r.y===e.y}function Jh(r,e,t,n){const i=uo(Et(r,e,t)),s=uo(Et(r,e,n)),o=uo(Et(t,n,r)),a=uo(Et(t,n,e));return!!(i!==s&&o!==a||i===0&&co(r,t,e)||s===0&&co(r,n,e)||o===0&&co(t,r,n)||a===0&&co(t,e,n))}function co(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function uo(r){return r>0?1:r<0?-1:0}function fm(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Jh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ys(r,e){return Et(r.prev,r,r.next)<0?Et(r,e,r.next)>=0&&Et(r,r.prev,e)>=0:Et(r,e,r.prev)<0||Et(r,r.next,e)<0}function dm(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function $h(r,e){const t=kl(r.i,r.x,r.y),n=kl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Au(r,e,t,n){const i=kl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ms(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function kl(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pm(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class mm{static triangulate(e,t,n=2){return $p(e,t,n)}}class Bn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Bn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Ru(e),Cu(n,e);let o=e.length;t.forEach(Ru);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Cu(n,t[l]);const a=mm.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ru(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Cu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Oo extends dt{constructor(e=new vs([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Xe(i,3)),this.setAttribute("uv",new Xe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:gm;let v,x=!1,T,b,C,P;p&&(v=p.getSpacedPoints(f),x=!0,h=!1,T=p.computeFrenetFrames(f,!1),b=new R,C=new R,P=new R),h||(m=0,d=0,g=0,_=0);const w=a.extractPoints(c);let M=w.shape;const I=w.holes;if(!Bn.isClockWise(M)){M=M.reverse();for(let te=0,J=I.length;te<J;te++){const K=I[te];Bn.isClockWise(K)&&(I[te]=K.reverse())}}function U(te){const K=10000000000000001e-36;let j=te[0];for(let he=1;he<=te.length;he++){const ie=he%te.length,fe=te[ie],qe=fe.x-j.x,We=fe.y-j.y,A=qe*qe+We*We,S=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(j.x),Math.abs(j.y)),B=K*S*S;if(A<=B){te.splice(ie,1),he--;continue}j=fe}}U(M),I.forEach(U);const z=I.length,W=M;for(let te=0;te<z;te++){const J=I[te];M=M.concat(J)}function V(te,J,K){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(J,K)}const Z=M.length;function k(te,J,K){let j,he,ie;const fe=te.x-J.x,qe=te.y-J.y,We=K.x-te.x,A=K.y-te.y,S=fe*fe+qe*qe,B=fe*A-qe*We;if(Math.abs(B)>Number.EPSILON){const X=Math.sqrt(S),ee=Math.sqrt(We*We+A*A),q=J.x-qe/X,Pe=J.y+fe/X,ce=K.x-A/ee,Ae=K.y+We/ee,Re=((ce-q)*A-(Ae-Pe)*We)/(fe*A-qe*We);j=q+fe*Re-te.x,he=Pe+qe*Re-te.y;const re=j*j+he*he;if(re<=2)return new ae(j,he);ie=Math.sqrt(re/2)}else{let X=!1;fe>Number.EPSILON?We>Number.EPSILON&&(X=!0):fe<-Number.EPSILON?We<-Number.EPSILON&&(X=!0):Math.sign(qe)===Math.sign(A)&&(X=!0),X?(j=-qe,he=fe,ie=Math.sqrt(S)):(j=fe,he=qe,ie=Math.sqrt(S/2))}return new ae(j/ie,he/ie)}const ne=[];for(let te=0,J=W.length,K=J-1,j=te+1;te<J;te++,K++,j++)K===J&&(K=0),j===J&&(j=0),ne[te]=k(W[te],W[K],W[j]);const pe=[];let ue,Se=ne.concat();for(let te=0,J=z;te<J;te++){const K=I[te];ue=[];for(let j=0,he=K.length,ie=he-1,fe=j+1;j<he;j++,ie++,fe++)ie===he&&(ie=0),fe===he&&(fe=0),ue[j]=k(K[j],K[ie],K[fe]);pe.push(ue),Se=Se.concat(ue)}let Ue;if(m===0)Ue=Bn.triangulateShape(W,I);else{const te=[],J=[];for(let K=0;K<m;K++){const j=K/m,he=d*Math.cos(j*Math.PI/2),ie=g*Math.sin(j*Math.PI/2)+_;for(let fe=0,qe=W.length;fe<qe;fe++){const We=V(W[fe],ne[fe],ie);Ie(We.x,We.y,-he),j===0&&te.push(We)}for(let fe=0,qe=z;fe<qe;fe++){const We=I[fe];ue=pe[fe];const A=[];for(let S=0,B=We.length;S<B;S++){const X=V(We[S],ue[S],ie);Ie(X.x,X.y,-he),j===0&&A.push(X)}j===0&&J.push(A)}}Ue=Bn.triangulateShape(te,J)}const Ge=Ue.length,Ve=g+_;for(let te=0;te<Z;te++){const J=h?V(M[te],Se[te],Ve):M[te];x?(C.copy(T.normals[0]).multiplyScalar(J.x),b.copy(T.binormals[0]).multiplyScalar(J.y),P.copy(v[0]).add(C).add(b),Ie(P.x,P.y,P.z)):Ie(J.x,J.y,0)}for(let te=1;te<=f;te++)for(let J=0;J<Z;J++){const K=h?V(M[J],Se[J],Ve):M[J];x?(C.copy(T.normals[te]).multiplyScalar(K.x),b.copy(T.binormals[te]).multiplyScalar(K.y),P.copy(v[te]).add(C).add(b),Ie(P.x,P.y,P.z)):Ie(K.x,K.y,u/f*te)}for(let te=m-1;te>=0;te--){const J=te/m,K=d*Math.cos(J*Math.PI/2),j=g*Math.sin(J*Math.PI/2)+_;for(let he=0,ie=W.length;he<ie;he++){const fe=V(W[he],ne[he],j);Ie(fe.x,fe.y,u+K)}for(let he=0,ie=I.length;he<ie;he++){const fe=I[he];ue=pe[he];for(let qe=0,We=fe.length;qe<We;qe++){const A=V(fe[qe],ue[qe],j);x?Ie(A.x,A.y+v[f-1].y,v[f-1].x+K):Ie(A.x,A.y,u+K)}}}Y(),Q();function Y(){const te=i.length/3;if(h){let J=0,K=Z*J;for(let j=0;j<Ge;j++){const he=Ue[j];be(he[2]+K,he[1]+K,he[0]+K)}J=f+m*2,K=Z*J;for(let j=0;j<Ge;j++){const he=Ue[j];be(he[0]+K,he[1]+K,he[2]+K)}}else{for(let J=0;J<Ge;J++){const K=Ue[J];be(K[2],K[1],K[0])}for(let J=0;J<Ge;J++){const K=Ue[J];be(K[0]+Z*f,K[1]+Z*f,K[2]+Z*f)}}n.addGroup(te,i.length/3-te,0)}function Q(){const te=i.length/3;let J=0;Me(W,J),J+=W.length;for(let K=0,j=I.length;K<j;K++){const he=I[K];Me(he,J),J+=he.length}n.addGroup(te,i.length/3-te,1)}function Me(te,J){let K=te.length;for(;--K>=0;){const j=K;let he=K-1;he<0&&(he=te.length-1);for(let ie=0,fe=f+m*2;ie<fe;ie++){const qe=Z*ie,We=Z*(ie+1),A=J+j+qe,S=J+he+qe,B=J+he+We,X=J+j+We;$e(A,S,B,X)}}}function Ie(te,J,K){l.push(te),l.push(J),l.push(K)}function be(te,J,K){at(te),at(J),at(K);const j=i.length/3,he=y.generateTopUV(n,i,j-3,j-2,j-1);L(he[0]),L(he[1]),L(he[2])}function $e(te,J,K,j){at(te),at(J),at(j),at(J),at(K),at(j);const he=i.length/3,ie=y.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);L(ie[0]),L(ie[1]),L(ie[3]),L(ie[1]),L(ie[2]),L(ie[3])}function at(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function L(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _m(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Fo[i.type]().fromJSON(i)),new Oo(n,e.options)}}const gm={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],f=e[i*3+1];return[new ae(s,o),new ae(a,l),new ae(c,f)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],f=e[n*3+1],u=e[n*3+2],h=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-u),new ae(h,1-g),new ae(_,1-p)]:[new ae(a,1-l),new ae(f,1-u),new ae(d,1-g),new ae(m,1-p)]}};function _m(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xc extends jo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xc(e.radius,e.detail)}}class yc extends jo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yc(e.radius,e.detail)}}class Gi extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,f=l+1,u=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const y=p*h-o;for(let v=0;v<c;v++){const x=v*u-s;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,x=y+c*(p+1),T=y+1+c*(p+1),b=y+1+c*p;d.push(v,x,b),d.push(x,T,b)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ko extends dt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],f=[];let u=e;const h=(t-e)/i,d=new R,g=new ae;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,f.push(g.x,g.y)}u+=h}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,v=y,x=y+n+1,T=y+n+2,b=y+1;a.push(v,x,b),a.push(x,T,b)}}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mc extends dt{constructor(e=new vs([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Xe(i,3)),this.setAttribute("normal",new Xe(s,3)),this.setAttribute("uv",new Xe(o,2));function c(f){const u=i.length/3,h=f.extractPoints(t);let d=h.shape;const g=h.holes;Bn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Bn.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Bn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],v=y[0]+u,x=y[1]+u,T=y[2]+u;n.push(v,x,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return vm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Mc(n,e.curveSegments)}}function vm(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Zo extends dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const f=[],u=new R,h=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const b=T/t;u.x=-e*Math.cos(i+b*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+b*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(b+x,1-v),y.push(c++)}f.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const v=f[p][y+1],x=f[p][y],T=f[p+1][y],b=f[p+1][y+1];(p!==0||o>0)&&d.push(v,x,b),(p!==n-1||l<Math.PI)&&d.push(x,T,b)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jo extends dt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],f=new R,u=new R,h=new R;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),h.subVectors(u,f).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Sc extends dt{constructor(e=new Yh(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new ae;let f=new R;const u=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function _(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),y(),p()}function m(v){f=e.getPointAt(v/t,f);const x=o.normals[v],T=o.binormals[v];for(let b=0;b<=i;b++){const C=b/i*Math.PI*2,P=Math.sin(C),w=-Math.cos(C);l.x=w*x.x+P*T.x,l.y=w*x.y+P*T.y,l.z=w*x.z+P*T.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+n*l.x,a.y=f.y+n*l.y,a.z=f.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let x=1;x<=i;x++){const T=(i+1)*(v-1)+(x-1),b=(i+1)*v+(x-1),C=(i+1)*v+x,P=(i+1)*(v-1)+x;g.push(T,b,P),g.push(b,C,P)}}function y(){for(let v=0;v<=t;v++)for(let x=0;x<=i;x++)c.x=v/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Sc(new Fo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bo extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ho extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ym extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mm extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Sm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Qh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class $o{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Em extends $o{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xr,endingEnd:xr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case yr:s=e,a=2*t-n;break;case Io:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yr:o=e,l=2*n-t;break;case Io:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let T=0;T!==a;++T)s[T]=p*o[f+T]+y*o[c+T]+v*o[l+T]+x*o[u+T];return s}}class ef extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(n-t)/(i-t),u=1-f;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*f;return s}}class bm extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Em(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Fl:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Sm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,h=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Fl;class Gr extends Ln{constructor(e,t,n){super(e,t,n)}}Gr.prototype.ValueTypeName="bool";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Po;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class tf extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}tf.prototype.ValueTypeName="color";class Ss extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}Ss.prototype.ValueTypeName="number";class Tm extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let f=c+a;c!==f;c+=4)wt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Or extends Ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Tm(this.times,this.values,this.getValueSize(),e)}}Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends Ln{constructor(e,t,n){super(e,t,n)}}Wr.prototype.ValueTypeName="string";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=Po;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}ws.prototype.ValueTypeName="vector";class Vl{constructor(e="",t=-1,n=[],i=oc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Rm(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ln.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const f=wm(l);l=Pu(l,1,f),c=Pu(c,1,f),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],f=c.name.match(s);if(f&&f.length>1){const u=f[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,d,g,_){if(d.length!==0){const m=[],p=[];Qh(d,m,p,g),m.length!==0&&_.push(new u(h,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const v=h[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Ss(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(ws,d+".position",h,"pos",i),n(Or,d+".quaternion",h,"rot",i),n(ws,d+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Am(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return tf;case"quaternion":return Or;case"bool":case"boolean":return Gr;case"string":return Wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Rm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Am(r.type);if(r.times===void 0){const t=[],n=[];Qh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const as={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Cm{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){a++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Pm=new Cm;class Wi{constructor(e){this.manager=e!==void 0?e:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Im extends Error{constructor(e,t){super(e),this.response=t}}class Lm extends Wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=as.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=Kn[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,C=f.length;b<C;b++){const P=f[b];P.onProgress&&P.onProgress(T)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Im(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{as.add(`file:${e}`,c);const f=Kn[e];delete Kn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const f=Kn[e];if(f===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hr=new WeakMap;class Dm extends Wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=as.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=hr.get(o);u===void 0&&(u=[],hr.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=gs("img");function l(){f(),t&&t(this);const u=hr.get(this)||[];for(let h=0;h<u.length;h++){const d=u[h];d.onLoad&&d.onLoad(this)}hr.delete(this),s.manager.itemEnd(e)}function c(u){f(),i&&i(u),as.remove(`image:${e}`);const h=hr.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(u)}hr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),as.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class nf extends Wi{constructor(e){super(e)}load(e,t,n,i){const s=new Xt,o=new Dm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ls extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Um extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new Le,Iu=new R,Lu=new R;class wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nm extends wc{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fm extends Ls{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Nm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Du=new Le,$r=new R,Ba=new R;class Om extends wc{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$r.setFromMatrixPosition(e.matrixWorld),n.position.copy($r),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),i.makeTranslation(-$r.x,-$r.y,-$r.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du,n.coordinateSystem,n.reversedDepth)}}class zo extends Ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Om}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qo extends Bh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bm extends wc{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rf extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Bm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zm extends Ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class km{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vm extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Gm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){wt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;wt.multiplyQuaternionsFlat(e,o,e,t,e,n),wt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Ec="\\[\\]\\.:\\/",Wm=new RegExp("["+Ec+"]","g"),bc="[^"+Ec+"]",Xm="[^"+Ec.replace("\\.","")+"]",qm=/((?:WC+[\/:])*)/.source.replace("WC",bc),Ym=/(WCOD+)?/.source.replace("WCOD",Xm),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Zm=new RegExp("^"+qm+Ym+jm+Km+"$"),Jm=["material","materials","bones","map"];class $m{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wm,"")}static parseTrackName(e){const t=Zm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Jm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=$m;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:xr,endingEnd:xr};for(let c=0;c!==o;++c){const f=s[c].createInterpolant(null);a[c]=f,f.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Pd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ld:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(o),c[f].accumulateAdditive(a);break;case oc:default:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(o),c[f].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Id;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ih){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=yr,i.endingEnd=yr):(e?i.endingStart=this.zeroSlopeAtStart?yr:xr:i.endingStart=Io,t?i.endingEnd=this.zeroSlopeAtEnd?yr:xr:i.endingEnd=Io)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const eg=new Float32Array(1);class tg extends ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let f=c[l];f===void 0&&(f={},c[l]=f);for(let u=0;u!==s;++u){const h=i[u],d=h.name;let g=f[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Gm(rt.create(n,d,_),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],f=e._byClipCacheIndex;c._byClipCacheIndex=f,l[f]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ef(new Float32Array(2),new Float32Array(2),1,eg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Vl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=oc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const f=new Qm(this,o,t,n);return this._bindAction(f,c),this._addInactiveAction(f,a,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Vl.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const f=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=f,t[f]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Uu=new Le;class ng{constructor(e,t,n=0,i=1/0){this.ray=new Is(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uu),this}intersectObject(e,t=!0,n=[]){return Hl(e,this,n,t),n.sort(Nu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Hl(e[i],this,n,t);return n.sort(Nu),n}}function Nu(r,e){return r.distance-e.distance}function Hl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Hl(s[o],e,t,!0)}}function Fu(r,e,t,n){const i=ig(n);switch(t){case Ah:return r*e;case Ch:return r*e/i.components*i.byteLength;case ic:return r*e/i.components*i.byteLength;case Ph:return r*e*2/i.components*i.byteLength;case rc:return r*e*2/i.components*i.byteLength;case Rh:return r*e*3/i.components*i.byteLength;case Sn:return r*e*4/i.components*i.byteLength;case sc:return r*e*4/i.components*i.byteLength;case So:case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eo:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cl:case hl:return Math.max(r,16)*Math.max(e,8)/4;case ll:case ul:return Math.max(r,8)*Math.max(e,8)/2;case fl:case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ll:case Dl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ul:case Nl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ig(r){switch(r){case Vn:case wh:return{byteLength:1,components:1};case fs:case Eh:case Ps:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case ki:case ec:case Fn:return{byteLength:4,components:1};case bh:case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);function sf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rg(r){const e=new WeakMap;function t(a,l){const c=a.array,f=a.usage,u=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const f=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){const g=u[h],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];r.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
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
#endif`,ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vg=`#ifdef USE_IRIDESCENCE
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
#endif`,xg=`#ifdef USE_BUMPMAP
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Jg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,i_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p_=`#if defined( USE_POINTS_UV )
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
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,__=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
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
#endif`,R_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,H_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,G_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,W_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
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
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,x0=`uniform vec3 diffuse;
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
}`,y0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,S0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
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
}`,A0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,P0=`#define TOON
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
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,L0=`uniform float size;
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,F0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:sg,alphahash_pars_fragment:og,alphamap_fragment:ag,alphamap_pars_fragment:lg,alphatest_fragment:cg,alphatest_pars_fragment:ug,aomap_fragment:hg,aomap_pars_fragment:fg,batching_pars_vertex:dg,batching_vertex:pg,begin_vertex:mg,beginnormal_vertex:gg,bsdfs:_g,iridescence_fragment:vg,bumpmap_pars_fragment:xg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:wg,color_fragment:Eg,color_pars_fragment:bg,color_pars_vertex:Tg,color_vertex:Ag,common:Rg,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Lg,emissivemap_fragment:Dg,emissivemap_pars_fragment:Ug,colorspace_fragment:Ng,colorspace_pars_fragment:Fg,envmap_fragment:Og,envmap_common_pars_fragment:Bg,envmap_pars_fragment:zg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:Jg,envmap_vertex:Vg,fog_vertex:Hg,fog_pars_vertex:Gg,fog_fragment:Wg,fog_pars_fragment:Xg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Yg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Kg,lights_pars_begin:Zg,lights_toon_fragment:$g,lights_toon_pars_fragment:Qg,lights_phong_fragment:e_,lights_phong_pars_fragment:t_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:r_,lights_fragment_maps:s_,lights_fragment_end:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:u_,map_fragment:h_,map_pars_fragment:f_,map_particle_fragment:d_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphinstance_vertex:__,morphcolor_vertex:v_,morphnormal_vertex:x_,morphtarget_pars_vertex:y_,morphtarget_vertex:M_,normal_fragment_begin:S_,normal_fragment_maps:w_,normal_pars_fragment:E_,normal_pars_vertex:b_,normal_vertex:T_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:R_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:I_,opaque_fragment:L_,packing:D_,premultiplied_alpha_fragment:U_,project_vertex:N_,dithering_fragment:F_,dithering_pars_fragment:O_,roughnessmap_fragment:B_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:V_,shadowmap_vertex:H_,shadowmask_pars_fragment:G_,skinbase_vertex:W_,skinning_pars_vertex:X_,skinning_vertex:q_,skinnormal_vertex:Y_,specularmap_fragment:j_,specularmap_pars_fragment:K_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:$_,transmission_pars_fragment:Q_,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:r0,background_frag:s0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:u0,depth_frag:h0,distanceRGBA_vert:f0,distanceRGBA_frag:d0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:v0,meshbasic_frag:x0,meshlambert_vert:y0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:w0,meshnormal_vert:E0,meshnormal_frag:b0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:I0,points_vert:L0,points_frag:D0,shadow_vert:U0,shadow_frag:N0,sprite_vert:F0,sprite_frag:O0},me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Un={basic:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Qt([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Qt([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Qt([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Qt([me.common,me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Qt([me.lights,me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Un.physical={uniforms:Qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const po={r:0,b:0,g:0},bi=new Ft,B0=new Le;function z0(r,e,t,n,i,s,o){const a=new Fe(0);let l=s===!0?0:1,c,f,u=null,h=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const T=g(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Wo)?(f===void 0&&(f=new it(new Hr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ur(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),bi.copy(x.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(bi)),f.material.toneMapped=Je.getTransfer(T.colorSpace)!==ct,(u!==T||h!==T.version||d!==r.toneMapping)&&(f.material.needsUpdate=!0,u=T,h=T.version,d=r.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new it(new Gi(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ur(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||h!==T.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,h=T.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(po,Oh(r)),n.buffers.color.setClear(po.r,po.g,po.b,x,o)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:y}}function k0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(M,I,N,U,z){let W=!1;const V=u(U,N,I);s!==V&&(s=V,c(s.object)),W=d(M,U,N,z),W&&g(M,U,N,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(M,I,N,U),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function f(M){return r.deleteVertexArray(M)}function u(M,I,N){const U=N.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let W=z[I.id];W===void 0&&(W={},z[I.id]=W);let V=W[U];return V===void 0&&(V=h(l()),W[U]=V),V}function h(M){const I=[],N=[],U=[];for(let z=0;z<t;z++)I[z]=0,N[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,I,N,U){const z=s.attributes,W=I.attributes;let V=0;const Z=N.getAttributes();for(const k in Z)if(Z[k].location>=0){const pe=z[k];let ue=W[k];if(ue===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),pe===void 0||pe.attribute!==ue||ue&&pe.data!==ue.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function g(M,I,N,U){const z={},W=I.attributes;let V=0;const Z=N.getAttributes();for(const k in Z)if(Z[k].location>=0){let pe=W[k];pe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const ue={};ue.attribute=pe,pe&&pe.data&&(ue.data=pe.data),z[k]=ue,V++}s.attributes=z,s.attributesNum=V,s.index=U}function _(){const M=s.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const N=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;N[M]=1,U[M]===0&&(r.enableVertexAttribArray(M),U[M]=1),z[M]!==I&&(r.vertexAttribDivisor(M,I),z[M]=I)}function y(){const M=s.newAttributes,I=s.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==M[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function v(M,I,N,U,z,W,V){V===!0?r.vertexAttribIPointer(M,I,N,z,W):r.vertexAttribPointer(M,I,N,U,z,W)}function x(M,I,N,U){_();const z=U.attributes,W=N.getAttributes(),V=I.defaultAttributeValues;for(const Z in W){const k=W[Z];if(k.location>=0){let ne=z[Z];if(ne===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const pe=ne.normalized,ue=ne.itemSize,Se=e.get(ne);if(Se===void 0)continue;const Ue=Se.buffer,Ge=Se.type,Ve=Se.bytesPerElement,Y=Ge===r.INT||Ge===r.UNSIGNED_INT||ne.gpuType===ec;if(ne.isInterleavedBufferAttribute){const Q=ne.data,Me=Q.stride,Ie=ne.offset;if(Q.isInstancedInterleavedBuffer){for(let be=0;be<k.locationSize;be++)p(k.location+be,Q.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<k.locationSize;be++)m(k.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let be=0;be<k.locationSize;be++)v(k.location+be,ue/k.locationSize,Ge,pe,Me*Ve,(Ie+ue/k.locationSize*be)*Ve,Y)}else{if(ne.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)p(k.location+Q,ne.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Q=0;Q<k.locationSize;Q++)v(k.location+Q,ue/k.locationSize,Ge,pe,ue*Ve,ue/k.locationSize*Q*Ve,Y)}}else if(V!==void 0){const pe=V[Z];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(k.location,pe);break;case 3:r.vertexAttrib3fv(k.location,pe);break;case 4:r.vertexAttrib4fv(k.location,pe);break;default:r.vertexAttrib1fv(k.location,pe)}}}}y()}function T(){P();for(const M in n){const I=n[M];for(const N in I){const U=I[N];for(const z in U)f(U[z].object),delete U[z];delete I[N]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const N in I){const U=I[N];for(const z in U)f(U[z].object),delete U[z];delete I[N]}delete n[M.id]}function C(M){for(const I in n){const N=n[I];if(N[M.id]===void 0)continue;const U=N[M.id];for(const z in U)f(U[z].object),delete U[z];delete N[M.id]}}function P(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function V0(r,e,t){let n;function i(c){n=c}function s(c,f){r.drawArrays(n,c,f),t.update(f,n,1)}function o(c,f,u){u!==0&&(r.drawArraysInstanced(n,c,f,u),t.update(f,n,u))}function a(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let d=0;for(let g=0;g<u;g++)d+=f[g];t.update(d,n,1)}function l(c,f,u,h){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],f[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=f[_]*h[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function H0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Sn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Vn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!P)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function G0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ai,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||n!==0||i;return i=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?f(null):c();else{const y=s?0:n,v=y*4;let x=p.clippingState||null;l.value=x,x=f(g,h,v,d);for(let T=0;T!==v;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function W0(r){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=Pr:a===ol&&(o.mapping=Ir),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===ol)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ip(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Mr=4,Ou=[.125,.215,.35,.446,.526,.582],Ii=20,za=new Qo,Bu=new Fe;let ka=null,Va=0,Ha=0,Ga=!1;const Ri=(1+Math.sqrt(5))/2,fr=1/Ri,zu=[new R(-Ri,fr,0),new R(Ri,fr,0),new R(-fr,0,Ri),new R(fr,0,Ri),new R(0,Ri,-fr),new R(0,Ri,fr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],X0=new R;class ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=X0}=s;ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Va,Ha),this._renderer.xr.enabled=Ga,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ps,format:Sn,colorSpace:Lr,depthBuffer:!1},i=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(s)),this._blurMaterial=Y0(s,e,t)}return i}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i,s){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Bu),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new dn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new it(new Hr,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Bu),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const T=this._cubeSize;mo(i,x*T,v>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Pr||e.mapping===Ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zu[(i-s-1)%zu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new it(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),_=s/g,m=isFinite(s)?1+Math.floor(f*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const p=[];let y=0;for(let C=0;C<Ii;++C){const P=C/_,w=Math.exp(-P*P/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const x=this._sizeLods[i],T=3*x*(i>v-Mr?i-v+Mr:0),b=4*(this._cubeSize-x);mo(t,T,b,3*x,2*x),l.setRenderTarget(t),l.render(u,za)}}function q0(r){const e=[],t=[],n=[];let i=r;const s=r-Mr+1+Ou.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Mr?l=Ou[o-r+Mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,P=b>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(w,_*g*b),v.set(h,m*g*b);const M=[b,b,b,b,b,b];x.set(M,p*g*b)}const T=new dt;T.setAttribute("position",new pn(y,_)),T.setAttribute("uv",new pn(v,m)),T.setAttribute("faceIndex",new pn(x,p)),e.push(T),i>Mr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vu(r,e,t){const n=new Vi(r,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Y0(r,e,t){const n=new Float32Array(Ii),i=new R(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hu(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Gu(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Co||l===ol,f=l===Pr||l===Ir;if(c||f){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ku(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||f&&d&&i(d)?(t===null&&(t=new ku(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function K0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Z0(r,e,t,n){const i={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(u){const h=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const T=y[v+0],b=y[v+1],C=y[v+2];h.push(T,b,b,C,C,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const T=v+0,b=v+1,C=v+2;h.push(T,b,b,C,C,T)}}else return;const m=new(Dh(h)?Fh:uc)(h,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function f(u){const h=s.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function J0(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function f(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function $0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Q0(r,e,t){const n=new WeakMap,i=new nt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const b=new Float32Array(x*T*4*u),C=new Uh(b,x,T,u);C.type=Fn,C.needsUpdate=!0;const P=v*4;for(let M=0;M<u;M++){const I=m[M],N=p[M],U=y[M],z=x*T*4*M;for(let W=0;W<I.count;W++){const V=W*P;d===!0&&(i.fromBufferAttribute(I,W),b[z+V+0]=i.x,b[z+V+1]=i.y,b[z+V+2]=i.z,b[z+V+3]=0),g===!0&&(i.fromBufferAttribute(N,W),b[z+V+4]=i.x,b[z+V+5]=i.y,b[z+V+6]=i.z,b[z+V+7]=0),_===!0&&(i.fromBufferAttribute(U,W),b[z+V+8]=i.x,b[z+V+9]=i.y,b[z+V+10]=i.z,b[z+V+11]=U.itemSize===4?i.w:1)}}h={count:u,texture:C,size:new ae(x,T)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function ev(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,u=e.get(l,f);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const of=new Xt,Wu=new Vh(1,1),af=new Uh,lf=new pp,cf=new zh,Xu=[],qu=[],Yu=new Float32Array(16),ju=new Float32Array(9),Ku=new Float32Array(4);function Xr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Xu[i];if(s===void 0&&(s=new Float32Array(i),Xu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ea(r,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),Bt(t,e)}}function iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),Bt(t,e)}}function rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),Bt(t,e)}}function sv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Ku.set(n),r.uniformMatrix2fv(this.addr,!1,Ku),Bt(t,n)}}function ov(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;ju.set(n),r.uniformMatrix3fv(this.addr,!1,ju),Bt(t,n)}}function av(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Yu.set(n),r.uniformMatrix4fv(this.addr,!1,Yu),Bt(t,n)}}function lv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),Bt(t,e)}}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),Bt(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),Bt(t,e)}}function fv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),Bt(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),Bt(t,e)}}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),Bt(t,e)}}function gv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wu.compareFunction=Lh,s=Wu):s=of,t.setTexture2D(e||s,i)}function _v(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lf,i)}function vv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cf,i)}function xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||af,i)}function yv(r){switch(r){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return sv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return uv;case 35669:case 35673:return hv;case 5125:return fv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return xv}}function Mv(r,e){r.uniform1fv(this.addr,e)}function Sv(r,e){const t=Xr(e,this.size,2);r.uniform2fv(this.addr,t)}function wv(r,e){const t=Xr(e,this.size,3);r.uniform3fv(this.addr,t)}function Ev(r,e){const t=Xr(e,this.size,4);r.uniform4fv(this.addr,t)}function bv(r,e){const t=Xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tv(r,e){const t=Xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Av(r,e){const t=Xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rv(r,e){r.uniform1iv(this.addr,e)}function Cv(r,e){r.uniform2iv(this.addr,e)}function Pv(r,e){r.uniform3iv(this.addr,e)}function Iv(r,e){r.uniform4iv(this.addr,e)}function Lv(r,e){r.uniform1uiv(this.addr,e)}function Dv(r,e){r.uniform2uiv(this.addr,e)}function Uv(r,e){r.uniform3uiv(this.addr,e)}function Nv(r,e){r.uniform4uiv(this.addr,e)}function Fv(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||of,s[o])}function Ov(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lf,s[o])}function Bv(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||cf,s[o])}function zv(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||af,s[o])}function kv(r){switch(r){case 5126:return Mv;case 35664:return Sv;case 35665:return wv;case 35666:return Ev;case 35674:return bv;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}class Vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yv(t.type)}}class Hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kv(t.type)}}class Gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Zu(r,e){r.seq.push(e),r.map[e.id]=e}function Wv(r,e,t){const n=r.name,i=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),o=Wa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zu(t,c===void 0?new Vv(a,r,e):new Hv(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Gv(a),Zu(t,u)),t=u}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Wv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ju(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Xv=37297;let qv=0;function Yv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $u=new je;function jv(r){Je._getMatrix($u,Je.workingColorSpace,r);const e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(r)){case Lo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Yv(r.getShaderSource(e),a)}else return s}function Kv(r,e){const t=jv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zv(r,e){let t;switch(e){case Sd:t="Linear";break;case wd:t="Reinhard";break;case Ed:t="Cineon";break;case Mh:t="ACESFilmic";break;case Td:t="AgX";break;case Ad:t="Neutral";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const go=new R;function Jv(){Je.getLuminanceCoefficients(go);const r=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function Qv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ex(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function es(r){return r!==""}function eh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(r){return r.replace(tx,ix)}const nx=new Map;function ix(r,e){let t=Ze[e];if(t===void 0){const n=nx.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(r){return r.replace(rx,sx)}function sx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ih(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ir&&(e="ENVMAP_MODE_REFRACTION"),e}function cx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Go:e="ENVMAP_BLENDING_MULTIPLY";break;case yd:e="ENVMAP_BLENDING_MIX";break;case Md:e="ENVMAP_BLENDING_ADD";break}return e}function ux(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ox(t),c=ax(t),f=lx(t),u=cx(t),h=ux(t),d=$v(t),g=Qv(s),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==gi?Zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Kv("linearToOutputTexel",t.outputColorSpace),Jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),o=Gl(o),o=eh(o,t),o=th(o,t),a=Gl(a),a=eh(a,t),a=th(a,t),o=nh(o),a=nh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,T=Ju(i,i.VERTEX_SHADER,v),b=Ju(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(T)||"",z=i.getShaderInfoLog(b)||"",W=N.trim(),V=U.trim(),Z=z.trim();let k=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,b);else{const pe=Qu(i,T,"vertex"),ue=Qu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+pe+`
`+ue)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||Z==="")&&(ne=!1);ne&&(I.diagnostics={runnable:k,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(T),i.deleteShader(b),P=new To(i,_),w=ex(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Xv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let fx=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new px(e),t.set(e,n)),n}}class px{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}}function mx(r,e,t,n,i,s,o){const a=new cc,l=new dx,c=new Set,f=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,I,N,U){const z=N.fog,W=U.geometry,V=w.isMeshStandardMaterial?N.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),k=Z&&Z.mapping===Wo?Z.image.height:null,ne=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=pe!==void 0?pe.length:0;let Se=0;W.morphAttributes.position!==void 0&&(Se=1),W.morphAttributes.normal!==void 0&&(Se=2),W.morphAttributes.color!==void 0&&(Se=3);let Ue,Ge,Ve,Y;if(ne){const ot=Un[ne];Ue=ot.vertexShader,Ge=ot.fragmentShader}else Ue=w.vertexShader,Ge=w.fragmentShader,l.update(w),Ve=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const Q=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,be=U.isBatchedMesh===!0,$e=!!w.map,at=!!w.matcap,L=!!Z,te=!!w.aoMap,J=!!w.lightMap,K=!!w.bumpMap,j=!!w.normalMap,he=!!w.displacementMap,ie=!!w.emissiveMap,fe=!!w.metalnessMap,qe=!!w.roughnessMap,We=w.anisotropy>0,A=w.clearcoat>0,S=w.dispersion>0,B=w.iridescence>0,X=w.sheen>0,ee=w.transmission>0,q=We&&!!w.anisotropyMap,Pe=A&&!!w.clearcoatMap,ce=A&&!!w.clearcoatNormalMap,Ae=A&&!!w.clearcoatRoughnessMap,Re=B&&!!w.iridescenceMap,re=B&&!!w.iridescenceThicknessMap,ve=X&&!!w.sheenColorMap,ke=X&&!!w.sheenRoughnessMap,De=!!w.specularMap,ge=!!w.specularColorMap,Ke=!!w.specularIntensityMap,D=ee&&!!w.transmissionMap,le=ee&&!!w.thicknessMap,de=!!w.gradientMap,Ee=!!w.alphaMap,se=w.alphaTest>0,$=!!w.alphaHash,Ce=!!w.extensions;let Ye=gi;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ye=r.toneMapping);const pt={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:Ue,fragmentShader:Ge,defines:w.defines,customVertexShaderID:Ve,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:be,batchingColor:be&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Lr,alphaToCoverage:!!w.alphaToCoverage,map:$e,matcap:at,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:k,aoMap:te,lightMap:J,bumpMap:K,normalMap:j,displacementMap:h&&he,emissiveMap:ie,normalMapObjectSpace:j&&w.normalMapType===Nd,normalMapTangentSpace:j&&w.normalMapType===Xo,metalnessMap:fe,roughnessMap:qe,anisotropy:We,anisotropyMap:q,clearcoat:A,clearcoatMap:Pe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:B,iridescenceMap:Re,iridescenceThicknessMap:re,sheen:X,sheenColorMap:ve,sheenRoughnessMap:ke,specularMap:De,specularColorMap:ge,specularIntensityMap:Ke,transmission:ee,transmissionMap:D,thicknessMap:le,gradientMap:de,opaque:w.transparent===!1&&w.blending===Er&&w.alphaToCoverage===!1,alphaMap:Ee,alphaTest:se,alphaHash:$,combine:w.combine,mapUv:$e&&_(w.map.channel),aoMapUv:te&&_(w.aoMap.channel),lightMapUv:J&&_(w.lightMap.channel),bumpMapUv:K&&_(w.bumpMap.channel),normalMapUv:j&&_(w.normalMap.channel),displacementMapUv:he&&_(w.displacementMap.channel),emissiveMapUv:ie&&_(w.emissiveMap.channel),metalnessMapUv:fe&&_(w.metalnessMap.channel),roughnessMapUv:qe&&_(w.roughnessMap.channel),anisotropyMapUv:q&&_(w.anisotropyMap.channel),clearcoatMapUv:Pe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(w.sheenRoughnessMap.channel),specularMapUv:De&&_(w.specularMap.channel),specularColorMapUv:ge&&_(w.specularColorMap.channel),specularIntensityMapUv:Ke&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:le&&_(w.thicknessMap.channel),alphaMapUv:Ee&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(j||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&($e||Ee),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ye,decodeVideoTexture:$e&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:ie&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gt,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(M,w),v(M,w),M.push(r.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let I;if(M){const N=Un[M];I=Ap.clone(N.uniforms)}else I=w.uniforms;return I}function T(w,M){let I;for(let N=0,U=f.length;N<U;N++){const z=f[N];if(z.cacheKey===M){I=z,++I.usedTimes;break}}return I===void 0&&(I=new hx(r,M,w,s),f.push(I)),I}function b(w){if(--w.usedTimes===0){const M=f.indexOf(w);f[M]=f[f.length-1],f.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:C,programs:f,dispose:P}}function gx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function _x(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,h,d,g,_,m){const p=o(u,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,h,d,g,_,m){const p=o(u,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||_x),n.length>1&&n.sort(h||rh),i.length>1&&i.sort(h||rh)}function f(){for(let u=e,h=r.length;u<h;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:f,sort:c}}function vx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new sh,r.set(n,[o])):i>=s.length?(o=new sh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Fe};break;case"SpotLight":t={position:new R,direction:new R,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function yx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Mx=0;function Sx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wx(r){const e=new xx,t=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,s=new Le,o=new Le;function a(c){let f=0,u=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,T=0,b=0,C=0;c.sort(Sx);for(let w=0,M=c.length;w<M;w++){const I=c[w],N=I.color,U=I.intensity,z=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=N.r*U,u+=N.g*U,h+=N.b*U;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],U);C++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,k=t.get(I);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=I.shadow.matrix,y++}n.directional[d]=V,d++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(N).multiplyScalar(U),V.distance=z,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;const Z=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,Z.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[_]=Z.matrix,I.castShadow){const k=t.get(I);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=W,x++}_++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(N).multiplyScalar(U),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const Z=I.shadow,k=t.get(I);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=V,g++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(U),V.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=T,P.numLightProbes=C,n.version=Mx++)}function l(c,f){let u=0,h=0,d=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function oh(r){const e=new wx(r),t=[],n=[];function i(f){c.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ex(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new oh(r),e.set(i,[a])):s>=o.length?(a=new oh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ax(r,e,t){let n=new dc;const i=new ae,s=new ae,o=new nt,a=new ym({depthPacking:Ud}),l=new Mm,c={},f=t.maxTextureSize,u={[_i]:on,[on]:_i,[Gt]:Gt},h=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:bx,fragmentShader:Tx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(b,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(mi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==Zn&&this.type===Zn,z=p===Zn&&this.type!==Zn;for(let W=0,V=b.length;W<V;W++){const Z=b[W],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ne=k.getFrameExtents();if(i.multiply(ne),s.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/ne.x),i.x=s.x*ne.x,k.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/ne.y),i.y=s.y*ne.y,k.mapSize.y=s.y)),k.map===null||U===!0||z===!0){const ue=this.type!==Zn?{minFilter:fn,magFilter:fn}:{};k.map!==null&&k.map.dispose(),k.map=new Vi(i.x,i.y,ue),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const pe=k.getViewportCount();for(let ue=0;ue<pe;ue++){const Se=k.getViewport(ue);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),N.viewport(o),k.updateMatrices(Z,ue),n=k.getFrustum(),x(C,P,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Zn&&y(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,M,I)};function y(b,C){const P=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vi(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(C,null,P,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(C,null,P,d,_,null)}function v(b,C,P,w){let M=null;const I=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=M.uuid,U=C.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let W=z[U];W===void 0&&(W=M.clone(),z[U]=W,C.addEventListener("dispose",T)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Zn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=r.properties.get(M);N.light=P}return M}function x(b,C,P,w,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const U=e.update(b),z=b.material;if(Array.isArray(z)){const W=U.groups;for(let V=0,Z=W.length;V<Z;V++){const k=W[V],ne=z[k.materialIndex];if(ne&&ne.visible){const pe=v(b,ne,w,M);b.onBeforeShadow(r,b,C,P,U,pe,k),r.renderBufferDirect(P,null,U,pe,b,k),b.onAfterShadow(r,b,C,P,U,pe,k)}}}else if(z.visible){const W=v(b,z,w,M);b.onBeforeShadow(r,b,C,P,U,W,null),r.renderBufferDirect(P,null,U,W,b,null),b.onAfterShadow(r,b,C,P,U,W,null)}}const N=b.children;for(let U=0,z=N.length;U<z;U++)x(N[U],C,P,w,M)}function T(b){b.target.removeEventListener("dispose",T);for(const P in c){const w=c[P],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Rx={[el]:tl,[nl]:Ro,[il]:sl,[Cr]:rl,[tl]:el,[Ro]:nl,[sl]:il,[rl]:Cr};function Cx(r,e){function t(){let D=!1;const le=new nt;let de=null;const Ee=new nt(0,0,0,0);return{setMask:function(se){de!==se&&!D&&(r.colorMask(se,se,se,se),de=se)},setLocked:function(se){D=se},setClear:function(se,$,Ce,Ye,pt){pt===!0&&(se*=Ye,$*=Ye,Ce*=Ye),le.set(se,$,Ce,Ye),Ee.equals(le)===!1&&(r.clearColor(se,$,Ce,Ye),Ee.copy(le))},reset:function(){D=!1,de=null,Ee.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,de=null,Ee=null,se=null;return{setReversed:function($){if(le!==$){const Ce=e.get("EXT_clip_control");$?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=$;const Ye=se;se=null,this.setClear(Ye)}},getReversed:function(){return le},setTest:function($){$?Q(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function($){de!==$&&!D&&(r.depthMask($),de=$)},setFunc:function($){if(le&&($=Rx[$]),Ee!==$){switch($){case el:r.depthFunc(r.NEVER);break;case tl:r.depthFunc(r.ALWAYS);break;case nl:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case il:r.depthFunc(r.EQUAL);break;case rl:r.depthFunc(r.GEQUAL);break;case Ro:r.depthFunc(r.GREATER);break;case sl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=$}},setLocked:function($){D=$},setClear:function($){se!==$&&(le&&($=1-$),r.clearDepth($),se=$)},reset:function(){D=!1,de=null,Ee=null,se=null,le=!1}}}function i(){let D=!1,le=null,de=null,Ee=null,se=null,$=null,Ce=null,Ye=null,pt=null;return{setTest:function(ot){D||(ot?Q(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(ot){le!==ot&&!D&&(r.stencilMask(ot),le=ot)},setFunc:function(ot,Gn,Dn){(de!==ot||Ee!==Gn||se!==Dn)&&(r.stencilFunc(ot,Gn,Dn),de=ot,Ee=Gn,se=Dn)},setOp:function(ot,Gn,Dn){($!==ot||Ce!==Gn||Ye!==Dn)&&(r.stencilOp(ot,Gn,Dn),$=ot,Ce=Gn,Ye=Dn)},setLocked:function(ot){D=ot},setClear:function(ot){pt!==ot&&(r.clearStencil(ot),pt=ot)},reset:function(){D=!1,le=null,de=null,Ee=null,se=null,$=null,Ce=null,Ye=null,pt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,T=null,b=null,C=new Fe(0,0,0),P=0,w=!1,M=null,I=null,N=null,U=null,z=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Z>=2);let ne=null,pe={};const ue=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Ue=new nt().fromArray(ue),Ge=new nt().fromArray(Se);function Ve(D,le,de,Ee){const se=new Uint8Array(4),$=r.createTexture();r.bindTexture(D,$),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<de;Ce++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(le+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return $}const Y={};Y[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(Cr),K(!1),j(Wc),Q(r.CULL_FACE),te(mi);function Q(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function Me(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function Ie(D,le){return u[D]!==le?(r.bindFramebuffer(D,le),u[D]=le,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=le),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=le),!0):!1}function be(D,le){let de=d,Ee=!1;if(D){de=h.get(le),de===void 0&&(de=[],h.set(le,de));const se=D.textures;if(de.length!==se.length||de[0]!==r.COLOR_ATTACHMENT0){for(let $=0,Ce=se.length;$<Ce;$++)de[$]=r.COLOR_ATTACHMENT0+$;de.length=se.length,Ee=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(de)}function $e(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const at={[Pi]:r.FUNC_ADD,[id]:r.FUNC_SUBTRACT,[rd]:r.FUNC_REVERSE_SUBTRACT};at[sd]=r.MIN,at[od]=r.MAX;const L={[ad]:r.ZERO,[ld]:r.ONE,[cd]:r.SRC_COLOR,[$a]:r.SRC_ALPHA,[md]:r.SRC_ALPHA_SATURATE,[dd]:r.DST_COLOR,[hd]:r.DST_ALPHA,[ud]:r.ONE_MINUS_SRC_COLOR,[Qa]:r.ONE_MINUS_SRC_ALPHA,[pd]:r.ONE_MINUS_DST_COLOR,[fd]:r.ONE_MINUS_DST_ALPHA,[gd]:r.CONSTANT_COLOR,[_d]:r.ONE_MINUS_CONSTANT_COLOR,[vd]:r.CONSTANT_ALPHA,[xd]:r.ONE_MINUS_CONSTANT_ALPHA};function te(D,le,de,Ee,se,$,Ce,Ye,pt,ot){if(D===mi){_===!0&&(Me(r.BLEND),_=!1);return}if(_===!1&&(Q(r.BLEND),_=!0),D!==nd){if(D!==m||ot!==w){if((p!==Pi||x!==Pi)&&(r.blendEquation(r.FUNC_ADD),p=Pi,x=Pi),ot)switch(D){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zn:r.blendFunc(r.ONE,r.ONE);break;case Xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,T=null,b=null,C.set(0,0,0),P=0,m=D,w=ot}return}se=se||le,$=$||de,Ce=Ce||Ee,(le!==p||se!==x)&&(r.blendEquationSeparate(at[le],at[se]),p=le,x=se),(de!==y||Ee!==v||$!==T||Ce!==b)&&(r.blendFuncSeparate(L[de],L[Ee],L[$],L[Ce]),y=de,v=Ee,T=$,b=Ce),(Ye.equals(C)===!1||pt!==P)&&(r.blendColor(Ye.r,Ye.g,Ye.b,pt),C.copy(Ye),P=pt),m=D,w=!1}function J(D,le){D.side===Gt?Me(r.CULL_FACE):Q(r.CULL_FACE);let de=D.side===on;le&&(de=!de),K(de),D.blending===Er&&D.transparent===!1?te(mi):te(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Ee=D.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function j(D){D!==ed?(Q(r.CULL_FACE),D!==I&&(D===Wc?r.cullFace(r.BACK):D===td?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),I=D}function he(D){D!==N&&(V&&r.lineWidth(D),N=D)}function ie(D,le,de){D?(Q(r.POLYGON_OFFSET_FILL),(U!==le||z!==de)&&(r.polygonOffset(le,de),U=le,z=de)):Me(r.POLYGON_OFFSET_FILL)}function fe(D){D?Q(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function qe(D){D===void 0&&(D=r.TEXTURE0+W-1),ne!==D&&(r.activeTexture(D),ne=D)}function We(D,le,de){de===void 0&&(ne===null?de=r.TEXTURE0+W-1:de=ne);let Ee=pe[de];Ee===void 0&&(Ee={type:void 0,texture:void 0},pe[de]=Ee),(Ee.type!==D||Ee.texture!==le)&&(ne!==de&&(r.activeTexture(de),ne=de),r.bindTexture(D,le||Y[D]),Ee.type=D,Ee.texture=le)}function A(){const D=pe[ne];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){Ue.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function ke(D){Ge.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function De(D,le){let de=c.get(le);de===void 0&&(de=new WeakMap,c.set(le,de));let Ee=de.get(D);Ee===void 0&&(Ee=r.getUniformBlockIndex(le,D.name),de.set(D,Ee))}function ge(D,le){const Ee=c.get(le).get(D);l.get(le)!==Ee&&(r.uniformBlockBinding(le,Ee,D.__bindingPointIndex),l.set(le,Ee))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ne=null,pe={},u={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,T=null,b=null,C=new Fe(0,0,0),P=0,w=!1,M=null,I=null,N=null,U=null,z=null,Ue.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:Me,bindFramebuffer:Ie,drawBuffers:be,useProgram:$e,setBlending:te,setMaterial:J,setFlipSided:K,setCullFace:j,setLineWidth:he,setPolygonOffset:ie,setScissorTest:fe,activeTexture:qe,bindTexture:We,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Re,texImage3D:re,updateUBOMapping:De,uniformBlockBinding:ge,texStorage2D:ce,texStorage3D:Ae,texSubImage2D:X,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Pe,scissor:ve,viewport:ke,reset:Ke}}function Px(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,f=new WeakMap;let u;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):gs("canvas")}function _(A,S,B){let X=1;const ee=We(A);if((ee.width>B||ee.height>B)&&(X=B/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(X*ee.width),Pe=Math.floor(X*ee.height);u===void 0&&(u=g(q,Pe));const ce=S?g(q,Pe):u;return ce.width=q,ce.height=Pe,ce.getContext("2d").drawImage(A,0,0,q,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Pe+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(A,S,B,X,ee=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=S;if(S===r.RED&&(B===r.FLOAT&&(q=r.R32F),B===r.HALF_FLOAT&&(q=r.R16F),B===r.UNSIGNED_BYTE&&(q=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.R8UI),B===r.UNSIGNED_SHORT&&(q=r.R16UI),B===r.UNSIGNED_INT&&(q=r.R32UI),B===r.BYTE&&(q=r.R8I),B===r.SHORT&&(q=r.R16I),B===r.INT&&(q=r.R32I)),S===r.RG&&(B===r.FLOAT&&(q=r.RG32F),B===r.HALF_FLOAT&&(q=r.RG16F),B===r.UNSIGNED_BYTE&&(q=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RG8UI),B===r.UNSIGNED_SHORT&&(q=r.RG16UI),B===r.UNSIGNED_INT&&(q=r.RG32UI),B===r.BYTE&&(q=r.RG8I),B===r.SHORT&&(q=r.RG16I),B===r.INT&&(q=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGB8UI),B===r.UNSIGNED_SHORT&&(q=r.RGB16UI),B===r.UNSIGNED_INT&&(q=r.RGB32UI),B===r.BYTE&&(q=r.RGB8I),B===r.SHORT&&(q=r.RGB16I),B===r.INT&&(q=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),B===r.UNSIGNED_INT&&(q=r.RGBA32UI),B===r.BYTE&&(q=r.RGBA8I),B===r.SHORT&&(q=r.RGBA16I),B===r.INT&&(q=r.RGBA32I)),S===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),S===r.RGBA){const Pe=ee?Lo:Je.getTransfer(X);B===r.FLOAT&&(q=r.RGBA32F),B===r.HALF_FLOAT&&(q=r.RGBA16F),B===r.UNSIGNED_BYTE&&(q=Pe===ct?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(A,S){let B;return A?S===null||S===ki||S===ds?B=r.DEPTH24_STENCIL8:S===Fn?B=r.DEPTH32F_STENCIL8:S===fs&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===ds?B=r.DEPTH_COMPONENT24:S===Fn?B=r.DEPTH_COMPONENT32F:S===fs&&(B=r.DEPTH_COMPONENT16),B}function T(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){const S=A.target;S.removeEventListener("dispose",b),P(S),S.isVideoTexture&&f.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),M(S)}function P(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,X=h.get(B);if(X){const ee=X[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(A),Object.keys(X).length===0&&h.delete(B)}n.remove(A)}function w(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const B=A.source,X=h.get(B);delete X[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let ee=0;ee<S.__webglFramebuffer[X].length;ee++)r.deleteFramebuffer(S.__webglFramebuffer[X][ee]);else r.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)r.deleteFramebuffer(S.__webglFramebuffer[X]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let X=0,ee=B.length;X<ee;X++){const q=n.get(B[X]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[X])}n.remove(A)}let I=0;function N(){I=0}function U(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const B=n.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function V(A,S){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Y(B,A,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function Z(A,S){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Y(B,A,S);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function k(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const ne={[hs]:r.REPEAT,[Jn]:r.CLAMP_TO_EDGE,[al]:r.MIRRORED_REPEAT},pe={[fn]:r.NEAREST,[Cd]:r.NEAREST_MIPMAP_NEAREST,[zs]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[aa]:r.LINEAR_MIPMAP_NEAREST,[Fi]:r.LINEAR_MIPMAP_LINEAR},ue={[Bd]:r.NEVER,[Wd]:r.ALWAYS,[zd]:r.LESS,[Lh]:r.LEQUAL,[kd]:r.EQUAL,[Gd]:r.GEQUAL,[Vd]:r.GREATER,[Hd]:r.NOTEQUAL};function Se(A,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Nn||S.magFilter===aa||S.magFilter===zs||S.magFilter===Fi||S.minFilter===Nn||S.minFilter===aa||S.minFilter===zs||S.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ne[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ne[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ne[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,pe[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==zs&&S.minFilter!==Fi||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ue(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const X=S.source;let ee=h.get(X);ee===void 0&&(ee={},h.set(X,ee));const q=z(S);if(q!==A.__cacheKey){ee[q]===void 0&&(ee[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[q].usedTimes++;const Pe=ee[A.__cacheKey];Pe!==void 0&&(ee[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(S)),A.__cacheKey=q,A.__webglTexture=ee[q].texture}return B}function Ge(A,S,B){return Math.floor(Math.floor(A/B)/S)}function Ve(A,S,B,X){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,B,X,S.data);else{q.sort((re,ve)=>re.start-ve.start);let Pe=0;for(let re=1;re<q.length;re++){const ve=q[Pe],ke=q[re],De=ve.start+ve.count,ge=Ge(ke.start,S.width,4),Ke=Ge(ve.start,S.width,4);ke.start<=De+1&&ge===Ke&&Ge(ke.start+ke.count-1,S.width,4)===ge?ve.count=Math.max(ve.count,ke.start+ke.count-ve.start):(++Pe,q[Pe]=ke)}q.length=Pe+1;const ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ae=r.getParameter(r.UNPACK_SKIP_PIXELS),Re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let re=0,ve=q.length;re<ve;re++){const ke=q[re],De=Math.floor(ke.start/4),ge=Math.ceil(ke.count/4),Ke=De%S.width,D=Math.floor(De/S.width),le=ge,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ke,D,le,de,B,X,S.data)}A.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function Y(A,S,B){let X=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=r.TEXTURE_3D);const ee=Ue(A,S),q=S.source;t.bindTexture(X,A.__webglTexture,r.TEXTURE0+B);const Pe=n.get(q);if(q.version!==Pe.__version||ee===!0){t.activeTexture(r.TEXTURE0+B);const ce=Je.getPrimaries(Je.workingColorSpace),Ae=S.colorSpace===di?null:Je.getPrimaries(S.colorSpace),Re=S.colorSpace===di||ce===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=_(S.image,!1,i.maxTextureSize);re=qe(S,re);const ve=s.convert(S.format,S.colorSpace),ke=s.convert(S.type);let De=v(S.internalFormat,ve,ke,S.colorSpace,S.isVideoTexture);Se(X,S);let ge;const Ke=S.mipmaps,D=S.isVideoTexture!==!0,le=Pe.__version===void 0||ee===!0,de=q.dataReady,Ee=T(S,re);if(S.isDepthTexture)De=x(S.format===ms,S.type),le&&(D?t.texStorage2D(r.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,De,re.width,re.height,0,ve,ke,null));else if(S.isDataTexture)if(Ke.length>0){D&&le&&t.texStorage2D(r.TEXTURE_2D,Ee,De,Ke[0].width,Ke[0].height);for(let se=0,$=Ke.length;se<$;se++)ge=Ke[se],D?de&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ve,ke,ge.data):t.texImage2D(r.TEXTURE_2D,se,De,ge.width,ge.height,0,ve,ke,ge.data);S.generateMipmaps=!1}else D?(le&&t.texStorage2D(r.TEXTURE_2D,Ee,De,re.width,re.height),de&&Ve(S,re,ve,ke)):t.texImage2D(r.TEXTURE_2D,0,De,re.width,re.height,0,ve,ke,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,De,Ke[0].width,Ke[0].height,re.depth);for(let se=0,$=Ke.length;se<$;se++)if(ge=Ke[se],S.format!==Sn)if(ve!==null)if(D){if(de)if(S.layerUpdates.size>0){const Ce=Fu(ge.width,ge.height,S.format,S.type);for(const Ye of S.layerUpdates){const pt=ge.data.subarray(Ye*Ce/ge.data.BYTES_PER_ELEMENT,(Ye+1)*Ce/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,Ye,ge.width,ge.height,1,ve,pt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,re.depth,ve,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,re.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,re.depth,ve,ke,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,re.depth,0,ve,ke,ge.data)}else{D&&le&&t.texStorage2D(r.TEXTURE_2D,Ee,De,Ke[0].width,Ke[0].height);for(let se=0,$=Ke.length;se<$;se++)ge=Ke[se],S.format!==Sn?ve!==null?D?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,se,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?de&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ve,ke,ge.data):t.texImage2D(r.TEXTURE_2D,se,De,ge.width,ge.height,0,ve,ke,ge.data)}else if(S.isDataArrayTexture)if(D){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,De,re.width,re.height,re.depth),de)if(S.layerUpdates.size>0){const se=Fu(re.width,re.height,S.format,S.type);for(const $ of S.layerUpdates){const Ce=re.data.subarray($*se/re.data.BYTES_PER_ELEMENT,($+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,ve,ke,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,ke,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ve,ke,re.data);else if(S.isData3DTexture)D?(le&&t.texStorage3D(r.TEXTURE_3D,Ee,De,re.width,re.height,re.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,ke,re.data)):t.texImage3D(r.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ve,ke,re.data);else if(S.isFramebufferTexture){if(le)if(D)t.texStorage2D(r.TEXTURE_2D,Ee,De,re.width,re.height);else{let se=re.width,$=re.height;for(let Ce=0;Ce<Ee;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,De,se,$,0,ve,ke,null),se>>=1,$>>=1}}else if(Ke.length>0){if(D&&le){const se=We(Ke[0]);t.texStorage2D(r.TEXTURE_2D,Ee,De,se.width,se.height)}for(let se=0,$=Ke.length;se<$;se++)ge=Ke[se],D?de&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ve,ke,ge):t.texImage2D(r.TEXTURE_2D,se,De,ve,ke,ge);S.generateMipmaps=!1}else if(D){if(le){const se=We(re);t.texStorage2D(r.TEXTURE_2D,Ee,De,se.width,se.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,ke,re)}else t.texImage2D(r.TEXTURE_2D,0,De,ve,ke,re);m(S)&&p(X),Pe.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,B){if(S.image.length!==6)return;const X=Ue(A,S),ee=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);const q=n.get(ee);if(ee.version!==q.__version||X===!0){t.activeTexture(r.TEXTURE0+B);const Pe=Je.getPrimaries(Je.workingColorSpace),ce=S.colorSpace===di?null:Je.getPrimaries(S.colorSpace),Ae=S.colorSpace===di||Pe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let $=0;$<6;$++)!Re&&!re?ve[$]=_(S.image[$],!0,i.maxCubemapSize):ve[$]=re?S.image[$].image:S.image[$],ve[$]=qe(S,ve[$]);const ke=ve[0],De=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Ke=v(S.internalFormat,De,ge,S.colorSpace),D=S.isVideoTexture!==!0,le=q.__version===void 0||X===!0,de=ee.dataReady;let Ee=T(S,ke);Se(r.TEXTURE_CUBE_MAP,S);let se;if(Re){D&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Ke,ke.width,ke.height);for(let $=0;$<6;$++){se=ve[$].mipmaps;for(let Ce=0;Ce<se.length;Ce++){const Ye=se[Ce];S.format!==Sn?De!==null?D?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ye.width,Ye.height,De,Ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,Ke,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ye.width,Ye.height,De,ge,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,Ke,Ye.width,Ye.height,0,De,ge,Ye.data)}}}else{if(se=S.mipmaps,D&&le){se.length>0&&Ee++;const $=We(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Ke,$.width,$.height)}for(let $=0;$<6;$++)if(re){D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve[$].width,ve[$].height,De,ge,ve[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,ve[$].width,ve[$].height,0,De,ge,ve[$].data);for(let Ce=0;Ce<se.length;Ce++){const pt=se[Ce].image[$].image;D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,pt.width,pt.height,De,ge,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,Ke,pt.width,pt.height,0,De,ge,pt.data)}}else{D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,ge,ve[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ke,De,ge,ve[$]);for(let Ce=0;Ce<se.length;Ce++){const Ye=se[Ce];D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,De,ge,Ye.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,Ke,De,ge,Ye.image[$])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),q.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Me(A,S,B,X,ee,q){const Pe=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),Ae=v(B.internalFormat,Pe,ce,B.colorSpace),Re=n.get(S),re=n.get(B);if(re.__renderTarget=S,!Re.__hasExternalTextures){const ve=Math.max(1,S.width>>q),ke=Math.max(1,S.height>>q);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Ae,ve,ke,S.depth,0,Pe,ce,null):t.texImage2D(ee,q,Ae,ve,ke,0,Pe,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ie(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,ee,re.__webglTexture,0,he(S)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,ee,re.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(A,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const X=S.depthTexture,ee=X&&X.isDepthTexture?X.type:null,q=x(S.stencilBuffer,ee),Pe=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=he(S);ie(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,q,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,q,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,A)}else{const X=S.textures;for(let ee=0;ee<X.length;ee++){const q=X[ee],Pe=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),Ae=v(q.internalFormat,Pe,ce,q.colorSpace),Re=he(S);B&&ie(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Ae,S.width,S.height):ie(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,Ae,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const ee=X.__webglTexture,q=he(S);if(S.depthTexture.format===ps)ie(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(S.depthTexture.format===ms)ie(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function $e(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=X}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const X=A.texture.mipmaps;X&&X.length>0?be(S.__webglFramebuffer[0],A):be(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=r.createRenderbuffer(),Ie(S.__webglDepthbuffer[X],A,!1);else{const ee=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,q)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ie(S.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(A,S,B){const X=n.get(A);S!==void 0&&Me(X.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&$e(A)}function L(A){const S=A.texture,B=n.get(A),X=n.get(S);A.addEventListener("dispose",C);const ee=A.textures,q=A.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=S.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)B.__webglFramebuffer[ce][Ae]=r.createFramebuffer()}else B.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)B.__webglFramebuffer[ce]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let ce=0,Ae=ee.length;ce<Ae;ce++){const Re=n.get(ee[ce]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&ie(A)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const Ae=ee[ce];B.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Re=s.convert(Ae.format,Ae.colorSpace),re=s.convert(Ae.type),ve=v(Ae.internalFormat,Re,re,Ae.colorSpace,A.isXRRenderTarget===!0),ke=he(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,ve,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Se(r.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Me(B.__webglFramebuffer[ce][Ae],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae);else Me(B.__webglFramebuffer[ce],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ce=0,Ae=ee.length;ce<Ae;ce++){const Re=ee[ce],re=n.get(Re);let ve=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,re.__webglTexture),Se(ve,Re),Me(B.__webglFramebuffer,A,Re,r.COLOR_ATTACHMENT0+ce,ve,0),m(Re)&&p(ve)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),Se(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Me(B.__webglFramebuffer[Ae],A,S,r.COLOR_ATTACHMENT0,ce,Ae);else Me(B.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,ce,0);m(S)&&p(ce),t.unbindTexture()}A.depthBuffer&&$e(A)}function te(A){const S=A.textures;for(let B=0,X=S.length;B<X;B++){const ee=S[B];if(m(ee)){const q=y(A),Pe=n.get(ee).__webglTexture;t.bindTexture(q,Pe),p(q),t.unbindTexture()}}}const J=[],K=[];function j(A){if(A.samples>0){if(ie(A)===!1){const S=A.textures,B=A.width,X=A.height;let ee=r.COLOR_BUFFER_BIT;const q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=n.get(A),ce=S.length>1;if(ce)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const re=n.get(S[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,B,X,0,0,B,X,ee,r.NEAREST),l===!0&&(J.length=0,K.length=0,J.push(r.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push(q),K.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,K)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const re=n.get(S[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function he(A){return Math.min(i.maxSamples,A.samples)}function ie(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(A){const S=o.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function qe(A,S){const B=A.colorSpace,X=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Lr&&B!==di&&(Je.getTransfer(B)===ct?(X!==Sn||ee!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function We(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=at,this.setupRenderTarget=L,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ie}function Ix(r,e){function t(n,i=di){let s;const o=Je.getTransfer(i);if(n===Vn)return r.UNSIGNED_BYTE;if(n===tc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return r.BYTE;if(n===Eh)return r.SHORT;if(n===fs)return r.UNSIGNED_SHORT;if(n===ec)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Fn)return r.FLOAT;if(n===Ps)return r.HALF_FLOAT;if(n===Ah)return r.ALPHA;if(n===Rh)return r.RGB;if(n===Sn)return r.RGBA;if(n===ps)return r.DEPTH_COMPONENT;if(n===ms)return r.DEPTH_STENCIL;if(n===Ch)return r.RED;if(n===ic)return r.RED_INTEGER;if(n===Ph)return r.RG;if(n===rc)return r.RG_INTEGER;if(n===sc)return r.RGBA_INTEGER;if(n===So||n===wo||n===Eo||n===bo)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===ul||n===hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===dl||n===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fl||n===dl)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===wl||n===El||n===bl||n===Tl||n===Al||n===Rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Pl||n===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Cl)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Dl||n===Ul||n===Nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`;class Ux{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:Lx,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nx extends ji{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ux,p={},y=t.getContextAttributes();let v=null,x=null;const T=[],b=[],C=new ae;let P=null;const w=new rn;w.viewport=new nt;const M=new rn;M.viewport=new nt;const I=[w,M],N=new Vm;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ca,T[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ca,T[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Ca,T[Y]=Q),Q.getHandSpace()};function W(Y){const Q=b.indexOf(Y.inputSource);if(Q===-1)return;const Me=T[Q];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<T.length;Y++){const Q=b[Y];Q!==null&&(b[Y]=null,T[Y].disconnect(Q))}U=null,z=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(v),d=null,h=null,u=null,i=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ie=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?ms:ps,Ie=y.stencil?ds:ki);const $e={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer($e),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Vi(h.textureWidth,h.textureHeight,{format:Sn,type:Vn,depthTexture:new Vh(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Vi(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let Q=0;Q<Y.removed.length;Q++){const Me=Y.removed[Q],Ie=b.indexOf(Me);Ie>=0&&(b[Ie]=null,T[Ie].disconnect(Me))}for(let Q=0;Q<Y.added.length;Q++){const Me=Y.added[Q];let Ie=b.indexOf(Me);if(Ie===-1){for(let $e=0;$e<T.length;$e++)if($e>=b.length){b.push(Me),Ie=$e;break}else if(b[$e]===null){b[$e]=Me,Ie=$e;break}if(Ie===-1)break}const be=T[Ie];be&&be.connect(Me)}}const k=new R,ne=new R;function pe(Y,Q,Me){k.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(Me.matrixWorld);const Ie=k.distanceTo(ne),be=Q.projectionMatrix.elements,$e=Me.projectionMatrix.elements,at=be[14]/(be[10]-1),L=be[14]/(be[10]+1),te=(be[9]+1)/be[5],J=(be[9]-1)/be[5],K=(be[8]-1)/be[0],j=($e[8]+1)/$e[0],he=at*K,ie=at*j,fe=Ie/(-K+j),qe=fe*-K;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(qe),Y.translateZ(fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const We=at+fe,A=L+fe,S=he-qe,B=ie+(Ie-qe),X=te*L/A*We,ee=J*L/A*We;Y.projectionMatrix.makePerspective(S,B,X,ee,We,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,Me=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),N.near=M.near=w.near=Q,N.far=M.far=w.far=Me,(U!==N.near||z!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),U=N.near,z=N.far),N.layers.mask=Y.layers.mask|6,w.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Ie=Y.parent,be=N.cameras;ue(N,Ie);for(let $e=0;$e<be.length;$e++)ue(be[$e],Ie);be.length===2?pe(N,w,M):N.projectionMatrix.copy(w.projectionMatrix),Se(Y,N,Ie)};function Se(Y,Q,Me){Me===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Dr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let Ue=null;function Ge(Y,Q){if(f=Q.getViewerPose(c||o),g=Q,f!==null){const Me=f.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ie=!1;Me.length!==N.cameras.length&&(N.cameras.length=0,Ie=!0);for(let L=0;L<Me.length;L++){const te=Me[L];let J=null;if(d!==null)J=d.getViewport(te);else{const j=u.getViewSubImage(h,te);J=j.viewport,L===0&&(e.setRenderTargetTextures(x,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(x))}let K=I[L];K===void 0&&(K=new rn,K.layers.enable(L),K.viewport=new nt,I[L]=K),K.matrix.fromArray(te.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(te.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(J.x,J.y,J.width,J.height),L===0&&(N.matrix.copy(K.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ie===!0&&N.cameras.push(K)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(Me[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Me.length;L++){const te=Me[L].camera;if(te){let J=p[te];J||(J=new Hh,p[te]=J);const K=u.getCameraImage(te);J.sourceTexture=K}}}}for(let Me=0;Me<T.length;Me++){const Ie=b[Me],be=T[Me];Ie!==null&&be!==void 0&&be.update(Ie,Q,c||o)}Ue&&Ue(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ve=new sf;Ve.setAnimationLoop(Ge),this.setAnimationLoop=function(Y){Ue=Y},this.dispose=function(){}}}const Ti=new Ft,Fx=new Le;function Ox(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Ti.copy(x),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(Ti)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(g(y),x=f(y),i[y.id]=x,y.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(y,T);const b=e.render.frame;s[y.id]!==b&&(h(y),s[y.id]=b)}function f(y){const v=u();y.__bindingPointIndex=v;const x=r.createBuffer(),T=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=i[y.id],x=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,C=x.length;b<C;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,M=P.length;w<M;w++){const I=P[w];if(d(I,b,w,T)===!0){const N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let W=0;W<U.length;W++){const V=U[W],Z=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,N+z,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,x,T){const b=y.value,C=v+"_"+x;if(T[C]===void 0)return typeof b=="number"||typeof b=="boolean"?T[C]=b:T[C]=b.clone(),!0;{const P=T[C];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return T[C]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(y){const v=y.uniforms;let x=0;const T=16;for(let C=0,P=v.length;C<P;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,I=w.length;M<I;M++){const N=w[M],U=Array.isArray(N.value)?N.value:[N.value];for(let z=0,W=U.length;z<W;z++){const V=U[z],Z=_(V),k=x%T,ne=k%Z.boundary,pe=k+ne;x+=ne,pe!==0&&T-pe<Z.storage&&(x+=T-pe),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Z.storage}}}const b=x%T;return b>0&&(x+=T-b),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class zx{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=mt;let b=0,C=0,P=null,w=-1,M=null;const I=new nt,N=new nt;let U=null;const z=new Fe(0);let W=0,V=t.width,Z=t.height,k=1,ne=null,pe=null;const ue=new nt(0,0,V,Z),Se=new nt(0,0,V,Z);let Ue=!1;const Ge=new dc;let Ve=!1,Y=!1;const Q=new Le,Me=new R,Ie=new nt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function at(){return P===null?k:1}let L=n;function te(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",se,!1),L===null){const F="webgl2";if(L=te(F,E),L===null)throw te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,K,j,he,ie,fe,qe,We,A,S,B,X,ee,q,Pe,ce,Ae,Re,re,ve,ke,De,ge,Ke;function D(){J=new K0(L),J.init(),De=new Ix(L,J),K=new H0(L,J,e,De),j=new Cx(L,J),K.reversedDepthBuffer&&h&&j.buffers.depth.setReversed(!0),he=new $0(L),ie=new gx,fe=new Px(L,J,j,ie,K,De,he),qe=new W0(x),We=new j0(x),A=new rg(L),ge=new k0(L,A),S=new Z0(L,A,he,ge),B=new ev(L,S,A,he),re=new Q0(L,K,fe),ce=new G0(ie),X=new mx(x,qe,We,J,K,ge,ce),ee=new Ox(x,ie),q=new vx,Pe=new Ex(J),Re=new z0(x,qe,We,j,B,d,l),Ae=new Ax(x,B,K),Ke=new Bx(L,he,K,j),ve=new V0(L,J,he),ke=new J0(L,J,he),he.programs=X.programs,x.capabilities=K,x.extensions=J,x.properties=ie,x.renderLists=q,x.shadowMap=Ae,x.state=j,x.info=he}D();const le=new Nx(x,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(V,Z,!1))},this.getSize=function(E){return E.set(V,Z)},this.setSize=function(E,F,H=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,Z=F,t.width=Math.floor(E*k),t.height=Math.floor(F*k),H===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(V*k,Z*k).floor()},this.setDrawingBufferSize=function(E,F,H){V=E,Z=F,k=H,t.width=Math.floor(E*H),t.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,F,H,G){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,F,H,G),j.viewport(I.copy(ue).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,F,H,G){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,F,H,G),j.scissor(N.copy(Se).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(E){j.setScissorTest(Ue=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,H=!0){let G=0;if(E){let O=!1;if(P!==null){const oe=P.texture.format;O=oe===sc||oe===rc||oe===ic}if(O){const oe=P.texture.type,_e=oe===Vn||oe===ki||oe===fs||oe===ds||oe===tc||oe===nc,Te=Re.getClearColor(),we=Re.getClearAlpha(),ze=Te.r,He=Te.g,Ne=Te.b;_e?(g[0]=ze,g[1]=He,g[2]=Ne,g[3]=we,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=ze,_[1]=He,_[2]=Ne,_[3]=we,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}F&&(G|=L.DEPTH_BUFFER_BIT),H&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Re.dispose(),q.dispose(),Pe.dispose(),ie.dispose(),qe.dispose(),We.dispose(),B.dispose(),ge.dispose(),Ke.dispose(),X.dispose(),le.dispose(),le.removeEventListener("sessionstart",Dn),le.removeEventListener("sessionend",Bc),xi.stop()};function de(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=he.autoReset,F=Ae.enabled,H=Ae.autoUpdate,G=Ae.needsUpdate,O=Ae.type;D(),he.autoReset=E,Ae.enabled=F,Ae.autoUpdate=H,Ae.needsUpdate=G,Ae.type=O}function se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $(E){const F=E.target;F.removeEventListener("dispose",$),Ce(F)}function Ce(E){Ye(E),ie.remove(E)}function Ye(E){const F=ie.get(E).programs;F!==void 0&&(F.forEach(function(H){X.releaseProgram(H)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,G,O,oe){F===null&&(F=be);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Te=jf(E,F,H,G,O);j.setMaterial(G,_e);let we=H.index,ze=1;if(G.wireframe===!0){if(we=S.getWireframeAttribute(H),we===void 0)return;ze=2}const He=H.drawRange,Ne=H.attributes.position;let tt=He.start*ze,lt=(He.start+He.count)*ze;oe!==null&&(tt=Math.max(tt,oe.start*ze),lt=Math.min(lt,(oe.start+oe.count)*ze)),we!==null?(tt=Math.max(tt,0),lt=Math.min(lt,we.count)):Ne!=null&&(tt=Math.max(tt,0),lt=Math.min(lt,Ne.count));const Rt=lt-tt;if(Rt<0||Rt===1/0)return;ge.setup(O,G,Te,H,we);let _t,ht=ve;if(we!==null&&(_t=A.get(we),ht=ke,ht.setIndex(_t)),O.isMesh)G.wireframe===!0?(j.setLineWidth(G.wireframeLinewidth*at()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(O.isLine){let Be=G.linewidth;Be===void 0&&(Be=1),j.setLineWidth(Be*at()),O.isLineSegments?ht.setMode(L.LINES):O.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else O.isPoints?ht.setMode(L.POINTS):O.isSprite&&ht.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Be=O._multiDrawStarts,Mt=O._multiDrawCounts,st=O._multiDrawCount,ln=we?A.get(we).bytesPerElement:1,Ji=ie.get(G).currentProgram.getUniforms();for(let cn=0;cn<st;cn++)Ji.setValue(L,"_gl_DrawID",cn),ht.render(Be[cn]/ln,Mt[cn])}else if(O.isInstancedMesh)ht.renderInstances(tt,Rt,O.count);else if(H.isInstancedBufferGeometry){const Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mt=Math.min(H.instanceCount,Be);ht.renderInstances(tt,Rt,Mt)}else ht.render(tt,Rt)};function pt(E,F,H){E.transparent===!0&&E.side===Gt&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,Bs(E,F,H),E.side=_i,E.needsUpdate=!0,Bs(E,F,H),E.side=Gt):Bs(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),p=Pe.get(H),p.init(F),v.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==H&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Te=oe[_e];pt(Te,H,O),G.add(Te)}else pt(oe,H,O),G.add(oe)}),p=v.pop(),G},this.compileAsync=function(E,F,H=null){const G=this.compile(E,F,H);return new Promise(O=>{function oe(){if(G.forEach(function(_e){ie.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){O(E);return}setTimeout(oe,10)}J.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ot=null;function Gn(E){ot&&ot(E)}function Dn(){xi.stop()}function Bc(){xi.start()}const xi=new sf;xi.setAnimationLoop(Gn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(E){ot=E,le.setAnimationLoop(E),E===null?xi.stop():xi.start()},le.addEventListener("sessionstart",Dn),le.addEventListener("sessionend",Bc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,P),p=Pe.get(E,v.length),p.init(F),v.push(p),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(Q,On,F.reversedDepth),Y=this.localClippingEnabled,Ve=ce.init(this.clippingPlanes,Y),m=q.get(E,y.length),m.init(),y.push(m),le.enabled===!0&&le.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&sa(oe,F,-1/0,x.sortObjects)}sa(E,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,pe),$e=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,$e&&Re.addToRenderList(m,E),this.info.render.frame++,Ve===!0&&ce.beginShadows();const H=p.state.shadowsArray;Ae.render(H,E,F),Ve===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(O.length>0)for(let _e=0,Te=oe.length;_e<Te;_e++){const we=oe[_e];kc(G,O,E,we)}$e&&Re.render(E);for(let _e=0,Te=oe.length;_e<Te;_e++){const we=oe[_e];zc(m,E,we,we.viewport)}}else O.length>0&&kc(G,O,E,F),$e&&Re.render(E),zc(m,E,F);P!==null&&C===0&&(fe.updateMultisampleRenderTarget(P),fe.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,F),ge.resetDefaultState(),w=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],Ve===!0&&ce.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function sa(E,F,H,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ge.intersectsSprite(E)){G&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const _e=B.update(E),Te=E.material;Te.visible&&m.push(E,_e,Te,H,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ge.intersectsObject(E))){const _e=B.update(E),Te=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ie.copy(_e.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(Te)){const we=_e.groups;for(let ze=0,He=we.length;ze<He;ze++){const Ne=we[ze],tt=Te[Ne.materialIndex];tt&&tt.visible&&m.push(E,_e,tt,H,Ie.z,Ne)}}else Te.visible&&m.push(E,_e,Te,H,Ie.z,null)}}const oe=E.children;for(let _e=0,Te=oe.length;_e<Te;_e++)sa(oe[_e],F,H,G)}function zc(E,F,H,G){const O=E.opaque,oe=E.transmissive,_e=E.transparent;p.setupLightsView(H),Ve===!0&&ce.setGlobalState(x.clippingPlanes,H),G&&j.viewport(I.copy(G)),O.length>0&&Os(O,F,H),oe.length>0&&Os(oe,F,H),_e.length>0&&Os(_e,F,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function kc(E,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Vi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ps:Vn,minFilter:Fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const oe=p.state.transmissionRenderTarget[G.id],_e=G.viewport||I;oe.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);const Te=x.getRenderTarget(),we=x.getActiveCubeFace(),ze=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),$e&&Re.render(H);const He=x.toneMapping;x.toneMapping=gi;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Ve===!0&&ce.setGlobalState(x.clippingPlanes,G),Os(E,H,G),fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe),J.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let lt=0,Rt=F.length;lt<Rt;lt++){const _t=F[lt],ht=_t.object,Be=_t.geometry,Mt=_t.material,st=_t.group;if(Mt.side===Gt&&ht.layers.test(G.layers)){const ln=Mt.side;Mt.side=on,Mt.needsUpdate=!0,Vc(ht,H,G,Be,Mt,st),Mt.side=ln,Mt.needsUpdate=!0,tt=!0}}tt===!0&&(fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe))}x.setRenderTarget(Te,we,ze),x.setClearColor(z,W),Ne!==void 0&&(G.viewport=Ne),x.toneMapping=He}function Os(E,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=E.length;O<oe;O++){const _e=E[O],Te=_e.object,we=_e.geometry,ze=_e.group;let He=_e.material;He.allowOverride===!0&&G!==null&&(He=G),Te.layers.test(H.layers)&&Vc(Te,F,H,we,He,ze)}}function Vc(E,F,H,G,O,oe){E.onBeforeRender(x,F,H,G,O,oe),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,F,H,G,E,oe),O.transparent===!0&&O.side===Gt&&O.forceSinglePass===!1?(O.side=on,O.needsUpdate=!0,x.renderBufferDirect(H,F,G,O,E,oe),O.side=_i,O.needsUpdate=!0,x.renderBufferDirect(H,F,G,O,E,oe),O.side=Gt):x.renderBufferDirect(H,F,G,O,E,oe),E.onAfterRender(x,F,H,G,O,oe)}function Bs(E,F,H){F.isScene!==!0&&(F=be);const G=ie.get(E),O=p.state.lights,oe=p.state.shadowsArray,_e=O.state.version,Te=X.getParameters(E,O.state,oe,F,H),we=X.getProgramCacheKey(Te);let ze=G.programs;G.environment=E.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(E.isMeshStandardMaterial?We:qe).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",$),ze=new Map,G.programs=ze);let He=ze.get(we);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===_e)return Gc(E,Te),He}else Te.uniforms=X.getUniforms(E),E.onBeforeCompile(Te,x),He=X.acquireProgram(Te,we),ze.set(we,He),G.uniforms=Te.uniforms;const Ne=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),Gc(E,Te),G.needsLights=Zf(E),G.lightsStateVersion=_e,G.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Hc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=To.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Gc(E,F){const H=ie.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function jf(E,F,H,G,O){F.isScene!==!0&&(F=be),fe.resetTextureUnits();const oe=F.fog,_e=G.isMeshStandardMaterial?F.environment:null,Te=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Lr,we=(G.isMeshStandardMaterial?We:qe).get(G.envMap||_e),ze=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let Rt=gi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ht=_t!==void 0?_t.length:0,Be=ie.get(G),Mt=p.state.lights;if(Ve===!0&&(Y===!0||E!==M)){const Jt=E===M&&G.id===w;ce.setState(G,E,Jt)}let st=!1;G.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Mt.state.version||Be.outputColorSpace!==Te||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==we||G.fog===!0&&Be.fog!==oe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ce.numPlanes||Be.numIntersection!==ce.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==He||Be.morphTargets!==Ne||Be.morphNormals!==tt||Be.morphColors!==lt||Be.toneMapping!==Rt||Be.morphTargetsCount!==ht)&&(st=!0):(st=!0,Be.__version=G.version);let ln=Be.currentProgram;st===!0&&(ln=Bs(G,F,O));let Ji=!1,cn=!1,qr=!1;const St=ln.getUniforms(),_n=Be.uniforms;if(j.useProgram(ln.program)&&(Ji=!0,cn=!0,qr=!0),G.id!==w&&(w=G.id,cn=!0),Ji||M!==E){j.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",E.projectionMatrix),St.setValue(L,"viewMatrix",E.matrixWorldInverse);const nn=St.map.cameraPosition;nn!==void 0&&nn.setValue(L,Me.setFromMatrixPosition(E.matrixWorld)),K.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,cn=!0,qr=!0)}if(O.isSkinnedMesh){St.setOptional(L,O,"bindMatrix"),St.setOptional(L,O,"bindMatrixInverse");const Jt=O.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),St.setValue(L,"boneTexture",Jt.boneTexture,fe))}O.isBatchedMesh&&(St.setOptional(L,O,"batchingTexture"),St.setValue(L,"batchingTexture",O._matricesTexture,fe),St.setOptional(L,O,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",O._indirectTexture,fe),St.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",O._colorsTexture,fe));const vn=H.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&re.update(O,H,ln),(cn||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,St.setValue(L,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_n.envMap.value=we,_n.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),cn&&(St.setValue(L,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&Kf(_n,qr),oe&&G.fog===!0&&ee.refreshFogUniforms(_n,oe),ee.refreshMaterialUniforms(_n,G,k,Z,p.state.transmissionRenderTarget[E.id]),To.upload(L,Hc(Be),_n,fe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(To.upload(L,Hc(Be),_n,fe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(L,"center",O.center),St.setValue(L,"modelViewMatrix",O.modelViewMatrix),St.setValue(L,"normalMatrix",O.normalMatrix),St.setValue(L,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Jt=G.uniformsGroups;for(let nn=0,oa=Jt.length;nn<oa;nn++){const yi=Jt[nn];Ke.update(yi,ln),Ke.bind(yi,ln)}}return ln}function Kf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Zf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,H){const G=ie.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ie.get(E.texture).__webglTexture=F,ie.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const H=ie.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const Jf=L.createFramebuffer();this.setRenderTarget=function(E,F=0,H=0){P=E,b=F,C=H;let G=!0,O=null,oe=!1,_e=!1;if(E){const we=ie.get(E);if(we.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)fe.setupRenderTarget(E);else if(we.__hasExternalTextures)fe.rebindTextures(E,ie.get(E.texture).__webglTexture,ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(we.__boundDepthTexture!==Ne){if(Ne!==null&&ie.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);const He=ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[F])?O=He[F][H]:O=He[F],oe=!0):E.samples>0&&fe.useMultisampledRTT(E)===!1?O=ie.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[H]:O=He,I.copy(E.viewport),N.copy(E.scissor),U=E.scissorTest}else I.copy(ue).multiplyScalar(k).floor(),N.copy(Se).multiplyScalar(k).floor(),U=Ue;if(H!==0&&(O=Jf),j.bindFramebuffer(L.FRAMEBUFFER,O)&&G&&j.drawBuffers(E,O),j.viewport(I),j.scissor(N),j.setScissorTest(U),oe){const we=ie.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,H)}else if(_e){const we=F;for(let ze=0;ze<E.textures.length;ze++){const He=ie.get(E.textures[ze]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ze,He.__webglTexture,H,we)}}else if(E!==null&&H!==0){const we=ie.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,H)}w=-1},this.readRenderTargetPixels=function(E,F,H,G,O,oe,_e,Te=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){j.bindFramebuffer(L.FRAMEBUFFER,we);try{const ze=E.textures[Te],He=ze.format,Ne=ze.type;if(!K.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&H>=0&&H<=E.height-O&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te),L.readPixels(F,H,G,O,De.convert(He),De.convert(Ne),oe))}finally{const ze=P!==null?ie.get(P).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,G,O,oe,_e,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we)if(F>=0&&F<=E.width-G&&H>=0&&H<=E.height-O){j.bindFramebuffer(L.FRAMEBUFFER,we);const ze=E.textures[Te],He=ze.format,Ne=ze.type;if(!K.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te),L.readPixels(F,H,G,O,De.convert(He),De.convert(Ne),0);const lt=P!==null?ie.get(P).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,lt);const Rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lp(L,Rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(tt),L.deleteSync(Rt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,H=0){const G=Math.pow(2,-H),O=Math.floor(E.image.width*G),oe=Math.floor(E.image.height*G),_e=F!==null?F.x:0,Te=F!==null?F.y:0;fe.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,_e,Te,O,oe),j.unbindTexture()};const $f=L.createFramebuffer(),Qf=L.createFramebuffer();this.copyTextureToTexture=function(E,F,H=null,G=null,O=0,oe=null){oe===null&&(O!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let _e,Te,we,ze,He,Ne,tt,lt,Rt;const _t=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(H!==null)_e=H.max.x-H.min.x,Te=H.max.y-H.min.y,we=H.isBox3?H.max.z-H.min.z:1,ze=H.min.x,He=H.min.y,Ne=H.isBox3?H.min.z:0;else{const vn=Math.pow(2,-O);_e=Math.floor(_t.width*vn),Te=Math.floor(_t.height*vn),E.isDataArrayTexture?we=_t.depth:E.isData3DTexture?we=Math.floor(_t.depth*vn):we=1,ze=0,He=0,Ne=0}G!==null?(tt=G.x,lt=G.y,Rt=G.z):(tt=0,lt=0,Rt=0);const ht=De.convert(F.format),Be=De.convert(F.type);let Mt;F.isData3DTexture?(fe.setTexture3D(F,0),Mt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(fe.setTexture2DArray(F,0),Mt=L.TEXTURE_2D_ARRAY):(fe.setTexture2D(F,0),Mt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),ln=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ji=L.getParameter(L.UNPACK_SKIP_PIXELS),cn=L.getParameter(L.UNPACK_SKIP_ROWS),qr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne);const St=E.isDataArrayTexture||E.isData3DTexture,_n=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const vn=ie.get(E),Jt=ie.get(F),nn=ie.get(vn.__renderTarget),oa=ie.get(Jt.__renderTarget);j.bindFramebuffer(L.READ_FRAMEBUFFER,nn.__webglFramebuffer),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let yi=0;yi<we;yi++)St&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ie.get(E).__webglTexture,O,Ne+yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ie.get(F).__webglTexture,oe,Rt+yi)),L.blitFramebuffer(ze,He,_e,Te,tt,lt,_e,Te,L.DEPTH_BUFFER_BIT,L.NEAREST);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||ie.has(E)){const vn=ie.get(E),Jt=ie.get(F);j.bindFramebuffer(L.READ_FRAMEBUFFER,$f),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qf);for(let nn=0;nn<we;nn++)St?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,O,Ne+nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,O),_n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Jt.__webglTexture,oe,Rt+nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Jt.__webglTexture,oe),O!==0?L.blitFramebuffer(ze,He,_e,Te,tt,lt,_e,Te,L.COLOR_BUFFER_BIT,L.NEAREST):_n?L.copyTexSubImage3D(Mt,oe,tt,lt,Rt+nn,ze,He,_e,Te):L.copyTexSubImage2D(Mt,oe,tt,lt,ze,He,_e,Te);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _n?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Mt,oe,tt,lt,Rt,_e,Te,we,ht,Be,_t.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,oe,tt,lt,Rt,_e,Te,we,ht,_t.data):L.texSubImage3D(Mt,oe,tt,lt,Rt,_e,Te,we,ht,Be,_t):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,oe,tt,lt,_e,Te,ht,Be,_t.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,oe,tt,lt,_t.width,_t.height,ht,_t.data):L.texSubImage2D(L.TEXTURE_2D,oe,tt,lt,_e,Te,ht,Be,_t);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ln),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ji),L.pixelStorei(L.UNPACK_SKIP_ROWS,cn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qr),oe===0&&F.generateMipmaps&&L.generateMipmap(Mt),j.unbindTexture()},this.initRenderTarget=function(E){ie.get(E).__webglFramebuffer===void 0&&fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?fe.setTextureCube(E,0):E.isData3DTexture?fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?fe.setTexture2DArray(E,0):fe.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){b=0,C=0,P=null,j.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}var Mn=Uint8Array,Sr=Uint16Array,kx=Int32Array,uf=new Mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),hf=new Mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vx=new Mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ff=function(r,e){for(var t=new Sr(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new kx(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},df=ff(uf,2),pf=df.b,Hx=df.r;pf[28]=258,Hx[258]=28;var Gx=ff(hf,0),Wx=Gx.b,Wl=new Sr(32768);for(var xt=0;xt<32768;++xt){var ui=(xt&43690)>>1|(xt&21845)<<1;ui=(ui&52428)>>2|(ui&13107)<<2,ui=(ui&61680)>>4|(ui&3855)<<4,Wl[xt]=((ui&65280)>>8|(ui&255)<<8)>>1}var ls=(function(r,e,t){for(var n=r.length,i=0,s=new Sr(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Sr(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Sr(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],f=e-r[i],u=o[r[i]-1]++<<f,h=u|(1<<f)-1;u<=h;++u)a[Wl[u]>>l]=c}else for(a=new Sr(n),i=0;i<n;++i)r[i]&&(a[i]=Wl[o[r[i]-1]++]>>15-r[i]);return a}),Ds=new Mn(288);for(var xt=0;xt<144;++xt)Ds[xt]=8;for(var xt=144;xt<256;++xt)Ds[xt]=9;for(var xt=256;xt<280;++xt)Ds[xt]=7;for(var xt=280;xt<288;++xt)Ds[xt]=8;var mf=new Mn(32);for(var xt=0;xt<32;++xt)mf[xt]=5;var Xx=ls(Ds,9,1),qx=ls(mf,5,1),Xa=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Tn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},qa=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Yx=function(r){return(r+7)/8|0},jx=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new Mn(r.subarray(e,t))},Kx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],An=function(r,e,t){var n=new Error(e||Kx[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,An),!t)throw n;return n},Zx=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new Mn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Mn(i*3));var c=function($e){var at=t.length;if($e>at){var L=new Mn(Math.max(at*2,$e));L.set(t),t=L}},f=e.f||0,u=e.p||0,h=e.b||0,d=e.l,g=e.d,_=e.m,m=e.n,p=i*8;do{if(!d){f=Tn(r,u,1);var y=Tn(r,u+1,3);if(u+=3,y)if(y==1)d=Xx,g=qx,_=9,m=5;else if(y==2){var b=Tn(r,u,31)+257,C=Tn(r,u+10,15)+4,P=b+Tn(r,u+5,31)+1;u+=14;for(var w=new Mn(P),M=new Mn(19),I=0;I<C;++I)M[Vx[I]]=Tn(r,u+I*3,7);u+=C*3;for(var N=Xa(M),U=(1<<N)-1,z=ls(M,N,1),I=0;I<P;){var W=z[Tn(r,u,U)];u+=W&15;var v=W>>4;if(v<16)w[I++]=v;else{var V=0,Z=0;for(v==16?(Z=3+Tn(r,u,3),u+=2,V=w[I-1]):v==17?(Z=3+Tn(r,u,7),u+=3):v==18&&(Z=11+Tn(r,u,127),u+=7);Z--;)w[I++]=V}}var k=w.subarray(0,b),ne=w.subarray(b);_=Xa(k),m=Xa(ne),d=ls(k,_,1),g=ls(ne,m,1)}else An(1);else{var v=Yx(u)+4,x=r[v-4]|r[v-3]<<8,T=v+x;if(T>i){l&&An(0);break}a&&c(h+x),t.set(r.subarray(v,T),h),e.b=h+=x,e.p=u=T*8,e.f=f;continue}if(u>p){l&&An(0);break}}a&&c(h+131072);for(var pe=(1<<_)-1,ue=(1<<m)-1,Se=u;;Se=u){var V=d[qa(r,u)&pe],Ue=V>>4;if(u+=V&15,u>p){l&&An(0);break}if(V||An(2),Ue<256)t[h++]=Ue;else if(Ue==256){Se=u,d=null;break}else{var Ge=Ue-254;if(Ue>264){var I=Ue-257,Ve=uf[I];Ge=Tn(r,u,(1<<Ve)-1)+pf[I],u+=Ve}var Y=g[qa(r,u)&ue],Q=Y>>4;Y||An(3),u+=Y&15;var ne=Wx[Q];if(Q>3){var Ve=hf[Q];ne+=qa(r,u)&(1<<Ve)-1,u+=Ve}if(u>p){l&&An(0);break}a&&c(h+131072);var Me=h+Ge;if(h<ne){var Ie=s-ne,be=Math.min(ne,Me);for(Ie+h<0&&An(3);h<be;++h)t[h]=n[Ie+h]}for(;h<Me;++h)t[h]=t[h-ne]}}e.l=d,e.p=Se,e.b=h,e.f=f,d&&(f=1,e.m=_,e.d=g,e.n=m)}while(!f);return h!=t.length&&o?jx(t,0,h):t.subarray(0,h)},Jx=new Mn(0),$x=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&An(6,"invalid zlib data"),(r[1]>>5&1)==1&&An(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Qx(r,e){return Zx(r.subarray($x(r),-4),{i:2},e,e)}var ey=typeof TextDecoder<"u"&&new TextDecoder,ty=0;try{ey.decode(Jx,{stream:!0}),ty=1}catch{}function gf(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function ny(r,e,t,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[r+1-a],o[a]=n[r+a]-e;let l=0;for(let c=0;c<a;++c){const f=o[c+1],u=s[a-c],h=i[c]/(f+u);i[c]=l+f*h,l=u*h}i[a]=l}return i}function iy(r,e,t,n){const i=gf(r,n,e),s=ny(i,n,r,e),o=new nt(0,0,0,0);for(let a=0;a<=r;++a){const l=t[i-r+a],c=s[a],f=l.w*c;o.x+=l.x*f,o.y+=l.y*f,o.z+=l.z*f,o.w+=l.w*c}return o}function ry(r,e,t,n,i){const s=[];for(let u=0;u<=t;++u)s[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=s.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[r+1-u],c[u]=i[r+u]-e;let h=0;for(let d=0;d<u;++d){const g=c[d+1],_=l[u-d];a[u][d]=g+_;const m=a[d][u-1]/a[u][d];a[d][u]=h+g*m,h=_*m}a[u][u]=h}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let h=0,d=1;const g=[];for(let _=0;_<=t;++_)g[_]=s.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let m=0;const p=u-_,y=t-_;u>=_&&(g[d][0]=g[h][0]/a[y+1][p],m=g[d][0]*a[p][y]);const v=p>=-1?1:-p,x=u-1<=y?_-1:t-u;for(let b=v;b<=x;++b)g[d][b]=(g[h][b]-g[h][b-1])/a[y+1][p+b],m+=g[d][b]*a[p+b][y];u<=y&&(g[d][_]=-g[h][_-1]/a[y+1][u],m+=g[d][_]*a[u][y]),o[_][u]=m;const T=h;h=d,d=T}}let f=t;for(let u=1;u<=n;++u){for(let h=0;h<=t;++h)o[u][h]*=f;f*=t-u}return o}function sy(r,e,t,n,i){const s=i<r?i:r,o=[],a=gf(r,n,e),l=ry(a,n,r,s,e),c=[];for(let f=0;f<t.length;++f){const u=t[f].clone(),h=u.w;u.x*=h,u.y*=h,u.z*=h,c[f]=u}for(let f=0;f<=s;++f){const u=c[a-r].clone().multiplyScalar(l[f][0]);for(let h=1;h<=r;++h)u.add(c[a-r+h].clone().multiplyScalar(l[f][h]));o[f]=u}for(let f=s+1;f<=i+1;++f)o[f]=new nt(0,0,0);return o}function oy(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function ay(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const o=r[s];t[s]=new R(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(oy(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function ly(r,e,t,n,i){const s=sy(r,e,t,n,i);return ay(s)}class cy extends In{constructor(e,t,n,i,s){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new nt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new R){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=iy(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new R){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=ly(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new nt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let Qe,Pt,en;class uy extends Wi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=s.path===""?km.extractUrlBase(e):s.path,a=new Lm(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(gy(e))Qe=new my().parse(e);else{const i=xf(e);if(!_y(i))throw new Error("THREE.FBXLoader: Unknown format.");if(lh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+lh(i));Qe=new py().parse(i)}const n=new nf(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new hy(n,this.manager).parse(Qe)}}class hy{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Pt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new fy().parse(i);return this.parseScene(i,s,n),en}parseConnections(){const e=new Map;return"Connections"in Qe&&Qe.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Qe.Objects){const n=Qe.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Qe.Objects){const n=Qe.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?hs:Jn,n.wrapT=a===0?hs:Jn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const s=i.path;s||i.setPath(this.textureLoader.path);const o=Pt.get(e.id).children;let a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&i.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Xt;const l=i.load(a);return i.setPath(s),l}parseMaterials(e){const t=new Map;if("Material"in Qe.Objects){const n=Qe.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Pt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new ho;break;case"lambert":a=new xm;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new ho;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Je.colorSpaceToWorking(new Fe().fromArray(e.Diffuse.value),mt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Je.colorSpaceToWorking(new Fe().fromArray(e.DiffuseColor.value),mt)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Je.colorSpaceToWorking(new Fe().fromArray(e.Emissive.value),mt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Je.colorSpaceToWorking(new Fe().fromArray(e.EmissiveColor.value),mt)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Je.colorSpaceToWorking(new Fe().fromArray(e.Specular.value),mt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Je.colorSpaceToWorking(new Fe().fromArray(e.SpecularColor.value),mt));const s=this;return Pt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=mt);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=mt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Co,i.envMap.colorSpace=mt);break;case"SpecularColor":i.specularMap=s.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=mt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,o.ID),i.transparent=!0;break;default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Qe.Objects&&t in Qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Pt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Qe.Objects){const n=Qe.Objects.Deformer;for(const i in n){const s=n[i],o=Pt.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Le().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Pt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){en=new Ht;const i=this.parseModels(e.skeletons,t,n),s=Qe.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),Pt.get(l.ID).parents.forEach(function(u){const h=i.get(u.ID);h!==void 0&&h.add(l)}),l.parent===null&&en.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),en.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=vf(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new dy().parse();en.children.length===1&&en.children[0].isGroup&&(en.children[0].animations=a,en=en.children[0]),en.animations=a}parseModels(e,t,n){const i=new Map,s=Qe.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=Pt.get(a);let f=this.buildSkeleton(c,e,a,l.attrName);if(!f){switch(l.attrType){case"Camera":f=this.createCamera(c);break;case"Light":f=this.createLight(c);break;case"Mesh":f=this.createMesh(c,t,n);break;case"NurbsCurve":f=this.createCurve(c,t);break;case"LimbNode":case"Root":f=new Ol;break;default:f=new Ht;break}f.name=l.attrName?rt.sanitizeNodeName(l.attrName):"",f.userData.originalName=l.attrName,f.ID=a}this.getTransformData(f,l),i.set(a,f)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,f){if(c.ID===o.ID){const u=s;s=new Ol,s.matrixWorld.copy(c.transformLink),s.name=i?rt.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,l.bones[f]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=Qe.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new gt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let f=45;n.FieldOfView!==void 0&&(f=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new rn(f,c,s,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new gt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new gt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=Qe.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new gt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=Je.colorSpaceToWorking(new Fe().fromArray(n.Color.value),mt));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new zo(s,o,a,l);break;case 1:t=new rf(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=vt.degToRad(n.InnerAngle.value));let f=0;n.OuterAngle!==void 0&&(f=vt.degToRad(n.OuterAngle.value),f=Math.max(f,1)),t=new Fm(s,o,a,c,f,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new zo(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,o=null;const a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ho({name:Wi.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,f=s.groups.length;c<f;c++){const u=s.groups[c];(u.materialIndex<0||u.materialIndex>=a.length)&&(u.materialIndex=a.length,l=!0)}if(l){const c=new ho;a.push(c)}}return s.FBX_Deformer?(i=new Np(s,o),i.normalizeSkinWeights()):i=new it(s,o),i}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),i=new pc({name:Wi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new kh(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Es(t.RotationOrder.value):n.eulerOrder=Es(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Pt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Qe.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),en.add(e.target)):e.lookAt(new R().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const o=e[s];Pt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Pt.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new fc(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Qe.Objects){const t=Qe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Le().fromArray(s.Matrix.a)}):e[i.Node]=new Le().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Qe){if("AmbientColor"in Qe.GlobalSettings){const e=Qe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new Fe().setRGB(t,n,i,mt);en.add(new zm(s,1))}}"UnitScaleFactor"in Qe.GlobalSettings&&(en.userData.unitScaleFactor=Qe.GlobalSettings.UnitScaleFactor.value)}}}class fy{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Qe.Objects){const n=Qe.Objects.Geometry;for(const i in n){const s=Pt.get(parseInt(i)),o=this.parseGeometry(s,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],o=e.parents.map(function(u){return Qe.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,h){return i[h.ID]!==void 0&&(u=i[h.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Es(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const f=vf(c);return this.genGeometry(t,a,s,f)}genGeometry(e,t,n,i){const s=new dt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Xe(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Xe(a.colors,3)),t&&(s.setAttribute("skinIndex",new uc(a.weightsIndices,4)),s.setAttribute("skinWeight",new Xe(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new je().getNormalMatrix(i),f=new Xe(a.normal,3);f.applyNormalMatrix(c),s.setAttribute("normal",f)}if(a.uvs.forEach(function(c,f){const u=f===0?"uv":`uv${f}`;s.setAttribute(u,new Xe(a.uvs[f],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],f=0;if(a.materialIndex.forEach(function(u,h){u!==c&&(s.addGroup(f,h-f,c),c=u,f=h)}),s.groups.length>0){const u=s.groups[s.groups.length-1],h=u.start+u.count;h!==a.materialIndex.length&&s.addGroup(h,a.materialIndex.length-h,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],f=[],u=[];const h=this;return e.vertexIndices.forEach(function(d,g){let _,m=!1;d<0&&(d=d^-1,m=!0);let p=[],y=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const v=_o(g,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){y.push(v.weight),p.push(v.id)}),y.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],x=[0,0,0,0];y.forEach(function(T,b){let C=T,P=p[b];x.forEach(function(w,M,I){if(C>w){I[M]=C,C=w;const N=v[M];v[M]=P,P=N}})}),p=v,y=x}for(;y.length<4;)y.push(0),p.push(0);for(let v=0;v<4;++v)f.push(y[v]),u.push(p[v])}if(e.normal){const v=_o(g,n,d,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=_o(g,n,d,e.material)[0],_<0&&(h.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(v,x){const T=_o(g,n,d,v);c[x]===void 0&&(c[x]=[]),c[x].push(T[0]),c[x].push(T[1])}),i++,m&&(h.genFace(t,e,o,_,a,l,c,f,u,i),n++,i=0,o=[],a=[],l=[],c=[],f=[],u=[])}),t}getNormalNewell(e){const t=new R(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t.x+=(i.y-s.y)*(i.z+s.z),t.y+=(i.z-s.z)*(i.x+s.x),t.z+=(i.x-s.x)*(i.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new R(0,1,0):new R(0,0,1)).cross(t).normalize(),s=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:s}}flattenVertex(e,t,n){return new ae(e.dot(t),e.dot(n))}genFace(e,t,n,i,s,o,a,l,c,f){let u;if(f>3){const h=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<n.length;p+=3)h.push(new R(d[n[p]],d[n[p+1]],d[n[p+2]]));const{tangent:g,bitangent:_}=this.getNormalTangentAndBitangent(h),m=[];for(const p of h)m.push(this.flattenVertex(p,g,_));u=Bn.triangulateShape(m,[])}else u=[[0,1,2]];for(const[h,d,g]of u)e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2]),e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[g*3]),e.normal.push(s[g*3+1]),e.normal.push(s[g*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][h*2]),e.uvs[m].push(a[m][h*2+1]),e.uvs[m].push(a[m][d*2]),e.uvs[m].push(a[m][d*2+1]),e.uvs[m].push(a[m][g*2]),e.uvs[m].push(a[m][g*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Qe.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,s){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],f=e.attributes.position.count*3,u=new Float32Array(f);for(let _=0;_<c.length;_++){const m=c[_]*3;u[m]=l[_*3],u[m+1]=l[_*3+1],u[m+2]=l[_*3+2]}const h={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},d=this.genBuffers(h),g=new Xe(d.vertex,3);g.name=s||n.attrName,g.applyMatrix4(i),e.morphAttributes.position.push(g)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new Fe;o<i.length;o+=4)a.fromArray(i,o),Je.colorSpaceToWorking(a,mt),a.toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new dt;const n=t-1,i=e.KnotVector.a,s=[],o=e.Points.a;for(let u=0,h=o.length;u<h;u+=4)s.push(new nt().fromArray(o,u));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)s.push(s[u])}const f=new cy(n,i,s,a,l).getPoints(s.length*12);return new dt().setFromPoints(f)}}class dy{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Qe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Qe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(vy),values:t[n].KeyValueFloat.a},s=Pt.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Qe.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],o=Pt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const f=e.get(l.ID);if(f.curves.x!==void 0||f.curves.y!==void 0||f.curves.z!==void 0){if(s[c]===void 0){const u=Pt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(u!==void 0){const h=Qe.Objects.Model[u.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?rt.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};en.traverse(function(g){g.ID===h.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Le),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),s[c]=d}}s[c]&&(s[c][f.attr]=f)}else if(f.curves.morph!==void 0){if(s[c]===void 0){const u=Pt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,h=Pt.get(u).parents[0].ID,d=Pt.get(h).parents[0].ID,g=Pt.get(d).parents[0].ID,_=Qe.Objects.Model[g],m={modelName:_.attrName?rt.sanitizeNodeName(_.attrName):"",morphName:Qe.Objects.Deformer[u].attrName};s[c]=m}s[c][f.attr]=f}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=Qe.Objects.AnimationStack,n={};for(const i in t){const s=Pt.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Vl(e.name,-1,t)}generateTracks(e){const t=[];let n=new R,i=new R;if(e.transform&&e.transform.decompose(n,new wt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new ws(e+"."+i,s,o)}generateRotationTrack(e,t,n,i,s){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,s);o=h[0],a=h[1]}const l=Es(0);n!==void 0&&(n=n.map(vt.degToRad),n.push(l),n=new Ft().fromArray(n),n=new wt().setFromEuler(n)),i!==void 0&&(i=i.map(vt.degToRad),i.push(l),i=new Ft().fromArray(i),i=new wt().setFromEuler(i).invert());const c=new wt,f=new Ft,u=[];if(!a||!o)return new Or(e+".quaternion",[0],[0]);for(let h=0;h<a.length;h+=3)f.set(a[h],a[h+1],a[h+2],s),c.setFromEuler(f),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),h>2&&new wt().fromArray(u,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,h/3*4);return new Or(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=en.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ss(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const f=t.x.values[o];s.push(f),i[0]=f}else s.push(i[0]);if(a!==-1){const f=t.y.values[a];s.push(f),i[1]=f}else s.push(i[1]);if(l!==-1){const f=t.z.values[l];s.push(f),i[2]=f}else s.push(i[2])}),s}interpolateRotations(e,t,n,i){const s=[],o=[];s.push(e.times[0]),o.push(vt.degToRad(e.values[0])),o.push(vt.degToRad(t.values[0])),o.push(vt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(vt.degToRad),f=[e.values[a],t.values[a],n.values[a]];if(isNaN(f[0])||isNaN(f[1])||isNaN(f[2]))continue;const u=f.map(vt.degToRad),h=[f[0]-l[0],f[1]-l[1],f[2]-l[2]],d=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const _=Math.max(...d)/180,m=new Ft(...c,i),p=new Ft(...u,i),y=new wt().setFromEuler(m),v=new wt().setFromEuler(p);y.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const x=e.times[a-1],T=e.times[a]-x,b=new wt,C=new Ft;for(let P=0;P<1;P+=1/_)b.copy(y.clone().slerp(v.clone(),P)),s.push(x+P*T),C.setFromQuaternion(b,i),o.push(C.x),o.push(C.y),o.push(C.z)}else s.push(e.times[a]),o.push(vt.degToRad(e.values[a])),o.push(vt.degToRad(t.values[a])),o.push(vt.degToRad(n.values[a]))}return[s,o]}}class py{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new _f,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),f=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):f?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),f=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(h){return h.trim().replace(/^"/,"")}),i="connections",s=[c,f],yy(s,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=ja(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ja(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(f){return f.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ja(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class my{parse(e){const t=new ah(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new _f;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let h=0;h<s;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",f=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),f!==""&&(n.attrName=f),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=Qx(new Uint8Array(e.getArrayBuffer(o))),l=new ah(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class ah{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class _f{add(e,t){this[e]=t}}function gy(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===xf(r,0,e.length)}function _y(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function lh(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function vy(r){return r/46186158e3}const xy=[];function _o(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return My(xy,n.buffer,s,o)}const Ya=new Ft,dr=new R;function vf(r){const e=new Le,t=new Le,n=new Le,i=new Le,s=new Le,o=new Le,a=new Le,l=new Le,c=new Le,f=new Le,u=new Le,h=new Le,d=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(dr.fromArray(r.translation));const g=Es(0);if(r.preRotation){const I=r.preRotation.map(vt.degToRad);I.push(g),t.makeRotationFromEuler(Ya.fromArray(I))}if(r.rotation){const I=r.rotation.map(vt.degToRad);I.push(r.eulerOrder||g),n.makeRotationFromEuler(Ya.fromArray(I))}if(r.postRotation){const I=r.postRotation.map(vt.degToRad);I.push(g),i.makeRotationFromEuler(Ya.fromArray(I)),i.invert()}r.scale&&s.scale(dr.fromArray(r.scale)),r.scalingOffset&&a.setPosition(dr.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(dr.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(dr.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(dr.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),f.copy(r.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),m=new Le;m.extractRotation(f);const p=new Le;p.copyPosition(f);const y=p.clone().invert().multiply(f),v=m.clone().invert().multiply(y),x=s,T=new Le;if(d===0)T.copy(m).multiply(_).multiply(v).multiply(x);else if(d===1)T.copy(m).multiply(v).multiply(_).multiply(x);else{const N=new Le().scale(new R().setFromMatrixScale(u)).clone().invert(),U=v.clone().multiply(N);T.copy(m).multiply(_).multiply(U).multiply(x)}const b=c.clone().invert(),C=o.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(b).multiply(a).multiply(o).multiply(s).multiply(C);const w=new Le().copyPosition(P),M=f.clone().multiply(w);return h.copyPosition(M),P=h.clone().multiply(T),P.premultiply(f.invert()),P}function Es(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function ja(r){return r.split(",").map(function(t){return parseFloat(t)})}function xf(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function yy(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function My(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}function Sy(r){const e=new Map,t=new Map,n=r.clone();return yf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function yf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)yf(r.children[n],e.children[n],t)}const ch=new R(0,1,0);function wy(r,e,t,n,i){const s=e.clone().sub(r),o=vt.clamp(s.length(),Math.abs(n-i)+.001,n+i-.001);s.normalize();const a=t.clone().sub(r).addScaledVector(s,-t.clone().sub(r).dot(s));a.lengthSq()<1e-8&&a.copy(new R(0,0,1)).addScaledVector(s,-s.z),a.normalize();const l=(n*n-i*i+o*o)/(2*o);return r.clone().addScaledVector(s,l).addScaledVector(a,Math.sqrt(Math.max(0,n*n-l*l)))}function uh(r,e,t){const n=r.getWorldPosition(new R),i=e.getWorldPosition(new R).sub(n).normalize(),s=t.clone().sub(n).normalize(),o=new wt().setFromUnitVectors(i,s).multiply(r.getWorldQuaternion(new wt));r.quaternion.copy(r.parent.getWorldQuaternion(new wt).invert().multiply(o)),r.updateWorldMatrix(!1,!0)}function Ey(r,e,t){const n=r.getObjectByName("mixamorigHips"),i=["Left","Right"].map(u=>({hip:r.getObjectByName(`mixamorig${u}UpLeg`),knee:r.getObjectByName(`mixamorig${u}Leg`),foot:r.getObjectByName(`mixamorig${u}Foot`),lock:null})),s=[n,...i.flatMap(u=>[u.hip,u.knee,u.foot])];let o=null,a=0;function l(){o&&s.forEach((u,h)=>{u.position.copy(o[h].p),u.quaternion.copy(o[h].q)}),o=null}function c(){l(),a=0,i.forEach(u=>u.lock=null)}function f(u,h){o=s.map(m=>({p:m.position.clone(),q:m.quaternion.clone()})),e.updateWorldMatrix(!0,!0);const d=i.map(m=>{const p=m.foot.getWorldPosition(new R),y=Math.max(0,p.y-e.position.y-.09);m.lock&&(y>.03||p.distanceTo(m.lock)>.38)&&(m.lock=null),!m.lock&&(!h||y<.022)&&(m.lock=p.clone());const v=(m.lock||p).clone();if(v.y=t.heightAt(v.x,v.z)+.09,!m.lock){const x=new R(0,0,.12).applyQuaternion(e.quaternion),T=t.heightAt(v.x+x.x,v.z+x.z),b=Math.min(.035,Math.max(0,T-(v.y-.09)))*Math.min(1,y/.05);v.y=Math.max(p.y,v.y+b)}return{target:v,animated:p,rotation:m.foot.getWorldQuaternion(new wt)}}),g=vt.clamp(Math.min(...d.map(m=>m.target.y-m.animated.y)),-.18,.12);a=vt.damp(a,g,10,u);const _=n.getWorldPosition(new R);_.y+=a,n.position.copy(n.parent.worldToLocal(_)),e.updateWorldMatrix(!0,!0),i.forEach((m,p)=>{const{target:y,rotation:v}=d[p],x=m.hip.getWorldPosition(new R),T=m.knee.getWorldPosition(new R),b=m.foot.getWorldPosition(new R),C=x.distanceTo(T),P=T.distanceTo(b),w=y.clone().sub(x);w.length()>C+P-.002&&y.copy(x).add(w.setLength(C+P-.002));const M=T.clone();uh(m.hip,m.knee,wy(x,y,M,C,P)),uh(m.knee,m.foot,y);const I=t.heightAt(y.x+.08,y.z)-t.heightAt(y.x-.08,y.z),N=t.heightAt(y.x,y.z+.08)-t.heightAt(y.x,y.z-.08),U=Math.hypot(I,N)<.08?new R(-I,.16,-N).normalize():ch,z=new wt().setFromUnitVectors(ch,U);v.premultiply(z),m.foot.quaternion.copy(m.foot.parent.getWorldQuaternion(new wt).invert().multiply(v)),m.foot.updateWorldMatrix(!1,!0)})}return{restore:l,reset:c,update:f}}const Ac=[[-10,-5],[-8,-7],[8,-6],[10,-4],[-10,6],[11,1]],Mf=[{x:-1,z:-2.2,w:1.7,d:.7,h:.65,fallen:!0},{x:4.5,z:2.6,w:1.1,d:.6,h:1.2},{x:-5.2,z:3.8,w:1.1,d:.65,h:1.5},{x:-6,z:-3.8,w:.9,d:.55,h:1.25},{x:1.8,z:-5,w:1.2,d:.6,h:1.6},{x:7.8,z:3.6,w:1,d:.55,h:.9},{x:-7.2,z:5.7,w:1.4,d:.7,h:.45,fallen:!0}],Sf=[{x:3,z:7.7,w:.4,d:2,h:1.1},{x:7.5,z:7.7,w:.4,d:2,h:.65},{x:4,z:8.6,w:2.4,d:.4,h:.65},{x:6.9,z:8.6,w:1.6,d:.4,h:.4}],vo=(r,e)=>({minX:r.x-r.w/2,maxX:r.x+r.w/2,minZ:r.z-r.d/2,maxZ:r.z+r.d/2,height:r.h,kind:e}),Rc=[...Mf.map(r=>vo(r,"broken-grave")),vo({x:-2,z:-.65,w:2.4,d:.9,h:4.2},"grave"),...Sf.map(r=>vo(r,"ruin")),...Ac.map(([r,e])=>vo({x:r,z:e,w:.9,d:.9,h:9},"tree"))],kt=Object.freeze({ap:5,health:30,enemyHealth:4,melee:1.5,ranged:15,radius:.32,splash:3,chainJump:3,lineWidth:.7}),mn=Object.freeze({fireball:{name:"Fireball",ap:3,damage:3,range:15,color:"#ff955c",target:"enemy"},chain:{name:"Chain lightning",ap:4,damage:3,range:15,color:"#9bceff",target:"auto"},bowshot:{name:"Bowshot",ap:2,damage:3,range:15,color:"#edd598",target:"enemy"},powershot:{name:"Powershot",ap:4,damage:1,range:15,color:"#ccadee",target:"point"},slash:{name:"Slash",ap:1,damage:1,range:1.5,color:"#9ed7bd",target:"self"},punch:{name:"Punch",ap:2,damage:2,range:1.5,color:"#e6a37d",target:"enemy"},zap:{name:"Zap",ap:2,damage:2,range:3,color:"#b5bef6",target:"enemy"}}),wf=["fireball","chain","bowshot","powershot","slash"],xo={minX:-12,maxX:12,minZ:-9,maxZ:9},an=(r,e)=>Math.hypot(r.x-e.x,r.z-e.z),by=r=>Math.ceil(r*4-1e-8)/4,cs=r=>r.slice(1).reduce((e,t,n)=>e+an(r[n],t),0);function pr(r,e,t=0){return r.x>e.minX-t&&r.x<e.maxX+t&&r.z>e.minZ-t&&r.z<e.maxZ+t}function ko(r,e,t){let n=0,i=1;for(const[s,o,a]of[["x",t.minX,t.maxX],["z",t.minZ,t.maxZ]]){const l=e[s]-r[s];if(Math.abs(l)<1e-9){if(r[s]<=o||r[s]>=a)return!1;continue}let c=(o-r[s])/l,f=(a-r[s])/l;if(c>f&&([c,f]=[f,c]),n=Math.max(n,c),i=Math.min(i,f),n>=i-1e-9)return!1}return i>1e-8&&n<1-1e-8}function Br(r,e,t=[],n=Rc){const i=kt.radius,s={minX:xo.minX+i,maxX:xo.maxX-i,minZ:xo.minZ+i,maxZ:xo.maxZ-i};if(!pr(r,s)||!pr(e,s))return null;const o=n.map(u=>({minX:u.minX-i,maxX:u.maxX+i,minZ:u.minZ-i,maxZ:u.maxZ+i}));for(const u of t)u.hp>0&&o.push({minX:u.x-i*2,maxX:u.x+i*2,minZ:u.z-i*2,maxZ:u.z+i*2});if(o.some(u=>pr(r,u)||pr(e,u)))return null;const a=[{...r},{...e}];for(const u of o)for(const h of[u.minX-.015,u.maxX+.015])for(const d of[u.minZ-.015,u.maxZ+.015]){const g={x:h,z:d};pr(g,s)&&!o.some(_=>pr(g,_))&&a.push(g)}const l=a.map(()=>1/0),c=[],f=new Set;for(l[0]=0;f.size<a.length;){let u=-1;if(a.forEach((h,d)=>{!f.has(d)&&(u<0||l[d]<l[u])&&(u=d)}),u<0||!Number.isFinite(l[u]))return null;if(u===1){const h=[];for(let d=1;d!==void 0;d=c[d])h.unshift(a[d]);return h}f.add(u),a.forEach((h,d)=>{if(f.has(d)||o.some(_=>ko(a[u],h,_)))return;const g=l[u]+an(a[u],h);g<l[d]&&(l[d]=g,c[d]=u)})}return null}function Ef(){return[{id:"player",name:"Elias",x:-2,z:1,hp:30,maxHp:30},...[[1,1],[2.5,1],[4,1],[2,-.5],[4,-.7],[6,-1],[6.8,.8],[7.8,-1.8],[-2,3.5],[-.5,3]].map(([e,t],n)=>({id:"enemy-"+n,name:"Wisp "+(n+1),x:e,z:t,ap:4,hp:kt.enemyHealth,maxHp:kt.enemyHealth})),{id:"warden",name:"Warden",x:3,z:4.8,hp:kt.enemyHealth*3,maxHp:kt.enemyHealth*3,statScale:3,ap:4},{id:"emma",name:"Emma",x:-3.5,z:1.25,hp:30,maxHp:30}]}function Pn(r){return by(r.filter(e=>e.type==="move").reduce((e,t)=>e+cs(t.path),0))+r.filter(e=>e.type!=="move").reduce((e,t)=>e+mn[t.type].ap,0)}function Li(r,e){return!Rc.some(t=>ko(r,e,t))}const Wt=r=>r.id==="player"||r.id==="emma",Xi=r=>r.filter(e=>Wt(e)&&e.hp>0),hh=(r,e)=>Xi(r).find(t=>!e.has(t.id));function Cc(r){return!Xi(r).length||r.filter(e=>!Wt(e)).every(e=>e.hp<=0)}function bf(r,e,t,n){const i=Br(r,t,n);if(!i)return{error:"No clear route to that position."};if(cs(i)<.01)return{error:"Choose a different position."};const s=[{type:"move",path:i}],o=Pn([...e,...s])-Pn(e);return{actions:s,cost:o,...Pn(e)+o>kt.ap?{error:"That move exceeds your remaining AP."}:{}}}function Ty(r,e){return e.filter(t=>t.hp>0&&Wt(r)!==Wt(t))}function wr(r,e,t){return an(r,e)<=t+1e-8}function Pc(r,e,t,n,i){const s=mn[r],o=Ty(e,t),a=t.find(u=>u.id===n);let l=[],c=[],f=null;if(r==="slash")l=o.filter(u=>wr(e,u,s.range)&&Li(e,u)).map(u=>({id:u.id,damage:1})),f={center:e,radius:s.range};else if(r==="chain"){let u=e,h=s.range;const d=new Set;for(let g=3;g>0;g--){const _=o.filter(m=>!d.has(m.id)&&wr(u,m,h)&&Li(u,m)).sort((m,p)=>an(u,m)-an(u,p)||m.id.localeCompare(p.id))[0];if(!_)break;l.push({id:_.id,damage:g}),c.push([u,_]),d.add(_.id),u=_,h=kt.chainJump}if(!l.length)return{error:"No enemy in lightning range.",hits:l,segments:c}}else if(r==="powershot"){if(!i)return{error:"Aim at the ground or an enemy.",hits:l,segments:c};const u=an(e,i);if(u<.01)return{error:"Choose a firing direction.",hits:l,segments:c};const h={x:(i.x-e.x)/u,z:(i.z-e.z)/u};let d=s.range;for(const _ of Rc){const m={x:e.x+h.x*d,z:e.z+h.z*d};if(ko(e,m,_)){let p=0,y=d;for(let v=0;v<30;v++){const x=(p+y)/2,T={x:e.x+h.x*x,z:e.z+h.z*x};ko(e,T,_)?y=x:p=x}d=p}}const g={x:e.x+h.x*d,z:e.z+h.z*d};c=[[e,g]],l=o.filter(_=>{const m=_.x-e.x,p=_.z-e.z,y=m*h.x+p*h.z,v=Math.abs(m*h.z-p*h.x);return y>0&&y<=d&&v<=kt.lineWidth/2+kt.radius&&Li(e,_)}).map(_=>({id:_.id,damage:1}))}else{if(!a||a.hp<=0)return{error:"Choose a living enemy.",hits:l,segments:c};if(!o.includes(a))return{error:"Choose an enemy.",hits:l,segments:c};if(!wr(e,a,s.range*(e.statScale||1)))return{error:"Target is out of range.",hits:l,segments:c};if(!Li(e,a))return{error:"Blocked by scenery.",hits:l,segments:c};c=[[e,a]],l=[{id:a.id,damage:s.damage*(e.statScale||1)}],r==="fireball"&&(f={center:a,radius:kt.splash},l=t.filter(u=>u.hp>0&&wr(a,u,kt.splash)&&Li(a,u)).map(u=>({id:u.id,damage:s.damage})))}return{hits:l,segments:c,area:f}}function Tf(r,e,t,n,i,s){const o=Pc(r,e,n,i,s),a=mn[r].ap;if(o.error)return{...o,cost:a};const l=[{type:r,targetId:i,point:s?{x:s.x,z:s.z}:void 0}];return{...o,actions:l,cost:a,...Pn(t)+a>kt.ap?{error:"Not enough AP: "+mn[r].name+" needs "+a+"."}:{}}}function Af(r,e,t){const n=Pc(r.type,e,t,r.targetId,r.point);if(!n.error)for(const i of n.hits){const s=t.find(o=>o.id===i.id);s.hp=Math.max(0,s.hp-i.damage)}return n}function Ay(r,e,t){const n=t.map(l=>({...l})),i=n.find(l=>l.id===r.id),s=[],o=r.ap??4,a=r.statScale||1;for(let l=0;l<12;l++){const c=o-Pn(s);if(c<.25)break;const f=Xi(n),u=n.filter(y=>y!==i),h=f.filter(y=>wr(i,y,3*a)&&Li(i,y)).sort((y,v)=>+(v.hp<=2*a)-+(y.hp<=2*a)||an(i,y)-an(i,v));if(c>=2&&h.length){const y=h[0],v={type:wr(i,y,1.5*a)?"punch":"zap",targetId:y.id};s.push(v),Af(v,i,n);continue}if(h.length||!f.length)break;const d=[];for(const y of f){const v=Math.atan2(i.z-y.z,i.x-y.x);for(let x=0;x<16;x++){const T=v+x*Math.PI/8,b={x:y.x+Math.cos(T)*2.8*a,z:y.z+Math.sin(T)*2.8*a};if(!Li(b,y))continue;const C=Br(i,b,u);C&&d.push(C)}}if(d.sort((y,v)=>cs(y)-cs(v)),!d.length)break;const g=[{x:i.x,z:i.z}],_=d[0];let m=c;for(const y of _.slice(1)){const v=g.at(-1),x=an(v,y);if(x<=m)g.push(y),m-=x;else{g.push({x:v.x+(y.x-v.x)*m/x,z:v.z+(y.z-v.z)*m/x});break}}if(cs(g)<.01)break;const p={type:"move",path:g};if(Pn([...s,p])>o)break;s.push(p),Object.assign(i,g.at(-1))}return s}const Kt=Object.freeze({x:-2,z:-.5,approach:{x:-2,z:1},arrival:1.65}),Ic=Object.freeze([{speaker:"Emma",text:"That's a really old stone..."},{speaker:"Elias",text:"Yeah, I can almost make out the date. Let me move these vines."},{speaker:"Unseen voice",text:"The touch of the living is an anathema to us... Die for your transgression!"}]),Ka=Object.freeze({x:-3.5,z:1.25,name:"Emma"});function Rf(r){return Math.hypot(r.x-Kt.x,r.z-Kt.z)<=Kt.arrival}function Ry(r){return r.filter(e=>e.id!=="player"&&e.id!=="emma"&&e.id!=="warden").map(e=>e.id).concat(r.filter(e=>e.id==="warden").map(e=>e.id))}const Cf=Object.freeze({speaker:"Emma",text:"Okay. New rule. Don't touch anything ever again."});function Cy(r){for(const e of r)(e.id==="player"||e.id==="emma")&&(e.hp=Math.max(1,e.hp))}const Pf=Object.freeze({speaker:"Wraith",text:"Deum timeo, sed quis es tu?"}),pi=.3,Tr=80,Ar=60,Za=(r,e,t,n,i,s,o)=>o*Math.exp(-(((r-t)/i)**2)-((e-n)/s)**2),Py=(r,e)=>Za(r,e,-5,-4,6,4,1.45)+Za(r,e,8,3,5,6,.9)-Za(r,e,1,2,5,4,.5)+.13*Math.sin(r*.6+e*.25),yo=Array.from({length:Ar+1},(r,e)=>Array.from({length:Tr+1},(t,n)=>Py(-12+n*pi,-9+e*pi)));function ft(r,e){const t=vt.clamp((r+12)/pi,0,Tr),n=vt.clamp((e+9)/pi,0,Ar),i=Math.min(Tr-1,Math.floor(t)),s=Math.min(Ar-1,Math.floor(n)),o=t-i,a=n-s,l=yo[s][i],c=yo[s][i+1],f=yo[s+1][i],u=yo[s+1][i+1];return o+a<=1?l+(c-l)*o+(f-l)*a:u+(f-u)*(1-o)+(c-u)*(1-a)}function Iy(){const r=new Gi(24,18,Tr,Ar);r.rotateX(-Math.PI/2);const e=r.attributes.position;for(let l=0;l<e.count;l++)e.setY(l,ft(e.getX(l),e.getZ(l)));r.computeVertexNormals();const t=new it(r,new Bo({color:"#626957",roughness:1}));t.receiveShadow=!0;const n=[];for(let l=0;l<=Tr;l++)n.push([-12+l*pi,-9]);for(let l=1;l<=Ar;l++)n.push([12,-9+l*pi]);for(let l=Tr-1;l>=0;l--)n.push([-12+l*pi,9]);for(let l=Ar-1;l>=0;l--)n.push([-12,-9+l*pi]);const i=[];for(let l=1;l<n.length;l++){const[c,f]=n[l-1],[u,h]=n[l];i.push(c,ft(c,f),f,u,ft(u,h),h,c,-1.6,f,u,ft(u,h),h,u,-1.6,h,c,-1.6,f)}const s=new dt;s.setAttribute("position",new Xe(i,3)),s.computeVertexNormals();const o=new it(s,new Bo({color:"#414b3d",roughness:1,side:Gt}));t.add(o);const a=new it(new Gi(24,18),o.material);return a.rotation.x=Math.PI/2,a.position.y=-1.6,t.add(a),t}function Us(r,e=ft,t=.04){const n=r.geometry.attributes.position,i=n.array.slice(),s=new R,o=new Le;return r.onBeforeRender=()=>{o.copy(r.matrixWorld).invert();for(let a=0;a<n.count;a++)s.fromArray(i,a*3).applyMatrix4(r.matrixWorld),s.y=e(s.x,s.z)+t,s.applyMatrix4(o),n.setXYZ(a,s.x,s.y,s.z);n.needsUpdate=!0},r.frustumCulled=!1,r}function Ly(r){const e=new Set(r.children),t=new Map,n=h=>(t.has(h)||t.set(h,new Bo({color:h,roughness:1,flatShading:!0})),t.get(h));function i(h,d,g,_,m,p=r){const y=new it(h,n(d));return y.position.set(g,_,m),y.castShadow=!0,y.receiveShadow=!0,p.add(y),y}const s=(h,d,g,_,m,p,y,v=r)=>i(new Hr(_,m,p),y,h,d,g,v);function o(h,d,g,_,m=r){const p=new R(...h),y=new R(...d),v=i(new ei(g*.8,g,p.distanceTo(y),7),_,0,0,0,m);return v.position.copy(p).lerp(y,.5),v.quaternion.setFromUnitVectors(new R(0,1,0),y.sub(p).normalize()),v}function a(h,d,g,_,m,p,y=r){const v=new vs;return v.moveTo(-g/2,-.2),v.lineTo(g/2,-.2),v.lineTo(g/2,_*.76),v.lineTo(g*.28,_*.9),v.lineTo(g*.06,_*.78),v.lineTo(-g*.12,_),v.lineTo(-g/2,_*.92),v.closePath(),i(new Oo(v,{depth:m,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:1,steps:1}),p,h,.04,d-m/2,y)}const l=Iy();r.add(l);for(const[h,d]of Mf.entries()){if(a(d.x,d.z,d.w,d.h,d.d,h%2?"#7e8679":"#919183"),s(d.x,.035,d.z+.35,d.w+.15,.07,d.d+.7,"#4e5b48"),!d.fallen)for(let _=0;_<3;_++)s(d.x,d.h*.55-_*.13,d.z+d.d/2+.027,d.w*.46,.026,.016,"#4d584e");const g=a(d.x+d.w*.25,d.z+.28,d.w*.35,.16,.2,"#a09d8b");g.rotation.y=.7+h}const c=new Ht;c.position.set(Kt.x,0,Kt.z-.15),r.add(c),s(0,.13,0,2.4,.26,.9,"#757e70",c),s(0,.34,0,2.12,.18,.75,"#a2a18c",c),s(0,1.5,0,1.38,2.25,.4,"#818d80",c),s(0,1.6,.215,1.1,1.8,.035,"#586b62",c);for(const h of[-.92,.92])s(h,1.65,0,.27,2.5,.56,"#999f8d",c),s(h,2.86,0,.43,.18,.68,"#b0ad97",c),i(new Nr(.23,.65,4),"#89947f",h,3.23,0,c);const f=new vs;f.moveTo(-1.13,2.82),f.quadraticCurveTo(-.85,3.57,0,4.2),f.quadraticCurveTo(.85,3.57,1.13,2.82),f.lineTo(.76,2.82),f.quadraticCurveTo(.5,3.42,0,3.78),f.quadraticCurveTo(-.5,3.42,-.76,2.82),f.closePath(),i(new Oo(f,{depth:.48,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:1}),"#a5aa94",0,0,-.24,c),i(new Jo(.3,.055,6,24),"#b8b397",0,2.2,.26,c),s(0,2.2,.28,.055,.44,.035,"#b8b397",c);for(let h=0;h<5;h++)s(0,1.6-h*.15,.248,.73-h*.06,.023,.018,"#bec1a6",c);const u=new Ht;c.add(u);for(let h=0;h<5;h++){const d=Array.from({length:18},(g,_)=>new R(-.85+h*.41+Math.sin(_*.65+h)*.1,.2+_*.15,.32));i(new Sc(new Gh(d),36,.023,5,!1),"#354e39",0,0,0,u);for(let g=2;g<18;g+=2){const _=i(new yc(.12),"#536c40",...d[g].toArray(),u);_.scale.set(1,.5,.3),_.rotation.z=g}}for(const[h,[d,g]]of Ac.entries()){const _=8.5+h%3*1.1;i(new ei(.15,.45,_*.73,8),"#4d4439",d,_*.365,g);for(let m=0;m<4;m++){const p=m*Math.PI/2+h;o([d,.14,g],[d+Math.cos(p)*.9,.04,g+Math.sin(p)*.9],.12,"#4d4439")}for(let m=0;m<5;m++){const p=i(new Nr(2.05-m*.28,3.4-m*.24,9),"#"+["314b42","3a5547","425c49"][m%3],d,_*.39+m*1.05,g);p.rotation.y=h+m*.37}}s(5.25,.025,7.6,4.9,.05,2.5,"#373b34");for(const h of Sf)a(h.x,h.z,h.w,h.h,h.d,"#626355");for(const[h,d,g]of[[3.1,6.85,2.9],[3.1,8.4,2.1],[7.35,8.4,1.6]])o([h,.05,d],[h+.08,g,d],.14,"#292b28"),o([h,g*.6,d],[h+.8,g*.8,d],.08,"#34352f");o([3.15,.18,7],[6.5,.19,8.3],.14,"#282c27"),o([4,.18,8.3],[6.4,.13,7.15],.11,"#393a30");for(let h=0;h<8;h++)s(3.4+h*.48,.065,7.7+h%2*.2,.31,.08,1.45,"#45453a").rotation.y=.08*Math.sin(h);for(const h of r.children)if(!e.has(h)&&h!==l)if(h.isMesh&&h.geometry.type==="BoxGeometry"&&h.position.y<.1){h.updateMatrix();const d=h.geometry.attributes.position,g=new R,_=h.matrix.clone().invert();for(let m=0;m<d.count;m++)g.fromBufferAttribute(d,m).applyMatrix4(h.matrix),g.y+=ft(g.x,g.z),g.applyMatrix4(_),d.setXYZ(m,g.x,g.y,g.z);d.needsUpdate=!0,h.geometry.computeVertexNormals()}else h.position.y+=ft(h.position.x,h.position.z);return{ground:l,vines:u}}const hi={left:-18,right:18,top:19,bottom:-17,near:.1,far:160,position:[32,32,32],target:[0,0,0]},fi={size:1254,landmarks:[[[594,618],[595,636]],[[594,498],[590,498]],[[657,602],[655,614]],[[674,756],[677,769]],[[405,647],[405,653]],[[573,479],[576,483]],[[794,606],[795,614]],[[730,803],[734,814]],[[309,642],[308,657]],[[504,432],[500,436]],[[504,184],[500,183]],[[602,431],[604,433]],[[602,171],[604,163]],[[972,745],[984,750]],[[972,415],[987,423]],[[233,601],[229,607]],[[233,341],[226,339]],[[873,815],[879,812]],[[873,542],[881,540]],[[110,616],[104,618]],[[701,956],[700,963]],[[1144,708],[1152,720]],[[553,361],[553,361]]]},fh=(r,e)=>{const t=(r[0]-e[0])**2+(r[1]-e[1])**2;return t<1e-14?0:t*Math.log(t)};function Dy(){const r=fi.landmarks.map(([o])=>[o[0]/fi.size,1-o[1]/fi.size]),e=r.length,t=r.map((o,a)=>[...r.map(l=>fh(o,l)),1,...o,...fi.landmarks[a][1].map((l,c)=>c?1-l/fi.size:l/fi.size)]);t.push([...Array(e).fill(1),0,0,0,0,0],[...r.map(o=>o[0]),0,0,0,0,0],[...r.map(o=>o[1]),0,0,0,0,0]);for(let o=0;o<e+3;o++){let a=o;for(let c=o+1;c<e+3;c++)Math.abs(t[c][o])>Math.abs(t[a][o])&&(a=c);[t[o],t[a]]=[t[a],t[o]];const l=t[o][o];if(Math.abs(l)<1e-12)throw Error("Invalid painting registration");for(let c=o;c<e+5;c++)t[o][c]/=l;for(let c=0;c<e+3;c++)if(c!==o){const f=t[c][o];for(let u=o;u<e+5;u++)t[c][u]-=f*t[o][u]}}const n=t.map(o=>o.slice(e+3));function i(o){const a=[0,0];for(let l=0;l<2;l++)a[l]=n[e][l]+n[e+1][l]*o[0]+n[e+2][l]*o[1],r.forEach((c,f)=>a[l]+=n[f][l]*fh(o,c));return a}function s(o){let a=[...o];for(let l=0;l<12;l++){const c=i(a);a=[a[0]+o[0]-c[0],a[1]+o[1]-c[1]]}return a}return{points:r,weights:n,map:i,inverse:s}}const Uy=[[0,[[500,177],[528,230],[552,265],[562,300],[580,353],[577,398],[540,413],[513,439],[486,441],[463,426],[418,404],[426,371],[417,344],[441,284],[459,250]]],[1,[[603,158],[624,202],[643,239],[650,283],[668,327],[677,371],[660,401],[625,415],[618,440],[590,443],[573,415],[549,400],[556,352],[547,310],[563,256],[580,209]]],[4,[[226,334],[251,387],[264,429],[281,466],[288,505],[304,540],[299,571],[264,587],[248,608],[213,615],[193,593],[151,572],[150,546],[163,502],[180,455],[192,409]]],[2,[[987,417],[1008,461],[1021,501],[1044,549],[1061,594],[1072,638],[1091,687],[1090,713],[1062,735],[1019,743],[1002,762],[975,767],[955,747],[930,733],[923,703],[941,639],[951,571],[967,500]]],[5,[[881,533],[900,578],[916,610],[929,650],[945,682],[951,720],[971,754],[961,780],[922,796],[897,819],[865,825],[849,800],[815,787],[819,760],[830,720],[840,676],[854,620]]]];function Ny(r,e,t){const n=new Ht;for(const[i,s]of Uy){const[o,a]=Ac[i],l=new vs;s.forEach(([h,d],g)=>{const _=e.inverse([h/fi.size,1-d/fi.size]);g?l.lineTo(_[0],_[1]):l.moveTo(_[0],_[1])}),l.closePath();const c=new Mc(l),f=c.attributes.position;for(let h=0;h<f.count;h++){const d=new R(f.getX(h)*2-1,f.getY(h)*2-1,-1).unproject(r),g=new R(f.getX(h)*2-1,f.getY(h)*2-1,1).unproject(r),_=g.sub(d),m=(o+a-d.x-d.z)/(_.x+_.z);d.addScaledVector(_,m),f.setXYZ(h,d.x,d.y,d.z)}c.computeVertexNormals();const u=new it(c,t);n.add(u)}return n}async function Fy(r,e){const t=await new nf().loadAsync(new URL(""+new URL("graveyard-paint-v2-BsvPqWiy.png",import.meta.url).href,import.meta.url).href);t.colorSpace=mt,t.anisotropy=8;const n=new Qo(hi.left,hi.right,hi.top,hi.bottom,hi.near,hi.far);n.position.fromArray(hi.position),n.lookAt(...hi.target),n.updateMatrixWorld();const i=new Le().multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),s=Dy(),o=s.points.length,a={control:{value:s.points.map(u=>new ae(...u))},weights:{value:s.weights.map(u=>new ae(...u))}},l=new Hn({uniforms:{...a,painting:{value:t},captureProjection:{value:i}},side:Gt,toneMapped:!1,vertexShader:"uniform mat4 captureProjection;varying vec2 paintUV;void main(){vec4 world=modelMatrix*vec4(position,1.);paintUV=(captureProjection*world).xy*.5+.5;gl_Position=projectionMatrix*viewMatrix*world;}",fragmentShader:`uniform sampler2D painting;uniform vec2 control[${o}];uniform vec2 weights[${o+3}];varying vec2 paintUV;void main(){vec2 uv=weights[${o}]+weights[${o+1}]*paintUV.x+weights[${o+2}]*paintUV.y;for(int i=0;i<${o};i++){vec2 d=paintUV-control[i];float r=dot(d,d);uv+=weights[i]*r*log(max(r,1.e-14));}if(any(lessThan(paintUV,vec2(0.)))||any(greaterThan(paintUV,vec2(1.))))discard;vec4 c=texture2D(painting,uv);if(c.a<.12)discard;gl_FragColor=vec4(c.rgb,1.);
#include <colorspace_fragment>
}`}),c=[];for(const u of r)u.traverse(h=>{h.isMesh&&(c.push({o:h,material:h.material,cast:h.castShadow,visible:h.visible}),h.material=l,h.castShadow=!1,h.geometry.type==="ConeGeometry"&&h.geometry.parameters.radius>1&&(h.visible=!1))});const f=Ny(n,s,l);return e.add(f),{setEnabled(u){f.visible=u;for(const h of c)h.o.visible=u&&h.o.geometry.type==="ConeGeometry"&&h.o.geometry.parameters.radius>1?!1:h.visible,h.o.material=u?l:h.material,h.o.castShadow=u?!1:h.cast}}}const Oy={fireball:"cast",chain:"cast",zap:"cast",bowshot:"bow",powershot:"bow",slash:"draw",punch:"draw"};function By(r,e,t){const n=r.animations.find(s=>s.duration>0&&s.tracks.length)?.clone();if(!n)throw new Error(`Missing animation: ${t}`);const i=new Set;e.traverse(s=>{s.isBone&&i.add(s.name)});for(const s of n.tracks){if(!i.has(s.name.split(".")[0]))throw new Error(`Incompatible animation: ${t} / ${s.name}`);if(s.name.endsWith("Hips.position"))for(let o=0;o<s.values.length;o+=3)s.values[o]=0,s.values[o+2]=0}return n.name=t,n}function zy(r,e,t){const n=r.actions[e];return n?(r.actions[r.motion]?.fadeOut(.12),n.reset().setLoop(Ih,1).setEffectiveWeight(1).setEffectiveTimeScale(n.getClip().duration/t),n.clampWhenFinished=!0,n.fadeIn(.12).play(),r.motion=e,r.oneShot={action:n,duration:t},r.ik.reset(),n):null}function ky(r){r.oneShot&&(r.oneShot.action.fadeOut(.12),r.oneShot=null,r.motion=r.restMotion||"idle",r.actions[r.motion].reset().setEffectiveWeight(1).fadeIn(.12).play(),r.ik.reset())}function If(r,e,t,n=[],{preview:i=!1,invalid:s=!1,heightAt:o=()=>0}={}){const a=new Ht,l=new Set,c=new R(r.x,o(r.x,r.z)+1.15,r.z),f=new R(e.x,o(e.x,e.z)+1.15,e.z),u=f.clone().sub(c),h=u.length(),d=u.clone().normalize(),g=.8,_=.32,m=(w,M)=>{const I=new dn({color:s?"#d78177":w,transparent:!0,opacity:M,depthWrite:!1,blending:zn,toneMapped:!1,side:Gt});return l.add(I),I},p=new ei(1,1,1,12);l.add(p);const y=[[.035,"#fff3ff",.9],[.1,"#dba3ff",.5],[t/2,"#966aff",.16]].map(([w,M,I])=>{const N=m(M,I),U=new it(p,N);return U.quaternion.setFromUnitVectors(new R(0,1,0),d),a.add(U),{mesh:U,radius:w,opacity:I}}),v=new Gi(t,h,1,Math.ceil(h/.2));l.add(v);const x=new it(v,m("#b89bff",.13));x.rotation.set(-Math.PI/2,Math.atan2(d.x,d.z),0,"YXZ"),x.position.copy(c).add(f).multiplyScalar(.5),x.position.y=.045,a.add(Us(x,o));const T=new Nr(.16,.65,8);l.add(T);const b=new it(T,m("#fff2ff",1));b.quaternion.setFromUnitVectors(new R(0,1,0),d),a.add(b);const C=new Jo(.34,.035,6,32);l.add(C);const P=n.map(w=>{const M=new it(C,m("#e5baff",.8));return M.position.set(w.x,o(w.x,w.z)+1.15,w.z),M.quaternion.setFromUnitVectors(new R(0,0,1),d),a.add(M),{ring:M,at:vt.clamp(new R(w.x-r.x,0,w.z-r.z).dot(d)/Math.max(h,.001),0,1)*_,played:!1}});return{root:a,duration:g,update(w,M){const I=i?1:Math.min(1,w/_),N=i?.3:Math.max(0,1-Math.max(0,w-_)/(g-_));for(const U of y){const z=h*I;U.mesh.position.copy(c).addScaledVector(d,z/2),U.mesh.scale.set(U.radius,Math.max(.001,z),U.radius),U.mesh.material.opacity=U.opacity*N}x.visible=i,b.visible=!i&&w<_,b.position.copy(c).addScaledVector(d,h*I);for(const U of P){const z=w-U.at;U.ring.visible=i||z>=0&&z<.4,U.ring.scale.setScalar(i?1:1+Math.max(0,z)*2),U.ring.material.opacity=i?.3:Math.max(0,1-z/.4)*.8,!i&&z>=0&&!U.played&&(U.played=!0,M?.())}},dispose(){for(const w of l)w.dispose();a.removeFromParent()}}}function Lf(r,e,t,{preview:n=!1,invalid:i=!1,heightAt:s=()=>0}={}){const o=new Ht,a=new Set,l=.38,c=1.1,f=new Zo(1,32,20);a.add(f);const u=new Hn({transparent:!0,depthWrite:!1,blending:zn,side:Gt,uniforms:{time:{value:0},alpha:{value:1},tint:{value:new Fe(i?"#e16a74":"#ff6b12")}},vertexShader:"varying vec3 p; void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 p; uniform float time; uniform float alpha; uniform vec3 tint; void main(){float n=sin(p.x*13.0+time*7.0+sin(p.z*9.0))*sin(p.y*11.0-time*5.0)+sin(p.z*17.0+p.x*8.0-time*6.0)*0.5;float hot=smoothstep(-0.4,1.1,n);vec3 c=mix(tint,vec3(1.0,0.88,0.3),hot);gl_FragColor=vec4(c,alpha*(0.15+hot*0.65));}"});a.add(u);const h=new it(f,u);h.position.set(e.x,s(e.x,e.z)+.08,e.z),o.add(h);const d=new dn({color:"#fff1a1",transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1});a.add(d);const g=new it(f,d);o.add(g);const _=Array.from({length:9},()=>{const U=d.clone();U.color.set("#ff822b"),a.add(U);const z=new it(f,U);return o.add(z),z}),m=new Yo(t,64),p=new dn({color:i?"#d78177":"#ff8c36",transparent:!0,opacity:.12,depthWrite:!1,side:Gt});a.add(m),a.add(p);const y=new it(m,p);y.rotation.x=-Math.PI/2,y.position.set(e.x,.04,e.z),o.add(Us(y,s));const v=new Float32Array(240),x=new dt;x.setAttribute("position",new pn(v,3)),a.add(x);const T=new qo({color:"#ffc971",size:.075,transparent:!0,depthWrite:!1,blending:zn,toneMapped:!1});a.add(T);const b=new mc(x,T);o.add(b);const C=Array.from({length:80},(U,z)=>({angle:z*2.399,r:.3+Math.random()*.7,y:Math.random()*2})),P=new zo("#ff8a32",0,7,2);o.add(P);const w=new R(r.x,s(r.x,r.z)+1.25,r.z),M=new R(e.x,s(e.x,e.z)+1.1,e.z);let I=!1;function N(U){const z=w.clone().lerp(M,vt.clamp(U,0,1));return z.y+=Math.sin(vt.clamp(U,0,1)*Math.PI)*.6,z}return{root:o,duration:c,update(U,z){const W=Math.max(0,U-l),V=Math.max(0,1-W/(c-l));u.uniforms.time.value=U,g.visible=!n&&U<l,g.position.copy(N(U/l)),g.scale.setScalar(.18+Math.sin(U*45)*.025),_.forEach((Z,k)=>{Z.visible=g.visible&&U>k*.015,Z.position.copy(N((U-k*.015)/l)),Z.scale.setScalar(.17*(1-k/10)),Z.material.opacity=.5*(1-k/10)}),h.visible=n||U>=l,h.scale.setScalar(n?t:t*Math.min(1,W/.22)),h.scale.y*=.62,u.uniforms.alpha.value=n?.22:V*.8,y.visible=n||U>=l,y.material.opacity=n?.12:V*.22,b.visible=!n&&U>=l,T.opacity=V,C.forEach((Z,k)=>{const ne=t*Z.r*Math.min(1,W/.35);v[k*3]=e.x+Math.cos(Z.angle)*ne,v[k*3+1]=s(e.x,e.z)+.2+Z.y*Math.sin(Math.min(1,W/.8)*Math.PI),v[k*3+2]=e.z+Math.sin(Z.angle)*ne}),x.attributes.position.needsUpdate=!0,P.position.copy(g.visible?g.position:M),P.intensity=n?0:g.visible?2:9*V*V,!n&&U>=l&&!I&&(I=!0,z?.())},dispose(){for(const U of a)U.dispose();o.removeFromParent()}}}function Df(r,{preview:e=!1,invalid:t=!1,heightAt:n=()=>0}={}){const i=new Ht,s=new ei(1,1,1,5),o=new R(0,1,0),a=new Set([s]),l=[],c=(f,u)=>{const h=new dn({color:t?"#d78177":f,transparent:!0,opacity:u,blending:zn,depthWrite:!1,toneMapped:!1});return a.add(h),h};for(const[f,[u,h]]of r.entries()){let ne=function(ue,Se,Ue,Ge){ue.position.copy(Se).add(Ue).multiplyScalar(.5),ue.scale.set(Ge,Se.distanceTo(Ue),Ge),ue.quaternion.setFromUnitVectors(o,Ue.clone().sub(Se).normalize())},pe=function(){const ue=Array.from({length:y+1},(Se,Ue)=>{const Ge=Ue/y,Ve=g.clone().lerp(_,Ge);return Ue&&Ue<y&&(Ve.addScaledVector(p,(Math.random()-.5)*.65),Ve.y+=(Math.random()-.5)*.5),Ve});for(const Se of C)ne(Se.mesh,ue[Se.index],ue[Se.index+1],Se.radius);for(let Se=0;Se<3;Se++){let Ue=ue[Math.floor((Se+1)*y/4)].clone();for(let Ge=0;Ge<3;Ge++){const Ve=Ue.clone().addScaledVector(p,(Se%2?1:-1)*(.15+Math.random()*.2));Ve.y+=(Math.random()-.3)*.4,ne(P[Se*3+Ge],Ue,Ve,.012*(1-Ge*.25)),Ue=Ve}}};const d=new Ht;i.add(d);const g=new R(u.x,n(u.x,u.z)+1.25,u.z),_=new R(h.x,n(h.x,h.z)+1.25,h.z),m=_.clone().sub(g),p=new R(-m.z,0,m.x).normalize(),y=Math.max(8,Math.ceil(m.length()*4)),v=c("#efffff",1),x=c("#65bfff",.7),T=c("#326cff",.13),b=c("#8cdaff",.7),C=[];for(let ue=0;ue<y;ue++)for(const[Se,Ue]of[[.016,v],[.045,x],[.11,T]]){const Ge=new it(s,Ue);d.add(Ge),C.push({mesh:Ge,radius:e?Se*2.5:Se,index:ue})}const P=Array.from({length:9},()=>{const ue=new it(s,b);return d.add(ue),ue}),w=new xc(1,1);a.add(w);const M=new it(w,c("#bdefff",.8));M.position.copy(_),d.add(M);const I=new Ko(.85,1,40);a.add(I);const N=new it(I,c("#7dcfff",.7));N.material.side=Gt,N.rotation.x=-Math.PI/2,N.position.set(h.x,.07,h.z),d.add(Us(N,n,.07));const U=new Float32Array(108),z=new dt;z.setAttribute("position",new pn(U,3)),a.add(z);const W=new qo({color:"#b9edff",size:.065,transparent:!0,blending:zn,depthWrite:!1,toneMapped:!1});a.add(W);const V=new mc(z,W);d.add(V);const Z=Array.from({length:36},()=>new R((Math.random()-.5)*3,Math.random()*2+.2,(Math.random()-.5)*3)),k=new zo("#83cfff",0,4,2);k.position.copy(_),d.add(k),pe(),l.push({index:f,group:d,core:v,blue:x,halo:T,branch:b,flash:M,ring:N,particles:V,positions:U,velocities:Z,end:_,light:k,redraw:pe,frame:-1,started:!1})}return{root:i,duration:.65+Math.max(0,r.length-1)*.16,update(f,u){for(const h of l){const d=e?.12:f-h.index*.16;if(h.group.visible=d>=0&&d<.65-1e-8,!h.group.visible)continue;h.started||(h.started=!0,e||u?.());const g=e?.32:Math.max(0,1-d/.42)*(.65+.35*Math.abs(Math.sin(d*75))),_=Math.floor(e?f*8:d*30);_!==h.frame&&d<.36&&(h.redraw(),h.frame=_),h.flash.visible=!e,h.ring.visible=!e,h.particles.visible=!e,h.core.opacity=g,h.blue.opacity=g*.65,h.halo.opacity=g*.13,h.branch.opacity=g*.65,h.flash.scale.setScalar(.06+.3*Math.exp(-d*14)),h.flash.material.opacity=Math.exp(-d*12),h.light.intensity=e?0:8*Math.exp(-d*14),h.ring.scale.setScalar(.15+d*1.6),h.ring.material.opacity=Math.max(0,1-d/.5)*.6,h.velocities.forEach((m,p)=>{h.positions[p*3]=h.end.x+m.x*d,h.positions[p*3+1]=h.end.y+m.y*d-d*d*2,h.positions[p*3+2]=h.end.z+m.z*d}),h.particles.geometry.attributes.position.needsUpdate=!0,h.particles.material.opacity=Math.max(0,1-d/.65)}},dispose(){for(const f of a)f.dispose();i.removeFromParent()}}}const Vy=""+new URL("arrow-impact-1-DpJS0wSt.mp3",import.meta.url).href,Hy=""+new URL("arrow-impact-2-BTt34EyJ.mp3",import.meta.url).href,Gy=""+new URL("arrow-impact-3-Dkd6nvaF.mp3",import.meta.url).href,Wy=""+new URL("arrow-impact-4-qTB7vEN-.mp3",import.meta.url).href,Xy=""+new URL("bowshot-1-OnqP4zfK.mp3",import.meta.url).href,qy=""+new URL("bowshot-2-Cm6at_tm.mp3",import.meta.url).href,Yy=""+new URL("bowshot-3-9ywTKRwD.mp3",import.meta.url).href,jy=""+new URL("bowshot-4-1F_SHEA6.mp3",import.meta.url).href,Ky=""+new URL("chain-1-URPKci4P.mp3",import.meta.url).href,Zy=""+new URL("chain-2-D2J-drL2.mp3",import.meta.url).href,Jy=""+new URL("chain-3-CIjt7Swr.mp3",import.meta.url).href,$y=""+new URL("chain-4-JLUp967O.mp3",import.meta.url).href,Qy=""+new URL("elias-hurt-1-BftUrvY6.mp3",import.meta.url).href,eM=""+new URL("elias-hurt-2-Be1PMG7z.mp3",import.meta.url).href,tM=""+new URL("elias-hurt-3-CKJnBn0r.mp3",import.meta.url).href,nM=""+new URL("elias-hurt-4-5HYWeZFK.mp3",import.meta.url).href,iM=""+new URL("emma-hurt-1-BYBiQPW6.mp3",import.meta.url).href,rM=""+new URL("emma-hurt-2-CogKc5oX.mp3",import.meta.url).href,sM=""+new URL("emma-hurt-3-Bvoi6aYY.mp3",import.meta.url).href,oM=""+new URL("emma-hurt-4-Cup3sCN7.mp3",import.meta.url).href,aM=""+new URL("fireball-cast-1-fSpCcPoh.mp3",import.meta.url).href,lM=""+new URL("fireball-cast-2-BYc7_oPc.mp3",import.meta.url).href,cM=""+new URL("fireball-cast-3-Y57uLvu2.mp3",import.meta.url).href,uM=""+new URL("fireball-cast-4-BRUxV9mO.mp3",import.meta.url).href,hM=""+new URL("fireball-impact-1-DoBTgxmE.mp3",import.meta.url).href,fM=""+new URL("fireball-impact-2-DVcPKi1F.mp3",import.meta.url).href,dM=""+new URL("fireball-impact-3-BYtQ3EIv.mp3",import.meta.url).href,pM=""+new URL("fireball-impact-4-8AXcP3Zl.mp3",import.meta.url).href,mM=""+new URL("footstep-1-C9Bpm0Yv.mp3",import.meta.url).href,gM=""+new URL("footstep-2-CywJ8F4L.mp3",import.meta.url).href,_M=""+new URL("footstep-3-lawQdVk7.mp3",import.meta.url).href,vM=""+new URL("footstep-4-DgrX7BVA.mp3",import.meta.url).href,xM=""+new URL("powershot-1-C5e4ePKD.mp3",import.meta.url).href,yM=""+new URL("powershot-2-DFk4rBfp.mp3",import.meta.url).href,MM=""+new URL("powershot-3-Gb2X7WZg.mp3",import.meta.url).href,SM=""+new URL("powershot-4-BHzPwu_e.mp3",import.meta.url).href,wM=""+new URL("punch-1-CB6ufUK1.mp3",import.meta.url).href,EM=""+new URL("punch-2-BKOz4KfJ.mp3",import.meta.url).href,bM=""+new URL("punch-3-D8Dkb8fq.mp3",import.meta.url).href,TM=""+new URL("punch-4-D7MiE3XE.mp3",import.meta.url).href,AM=""+new URL("slash-1-BTuXPpL6.mp3",import.meta.url).href,RM=""+new URL("slash-2-BH-cBNxM.mp3",import.meta.url).href,CM=""+new URL("slash-3-CXJ5v9De.mp3",import.meta.url).href,PM=""+new URL("slash-4-DJv36PVf.mp3",import.meta.url).href,IM=""+new URL("vines-1-CDuFylLt.mp3",import.meta.url).href,LM=""+new URL("vines-2-DYnGWMzc.mp3",import.meta.url).href,DM=""+new URL("vines-3-jCBC3wjh.mp3",import.meta.url).href,UM=""+new URL("vines-4-DA253zmM.mp3",import.meta.url).href,NM=""+new URL("warden-death-1-BjT7_ESN.mp3",import.meta.url).href,FM=""+new URL("warden-death-2-CqlJ86Om.mp3",import.meta.url).href,OM=""+new URL("warden-death-3-D6UBR6qU.mp3",import.meta.url).href,BM=""+new URL("warden-death-4-CB-B44ii.mp3",import.meta.url).href,zM=""+new URL("warden-spawn-1-YaB_dOdB.mp3",import.meta.url).href,kM=""+new URL("warden-spawn-2-CIoIJpMG.mp3",import.meta.url).href,VM=""+new URL("warden-spawn-3-7d7qx0BY.mp3",import.meta.url).href,HM=""+new URL("warden-spawn-4-BiXkt19G.mp3",import.meta.url).href,GM=""+new URL("wisp-death-1-eSJF6iFJ.mp3",import.meta.url).href,WM=""+new URL("wisp-death-2-LC7-y_MV.mp3",import.meta.url).href,XM=""+new URL("wisp-death-3-Dpr0WKhy.mp3",import.meta.url).href,qM=""+new URL("wisp-death-4-BAvzV3GJ.mp3",import.meta.url).href,YM=""+new URL("wisp-spawn-1-CscpyMOh.mp3",import.meta.url).href,jM=""+new URL("wisp-spawn-2-DwsNAuNN.mp3",import.meta.url).href,KM=""+new URL("wisp-spawn-3-42w8Uw26.mp3",import.meta.url).href,ZM=""+new URL("wisp-spawn-4-DydVMUnZ.mp3",import.meta.url).href,JM=""+new URL("wraith-laugh-1-1BGndE58.mp3",import.meta.url).href,$M=""+new URL("zap-1-Clo_sPgl.mp3",import.meta.url).href,QM=""+new URL("zap-2-BzaGD1cJ.mp3",import.meta.url).href,eS=""+new URL("zap-3-BXHEAWbG.mp3",import.meta.url).href,tS=""+new URL("zap-4-Db6kDc0_.mp3",import.meta.url).href,nS=""+new URL("elias-vines-uwTOs1ba.mp3",import.meta.url).href,iS=""+new URL("emma-outro-byAIL3CQ.mp3",import.meta.url).href,rS=""+new URL("emma-stone-CNUzMVlV.mp3",import.meta.url).href,sS=""+new URL("warden-arrival-DYvR-fP4.mp3",import.meta.url).href,oS=""+new URL("warden-warning-C4z1UvQK.mp3",import.meta.url).href,Ct=new Audio(new URL(""+new URL("combat-music-CmPFpBTe.mp3",import.meta.url).href,import.meta.url).href);Ct.loop=!0;Ct.preload="auto";let Xl=0;function aS(){Of(),Xl++,Ct.currentTime=0,Ct.volume=.4,Ct.play().catch(()=>{})}function Uf(r=0){const e=++Xl,t=Ct.volume,n=performance.now();function i(){if(e!==Xl)return;const s=r?Math.min(1,(performance.now()-n)/r):1;Ct.volume=t*(1-s),s<1?requestAnimationFrame(i):(Ct.pause(),Ct.currentTime=0)}i()}function lS(r){Ct.muted=r,kn&&(kn.gain.value=r?0:Vo?.18:.5),Oi&&(Oi.gain.value=r?0:1),Ni&&(Ni.gain.value=r?0:.9)}const cS=[new URL(""+new URL("birds-1-n8lVwFhI.mp3",import.meta.url).href,import.meta.url),new URL(""+new URL("birds-2-CVL-iMLF.mp3",import.meta.url).href,import.meta.url),new URL(""+new URL("birds-3-mcOH8QVB.mp3",import.meta.url).href,import.meta.url),new URL(""+new URL("birds-4-ClC-X96T.mp3",import.meta.url).href,import.meta.url)];let Dt,kn,ql,Mo,bs=!1,Yl=0;const Rr=new Set;async function Lc(){Dt||(Dt=new AudioContext,kn=Dt.createGain(),kn.gain.value=Ct.muted?0:.5,kn.connect(Dt.destination)),await Dt.resume(),dS(),Mo||(Mo=Promise.all(cS.map(async r=>{const e=await fetch(r);if(!e.ok)throw Error("Birdsong could not load");return Dt.decodeAudioData(await e.arrayBuffer())})));try{ql=await Mo,bs&&!Rr.size&&Nf()}catch(r){console.warn(r),Mo=null}}function Nf(){if(!ql||!bs||Rr.size)return;const r=Yl;function e(t){let n=t;ql.forEach((i,s)=>{const o=Dt.createBufferSource();o.buffer=i,o.connect(kn),Rr.add(o),o.onended=()=>{Rr.delete(o),o.disconnect(),s===0&&r===Yl&&bs&&e(n)},o.start(n),n+=i.duration})}e(Dt.currentTime+.05)}function Ff(){bs=!0,Nf()}function Of(){bs=!1,Yl++;for(const r of Rr)r.onended=null,r.stop(),r.disconnect();Rr.clear()}function uS(){Of(),Ff()}addEventListener("pointerdown",Lc);addEventListener("keydown",Lc);const hS=Object.assign({"../assets/sfx/arrow-impact-1.mp3":Vy,"../assets/sfx/arrow-impact-2.mp3":Hy,"../assets/sfx/arrow-impact-3.mp3":Gy,"../assets/sfx/arrow-impact-4.mp3":Wy,"../assets/sfx/bowshot-1.mp3":Xy,"../assets/sfx/bowshot-2.mp3":qy,"../assets/sfx/bowshot-3.mp3":Yy,"../assets/sfx/bowshot-4.mp3":jy,"../assets/sfx/chain-1.mp3":Ky,"../assets/sfx/chain-2.mp3":Zy,"../assets/sfx/chain-3.mp3":Jy,"../assets/sfx/chain-4.mp3":$y,"../assets/sfx/elias-hurt-1.mp3":Qy,"../assets/sfx/elias-hurt-2.mp3":eM,"../assets/sfx/elias-hurt-3.mp3":tM,"../assets/sfx/elias-hurt-4.mp3":nM,"../assets/sfx/emma-hurt-1.mp3":iM,"../assets/sfx/emma-hurt-2.mp3":rM,"../assets/sfx/emma-hurt-3.mp3":sM,"../assets/sfx/emma-hurt-4.mp3":oM,"../assets/sfx/fireball-cast-1.mp3":aM,"../assets/sfx/fireball-cast-2.mp3":lM,"../assets/sfx/fireball-cast-3.mp3":cM,"../assets/sfx/fireball-cast-4.mp3":uM,"../assets/sfx/fireball-impact-1.mp3":hM,"../assets/sfx/fireball-impact-2.mp3":fM,"../assets/sfx/fireball-impact-3.mp3":dM,"../assets/sfx/fireball-impact-4.mp3":pM,"../assets/sfx/footstep-1.mp3":mM,"../assets/sfx/footstep-2.mp3":gM,"../assets/sfx/footstep-3.mp3":_M,"../assets/sfx/footstep-4.mp3":vM,"../assets/sfx/powershot-1.mp3":xM,"../assets/sfx/powershot-2.mp3":yM,"../assets/sfx/powershot-3.mp3":MM,"../assets/sfx/powershot-4.mp3":SM,"../assets/sfx/punch-1.mp3":wM,"../assets/sfx/punch-2.mp3":EM,"../assets/sfx/punch-3.mp3":bM,"../assets/sfx/punch-4.mp3":TM,"../assets/sfx/slash-1.mp3":AM,"../assets/sfx/slash-2.mp3":RM,"../assets/sfx/slash-3.mp3":CM,"../assets/sfx/slash-4.mp3":PM,"../assets/sfx/vines-1.mp3":IM,"../assets/sfx/vines-2.mp3":LM,"../assets/sfx/vines-3.mp3":DM,"../assets/sfx/vines-4.mp3":UM,"../assets/sfx/warden-death-1.mp3":NM,"../assets/sfx/warden-death-2.mp3":FM,"../assets/sfx/warden-death-3.mp3":OM,"../assets/sfx/warden-death-4.mp3":BM,"../assets/sfx/warden-spawn-1.mp3":zM,"../assets/sfx/warden-spawn-2.mp3":kM,"../assets/sfx/warden-spawn-3.mp3":VM,"../assets/sfx/warden-spawn-4.mp3":HM,"../assets/sfx/wisp-death-1.mp3":GM,"../assets/sfx/wisp-death-2.mp3":WM,"../assets/sfx/wisp-death-3.mp3":XM,"../assets/sfx/wisp-death-4.mp3":qM,"../assets/sfx/wisp-spawn-1.mp3":YM,"../assets/sfx/wisp-spawn-2.mp3":jM,"../assets/sfx/wisp-spawn-3.mp3":KM,"../assets/sfx/wisp-spawn-4.mp3":ZM,"../assets/sfx/wraith-laugh-1.mp3":JM,"../assets/sfx/zap-1.mp3":$M,"../assets/sfx/zap-2.mp3":QM,"../assets/sfx/zap-3.mp3":eS,"../assets/sfx/zap-4.mp3":tS}),Bf=new Map,dh=new Map,Di=new Set;let ph,Oi;const fS={footstep:.2,"wisp-spawn":.2,"warden-spawn":.55,"fireball-cast":.4,"fireball-impact":.55,chain:.4,bowshot:.45,"arrow-impact":.4,powershot:.5,slash:.4,zap:.35,punch:.4,"wisp-death":.3,"warden-death":.5,"wraith-laugh":.8,"elias-hurt":.4,"emma-hurt":.4,vines:.5};function dS(){!Dt||ph||(Oi=Dt.createGain(),Oi.gain.value=Ct.muted?0:1,Oi.connect(Dt.destination),ph=Promise.all(Object.entries(hS).map(async([r,e])=>{const t=await fetch(e);if(!t.ok)throw Error("Effect failed: "+r);Bf.set(r,await Dt.decodeAudioData(await t.arrayBuffer()))})).catch(r=>console.warn(r)))}function yn(r){if(!Dt||Dt.state!=="running"||!Oi)return;const e=r==="wraith-laugh"?[1]:[1,2,3,4],t=e.length===1?e:e.filter(a=>a!==dh.get(r)),n=t[Math.floor(Math.random()*t.length)],i=Bf.get(`../assets/sfx/${r}-${n}.mp3`);if(!i)return;if(dh.set(r,n),Di.size>=16){const a=Di.values().next().value;a.stop(),Di.delete(a)}const s=Dt.createBufferSource(),o=Dt.createGain();s.buffer=i,o.gain.value=fS[r]??.4,s.connect(o),o.connect(Oi),s.onended=()=>{Di.delete(s),s.disconnect(),o.disconnect()},Di.add(s),s.start()}function pS(){for(const r of Di)r.stop();Di.clear()}const mS=Object.assign({"../assets/dialogue/elias-vines.mp3":nS,"../assets/dialogue/emma-outro.mp3":iS,"../assets/dialogue/emma-stone.mp3":rS,"../assets/dialogue/warden-arrival.mp3":sS,"../assets/dialogue/warden-warning.mp3":oS}),Ja=new Map;let Ui,Ni,ts=0,Vo=!1;function Dc(){ts++,Vo=!1,Ct.paused||(Ct.volume=.4),Ui&&(Ui.onended=null,Ui.stop(),Ui.disconnect(),Ui=null),kn&&(kn.gain.value=Ct.muted?0:.5)}async function gS(r,e){Dc();const t=ts;try{if(await Lc(),t!==ts)return;const n=mS[`../assets/dialogue/${r}.mp3`];if(!Ja.has(r)){const s=await fetch(n);if(!s.ok)throw Error("Dialogue failed: "+r);Ja.set(r,await Dt.decodeAudioData(await s.arrayBuffer()))}if(t!==ts)return;Ni||(Ni=Dt.createGain(),Ni.connect(Dt.destination)),Ni.gain.value=Ct.muted?0:.9,Vo=!0,Ct.paused||(Ct.volume=.12),kn.gain.value=Ct.muted?0:.18;const i=Dt.createBufferSource();Ui=i,i.buffer=Ja.get(r),i.connect(Ni),i.onended=()=>{t===ts&&(Ui=null,i.disconnect(),Vo=!1,Ct.paused||(Ct.volume=.4),kn.gain.value=Ct.muted?0:.5,e())},i.start()}catch(n){console.warn(n)}}const Oe=r=>document.getElementById(r);Oe("mute").onclick=()=>{const r=Oe("mute").getAttribute("aria-pressed")!=="true";lS(r),Oe("mute").setAttribute("aria-pressed",String(r)),Oe("mute").textContent=r?"Unmute audio":"Mute audio"};const It=new Dp;It.background=new Fe("#192b30");It.fog=new hc("#192b30",65,115);const bt=new zx({antialias:!0,stencil:!0});bt.setPixelRatio(Math.min(devicePixelRatio,2));bt.shadowMap.enabled=!0;bt.shadowMap.type=yh;bt.toneMapping=Mh;bt.toneMappingExposure=1.15;Oe("scene").append(bt.domElement);const Qn=new Qo(-15,15,11,-11,.1,160),Ao=new R(-.5,0,1),_S=new R(32,32,32),Zi=new rf("#ffe1af",3);Zi.position.set(-20,25,0);Zi.castShadow=!0;Zi.shadow.mapSize.set(2048,2048);Object.assign(Zi.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:70});Zi.shadow.bias=-4e-4;Zi.shadow.normalBias=.025;It.add(Zi,new Um("#b1d4e4","#605741",2));const vS=new Set(It.children),{ground:xS,vines:zf}=Ly(It),yS=It.children.filter(r=>!vS.has(r)),MS=Fy(yS,It),SS={heightAt:ft};let ye=Ef(),Tt=[],gn=[],Ut="move",xe="loading",ta=1,jl=1.3,ut=0,kf=!1,Ts=-1,na=[],ti=null,As=0,At=null,sn=null,tn=null;const Ci=new Ht;It.add(Ci);let Bi={x:0,z:0},Zt=-1,jt=null,qi=0,Ns=!1;const Fs=new Set,ns=new Set;let vi=0;const Vt=()=>ye[vi],Vf=()=>ye.filter(r=>r!==Vt()&&r.hp>0),Rs={player:"#79b6ef",emma:"#a69bef",enemy:"#e58f81",move:"#80bcac",...Object.fromEntries(Object.entries(mn).map(([r,e])=>[r,e.color]))};function zi(r,e,t=.8){const n=new it(new Ko(Math.max(0,r-.035),r,96),new dn({color:e,transparent:!0,opacity:t,side:Gt,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.035,Us(n)}function mh(r,e,t=1){return new kh(new dt().setFromPoints(r.flatMap((n,i)=>{if(!i)return[new R(n.x,ft(n.x,n.z)+.055,n.z)];const s=r[i-1],o=Math.ceil(an(s,n)/.2);return Array.from({length:o},(a,l)=>{const c=(l+1)/o,f=s.x+(n.x-s.x)*c,u=s.z+(n.z-s.z)*c;return new R(f,ft(f,u)+.055,u)})})),new pc({color:e,transparent:!0,opacity:t,depthWrite:!1}))}function Uc(r){for(const e of[...r.children])r.remove(e),e.traverse(t=>{if(t.geometry?.dispose(),t.material)for(const n of Array.isArray(t.material)?t.material:[t.material])n.dispose()})}const us=new Ht,Nc=new it(new gc(.23,1.1,4,8),new dn({color:"#b9e2cf",wireframe:!0,transparent:!0,opacity:.35,depthWrite:!1}));Nc.position.y=.9;us.add(Nc,zi(.4,"#b9e2cf"));It.add(us);function Nt(r){Oe("notice").textContent=r}function Hf(){return ye.filter(r=>!Wt(r)&&r.hp>0)}function wS(){return At?bf(Vt(),gn,At,Vf()):null}function ES(r){return Tf(r,Vt(),gn,ye,ye[Zt]?.id,r==="powershot"&&Zt>0?ye[Zt]:At)}let gr=null,_r=null,vr=null;function Yi(){if(gr?.dispose(),gr=null,_r?.dispose(),_r=null,vr?.dispose(),vr=null,Uc(Ci),us.visible=!1,Oe("preview-cost").textContent="",Tt.forEach(o=>o.label.classList.remove("affected")),xe!=="planning")return;const r=Vt(),e=tn||Ut;if(e!=="move"){const o=zi(mn[e].range,Rs[e],.45);o.position.set(r.x,.045,r.z),Ci.add(o)}const t=e==="move"?wS():ES(e);if(!t)return;const n=t.error?"#d78177":Rs[e]||"#c8e1c4",i=t.actions?.find(o=>o.type==="move");if(i){const o=i.path.at(-1);Ci.add(mh(i.path,n,.85)),us.position.set(o.x,ft(o.x,o.z),o.z),us.visible=!0,Nc.material.color.set(n)}if(t.area){const o=zi(t.area.radius,n);o.position.set(t.area.center.x,.07,t.area.center.z),Ci.add(o)}if(e==="chain"&&t.segments?.length)gr=Df(t.segments,{preview:!0,invalid:!!t.error,heightAt:ft}),It.add(gr.root),gr.update(performance.now()/1e3);else if(e==="fireball"&&t.area)_r=Lf(r,t.area.center,t.area.radius,{preview:!0,invalid:!!t.error,heightAt:ft}),It.add(_r.root),_r.update(performance.now()/1e3);else if(e==="powershot"&&t.segments?.length){const[o,a]=t.segments[0];vr=If(o,a,kt.lineWidth,t.hits.map(l=>ye.find(c=>c.id===l.id)),{preview:!0,invalid:!!t.error,heightAt:ft}),It.add(vr.root),vr.update(0)}else if(e!=="bowshot")for(const o of t.segments||[])Ci.add(mh(o,n,.75));for(const o of t.hits||[]){const a=ye.findIndex(f=>f.id===o.id),l=ye[a],c=zi(.53,n);c.position.set(l.x,.065,l.z),Ci.add(c),Tt[a]?.label.classList.add("affected")}const s=(t.hits||[]).map(o=>ye.find(a=>a.id===o.id).name+" −"+o.damage).join(" · ");Oe("preview-cost").textContent=t.error||(e==="move"?"Move":mn[e].name)+": "+t.cost+" AP"+(s?" · "+s:"")}function bS(){const r=na[Ts],e=ti?.name;if(!e)return"Enemies are taking their turns";if(!r)return e+" is preparing";if(r.type==="move")return e+" is moving";const t=ye.find(n=>n.id===r.targetId);return e+" → "+(t?.name||"target")+" · "+mn[r.type].name}function zr(){const r=xe==="planning",e=Hf().length,t=["exploration","approaching","staging","dialogue","arrival-dialogue","victory","outro","rejoining","summoning"].includes(xe);Oe("controls").hidden=t,Oe("controls").classList.toggle("enemy-turn",xe==="enemy"),Oe("grave-marker").hidden=Ns||!["exploration","approaching"].includes(xe),document.body.classList.toggle("narrative",t),Oe("phase").textContent=t?{exploration:"Explore the clearing",approaching:"Approaching the gravestone",staging:"Gathering at the stone",victory:"The clearing is quiet",outro:"The clearing is quiet",rejoining:"Rejoining Elias",dialogue:"The old stone","arrival-dialogue":"The wraith speaks",summoning:"The dead awaken"}[xe]:xe==="loading"?"Loading characters…":xe==="error"?"Load failed":xe==="resolved"?Xi(ye).length?"Encounter won":"Encounter lost":xe==="enemy"?(ti?.name||"Enemies")+" acting":xe==="executing"?"Acting · "+Vt().name:Vt().name+"’s turn · "+e+" enemies",Oe("turn-label").textContent=`${xe==="enemy"?"ENEMY TURN":Vt().name.toUpperCase()+"’S TURN"} · ROUND ${ta}`,Oe("instruction").textContent=xe==="resolved"?Xi(ye).length?"Clearing secured":"Party is down":xe==="loading"?"Loading characters…":xe==="enemy"?bS():xe==="executing"?"Action in progress":"Move. Cast. Move again.";const n=xe==="enemy"?As:Pn(gn),i=xe==="enemy"?ti?.ap??4:kt.ap;Oe("budget").textContent=`${i-n} / ${i}`,Oe("budget").nextElementSibling.textContent="AP remaining",Oe("timeline").replaceChildren();for(let s=0;s<i*4;s++){const o=document.createElement("span");o.className="ap-cell"+(s<Math.round((i-n)*4)?" available":""),Oe("timeline").append(o)}Oe("timeline").setAttribute("aria-label",`${i-n} of ${i} AP remaining`);for(const s of["move",...wf])Oe(s).disabled=!r||(s==="move"?i-n<=0:mn[s].ap>i-n);Oe("execute").disabled=!r,Oe("reset").disabled=!kf,Oe("hint").textContent=xe==="resolved"?"Restart to replay.":r?Ut==="move"?"Drag "+Vt().name+" or the ground to move. End Turn passes to the next character.":mn[Ut].target==="point"?"Click ground or an enemy to aim Powershot. The preview shows everyone in the line.":mn[Ut].target==="enemy"?"Click an enemy to cast. Hover a target to preview affected characters.":Ut==="chain"?"Chain Lightning selects the nearest visible enemy, then jumps up to 3m: 3 → 2 → 1 damage.":"Slash hits every visible enemy within 1.5m.":"Actions resolve one character at a time.",Oe("party-health").replaceChildren(...ye.filter(Wt).map(s=>{const o=document.createElement("div");o.className="party-health"+(xe!=="enemy"&&s===Vt()?" active":"");const a=document.createElement("strong");a.textContent=s.name+" · "+s.hp+"/"+s.maxHp;const l=document.createElement("span"),c=document.createElement("i");return c.style.width=s.hp/s.maxHp*100+"%",l.append(c),o.append(a,l),o})),Tt.forEach((s,o)=>{const a=ye[o];s.label.setAttribute("aria-label",a.name+" health"),s.label.querySelector("strong").textContent=`${a.name} · ${a.hp}/${a.maxHp}`,s.label.querySelector("i").style.width=`${a.hp/a.maxHp*100}%`,s.label.classList.toggle("down",a.hp<=0)})}function yt(){zr(),Yi(),ra()}Oe("move").onclick=()=>{Ut="move",At=null,Zt=-1,tn=null,Nt("Drag to preview; release to move."),yt()};for(const r of wf)Oe(r).onclick=()=>{xe==="planning"&&(Ut=r,At=null,Zt=-1,tn=null,Nt(""),["auto","self"].includes(mn[r].target)?Ho(r):yt())},Oe(r).addEventListener("pointerenter",()=>{xe==="planning"&&!Oe(r).disabled&&(tn=r,At=null,Yi())}),Oe(r).addEventListener("pointerleave",()=>{tn=null,Yi()});const Cn=r=>new Promise(e=>setTimeout(e,r));async function Cs(r,e,t,n=Tt[ye.indexOf(r)]){n.moving=!0;let i=.65;for(const s of e.slice(1)){for(;an(r,s)>.005;){if(t!==ut)return!1;if(xe==="approaching"&&r.id==="player"&&!Ns&&Rf(r))return n.moving=!1,!0;const o=s.x-r.x,a=s.z-r.z,l=Math.hypot(o,a),c=Math.min(l,2.15/60);r.x+=o/l*c,r.z+=a/l*c,i+=c,Wt(r)&&i>=.65&&(yn("footstep"),i=0),n.root.rotation.y=Math.atan2(o,a),await Cn(1e3/60)}r.x=s.x,r.z=s.z}return n.moving=!1,!0}async function Gf(r,e,t,n,i){const s=Tt[ye.indexOf(r)],o=zy(s,e,t);if(!o)return;let a=!1,l;for(;n===ut&&s.oneShot?.action===o;){const c=o.time/o.getClip().duration;if(!a&&c>=.55&&(a=!0,l=i?.()),c>=.999)break;await Cn(16)}n===ut&&s.oneShot?.action===o&&ky(s),await l}function TS(){gn=[],ta=1,Kl(ye[0])}async function AS(r,e,t,n){const i=Oy[e.type],s=t.segments?.[0]?.[1];if(s&&(Tt[ye.indexOf(r)].root.rotation.y=Math.atan2(s.x-r.x,s.z-r.z)),i){await Gf(r,i,i==="draw"?1.5:i==="cast"?2.1:2.2,n,()=>gh(r,e,t,n));return}await gh(r,e,t,n)}async function gh(r,e,t,n){if(e.type==="powershot"&&t.segments?.length){const[f,u]=t.segments[0];Tt[ye.indexOf(r)].root.rotation.y=Math.atan2(u.x-f.x,u.z-f.z);const h=If(f,u,kt.lineWidth,t.hits.map(g=>ye.find(_=>_.id===g.id)),{heightAt:ft});It.add(h.root),yn("powershot");const d=performance.now();try{for(;n===ut;){const g=(performance.now()-d)/1e3;if(h.update(g,()=>yn("arrow-impact")),g>=h.duration)break;await Cn(16)}}finally{h.dispose()}return}if(e.type==="fireball"&&t.area){const f=t.area.center;Tt[ye.indexOf(r)].root.rotation.y=Math.atan2(f.x-r.x,f.z-r.z);const u=Lf(r,f,t.area.radius,{heightAt:ft});It.add(u.root),yn("fireball-cast");const h=performance.now();try{for(;n===ut;){const d=(performance.now()-h)/1e3;if(u.update(d,()=>yn("fireball-impact")),d>=u.duration)break;await Cn(16)}}finally{u.dispose()}return}if(e.type==="chain"){const f=t.segments?.[0]?.[1];f&&(Tt[ye.indexOf(r)].root.rotation.y=Math.atan2(f.x-r.x,f.z-r.z));const u=Df(t.segments||[],{heightAt:ft});It.add(u.root);const h=performance.now();try{for(;n===ut;){const d=(performance.now()-h)/1e3;if(u.update(d,()=>yn("chain")),d>=u.duration)break;await Cn(16)}}finally{u.dispose()}return}yn(e.type==="fireball"?"fireball-cast":e.type);const i=new Ht;It.add(i);const s=Rs[e.type];mn[e.type];const o=new R(r.x,ft(r.x,r.z)+1.1,r.z),a=t.segments?.[0]?.[1];a&&(Tt[ye.indexOf(r)].root.rotation.y=Math.atan2(a.x-r.x,a.z-r.z));let l;a&&["fireball","bowshot","zap"].includes(e.type)&&(l=new it(e.type==="fireball"?new Zo(.22,12,8):new Nr(.06,.6,6),new dn({color:s})),i.add(l),l.quaternion.setFromUnitVectors(new R(0,1,0),new R(a.x,ft(a.x,a.z)+1,a.z).sub(o).normalize()));let c;t.area&&(c=zi(t.area.radius,s),c.position.set(t.area.center.x,.09,t.area.center.z),i.add(c));for(let f=0;f<=20&&n===ut;f++){const u=f/20;l&&l.position.lerpVectors(o,new R(a.x,ft(a.x,a.z)+1,a.z),Math.min(1,u*1.5)),c&&(c.scale.setScalar(Math.max(.02,e.type==="fireball"?(u-.4)/.6:u)),c.visible=e.type!=="fireball"||u>.4),await Cn(16)}Uc(i),It.remove(i)}async function Wf(r,e,t){na=e,ti=r,Ts=-1,Wt(r)||(As=0),yt();for(let n=0;n<e.length;n++){if(t!==ut)return!1;Ts=n;const i=e[n];if(Wt(r)?gn.push(i):As=Pn(e.slice(0,n+1)),zr(),i.type==="move"){if(!await Cs(r,i.path,t))return!1}else{const s=Pc(i.type,r,ye,i.targetId,i.point);if(await AS(r,i,s,t),t!==ut)return!1;const o=Af(i,r,ye);if(!o.error){i.type==="bowshot"&&o.hits.length&&yn("arrow-impact");for(const a of o.hits){const l=ye.find(c=>c.id===a.id);Wt(l)?yn(l.id==="emma"?"emma-hurt":"elias-hurt"):l.hp<=0&&yn(l.id==="warden"?"wraith-laugh":"wisp-death")}}if(o.error||await Promise.all(o.hits.map(a=>ye.find(l=>l.id===a.id)).filter(a=>a.hp>0).map(a=>Gf(a,"hurt",.75,t))),t!==ut)return!1}if(zr(),Cc(ye))break;await Cn(120)}return t===ut}async function Xf(){if(Uf(800),!Xi(ye).length){xe="resolved",Nt("Defeat. Restart to try a different approach."),yt();return}Ns=!0,Cy(ye),vi=0,gn=[],ti=null,At=null,Zt=-1,tn=null,xe="victory",Nt(""),yt();const r=++ut;await Cn(1e3),r===ut&&(xe="outro",ia(),yt())}async function RS(){const r=++ut,e=ye.find(i=>i.id==="emma"),t=ye[0],n=Br(e,t);xe="rejoining",Oe("dialogue").hidden=!0,yt(),!(n&&!await Cs(e,n,r))&&r===ut&&(Fs.delete("emma"),Ff(),jt.moving=!1,jt.ik.reset(),xe="exploration",Ut="move",Nt(""),yt())}async function qf(r){if(xe!=="planning")return;if(r.error){Nt(r.error),yt();return}const e=++ut;if(xe="executing",At=null,tn=null,Nt(""),yt(),!!await Wf(Vt(),r.actions,e)){if(Cc(ye)){Xf();return}if(Vt().hp<=0||Pn(gn)>=kt.ap){xe="planning",zr(),Oe("execute").click();return}xe="planning",Ut="move",Zt=-1,ti=null,Nt(Pn(gn)>=kt.ap?"No AP remaining. End your turn.":""),yt()}}function Ho(r,e=Zt,t=At){xe==="planning"&&qf(Tf(r,Vt(),gn,ye,ye[e]?.id,t))}Oe("execute").onclick=async()=>{if(xe!=="planning")return;ns.add(Vt().id);const r=hh(ye,ns);if(r){Kl(r);return}const e=++ut;if(xe="enemy",ti=null,na=[],Ts=-1,At=null,tn=null,As=0,Nt(""),yt(),await Cn(250),e===ut){for(const t of Hf()){if(!await Wf(t,Ay(t,Xi(ye).sort((n,i)=>an(t,n)-an(t,i))[0],ye),e))return;if(Cc(ye)){Xf();return}}ns.clear(),ta++,Kl(hh(ye,ns))}};function Kl(r){vi=ye.indexOf(r),gn=[],Ut="move",At=null,Zt=-1,tn=null,ti=null,xe="planning",Nt(r.name+"’s turn."),yt()}function ia(){gS(xe==="arrival-dialogue"?"warden-arrival":xe==="outro"?"emma-outro":["emma-stone","elias-vines","warden-warning"][qi],Fc);const r=xe==="arrival-dialogue"?Pf:xe==="outro"?Cf:Ic[qi];Oe("speaker").textContent=r.speaker,Oe("dialogue-text").textContent=r.text,Oe("dialogue").hidden=!1,Oe("dialogue").classList.toggle("unseen",r.speaker==="Unseen voice"),r.speaker==="Elias"&&(Tt[0].root.rotation.y=Math.PI),r.speaker==="Unseen voice"&&(yn("vines"),zf.visible=!1)}async function CS(){const r=ye[0],e={x:r.x,z:r.z},t=Br(r,Kt.approach),n=Br(e,Ka);if(!t||!n){xe="exploration",Nt("No clear staging route."),yt();return}const i=++ut;xe="staging",At=null,sn=null,Tt[0].moving=!1,jt.root.position.set(e.x,0,e.z),jt.root.visible=!0,jt.ik.reset(),yt();const s=ye.find(o=>o.id==="emma");Object.assign(s,e),Fs.add("emma"),await Promise.all([Cs(r,t,i),Cs(s,n,i,jt)]),i===ut&&(jt.root.rotation.y=Math.atan2(Kt.x-Ka.x,Kt.z-Ka.z),Tt[0].root.rotation.y=Math.PI,xe="dialogue",qi=0,At=null,sn=null,Tt[0].moving=!1,ia(),Nt(""),yt())}async function Zl(r){if(!["exploration","approaching"].includes(xe))return;const e=ye[0],t=Br(e,r);if(!t){Nt("No clear path to that point.");return}const n=++ut;if(xe="approaching",At=null,yt(),!!await Cs(e,t,n)){if(!Ns&&Rf(e)){CS();return}xe="exploration",yt()}}Oe("grave-marker").onclick=()=>Zl(Kt.approach);function Fc(){if(Dc(),xe==="arrival-dialogue"){Oe("dialogue").hidden=!0,TS();return}if(xe==="outro"){RS();return}xe==="dialogue"&&(qi++,qi<Ic.length?ia():(Oe("dialogue").hidden=!0,PS()))}Oe("dialogue").onclick=Fc;async function _h(r,e){yn(ye[r].id==="warden"?"warden-spawn":"wisp-spawn");const t=ye[r],n=Tt[r],i=new Fe(t.id==="warden"?"#ba8cff":"#70ddea"),s=new Ht;It.add(s);const o=new Float32Array(540),a=[];for(let g=0;g<180;g++)a.push({a:g*2.399,r:.15+g%17/24,y:g%29/29});const l=new dt;l.setAttribute("position",new pn(o,3));const c=new mc(l,new qo({color:i,size:.065,transparent:!0,opacity:.9,blending:zn,depthWrite:!1}));s.add(c);const f=zi(.85,i,.8);f.position.set(t.x,.07,t.z),s.add(f);const u=new it(new ei(.5,.7,3,24,1,!0),new dn({color:i,transparent:!0,opacity:.1,blending:zn,side:Gt,depthWrite:!1}));u.position.set(t.x,ft(t.x,t.z)+1.5,t.z),s.add(u),Fs.add(t.id),n.silhouettes.forEach(([,g])=>g.visible=!1);const h=performance.now(),d=t.id==="warden"?1600:1100;for(;e===ut;){const g=Math.min(1,(performance.now()-h)/d);n.arrival.value=g;for(let _=0;_<a.length;_++){const m=a[_],p=m.a+g*7;o[_*3]=t.x+Math.cos(p)*m.r,o[_*3+1]=ft(t.x,t.z)+(m.y+g*1.4)%1*2.7,o[_*3+2]=t.z+Math.sin(p)*m.r}if(l.attributes.position.needsUpdate=!0,c.material.opacity=Math.sin(g*Math.PI),f.material.opacity=1-g,u.material.opacity=.2*Math.sin(g*Math.PI),g>=1)break;await Cn(16)}Uc(s),It.remove(s),e===ut&&(n.arrival.value=1,n.silhouettes.forEach(([,g])=>g.visible=!0))}async function PS(){aS(),xe="summoning";const r=++ut;yt(),Nt("The wisps are gathering…");const e=Ry(ye),t=[];for(const n of e.filter(i=>i!=="warden")){if(r!==ut)return;t.push(_h(ye.findIndex(i=>i.id===n),r)),await Cn(150)}await Promise.all(t),r===ut&&(Nt("The warden answers."),await _h(ye.findIndex(n=>n.id==="warden"),r),r===ut&&(xe="arrival-dialogue",Nt(""),ia(),yt()))}function Yf(){Dc(),pS(),Uf(),uS(),ut++,Ns=!1,vi=0,ns.clear(),ye=Ef(),ye[0].x=-5,ye[0].z=1,Fs.clear(),qi=0,zf.visible=!0,Oe("dialogue").hidden=!0,gn=[],xe="exploration",Ut="move",ta=1,At=null,Zt=-1,sn=null,tn=null,As=0,Ts=-1,na=[],ti=null,Tt.forEach((r,e)=>{r.oneShot=null,r.mixer.stopAllAction(),r.actions.idle.reset().play(),r.motion="idle",r.moving=!1,r.arrival.value=Wt(ye[e])?1:0,r.ik.reset(),r.root.position.set(ye[e].x,0,ye[e].z),r.root.rotation.set(0,e?-Math.PI/2:Math.PI/2,0),r.model.rotation.set(0,0,0)}),Ao.set(-.5,0,1),Oc(!0),Nt(""),jt&&(jt.root.visible=!1,jt.moving=!1,jt.actor=null,jt.root.position.set(ye[0].x,0,ye[0].z),jt.root.rotation.y=Math.PI,jt.ik.reset()),yt()}Oe("reset").onclick=Yf;addEventListener("keydown",r=>{if(!r.repeat){if(["dialogue","arrival-dialogue","outro"].includes(xe)&&(r.code==="Space"||r.code==="Enter")){r.preventDefault(),Fc();return}xe==="planning"&&(r.code==="Enter"&&(r.preventDefault(),Oe("execute").click()),r.code==="Escape"&&(sn=null,At=null,tn=null,Oe("move").click()))}});const Jl=new ng,vh=new ae;function kr(r){const e=bt.domElement.getBoundingClientRect();return vh.set((r.clientX-e.left)/e.width*2-1,1-(r.clientY-e.top)/e.height*2),Jl.setFromCamera(vh,Qn),Jl.intersectObject(xS)[0]?.point}function $l(r){kr(r);const e=Tt.flatMap((t,n)=>ye[n].hp>0&&t.root.visible?Jl.intersectObject(t.hitbox).map(i=>({index:n,distance:i.distance})):[]);return e.sort((t,n)=>t.distance-n.distance),e[0]?.index??-1}function IS(r){xe==="planning"&&r>=0&&!Wt(ye[r])&&Ut!=="move"&&Ho(Ut,r,ye[r])}bt.domElement.addEventListener("pointerdown",r=>{if(r.button!==0)return;if(["exploration","approaching"].includes(xe)){const n=kr(r);n&&(Math.hypot(n.x-Kt.x,n.z-Kt.z)<.85?Zl(Kt.approach):Zl({x:n.x,z:n.z}));return}if(xe!=="planning")return;const e=$l(r),t=kr(r);if(Ut!=="move"){if(e>=0&&!Wt(ye[e])){Ho(Ut,e,ye[e]);return}if(Ut==="powershot"&&t){Ho(Ut,-1,t);return}if(e!==vi){Nt("Choose an enemy or select Move.");return}}t&&(Ut="move",tn=null,sn=r.pointerId,Bi=e===vi?{x:Vt().x-t.x,z:Vt().z-t.z}:{x:0,z:0},At={x:t.x+Bi.x,z:t.z+Bi.z},bt.domElement.setPointerCapture(r.pointerId),yt())});bt.domElement.addEventListener("pointermove",r=>{if(xe==="exploration"){bt.domElement.style.cursor=kr(r)?"pointer":"default";return}if(xe!=="planning"){Zt=$l(r);return}const e=$l(r),t=kr(r);Zt=e,tn=null,At=t&&(sn!==null||e<0||Ut==="powershot")?{x:t.x+(sn!==null?Bi.x:0),z:t.z+(sn!==null?Bi.z:0)}:null,bt.domElement.style.cursor=sn!==null?"grabbing":e===vi?"grab":e>0&&Ut!=="move"?"crosshair":t?"pointer":"default",Yi()});bt.domElement.addEventListener("pointerup",r=>{if(sn!==r.pointerId)return;sn=null,bt.domElement.hasPointerCapture(r.pointerId)&&bt.domElement.releasePointerCapture(r.pointerId);const e=kr(r);if(At=null,xe!=="planning")return;if(!e||r.clientY>bt.domElement.getBoundingClientRect().bottom){Nt("Movement cancelled."),yt();return}const t={x:e.x+Bi.x,z:e.z+Bi.z};if(an(Vt(),t)<.01){yt();return}qf(bf(Vt(),gn,t,Vf()))});bt.domElement.addEventListener("pointercancel",()=>{sn=null,At=null,tn=null,yt()});bt.domElement.addEventListener("pointerleave",()=>{sn===null&&(Zt=-1,At=null,tn=null,Yi())});bt.domElement.addEventListener("wheel",r=>{r.preventDefault(),jl=vt.clamp(jl*Math.exp(r.deltaY*.001),.65,1.6),ra()},{passive:!1});function ra(){const r=Oe("scene").getBoundingClientRect(),e=7.7*jl,t=r.width/r.height;Object.assign(Qn,{left:-e*t,right:e*t,top:e,bottom:-e}),Qn.updateProjectionMatrix(),bt.setSize(r.width,r.height)}function Oc(r=!1,e=0){if(sn!==null&&!r)return;const t=Vt(),n=new R(t.x,ft(t.x,t.z)+.4,t.z);Ao.lerp(n,r?1:1-Math.exp(-2*e)),Qn.position.copy(Ao).add(_S),Qn.lookAt(Ao),Qn.updateMatrixWorld()}addEventListener("resize",ra);async function LS(){try{const r=await MS;let e=!0;const t=document.createElement("button");t.textContent="Blockout",t.onclick=()=>{e=!e,r.setEnabled(e),t.textContent=e?"Blockout":"Painting"},document.querySelector(".header-right").append(t);const n=new uy,[i,s,...o]=await Promise.all([n.loadAsync(new URL(""+new URL("Idle-CKFBrnqa.fbx",import.meta.url).href,import.meta.url).href),n.loadAsync(new URL(""+new URL("Standard Walk-C8zo7r4q.fbx",import.meta.url).href,import.meta.url).href),n.loadAsync(new URL(""+new URL("Withdrawing Sword-75szD5k-.fbx",import.meta.url).href,import.meta.url).href),n.loadAsync(new URL(""+new URL("Magic Spell Casting-CvMoh1Mr.fbx",import.meta.url).href,import.meta.url).href),n.loadAsync(new URL(""+new URL("Shooting Arrow-CfrRzP9B.fbx",import.meta.url).href,import.meta.url).href),n.loadAsync(new URL(""+new URL("Getting Hit-GYFZI7fU.fbx",import.meta.url).href,import.meta.url).href),n.loadAsync(new URL(""+new URL("Fight Idle-DZHTY5wd.fbx",import.meta.url).href,import.meta.url).href)]),a=Object.fromEntries(["draw","cast","bow","hurt","fightIdle"].map((c,f)=>[c,By(o[f],i,c)])),l=new Set;if(i.traverse(c=>{c.isBone&&l.add(c.name)}),!s.animations[0].tracks.every(c=>l.has(c.name.split(".")[0])))throw Error("Walk skeleton mismatch");i.scale.setScalar(.01),Tt=ye.map((c,f)=>{const u=new Ht,h=Sy(i);u.add(h),It.add(u),h.traverse(C=>{C.isMesh&&(C.material=new Bo({color:c.id==="emma"?"#786bd0":c.id==="warden"?"#9871ce":f?"#ae685e":"#438fd0",roughness:1,stencilWrite:!0,stencilRef:f+1,stencilZPass:Fd}),C.castShadow=!0,C.receiveShadow=!0)});const d={value:Wt(c)?1:0},g={value:new Fe(c.id==="warden"?"#ba8cff":"#70ddea")};h.traverse(C=>{C.isMesh&&(C.material.onBeforeCompile=P=>{P.uniforms.heightOffset={get value(){return u.position.y}},P.uniforms.uArrival=d,P.uniforms.uArrivalColor=g,P.vertexShader=`uniform float heightOffset; varying vec3 arrivalPosition;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
arrivalPosition = (modelMatrix * vec4(transformed, 1.0)).xyz; arrivalPosition.y -= heightOffset;`),P.fragmentShader=`uniform float uArrival; uniform vec3 uArrivalColor; varying vec3 arrivalPosition;
`+P.fragmentShader,P.fragmentShader=P.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(uArrival < .999 && arrivalPosition.y > uArrival * 2.4) discard;`),P.fragmentShader=P.fragmentShader.replace("#include <opaque_fragment>",`if(uArrival < .999) outgoingLight += uArrivalColor * (1.0-smoothstep(0.0, .3, abs(arrivalPosition.y-uArrival*2.4))) * 3.0;
#include <opaque_fragment>`)},C.material.customProgramCacheKey=()=>"wisp-materialize-v1")});const _=[];h.traverse(C=>{if(C.isMesh){const P=C.clone(!1);P.material=new dn({color:Rs[c.id==="emma"?"emma":Wt(c)?"player":"enemy"],transparent:!0,opacity:.18,depthFunc:Ro,depthWrite:!1,stencilWrite:!0,stencilRef:f+1,stencilFunc:Od,stencilWriteMask:0}),P.castShadow=!1,P.renderOrder=20,_.push([C.parent,P])}});for(const[C,P]of _)C.add(P);const m=zi(.4,Rs[c.id==="emma"?"emma":Wt(c)?"player":"enemy"]);u.add(m);const p=new it(new Yo(.32,24),new dn({color:"#15221f",transparent:!0,opacity:.22,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,u.add(Us(p,ft,.015));const y=new it(new ei(.45,.45,2,8),new dn({visible:!1}));y.position.y=1,u.add(y);const v=new tg(h),x={idle:v.clipAction(i.animations[0]),walk:v.clipAction(s.animations[0]),...Object.fromEntries(Object.entries(a).map(([C,P])=>[C,v.clipAction(P)]))};x.idle.play(),x.walk.timeScale=2.15/1.5237;const T=document.createElement("button");T.className=`actor-label ${Wt(c)?"player":"enemy"}`,T.innerHTML="<strong></strong><span><i></i></span>",T.onclick=()=>IS(f),T.onpointerenter=()=>{Zt=f,xe==="planning"&&(At=ye[f],Yi())},T.onpointerleave=()=>{Zt=-1,At=null,Yi()},Oe("labels").append(T);const b=document.createElementNS("http://www.w3.org/2000/svg","line");return Oe("label-lines").append(b),{root:u,model:h,mixer:v,actions:x,foot:m,moving:!1,motion:"idle",ik:Ey(h,u,SS),hitbox:y,label:T,leader:b,arrival:d,silhouettes:_}}),jt=Tt[ye.findIndex(c=>c.id==="emma")],kf=!0,Yf()}catch(r){xe="error",Nt(`Unable to load characters: ${r.message}. Reload to retry.`),zr(),console.error(r)}}ra();Oc(!0);zr();LS();const DS=new Hm;bt.setAnimationLoop(()=>{const r=Math.min(DS.getDelta(),.05);Tt.forEach((n,i)=>{const s=ye[i];n.root.position.set(s.x,ft(s.x,s.z),s.z),n.ik.restore(),n.restMotion=["summoning","arrival-dialogue","planning","executing","enemy"].includes(xe)?"fightIdle":"idle";const o=n.moving?"walk":n.restMotion;!n.oneShot&&o!==n.motion&&(n.actions[n.motion].fadeOut(.15),n.actions[o].reset().fadeIn(.15).play(),n.motion=o),n.mixer.update(r),n.ik.update(r,n.moving),n.root.visible=s.hp>0&&(i===0||Fs.has(s.id)),n.foot.visible=s.hp>0&&(["exploration","approaching"].includes(xe)?i===0:xe==="planning"&&i===vi&&Pn(gn)<kt.ap),n.label.classList.toggle("inspected",Zt===i)}),Oc(!1,r);const e=bt.domElement.getBoundingClientRect();function t(n,i,s,o){const a=new R(i,s+ft(i,o),o).project(Qn);n.style.left=`${e.left+(a.x*.5+.5)*e.width}px`,n.style.top=`${e.top+(-a.y*.5+.5)*e.height}px`}if(t(Oe("grave-marker"),Kt.x,.25,Kt.z+.85),["dialogue","arrival-dialogue","outro"].includes(xe)){const n=(xe==="arrival-dialogue"?Pf:xe==="outro"?Cf:Ic[qi]).speaker,i=n==="Wraith"?Tt[ye.findIndex(a=>a.id==="warden")].root.position:n==="Emma"?jt.root.position:n==="Elias"?Tt[0].root.position:new R(Kt.x,0,Kt.z);t(Oe("dialogue"),i.x,2.9,i.z);const s=parseFloat(Oe("dialogue").style.left),o=vt.clamp(s,170,innerWidth-170);Oe("dialogue").style.left=o+"px",Oe("dialogue").style.setProperty("--tail-x",`calc(50% + ${s-o}px)`)}Tt.forEach((n,i)=>{const s=ye[i],o=new R(s.x,ft(s.x,s.z)+2.3,s.z).project(Qn);n.label.hidden=!n.root.visible||["exploration","approaching","staging","dialogue","arrival-dialogue","victory","outro","rejoining","summoning"].includes(xe)||s.hp<=0||Math.abs(o.x)>1||Math.abs(o.y)>1,t(n.label,s.x,2.3,s.z),n.leader.style.display="none"}),gr?.update(performance.now()/1e3),_r?.update(performance.now()/1e3),vr?.update(performance.now()/1e3),bt.render(It,Qn)});
