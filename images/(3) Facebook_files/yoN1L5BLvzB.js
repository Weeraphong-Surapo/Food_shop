;/*FB_PKG_DELIM*/

__d("BaseStyledRadio.react",["BaseRadio.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback,j={deselectedBorder:{borderTopColor:"x16lq71d",borderEndColor:"xx1d01n",borderBottomColor:"xbric6n",borderStartColor:"xqgq1yd",$$css:!0},disabledBorder:{borderTopColor:"x2n9awm",borderEndColor:"x1ysnn1a",borderBottomColor:"xm4epkw",borderStartColor:"x1glp2v9",$$css:!0},radio:{display:"x78zum5",$$css:!0},radioBorder:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",boxSizing:"x9f619",display:"x1rg5ohu",flexShrink:"x2lah0s",height:"xxk0z11",position:"x1n2onr6",width:"xvy4d1p",$$css:!0},selectedBorder:{borderTopColor:"x1tz4bnf",borderEndColor:"xmds5ef",borderBottomColor:"x25epmt",borderStartColor:"x11y6y4w",$$css:!0},sizeLarge:{height:"xxk0z11",width:"xvy4d1p",$$css:!0},sizeMedium:{height:"x1qx5ct2",width:"xw4jnvo",$$css:!0}};function a(a){var b=a.checked,d=a.checkedIcon,e=a.children,f=a.deselectedBorderXStyle,g=a.disabled;g=g===void 0?!1:g;var k=a.id,l=a.name,m=a.onSelect,n=a.selectedBorderXStyle,o=a.size;o=o===void 0?"large":o;var p=a.suppressFocusRing,q=a.tabIndex,r=a.testid,s=a.value;r=babelHelpers.objectWithoutPropertiesLoose(a,["checked","checkedIcon","children","deselectedBorderXStyle","disabled","id","name","onSelect","selectedBorderXStyle","size","suppressFocusRing","tabIndex","testid","value"]);a=i(function(){m(s)},[m,s]);return h.jsxs(c("BaseRadio.react"),babelHelpers["extends"]({},r,{checked:b,disabled:g,id:k,name:l,onValueChange:a,suppressFocusRing:p,tabIndex:q,testid:void 0,value:s!=null?String(s):null,xstyle:j.radio,children:[h.jsx("div",{className:c("stylex")(j.radioBorder,!g&&b&&j.selectedBorder,!g&&b&&n,!g&&!b&&j.deselectedBorder,!g&&!b&&f,g&&j.disabledBorder,o==="large"&&j.sizeLarge,o==="medium"&&j.sizeMedium),children:b?d:null}),e]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRadio.react",["BaseStyledRadio.react","CometPressableOverlay.react","TetraText.react","react","stylex","useCometPressableEventHandlers"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={radioDisabled:{backgroundColor:"xwcfey6",$$css:!0},radioSelected:{backgroundColor:"xwnonoy",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1kpxq89",position:"x10l6tqk",width:"xsmyaan",$$css:!0},root:{WebkitTapHighlightColor:"x1i10hfl",alignItems:"x6s0dn4",cursor:"x1ypdohk",display:"x78zum5",paddingBottom:"xwib8y2",paddingTop:"x1y1aw1k",position:"x1n2onr6",touchAction:"xggy1nq",$$css:!0},selectedSizeLarge:{start:"xit27t2",top:"xndqk7f",$$css:!0},selectedSizeMedium:{start:"xb1c2wi",top:"xs7f9wi",$$css:!0},text:{marginStart:"x1i64zmx",$$css:!0}};function a(a){var b=a.checked,d=a.disabled;d=d===void 0?!1:d;var e=a.id,f=a.label,g=a.labelIsHidden;g=g===void 0?!1:g;var j=a.name,k=a.onChange,l=a.reduceEmphasis;l=l===void 0?!1:l;var m=a.size;m=m===void 0?"large":m;var n=a.testid;n=a.value;a=a.xstyle;var o=c("useCometPressableEventHandlers")({disabled:d}),p=o[0];o[1];var q=o[2],r=q.focusVisible,s=q.hovered;q=q.pressed;o=o[3];return h.jsxs("label",babelHelpers["extends"]({className:c("stylex")(i.root,a)},o,{ref:p,children:[h.jsx(c("BaseStyledRadio.react"),{"aria-label":g?f:void 0,checked:b,checkedIcon:h.jsx("span",{className:"x14yjl9h xudhj91 x18nykt9 xww2gxu x1kpxq89 x10l6tqk xsmyaan"+((d?" xwcfey6":" xwnonoy")+(m==="medium"?" xb1c2wi xs7f9wi":""+(m==="large"?" xit27t2 xndqk7f":""+(m==="xlarge"?" xit27t2 xndqk7f":""+(d?"":"")))))}),disabled:d,id:e,name:j,onSelect:k,size:m,testid:void 0,value:n,children:h.jsx(c("CometPressableOverlay.react"),{focusVisible:r,hovered:s,offset:8,pressed:q,radius:"50%"})}),g?null:h.jsx("div",{className:"x1i64zmx",children:h.jsx(c("TetraText.react"),{color:d?"disabled":"primary",type:m==="xlarge"?"button1":l?"body3":"button2",children:f})})]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometDivider.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={16:{marginStart:"x1d52u69",marginEnd:"xktsk01",$$css:!0},divider:{backgroundColor:"x14nfmen",height:"xjm9jq1",$$css:!0}};function a(a){var b=a.className;a=a.marginHorizontal;a=a===void 0?0:a;a=c("stylex")(i.divider,i[a])+(b==null?"":" "+b);return h.jsx("div",{className:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);