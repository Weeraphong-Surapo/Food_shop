;/*FB_PKG_DELIM*/

__d("FBShopsLegacyUpgradeDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4772874056151167"}),null);
__d("FBShopsLegacyUpgradeDialogQuery$Parameters",["FBShopsLegacyUpgradeDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FBShopsLegacyUpgradeDialogQuery_facebookRelayOperation"),metadata:{},name:"FBShopsLegacyUpgradeDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FBShopsLegacyUpgradeDialog.entrypoint",["FBShopsLegacyUpgradeDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.adminHasPermissions,d=a.dialogType,e=a.loggingSurface,f=a.pageID,g=a.referralCode;a=a.referralSurface;var h=d==="product_tagging_friction"||d==="product_tagging_block";return{extraProps:{adminHasPermissions:c,dialogType:d,loggingSurface:e,referralCode:g,referralSurface:a},queries:{FBShopsLegacyUpgradeDialogQueryReference:{parameters:b("FBShopsLegacyUpgradeDialogQuery$Parameters"),variables:{adminHasPermissions:c,isProductTaggingModal:h,pageID:f}}}}},root:c("JSResourceForInteraction")("FBShopsLegacyUpgradeDialog.react").__setRef("FBShopsLegacyUpgradeDialog.entrypoint")};g["default"]=a}),98);
__d("CometPageLayoutWithComplementaryContent.react",["BaseRow.react","BaseRowItem.react","CometMediaViewerFullscreenContext","CometRouteRenderType","CometScrollView.react","MWChatVisibilityOverrideContext","gkx","react","useMWShouldCurrentRouteOverrideChatVisibility","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=c("gkx")("708253"),k=c("gkx")("1217157"),l=c("gkx")("2820"),m={chatSliver:{backgroundColor:"x1jx94hy",boxShadow:"x13tw4yp",display:"x78zum5",height:"xtp0wl1",top:"xxzkxad",width:"x1dmp6jm",zIndex:"x1vjfegm","@media (max-width: 899px)_display":"x1daaz14",$$css:!0},container:{height:"x3igimt",maxHeight:"xedcshv",overflowX:"x6ikm8r",overflowY:"x10wlt62","@media (max-width: 900px)_flexDirection":"x10o2a94",$$css:!0},containerFullScreenInPushView:{minHeight:"xg6iff7",$$css:!0},containerInPushView:{minHeight:"x1us19tq",$$css:!0},containerNotInPushView:{minHeight:"xat3117",$$css:!0},contentAreaInPushView:{height:"x1dr59a3","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaInPushViewUsesParentHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaNotInPushView:{height:"xtp0wl1","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},defaultBackground:{backgroundColor:"x2bj2ny",$$css:!0},rightRail:{height:"x3igimt",maxHeight:"xmz0i5r","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mr1erl",$$css:!0},rightRailFixed:{backgroundColor:"x2bj2ny",maxHeight:"x85a59c",minHeight:"x1t2pt76","@media (max-width: 900px)_maxHeight":"x12slza2","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mnsmir",$$css:!0},rightRailInner:{backgroundColor:"x2bj2ny",height:"x3igimt",maxWidth:"xxc7z9f",minWidth:"x1gvwcb","@media (max-width: 900px)_minWidth":"xusdqos",$$css:!0},rightRailOuter:{height:"x5yr21d",maxHeight:"x85a59c","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},rightRailOuterNoMaxHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},shadowBar:{backgroundColor:"x2bj2ny",borderBottom:"x3lcxq5",minHeight:"x1e3jx5v",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm",$$css:!0},shadowBarContentAreaResponsiveness:{display:"x1s85apg","@media (max-width: 900px)_display":"xhnf9zx",$$css:!0},shadowBarRightRailResponsiveness:{"@media (max-width: 900px)_display":"xzd29fr",$$css:!0}};function a(a){var b=a.children;b=b===void 0?null:b;var e=a.hideContainerBackground;e=e===void 0?!1:e;var f=a.isRightRailFixed;f=f===void 0?!1:f;var g=a.rightRail;g=g===void 0?null:g;var n=a.showChatSliverOverride;n=n===void 0?!0:n;var o=a.showShadowBar;o=o===void 0?!0:o;a=a.useParentHeight;a=a===void 0?!1:a;var p=d("CometRouteRenderType").useIsPushView(),q=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT")&&j,r=c("useMWShouldCurrentRouteOverrideChatVisibility")();r=d("MWChatVisibilityOverrideContext").useMWChatVisibilityOverride(r);var s=i(c("CometMediaViewerFullscreenContext"));n=n&&q&&r;return h.jsxs(c("BaseRow.react"),{align:"start",xstyle:[m.container,!e&&m.defaultBackground,s&&p&&m.containerFullScreenInPushView,!s&&(p||a)&&m.containerInPushView,!p&&!a&&m.containerNotInPushView],children:[p&&!k&&!l?h.jsx("div",{className:""+((o?" x2bj2ny x3lcxq5 x1e3jx5v x7wzq59 x13vifvy x1vjfegm":"")+(o?" x1s85apg xhnf9zx":""+(o?"":"")))}):null,h.jsx(c("BaseRowItem.react"),{expanding:!0,role:"main",xstyle:a?m.contentAreaInPushViewUsesParentHeight:p?m.contentAreaInPushView:m.contentAreaNotInPushView,children:b}),g!=null&&!s&&h.jsxs(c("BaseRowItem.react"),{role:"complementary",xstyle:f?m.rightRailFixed:m.rightRail,children:[p&&!k&&!l?h.jsx("div",{className:""+((o?" x2bj2ny x3lcxq5 x1e3jx5v x7wzq59 x13vifvy x1vjfegm":"")+(o?" xzd29fr":""+(o?"":"")))}):null,h.jsxs(c("BaseRow.react"),{xstyle:a?m.rightRailOuterNoMaxHeight:m.rightRailOuter,children:[h.jsx(c("BaseRowItem.react"),{xstyle:m.rightRailInner,children:f?h.jsx(c("CometScrollView.react"),{"data-testid":void 0,showsHorizontalScrollIndicator:!1,children:g}):g}),n?h.jsx("div",{className:"x1jx94hy x13tw4yp x78zum5 xtp0wl1 xxzkxad x1dmp6jm x1vjfegm x1daaz14"}):null]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useMediaViewerVPVDLogger",["CometInteractionSourceContext","WebSession","gkx","react","requireDeferred","useVPVDImpression"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext,j=c("requireDeferred")("CometMediaVpvdFalcoEvent").__setRef("useMediaViewerVPVDLogger");function a(a,b){var e=i(c("CometInteractionSourceContext")),f=a.authorId,g=a.createdTime,k=a.fbid,l=a.source,m=a.storyContainerId;b=h(function(a){var b,c;a.hiddenTime;var h=a.visibleDuration;a=a.visibleTime;if(k==null)return;b=(b=l)!=null?b:e;var i={a:(c=f)!=null?c:"",ct:(c=g)!=null?c:0,d:h,i:k,s:b,si:m,sid:d("WebSession").getId(),vst:a};j.onReady(function(a){a=a.log;return a(function(){return i})})},[f,g,k,e,l,m]);return c("useVPVDImpression")({onVPVDEnd:b})}g["default"]=a}),98);
__d("CometPhotoViewerContainerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext();g["default"]=b}),98);
__d("CometMediaViewerRightRailUFIGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={ufi:{display:"x78zum5",justifyContent:"x1l1ennw",paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",$$css:!0},ufiGlimmer:{borderTopStartRadius:"x8u2fvd",borderTopEndRadius:"x1ht7hnu",borderBottomEndRadius:"x1quq95r",borderBottomStartRadius:"x5yzy4c",height:"x170jfvy",width:"xge0ay3",$$css:!0}};function a(){return h.jsxs("div",{className:"x78zum5 x1l1ennw xyamay9 x1pi30zi x1l90r2v x1swvt13",children:[h.jsx(c("CometGlimmer.react"),{index:1,xstyle:i.ufiGlimmer}),h.jsx(c("CometGlimmer.react"),{index:2,xstyle:i.ufiGlimmer}),h.jsx(c("CometGlimmer.react"),{index:3,xstyle:i.ufiGlimmer})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStoryAggregatedUsersSuffixDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5953831664697175"}),null);/*FB_PKG_DELIM*/
__d("CometAIProductTagSuggestionsUtil_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometAIProductTagSuggestionsUtil_photo"};e.exports=a}),null);
__d("ProductTagConfidence",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["HIGH","LOW","VERY_HIGH","VERY_LOW"]);c=a;f["default"]=c}),66);
__d("ProductTagConfidenceUtils.facebook",["$InternalEnumUtils","ProductTagConfidence"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("ProductTagConfidence"));b=d("$InternalEnumUtils").createFromJSEnum(c("ProductTagConfidence"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("SharedAIProductTagUtils",["ProductTagConfidenceUtils.facebook"],(function(a,b,c,d,e,f,g){"use strict";var h=5;function a(a){var b=new Map();a.product_tag_suggestions.map(function(a){var c=a.media_id;a=a.suggestions;if(c==null||a==null)return;var e=[],f=[];a.map(function(a){a=(a=a)!=null?a:{};var b=a.bottom_right,c=a.center_x,g=a.center_y,h=a.confidence,i=a.products,j=a.score;a=a.top_left;if(c==null||g==null||j==null)return;c=c*100;g=g*100;i=i==null?void 0:i[0];var k=i==null?void 0:i.score;h=d("ProductTagConfidenceUtils.facebook").toJSEnum(h);var l=i==null?void 0:i.time_range;i=(i=i==null?void 0:i.product_item)!=null?i:{};var m=i.id,n=i.listing_price,o=i.name,p=i.per_unit_price;i=i.primary_listing_photo;b={boundingBoxJSON:JSON.stringify({bottomRight:b,topLeft:a}),boxScore:j,confidence:h,productID:m,productScore:k,timeRange:l};if((h==="VERY_HIGH"||h==="HIGH")&&e.length===0){if(m==null||o==null)return null;j={id:m,image_uri:i==null?void 0:(a=i.image)==null?void 0:a.uri,metadata:{product_tag_type:"AI_HIGH_CONFIDENCE"},name:o,product_per_unit_price:p==null?void 0:p.formatted_text,product_price:n==null?void 0:n.formatted_amount};k=babelHelpers["extends"]({},b,{source:"AI_suggested",taggee:j,x:c,y:g});e.push(k)}else l==null&&h==="LOW"&&f.push(babelHelpers["extends"]({},b,{x:c,y:g}))});b.set(c,{knownSuggestions:e,unknownSuggestions:f})});return b}function b(a,b,c,d){return a>=c-h&&a<=c+h&&b>=d-h&&b<=d+h}g.USER_TAGGING_TOLERANCE=h;g.processAIProductTagSuggestionsQueryResponse=a;g.isPointNearbyPoint=b}),98);
__d("CometAIProductTagSuggestionsUtil.react",["CometAIProductTagSuggestionsUtil_photo.graphql","CometRelay","SharedAIProductTagUtils"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometAIProductTagSuggestionsUtil_photo.graphql");function j(a,b){return a.productID===b.productID||d("SharedAIProductTagUtils").isPointNearbyPoint(a.x,a.y,b.x,b.y)}function k(a){return(a=a==null?void 0:(a=a.photo_product_tags)==null?void 0:a.map(function(a){var b;b=(b=a.listing)==null?void 0:b.id;a=a.xy_location;var c=a==null?void 0:a.x;a=a==null?void 0:a.y;return c==null||a===void 0||a===null||b===null||b===void 0?null:{productID:b,x:c,y:a}}).filter(Boolean))!=null?a:[]}function a(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function c(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function e(a){return!a}g.getUntaggedKnownTags=a;g.getUntaggedUnknownTags=c;g.canUsePretagExperience=e}),98);
__d("HoveredProductIDContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({hoveredProductID:null,setHoveredProductID:c("emptyFunction")});g["default"]=b}),98);
__d("CometPhotoTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;b=1;c=94;f.BOX_BORDER_SIZE=a;f.INITIAL_PHOTO_RENDER_SCALE=b;f.TAGGING_BOX_SIZE=c}),66);
__d("CometPhotoViewerViewStateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null});g["default"]=b}),98);
__d("CometPhotoViewerViewStateDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CommerceShoppableContentLandingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3079");b=d("FalcoLoggerInternal").create("commerce_shoppable_content_landing_click",a);e=b;g["default"]=e}),98);
__d("CommerceViewProductTagFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743420");b=d("FalcoLoggerInternal").create("commerce_view_product_tag",a);e=b;g["default"]=e}),98);
__d("CreatorToolsGrowthEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("70");b=d("FalcoLoggerInternal").create("creator_tools_growth_event",a);e=b;g["default"]=e}),98);
__d("LiveShoppingViewerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743808");b=d("FalcoLoggerInternal").create("live_shopping_viewer",a);e=b;g["default"]=e}),98);
__d("ProductTaggingAiEvaluationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744233");b=d("FalcoLoggerInternal").create("product_tagging_ai_evaluation",a);e=b;g["default"]=e}),98);
__d("XCometPageShopsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/shop/",Object.freeze({ref:"",preview:!1}),void 0);b=a;g["default"]=b}),98);