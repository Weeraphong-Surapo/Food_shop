;/*FB_PKG_DELIM*/

__d("CometMemoriesRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8961982160509685"}),null);
__d("CometMemoriesRootQuery$Parameters",["CometMemoriesRootQuery_facebookRelayOperation","GroupsCometDelayCheckBlockedUsers.relayprovider","IsMergQAPolls.relayprovider","IsWorkUser.relayprovider","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometMemoriesRootQuery_facebookRelayOperation"),metadata:{},name:"CometMemoriesRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider:b("GroupsCometDelayCheckBlockedUsers.relayprovider"),__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("PageCometLaunchpointLeftNavMenuRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6263759557006196"}),null);
__d("PageCometLaunchpointLeftNavMenuRootQuery$Parameters",["PageCometLaunchpointLeftNavMenuRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PageCometLaunchpointLeftNavMenuRootQuery_facebookRelayOperation"),metadata:{},name:"PageCometLaunchpointLeftNavMenuRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PageCometLaunchpointDiscoverRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9566312526727786"}),null);
__d("PagesCometLaunchpointDiscoverQueryFixEnabled.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return Boolean(c("gkx")("2989"))}};g["default"]=a}),98);
__d("PageCometLaunchpointDiscoverRootQuery$Parameters",["PageCometLaunchpointDiscoverRootQuery_facebookRelayOperation","PagesCometLaunchpointDiscoverQueryFixEnabled.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PageCometLaunchpointDiscoverRootQuery_facebookRelayOperation"),metadata:{},name:"PageCometLaunchpointDiscoverRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__PagesCometLaunchpointDiscoverQueryFixEnabledrelayprovider:b("PagesCometLaunchpointDiscoverQueryFixEnabled.relayprovider")}}};e.exports=a}),null);
__d("CometMemoriesRoot.entrypoint",["CometMemoriesRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{memoriesReference:{parameters:b("CometMemoriesRootQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:0,feedLocation:"GOODWILL_THROWBACK_PERMALINK",focusCommentID:null,goodwillTimestamp:a.routeProps.goodwillTimestamp,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"throwback_composer",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}}}},root:c("JSResourceForInteraction")("CometMemoriesRoot.react").__setRef("CometMemoriesRoot.entrypoint")};g["default"]=a}),98);
__d("buildPageCometLaunchpointRoute.entrypoint",["JSResourceForInteraction","PageCometLaunchpointLeftNavMenuRootQuery$Parameters","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("PageCometLaunchpointEntryPointRoot.react").__setRef("buildPageCometLaunchpointRoute.entrypoint"),function(a){a=c("gkx")("1549707")&&!((a=(a=a.routeProps)==null?void 0:a.enablePagesLaunchpoint)!=null?a:!1);var d=c("gkx")("4510");return{leftNavContainerQueryReference:{parameters:b("PageCometLaunchpointLeftNavMenuRootQuery$Parameters"),variables:{showUpdatedLaunchpointRedesign:c("gkx")("3277"),useAdminedPagesForActingAccount:d,useNewPagesYouManage:a||d}}}});g["default"]=a}),98);
__d("PageCometLaunchpointDiscoverRoot.entrypoint",["JSResourceForInteraction","PageCometLaunchpointDiscoverRootQuery$Parameters","WebPixelRatio","buildPageCometLaunchpointRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildPageCometLaunchpointRoute.entrypoint")(c("JSResourceForInteraction")("PageCometLaunchpointDiscoverRoot.react").__setRef("PageCometLaunchpointDiscoverRoot.entrypoint"),function(a){return{queries:{pageDiscoverRootQueryReference:{parameters:c("PageCometLaunchpointDiscoverRootQuery$Parameters"),variables:{id:a.routeProps.userID,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("PagesCometLaunchpoint.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("gkx")("711")}};g["default"]=a}),98);
__d("PagesCometLaunchpointUnifiedQueryPagesListRedesignedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5626452274128886"}),null);