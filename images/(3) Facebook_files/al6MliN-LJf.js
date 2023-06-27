;/*FB_PKG_DELIM*/

__d("GroupsCometMembershipQuestionsDialogQuestions_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"can_viewer_report",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"question",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"question_type",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"question_option",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometMembershipQuestionsDialogQuestions_group",selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_membership_questions",plural:!1,selections:[{alias:"questions",args:null,concreteType:"GroupMembershipQuestion",kind:"LinkedField",name:"membership_questions",plural:!0,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"if_viewer_can_see_membership_questions.questions.id"},b,{kind:"RequiredField",field:c,action:"THROW",path:"if_viewer_can_see_membership_questions.questions.question"},{kind:"RequiredField",field:d,action:"THROW",path:"if_viewer_can_see_membership_questions.questions.question_type"},{alias:null,args:null,concreteType:"GroupMembershipQuestionOption",kind:"LinkedField",name:"question_options",plural:!0,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"if_viewer_can_see_membership_questions.questions.question_options.id"},{kind:"RequiredField",field:e,action:"THROW",path:"if_viewer_can_see_membership_questions.questions.question_options.question_option"}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_participation_questions",plural:!1,selections:[{alias:"questions",args:null,concreteType:"GroupParticipationQuestion",kind:"LinkedField",name:"community_participation_questions",plural:!0,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"if_viewer_can_see_participation_questions.questions.id"},b,{kind:"RequiredField",field:c,action:"THROW",path:"if_viewer_can_see_participation_questions.questions.question"},{kind:"RequiredField",field:d,action:"THROW",path:"if_viewer_can_see_participation_questions.questions.question_type"},{alias:null,args:null,concreteType:"GroupMembershipQuestionOption",kind:"LinkedField",name:"question_options",plural:!0,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"if_viewer_can_see_participation_questions.questions.question_options.id"},{kind:"RequiredField",field:e,action:"THROW",path:"if_viewer_can_see_participation_questions.questions.question_options.question_option"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Group",abstractKey:null}}();e.exports=a}),null);
__d("GroupsCometParticipationQuestionsDialogGroupInfo_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"GroupsCometParticipationQuestionsDialogGroupInfo_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"location",value:"FORUM_PARTICIPATION_QUESTIONS"}],concreteType:"GroupSnippetsConnection",kind:"LinkedField",name:"group_snippets",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupSnippetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GroupSnippet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'group_snippets(location:"FORUM_PARTICIPATION_QUESTIONS")'}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometParticipationQuestionsDialogJoinUpsell_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometParticipationQuestionsDialogJoinUpsell_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"join_or_follow_group_title",storageKey:null},action:"THROW",path:"join_or_follow_group_title"},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"participant_questionnaire_join_upsell_content",storageKey:null},action:"THROW",path:"participant_questionnaire_join_upsell_content"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometParticipationQuestionsDialogRules_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometParticipationQuestionsDialogRules_group",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_rules_agreement_enabled",storageKey:null},{alias:null,args:null,concreteType:"GroupRuleFromGroupConnection",kind:"LinkedField",name:"group_rules",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRule",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"description_with_entities",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"rule_title",storageKey:null}],storageKey:null}],storageKey:null}],type:"Group",abstractKey:null}}();e.exports=a}),null);
__d("useGroupMembershipAnswersSaveMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5687329311377672"}),null);
__d("useGroupMembershipAnswersSaveMutation.graphql",["GlobalPanelEnabled.relayprovider","GroupsCometEntityMenuEmbedded.relayprovider","CometTextWithEntitiesRelay_textWithEntities$normalization.graphql","useGroupMembershipAnswersSaveMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";var g={__relay_internal__pv__GlobalPanelEnabledrelayprovider:b("GlobalPanelEnabled.relayprovider"),__relay_internal__pv__GroupsCometEntityMenuEmbeddedrelayprovider:b("GroupsCometEntityMenuEmbedded.relayprovider")};a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"groupID"},c={defaultValue:null,kind:"LocalArgument",name:"imageMediaType"},d={defaultValue:null,kind:"LocalArgument",name:"input"},e={defaultValue:null,kind:"LocalArgument",name:"inviteShortLinkKey"},f={defaultValue:!1,kind:"LocalArgument",name:"isChainingRecommendationUnit"},h={defaultValue:null,kind:"LocalArgument",name:"profileID"},i={defaultValue:null,kind:"LocalArgument",name:"scale"},j=[{kind:"Variable",name:"data",variableName:"input"}],k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"question",storageKey:null},m=[{alias:null,args:null,kind:"ScalarField",name:"answer",storageKey:null},l],n={alias:null,args:null,concreteType:"MembershipCriteriaAnswer",kind:"LinkedField",name:"viewer_membership_criteria_answers",plural:!0,selections:m,storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"viewer_membership_questions_answer_state",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};l=[k,l,{alias:null,args:null,concreteType:"GroupMembershipQuestionOption",kind:"LinkedField",name:"question_options",plural:!0,selections:[k,{alias:null,args:null,kind:"ScalarField",name:"question_option",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_report",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"question_type",storageKey:null}];var q=[{kind:"Variable",name:"member_id",variableName:"profileID"}],r=[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],s={kind:"Variable",name:"scale",variableName:"scale"},t=[s,{kind:"Literal",name:"size",value:"20"}],u={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},v=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},u,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}];u=[u];var w={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};m={alias:null,args:null,concreteType:"MembershipCriteriaAnswer",kind:"LinkedField",name:"group_question_answers",plural:!0,selections:m,storageKey:null};var x={alias:null,args:null,kind:"ScalarField",name:"rules_agreement_status",storageKey:null},y=[p,k];return{fragment:{argumentDefinitions:[a,c,d,e,f,h,i],kind:"Fragment",metadata:null,name:"useGroupMembershipAnswersSaveMutation",selections:[{alias:null,args:j,concreteType:"GroupMembershipQuestionsAnswersSaveResponse",kind:"LinkedField",name:"group_membership_questions_answers_save",plural:!1,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[k,{args:null,kind:"FragmentSpread",name:"GroupsCometMallHeader_group"},{args:null,kind:"FragmentSpread",name:"GroupsCometMembershipQuestionsViewDialogContents_group"},{args:null,kind:"FragmentSpread",name:"GroupsCometMembershipQuestionsViewDialogEditPage_group"},{args:null,kind:"FragmentSpread",name:"ProfileCometContextualProfileMemberQuestionsTileRules_group"},{args:null,kind:"FragmentSpread",name:"ProfileCometContextualProfileMemberQuestionsTileAnswers_group"},n,o],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,e,c,f,h,i,a,{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__GlobalPanelEnabledrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__GroupsCometEntityMenuEmbeddedrelayprovider"}],kind:"Operation",name:"useGroupMembershipAnswersSaveMutation",selections:[{alias:null,args:j,concreteType:"GroupMembershipQuestionsAnswersSaveResponse",kind:"LinkedField",name:"group_membership_questions_answers_save",plural:!1,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[k,{alias:null,args:[{kind:"Literal",name:"supported",value:["XFBGroupsCometTabsNavigationHeaderRenderer","XFBGroupsCometEntityMenuEmbeddedHeaderRenderer","XFBGroupsCometLightweightGroupsHeaderRenderer"]}],concreteType:null,kind:"LinkedField",name:"profile_header_renderer",plural:!1,selections:[p,{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometHeaderRenderer_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometTabsNavigationHeaderRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometEntityMenuEmbeddedHeaderRenderer_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometEntityMenuEmbeddedHeaderRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometLightweightGroupsHeader_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometLightweightGroupsHeaderRenderer",abstractKey:null}],storageKey:'profile_header_renderer(supported:["XFBGroupsCometTabsNavigationHeaderRenderer","XFBGroupsCometEntityMenuEmbeddedHeaderRenderer","XFBGroupsCometLightweightGroupsHeaderRenderer"])'},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_membership_questions",plural:!1,selections:[{alias:"questions",args:null,concreteType:"GroupMembershipQuestion",kind:"LinkedField",name:"membership_questions",plural:!0,selections:l,storageKey:null},k],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_participation_questions",plural:!1,selections:[{alias:"questions",args:null,concreteType:"GroupParticipationQuestion",kind:"LinkedField",name:"community_participation_questions",plural:!0,selections:l,storageKey:null},k],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_rules_agreement_enabled",storageKey:null},{alias:null,args:q,concreteType:"GroupQuestionAnswerRenderInfo",kind:"LinkedField",name:"question_answer_render_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_answer",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"edit_answer_button_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"no_answer_text",plural:!1,selections:r,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"answer_edit_message_body",plural:!1,selections:r,storageKey:null},{alias:null,args:t,concreteType:"Image",kind:"LinkedField",name:"answer_edit_message_icon",plural:!1,selections:v,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"rules_agreement_text",plural:!1,selections:r,storageKey:null},{alias:"rules_icon_16",args:[s,{kind:"Literal",name:"size",value:"16"}],concreteType:"Image",kind:"LinkedField",name:"rules_icon",plural:!1,selections:v,storageKey:null},{alias:"rules_icon_12",args:[s,{kind:"Literal",name:"size",value:"12"}],concreteType:"Image",kind:"LinkedField",name:"rules_icon",plural:!1,selections:v,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"member_id",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"answer_state",plural:!1,selections:r,storageKey:null},{alias:null,args:t,concreteType:"Image",kind:"LinkedField",name:"answer_state_icon",plural:!1,selections:v,storageKey:null}],storageKey:null},{alias:"local_member",args:q,concreteType:"GroupMembership",kind:"LinkedField",name:"membership",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"member_profile",plural:!1,selections:[p,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:u,storageKey:null},w,k],storageKey:null},m,x,k],storageKey:null},w,{alias:null,args:null,concreteType:"GroupMembership",kind:"LinkedField",name:"membership",plural:!1,selections:[k,m,x,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"member_profile",plural:!1,selections:y,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GroupRuleFromGroupConnection",kind:"LinkedField",name:"group_rules",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupRule",kind:"LinkedField",name:"nodes",plural:!0,selections:[p,k,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"description_with_entities",plural:!1,selections:r,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rule_title",storageKey:null}],storageKey:null}],storageKey:null},{alias:"profile_pic",args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:u,storageKey:null},{alias:null,args:null,concreteType:"GroupPrivacyInfo",kind:"LinkedField",name:"privacy_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_name",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:r,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GroupMemberProfilesConnection",kind:"LinkedField",name:"group_member_profiles",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"show_only_count",value:!1},{kind:"Literal",name:"type",value:"COMPRESSED"}],kind:"ScalarField",name:"formatted_count_text",storageKey:'formatted_count_text(show_only_count:false,type:"COMPRESSED")'}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_subgroups_auto_join",plural:!1,selections:y,storageKey:null},n,o],storageKey:null}],storageKey:null}]},params:{id:b("useGroupMembershipAnswersSaveMutation_facebookRelayOperation"),metadata:{},name:"useGroupMembershipAnswersSaveMutation",operationKind:"mutation",text:null,providedVariables:g}}}();e.exports=a}),null);
__d("GroupsCometMembershipQuestion.react",["fbt","CometCheckbox.react","CometRadio.react","CometTextArea.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=function(a,b,c,d){c=(c=c)!=null?c:[];c.includes(b)?c=c.filter(function(a){return a!==b}):c=[].concat(c,[b]);d({answer:null,questionId:a,selectedOptions:c})},k=function(a){switch(a){case"MULTIPLE_CHOICE":return h._("__JHASH__aYyiwDJ1xOD__JHASH__");case"CHECKBOXES":return h._("__JHASH__MBpP9eBliZi__JHASH__");case"PARAGRAPH":return null;default:return null}};function a(a){var b=a.answers,d=a.onChange,e=a.question,f=a.questionId,g=a.questionOptions,l=a.questionType,m=b[f];a=k(l);var n=function(a){var c;d(babelHelpers["extends"]({},b,(c={},c[a.questionId]=a,c)))};g=g.map(function(a){var b,d=a.id,e=d;a=a.questionOption;var g=(b=m==null?void 0:m.selectedOptions)!=null?b:[];if(l==="CHECKBOXES")return i.jsx(c("CometCheckbox.react"),{checked:g.some(function(a){return a===d}),disabled:!1,label:a,labelIsHidden:!1,name:"checkbox",onChange:function(){return j(f,d,g,n)},value:a},e);else return i.jsx(c("CometRadio.react"),{checked:g[0]===d,disabled:!1,label:a,name:"radio",onChange:function(){return n({answer:null,questionId:f,selectedOptions:[d]})},value:a},e)});return i.jsxs(i.Fragment,{children:[i.jsx(c("TetraText.react"),{type:"meta3",children:a}),i.jsx("div",{className:"x14vqqas",children:l==="PARAGRAPH"?i.jsx(c("CometTextArea.react"),{label:e,labelIsHidden:!0,maxLength:250,onChange:function(a){return n({answer:a.target.value,questionId:f,selectedOptions:null})},placeholder:h._("__JHASH__ypf-ozPzFjG__JHASH__"),required:!0,rows:4,value:m!=null?m.answer:""}):g})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometMembershipQuestionsDialogQuestions.react",["ix","CometLazyPopoverTrigger.react","CometRelay","GroupsCometMembershipQuestion.react","GroupsCometMembershipQuestionsDialogQuestions_group.graphql","JSResourceForInteraction","TetraIcon.react","TetraListCell.react","fbicon","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=c("JSResourceForInteraction")("GroupsCometMembershipQuestionsMenu.react").__setRef("GroupsCometMembershipQuestionsDialogQuestions.react");function a(a){var e=a.answers,f=a.groupKey,g=a.onAnswersChange;a=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometMembershipQuestionsDialogQuestions_group.graphql"),f);a=((f=a.if_viewer_can_see_membership_questions)==null?void 0:f.questions)||((f=a.if_viewer_can_see_participation_questions)==null?void 0:f.questions);return j.jsxs("div",{children:[a==null?void 0:a.map(function(a,b){var f;b=a.id;var i=a.question,l=a.question_type;if(b==null||i==null||l==null)return c("recoverableViolation")("Membership question and/or question type missing","groups_comet");f=(f=(f=a.question_options)==null?void 0:f.map(function(a){return{id:a.id,questionOption:a.question_option}}))!=null?f:[];var m=a.can_viewer_report===!0?j.jsx(c("CometLazyPopoverTrigger.react"),{align:"end",popoverProps:{questionId:b},popoverResource:k,children:function(a,b){return j.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(h("484391"),24),onPress:b,ref:a})}}):null;return j.jsx("div",{className:"xp7jhwk xw7yly9","data-testid":void 0,children:j.jsx(c("TetraListCell.react"),{body:j.jsx(c("GroupsCometMembershipQuestion.react"),{answers:e,onChange:g,question:a.question,questionId:a.id,questionOptions:f,questionType:l}),headline:i,headlineAddOn:m,headlineLineLimit:0,paddingHorizontal:0})},b)})," "]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometParticipationQuestionsDialogGroupInfo.react",["fbt","CometRelay","CometRow.react","CometRowItem.react","GroupsCometParticipationQuestionsDialogGroupInfo_group.graphql","TetraProfilePhoto.react","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k="/images/comet/seafoam.png";function a(a){a=a.group$key;a=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometParticipationQuestionsDialogGroupInfo_group.graphql"),a);var e=a.group_snippets,f=a.name;a=a.profile_picture;a=(a=a==null?void 0:a.uri)!=null?a:k;e=e==null?void 0:(e=e.edges[0])==null?void 0:(e=e.node)==null?void 0:(e=e.title)==null?void 0:e.text;return j.jsxs(c("CometRow.react"),{paddingHorizontal:16,paddingTop:0,children:[j.jsx(c("CometRowItem.react"),{children:j.jsx(c("TetraProfilePhoto.react"),{"aria-label":h._("__JHASH__3PbT7qMMP2e__JHASH__"),shape:"roundedRect",size:40,source:{uri:a}})}),j.jsx(c("CometRowItem.react"),{expanding:!0,verticalAlign:"center",children:j.jsx(c("TetraTextPairing.react"),{headline:f,level:3,meta:e})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometParticipationQuestionsDialogJoinUpsell.react",["CometCheckbox.react","CometRelay","GroupsCometDivider.react","GroupsCometParticipationQuestionsDialogJoinUpsell_group.graphql","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.group$key,f=a.isChecked,g=a.onChange;a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometParticipationQuestionsDialogJoinUpsell_group.graphql"),e);e=a.join_or_follow_group_title;a=a.participant_questionnaire_join_upsell_content;return i.jsxs(i.Fragment,{children:[i.jsx(c("GroupsCometDivider.react"),{}),i.jsxs("div",{className:"x78zum5 xw7yly9",children:[i.jsx("div",{className:"x1pi30zi",children:i.jsx(c("TetraTextPairing.react"),{body:a,headline:e,level:3})}),i.jsx(c("CometCheckbox.react"),{checked:(a=f)!=null?a:!1,disabled:!1,label:e,labelIsHidden:!0,name:"check-join-group",onChange:function(){return g(!f)},value:(a=f)!=null?a:!1})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometParticipationQuestionsDialogRules.react",["fbt","CometCheckbox.react","CometLinkedEntityRenderer","CometNumber.react","CometRelay","CometTextWithEntitiesRelay.react","GroupsCometDivider.react","GroupsCometParticipationQuestionsDialogRules_group.graphql","GroupsViewedRulesFalcoEvent","TetraText.react","TetraTextPairing.react","react","recoverableViolation","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){var e=a.group$key,f=a.isChecked,g=a.onChange;a=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometParticipationQuestionsDialogRules_group.graphql"),e);e=a.group_rules;var k=a.id;a=a.is_rules_agreement_enabled;var l=c("useSinglePartialViewImpression")({onImpressionStart:function(){if(k==null)return;c("GroupsViewedRulesFalcoEvent").log(function(){return{event:"group_viewed_rules",group_id:k,surface:"membership_questionnaire"}})}});e=((e=e==null?void 0:e.nodes)!=null?e:[]).reduce(function(a,b){var d=b==null?void 0:b.description_with_entities,e=b==null?void 0:b.rule_title;b=b==null?void 0:b.id;if(e==null||d==null||b==null){c("recoverableViolation")("Group rule is missing an id, title or description","groups_comet");return a}var f=function(a){var b=function(){if(k==null)return;c("GroupsViewedRulesFalcoEvent").log(function(){return{event:"group_viewed_specific_rules",group_id:k,rule_ids:[a],surface:"membership_questionnaire"}})};return c("useSinglePartialViewImpression")({onImpressionStart:b})};return[].concat(a,[{description:d,index:a.length+1,ruleID:b,title:e,viewSpecificRuleImpressionRef:f}])},[]);return e.length===0||a!==!0?null:j.jsxs(j.Fragment,{children:[j.jsx(c("GroupsCometDivider.react"),{}),j.jsx("div",{className:"x12nagc xw7yly9",ref:l,children:j.jsx(c("TetraTextPairing.react"),{headline:h._("__JHASH__00rwYum5pB5__JHASH__"),level:3})}),j.jsx("div",{className:"xw7yly9",children:j.jsx(c("CometCheckbox.react"),{checked:(a=f)!=null?a:!1,disabled:!1,label:h._("__JHASH__CyLOmyA6yt0__JHASH__"),labelIsHidden:!1,name:"agree-to-group-rules",onChange:function(){return g(!f)},value:(l=f)!=null?l:!1})}),e.map(function(a){var b=a.description,d=a.index,e=a.ruleID,f=a.title;a=a.viewSpecificRuleImpressionRef;return j.jsxs("div",{className:"xieb3on x1sy10c2",ref:a(e),children:[j.jsxs("div",{className:"x78zum5",children:[j.jsx("div",{className:"xvy4d1p",children:j.jsx(c("TetraText.react"),{type:"body3",children:j.jsx(c("CometNumber.react"),{decimals:0,number:d})})}),j.jsx(c("TetraText.react"),{type:"body3",children:f})]}),j.jsx("div",{className:"xmupa6y x1xmf6yo",children:j.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:j.jsx(c("CometTextWithEntitiesRelay.react"),{maxLength:250,renderers:{ExternalUrl:[c("CometLinkedEntityRenderer")]},textWithEntities:b,truncationStyle:"see-more"})})})]},e)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupMembershipAnswersSaveMutation",["CometImageMediaType.entrypointutils","CometRelay","WebPixelRatio","react","useGroupMembershipAnswersSaveMutation.graphql","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useCallback,j=h!==void 0?h:h=b("useGroupMembershipAnswersSaveMutation.graphql");function a(a,b,e,f,g,h){f===void 0&&(f=function(){});g===void 0&&(g=function(){});var k=d("CometRelay").useRelayEnvironment(),l=c("useMinifiedProductAttribution")();return i(function(){d("CometRelay").commitMutation(k,{mutation:j,onCompleted:function(a,b){b&&b.length?f(b):g(a)},onError:function(a){return f([a])},variables:{groupID:a,imageMediaType:c("CometImageMediaType.entrypointutils").get(),input:{answers:Object.keys(b).map(function(a){return{answer:b[a].answer,question_id:b[a].questionId,selected_options:b[a].selectedOptions}}),attribution_id_v2:l,group_id:a,rules_agreement_status:e},profileID:h,scale:d("WebPixelRatio").get()}})},[b,k,a,h,l,f,g,e])}g["default"]=a}),98);