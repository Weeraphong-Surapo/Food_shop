;/*FB_PKG_DELIM*/

__d("MarketplaceSellerProfileDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6228439777178816"}),null);
__d("MarketplaceSellerProfileDialogQuery$Parameters",["MarketplaceSellerProfileDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MarketplaceSellerProfileDialogQuery_facebookRelayOperation"),metadata:{},name:"MarketplaceSellerProfileDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MarketplaceSellerProfileInventoryQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5916012751817013"}),null);
__d("MarketplaceSellerProfileInventoryQuery$Parameters",["MarketplaceSellerProfileInventoryQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MarketplaceSellerProfileInventoryQuery_facebookRelayOperation"),metadata:{},name:"MarketplaceSellerProfileInventoryQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MarketplaceSellerProfileDialog.entrypoint",["JSResourceForInteraction","MarketplaceSellerProfileDialogQuery$Parameters","MarketplaceSellerProfileInventoryQuery$Parameters","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams;a=a.routeProps;return{extraProps:{productID:b.productID},queries:{inventoryQueryReference:{parameters:c("MarketplaceSellerProfileInventoryQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),sellerID:b.id}},queryReference:{parameters:c("MarketplaceSellerProfileDialogQuery$Parameters"),variables:{isCOBMOB:c("gkx")("1489406"),isSelfProfile:b.id===a.viewerID,scale:d("WebPixelRatio").get(),sellerId:b.id,show_reviews:c("gkx")("7075")}}}}},root:c("JSResourceForInteraction")("MarketplaceSellerProfileDialog.react").__setRef("MarketplaceSellerProfileDialog.entrypoint")};g["default"]=a}),98);