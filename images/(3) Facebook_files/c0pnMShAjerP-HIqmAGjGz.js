;/*FB_PKG_DELIM*/

__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("getActiveElement",[],(function(a,b,c,d,e,f){function a(a){a===void 0&&(a=document);if(a===void 0)return null;try{return a.activeElement||a.body}catch(b){return a.body}}f["default"]=a}),66);
__d("DraftEditorFlushControlled",["ReactDOMComet"],(function(a,b,c,d,e,f){a=b("ReactDOMComet").unstable_flushControlled;e.exports=a}),null);
__d("getRangeClientRects",["invariant","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";c=b("UserAgent").isBrowser("Chrome");function a(a){var b=a.cloneRange(),c=[];for(var d=a.endContainer;d!=null;d=d.parentNode){var e=d===a.commonAncestorContainer;e?b.setStart(a.startContainer,a.startOffset):b.setStart(b.endContainer,0);var f=Array.from(b.getClientRects());c.push(f);if(e){c.reverse();return(f=[]).concat.apply(f,c)}b.setEndBefore(d)}g(0,578)}d=c?a:function(a){return Array.from(a.getClientRects())};e.exports=d}),null);
__d("isSoftNewlineEvent",["Keys"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.which===b("Keys").RETURN&&(a.getModifierState("Shift")||a.getModifierState("Alt")||a.getModifierState("Control"))}e.exports=a}),null);
__d("KeyBindingUtil",["UserAgent","isSoftNewlineEvent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h={isCtrlKeyCommand:function(a){return!!a.ctrlKey&&!a.altKey},isOptionKeyCommand:function(a){return g&&a.altKey},usesMacOSHeuristics:function(){return g},hasCommandModifier:function(a){return g?!!a.metaKey&&!a.altKey:h.isCtrlKeyCommand(a)},isSoftNewlineEvent:b("isSoftNewlineEvent")};e.exports=h}),null);
__d("getDefaultKeyBinding",["KeyBindingUtil","Keys","UserAgent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h=g&&b("UserAgent").isBrowser("Firefox < 29"),i=b("KeyBindingUtil").hasCommandModifier,j=b("KeyBindingUtil").isCtrlKeyCommand;function k(a){return g&&a.altKey||j(a)}function l(a){return!i(a)?null:a.shiftKey?"redo":"undo"}function m(a){return!g&&a.shiftKey?null:k(a)?"delete-word":"delete"}function n(a){return i(a)&&g?"backspace-to-start-of-line":k(a)?"backspace-word":"backspace"}function a(a){switch(a.keyCode){case 66:return i(a)?"bold":null;case 68:return j(a)?"delete":null;case 72:return j(a)?"backspace":null;case 73:return i(a)?"italic":null;case 74:return i(a)?"code":null;case 75:return g&&j(a)?"secondary-cut":null;case 77:return j(a)?"split-block":null;case 79:return j(a)?"split-block":null;case 84:return g&&j(a)?"transpose-characters":null;case 85:return i(a)?"underline":null;case 87:return g&&j(a)?"backspace-word":null;case 88:return i(a)&&a.shiftKey?"strikethrough":null;case 89:return j(a)?g?"secondary-paste":"redo":null;case 90:return l(a)||null;case b("Keys").RETURN:return"split-block";case b("Keys").DELETE:return m(a);case b("Keys").BACKSPACE:return n(a);case b("Keys").LEFT:return h&&i(a)?"move-selection-to-start-of-block":null;case b("Keys").RIGHT:return h&&i(a)?"move-selection-to-end-of-block":null;default:return null}}e.exports=a}),null);
__d("adjustBlockDepthForContentState",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d){var e=b.getStartKey(),f=b.getEndKey(),g=a.getBlockMap(),h=g.toSeq().skipUntil(function(a,b){return b===e}).takeUntil(function(a,b){return b===f}).concat([[f,g.get(f)]]).map(function(a){var b=a.getDepth()+c;b=Math.max(0,b);d!=null&&(b=Math.min(b,d));return a.set("depth",b)});g=g.merge(h);return a.merge({blockMap:g,selectionBefore:b,selectionAfter:b})}e.exports=a}),null);
__d("RichTextEditorUtil",["DraftModifier","EditorState","adjustBlockDepthForContentState","nullthrows"],(function(a,b,c,d,e,f){"use strict";var g={currentBlockContainsLink:function(a){var b=a.getSelection(),c=a.getCurrentContent();return c.getBlockForKey(b.getAnchorKey()).getCharacterList().slice(b.getStartOffset(),b.getEndOffset()).some(function(a){a=a.getEntity();return!!a&&c.getEntity(a).getType()==="LINK"})},getCurrentBlockType:function(a){var b=a.getSelection();return a.getCurrentContent().getBlockForKey(b.getStartKey()).getType()},getDataObjectForLinkURL:function(a){return{url:a.toString()}},handleKeyCommand:function(a,b,c){switch(b){case"bold":return g.toggleInlineStyle(a,"BOLD");case"italic":return g.toggleInlineStyle(a,"ITALIC");case"underline":return g.toggleInlineStyle(a,"UNDERLINE");case"strikethrough":return g.toggleInlineStyle(a,"STRIKETHROUGH");case"code":return g.toggleCode(a);case"backspace":case"backspace-word":case"backspace-to-start-of-line":return g.onBackspace(a);case"delete":case"delete-word":case"delete-to-end-of-block":return g.onDelete(a);default:return null}},insertSoftNewline:function(a){var c=b("DraftModifier").insertText(a.getCurrentContent(),a.getSelection(),"\n",a.getCurrentInlineStyle(),null);a=b("EditorState").push(a,c,"insert-characters");return b("EditorState").forceSelection(a,c.getSelectionAfter())},onBackspace:function(a){var c=a.getSelection();if(!c.isCollapsed()||c.getAnchorOffset()||c.getFocusOffset())return null;var d=a.getCurrentContent(),e=c.getStartKey();e=d.getBlockBefore(e);if(e&&e.getType()==="atomic"){e=d.getBlockMap()["delete"](e.getKey());e=d.merge({blockMap:e,selectionAfter:c});if(e!==d)return b("EditorState").push(a,e,"remove-range")}c=g.tryToRemoveBlockStyle(a);return c?b("EditorState").push(a,c,"change-block-type"):null},onDelete:function(a){var c=a.getSelection();if(!c.isCollapsed())return null;var d=a.getCurrentContent(),e=c.getStartKey(),f=d.getBlockForKey(e);f=f.getLength();if(c.getStartOffset()<f)return null;f=d.getBlockAfter(e);if(!f||f.getType()!=="atomic")return null;e=c.merge({focusKey:f.getKey(),focusOffset:f.getLength()});c=b("DraftModifier").removeRange(d,e,"forward");return c!==d?b("EditorState").push(a,c,"remove-range"):null},onTab:function(a,c){var d=c.getSelection(),e=d.getAnchorKey(),f=c.getCurrentContent();e=f.getBlockForKey(e);e=e.getType();if(e!=="unordered-list-item"&&e!=="ordered-list-item")return c;a.preventDefault();e=b("adjustBlockDepthForContentState")(f,d,a.shiftKey?-1:1);return b("EditorState").push(c,e,"adjust-depth")},toggleBlockType:function(a,c){var d=a.getSelection(),e=d.getStartKey(),f=d.getEndKey(),g=a.getCurrentContent(),h=d;if(e!==f&&d.getEndOffset()===0){var i=b("nullthrows")(g.getBlockBefore(f));f=i.getKey();h=h.merge({anchorKey:e,anchorOffset:d.getStartOffset(),focusKey:f,focusOffset:i.getLength(),isBackward:!1})}d=g.getBlockMap().skipWhile(function(a,b){return b!==e}).reverse().skipWhile(function(a,b){return b!==f}).some(function(a){return a.getType()==="atomic"});if(d)return a;i=g.getBlockForKey(e).getType()===c?"unstyled":c;return b("EditorState").push(a,b("DraftModifier").setBlockType(g,h,i),"change-block-type")},toggleCode:function(a){var b=a.getSelection(),c=b.getAnchorKey(),d=b.getFocusKey();return b.isCollapsed()||c!==d?g.toggleBlockType(a,"code-block"):g.toggleInlineStyle(a,"CODE")},toggleInlineStyle:function(a,c){var d=a.getSelection(),e=a.getCurrentInlineStyle();if(d.isCollapsed())return b("EditorState").setInlineStyleOverride(a,e.has(c)?e.remove(c):e.add(c));var f=a.getCurrentContent();e.has(c)?e=b("DraftModifier").removeInlineStyle(f,d,c):e=b("DraftModifier").applyInlineStyle(f,d,c);return b("EditorState").push(a,e,"change-inline-style")},toggleLink:function(a,c,d){c=b("DraftModifier").applyEntity(a.getCurrentContent(),c,d);return b("EditorState").push(a,c,"apply-entity")},tryToRemoveBlockStyle:function(a){var c=a.getSelection(),d=c.getAnchorOffset();if(c.isCollapsed()&&d===0){d=c.getAnchorKey();a=a.getCurrentContent();var e=a.getBlockForKey(d);e=e.getType();d=a.getBlockBefore(d);if(e==="code-block"&&d&&d.getType()==="code-block"&&d.getLength()!==0)return null;if(e!=="unstyled")return b("DraftModifier").setBlockType(a,c,"unstyled")}return null}};e.exports=g}),null);/*FB_PKG_DELIM*/
__d("BasicVector",[],(function(a,b,c,d,e,f){a=function(){function a(a,b){this.x=a,this.y=b}var b=a.prototype;b.derive=function(b,c){return new a(b,c)};b.toString=function(){return"("+this.x+", "+this.y+")"};b.add=function(a,b){b===void 0&&(b=a.y,a=a.x);a=parseFloat(a);b=parseFloat(b);return this.derive(this.x+a,this.y+b)};b.mul=function(a,b){b===void 0&&(b=a);return this.derive(this.x*a,this.y*b)};b.div=function(a,b){b===void 0&&(b=a);return this.derive(this.x*1/a,this.y*1/b)};b.sub=function(a,b){if(arguments.length===1)return this.add(a.mul(-1));else return this.add(-a,-b)};b.distanceTo=function(a){return this.sub(a).magnitude()};b.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};b.rotate=function(a){return this.derive(this.x*Math.cos(a)-this.y*Math.sin(a),this.x*Math.sin(a)+this.y*Math.cos(a))};return a}();f["default"]=a}),66);
__d("DOMVector",["BasicVector","getDocumentScrollElement","getElementPosition","getUnboundedScrollPosition","getViewportDimensions"],(function(a,b,c,d,e,f,g){a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c,d){b=a.call(this,b,c)||this;b.domain=d||"pure";return b}var d=b.prototype;d.derive=function(a,c,d){return new b(a,c,d||this.domain)};d.add=function(c,d){c instanceof b&&c.getDomain()!=="pure"&&(c=c.convertTo(this.domain));return a.prototype.add.call(this,c,d)};d.convertTo=function(a){if(a!="pure"&&a!="viewport"&&a!="document")return this.derive(0,0);if(a==this.domain)return this.derive(this.x,this.y,this.domain);if(a=="pure")return this.derive(this.x,this.y);if(this.domain=="pure")return this.derive(0,0);var c=b.getScrollPosition("document"),d=this.x,e=this.y;this.domain=="document"?(d-=c.x,e-=c.y):(d+=c.x,e+=c.y);return this.derive(d,e,a)};d.getDomain=function(){return this.domain};b.from=function(a,c,d){return new b(a,c,d)};b.getScrollPosition=function(a){a=a||"document";var b=c("getUnboundedScrollPosition")(window);return this.from(b.x,b.y,"document").convertTo(a)};b.getElementPosition=function(a,b){b=b||"document";a=c("getElementPosition")(a);return this.from(a.x,a.y,"viewport").convertTo(b)};b.getElementDimensions=function(a){return this.from(a.offsetWidth||0,a.offsetHeight||0)};b.getViewportDimensions=function(){var a=c("getViewportDimensions")();return this.from(a.width,a.height,"viewport")};b.getLayoutViewportDimensions=function(){var a=c("getViewportDimensions").layout();return this.from(a.width,a.height,"viewport")};b.getViewportWithoutScrollbarDimensions=function(){var a=c("getViewportDimensions").withoutScrollbars();return this.from(a.width,a.height,"viewport")};b.getDocumentDimensions=function(a){a=c("getDocumentScrollElement")(a);return this.from(a.scrollWidth,a.scrollHeight,"document")};return b}(c("BasicVector"));g["default"]=a}),98);
__d("Vector",["DOMVector","Event","Scroll"],(function(a,b,c,d,e,f,g){a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c,d){return a.call(this,parseFloat(b),parseFloat(c),d)||this}var e=b.prototype;e.derive=function(a,c,d){return new b(a,c,d||this.domain)};e.setElementPosition=function(a){var b=this.convertTo("document");a.style.left=parseInt(b.x,10)+"px";a.style.top=parseInt(b.y,10)+"px";return this};e.setElementDimensions=function(a){return this.setElementWidth(a).setElementHeight(a)};e.setElementWidth=function(a){a.style.width=parseInt(this.x,10)+"px";return this};e.setElementHeight=function(a){a.style.height=parseInt(this.y,10)+"px";return this};e.scrollElementBy=function(a){a==document.body?window.scrollBy(this.x,this.y):(d("Scroll").setLeft(a,d("Scroll").getLeft(a)+this.x),d("Scroll").setTop(a,d("Scroll").getTop(a)+this.y));return this};b.from=function(a,c,d){return new b(a,c,d)};b.getEventPosition=function(a,b){b===void 0&&(b="document");a=c("Event").getPosition(a);a=this.from(a.x,a.y,"document");return a.convertTo(b)};b.getTouchEventPosition=function(a,b){b===void 0&&(b="document");a=a.touches[0];a=this.from(a.pageX,a.pageY,"document");return a.convertTo(b)};b.deserialize=function(a){a=a.split(",");return this.from(a[0],a[1])};return b}(c("DOMVector"));g["default"]=a}),98);
__d("Rect",["invariant","$","Vector","react"],(function(a,b,c,d,e,f,g,h){d("react");a=function(){function a(b,d,e,f,g){if(arguments.length===1){if(b instanceof a)return b;if(b instanceof c("Vector"))return new a(b.y,b.x,b.y,b.x,b.domain);typeof b==="string"&&(b=c("$")(b));return a.getElementBounds(b)}typeof b==="number"&&typeof d==="number"&&typeof e==="number"&&typeof f==="number"&&(!g||typeof g==="string")||h(0,1087);Object.assign(this,{t:b,r:d,b:e,l:f,domain:g||"pure"});return this}var b=a.prototype;b.w=function(){return this.r-this.l};b.h=function(){return this.b-this.t};b.getWidth=function(){return this.w()};b.getHeight=function(){return this.h()};b.toString=function(){return"(("+this.l+", "+this.t+"), ("+this.r+", "+this.b+"))"};b.contains=function(b){b=new a(b).convertTo(this.domain);var c=this;return c.l<=b.l&&c.r>=b.r&&c.t<=b.t&&c.b>=b.b};b.intersection=function(b){b=b.convertTo(this.domain);var c=Math.min(this.b,b.getBottom()),d=Math.max(this.l,b.getLeft()),e=Math.min(this.r,b.getRight());b=Math.max(this.t,b.getTop());return c>b&&e>d?new a(b,e,c,d):null};b.isEqualTo=function(a){return this.t===a.t&&this.r===a.r&&this.b===a.b&&this.l===a.l&&this.domain===a.domain};b.add=function(b,d){if(arguments.length==1){b instanceof a&&b.domain!="pure"&&(b=b.convertTo(this.domain));return b instanceof c("Vector")?this.add(b.x,b.y):this}var e=parseFloat(b),f=parseFloat(d);return new a(this.t+f,this.r+e,this.b+f,this.l+e,this.domain)};b.sub=function(a,b){if(arguments.length==1&&a instanceof c("Vector"))return this.add(a.mul(-1));else if(typeof a==="number"&&typeof b==="number")return this.add(-a,-b);return this};b.rotateAroundOrigin=function(b){var c=this.getCenter().rotate(b*Math.PI/2),d=0;b%2?(d=this.h(),b=this.w()):(d=this.w(),b=this.h());var e=c.y-b/2;c=c.x-d/2;b=e+b;d=c+d;return new a(e,d,b,c,this.domain)};b.boundWithin=function(a){var b=0,c=0;this.l<a.l?b=a.l-this.l:this.r>a.r&&(b=a.r-this.r);this.t<a.t?c=a.t-this.t:this.b>a.b&&(c=a.b-this.b);return this.add(b,c)};b.getCenter=function(){return new(c("Vector"))(this.l+this.w()/2,this.t+this.h()/2,this.domain)};b.getTop=function(){return this.t};b.getRight=function(){return this.r};b.getBottom=function(){return this.b};b.getLeft=function(){return this.l};b.getArea=function(){return(this.b-this.t)*(this.r-this.l)};b.getPositionVector=function(){return new(c("Vector"))(this.l,this.t,this.domain)};b.getDimensionVector=function(){return new(c("Vector"))(this.w(),this.h(),"pure")};b.convertTo=function(b){if(this.domain==b)return this;if(b=="pure")return new a(this.t,this.r,this.b,this.l,"pure");if(this.domain=="pure")return new a(0,0,0,0);var d=new(c("Vector"))(this.l,this.t,this.domain).convertTo(b);return new a(d.y,d.x+this.w(),d.y+this.h(),d.x,b)};a.deserialize=function(b){b=b.split(":");return new a(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3]),parseFloat(b[0]))};a.newFromVectors=function(b,c){return new a(b.y,b.x+c.x,b.y+c.y,b.x,b.domain)};a.getElementBounds=function(b){return a.newFromVectors(c("Vector").getElementPosition(b),c("Vector").getElementDimensions(b))};a.getViewportBounds=function(){return a.newFromVectors(c("Vector").getScrollPosition(),c("Vector").getViewportDimensions())};a.getViewportWithoutScrollbarsBounds=function(){return a.newFromVectors(c("Vector").getScrollPosition(),c("Vector").getViewportWithoutScrollbarDimensions())};a.minimumBoundingBox=function(b){var c=new a(Infinity,-Infinity,-Infinity,Infinity),d;for(var e=0;e<b.length;e++)d=b[e],c.t=Math.min(c.t,d.t),c.r=Math.max(c.r,d.r),c.b=Math.max(c.b,d.b),c.l=Math.min(c.l,d.l);return c};return a}();g["default"]=a}),98);
__d("fbjs/lib/emptyFunction",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=b("emptyFunction")}),null);
__d("prop-types/lib/ReactPropTypesSecret",[],(function(a,b,c,d,e,f){"use strict";a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a}),null);
__d("prop-types/checkPropTypes",["fbjs/lib/invariant","fbjs/lib/warning","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,b,c,d,e){}e.exports=a}),null);
__d("ReactFbPropTypes",["FbtResultBase","warning"],(function(a,b,c,d,e,f){function a(a){var c=function(c,d,e,f,g,h,i){var j=d[e];if(j instanceof b("FbtResultBase"))return null;if(c)return a.isRequired(d,e,f,g,h,i);else return a(d,e,f,g,h,i)},d=c.bind(null,!1);d.isRequired=c.bind(null,!0);return d}f.wrapStringTypeChecker=a}),null);
__d("prop-types/prop-types",["fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning","prop-types/checkPropTypes","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){var g,h=function(){b("fbjs/lib/invariant")(0,1492)};a=function(){return h};h.isRequired=h;c={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:a,element:h,instanceOf:a,node:h,objectOf:a,oneOf:a,oneOfType:a,shape:a};c.checkPropTypes=b("fbjs/lib/emptyFunction");c.PropTypes=c;e.exports=c}),null);
__d("prop-types",["ReactFbPropTypes","prop-types/prop-types"],(function(a,b,c,d,e,f){e.exports=b("prop-types/prop-types")}),null);