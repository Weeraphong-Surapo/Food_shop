;/*FB_PKG_DELIM*/

__d("useStoriesLWRKeyframes_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:"www",kind:"LocalArgument",name:"variant"}],kind:"Fragment",metadata:null,name:"useStoriesLWRKeyframes_viewer",selections:[{alias:null,args:[{kind:"Variable",name:"variant",variableName:"variant"}],concreteType:"ViewerToStoriesLWRAnimationsConnection",kind:"LinkedField",name:"stories_lwr_animations",plural:!1,selections:[{alias:null,args:null,concreteType:"ViewerToStoriesLWRAnimationsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"StoryCardLWRAnimationConfig",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"feedback_reaction_identifier",storageKey:null},{alias:null,args:null,concreteType:"InspirationsStickerAnimationAsset",kind:"LinkedField",name:"tap_animation_asset",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"keyframe_uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("StoriesCreateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=!1;c=a.createContext(b);g["default"]=c}),98);
__d("StoriesCreateConstants",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a={DEFAULT:{BODY:h._("__JHASH__2dP-S2NXGWo__JHASH__"),CANCEL:h._("__JHASH__iNbID4Of76-__JHASH__"),CONFIRM:h._("__JHASH__2bGTq0Hn_zL__JHASH__"),TITLE:h._("__JHASH__fy6v2Hc0_3x__JHASH__")}};b={SELECTION_TILE_HEIGHT:330,SELECTION_TILE_WIDTH:220,SPACE_BETWEEN_SELECTOR:20};c={FOOTER_HEIGHT:52,HEADER_HEIGHT:16};d={COMET_PUSH_VIEW_HEIGHT:28,CONTAINER_HORIZONTAL_PADDING:24*2,CONTAINER_MAX_WIDTH:940,CONTAINER_VERTICAL_PADDING:32*2,CONTENT_HEADER_HEIGHT:36,CONTENT_HORIZONTAL_PADDING:16*2,CONTENT_VERTICAL_PADDING:16*2,MAX_OVERLAY_WIDTH:472.5,SIDE_PANE_WIDTH:360};e=h._("__JHASH__b-5wJWOv0zU__JHASH__");f={FOOTER_HEIGHT:12,HEADER_HEIGHT:12};h={EDITING:"editing",NONE:"none"};var i={EMOJI:"emoji",LOCATION:"location",POLL:"poll",TAG:"tag"},j={EDITING:"editing",NONE:"none"},k={HORIZONTAL:"horizontal",NONE:"none"},l=26,m=3,n=4,o={FOOTER_HEIGHT:92},p=Object.freeze({BLACK:"rgb(0, 0, 0)",BLUE:"rgb(41, 134, 174)",BROWN:"rgb(112, 41, 41)",CORAL:"rgb(247, 114, 74)",CYAN:"rgb(94, 213, 255)",GOLD:"rgb(241, 196, 58)",GRAY:"rgb(142, 147, 156)",GREEN:"rgb(136, 191, 75)",LIGHT_BLUE:"rgb(202, 237, 248)",LIGHT_GRAY:"rgb(206, 208, 212)",LIGHT_PURPLE:"rgb(220, 211, 239)",MAGENTA:"rgb(251, 62, 160)",MINT:"rgb(185, 252, 203)",NAVY:"rgb(43, 69, 124)",ORANGE:"rgb(244, 146, 58)",PINK:"rgb(249, 203, 209)",PURPLE:"rgb(148, 31, 177)",RED:"rgb(248, 61, 61)",VIOLET:"rgb(88, 59, 154)",WHITE:"rgb(255, 255, 255)",YELLOW:"rgb(248, 226, 76)"}),q={x:.5,y:.5};g.LEAVE_TEXT=a;g.NULL_STATE_DIMENSIONS=b;g.PHOTO_PREVIEW_DIMENSIONS=c;g.PREVIEW_DIMENSIONS=d;g.SATP_PLACEHOLDER=e;g.SATP_PREVIEW_DIMENSIONS=f;g.STICKER_EDITING_MODE=h;g.STICKER_TYPE=i;g.TEXT_OVERLAY_MODE=j;g.OVERLAY_ALIGNMENT_TYPE=k;g.VIDEO_MAX_DURATION=l;g.VIDEO_MIN_DURATION=m;g.VIDEO_MIN_DURATION_FOR_TRIM=n;g.VIDEO_PREVIEW_DIMENSIONS=o;g.COLOR_NAME_TO_RGB=p;g.ORIGIN=q}),98);
__d("StoriesLWRKeyframe.react",["ViewportAwareKeyframes.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=47,j=30,k=0,l=190,m=400,n=1;function a(a){var b=a.containerWidth,d=a.kf,e=a.kfHOffset;e=e===void 0?j:e;var f=a.kfVOffset;f=f===void 0?k:f;var g=a.kfWidth;g=g===void 0?l:g;var o=a.kfHeight;o=o===void 0?m:o;a=a.reactionWidth;a=a===void 0?i:a;var p=d.assetName,q=d.index,r=d.onRepeatEnd,s=d.random,t=d.scale;t=t===void 0?1:t;d=d.uri;s!=null&&s>=0&&b!=null?s=Math.floor(e+s*(b-e)):s=e+q*a;b={bottom:f+"px",left:s+"px",position:"absolute"};return h.jsx(c("ViewportAwareKeyframes.react"),{assetName:p,className:"x1ey2m1c x47corl x10l6tqk xuuh30",height:o*t,onRepeatEnd:r,playing:"always",projectName:"facebook_stories",repeatCount:n,source:d,style:b,width:g*t})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesLWRKeyframes",["CometRelay","DynamicUFIReactionTypes","StoriesUniqueID","react","useStoriesLWRKeyframes_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useCallback,j=e.useRef,k=e.useState,l=(f={},f["1635855486666999"]="LIKE",f["1678524932434102"]="LOVE",f["115940658764963"]="HAHA",f["478547315650144"]="WOW",f["908563459236466"]="SORRY",f["444813342392137"]="ANGER",f["613557422527858"]="SUPPORT",f),m=h!==void 0?h:h=b("useStoriesLWRKeyframes_viewer.graphql");function a(a){var b=a.initializeVisualAttributes,e=a.onKeyframesRemoved,f=a.onKeyframesSelected;a=a.viewer;var g=j(null),h=k([]),n=h[0],o=h[1],p=d("CometRelay").useFragment(m,a);a=i(function(a){var d;h=h();if(h==null)return;f!=null&&f();g.current=[].concat((d=g.current)!=null?d:[],[h]);o(g.current);function h(){var d;d=p==null?void 0:(d=p.stories_lwr_animations)==null?void 0:d.edges;if(d==null)return null;var f=null,h=l[a];for(var i=0;i<d.length;++i){var j,k=d==null?void 0:(j=d[i])==null?void 0:j.node;if((k==null?void 0:k.feedback_reaction_identifier)===h){j=function(){var d,i=c("StoriesUniqueID")();d=k==null?void 0:(d=k.tap_animation_asset)==null?void 0:d.keyframe_uri;if(d==null)return"break";var j=b==null?{random:-1,scale:1}:b();d+="&"+i;f=babelHelpers["extends"]({assetName:h,index:c("DynamicUFIReactionTypes").ordering.indexOf(a),key:i,onRepeatEnd:function(){var a;a=((a=g.current)!=null?a:[]).slice();for(var b=0;b<a.length;b++)if(a[b].key===i){a.splice(b,1);break}e!=null&&e(a);g.current=a;o(a)},uri:d},j);return"break"}();if(j==="break")break}}return f}},[p==null?void 0:(h=p.stories_lwr_animations)==null?void 0:h.edges,b,e,f]);h=i(function(){e!=null&&e([]),g.current=[],o(g.current)},[e]);return[n,a,h]}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("StoriesLivePageUFI_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesLivePageUFI_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("StoriesLivePageUFI.react",["fbt","CometPressable.react","CometRelay","StoriesLivePageUFI_video.graphql","StoriesLoggerContext","StoriesLoggingConstants","StoriesPauseReasons","react","usePlayerOriginRouteTracePolicy"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useContext,l=e.useEffect,m=e.useRef;function a(a){var e=a.isLive,f=a.setPause;a=a.video;a=d("CometRelay").useFragment(i!==void 0?i:i=b("StoriesLivePageUFI_video.graphql"),a);var g=c("usePlayerOriginRouteTracePolicy")(),n=k(c("StoriesLoggerContext")),o=n.logger,p=m(!1);l(function(){!p.current&&o!=null&&(p.current=!0,o.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_PAGE_CTA_IMPRESSION))},[o]);return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"x1useyqa"}),j.jsx(c("CometPressable.react"),{"aria-label":h._("__JHASH__0F1mQWL6Du1__JHASH__"),linkProps:{passthroughProps:{initialTracePolicy:g,playerSubOrigin:"story_viewer_live_cta"},url:a==null?void 0:a.url},onHoverIn:function(){return f(!0,d("StoriesPauseReasons").WATCH_BROADCAST_CTA)},onHoverOut:function(){return f(!1,d("StoriesPauseReasons").WATCH_BROADCAST_CTA)},onPress:function(){o.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_PAGE_CTA_TAP)},children:j.jsx("div",{className:"x14hiurz x6umtig x1b1mbwd xaqea5y xav7gou x107yiy2 xv8uw2v x1tfwpuw x2g32xy x9f619 x1p6odiv x1f6kntn xmix8c7 x14ju556 x1cnzs8 x4uap5 xx6bls6 xkhd6sd x2b8uid xzzq9k6",children:e?h._("__JHASH___5Eb_oDn1xf__JHASH__"):h._("__JHASH__uKWyHwmFs64__JHASH__")})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesSuspensePause",["StoriesLoggerContext","StoriesPauseReasons","Visibility","cr:809608","react","storiesViewerSuspenseEmitter"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useCallback,i=e.useContext,j=e.useEffect,k=e.useRef,l=e.useState;function a(){var a=l(!1),e=a[0],f=a[1];a=i(c("StoriesLoggerContext"));var g=a.logger,m=k({}),n=h(function(a,b){if(a)m.current[b]=!0,f(a),g.pauseLog(!0,b);else{if(b===d("StoriesPauseReasons").CARD_CHANGE&&(m.current[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]===!0||m.current[d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY]===!0)){if(m.current[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]===!0){m.current=(a={},a[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]=!0,a)}else if(m.current[d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY]===!0){m.current=(a={},a[d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY]=!0,a)}}else b===d("StoriesPauseReasons").CLICK_PAUSE_ICON||b===d("StoriesPauseReasons").KEYBOARD||b===d("StoriesPauseReasons").BUCKET_TRANSITION||b===d("StoriesPauseReasons").CARD_CHANGE||b===d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY||b===d("StoriesPauseReasons").BUCKET_REFRESH||b===d("StoriesPauseReasons").COMMENTS_SHEET_OVERLAY?m.current={}:delete m.current[b];Object.keys(m.current).length===0&&(f(!1),g.pauseLog(!1,b))}},[g]);j(function(){return c("storiesViewerSuspenseEmitter").listenToPauseRequest(function(){return n.apply(void 0,arguments)})},[n]);j(function(){if(b("cr:809608")==null)return;return b("cr:809608")({onJewelHidden:function(){n(!1,d("StoriesPauseReasons").JEWEL)},onJewelShown:function(){n(!0,d("StoriesPauseReasons").JEWEL)}})},[n]);j(function(){var a=[c("Visibility").addListener(c("Visibility").HIDDEN,function(){return n(!0,d("StoriesPauseReasons").VISIBILITY_CHANGE)}),c("Visibility").addListener(c("Visibility").VISIBLE,function(){return n(!1,d("StoriesPauseReasons").VISIBILITY_CHANGE)})];return function(){a.forEach(function(a){return a.remove()})}},[n]);return[e,n]}g["default"]=a}),98);
__d("StoriesSuspensePauseContextProvider.react",["StoriesSuspensePauseContext","react","useStoriesSuspensePause"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){a=a.children;var b=c("useStoriesSuspensePause")(),d=b[0],e=b[1];b=i(function(){return{isPaused:d,setPause:e}},[d,e]);return h.jsx(c("StoriesSuspensePauseContext").Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EmojiInputDecorator",["EmojiRenderer","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h=".",i="emoji";a=function(){function a(a,b,c){this.__installedDecorators={emojiDecorator:!0},this.$1=a,this.$2=b,this.$3=c,b&&Object.assign(this.__installedDecorators,b.__installedDecorators)}var b=a.prototype;b.getDecorations=function(a,b){var e=this.$2?this.$2.getDecorations(a,b).toArray():Array(a.getText().length).fill(null),f=0;d("EmojiRenderer").parse(a.getText()).forEach(function(a){var b=a.offset;a=b+a.length;var c=!0;for(var d=b;d<a;d++)if(e[d]!=null){c=!1;break}if(c){for(d=b;d<a;d++)e[d]=i+h+f;f++}});return c("immutable").List(e)};b.getComponentForKey=function(a){return!this.$2||a.split(h)[0]===i?this.$1:this.$2.getComponentForKey(a)};b.getPropsForKey=function(a){return!this.$2||a.split(h)[0]===i?this.$3:this.$2.getPropsForKey(a)};return a}();g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("StoriesCTAButton.react",["CometPressable.react","CometTrackingNodeProvider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.link,d=a.onClick;a=a.title;a=h.jsx("div",{className:"x1ru42tm x4afe7t x10e4vud x6s0dn4 x1ofb795 x14ctfv x78zum5 x6prxxf x1s688f x1vqgdyp xvq8zen xlyipyv xuxw1ft",children:a});return h.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:86,children:h.jsx("div",{className:"x1ru42tm x4afe7t x10e4vud x1w4261f x105w4n0 x1dgrc15 xgawykw xmigq7r x1c66dkd xng0ele xs1r7wz xzxekdx x9f619 x6ikm8r x10wlt62 x14gfdix x14ya1hp x1vjfegm",children:b!=null?h.jsx(c("CometPressable.react"),{hideHoverOverlay:!0,linkProps:{target:"_blank",url:b},onPress:d,children:a}):a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesGradientBackground.react",["StoriesEnums","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useEffect;function a(a){var b=a.direction,c=a.from,e=a.onLoad;a=a.to;i(function(){e&&e()},[e]);a=a;c=c;if(!(a!=null&&c!=null))return null;a=a!=null?a:c;c=c!=null?c:a;var f="";switch(b){case d("StoriesEnums").GRADIENT_DIRECTION.BL_TR:case d("StoriesEnums").GRADIENT_DIRECTION.TR_BL:f="45deg";break;case d("StoriesEnums").GRADIENT_DIRECTION.LEFT_RIGHT:case d("StoriesEnums").GRADIENT_DIRECTION.RIGHT_LEFT:f="to right";break;case d("StoriesEnums").GRADIENT_DIRECTION.TL_BR:case d("StoriesEnums").GRADIENT_DIRECTION.BR_TL:f="135deg";break;case d("StoriesEnums").GRADIENT_DIRECTION.TOP_BOTTOM:case d("StoriesEnums").GRADIENT_DIRECTION.BOTTOM_TOP:f="to bottom";break;default:f="0deg"}b={backgroundImage:"linear-gradient("+f+","+c+" 0%,"+a+" 100%)"};return h.jsx("div",{className:"x5yr21d xh8yej3",style:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCommentsLoadContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={loadCommentsSheetEntrypoint:function(){}};c=a.createContext(b);g["default"]=c}),98);
__d("StoriesCommentsSheetOverlayRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5938801406173387"}),null);