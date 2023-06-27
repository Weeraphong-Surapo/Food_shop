;/*FB_PKG_DELIM*/

__d("FriendingCometPYMKCard_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"},{defaultValue:230,kind:"LocalArgument",name:"size"}],kind:"Fragment",metadata:null,name:"FriendingCometPYMKCard_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"size"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"size"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:[{kind:"Literal",name:"iconSize",value:16}],kind:"FragmentSpread",name:"FriendingCometMutualFriendsSocialContext_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("FriendingCometFriendRequestCancelMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5247084515315799"}),null);
__d("FriendingCometFriendRequestCancelMutation.graphql",["FriendingCometFriendRequestCancelMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},f=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:c,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[d,e,{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:c,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[d,e,{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}]},params:{id:b("FriendingCometFriendRequestCancelMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometFriendRequestCancelMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometPYMKBlacklistSuggestionMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5556472031036111"}),null);
__d("FriendingCometPYMKBlacklistSuggestionMutation.graphql",["FriendingCometPYMKBlacklistSuggestionMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"PymkSuggestionBlacklistResponsePayload",kind:"LinkedField",name:"pymk_suggestion_blacklist",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"blacklisted_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometPYMKBlacklistSuggestionMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometPYMKBlacklistSuggestionMutation",selections:c},params:{id:b("FriendingCometPYMKBlacklistSuggestionMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometPYMKBlacklistSuggestionMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometHScrollGlimmerCard.react",["CometCard.react","CometGlimmer.react","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={cardContent:{height:"xk4dd5j",paddingTop:"xz9dl7a",paddingEnd:"xn6708d",paddingBottom:"xsag5q8",paddingStart:"x1ye3gou",$$css:!0},container:{display:"x78zum5",height:"x5yr21d",width:"xh8yej3",$$css:!0},contextGlimmer:{borderTopStartRadius:"x12myldv",borderTopEndRadius:"x1udsgas",borderBottomEndRadius:"xrc8dwe",borderBottomStartRadius:"xxxhv2y",height:"x1kpxq89",marginTop:"x1anpbxc",width:"x3hqpx7",$$css:!0},imageContainer:{paddingBottom:"x1vrad04",width:"xh8yej3",$$css:!0},imageGlimmer:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},nameGlimmer:{borderTopStartRadius:"x12myldv",borderTopEndRadius:"x1udsgas",borderBottomEndRadius:"xrc8dwe",borderBottomStartRadius:"xxxhv2y",height:"x1v9usgg",marginTop:"xr9ek0c",width:"x65xoit",$$css:!0}};function a(a){a=a.onVisible;a=c("useVisibilityObserver")({onVisible:a,options:{rootMargin:200}});return h.jsx("div",{className:"x78zum5 x5yr21d xh8yej3",ref:a,children:h.jsxs(c("CometCard.react"),{background:"white",border:"solid",dropShadow:1,children:[h.jsx("div",{className:"x1vrad04 xh8yej3",children:h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.imageGlimmer})}),h.jsxs("div",{className:"xk4dd5j xz9dl7a xn6708d xsag5q8 x1ye3gou",children:[h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.nameGlimmer}),h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.contextGlimmer})]})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRecommendationsUnitCard.react",["fbt","ix","ActorHovercard.react","CometAspectRatioContainer.react","CometBackgroundImage.react","CometCard.react","CometColumn.react","CometColumnItem.react","CometImage.react","CometLink.react","TetraButton.react","TetraCircleButton.react","TetraTextPairing.react","fbicon","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");e=b.forwardRef;var k=b.useCallback,l=b.useRef,m={cardContext:{alignItems:"x6s0dn4",display:"x78zum5",height:"xlup9mm",width:"xh8yej3",$$css:!0},container:{width:"xh8yej3",$$css:!0},contentColumn:{maxWidth:"x193iq5w",$$css:!0},contentRoot:{display:"x78zum5",$$css:!0},contentRowShort:{height:"x5kalc8",$$css:!0},contentRowStandard:{height:"x1peatla",$$css:!0},contentRowTall:{height:"xsi6dy0",$$css:!0},image:{height:"x5yr21d",objectFit:"xl1xv1r",width:"xh8yej3",$$css:!0},imageContainer:{paddingBottom:"x1vrad04",position:"x1n2onr6",width:"xh8yej3",$$css:!0},imageLink:{bottom:"x1ey2m1c",boxSizing:"x9f619",display:"x1lliihq",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},inset:{bottom:"x1ey2m1c",boxShadow:"xlg9a9y",height:"xjm9jq1",position:"x10l6tqk",width:"xh8yej3",$$css:!0},xoutButton:{end:"x1k3u6ij",position:"x10l6tqk",top:"x1tk7jg1",$$css:!0}};function a(a,b){var e=a.accessibilityLabel,f=a.actorID,g=a.badge,n=a.body,o=a.cardAction,p=a.cardContentHeightLevel,q=a.cardContext;q=q===void 0?null:q;var r=a.cardFooter;r=r===void 0?null:r;var s=a.dropShadow;s=s===void 0?2:s;var t=a.headline,u=a.imageAlt,v=a.imageAspectRatio,w=a.imageSrc,x=a.isCardContextHidden;x=x===void 0?!1:x;var y=a.linkURI,z=a.meta,A=a.onClick,B=a.onHeadlineClick,C=a.onImageClick,D=a.onImpression,E=a.onRemove;a=a.testid;var F=l(!1);a=k(function(){if(f==null)return;F.current||(D&&D(),F.current=!0)},[f,D]);a=c("useVisibilityObserver")({onVisible:a});var G=function(){A&&A(),C&&C()},H=function(){A&&A(),B&&B()};return j.jsx("div",{className:"xh8yej3","data-testid":void 0,ref:a,children:j.jsx(c("CometCard.react"),{background:"white",border:"solid",dropShadow:s,ref:b,children:j.jsxs("div",{className:"x78zum5",children:[j.jsxs(c("CometColumn.react"),{expanding:!0,paddingTop:0,paddingVertical:12,spacing:12,xstyle:m.contentColumn,children:[j.jsx(c("CometColumnItem.react"),{children:v==null?j.jsxs("div",{className:"x1vrad04 x1n2onr6 xh8yej3",children:[j.jsx(c("CometLink.react"),{"aria-hidden":e==null,"aria-label":e,href:y,onClick:G,xstyle:m.imageLink,children:j.jsx(c("CometImage.react"),{alt:u,src:w,xstyle:m.image})}),j.jsx("div",{className:"x1ey2m1c xlg9a9y xjm9jq1 x10l6tqk xh8yej3"})]}):j.jsx(c("CometLink.react"),{href:y,onClick:G,children:j.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:v,children:j.jsx(c("CometBackgroundImage.react"),{alt:u,src:w})})})}),j.jsx(c("CometColumnItem.react"),{paddingHorizontal:12,xstyle:[p===0&&m.contentRowShort,p===1&&m.contentRowStandard,p===2&&m.contentRowTall],children:j.jsx(c("TetraTextPairing.react"),{body:n,bodyColor:"secondary",headline:j.jsx(c("ActorHovercard.react"),{actorID:f,children:function(a){return j.jsxs(j.Fragment,{children:[j.jsx(c("CometLink.react"),{"aria-hidden":!1,href:y,onClick:H,ref:a,children:t}),g]})}}),headlineLineLimit:p==null?1:2,level:3,meta:z})}),!x&&j.jsx(c("CometColumnItem.react"),{paddingHorizontal:12,children:j.jsx("div",{className:"x6s0dn4 x78zum5 xlup9mm xh8yej3",children:q})}),o!=null&&j.jsx(c("CometColumnItem.react"),{expanding:!0,paddingHorizontal:12,verticalAlign:"bottom",children:j.jsx(c("TetraButton.react"),babelHelpers["extends"]({},o,{reduceEmphasis:(a=o.reduceEmphasis)!=null?a:!0}))}),r&&j.jsx(c("CometColumnItem.react"),{paddingHorizontal:12,children:r})]}),E!=null?j.jsx("div",{className:"x1k3u6ij x10l6tqk x1tk7jg1",children:j.jsx(c("TetraCircleButton.react"),{icon:d("fbicon")._(i("478233"),20),label:h._("__JHASH__tnRfHlva-bL__JHASH__"),onPress:E,size:32,testid:void 0,type:"dark-overlay"})}):null]})})})}a.displayName=a.name+" [from "+f.id+"]";b=e(a);g["default"]=b}),98);
__d("FriendingCometFriendRequestCancelMutation",["CometRelay","FriendingCometFriendRequestCancelMutation.graphql","ProfileActionFriendingMutationUtils","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometFriendRequestCancelMutation.graphql");function a(a){var b=a.environment,c=a.navigationChain,e=a.onError,f=a.receiverID;a=a.source;return d("CometRelay").commitMutation(b,{mutation:i,onError:e,optimisticResponse:{friend_request_cancel:{cancelled_friend_requestee:{friendship_status:"CAN_REQUEST",id:f,profile_action:d("ProfileActionFriendingMutationUtils").getOptimisticActionForFriendshipStatus("CAN_REQUEST",f)}}},variables:{input:{attribution_id_v2:c,cancelled_friend_requestee_id:f,source:a},scale:d("WebPixelRatio").get()}})}g.commit=a}),98);
__d("FriendingCometPYMKCard.react",["fbt","ix","CometRecommendationsUnitCard.react","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestSendMutation","FriendingCometMutualFriendsSocialContext.react","FriendingCometPYMKCard_user.graphql","FriendingCometTestIDHelper","TetraButton.react","TetraText.react","fbicon","react","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useCallback,m=e.useRef;function a(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("FriendingCometPYMKCard_user.graphql"),a.user),f=a.addFriendSource,g=a.cancelRequestSource,n=a.dropShadow;n=n===void 0?2:n;var o=a.hasButtonIcons;o=o===void 0?!0:o;var p=a.hasRemoveTextButton;p=p===void 0?!1:p;var q=a.logAddFriend,r=a.logClick,s=a.logImpression,t=a.onRemove,u=a.profileURI,v=a.pymkLocation;a=e.friendship_status;var w=e.id,x=e.name,y=e.profile_picture;y=y==null?void 0:y.uri;var z=d("CometRelay").useRelayEnvironment(),A=m(!1),B=m(a),C=B.current!==a;C&&(B.current=a);var D=d("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:(B=w)!=null?B:"0",addFriendSource:f}),E=c("useMinifiedProductAttribution")();B=l(function(){w!=null&&(d("FriendingCometFriendRequestSendMutation").commit({environment:z,navigationChain:E,onError:D,pymkLocation:v,receiverID:w,source:f}),q!=null&&q())},[f,z,D,w,q,E,v]);var F=l(function(){w!=null&&(A.current=!0,d("FriendingCometFriendRequestCancelMutation").commit({environment:z,navigationChain:E,onError:D,receiverID:w,source:g}))},[g,z,D,w,E]);if(w==null||y==null||x==null)return null;var G=void 0,H=null,I=null;switch(a){case"CAN_REQUEST":G={icon:o?d("fbicon")._(i("497883"),16):null,label:h._("__JHASH__Z4PyBRj_DqQ__JHASH__"),onPress:B,testid:"add_button"};H=p?k.jsx("div",{className:"xh8yej3 xifccgj",children:k.jsx(c("TetraButton.react"),{icon:o?d("fbicon")._(i("664704"),16):null,label:h._("__JHASH__NBfMiFm79R7__JHASH__"),onPress:t,testid:void 0,type:"secondary"})}):null;I=A.current?h._("__JHASH__MJNiftGCp6X__JHASH__"):null;break;case"OUTGOING_REQUEST":G=p?void 0:{icon:o?d("fbicon")._(i("664704"),16):null,label:h._("__JHASH__USkLBq6Dqcv__JHASH__"),onPress:F,reduceEmphasis:!1,testid:"cancel_request_button",type:"secondary"};H=p?k.jsxs("div",{className:"x78zum5 xdt5ytf xh8yej3",children:[k.jsx("div",{className:"xh8yej3 xsdox4t"}),k.jsx("div",{className:"xh8yej3 xifccgj",children:k.jsx(c("TetraButton.react"),{icon:o?d("fbicon")._(i("664704"),16):null,label:h._("__JHASH__USkLBq6Dqcv__JHASH__"),onPress:F,testid:void 0,type:"secondary"})})]}):null;I=h._("__JHASH__TEOr0XFFOKy__JHASH__");break}a=null;if(C&&I!=null)a=k.jsx(c("TetraText.react"),{color:"secondary",numberOfLines:1,type:"body3",children:I});else{F=(o=(B=e.social_context)==null?void 0:B.text)!=null?o:"";a=F!==""?k.jsx(c("FriendingCometMutualFriendsSocialContext.react"),{iconSize:16,socialContextText:F,textType:"body3",truncateContextText:!0,user:e}):null}A.current=!1;return k.jsx(c("CometRecommendationsUnitCard.react"),{actorID:w,cardAction:G,cardContext:a,cardFooter:H,dropShadow:n,headline:x,imageAlt:x!==""?h._("__JHASH__fFxebUIHbMc__JHASH__",[h._param("name",x)]):h._("__JHASH__YYtsNPwzoFr__JHASH__"),imageSrc:y,linkURI:u,onClick:r,onImpression:s,onRemove:p?void 0:t,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometPYMKBlacklistSuggestionMutation",["CometRelay","FriendingCometPYMKBlacklistSuggestionMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometPYMKBlacklistSuggestionMutation.graphql");function a(a,b,c,e,f,g,h){var j=function(a,f){f===void 0&&(f=e);a=c!=null?a.get(c):null;if(!a)return;var h=g!=null?{location:g}:null;a=d("CometRelay").ConnectionHandler.getConnection(a,b,h);if(!a)return;d("CometRelay").ConnectionHandler.deleteNode(a,f)};return d("CometRelay").commitMutation(a,{mutation:i,onError:h,optimisticUpdater:j,updater:function(a){var b=a.getRootField("pymk_suggestion_blacklist");if(!b)return;b=b.getLinkedRecord("blacklisted_user");if(!b)return;b=b.getValue("id");b=typeof b==="string"?""+b:null;b!=null&&j(a,b)},variables:{input:{people_you_may_know_id:e,people_you_may_know_location:f}}})}g.commit=a}),98);
__d("RegularPymkAddFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744254");b=d("FalcoLoggerInternal").create("regular_pymk_add",a);e=b;g["default"]=e}),98);
__d("RegularPymkImpFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744255");b=d("FalcoLoggerInternal").create("regular_pymk_imp",a);e=b;g["default"]=e}),98);
__d("RegularPymkProfileFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744256");b=d("FalcoLoggerInternal").create("regular_pymk_profile",a);e=b;g["default"]=e}),98);
__d("RegularPymkXoutFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744257");b=d("FalcoLoggerInternal").create("regular_pymk_xout",a);e=b;g["default"]=e}),98);