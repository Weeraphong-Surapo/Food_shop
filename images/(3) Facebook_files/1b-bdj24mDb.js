;/*FB_PKG_DELIM*/

__d("CommercePdpClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3002");b=d("FalcoLoggerInternal").create("commerce_pdp_click",a);e=b;g["default"]=e}),98);
__d("CommercePdpImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3006");b=d("FalcoLoggerInternal").create("commerce_pdp_impression",a);e=b;g["default"]=e}),98);
__d("CommercePdpScreenshotFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3109");b=d("FalcoLoggerInternal").create("commerce_pdp_screenshot",a);e=b;g["default"]=e}),98);
__d("CommercePdpSurfaceEnterFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3090");b=d("FalcoLoggerInternal").create("commerce_pdp_surface_enter",a);e=b;g["default"]=e}),98);
__d("MarketplaceClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743922");b=d("FalcoLoggerInternal").create("marketplace_click",a);e=b;g["default"]=e}),98);
__d("MarketplaceDesktopAdsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:MarketplaceDesktopAdsLoggerConfig")}),null);
__d("MarketplaceErrorDebugTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:MarketplaceErrorDebugLoggerConfig")}),null);
__d("MarketplaceImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743925");b=d("FalcoLoggerInternal").create("marketplace_impression",a);e=b;g["default"]=e}),98);
__d("MarketplaceModifyFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743927");b=d("FalcoLoggerInternal").create("marketplace_modify",a);e=b;g["default"]=e}),98);
__d("CometMarketplaceLogger",["CommercePdpClickFalcoEvent","CommercePdpImpressionFalcoEvent","CommercePdpScreenshotFalcoEvent","CommercePdpSurfaceEnterFalcoEvent","CommerceTabFeedClickFalcoEvent","CommerceTabFeedImpressionFalcoEvent","FBLogger","MarketplaceClickFalcoEvent","MarketplaceDesktopAdsTypedLoggerLite","MarketplaceErrorDebugTypedLoggerLite","MarketplaceImpressionFalcoEvent","MarketplaceModifyFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h="feed_product_item";function a(a){var b=a.eventName;a=a.extra;c("MarketplaceDesktopAdsTypedLoggerLite").logVital({event_name:b,extra:a})}function b(a,b,d,e){var f="click",g=a===h;g&&!(e==null?void 0:e.storyType)?c("FBLogger")("marketplace").mustfix("story_type not set for %s on feed_product_item",f):g&&!(e==null?void 0:e.productItemID)&&c("FBLogger")("marketplace").mustfix("product_item_id not set for %s on feed_product_item",f);c("MarketplaceClickFalcoEvent").log(function(){return{c2cShippingIncentiveCampaignID:e==null?void 0:e.c2cShippingIncentiveCampaignID,categoryID:e==null?void 0:e.categoryID,componentHierarchy:[{component:e==null?void 0:e.parentComponent}],componentID:e==null?void 0:e.componentID,composerEntrypoint:e==null?void 0:e.composerEntrypoint,composerMode:e==null?void 0:e.composerMode,discountID:e==null?void 0:e.discountID,extraData:e==null?void 0:e.extraData,filterKey:e==null?void 0:e.filterKey,filterText:e==null?void 0:e.filterText,filterValue:e==null?void 0:e.filterValue,isRouteLocationSet:e==null?void 0:e.isRouteLocationSet,localDeliveryEnabled:e==null?void 0:e.localDeliveryEnabled,otherUserID:Number(e==null?void 0:e.otherUserID),predicted_categories:e==null?void 0:e.predicted_categories,productItemID:e==null?void 0:e.productItemID,referralCode:e==null?void 0:e.referralCode,referralStoryType:e==null?void 0:e.referralStoryType,referralSurface:d,selected_category:e==null?void 0:e.selected_category,seoUrl:e==null?void 0:e.seoUrl,serverSessionID:e==null?void 0:e.serverSessionID,storyType:e==null?void 0:e.storyType,surface:b,themeID:e==null?void 0:e.themeID,tracking:e==null?void 0:e.tracking,uiComponent:a,upsellType:e==null?void 0:e.upsellType,upsellTypeDetails:e==null?void 0:e.upsellTypeDetails}});g=e==null?void 0:e.analyticsComponent;f=e==null?void 0:e.analyticsExperience;var i=e==null?void 0:e.analyticsFeedType,j=e==null?void 0:e.analyticsPage,k=e==null?void 0:e.analyticsModule;if(g!=null&&j!=null&&f==="tab_feed"){var l={analytics_component:g,analytics_feed_type:(f=i)!=null?f:"unknown",analytics_page:j,referral_surface:"unknown",shopping_session_id:""};l=k!=null?babelHelpers["extends"]({},l,{analytics_module:k}):l;l=(e==null?void 0:e.productItemID)!=null?babelHelpers["extends"]({},l,{product_id:e==null?void 0:e.productItemID}):l;l=(e==null?void 0:e.upsellType)!=null?babelHelpers["extends"]({},l,{extra_data:{upsell_type_name:e==null?void 0:e.upsellType}}):l;c("CommerceTabFeedClickFalcoEvent").log(function(){return l})}}function d(a,b,d,e){var f;c("MarketplaceErrorDebugTypedLoggerLite").log({component_name:(f=e==null?void 0:e.componentName)!=null?f:void 0,error:(f=e==null?void 0:e.error)!=null?f:void 0,event:a,extra_data:{clienttime:Date.now().toString(),productID:(f=e==null?void 0:e.productItemID)!=null?f:void 0},referral_surface:d,surface:b})}function e(a,b,d,e){c("MarketplaceModifyFalcoEvent").log(function(){return babelHelpers["extends"]({},e,{referralSurface:d,surface:b,uiComponent:a})})}function f(a,b,d,e){var f="impression",g=a===h;g&&!(e==null?void 0:e.storyType)?c("FBLogger")("marketplace").mustfix("story_type not set for %s on feed_product_item",f):g&&!(e==null?void 0:e.productItemID)&&c("FBLogger")("marketplace").mustfix("product_item_id not set for %s on feed_product_item",f);c("MarketplaceImpressionFalcoEvent").log(function(){return{c2cShippingIncentiveCampaignID:e==null?void 0:e.c2cShippingIncentiveCampaignID,componentHierarchy:[{component:e==null?void 0:e.parentComponent}],componentID:e==null?void 0:e.componentID,isRouteLocationSet:e==null?void 0:e.isRouteLocationSet,localDeliveryEnabled:e==null?void 0:e.localDeliveryEnabled,otherUserID:Number(e==null?void 0:e.otherUserID),productItemID:e==null?void 0:e.productItemID,referralCode:e==null?void 0:e.referralCode,referralStoryType:e==null?void 0:e.referralStoryType,referralSurface:d,seoUrl:e==null?void 0:e.seoUrl,serverSessionID:e==null?void 0:e.serverSessionID,storyType:e==null?void 0:e.storyType,surface:b,themeID:e==null?void 0:e.themeID,tracking:e==null?void 0:e.tracking,uiComponent:a,upsellType:e==null?void 0:e.upsellType,upsellTypeDetails:e==null?void 0:e.upsellTypeDetails,verificationFlowSource:e==null?void 0:e.verificationFlowSource,verificationHubStatus:e==null?void 0:e.verificationHubStatus,verificationType:e==null?void 0:e.verificationType}});g=e==null?void 0:e.analyticsComponent;f=e==null?void 0:e.analyticsExperience;var i=e==null?void 0:e.analyticsFeedType,j=e==null?void 0:e.analyticsPage,k=e==null?void 0:e.analyticsModule,l=e==null?void 0:e.navigationChain;if(g!=null&&j!=null&&f==="tab_feed"){var m={analytics_component:g,analytics_feed_type:(f=i)!=null?f:"unknown",analytics_page:j,navigation_chain:l,referral_surface:"unknown",shopping_session_id:""};m=k!=null?babelHelpers["extends"]({},m,{analytics_module:k}):m;m=(e==null?void 0:e.productItemID)!=null?babelHelpers["extends"]({},m,{product_id:e==null?void 0:e.productItemID}):m;m=(e==null?void 0:e.upsellType)!=null?babelHelpers["extends"]({},m,{extra_data:{upsell_type_name:e==null?void 0:e.upsellType}}):m;m=(e==null?void 0:e.category)!=null?babelHelpers["extends"]({},m,{extra_data:babelHelpers["extends"]({},m.extra_data,{category:e==null?void 0:e.category})}):m;c("CommerceTabFeedImpressionFalcoEvent").log(function(){return m})}}function i(a){a.legacy_surface==="product_details"&&c("CommercePdpClickFalcoEvent").log(function(){return babelHelpers["extends"]({},a,{referral_surface:"unknown"})})}function j(a){a.legacy_surface==="product_details"&&c("CommercePdpScreenshotFalcoEvent").log(function(){return babelHelpers["extends"]({},a,{referral_surface:"unknown"})})}function k(a){a.legacy_surface==="product_details"&&c("CommercePdpImpressionFalcoEvent").log(function(){return babelHelpers["extends"]({},a)})}function l(a){a.legacy_surface==="product_details"&&c("CommercePdpSurfaceEnterFalcoEvent").log(function(){return babelHelpers["extends"]({},a)})}g.logAdEvent=a;g.logClick=b;g.logDebug=d;g.logModify=e;g.logImpression=f;g.logCommercePDPClick=i;g.logCommercePDPScreenshot=j;g.logCommercePDPImpression=k;g.logCommercePDPSurfaceEnter=l}),98);
__d("MWInboxInfoSharedContentQPLLogger.bs",["QPLUserFlow","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h={contents:!1};function a(a){var b;switch(a.TAG){case 0:b="side_panel_media";break;case 1:b="side_panel_files";break;case 2:b="side_panel_links";break}h.contents=!0;c("QPLUserFlow").start(c("qpl")._(778117242,"206"),{annotations:{string:{entrypoint:b}},cancelOnUnload:!0})}function b(a){if(h.contents===!1){var b;switch(a.TAG){case 0:b="media";break;case 1:b="file";break;case 2:b="link";break}h.contents=!0;c("QPLUserFlow").start(c("qpl")._(778117242,"206"),{annotations:{string:{content_location:"thread",content_type:b,entrypoint:"thread"}},cancelOnUnload:!0})}c("QPLUserFlow").addPoint(c("qpl")._(778117242,"206"),"shared_content_click",{})}function d(a){var b;switch(a.TAG){case 0:b="open_tab_media";break;case 1:b="open_tab_files";break;case 2:b="open_tab_links";break}c("QPLUserFlow").addPoint(c("qpl")._(778117242,"206"),b,{})}function e(a,b){switch(a.TAG){case 0:c("QPLUserFlow").addPoint(c("qpl")._(778117242,"206"),"load_tab_media",{});c("QPLUserFlow").addAnnotations(c("qpl")._(778117242,"206"),{"int":{media_count:b}});return;case 1:c("QPLUserFlow").addPoint(c("qpl")._(778117242,"206"),"load_tab_files",{});c("QPLUserFlow").addAnnotations(c("qpl")._(778117242,"206"),{"int":{files_count:b}});return;case 2:c("QPLUserFlow").addPoint(c("qpl")._(778117242,"206"),"load_tab_links",{});c("QPLUserFlow").addAnnotations(c("qpl")._(778117242,"206"),{"int":{links_count:b}});return}}function f(a){var b;switch(a.TAG){case 0:b="media";break;case 1:b="file";break;case 2:b="link";break}c("QPLUserFlow").addPoint(c("qpl")._(778117242,"206"),"shared_content_click",{});c("QPLUserFlow").addAnnotations(c("qpl")._(778117242,"206"),{string:{content_location:"side_panel",content_type:b}});var d;switch(a.TAG){case 0:case 1:d=!1;break;case 2:d=!0;break}if(d){c("QPLUserFlow").endSuccess(c("qpl")._(778117242,"206"));h.contents=!1;return}}function i(){c("QPLUserFlow").endCancel(c("qpl")._(778117242,"206"),{annotations:{string:{cancel_reason:"side_panel_navigated_back"}}}),h.contents=!1}function j(){c("QPLUserFlow").endCancel(c("qpl")._(778117242,"206"),{annotations:{string:{cancel_reason:"close_info_panel"}}}),h.contents=!1}function k(){c("QPLUserFlow").endCancel(c("qpl")._(778117242,"206"),{annotations:{string:{cancel_reason:"navigated_away"}}}),h.contents=!1}function l(){c("QPLUserFlow").endSuccess(c("qpl")._(778117242,"206")),h.contents=!1}function m(){c("QPLUserFlow").endCancel(c("qpl")._(778117242,"206"),{annotations:{string:{cancel_reason:"closed_viewer"}}}),h.contents=!1}g.logOpenSidePanel=a;g.logOpenSharedContentFromThread=b;g.logOpenTab=d;g.logLoadTab=e;g.logOpenSharedContentFromSidePanel=f;g.logNavigateBackFromSidePanel=i;g.logCloseInfoPanel=j;g.logNavigateAwaySidePanel=k;g.logOpenContentViewer=l;g.logCloseContentViewer=m}),98);
__d("MWChatVideoPlayerControls.react",["VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerFullscreenControl.react","VideoPlayerHooks","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerScrubber.react","VideoPlayerVolumeControl.react","react","useVideoPlayerBigPlayButtonOverlay","useVideoPlayerDefaultControlsVisibility"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){return h.jsx("span",{className:"x12y6twl x1g0ag68",children:a.children})}i.displayName=i.name+" [from "+f.id+"]";function a(a){var b=c("useVideoPlayerDefaultControlsVisibility")(),e=b.isControlsVisible;b=b.onUserInteraction;var f=d("VideoPlayerHooks").usePaused();f=c("useVideoPlayerBigPlayButtonOverlay")({forceVisible:f});var g=f.bigPlayButtonElement;f=f.bigPlayButtonIsVisible;var j=d("VideoPlayerHooks").useIsFullscreen();e=e&&!f;f=h.jsx(c("VideoPlayerControlsContainerOverlay.react"),{isVisible:e,children:j?h.jsxs(h.Fragment,{children:[h.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{children:[h.jsx(c("VideoPlayerPlaybackControl.react"),{}),h.jsx(c("VideoPlayerPlaybackTimer.react"),{})]}),h.jsx(d("VideoPlayerControlsGroups.react").Expanded,{children:h.jsx(c("VideoPlayerScrubber.react"),{onUserInteraction:b})}),h.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{children:[h.jsx(c("VideoPlayerFullscreenControl.react"),{onUserInteraction:b}),h.jsx(c("VideoPlayerVolumeControl.react"),{onUserInteraction:b})]})]}):h.jsxs(h.Fragment,{children:[h.jsx(d("VideoPlayerControlsGroups.react").Contracted,{children:h.jsx(i,{children:h.jsx(c("VideoPlayerPlaybackControl.react"),{})})}),h.jsx(d("VideoPlayerControlsGroups.react").Expanded,{children:h.jsx(c("VideoPlayerScrubber.react"),{onUserInteraction:b})}),h.jsxs(d("VideoPlayerControlsGroups.react").Contracted,{children:[a.hideExpandButton?null:h.jsx(i,{children:h.jsx(c("VideoPlayerFullscreenControl.react"),{onUserInteraction:b})}),h.jsx(i,{children:h.jsx(c("VideoPlayerVolumeControl.react"),{onUserInteraction:b})})]})]})});return h.jsxs(h.Fragment,{children:[g,f]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerX.react",["VideoPlayerRetryableErrorBoundary.react","VideoPlayerXImpl.react","defaultErrorBoundaryFallback","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;b=b===void 0?!1:b;var d=a.errorBoundaryFallback;a=babelHelpers.objectWithoutPropertiesLoose(a,["doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn","errorBoundaryFallback"]);a=h.jsx(c("VideoPlayerXImpl.react"),babelHelpers["extends"]({VideoPlayerShakaPerformanceLoggerClass:null},a));return b?a:h.jsx(c("VideoPlayerRetryableErrorBoundary.react"),{description:"VideoPlayerX",fallback:(b=d)!=null?b:c("defaultErrorBoundaryFallback"),children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatVideoPlayer.react",["CometProductAttribution","GraphQLVideoAutoplayGatingResult","MWChatVideoAutoplaySettingContext","MWChatVideoPlayerControls.react","VideoPlayerDefaultControls.react","VideoPlayerProgressiveImplementationData","VideoPlayerProgressiveImplementationV2.react","VideoPlayerSurface.react","VideoPlayerX.react","computeAspectRatio","getVideoPlayerAutoplayProps","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={link_context:null,rootName:"MWChatMediaRoot.react",tap_point:"unexpected",tracePolicy:"comet.sharedmediaviewer.media",trackingNodes:null},j=function(a,b){switch(a){case"mwchat":return h.jsx(c("MWChatVideoPlayerControls.react"),{hideExpandButton:b===!0});case"default":return h.jsx(c("VideoPlayerDefaultControls.react"),{});case"none":return null;default:return null}};function a(a){var b=a.autoPlaySetting,e=a.controls,f=a.fbid,g=a.hdSrc,k=a.hideExpandButton,l=a.initialForceHD,m=a.originalHeight,n=a.originalWidth;a=a.sdSrc;l=d("VideoPlayerProgressiveImplementationData").makeProgressiveImplementationData({hdSrc:g,hdSrcPreferred:(g=l)!=null?g:!1,isExternalMedia:!1,sdSrc:a});g=d("MWChatVideoAutoplaySettingContext").useMWChatVideoAutoplaySetting();if(l==null)return null;a=[{Component:c("VideoPlayerProgressiveImplementationV2.react"),data:l,typename:"VideoPlayerProgressiveImplementation"}];l=c("getVideoPlayerAutoplayProps")(d("GraphQLVideoAutoplayGatingResult").makeGraphQLVideoAutoplayGatingResult("unknown",b!=null?b:g,!0),"respect_user_settings",null);b=c("computeAspectRatio")(n,m);return h.createElement(c("VideoPlayerX.react"),babelHelpers["extends"]({},l,{implementations:a,key:f,loopCount:-1,playerOriginOverride:"messaging",portalingEnabled:!1,productAttribution:{v2:[d("CometProductAttribution").getProductAttributionEntryV2(i)]},subOrigin:"messenger_thread",videoFBID:f,videoPixelsAspectRatio:b}),h.jsx(c("VideoPlayerSurface.react"),{children:j(e,k)}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MessengerBlurpleLogoSvg.bs",["react","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.width;a=a.height;b=b!==void 0?b:"80";a=a!==void 0?a:"80";var d=c("useCometUniqueID")(),e=h.useMemo(function(){return h.cloneElement(h.jsx("path",{}),{clipRule:"evenodd",d:"M40 .914C17.995.914.937 17.033.937 38.804c0 11.389 4.668 21.23 12.268 28.026a3.12 3.12 0 011.05 2.227l.212 6.95c.068 2.215 2.358 3.658 4.386 2.763l7.753-3.423a3.115 3.115 0 012.087-.153A42.602 42.602 0 0040 76.695c22.005 0 39.063-16.118 39.063-37.89C79.063 17.033 62.005.915 40 .915z",fill:"url(#"+(d+")"),fillRule:"evenodd",suppressHydrationWarning:!0})},[d]),f=h.useMemo(function(){return h.cloneElement(h.jsx("radialGradient",{}),{children:h.jsxs(h.Fragment,{children:[h.jsx("stop",{stopColor:"#09F"}),h.jsx("stop",{offset:"0.61",stopColor:"#A033FF"}),h.jsx("stop",{offset:"0.935",stopColor:"#FF5280"}),h.jsx("stop",{offset:"1",stopColor:"#FF7061"})]}),cx:"0",cy:"0",gradientTransform:"rotate(-57.092 80.25 24.628) scale(85.1246)",gradientUnits:"userSpaceOnUse",id:d,r:"1",suppressHydrationWarning:!0})},[d]);return h.jsxs("svg",{fill:"none",height:a,viewBox:" 0 0 80 80",width:b,children:[e,h.jsx("path",{clipRule:"evenodd",d:"M16.543 49.886L28.018 31.68a5.86 5.86 0 018.472-1.563l9.127 6.844a2.343 2.343 0 002.823-.008L60.765 27.6c1.645-1.248 3.793.72 2.692 2.467L51.982 48.272a5.86 5.86 0 01-8.472 1.563l-9.127-6.845a2.344 2.344 0 00-2.823.01l-12.325 9.354c-1.646 1.248-3.793-.72-2.692-2.467z",fill:"#fff",fillRule:"evenodd"}),h.jsx("defs",{children:f})]})}a.displayName=a.name+" [from "+f.id+"]";b=a;g.make=b}),98);