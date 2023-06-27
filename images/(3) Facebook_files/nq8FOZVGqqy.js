;/*FB_PKG_DELIM*/

__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndex=function(a){this.$1.index=a;return this};c.setNewLocale=function(a){this.$1.new_locale=a;return this};c.setOldLocale=function(a){this.$1.old_locale=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};return a}();c={index:!0,new_locale:!0,old_locale:!0,referrer:!0};f["default"]=a}),66);
__d("KeyboardActivityTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDuration=function(a){this.$1.duration=a;return this};c.setKey=function(a){this.$1.key=a;return this};return a}();c={duration:!0,key:!0};f["default"]=a}),66);
__d("KeyboardActivityLogger",["Event","KeyboardActivityTypedLogger","Keys","isElementInteractive"],(function(a,b,c,d,e,f,g){b=["tab","right","left","up","down","enter"];var h=b.reduce(function(a,b){a[b]={count:0,startTS:0};return a},{}),i=20;function a(){document.addEventListener("keydown",j)}function j(a){var b=a.getTarget();if(c("isElementInteractive")(b))return;switch(c("Event").getKeyCode(a)){case c("Keys").TAB:k("tab");break;case c("Keys").RIGHT:k("right");break;case c("Keys").LEFT:k("left");break;case c("Keys").UP:k("up");break;case c("Keys").DOWN:k("down");break;case c("Keys").RETURN:k("enter");break}}function k(a){var b=h[a];b.count++;b.startTS===0&&(b.startTS=Date.now());b.count===i&&(l(a),b.count=0,b.startTS=0)}function l(a){var b=h[a];b=Date.now()-b.startTS;new(c("KeyboardActivityTypedLogger"))().setKey(a).setDuration(b).log()}g.init=a;g._listenForKey=j;g._checkKeyActivity=k;g._log=l}),98);
__d("ErrorMessageConsole",["ErrorPubSub","cr:1458113"],(function(a,b,c,d,e,f,g){"use strict";function a(a){if(a.type!=="fatal")return;b("cr:1458113")&&b("cr:1458113").showErrorDialog(a)}var h=!1;function d(){if(h)return;h=!0;c("ErrorPubSub").addListener(i)}function i(a){if(a.type!=="fatal")return;b("cr:1458113")&&b("cr:1458113").showErrorDialog(a)}g.addError=a;g.listenForUncaughtErrors=d}),98);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("XIntlSaveXModeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/intl/save_xmode/",{})}),null);
__d("IntlUtils",["invariant","AsyncRequest","Cookie","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","XIntlSaveXModeAsyncController","goURI"],(function(a,b,c,d,e,f,g,h){var i=c("XIntlSaveXModeAsyncController").getURIBuilder().getURI();function a(a){new(c("AsyncRequest"))().setURI(i).setData({xmode:a}).setHandler(function(){d("ReloadPage").now()}).send()}function b(a){return a.replace(new RegExp("\xa0","g"),"&nbsp;")}function e(a){return a.replace(new RegExp("&nbsp;","g"),"\xa0")}function f(a){new(c("AsyncRequest"))().setURI(i).setData({rmode:a}).setHandler(function(){d("ReloadPage").now()}).send()}function j(a){new(c("AsyncRequest"))().setURI(i).setData({string_manager_mode:a}).setHandler(function(){d("ReloadPage").now()}).send()}function k(a,b,e,f){f=e;f||(a!=null||h(0,19476),f=a.options[a.selectedIndex].value);e=c("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(c("AsyncRequest"))().setURI(e).setData({loc:f,ref:b,should_redirect:!1}).setHandler(function(a){d("ReloadPage").now()}).send()}function l(a){var b="lh",d=c("Cookie").get(b),e=[],f=5;if(d!=null&&d!=""){e=d.split(",");e.push(a);for(d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);c("Cookie").set(b,e.toString())}function m(a,b,d,e,f){e===void 0&&(e="unknown"),f===void 0&&(f=null),c("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),l(a),new(c("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(b).setIndex(f).setReferrer(e).log(),c("goURI")(d)}g.setXmode=a;g.encodeSpecialCharsForXController=b;g.decodeSpecialCharsFromXController=e;g.setRmode=f;g.setSmode=j;g.setLocale=k;g.appendCookieLocaleHistory=l;g.setCookieLocale=m}),98);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f,g){a.intl_set_string_manager_mode=d("IntlUtils").setSmode,a.intl_set_xmode=d("IntlUtils").setXmode,a.intl_set_rmode=d("IntlUtils").setRmode,a.intl_set_locale=d("IntlUtils").setLocale}),35);
__d("FormTypeABTester",["Base64","Event"],(function(a,b,c,d,e,f,g){a=function(a){var b=32,d=65,e=90,f=48,g=57,h=58,i=63,j=91,k=94,l=0,m=0,n=0,o=0,p=[],q=null,r=[],s=[],t=[],u=[];for(var v=0;v<10;v++)r.push(0),s.push(0);for(v=0;v<10;v++)s.push(0),t.push(0),u.push(0);var w=function(a){var c=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;a%=128;a>=d&&a<=e||a==b?l++:a>=f&&a<=g?m++:a>=h&&a<=i||a>=j&&a<=k?n++:o++;p[a]=c;if(q!=null&&q!==0){var r=c-q;r>=0&&(a>=d&&a<=e||a==b)&&(r<400?s[Math.floor(r/20)]++:r<1e3?t[Math.floor((r-400)/60)]++:r<3e3&&u[Math.floor((r-1e3)/200)]++)}q=c},x=function(a){var b=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;b=b-p[a%128];b>=50&&b<250&&r[Math.floor((b-50)/20)]++},y=function(a){var b=Math.max.apply(Math,a),c=[];a.forEach(function(a){c.push(Math.floor(a*63/(b||1)))});return c};this.getDataVect=function(){var a=s.concat(t,u);return y(a).concat(y(r),[l/2,m/2,n/2,o/2])};this.getData=function(){return c("Base64").encodeNums(this.getDataVect())};c("Event").listen(a,{keyup:function(a){return x(a)},keydown:function(a){return w(a)}})};g["default"]=a}),98);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f,g){a=function(a){a=a.getTarget();d("FlipDirection").setDirection(a)};c("Event").listen(document.documentElement,{keyup:a,input:a})}),34);
__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){var g;function h(a){a.nctr||(a.nctr={})}function i(a){if((g||(g=b("Env"))).module||!a)return(g||(g=b("Env"))).module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=i(b);b&&(h(a),a.nctr._mod=b)}};e.exports=a}),null);
__d("CSTXCookieRecordConsentControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/cookie/consent/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("MaybeSymbol",[],(function(a,b,c,d,e,f){"use strict";b=a.Symbol?a.Symbol:null;c=b;f["default"]=c}),66);
__d("URLSearchParams",["MaybeSymbol"],(function(a,b,c,d,e,f,g){var h=/\+/g,i=/[!\'()*]/g,j=/%20/g,k=c("MaybeSymbol")?c("MaybeSymbol").iterator:null;function l(a){return encodeURIComponent(a).replace(j,"+").replace(i,function(a){return"%"+a.charCodeAt(0).toString(16)})}function m(a){return decodeURIComponent((a=a)!=null?a:"").replace(h," ")}function n(a){var b=a.slice(0),c={next:function(){var a=b.length,c=b.shift();return{done:c===void 0&&a<=0,value:c}}};k&&(c[k]=function(){return c});return c}a=function(){function a(a){a===void 0&&(a="");a=a;a[0]==="?"&&(a=a.substr(1));this.$1=a.length?a.split("&").map(function(a){a=a.split("=");var b=a[0];a=a[1];return[m(b),m(a)]}):[]}var b=a.prototype;b.append=function(a,b){this.$1.push([a,String(b)])};b["delete"]=function(a){for(var b=0;b<this.$1.length;b++)this.$1[b][0]===a&&(this.$1.splice(b,1),b--)};b.entries=function(){if(k)return this.$1[k]();var a=this.$1.slice(0);return n(a)};b.get=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return this.$1[b][1];return null};b.getAll=function(a){var b=[];for(var c=0,d=this.$1.length;c<d;c++)this.$1[c][0]===a&&b.push(this.$1[c][1]);return b};b.has=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return!0;return!1};b.keys=function(){var a=this.$1.map(function(a){var b=a[0];a[1];return b});return k?a[k]():n(a)};b.set=function(a,b){var c=!1;for(var d=0;d<this.$1.length;d++)this.$1[d][0]===a&&(c?(this.$1.splice(d,1),d--):(this.$1[d][1]=String(b),c=!0));c||this.$1.push([a,String(b)])};b.toString=function(){return this.$1.map(function(a){var b=a[0];a=a[1];return l(b)+"="+l(a)}).join("&")};b.values=function(){var a=this.$1.map(function(a){a[0];a=a[1];return a});return k?a[k]():n(a)};b[k]=function(){return this.entries()};return a}();g["default"]=a}),98);
__d("DeferredCookie",["CSTXCookieRecordConsentControllerRouteBuilder","Cookie","CookieConsent","SubscriptionList","URLSearchParams","cr:1069930","cr:1083116","cr:1083117","flattenPHPQueryData","killswitch","nullthrows","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map(),i=!1,j=new Map(),k={addToQueue:function(a,b,d,e,f,g,i,j){if(c("CookieConsent").hasConsent(1)){f?c("Cookie").setWithoutChecksIfFirstPartyContext(a,b,d,e,i,j):c("Cookie").setWithoutChecks(a,b,d,e,i,j);return}if(h.has(a))return;h.set(a,{name:a,value:b,nMilliSecs:d,path:e,firstPartyOnly:f,secure:i,domain:j})},flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT:function(){h.forEach(function(a,b){a.firstPartyOnly?c("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure,a.domain):c("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure,a.domain)});if(c("killswitch")("DEFERREDCOOKIE_EMPTY_COOKIES_BEFORE_CALLBACK")){c("CookieConsent").setConsented();for(var a of j)a[1].fireCallbacks();h.clear()}else{h.clear();c("CookieConsent").setConsented();for(a of j)a[1].fireCallbacks()}},flushAllCookiesINTERNALONLY:function(a,d,e,f,g){a===void 0&&(a=!1);e===void 0&&(e=!1);f===void 0&&(f=!1);k.flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT();var h={accept_only_essential:f};d!=null&&(d=Object.fromEntries(d),h={optouts:d,accept_only_essential:f});d=c("flattenPHPQueryData")(h);if(!i){f=c("CSTXCookieRecordConsentControllerRouteBuilder").buildUri({});h=new(c("URLSearchParams"))(location.search).get("ig_3p_controls");if(h==="on"){h=f.addQueryParam("ig_3p_controls","on");f=(h=h)!=null?h:f}i=!0;var j=function(){g&&g();a&&location.reload();if(e){var b=document.getElementsByTagName("iframe");b.length>0&&location.reload()}};b("cr:1069930")!=null?c("promiseDone")(b("cr:1069930")(f.toString(),{data:d,method:"POST"}),function(){return j()},function(a){b("cr:1083117")&&b("cr:1083117")("Cookie consent has not been set successfully: "+a.errorMsg,"comet_infra")}):b("cr:1083116")!=null&&new(b("cr:1083116"))(f.toString()).setData(d).setHandler(function(){return j()}).send()}},registerCallbackOnCookieFlush:function(a,b){c("CookieConsent").hasConsent(a)?b():(j.has(a)||j.set(a,new(c("SubscriptionList"))()),c("nullthrows")(j.get(a)).add(b))},canEmbedThirdPartyPixel:function(){return c("CookieConsent").isCookiesBlocked()||!c("CookieConsent").hasConsent(2)?!1:h.size===0}};a=k;g["default"]=a}),98);
__d("EnvelopeEncryption",["Promise","tweetnacl-sealedbox-js"],(function(a,b,c,d,e,f,g){"use strict";var h=window.crypto||window.msCrypto,i=64,j=1,k=1,l=1,m=2,n=32,o=16,p=k+l+m+n+c("tweetnacl-sealedbox-js").overheadLength+o;function q(a,b){return c("tweetnacl-sealedbox-js").seal(a,b)}function r(a){var b=[];for(var c=0;c<a.length;c+=2)b.push(parseInt(a.slice(c,c+2),16));return new Uint8Array(b)}function a(a,d,e,f){var g=p+e.length;if(d.length!=i)throw new Error("public key is not a valid hex sting");var s=r(d);if(!s)throw new Error("public key is not a valid hex string");var t=new Uint8Array(g),u=0;t[u]=j;u+=k;t[u]=a;u+=l;d={name:"AES-GCM",length:n*8};var v={name:"AES-GCM",iv:new Uint8Array(12),additionalData:f,tagLen:o};return h.subtle.generateKey(d,!0,["encrypt","decrypt"]).then(function(a){var c=h.subtle.exportKey("raw",a);a=h.subtle.encrypt(v,a,e.buffer);return b("Promise").all([c,a])}).then(function(a){var b=new Uint8Array(a[0]);b=q(b,s);t[u]=b.length&255;t[u+1]=b.length>>8&255;u+=m;t.set(b,u);u+=n;u+=c("tweetnacl-sealedbox-js").overheadLength;if(b.length!==n+c("tweetnacl-sealedbox-js").overheadLength)throw new Error("encrypted key is the wrong length");b=new Uint8Array(a[1]);a=b.slice(-o);b=b.slice(0,-o);t.set(a,u);u+=o;t.set(b,u);return t})["catch"](function(a){throw a})}g.encrypt=a}),98);
__d("FBBrowserPasswordEncryption",["EnvelopeEncryption","tweetnacl-util"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f){var g="#PWD_BROWSER",h=5;e=c("tweetnacl-util").decodeUTF8(e);var i=c("tweetnacl-util").decodeUTF8(f);return d("EnvelopeEncryption").encrypt(a,b,e,i).then(function(a){return[g,h,f,c("tweetnacl-util").encodeBase64(a)].join(":")})}g.encryptPassword=a}),98);
__d("LoginServicePasswordEncryptDecryptEventTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:LoginServicePasswordEncryptDecryptEventLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:LoginServicePasswordEncryptDecryptEventLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:LoginServicePasswordEncryptDecryptEventLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAccountID=function(a){this.$1.account_id=a;return this};c.setCredentialsType=function(a){this.$1.credentials_type=a;return this};c.setDebugInfo=function(a){this.$1.debug_info=a;return this};c.setDecryptMethod=function(a){this.$1.decrypt_method=a;return this};c.setDeviceID=function(a){this.$1.device_id=a;return this};c.setError=function(a){this.$1.error=a;return this};c.setErrorMessage=function(a){this.$1.error_message=a;return this};c.setGrowthFlow=function(a){this.$1.growth_flow=a;return this};c.setPasswordEncryptionVersion=function(a){this.$1.password_encryption_version=a;return this};c.setPasswordTag=function(a){this.$1.password_tag=a;return this};c.setPasswordTimestamp=function(a){this.$1.password_timestamp=a;return this};c.setStacktrace=function(a){this.$1.stacktrace=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setUniverse=function(a){this.$1.universe=a;return this};return a}();c={account_id:!0,credentials_type:!0,debug_info:!0,decrypt_method:!0,device_id:!0,error:!0,error_message:!0,growth_flow:!0,password_encryption_version:!0,password_tag:!0,password_timestamp:!0,stacktrace:!0,universe:!0};f["default"]=a}),66);
__d("LoginFormController",["AsyncRequest","Button","Cookie","DOM","DeferredCookie","Event","FBBrowserPasswordEncryption","FBLogger","Form","FormTypeABTester","LoginServicePasswordEncryptDecryptEventTypedLogger","WebStorage","bx","ge","goURI","guid","promiseDone"],(function(a,b,c,d,e,f,g){var h={init:function(a,b,d,e,f){h._initShared(a,b,d,e,f),h.isCredsManagerEnabled=!1,!f||!f.pubKey?c("Event").listen(a,"submit",h._sendLoginShared.bind(h)):c("Event").listen(a,"submit",function(b){b.preventDefault(),h._sendLoginShared.bind(h)(),h._encryptBeforeSending(function(){a.submit()})})},initAsync:function(a,b,d,e,f){h._initShared(a,b,d,e,f),h.isCredsManagerEnabled=!0,h.emailInput=c("DOM").scry(a,'input[id="email"]')[0],h.passwordInput=c("DOM").scry(a,'input[id="pass"]')[0],h.errorBox=c("DOM").scry(a,'input[id="error_box"]')[0],c("Event").listen(a,"submit",function(a){a.preventDefault(),h._sendLoginRequest()}),h._initSmartLockAccountChooser()},_initShared:function(a,b,d,e,f){h.loginForm=a;h.loginButton=b;h.abTesting=e;h.loginFormParams=f;h.abTesting&&(h.formABTest=new(c("FormTypeABTester"))(a));b=c("ge")("lgnjs");e=Math.floor(Date.now()/1e3);b&&(b.value=e);var g=c("WebStorage").getSessionStorage();f=g!=null?parseInt(g.getItem("LoginPollRateLimit"),10):0;a=d!=null;f>e-60&&(a=!1);if(a){var i;b=function(){c("Cookie").get("c_user")!=null&&(window.clearInterval(i),g!=null&&g.setItem("LoginPollRateLimit",Math.floor(Date.now()/1e3).toString()),c("goURI")(d))};i=window.setInterval(b,1e3);b()}},_encryptBeforeSending:function(a){a=a.bind(h);var d=h.loginFormParams&&h.loginFormParams.pubKey;if((window.crypto||window.msCrypto)&&d){var e=c("DOM").scry(h.loginForm,'input[id="pass"]')[0],f=b("FBBrowserPasswordEncryption"),g=Math.floor(Date.now()/1e3).toString();c("promiseDone")(f.encryptPassword(d.keyId,d.publicKey,e.value,g),function(b){b=c("DOM").create("input",{type:"hidden",name:"encpass",value:b});h.loginForm.appendChild(b);e.disabled=!0;a()},function(c){var d="#PWD_BROWSER",e=5,f=b("LoginServicePasswordEncryptDecryptEventTypedLogger");new f().setError("BrowserEncryptionFailureInLoginFormControllerWWW").setGrowthFlow("Bluebar/main login WWW").setErrorMessage(c.message).setPasswordTag(d).setPasswordEncryptionVersion(e).setPasswordTimestamp(g).logVital();a()})}else a()},_sendLoginShared:function(){h.abTesting&&h.loginForm.ab_test_data&&(h.loginForm.ab_test_data.value=h.formABTest.getData());var a=c("guid")();h.loginForm.guid&&(h.loginForm.guid.value=a);window.__cookieReload&&window.clearInterval(window.__cookieReload);try{c("Button").setEnabled(h.loginButton,!1)}catch(a){h.loginButton.disabled=!0}window.setTimeout(function(){(function(){try{c("Button").setEnabled(h.loginButton,!0)}catch(a){h.loginButton.disabled=!1}})},15e3);c("DeferredCookie").flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT()},_sendLoginRequest:function(){h._sendLoginShared();if(h.login_form_params&&h.login_form_params.pubKey)h._encryptBeforeSending(function(){var a=d("Form").serialize(h.loginForm);new(c("AsyncRequest"))().setURI(h.loginForm).setData(a).setHandler(h._onLoginResponse.bind(h)).send()});else{var a=d("Form").serialize(h.loginForm);new(c("AsyncRequest"))().setURI(h.loginForm.action).setData(a).setHandler(h._onLoginResponse.bind(h)).send()}},_onLoginResponse:function(a){a=a.getPayload();if(a===null||a.error===null)return;c("DOM").replace(h.errorBox,a.error);c("Button").setEnabled(h.loginButton,!0)},redirect:function(a){if(h.isCredsManagerEnabled){var b=c("bx").getURL(c("bx")("875231"));b=new window.PasswordCredential({id:h.emailInput.value,password:h.passwordInput.value,iconURL:b});navigator.credentials&&navigator.credentials.store(b).then(function(){window.setTimeout(function(){window.location.replace(a)},3e3)})["catch"](function(){window.location.replace(a)})}else window.location.replace(a)},_initSmartLockAccountChooser:function(a){a===void 0&&(a="silent"),window.PasswordCredential&&(navigator.credentials!==null&&navigator.credentials.get({password:!0,mediation:a}).then(function(b){b!==null&&b.type==="password"&&b.password!==null&&b.id!==null?(h.emailInput.setAttribute("value",b.id),h.passwordInput.setAttribute("value",b.password),a==="required"&&h._sendLoginRequest()):(h.passwordInput.setAttribute("value",""),a==="silent"&&h._initSmartLockAccountChooser("required"))})["catch"](function(a){c("FBLogger")("login").catching(a).warn("smart lock promise fail")}))}};a=h;g["default"]=a}),98);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f,g){Object.assign(c("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&d("Nectar").addModuleData(this.data,a)}})}),34);
__d("VirtualCursorStatus",["Event","UserAgent","emptyFunction","setImmediate"],(function(a,b,c,d,e,f){var g=null,h=null;function i(){h||(h=b("Event").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=a.keyCode,i()}function c(){g=null,j()}if(typeof window!=="undefined"&&window.document&&window.document.createElement){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}var k={isKeyDown:function(){return!!g},getKeyDownCode:function(){return g}},l=!1,m=!1,n=null,o=!1;function p(a){var c=new Set(),d=k.isKeyDown(),e=a.clientX,f=a.clientY,g=a.isPrimary,h=a.isTrusted,i=a.offsetX,j=a.offsetY,n=a.pointerType,o=a.mozInputSource,p=a.WEBKIT_FORCE_AT_MOUSE_DOWN,q=a.webkitForce;a=a.target;var r=a.clientWidth;a=a.clientHeight;e===0&&f===0&&i>=0&&j>=0&&m&&h&&o==null&&c.add("Chrome");l&&m&&!d&&q!=null&&q<p&&i===0&&j===0&&o==null&&c.add("Safari-edge");e===0&&f===0&&i<0&&j<0&&m&&o==null&&c.add("Safari-old");!l&&!m&&d&&g===!1&&h&&n===""&&e===0&&f===0&&i===0&&j===0&&o==null;!l&&!m&&!d&&h&&b("UserAgent").isBrowser("IE >= 10")&&o==null&&(e<0&&f<0?c.add("IE"):(i<0||i>r)&&(j<0||j>a)&&c.add("MSIE"));o===0&&h&&c.add("Firefox");return c}function q(){l=!0,b("setImmediate")(function(){l=!1})}function r(){m=!0,b("setImmediate")(function(){m=!1})}function s(a,c){n===null&&(n=p(a));o=n.size>0;a=a.target.getAttribute("data-accessibilityid")==="virtual_cursor_trigger";c(o,n,a);b("setImmediate")(function(){o=!1,n=null})}d={isVirtualCursorTriggered:function(){return o},add:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=function(a){return s(a,c)};a.addEventListener("click",d);var e=b("Event").listen(a,"mousedown",q),f=b("Event").listen(a,"mouseup",r);return{remove:function(){a.removeEventListener("click",d),e.remove(),f.remove()}}}};e.exports=d}),null);
__d("FocusRing",["cx","CSS","Event","KeyEventController","Keys","VirtualCursorStatus","emptyFunction"],(function(a,b,c,d,e,f,g,h){var i=["mousedown","mouseup"],j=[c("Keys").UP,c("Keys").RIGHT,c("Keys").DOWN,c("Keys").LEFT,c("Keys").TAB,c("Keys").RETURN,c("Keys").SPACE,c("Keys").ESC];function a(){if(n)return;o=!1;k();m();document.body&&d("CSS").addClass(document.body,"_19_u");n=!0}function b(){return o}function k(){document.documentElement&&d("VirtualCursorStatus").add(document.documentElement,s)}function l(){q=i.map(function(a){return c("Event").listen(document.documentElement,a,p)})}function m(){w=c("Event").listen(document.documentElement,"keydown",t)}var n=!1,o=!0;function p(){v()}var q=i.map(function(a){return{remove:c("emptyFunction")}});function r(){q.forEach(function(a){return a.remove()})}function s(a){a&&u()}function t(a){j.indexOf(c("Event").getKeyCode(a))>-1&&c("KeyEventController").filterEventTargets(a,"keydown")&&u()}function u(){w.remove(),l(),o=!0,document.body&&d("CSS").removeClass(document.body,"_19_u")}function v(){r(),m(),o=!1,document.body&&d("CSS").addClass(document.body,"_19_u")}var w={remove:c("emptyFunction")};({remove:c("emptyFunction")});g.KEY_CODES=j;g.init=a;g.usingKeyboardNavigation=b;g._attachVirtualCursorListener=k;g._attachMouseListeners=l;g._attachKeyDownListener=m;g._onMouseEvent=p;g._removeMouseListeners=r;g._onClick=s;g._onKeyDown=t;g._showFocusRing=u;g._hideFocusRing=v}),98);
__d("FourOhFourJSTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setFbid=function(a){this.$1.fbid=a;return this};c.setOriginalURI=function(a){this.$1.original_uri=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={fbid:!0,original_uri:!0,script_path:!0};f["default"]=a}),66);
__d("FourOhFourJSLogger",["FourOhFourJSTypedLogger","ScriptPath"],(function(a,b,c,d,e,f){a={log:function(){window.onload=function(){var a=new(b("FourOhFourJSTypedLogger"))();a.setOriginalURI(window.location.href);a.setScriptPath(b("ScriptPath").getScriptPath());a.logVital()}}};e.exports=a}),null);
__d("LoginbarPopover",["CSS","ge","getActiveElement"],(function(a,b,c,d,e,f){var g=1e3;a={init:function(a,c,d){var e=this,f=b("ge")("email",d);setTimeout(function(){return e.show(a,d,f)},g);c.addEventListener("click",function(a){a.kill(),e.toggle(d,f)});a.style.visibility="visible"},show:function(a,c,d){b("CSS").show(c);a=b("getActiveElement")().tagName.toLowerCase();a!=="input"&&a!=="textarea"&&d.focus()},toggle:function(a,c){b("CSS").toggle(a),b("CSS").shown(a)&&c.focus()}};e.exports=a}),null);
__d("ScreenDimensionsAutoSet",[],(function(a,b,c,d,e,f){function g(){if(!window.btoa)return"";var a={w:screen.width,h:screen.height,aw:screen.availWidth,ah:screen.availHeight,c:screen.colorDepth};return btoa(JSON.stringify(a))}function a(a){a.value=g()}f.getScreenDimensions=g;f.setInputValue=a}),66);
__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({cookieName:"dpr"})}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){c("Cookie").set(c("PixelRatioConst").cookieName,String(k()))}function m(){c("Cookie").clear(c("PixelRatioConst").cookieName)}function n(){if(i)return;i=!0;j&&m();k()!==d("WebPixelRatio").get()&&l()}function a(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&d("DOMEventListener").add(window,"pagehide",n);d("Run").onBeforeUnload(n,!1)}g.startDetecting=a}),98);
__d("ResetScrollOnUnload",["Run"],(function(a,b,c,d,e,f,g){function a(){d("Run").onUnload(function(){window.history.scrollRestoration="manual"})}function b(a){d("Run").onUnload(function(){window.history.scrollRestoration="manual",a.style.opacity="0",window.scrollTo(0,0)})}g.disableScrollRestoration=a;g.init=b}),98);
__d("jsExtraRouteBuilder",["jsRouteBuilder","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e){var f=c("jsRouteBuilder")(a,b,e),g=d.reduce(function(a,d){a===void 0&&(a={});typeof d==="string"&&(a[d]=c("jsRouteBuilder")(d,b,e,null,!0).buildURL);return a},{});return{buildExtraURL:function(a,b){if(typeof a!=="string"||g[a]==null)throw c("unrecoverableViolation")("Route builder for extra path does not exist","comet_infra");return g[a](b)},buildUri:function(a){return f.buildUri(a)},buildURL:function(a){return f.buildURL(a)}}}g["default"]=a}),98);
__d("XUpdateTimezoneControllerRouteBuilder",["jsExtraRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsExtraRouteBuilder")("/ajax/autoset_timezone_ajax/",Object.freeze({is_forced:!1}),["/ajax/autoset_timezone_ajax.php","/ajax/timezone/update/","/ajax/timezone/update.php"],void 0);b=a;g["default"]=b}),98);
__d("getBrowserGMTOffsetAdjustedForSkew",["DateConsts","FBLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=d("DateConsts").MIN_PER_HOUR*d("DateConsts").HOUR_PER_DAY,e=new Date(),f=e.getTimezoneOffset();e=e.getTime()/d("DateConsts").MS_PER_SEC;var g=15;a=a-e;e=Math.round(a/(g*d("DateConsts").SEC_PER_MIN))*g;e!=0&&c("FBLogger")("TimezoneAutoset").info("Adjusting timezone offset for clock skew. Browser offset: %s. Raw skew %s. Rounded skew %s",f,a,e);g=Math.round(f+e)%b;g>12*d("DateConsts").MIN_PER_HOUR?g-=b:g<-14*d("DateConsts").MIN_PER_HOUR&&(g+=b);return g}g["default"]=a}),98);
__d("getBrowserTimezone",["FBLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(){try{var a;a=((a=window.Intl)==null?void 0:a.DateTimeFormat)&&Intl.DateTimeFormat();a=(a==null?void 0:a.resolvedOptions)&&a.resolvedOptions();return a==null?void 0:a.timeZone}catch(a){c("FBLogger")("TimezoneAutoset").catching(a).warn("Could not read IANA timezone from browser");return null}}g["default"]=a}),98);
__d("TimezoneAutoset",["AsyncRequest","XUpdateTimezoneControllerRouteBuilder","emptyFunction","getBrowserGMTOffsetAdjustedForSkew","getBrowserTimezone","killswitch"],(function(a,b,c,d,e,f){var g=!1;function a(a,b,c){h({serverTimestamp:a,serverTimezone:null,serverGmtOffset:b,forceUpdate:c})}function h(a){var c=a.serverTimestamp,d=a.serverTimezone,e=a.serverGmtOffset;a=a.forceUpdate;if(!c||e==null)return;if(g)return;g=!0;c=-b("getBrowserGMTOffsetAdjustedForSkew")(c);var f=b("killswitch")("TIMEZONE_SET_IANA_ZONE_NAME")?null:b("getBrowserTimezone")();if(a||c!=e||f!=null&&f!=d){e=b("XUpdateTimezoneControllerRouteBuilder").buildExtraURL("/ajax/timezone/update.php",{});new(b("AsyncRequest"))().setURI(e).setData({tz:f,gmt_off:c,is_forced:a}).setErrorHandler(b("emptyFunction")).setTransportErrorHandler(b("emptyFunction")).setOption("suppressErrorAlerts",!0).send()}}c={setInputValue:function(a,c){a.value=b("getBrowserGMTOffsetAdjustedForSkew")(c).toString()},setTimezone:a,getBrowserTimezone:b("getBrowserTimezone"),setTimezoneAndOffset:h};e.exports=c}),null);
__d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={indicated_browsers:!0,is_virtual_cursor_action:!0};f["default"]=a}),66);
__d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f,g){function a(a){a.forEach(function(a){d("VirtualCursorStatus").add(a,h)})}function h(a,b,d){d===void 0&&(d=!1),a&&new(c("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(b).setIsVirtualCursorAction(d).log()}g.init=a;g._log=h}),98);
__d("DamerauLevenshtein",[],(function(a,b,c,d,e,f){function a(a,b){if(a.length===0)return b.length;if(b.length===0)return a.length;if(a===b)return 0;var c,d,e=[];e[0]=[];e[1]=[];e[2]=[];for(d=0;d<=b.length;d++)e[0][d]=d;for(c=1;c<=a.length;c++)for(d=1;d<=b.length;d++){e[c%3][0]=c;var f=a.charAt(c-1)===b.charAt(d-1)?0:1;e[c%3][d]=Math.min(e[(c-1)%3][d]+1,e[c%3][d-1]+1,e[(c-1)%3][d-1]+f);c>1&&d>1&&a.charAt(c-1)==b.charAt(d-2)&&a.charAt(c-2)==b.charAt(d-1)&&(e[c%3][d]=Math.min(e[c%3][d],e[(c-2)%3][d-2]+f))}return e[a.length%3][b.length]}f.DamerauLevenshteinDistance=a}),66);
__d("BrowserPrefillLogging",["DamerauLevenshtein","ge"],(function(a,b,c,d,e,f){"use strict";var g={initContactpointFieldLogging:function(a){g.contactpointFieldID=a.contactpointFieldID;g._updateContactpoint();g.serverPrefillContactpoint=a.serverPrefill;a=b("ge")(g.contactpointFieldID);if(a==null)return;a.addEventListener("input",g._mayLogContactpointPrefillViaDropdown.bind(g));window.addEventListener("load",g._mayLogContactpointPrefillOnload.bind(g));return},registerCallback:function(a){g.regeisteredCallbacks=g.regeisteredCallbacks||[],g.regeisteredCallbacks.push(a)},_invokeCallbacks:function(a,b){if(g.regeisteredCallbacks==null||g.regeisteredCallbacks.size===0)return;g.regeisteredCallbacks.forEach(function(c){c(a,b)})},initPasswordFieldLogging:function(a){g.passwordFieldID=a.passwordFieldID;g._updatePassword();a=b("ge")(g.passwordFieldID);if(a==null)return;a.addEventListener("input",g._mayLogPasswordPrefillViaDropdown.bind(g));window.addEventListener("load",g._mayLogPasswordPrefillOnload.bind(g))},updatePrefill:function(a,c,d){var e,f=(e=b("ge"))("prefill_source"),g=e("prefill_type"),h=e("first_prefill_source"),i=e("first_prefill_type"),j=e("had_cp_prefilled"),k=e("had_password_prefilled");e=e("prefill_contact_point");f!=null&&(f.value=c);g!=null&&(g.value=d);e!=null&&a!=null&&(e.value=a);i!=null&&(i.value==null||i.value=="")&&(i.value=d);h!=null&&(h.value==null||h.value=="")&&(h.value=c);j!=null&&(j.value==null||j.value==="false")&&d==="contact_point"&&(j.value="true");k!=null&&(k.value==null||k.value==="false")&&d==="password"&&(k.value="true")},_mayLogContactpointPrefillOnload:function(){g._updateContactpoint();if(g.previousContactpoint==null||g.previousContactpoint==="")return;var a=g.previousContactpoint===g.serverPrefillContactpoint?"server_prefill":"browser_onload";g._logBrowserPrefill(a,"contact_point");g._invokeCallbacks(a,"contact_point")},_mayLogPasswordPrefillOnload:function(){g._updatePassword();if(g.previousPassword==null||g.previousPassword==="")return;g._logBrowserPrefill("browser_onload","password");g._invokeCallbacks("browser_onload","password")},_mayLogContactpointPrefillViaDropdown:function(){var a=b("ge")(g.contactpointFieldID);if(a==null||a.value==null)return;if(g._isBrowserPrefill(g.previousContactpoint,a.value)===!1){g._updateContactpoint();return}g._updateContactpoint();g._logBrowserPrefill("browser_dropdown","contact_point");g._invokeCallbacks("browser_dropdown","contact_point")},_mayLogPasswordPrefillViaDropdown:function(){var a=b("ge")(g.passwordFieldID);if(a==null||a.value==null)return;if(g._isBrowserPrefill(g.previousPassword,a.value)===!1){g._updatePassword();return}g._updatePassword();g._logBrowserPrefill("browser_dropdown","password");g._invokeCallbacks("browser_dropdown","password")},_isBrowserPrefill:function(a,c){if(c==="")return!1;if(c===a)return!1;if(c.length===1||a.length===c.length+1||c.length===a.length+1)return!1;var d=b("DamerauLevenshtein").DamerauLevenshteinDistance(c,a);return d===a.length-c.length?!1:!0},_updateContactpoint:function(){var a=b("ge")(g.contactpointFieldID);g.previousContactpoint=a!=null&&a.value!=null?a.value:""},_updatePassword:function(){var a=b("ge")(g.passwordFieldID);g.previousPassword=a!=null&&a.value!=null?a.value:""},_logBrowserPrefill:function(a,b){var c=null;b==="contact_point"&&(c=g.previousContactpoint);a!=="server_prefill"&&g.updatePrefill(c,a,b)}};e.exports=g}),null);