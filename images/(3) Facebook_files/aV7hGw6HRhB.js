;/*FB_PKG_DELIM*/

__d("StoriesNavListItemPog_bucket.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"StoriesNavListItemPog_bucket",selections:[{alias:null,args:null,kind:"ScalarField",name:"should_show_close_friend_badge",storageKey:null},{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesConnection",kind:"LinkedField",name:"unified_stories",plural:!1,selections:[{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"story_card_type",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:"owner",args:null,concreteType:null,kind:"LinkedField",name:"story_bucket_owner",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Profile",abstractKey:"__isProfile"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_bucket_live",storageKey:null}],type:"StoryBucket",abstractKey:"__isStoryBucket"};e.exports=a}),null);
__d("StoriesCometLeftRailLayout.react",["CometRouteRenderType","CometSection.react","MWChatVisibilityOverrideContext","gkx","react","useMWShouldCurrentRouteOverrideChatVisibility","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("708253");function a(a){var b=a.children,e=a.hasRightRail,f=a.hideLeftRail;a=a.leftRail;var g=d("CometRouteRenderType").useIsHosted(),j=d("CometRouteRenderType").useIsPushView(),k=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),l=c("useMWShouldCurrentRouteOverrideChatVisibility")();l=d("MWChatVisibilityOverrideContext").useMWChatVisibilityOverride(l);k=k&&l;l=g||!!f;g=h.jsx("div",{className:"x2bj2ny x5yr21d x1cvmir6"+((l?" x1s85apg":""+(e&&k?"":""+(e?"":"")))+((e?" x13ye0ek x4fpnxs":"")+(e&&k?" x1atro6v":""))),children:h.jsx(c("CometSection.react"),{className:"x2bj2ny x1ey2m1c x1nxh6w3 xt7dq6l x1odjw0f xixxii4 x1qrby5j"+(i?" xxzkxad":" x1si2f76"),role:"navigation",children:a})});return h.jsxs("div",{className:"x78zum5 xh8yej3",children:[g,i&&j?h.jsx("div",{className:"xmv5v2v xds687c x1s65kcs x47corl x10l6tqk x17qophe x13vifvy"}):null,h.jsx("div",{className:"x1iyjqo2 x1n2onr6",children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCometListItemGlimmer.react",["BaseLoadingStateElement.react","CometGlimmer.react","Random","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={content:{flexGrow:"x1iyjqo2",$$css:!0},contentContainer:{alignItems:"x6s0dn4",display:"x78zum5",flexGrow:"x1iyjqo2",marginTop:"xr9ek0c",marginEnd:"x1emribx",marginBottom:"xjpr12u",marginStart:"x1i64zmx",$$css:!0},friendsItem:{height:"xng8ra",$$css:!0},image:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xng8ra",width:"x1247r65",$$css:!0},item:{display:"x78zum5",justifyContent:"x1nhvcw1",marginTop:"xr9ek0c",marginEnd:"xw3qccf",marginBottom:"xjpr12u",marginStart:"xsgj6o6",paddingTop:"x1y1aw1k",paddingEnd:"xn6708d",paddingBottom:"xwib8y2",paddingStart:"x1ye3gou",$$css:!0},subtitleGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"xx3o462",marginTop:"x1xmf6yo",width:"x9fslfs",$$css:!0},textGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1qx5ct2",marginBottom:"xjpr12u",$$css:!0},textGlimmerWidth100:{width:"xh8yej3",$$css:!0},textGlimmerWidth50:{width:"x3hqpx7",$$css:!0},textGlimmerWidth67:{width:"xgkjt62",$$css:!0},textGlimmerWidth83:{width:"x1l3jyfm",$$css:!0},viewerSheetImage:{height:"xc9qbxq",width:"x14qfxbe",$$css:!0}};a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=c=a.call.apply(a,[this].concat(f))||this,c.itemSizes=Array(c.props.numberOfItems).fill().map(function(){return Math.floor(d("Random").random()*4)}),b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.render=function(){var a=this,b=this.itemSizes;return h.jsx(c("BaseLoadingStateElement.react"),{children:b.map(function(b,d){return h.jsxs("div",{className:"x78zum5 x1nhvcw1 xr9ek0c xw3qccf xjpr12u xsgj6o6 x1y1aw1k xn6708d xwib8y2 x1ye3gou"+(a.props.isFriends?" xng8ra":""),children:[h.jsx(c("CometGlimmer.react"),{index:d,xstyle:[i.image,a.props.isViewerSheet!==!0&&i.viewerSheetImage]}),h.jsx("div",{className:"x6s0dn4 x78zum5 x1iyjqo2 xr9ek0c x1emribx xjpr12u x1i64zmx",children:h.jsxs("div",{className:"x1iyjqo2",children:[h.jsx(c("CometGlimmer.react"),{index:d,xstyle:[i.textGlimmer,b===0&&i.textGlimmerWidth50,b===1&&i.textGlimmerWidth67,b===2&&i.textGlimmerWidth83,b===3&&i.textGlimmerWidth100]}),h.jsx(c("CometGlimmer.react"),{index:d,xstyle:i.subtitleGlimmer})]})})]},d)})})};return b}(h.PureComponent);a.defaultProps={isFriends:!1,numberOfItems:1};g["default"]=a}),98);
__d("StoriesCardHeaderGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={content:{flexGrow:"x1iyjqo2",$$css:!0},contentContainer:{alignItems:"x6s0dn4",display:"x78zum5",flexGrow:"x1iyjqo2",marginTop:"xr9ek0c",marginEnd:"x1emribx",marginBottom:"xjpr12u",marginStart:"x1i64zmx",$$css:!0},image:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1vqgdyp",width:"x100vrsf",$$css:!0},item:{display:"x78zum5",justifyContent:"x1nhvcw1",$$css:!0},subtitleGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1kpxq89",marginTop:"x1xmf6yo",width:"x9fslfs",$$css:!0},textGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1v9usgg",marginBottom:"xjpr12u",width:"x1l3jyfm",$$css:!0}};function a(a){a=a.isBackgroundBucket;a=a==null||a===!1;return h.jsxs("div",{className:"x78zum5 x1nhvcw1",children:[h.jsx(c("CometGlimmer.react"),{index:0,theme:"light",xstyle:i.image}),a&&h.jsx("div",{className:"x6s0dn4 x78zum5 x1iyjqo2 xr9ek0c x1emribx xjpr12u x1i64zmx",children:h.jsxs("div",{className:"x1iyjqo2",children:[h.jsx(c("CometGlimmer.react"),{index:0,theme:"light",xstyle:i.textGlimmer}),h.jsx(c("CometGlimmer.react"),{index:0,theme:"light",xstyle:i.subtitleGlimmer})]})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesBucketLoadingView.react",["StoriesCardHeaderGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.isBackgroundBucket;return h.jsx("div",{className:"x1cy8zhl x132nzbk x78zum5 xdt5ytf x5yr21d x1nhvcw1 x1n2onr6 xh8yej3",children:h.jsx("div",{className:"x16n37ib xjv05ge xktia5q",children:h.jsx(c("StoriesCardHeaderGlimmer.react"),{isBackgroundBucket:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesViewerClose",["CometRouteRenderType","MessengerEnvironment","StoriesLoggerSession","StoriesLoggingConstants","cr:869845","gkx","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h=c("gkx")("708253");function a(){var a=d("CometRouteRenderType").useIsPushView(),e=c("useCometRouterDispatcher")();return function(f){var g=d("StoriesLoggerSession").getOpenViewerSource();d("StoriesLoggerSession").setCloseGesture(f);b("cr:869845")?c("MessengerEnvironment").messengerui?b("cr:869845").getInstance().closeDialogMessenger():g===c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE?b("cr:869845").getInstance().closeArchiveDialogAndRefresh():b("cr:869845").getInstance().navigateToEntryPoint():h&&f===c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.AUTO_EXIT&&(!a&&e&&e.goBack?e.goBack():a&&e&&e.popPushView&&e.popPushView())}}g["default"]=a}),98);
__d("StoriesCloseButton.react",["fbt","ix","CometPressable.react","IconSource","StoriesLoggingConstants","StoriesSuspensePauseContext","TetraIcon.react","cr:1032347","gkx","react","useStoriesViewerClose"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useContext,l=c("gkx")("708253");function a(a){a=a.dark;a=a===void 0?!1:a;var d=c("useStoriesViewerClose")(),e=k(c("StoriesSuspensePauseContext"));e=e.setPause;if(l)return null;var f=function(a){d(c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.CLOSE_BUTTON_EXIT)};a=a?new(c("IconSource"))("FB",i("1351092"),24):new(c("IconSource"))("FB",i("1495001"),24);return j.jsxs("div",{className:"x78zum5 xds687c xbyyjgo x10l6tqk x13vifvy x13dflua x19991ni xz4gly6 x1o7uuvo","data-testid":void 0,children:[b("cr:1032347")&&j.jsx(b("cr:1032347"),{setPause:e}),j.jsx(c("CometPressable.react"),{"aria-label":h._("__JHASH__tnRfHlva-bL__JHASH__"),display:"inline",onPress:f,overlayDisabled:!0,children:j.jsx("div",{className:"x1ypdohk x78zum5 xw7yly9 xktsk01 x1yztbdb x17adc0v",children:j.jsx(c("TetraIcon.react"),{icon:a,size:24})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesNullStateImage.react",["fbt","NullStateMedia","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx(c("TetraNullState.react"),{headline:h._("__JHASH__XCcJ1b0S333__JHASH__"),icon:c("NullStateMedia")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesUnselected.react",["StoriesCloseButton.react","StoriesNullStateImage.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsxs("div",{className:"x6s0dn4 x443n21 x78zum5 xdt5ytf x5yr21d xl56j7k x16xn7b0 x6ikm8r xh8yej3",children:[h.jsx(c("StoriesCloseButton.react"),{dark:!0}),h.jsx(c("StoriesNullStateImage.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerOpenAnimationContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={duration:0,getAnimated:function(){return!1},setAnimated:c("emptyFunction"),transform:"",transformOrigin:""};e=a.createContext(b);g["default"]=e}),98);
__d("useStoriesAnimatedElement",["react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function b(b){var d=h("Appear"),e=d[0],f=d[1];c("useLayoutEffect_SAFE_FOR_SSR")(function(){var c=a.requestAnimationFrame(function(){f("AppearActive")}),d=a.setTimeout(function(){f("AppearDone")},b);return function(){a.clearTimeout(d),a.cancelAnimationFrame(c)}},[f,b]);return[e]}g["default"]=b}),98);
__d("useStoriesViewerBaseDimensions",["CometAppNavigationConstants","CometRouteRenderType","StoriesGating","gkx","useCometWindowSize"],(function(a,b,c,d,e,f,g){"use strict";var h=12*2,i=44+12,j=43,k=.5625,l=24,m=105,n=.5,o=.45,p=c("gkx")("708253");function a(){var a=d("CometRouteRenderType").useIsPushView(),b=c("useCometWindowSize")(),e=b.innerHeight;b=b.innerWidth;var f=m,g=l,q=Math.ceil(d("StoriesGating").getViewerV3BackgroundBucketsCount()/2)*2,r=0;r=e-(h+i);!p?r-=j:p&&!a&&(r-=d("CometAppNavigationConstants").HEADER_HEIGHT);e=Math.round(r*k);a=r*o;var s=Math.round(a*k);b=(b-e-f*2)/2;g=s+g;var t=Math.floor(b/g);g=b%g/s;g>=n&&++t;g=Math.min(t*2,q);return{gap:f,height:r,sideBucketsCount:g,sideHeight:a,sidePanelsWidth:b,sideWidth:s,width:e}}g["default"]=a}),98);
__d("useStoriesViewerDimensions",["StoriesViewerOpenAnimationContext","react","useStoriesAnimatedElement","useStoriesViewerBaseDimensions"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=babelHelpers["extends"]({},c("useStoriesViewerBaseDimensions")()),b=h(c("StoriesViewerOpenAnimationContext")),d=b.duration,e=b.getAnimated,f=b.setAnimated,g=b.transform;b=b.transformOrigin;d=c("useStoriesAnimatedElement")(d);d=d[0];if(!e())if(d==="Appear")return babelHelpers["extends"]({},a,{transform:g,transformOrigin:b});else f(!0);return babelHelpers["extends"]({},a,{transform:"",transformOrigin:b})}g["default"]=a}),98);
__d("StoriesCometPlaceholderWithNav.react",["fbt","CometUnitHeader.react","StoriesBucketLoadingView.react","StoriesCometLeftRailLayout.react","StoriesCometListItemGlimmer.react","StoriesEnums","StoriesUnselected.react","react","useStoriesViewerDimensions"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.isNullState;b=b===void 0?!1:b;a=a.isPermalink;a=a===void 0?!1:a;var e=c("useStoriesViewerDimensions")(),f=d("StoriesEnums").BACKGROUND_STYLE.DEFAULT;b=b?i.jsx(c("StoriesUnselected.react"),{}):i.jsx("div",{className:"xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x78zum5 x1q0g3np x14vqqas xq8finb xod5an3 x16n37ib x1bifzbx x17z0pdo x6ikm8r x10wlt62 x1n2onr6 x1k90msu x11xpdln x9lcvmn x1m6m0jg",style:e,children:i.jsx(c("StoriesBucketLoadingView.react"),{})});return i.jsx(c("StoriesCometLeftRailLayout.react"),{hasRightRail:!1,isPermalink:a,leftRail:i.jsxs(i.Fragment,{children:[i.jsx(c("CometUnitHeader.react"),{headline:h._("__JHASH__5bYSUX0svqB__JHASH__"),headlineColor:"primary",isSemanticHeading:!0,level:1,paddingTop:20}),i.jsx(c("CometUnitHeader.react"),{headline:h._("__JHASH__Bt5U5hwxrYL__JHASH__"),headlineColor:"secondary",level:3,paddingTop:16}),i.jsx(c("StoriesCometListItemGlimmer.react"),{numberOfItems:1}),i.jsx(c("CometUnitHeader.react"),{headline:h._("__JHASH__7FbqrH7mlAr__JHASH__"),headlineColor:"secondary",level:3,paddingTop:8}),i.jsx(c("StoriesCometListItemGlimmer.react"),{isFriends:!0,numberOfItems:6})]}),children:i.jsx("div",{className:"x78zum5 x5yr21d xl56j7k xh8yej3"+(f===d("StoriesEnums").BACKGROUND_STYLE.BLACK?" xal61yo":" xal61yo"),children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCometPlaceholder.react",["StoriesBucketLoadingView.react","StoriesCometPlaceholderWithNav.react","StoriesEnums","react","useStoriesViewerDimensions"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.isNullState;b=b===void 0?!1:b;var e=a.isPermalink;e=e===void 0?!1:e;a=a.leftRail;a=a===void 0?!0:a;var f=c("useStoriesViewerDimensions")(),g=d("StoriesEnums").BACKGROUND_STYLE.DEFAULT,i=!0;if(a&&i)return h.jsx(c("StoriesCometPlaceholderWithNav.react"),{isNullState:b,isPermalink:e,leftRail:a});i=h.jsx("div",{className:"xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x78zum5 x1q0g3np x14vqqas xq8finb xod5an3 x16n37ib x1bifzbx x17z0pdo x6ikm8r x10wlt62 x1n2onr6 x1k90msu x11xpdln x9lcvmn x1m6m0jg",style:f,children:h.jsx(c("StoriesBucketLoadingView.react"),{})});return h.jsx("div",{className:"x78zum5 x5yr21d xl56j7k xh8yej3"+(g===d("StoriesEnums").BACKGROUND_STYLE.BLACK?" xal61yo":" xal61yo"),children:i})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCardTimerSourceAutoProgression",["cometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$1=0,this.$2=c("cometUniqueID")(),this.$3=6e3,a!=null&&(this.$3=a)}var b=a.prototype;b.isFrozen=function(){return null};b.getDuration=function(){return this.$3};b.getNewTimeElapsed=function(a){var b=Date.now(),c=b-this.$1;this.$1=b;return a+c};b.getID=function(){return this.$2};b.play=function(){this.$1===0&&(this.$1=Date.now())};b.pause=function(){this.$1=0};b.resetSourceOnStop=function(){return!1};return a}();g["default"]=a}),98);
__d("StoriesNavListItemPog.react",["ix","CometProfilePhoto.react","CometRelay","StoriesEnums","StoriesNavListItemPog_bucket.graphql","TetraIcon.react","cr:10631","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){var e,f,g=a.bucket,k=a.iconSize;a=a.isUploading;a=a===void 0?!1:a;function l(a){var b=a===d("StoriesEnums").STORY_CARD_TYPES.EVENT_STORY;a=a===d("StoriesEnums").STORY_CARD_TYPES.GROUP_STORY;if(a)return{icon:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(h("485091"),20)}),type:"trigger"};if(b)return{icon:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(h("875292"),20)}),type:"trigger"}}function m(a){if(a==null)return!1;for(a of a){var b;if((a==null?void 0:(b=a.story_card_seen_state)==null?void 0:b.is_seen_by_viewer)===!1)return!0}return!1}function n(a){if(a==null)return null;var b=null;a.forEach(function(a){b=a==null?void 0:(a=a.story_card_info)==null?void 0:a.story_card_type});return b}g=d("CometRelay").useFragment(i!==void 0?i:i=b("StoriesNavListItemPog_bucket.graphql"),g);e=g==null?void 0:(e=g.owner)==null?void 0:(e=e.profile_picture)==null?void 0:e.uri;f=g==null?void 0:(f=g.unified_stories)==null?void 0:f.edges;f=f==null?[]:f.map(function(a){return a.node});n=n(f);m=m(f);f=a?"uploading":m?"unseen":"seen";m=(a=g==null?void 0:g.should_show_close_friend_badge)!=null?a:!1;g=(a=g==null?void 0:g.is_bucket_live)!=null?a:!1;a=l(n);if(e==null)return null;return g&&b("cr:10631")?j.jsx(b("cr:10631"),{profilePicUri:e,size:"medium"}):j.jsx(c("CometProfilePhoto.react"),{addOn:a,shape:"circle",shouldShowCloseFriendsBadge:m,size:(l=k)!=null?l:60,source:{uri:e},storyStatus:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);