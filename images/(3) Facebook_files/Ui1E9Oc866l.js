;/*FB_PKG_DELIM*/

__d("CometMediaViewerDescriptionSectionTextWithEntities_textWithEntities$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometMediaViewerDescriptionSectionTextWithEntities_textWithEntities$normalization",selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}]};e.exports=a}),null);
__d("CometMediaViewerDescriptionSectionTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerDescriptionSectionTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("CometMediaViewerDescriptionSectionTextWithEntities.react",["CometEmojiTransform","CometEmoticonTransform","CometHovercardEntityRenderer","CometLineBreakTransform","CometLinkedEntityRenderer","CometMediaViewerDescriptionSectionTextWithEntities_textWithEntities.graphql","CometRelay","CometShortenedExternalUrlEntityRenderer","CometTextWithEntitiesRelay.react","CometTrackingNodeRenderer","PageWhatsAppNumberCometRenderer","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={"*":[c("CometLinkedEntityRenderer"),c("CometTrackingNodeRenderer")],Event:[c("CometHovercardEntityRenderer")],ExternalUrl:[c("CometShortenedExternalUrlEntityRenderer")],Group:[c("CometHovercardEntityRenderer")],Page:[c("CometHovercardEntityRenderer")],PageWhatsAppNumber:[c("PageWhatsAppNumberCometRenderer")],User:[c("CometHovercardEntityRenderer")]},k=[c("CometEmoticonTransform")(),c("CometEmojiTransform")(),c("CometLineBreakTransform")];function a(a){a=a.textWithEntities;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometMediaViewerDescriptionSectionTextWithEntities_textWithEntities.graphql"),a);return a==null?null:i.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:j,textWithEntities:a,transforms:k,truncationStyle:"see-more-and-less"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometShareToGroupsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6130263987038745"}),null);