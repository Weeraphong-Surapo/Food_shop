;/*FB_PKG_DELIM*/

__d("CometNotificationsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6220662361298809"}),null);
__d("CometNotificationsRootQuery$Parameters",["CometNotificationsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometNotificationsRootQuery_facebookRelayOperation"),metadata:{},name:"CometNotificationsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometNotificationsRoot.entrypoint",["CometNotificationsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a={count:15,environment:"MAIN_SURFACE",filter_tokens:(a=a==null?void 0:(a=a.passthroughProps)==null?void 0:a.filterTokens)!=null?a:[],scale:d("WebPixelRatio").get()};return{queries:{notificationsRootQueryReference:{parameters:b("CometNotificationsRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometNotificationsRoot.react").__setRef("CometNotificationsRoot.entrypoint")};g["default"]=a}),98);