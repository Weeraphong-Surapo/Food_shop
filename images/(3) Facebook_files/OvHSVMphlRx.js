;/*FB_PKG_DELIM*/

__d("LSUpdateExistingThreadV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(c){return b.fe(b.ftr(b.db.table(9).fetch(),function(c){return b.i64.eq(c.threadKey,a[0])||b.i64.eq(c.clientThreadKey,a[42])}),function(b){var c=b.update;b.item;return c({threadKey:a[0],threadName:a[1],folderName:a[2],parentThreadKey:a[3],threadPictureUrl:a[4],threadPictureUrlFallback:a[5],threadPictureUrlExpirationTimestampMs:a[6],lastActivityTimestampMs:a[7],lastReadWatermarkTimestampMs:a[8],removeWatermarkTimestampMs:a[9],muteExpireTimeMs:a[10],muteMentionExpireTimeMs:[0,0],snippet:a[11],isAdminSnippet:a[12],snippetSenderContactId:a[13],needsAdminApprovalForNewParticipant:a[14],authorityLevel:a[15],ongoingCallState:a[17],cannotReplyReason:a[18],customEmoji:a[19],customEmojiImageUrl:a[20],avatarStickerId:d,avatarStickerThumbnailImageUrl:d,avatarStickerThumbnailImageMimeType:d,avatarStickerOriginalImageUrl:d,avatarStickerOriginalImageMimeType:d,outgoingBubbleColor:a[21],themeFbid:a[22],nullstateDescriptionText1:a[23],nullstateDescriptionType1:a[24],nullstateDescriptionText2:a[25],nullstateDescriptionType2:a[26],nullstateDescriptionText3:a[27],nullstateDescriptionType3:a[28],draftMessage:a[29],snippetHasEmoji:a[30],hasPersistentMenu:a[31],disableComposerInput:a[32],cannotUnsendReason:a[33],viewedPluginKey:a[34],viewedPluginContext:a[35],capabilities:a[36],shouldRoundThreadPicture:a[37],isCustomThreadPicture:a[38],normalizedSearchTerms:a[39],threadDescription:a[41],unsendLimitMs:[-1,4294967295],groupNotificationSettings:[0,0]})})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("GroupsCometDiscussionNullStateRootQuery.graphql",["GroupsCometDelayCheckBlockedUsers.relayprovider","GroupsCometDiscussionNullStateRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";var g={__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider:b("GroupsCometDelayCheckBlockedUsers.relayprovider")};a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},c={defaultValue:null,kind:"LocalArgument",name:"groupID"},d={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},e={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},h={defaultValue:!1,kind:"LocalArgument",name:"useDefaultActor"},i=[{kind:"Variable",name:"id",variableName:"groupID"}],j={kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometDiscussionNullStateRootQuery",fragmentName:"GroupsCometDiscussionUnjoinedState_info",fragmentPropName:"info",kind:"ModuleImport"}],type:"GroupPrivateUnjoinedPrivacyEmphasisInfo",abstractKey:null},k={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,h],kind:"Fragment",metadata:null,name:"GroupsCometDiscussionNullStateRootQuery",selections:[{kind:"RequiredField",field:{alias:null,args:i,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometDiscussionLayoutWithSecondaryColumn_group"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"privacy_emphasis_info",plural:!1,selections:[j],storageKey:null}],storageKey:null},action:"THROW",path:"group"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,f,d,e,a,h,{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__GroupsCometDelayCheckBlockedUsersrelayprovider"}],kind:"Operation",name:"GroupsCometDiscussionNullStateRootQuery",selections:[{alias:null,args:i,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"privacy_emphasis_info",plural:!1,selections:[k,j],storageKey:null},l,{"if":null,kind:"Defer",label:"GroupsCometDiscussionLayoutWithSecondaryColumn_group$defer$GroupsCometFeedSecondaryColumn_group",selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_canSeeExpandedColor",fragmentName:"GroupsCometColorExpandedWrapper_group",fragmentPropName:"group",kind:"ModuleImport"},l],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_cannot_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_cannotSeeExpandedColor",fragmentName:"GroupsCometColorDefaultWrapper_group",fragmentPropName:"group",kind:"ModuleImport"},l],storageKey:null},{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"side_column_eligible_promotions",plural:!1,selections:[{alias:null,args:null,concreteType:"CometQuickPromotionSections",kind:"LinkedField",name:"comet_qp_sections",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["CometQuickPromotionGroupsTopOfMallRendererStrategy","CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy","CometQuickPromotionCommunityAdditionalProfileMigratedGroupMemberEducationRendererStrategy","CometQuickPromotionGroupsSubgroupCreationRendererStrategy","CometQuickPromotionCommunityProfileMegaphoneWithCTATriggerRendererStrategy"]}],concreteType:null,kind:"LinkedField",name:"renderer_strategy",plural:!1,selections:[k,{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometQPTopOfSideColumnSection_group",fragmentName:"CometQuickPromotionGroupsTopOfMallRendererStrategy_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionGroupsTopOfMallRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometQPTopOfSideColumnSection_group",fragmentName:"CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometQPTopOfSideColumnSection_group",fragmentName:"CometQuickPromotionCommunityAdditionalProfileMigratedGroupMemberEducationRendererStrategy_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionCommunityAdditionalProfileMigratedGroupMemberEducationRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometQPTopOfSideColumnSection_group",fragmentName:"CometQuickPromotionGroupsSubgroupCreationRendererStrategy_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionGroupsSubgroupCreationRendererStrategy",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometQPTopOfSideColumnSection_group",fragmentName:"CometQuickPromotionCommunityProfileMegaphoneWithCTATriggerRendererStrategy_quickPromotion",fragmentPropName:"quickPromotion",kind:"ModuleImport"}],type:"CometQuickPromotionCommunityProfileMegaphoneWithCTATriggerRendererStrategy",abstractKey:null}],storageKey:'renderer_strategy(supported:["CometQuickPromotionGroupsTopOfMallRendererStrategy","CometQuickPromotionCommunityAdditionalProfileLearnAboutOrJoinThisCommunityRendererStrategy","CometQuickPromotionCommunityAdditionalProfileMigratedGroupMemberEducationRendererStrategy","CometQuickPromotionGroupsSubgroupCreationRendererStrategy","CometQuickPromotionCommunityProfileMegaphoneWithCTATriggerRendererStrategy"])'}],storageKey:null},l],storageKey:null},l,{alias:null,args:[{kind:"Literal",name:"supported",value:["CometGroupDiscussionTabOnboardingCardRenderer","CometGroupDiscussionTabPublicGroupEducationHubCardRenderer","CometGroupDiscussionTabAboutCardRenderer","CometGroupDiscussionTabStreamerSchedulesCardRenderer","CometGroupDiscussionTabHashtagsCardRenderer","CometGroupDiscussionTabTopicsCardRenderer","CometGroupDiscussionTabJoinableVideoChatCardRenderer","CometGroupDiscussionTabSubFeedsCardRenderer","CometGroupDiscussionTabChatsCardRenderer","CometGroupDiscussionTabRecentFilesCardRenderer","CometGroupDiscussionTabRecentMediaCardRenderer","CometGroupDiscussionTabRecentMediaCardDeferredRenderer","CometGroupDiscussionTabUpcomingEventsCardRenderer","CometGroupDiscussionTabCommunityPresenceDetailsCardRenderer","CometGroupDiscussionTabCommunityPresenceAdminsCardRenderer","XFBCometGroupDiscussionTabTopPostsCardRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_discussion_tab_cards",plural:!0,selections:[k,{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometOnboardingRHCCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabOnboardingCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometPublicGroupEducationHubRHCCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabPublicGroupEducationHubCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometAboutRHCCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabAboutCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometStreamerSchedulesCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabStreamerSchedulesCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometHashtagsCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabHashtagsCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometTopicsCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabTopicsCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupRoomRHCCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabJoinableVideoChatCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometSubgroupsRHCCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabSubFeedsCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometChatsCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabChatsCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometRecentFilesCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabRecentFilesCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometRecentMediaCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabRecentMediaCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometRecentMediaCardDeferredRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabRecentMediaCardDeferredRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometUpcomingEventsCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabUpcomingEventsCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometCommunityPresenceDetailsRHCCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabCommunityPresenceDetailsCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometCommunityPresenceAdminsRHCCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"CometGroupDiscussionTabCommunityPresenceAdminsCardRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometFeedSecondaryColumn_cometDiscussionTabCards",fragmentName:"GroupsCometTopPostsCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],type:"XFBCometGroupDiscussionTabTopPostsCardRenderer",abstractKey:null}],storageKey:'comet_discussion_tab_cards(supported:["CometGroupDiscussionTabOnboardingCardRenderer","CometGroupDiscussionTabPublicGroupEducationHubCardRenderer","CometGroupDiscussionTabAboutCardRenderer","CometGroupDiscussionTabStreamerSchedulesCardRenderer","CometGroupDiscussionTabHashtagsCardRenderer","CometGroupDiscussionTabTopicsCardRenderer","CometGroupDiscussionTabJoinableVideoChatCardRenderer","CometGroupDiscussionTabSubFeedsCardRenderer","CometGroupDiscussionTabChatsCardRenderer","CometGroupDiscussionTabRecentFilesCardRenderer","CometGroupDiscussionTabRecentMediaCardRenderer","CometGroupDiscussionTabRecentMediaCardDeferredRenderer","CometGroupDiscussionTabUpcomingEventsCardRenderer","CometGroupDiscussionTabCommunityPresenceDetailsCardRenderer","CometGroupDiscussionTabCommunityPresenceAdminsCardRenderer","XFBCometGroupDiscussionTabTopPostsCardRenderer"])'}]}],storageKey:null}]},params:{id:b("GroupsCometDiscussionNullStateRootQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometDiscussionNullStateRootQuery",operationKind:"query",text:null,providedVariables:g}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("GroupsCometDiscussionNullStateRoot.react",["CometRelay","GroupsCometDiscussionLayoutWithSecondaryColumn.react","GroupsCometDiscussionNullStateRootQuery.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.queries.queryReference;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("GroupsCometDiscussionNullStateRootQuery.graphql"),a);a=a.group;return i.jsx(c("GroupsCometDiscussionLayoutWithSecondaryColumn.react"),{group:a,children:i.jsx(d("CometRelay").MatchContainer,{match:a.privacy_emphasis_info,props:{}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);