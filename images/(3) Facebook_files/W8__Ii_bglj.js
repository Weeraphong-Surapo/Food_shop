;/*FB_PKG_DELIM*/

__d("useEventActionLoggerParams",["CometRouteParams","EventCometActionLoggerUtils","react","recoverableViolation","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo,i={event_action_history:[]};function j(a,b,c){var e,f=typeof a.acontext==="string"?a.acontext:null,g=typeof a.notif_t==="string"?a.notif_t:null;f=k(f);if(!((e=f.event_action_history)==null?void 0:e.length)){e=n(a,c);e&&(f=babelHelpers["extends"]({},f,{event_action_history:[{surface:e}]}))}f.ref_notif_type=(a=f.ref_notif_type)!=null?a:g;c=d("EventCometActionLoggerUtils").createForNewSurface(f,b);return[f,c]}function k(a){if(a==null||a==="")return i;var b=null;try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_context string"+a.toString(),"events")}if(b==null)return i;a=b;b=a.action_history;var d=a.event_action_history,e=a.ref,f=a.ref_notif_type;a=a.source;d=(d=d)!=null?d:b;b=[];typeof d==="string"?b=o(d):Array.isArray(d)&&(b=p(d));return{event_action_history:b,ref:e,ref_notif_type:f,source:a}}var l=["google","bing","yahoo"],m={app:"home",gaming:"games_feed",group:"group",groups:"group",marketplace:"marketplace",page:"page",profile:"user_timeline",save:"saved_dashboard",search_results:"search",watch:"video_feed"};function n(a,b){if(a.ref==="notif"||a.notif_id!=null)return"notifications_tab";b=b==null?void 0:b.split(".");b=b!=null&&b.length>=2&&b[0]==="comet"?b[1]:null;if(b!=null&&Object.prototype.hasOwnProperty.call(m,b))return m[b];if(a.ref==="newsfeed")return"newsfeed";b=(b=document.referrer)==null?void 0:(a=b.match(/\/\/[^\/]*?([\w-]+)\.\w+(\/|$)/))==null?void 0:a[1];if(b!=null){if(l.includes(b))return"external_search_engine";if(b!=="facebook")return"external"}return null}function o(a){if(a==="")return[];var b=[];try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_history string"+a.toString(),"events");return b}return p(b)}function p(a){return!Array.isArray(a)?[]:a.filter(function(a){return typeof a==="object"}).map(function(a){var b=a.event_tracking,c=a.extra_data,d=a.mechanism;a=a.surface;return{event_tracking:typeof b==="string"?b:void 0,extra_data:typeof c==="object"?JSON.stringify(c):"",mechanism:typeof d==="string"?d:"unknown",surface:typeof a==="string"?a:"unknown"}})}function a(a){var b=d("CometRouteParams").useRouteParams(),e=c("useRouteReferrer")();return h(function(){return j(b,a,e==null?void 0:e.tracePolicy)},[b,a,e==null?void 0:e.tracePolicy])}g["default"]=a}),98);
__d("SearchCometResultsCard.react",["BaseHeadingContextWrapper.react","CometCard.react","CometUnitHeader.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={defaultSpacing:{marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"x1yztbdb",marginStart:"x1d52u69",$$css:!0},footer:{marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"x1yztbdb",marginStart:"x1d52u69",$$css:!0},root:{marginBottom:"x1yztbdb",$$css:!0}},j={primary:2,secondary:3};function a(a){var b=a.content,d=a.contentXStyle,e=a["data-testid"];e=a.footer;var f=a.footerXStyle,g=a.padding;g=g===void 0?"default":g;var k=a.subtitle,l=a.title,m=a.titleAction,n=a.titleActionLinkProps;a=a.titleStyle;a=a===void 0?"primary":a;l=l!=null&&l!==""?l:null;m=h.jsx(c("CometUnitHeader.react"),{action:m,actionLinkProps:n,body:k,headline:l,level:j[a]});return h.jsx("div",{className:"x1yztbdb","data-testid":void 0,role:"article",children:h.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,testid:void 0,children:[l!=null?h.jsxs("div",{children:[m,h.jsx("div",{className:c("stylex")(g==="default"&&i.defaultSpacing,d),children:h.jsx(c("BaseHeadingContextWrapper.react"),{children:b})})]}):null,l==null?h.jsx("div",{className:c("stylex")(g==="default"&&i.defaultSpacing,d),children:b}):null,e!=null?h.jsx("div",{className:c("stylex")(g==="default"&&i.footer,f),role:"article",children:e}):null]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsQueryContext",["react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=h.createContext();b=function(a){var b=a.children;a=a.context;return h.jsx(j.Provider,{value:a,children:b})};function a(){var a=i(j);if(a==null)throw c("unrecoverableViolation")("No query context found","search");return a}g.SearchCometResultsQueryContextProvider=b;g.useSearchCometResultsQueryContext=a}),98);
__d("SearchCometResultsEndOfResultsNotice.react",["fbt","CometColumn.react","CometColumnItem.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){return i.jsx(c("CometColumn.react"),{paddingTop:12,paddingVertical:0,ref:b,spacing:8,children:i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("TetraText.react"),{align:"center",color:"secondary",type:"body3",children:h._("__JHASH__ZJcwwdMlcVK__JHASH__")})})})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);