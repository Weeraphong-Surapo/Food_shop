;/*FB_PKG_DELIM*/

__d("GroupsCometFeatureDetailViewDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6728137110535366"}),null);
__d("GroupsCometFeatureDetailViewDialogQuery$Parameters",["GroupsCometFeatureDetailViewDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometFeatureDetailViewDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometFeatureDetailViewDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group",selections:[{alias:"off_plat_comet_crawlability_gk",args:[{kind:"Literal",name:"gk_name",value:"groups_off_platform_distribution_comet_crawability"}],concreteType:"EntGKCheck",kind:"LinkedField",name:"gk_check",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"passes_gk",storageKey:null}],storageKey:'gk_check(gk_name:"groups_off_platform_distribution_comet_crawability")'}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometEndOfFeedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6001775859842406"}),null);
__d("GroupsCometEndOfFeedQuery$Parameters",["GroupsCometEndOfFeedQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometEndOfFeedQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometEndOfFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupRoomCreateAudioChannelDialogRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5790704310990324"}),null);
__d("GroupRoomCreateAudioChannelDialogRootQuery$Parameters",["GroupRoomCreateAudioChannelDialogRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupRoomCreateAudioChannelDialogRootQuery_facebookRelayOperation"),metadata:{},name:"GroupRoomCreateAudioChannelDialogRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useGroupRoomCreateAudioChannelDialog_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupRoomCreateAudioChannelDialog_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("CrisisCometLogging",["react","requireDeferred","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");e=b.createContext;var i=b.useCallback,j=b.useContext,k=b.useMemo,l=c("requireDeferred")("CrisisClickUnitFalcoEvent").__setRef("CrisisCometLogging"),m=c("requireDeferred")("CrisisToolViewPageFalcoEvent").__setRef("CrisisCometLogging"),n=c("requireDeferred")("CrisisViewModuleFalcoEvent").__setRef("CrisisCometLogging"),o=c("requireDeferred")("CrisisViewUnitFalcoEvent").__setRef("CrisisCometLogging"),p=e();function q(){var a=j(p),b=function(b){l.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},d=i(function(b){m.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},[a]),e=function(b){b===void 0&&(b={});var d=q(),a=d.logViewedUnit;d=i(function(){return a(b)},[a,b]);return c("useSinglePartialViewImpression")({onImpressionStart:d})},f=function(b){b===void 0&&(b={});var d=q(),a=d.logViewedModule;d=i(function(){return a(b)},[a,b]);return c("useSinglePartialViewImpression")({onImpressionStart:d})},g=i(function(b){o.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},[a]),h=i(function(b){n.onReady(function(c){c.log(function(){return{crisis_id:a==null?void 0:a.crisis_id,extra_data:babelHelpers["extends"]({},a,b)}})})},[a]);return{logClick:b,loggingContextData:a,logViewedModule:h,logViewedPage:d,logViewedUnit:g,useCrisisViewedModuleLogging:f,useCrisisViewedUnitLogging:e}}function a(a,b){return function(c){var d=j(p),e=b&&b(c),f=k(function(){return babelHelpers["extends"]({},d,e)},[d,e]);return h.jsx(p.Provider,{value:f,children:h.jsx(a,babelHelpers["extends"]({},c))})}}g.useCrisisLogging=q;g.withCrisisLoggingProvider=a}),98);
__d("CometEndOfFeedLoader.react",["CometDOMOnlyBoundary.react","CometErrorBoundary.react","react","react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react","recoverableViolation","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){c("recoverableViolation")("CometEndOfFeedLoader level component did not catch own error","comet_feed",{error:a})}function a(a){var b=a.entryPoint,d=a.entryPointParams,e=a.entryPointProps;a=a.glimmer;var f=c("useCometRelayEntrypointContextualEnvironmentProvider")();return b==null?a:h.jsx(c("CometDOMOnlyBoundary.react"),{fallback:a,children:h.jsx(c("CometErrorBoundary.react"),{onError:i,children:h.jsx(c("react-relay/relay-hooks/LazyLoadEntryPointContainer_DEPRECATED.react"),{entryPoint:b,entryPointParams:d,environmentProvider:f,props:e})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("addLocalGroupFeedInlineMessage",["CometRelay","cometUniqueID","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,d){a=a.get(b);if(a==null){c("recoverableViolation")("Group Feed Inline Message Updater: Could not find group edge in store","groups_comet");return}b=a.getLinkedRecords("local_feed_inline_messages")||[];a.setLinkedRecords([].concat(b,[d]),"local_feed_inline_messages")}function a(a,b,e){d("CometRelay").commitLocalUpdate(a,function(a){var d="client:LocalGroupFeedVideoInlineMessage:"+c("cometUniqueID")(),f=a.create(d,"LocalGroupFeedVideoInlineMessage");f.setValue(String(d),"id");f.setValue(String(b),"group_id");f.setValue(String(e),"message");h(a,b,f)})}function b(a,b,e){d("CometRelay").commitLocalUpdate(a,function(a){var d=a.get(b);if(d==null){c("recoverableViolation")("Group Feed Inline Message Updater: Could not find group edge in store","groups_comet");return}var f=d.getLinkedRecords("local_feed_inline_messages")||[];f=f.filter(function(a){return(a==null?void 0:a.getDataID())!==e});a["delete"](e);d.setLinkedRecords(f,"local_feed_inline_messages")})}g.addLocalVideoFeedMessage=a;g.removeLocalFeedMessage=b}),98);
__d("GroupsCometFeatureDetailViewDialog.entrypoint",["GroupsCometFeatureDetailViewDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeProps;var b=a.featureID;a=a.groupID;return{queries:{queryReference:{parameters:c("GroupsCometFeatureDetailViewDialogQuery$Parameters"),variables:{featureID:b,groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometFeatureDetailViewDialog.react").__setRef("GroupsCometFeatureDetailViewDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometLightweightGroupOptimisticPostContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({optimisticPostDisposables:[],setOptimisticPostDisposables:function(){}});g["default"]=b}),98);
__d("GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList.react",["CometFeedInfiniteScrollSuspenseList.react","CometRelay","GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group.graphql","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useMemo;function a(a){var e=a.group$key,f=babelHelpers.objectWithoutPropertiesLoose(a,["group$key"]);a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometFeedCrawlerOptimizedInfiniteScrollSuspenseList_group.graphql"),e);var g=(a=a==null?void 0:(e=a.off_plat_comet_crawlability_gk)==null?void 0:e.passes_gk)!=null?a:!1;e=j(function(){return!c("gkx")("1779508")||!g?f:babelHelpers["extends"]({},f,{incrementalRendering:!1,waitOnScrollIntent:!1})},[g,f]);return i.jsx(c("CometFeedInfiniteScrollSuspenseList.react"),babelHelpers["extends"]({},e))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRegularStoriesGlimmer.react",["CometFeedStoryGlimmer.react","CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={header:{paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",paddingTop:"x1cnzs8",$$css:!0},headerGlimmer:{borderTopStartRadius:"x8u2fvd",borderTopEndRadius:"x1ht7hnu",borderBottomEndRadius:"x1quq95r",borderBottomStartRadius:"x5yzy4c",height:"x170jfvy",marginTop:"xr1yuqi",width:"x1lzt3e6",$$css:!0}};function a(a){a=a.hasSortingSetting;a=a===void 0?!1:a;return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"x1l90r2v x1swvt13 x1cnzs8",children:h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.headerGlimmer})}),h.jsx(c("CometFeedStoryGlimmer.react"),{}),h.jsx(c("CometFeedStoryGlimmer.react"),{}),a&&h.jsxs(h.Fragment,{children:[h.jsx(c("CometFeedStoryGlimmer.react"),{}),h.jsx(c("CometFeedStoryGlimmer.react"),{})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometEndOfFeed.entrypoint",["GroupsCometEndOfFeedQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.id;return{queries:{endOfFeedQueryReference:{options:{fetchPolicy:"network-only"},parameters:c("GroupsCometEndOfFeedQuery$Parameters"),variables:{id:a,scale:1}}}}},root:c("JSResourceForInteraction")("GroupsCometEndOfFeed.react").__setRef("GroupsCometEndOfFeed.entrypoint")};b=a;g["default"]=b}),98);
__d("GroupRoomCreateAudioChannelDialog.entrypoint",["GroupRoomCreateAudioChannelDialogRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{queryReference:{parameters:b("GroupRoomCreateAudioChannelDialogRootQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupRoomCreateAudioChannelDialog.react").__setRef("GroupRoomCreateAudioChannelDialog.entrypoint")};g["default"]=a}),98);
__d("useGroupRoomCreateAudioChannelDialog",["GroupRoomCreateAudioChannelDialog.entrypoint","useCometEntryPointDialog","useGroupRoomCreateAudioChannelDialog_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;h!==void 0?h:h=b("useGroupRoomCreateAudioChannelDialog_group.graphql");function a(a,b){a=c("useCometEntryPointDialog")(c("GroupRoomCreateAudioChannelDialog.entrypoint"),{groupID:a},"button");var d=a[0];return function(a){return d({loggingData:b},a)}}g["default"]=a}),98);
__d("mapMap",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Map();a.forEach(function(a,d){c.set(d,b(a,d))});return c}f["default"]=a}),66);
__d("GroupsMallUserViewedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1835973");b=d("FalcoLoggerInternal").create("groups_mall_user_viewed",a);e=b;g["default"]=e}),98);
__d("GroupsCometNewMemberGreetingDialogRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6018182144938016"}),null);
__d("mapMapToArray",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=[],d=0;for(var e of a){var f=e[0],g=e[1];c.push(b(g,f,d,a));d++}return c}f["default"]=a}),66);/*FB_PKG_DELIM*/
__d("GroupsCometMembershipQuestionsEntrypointDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5543173005787650"}),null);
__d("GroupsCometMembershipQuestionsEntrypointDialogQuery$Parameters",["GroupsCometMembershipQuestionsEntrypointDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometMembershipQuestionsEntrypointDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometMembershipQuestionsEntrypointDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometParticipationQuestionsDialogFbts_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometParticipationQuestionsDialogFbts_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometParticipationQuestionsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5716279828470515"}),null);
__d("GroupsCometParticipationQuestionsDialogQuery$Parameters",["GroupsCometParticipationQuestionsDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometParticipationQuestionsDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometParticipationQuestionsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometMembershipQuestionsDialog.entrypoint",["GroupsCometMembershipQuestionsEntrypointDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{queryReference:{parameters:c("GroupsCometMembershipQuestionsEntrypointDialogQuery$Parameters"),variables:{group_id:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometMembershipQuestionsEntrypointDialog.react").__setRef("GroupsCometMembershipQuestionsDialog.entrypoint")};b=a;g["default"]=b}),98);
__d("GroupsCometParticipationQuestionsDialog.entrypoint",["GroupsCometParticipationQuestionsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{queryReference:{parameters:c("GroupsCometParticipationQuestionsDialogQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometParticipationQuestionsDialog.react").__setRef("GroupsCometParticipationQuestionsDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometParticipationQuestionsDialogFbts",["fbt","GroupsCometParticipationQuestionsDialogFbts_group.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i;i!==void 0?i:i=b("GroupsCometParticipationQuestionsDialogFbts_group.graphql");a=h._("__JHASH__-t3p-Co1t7r__JHASH__");c=h._("__JHASH__50ywu1Q1jWX__JHASH__");g.participationQuestionsDialogTitle=a;g.participationReviewDialogTitle=c}),98);
__d("useGroupsCometParticipationQuestionsEntryPointDialog",["CometCardedDialogLoadingStateLegacy.react","GroupsCometMembershipQuestionsDialog.entrypoint","GroupsCometParticipationQuestionsDialog.entrypoint","GroupsCometParticipationQuestionsDialogFbts","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.groupID;a=a.useMQsInForum;a=a===void 0?!1:a;return c("useCometEntryPointDialog")(a?c("GroupsCometMembershipQuestionsDialog.entrypoint"):c("GroupsCometParticipationQuestionsDialog.entrypoint"),{groupID:b},void 0,function(a){return h.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:a,title:d("GroupsCometParticipationQuestionsDialogFbts").participationQuestionsDialogTitle,withCloseButton:!0})})}g["default"]=a}),98);
__d("FBReelsMuteContextDefaultValue",[],(function(a,b,c,d,e,f){"use strict";a={isMuted:!1,setMute:function(a){}};f["default"]=a}),66);
__d("FBReelsMuteContext",["FBReelsMuteContextDefaultValue","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("FBReelsMuteContextDefaultValue"));g["default"]=b}),98);
__d("useFBReelsProcessRoute",["CometRouteParams","useRoutePassthroughProps","uuid"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams(),b=c("useRoutePassthroughProps")()||{},e=typeof a.video_id==="string"?a.video_id:"",f=typeof b.trackingString==="string"?b.trackingString:"",g=typeof b.rootVideoTrackingKey==="string"?b.rootVideoTrackingKey:"",h=typeof b.rootVideoID==="string"?b.rootVideoID:"",i=typeof a.group_id==="string"?a.group_id:null,j="";typeof a.s==="string"?j=a.s:typeof b.s==="string"&&(j=b.s);a=typeof b.sessionID==="string"?b.sessionID:c("uuid")();var k=!Boolean(b.showComments),l=typeof b.isMuted==="boolean"?b.isMuted:null,m=typeof b.index==="number"?b.index:null,n=b.paginationFragment;b=b.paginationFragmentKey;return{aggregationPageNodeIndex:m,aggregationPaginationFragment:n,aggregationPaginationFragmentKey:b,groupID:i,isFullScreen:k,isMutedFromPreviousRoute:l,rootVideoID:h,rootVideoTrackingKey:g,source:j,trackingString:f,videoID:e,viewerSessionID:a}}g["default"]=a}),98);
__d("useFBReelsMute",["CometRouteRenderType","react","useFBReelsProcessRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(){var a=d("CometRouteRenderType").useIsPushView(),b=c("useFBReelsProcessRoute")();b=b.isMutedFromPreviousRoute;b=h(typeof b==="boolean"?b:!a);a=b[0];var e=b[1];b=function(a){e(a)};return[a,b]}g["default"]=a}),98);
__d("FBReelsMuteContextProvider",["FBReelsMuteContext","FBReelsMuteContextDefaultValue","react","useFBReelsMute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useMemo;function k(a){a=a.children;var b=c("useFBReelsMute")(),d=b[0],e=b[1];b=j(function(){return{isMuted:d,setMute:e}},[d,e]);return h.jsx(c("FBReelsMuteContext").Provider,{value:b,children:a})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var b=a.children,d=a.shouldUseParentContext,e=i(c("FBReelsMuteContext"));return d===!0&&e!==c("FBReelsMuteContextDefaultValue")?b:h.jsx(k,babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FBReelsStarsSentAnimationContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={animationComponent:null,isPlayingSentStarsAnimation:!1,setAnimationComponent:function(a){},setIsPlayingSentStarsAnimation:function(a){}};c=a.createContext(b);g["default"]=c}),98);
__d("FBReelsFeedbackBaseButtonWithCount.react",["fbt","CometCircleButton.react","CometColumn.react","CometColumnItem.react","CometInlinePressableText.react","CometTheme.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.active,d=a.buttonRef,e=a.customFeedbackButton,f=a.disabled;f=f===void 0?!1:f;var g=a.icon,j=a.label,k=a.onFeedbackCountClick,l=a.onHoverIn,m=a.onHoverOut,n=a.onPress,o=a.onPressIn;a=a.reducedNumber;f=i.jsx(c("CometCircleButton.react"),{disabled:f,icon:g,label:j,onHoverIn:l,onHoverOut:m,onPress:n,onPressIn:o,ref:d,size:40,type:b?"deemphasized-overlay":"normal"});g=h._("__JHASH__RKpfxsXusdf__JHASH__",[h._param("Number",a)]);return i.jsx(c("CometTheme.react"),{theme:"dark",children:i.jsxs(c("CometColumn.react"),{align:"center",spacing:8,children:[i.jsx(c("CometColumnItem.react"),{children:(j=e)!=null?j:f}),a==null?null:i.jsx(c("CometColumnItem.react"),{children:a!=="0"?i.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:1,type:"bodyLink4",children:k?i.jsx(c("CometInlinePressableText.react"),{hoverUnderlineDisabled:!0,onPress:k,children:g}):g}):i.jsx("div",{className:"xdvlbce"})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIConstants",[],(function(a,b,c,d,e,f){"use strict";a=525;b=750;f.REACTION_MENU_SHOW_DELAY=a;f.REACTION_MENU_HIDE_DELAY=b}),66);
__d("FBReelsFeedbackUtils",["CometUFIConstants","QE2Logger","clearTimeout","intlSummarizeNumber","react","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef,i=3;function a(a){var b=c("intlSummarizeNumber")(a);return j(b)>i?c("intlSummarizeNumber")(a,0):b}function j(a){return a.replace(/\D/g,"").length}function k(){d("QE2Logger").logExposureForUser("fbreels_web_enable_all_reactions")}function b(){var a=h(null),b=function(){c("clearTimeout")(a.current),a.current=c("setTimeout")(k,d("CometUFIConstants").REACTION_MENU_SHOW_DELAY)},e=function(){return c("clearTimeout")(a.current)},f=function(){return c("clearTimeout")(a.current)};return{onMouseDown:f,onMouseEnter:b,onMouseLeave:e}}g.intlSummarizeTruncateNumber=a;g.logAllReactionsExposure=k;g.useHoverOnLikeButtonExposureLog=b}),98);/*FB_PKG_DELIM*/
__d("CometSaveCommunityAttributionSquircle.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("gkx")("7882")}};g["default"]=a}),98);
__d("CometSaveDashboardRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8747039528699618"}),null);
__d("CometSaveDashboardRootQuery$Parameters",["CometSaveCommunityAttributionSquircle.relayprovider","CometSaveDashboardRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSaveDashboardRootQuery_facebookRelayOperation"),metadata:{},name:"CometSaveDashboardRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__CometSaveCommunityAttributionSquirclerelayprovider:b("CometSaveCommunityAttributionSquircle.relayprovider")}}};e.exports=a}),null);
__d("CometSavePrimaryNavigationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7964745310264333"}),null);
__d("SaveCollectionsFeatureParityComet.relayprovider",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("gkx")("7185")===!0}};g["default"]=a}),98);
__d("CometSavePrimaryNavigationQuery$Parameters",["CometSavePrimaryNavigationQuery_facebookRelayOperation","SaveCollectionsFeatureParityComet.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSavePrimaryNavigationQuery_facebookRelayOperation"),metadata:{},name:"CometSavePrimaryNavigationQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__SaveCollectionsFeatureParityCometrelayprovider:b("SaveCollectionsFeatureParityComet.relayprovider")}}};e.exports=a}),null);
__d("PublicEventCometRSVPButtonStrings",["fbt","react"],(function(a,b,c,d,e,f,g,h){"use strict";d("react");function a(a){return a==="GOING"?h._("__JHASH__I74xO2khJDt__JHASH__"):h._("__JHASH__Oz3cVHrpTIY__JHASH__")}a.displayName=a.name+" [from "+f.id+"]";function b(a){return a==="WATCHED"?h._("__JHASH__PSEKKGP96nF__JHASH__"):h._("__JHASH__2qkjQUh42sG__JHASH__")}b.displayName=b.name+" [from "+f.id+"]";function c(a){return a==="WATCHED"?h._("__JHASH__mW930W3sXs7__JHASH__"):h._("__JHASH__h2mdzk1ue9H__JHASH__")}c.displayName=c.name+" [from "+f.id+"]";function e(){return h._("__JHASH__xoeLuaGKq5s__JHASH__")}e.displayName=e.name+" [from "+f.id+"]";g.Going=a;g.Interested=b;g.Remove=c;g.Purchase=e}),98);
__d("EventCometActionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({event_action_history:[]});g["default"]=b}),98);
__d("EventCometActionLoggerUtils",[],(function(a,b,c,d,e,f){"use strict";var g={mechanism:"unknown",surface:"unknown"},h=3;function a(a,b){var c=[].concat(a.event_action_history||[]);c.length>=h&&(c=c.slice(c.length-h+1));var d=i(a);c.push({event_tracking:d.event_tracking,extra_data:d.extra_data,mechanism:b.mechanism,surface:b.surface});return babelHelpers["extends"]({},a,{event_action_history:c})}function i(a){a=a.event_action_history;if(a==null||a[a.length-1]==null)return g;return a.length>=2?a[a.length-2]:a[a.length-1]}f.createForNewSurface=a;f.getLastActionHistoryEntry=i}),66);
__d("GSUALoggingUtils",[],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,d,e,f){if(b===!0)return"group_mall_featured_card";switch(a){case"homepage_stream":return"newsfeed";case"group":if(d==="GROUP_ANNOUNCEMENTS_FEED")return"group_mall_featured_tab";return f!==null?f==="DISCUSSION"?"group_mall_discussion":"group_mall_bsg_tab":(b=e)!=null?b:"group_mall_bsg_tab";case"groups_tab":return"groups_tab";case"group_serp":return"group_search";case"search_results_page":if(c==="group_posts"||c==="groups_home")return"group_tab_serp";return c==="top"||c==="posts"?"global_search_module_result":"group_mall_topics_feed";case"group_permalink":return"group_permalink";default:return"unknown"}}g.storyRenderLocationToSurface=a}),98);
__d("CometGSUALoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({group_id:"",referral_code:"unknown",referral_surface:"unknown",surface:"unknown"});g["default"]=b}),98);
__d("buildSaveRoute.entrypoint",["CometSavePrimaryNavigationQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("CometSaveRoot.react").__setRef("buildSaveRoute.entrypoint"),function(a){return{navigationQueryReference:{parameters:b("CometSavePrimaryNavigationQuery$Parameters"),variables:{contributorRoles:["CONTRIBUTOR"]}}}});g["default"]=a}),98);
__d("CometSaveDashboardRoot.entrypoint",["CometSaveDashboardRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildSaveRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildSaveRoute.entrypoint")(c("JSResourceForInteraction")("CometSaveDashboardRoot.react").__setRef("CometSaveDashboardRoot.entrypoint"),function(a){var b=a.routeProps,e=b.content_filter,f=b.referrer;b=b.section;a=a.routeParams;var g=a.hoisted_item_id;a=a.notif_id;return{extraProps:{routeProps:{referrer:f,section:b}},queries:{rootQueryRef:{parameters:c("CometSaveDashboardRootQuery$Parameters"),variables:{content_filter:e!=null?[e]:null,hoisted_item_id:g!=null?String(g):null,notif_id:a!=null?String(a):null,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("CometSaveLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({collectionID:null,referrer:null,surface:"dashboard",surfaceGraphQL:"DASHBOARD",surfaceGraphQL_legacy:"dashboard"});g["default"]=b}),98);
__d("useCometSaveLoggingContext",["CometSaveLoggingContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){return h(c("CometSaveLoggingContext"))}g["default"]=a}),98);
__d("useSearchCometResultsSearchTypeFromURL",["CometRouteParams"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams();a=a.searchtype;a=a!=null?a:null;return a}g["default"]=a}),98);
__d("CometEventPermalinkTab",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({ABOUT:"about",DISCUSSION:"discussion",BRACKETS:"brackets",PARTICIPANTS:"participants",STANDINGS:"standings",VIDEOS:"videos",PAID_ACCESS:"paid_access"});c=a;f["default"]=c}),66);
__d("XCometEventPermalinkControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/{event_id}/{?child_event_id}/",Object.freeze({active_tab:"about",hide_invite_flow_filter_groups:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometSaveDashboardControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/saved/",Object.freeze({unlisted_only:!1}),void 0);b=a;g["default"]=b}),98);