;/*FB_PKG_DELIM*/

__d("CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}];return{argumentDefinitions:[{kind:"RootArgument",name:"bookmarkID"}],kind:"Fragment",metadata:null,name:"CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer",selections:[{alias:null,args:[{items:[{kind:"Variable",name:"bookmark_ids.0",variableName:"bookmarkID"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"FAVORITES"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:"bookmark_unread_count",args:a,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:"bookmark_unread_count_string",args:a,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometHomepageBadgeCountClearingMutationHelper_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}];return{argumentDefinitions:[{kind:"RootArgument",name:"bookmarkIDs"},{kind:"RootArgument",name:"hasBookmark"},{kind:"RootArgument",name:"hasTopTab"}],kind:"Fragment",metadata:null,name:"CometHomepageBadgeCountClearingMutationHelper_viewer",selections:[{alias:null,args:[{kind:"Variable",name:"bookmark_ids",variableName:"bookmarkIDs"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{condition:"hasBookmark",kind:"Condition",passingValue:!0,selections:[{alias:"bookmark_unread_count",args:a,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'}]},{alias:"bookmark_unread_count_string",args:a,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'},{condition:"hasTopTab",kind:"Condition",passingValue:!0,selections:[{alias:"tab_unread_count",args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'}]}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometHomeProductBadgedNavigationLogger",["QPLUtils","QuickPerformanceLogger","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h=c("qpl")._(30632331,"5336"),i=new Map();function a(a){k(a);l({string:{product_app_id:a}},a);return}function j(a){if(a==null)return!1;if(i.has(a)){var b;b=(b=i.get(a))!=null?b:0;b=b+1;i.set(a,b);l({"int":{attempt_count:b}},a);return!0}else{i.set(a,1);l({"int":{attempt_count:1}},a);return!1}}function k(a){var b=j(a);if(b)return;b=d("QPLUtils").deriveInstanceKey(a);return c("QuickPerformanceLogger").markerStart(h,b,c("QuickPerformanceLogger").currentTimestamp(),{cancelOnUnload:!0})}function b(a,b){a!=null&&i["delete"](a);a=d("QPLUtils").deriveInstanceKey(a);return c("QuickPerformanceLogger").markerEnd(h,b,a)}function l(a,b){b=d("QPLUtils").deriveInstanceKey(b);return c("QuickPerformanceLogger").markerAnnotate(h,a,{instanceKey:b})}g.markerStartAndAnnotateWithProductID=a;g.markerStart=k;g.markerEnd=b;g.markerAnnotate=l}),98);
__d("CometHomepageBadgeCountClearingMutationHelper",["CometHomeProductBadgedNavigationLogger","CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql","CometHomepageBadgeCountClearingMutationHelper_viewer.graphql","RelayFBConnectionHandler_UNSTABLE","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h,i;h!==void 0?h:h=b("CometHomepageBadgeCountClearingMutationHelper_viewer.graphql");i!==void 0?i:i=b("CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql");function a(a){var b=a.bookmarkIDs,e=a.hasBookmark,f=a.hasTopTab;a=a.store;if(f===!1&&e===!1)return;var g=a.getRoot();if(!g)return;g=g.getLinkedRecord("viewer");if(!g)return;var h=g.getLinkedRecord("bookmarks",{bookmark_ids:b,environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"]});if(!h&&e){e=g.getLinkedRecord("bookmark_folder",{folder:"PRODUCT"});if(e!=null){a=d("RelayFBConnectionHandler_UNSTABLE").unstable_getAllConnectionsWithKey(a,e,"CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks");a&&a.length>0&&(h=a[0])}}!h&&f&&c("gkx")("2204")&&(h=g.getLinkedRecord("tab_bookmarks",{environment:"COMET",folder_id:"PRODUCT"}));if(!h)return;e=h.getLinkedRecords("edges");if(!e)return;a=null;e.forEach(function(c){var d;c=c==null?void 0:c.getLinkedRecord("node");d=c==null?void 0:(d=c.getLinkedRecord("bookmarked_node"))==null?void 0:d.getValue("id");b.includes(d)&&(a=c)});(f=a)==null?void 0:f.setValue(0,"unread_count",{bookmark_render_location:"COMET_LEFT_NAV"});(g=a)==null?void 0:g.setValue(null,"unread_count_string",{bookmark_render_location:"COMET_LEFT_NAV"});(h=a)==null?void 0:h.setValue(0,"unread_count",{bookmark_render_location:"COMET_TOP_TAB"})}function e(a,b){var c=b==null?void 0:(b=b.bookmarks)==null?void 0:b.edges;c!=null&&c.length>0&&(a==null?void 0:a.forEach(function(a){var b=c.find(function(b){return(b==null?void 0:(b=b.node)==null?void 0:(b=b.bookmarked_node)==null?void 0:b.id)===a});b=b==null?void 0:b.node;var e=b==null?void 0:b.bookmark_unread_count,f=b==null?void 0:b.bookmark_unread_count_string;b=b==null?void 0:b.tab_unread_count;e===0&&(b==null||b===0)&&f==null?d("CometHomeProductBadgedNavigationLogger").markerEnd(a,2):(e==null?d("CometHomeProductBadgedNavigationLogger").markerAnnotate({string:{bookmark_unread_count:"null"}},a):e>0&&d("CometHomeProductBadgedNavigationLogger").markerAnnotate({"int":{bookmark_unread_count:e}},a),b==null?d("CometHomeProductBadgedNavigationLogger").markerAnnotate({string:{tab_unread_count:"null"}},a):b>0&&d("CometHomeProductBadgedNavigationLogger").markerAnnotate({"int":{tab_unread_count:b}},a),f!=null&&d("CometHomeProductBadgedNavigationLogger").markerAnnotate({string:{bookmark_unread_count_string:f}},a),d("CometHomeProductBadgedNavigationLogger").markerEnd(a,3))}))}g.clearBadgeCount=a;g.onCompleted=e}),98);/*FB_PKG_DELIM*/
__d("FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4964052750352378"}),null);
__d("FriendingCometFriendsBadgeCountClearMutation.graphql",["FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmarkIDs"},c={defaultValue:null,kind:"LocalArgument",name:"hasBookmark"},d={defaultValue:null,kind:"LocalArgument",name:"hasTopTab"},e={defaultValue:null,kind:"LocalArgument",name:"input"},f=[{kind:"Variable",name:"data",variableName:"input"}],g=[{kind:"Variable",name:"bookmark_ids",variableName:"bookmarkIDs"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}],j={condition:"hasBookmark",kind:"Condition",passingValue:!0,selections:[{alias:"bookmark_unread_count",args:i,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'}]};i={alias:"bookmark_unread_count_string",args:i,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'};var k={condition:"hasTopTab",kind:"Condition",passingValue:!0,selections:[{alias:"tab_unread_count",args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'}]},l={alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendConfirmedNotificationsConnection",kind:"LinkedField",name:"friend_confirmed_notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendConfirmedNotificationsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_unseen",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FriendingPossibilitiesConnection",kind:"LinkedField",name:"friending_possibilities",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendingPossibilitiesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e],kind:"Fragment",metadata:null,name:"FriendingCometFriendsBadgeCountClearMutation",selections:[{alias:null,args:f,concreteType:"ViewerFriendsBadgeCountClearResponsePayload",kind:"LinkedField",name:"viewer_friends_badge_count_clear",plural:!1,selections:[{alias:"viewer_for_badge_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:g,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[h],storageKey:null},j,i,k],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},l],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,d,c,e],kind:"Operation",name:"FriendingCometFriendsBadgeCountClearMutation",selections:[{alias:null,args:f,concreteType:"ViewerFriendsBadgeCountClearResponsePayload",kind:"LinkedField",name:"viewer_friends_badge_count_clear",plural:!1,selections:[{alias:"viewer_for_badge_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:g,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h],storageKey:null},j,i,k,h],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},l],storageKey:null}]},params:{id:b("FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometFriendsBadgeCountClearMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("NullStateNotifications",["cr:3585"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:3585")}),98);
__d("NullStateNotificationsFB",["IconSource"],(function(a,b,c,d,e,f,g){"use strict";a={dark:new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/notifications/null_states_notifications_dark_mode.svg",112),"default":new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg",112)};g["default"]=a}),98);
__d("FriendingCometFriendsBadgeCountClearMutation",["CometHomepageBadgeCountClearingMutationHelper","CometRelay","FriendingCometFriendsBadgeCountClearMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i={bookmarkIDs:["2356318349"],hasBookmark:!0,hasTopTab:!0},j=h!==void 0?h:h=b("FriendingCometFriendsBadgeCountClearMutation.graphql");function k(a){d("CometHomepageBadgeCountClearingMutationHelper").clearBadgeCount(babelHelpers["extends"]({},i,{store:a}))}var l=function(a){d("CometHomepageBadgeCountClearingMutationHelper").onCompleted(i.bookmarkIDs,a==null?void 0:(a=a.viewer_friends_badge_count_clear)==null?void 0:a.viewer_for_badge_count)};function a(a,b,c){var e=function(a){if(b==null)return;k(a)};return d("CometRelay").commitMutation(a,{mutation:j,onCompleted:l,onError:c,optimisticUpdater:e,variables:babelHelpers["extends"]({},i,{input:b})})}g.commit=a}),98);