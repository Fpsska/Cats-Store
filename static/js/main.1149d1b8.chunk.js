(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(18),s=a.n(n),i=a(9),o=a(11),l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))},d=a(17),u=a(25),j=a(26),b=a(6),O=a(3),m="ACTION_FETCH_CARDS",_="ACTION_FETCH_CARDS_DATA_TOGGLE",f="ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS",p="ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE",h="ACTION_SET_GIF_DATA",x="ACTION_FETCH_GIF_DATA_TOGGLE",v="ACTION_SET_GIF_DATA_ERROR_STATUS",g="ACTION_SET_GIF_DATA_ERROR_MESSAGE",N="ACTION_SET_LIKED_CARDS_DATA",y="ACTION_SET_FAVOURITE_STATUS",E="ACTION_SET_NOTIFICATION_VISIBLE_STATUS",S="ACTION_SORT_CARDS_PRICE_DECREASE",C="ACTION_SORT_CARDS_PRICE_INCREASE",T="ACTION_SORT_CARDS_AGE_DECREASE",A="ACTION_SORT_CARDS_AGE_INCREASE",R="ACTION_SET_FILTERED_CARDS_DATA",F="ACTION_SET_FILTERED_STATUS",k=function(e){return{type:m,payload:e}},D=function(e){return{type:_,payload:{value:e}}},w=function(e){return{type:p,payload:{value:e}}},I=function(e){return{type:h,payload:e}},L=function(e){return{type:x,payload:{value:e}}},B=function(e){return{type:g,payload:{value:e}}},V=function(e){return{type:E,payload:{status:e}}},M=function(e,t){return{type:y,payload:{id:e,status:t}}},P=function(e){return{type:R,payload:e}},G=function(e){return{type:F,payload:e}},H={cards:[],gifData:[],likedCardsData:[],filteredCardsData:[],sortButtons:[{id:"price",text:"Price",isSorted:!1},{id:"age",text:"Age",isSorted:!1}],isCardsDataFetching:!0,isCardsDataFetchError:!1,cardsDataFetchErrorMessage:"error from fetchCardsData thunk",isGifDataFetching:!0,isGifDataFetchError:!1,gifDataFetchErrorMessage:"error from fetchGifData thunk",isNotificationVisible:!1,isDataFiltered:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(O.a)(Object(O.a)({},e),{},{cards:[].concat(Object(b.a)(e.cards),Object(b.a)(t.payload))});case _:return Object(O.a)(Object(O.a)({},e),{},{isCardsDataFetching:t.payload.value});case f:return Object(O.a)(Object(O.a)({},e),{},{isCardsDataFetchError:t.payload.value});case p:return Object(O.a)(Object(O.a)({},e),{},{cardsDataFetchErrorMessage:t.payload.value});case h:return Object(O.a)(Object(O.a)({},e),{},{gifData:t.payload});case x:return Object(O.a)(Object(O.a)({},e),{},{isGifDataFetching:t.payload.value});case v:return Object(O.a)(Object(O.a)({},e),{},{isGifDataFetchError:t.payload.value});case g:return Object(O.a)(Object(O.a)({},e),{},{gifDataFetchErrorMessage:t.payload.value});case y:return Object(O.a)(Object(O.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload.id?Object(O.a)(Object(O.a)({},e),{},{isFavourite:t.payload.status}):e}))});case N:return Object(O.a)(Object(O.a)({},e),{},{likedCardsData:e.cards.filter((function(e){return!0===e.isFavourite}))});case E:return Object(O.a)(Object(O.a)({},e),{},{isNotificationVisible:t.payload.status});case S:return Object(O.a)(Object(O.a)({},e),{},{cards:Object(b.a)(e.cards.sort((function(e,t){return t.price-e.price}))),sortButtons:e.sortButtons.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{isSorted:t.payload.status})}))});case C:return Object(O.a)(Object(O.a)({},e),{},{cards:Object(b.a)(e.cards.sort((function(e,t){return e.price-t.price}))),sortButtons:e.sortButtons.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{isSorted:t.payload.status})}))});case T:return Object(O.a)(Object(O.a)({},e),{},{cards:Object(b.a)(e.cards.sort((function(e,t){return parseInt(t.age)-parseInt(e.age)}))),sortButtons:e.sortButtons.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{isSorted:t.payload.status})}))});case A:return Object(O.a)(Object(O.a)({},e),{},{cards:Object(b.a)(e.cards.sort((function(e,t){return parseInt(e.age)-parseInt(t.age)}))),sortButtons:e.sortButtons.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{isSorted:t.payload.status})}))});case R:return Object(O.a)(Object(O.a)({},e),{},{filteredCardsData:e.likedCardsData.filter((function(e){return e.price<=t.payload}))});case F:return Object(O.a)(Object(O.a)({},e),{},{isDataFiltered:t.payload});default:return e}},z="ACTION_CHANGE_NAV_DISPLAY",W="ACTION_SET_INPUT_VALUE",Y="ACTION_CHANGE_MAIN_PAGE_STATUS",$="ACTION_CHANGE_OVERVIEW_PAGE_STATUS",q="ACTION_CHANGE_BURGER_STATUS",J=function(e){return{type:z,payload:e}},K=function(e){return{type:W,payload:e}},Q=function(e){return{type:Y,payload:e}},X=function(e){return{type:$,payload:e}},Z=function(e){return{type:q,payload:e}},ee={headerLinks:[{id:1,text:"Main",link:"/Cats-Store/"},{id:2,text:"Favourite",link:"Favourite"},{id:3,text:"Live",link:"Live"},{id:4,text:"Profile",link:"Profile"}],isBurgerHidden:!0,isBurgerOpen:!1,isBodyScrolling:!0,isHomePage:!0,isOverviewPage:!1,emailValue:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(O.a)(Object(O.a)({},e),{},{isBurgerHidden:t.payload});case W:return Object(O.a)(Object(O.a)({},e),{},{emailValue:t.payload});case Y:return Object(O.a)(Object(O.a)({},e),{},{isHomePage:t.payload});case $:return Object(O.a)(Object(O.a)({},e),{},{isOverviewPage:t.payload});case q:return Object(O.a)(Object(O.a)({},e),{},{isBurgerOpen:t.payload});default:return e}},ae="ACTION_SET_FORM_ALERT_VISIBLE_STATUS",ce="ACTION_SET_FORM_SUBMIT_STATUS",re=function(e){return{type:ae,payload:e}},ne={isFormAlertVisible:!1,isFormSubmitted:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(O.a)(Object(O.a)({},e),{},{isFormAlertVisible:t.payload});case ce:return Object(O.a)(Object(O.a)({},e),{},{isFormSubmitted:t.payload});default:return e}},ie="ACTION_SET_CURRENT_RANGE_VALUE",oe=function(e){return{type:ie,payload:e}},le={inputRangeTotalValue:1e4,inputRangeMinValue:1500,currentRangeValue:0},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type===ie?Object(O.a)(Object(O.a)({},e),{},{currentRangeValue:t.payload}):e},ue=Object(d.combineReducers)({cardReducer:U,headerReducer:te,formReducer:se,filterReducer:de}),je=Object(d.createStore)(ue,Object(u.composeWithDevTools)(Object(d.applyMiddleware)(j.a))),be=a(4),Oe=function(){return Object(i.b)()},me=i.c,_e=a.p+"static/media/logo.c8358bcd.svg";var fe=a(1),pe=function(e){var t=e.isBurgerHidden,a=e.link,c=e.text,r=function(){var e=Object(i.b)();return{handlePageName:function(t){switch(t.pageName){case"Main":e(Q(!0)),e(V(!1)),e(X(!1));break;case"Favourite":e(X(!1));break;case"Live":e(X(!0));break;default:return}}}}(),n=r.handlePageName,s=Oe();return Object(fe.jsx)("li",{className:t?"nav__menu_item":"nav__menu_item-burger",children:Object(fe.jsx)(o.c,{to:a,className:t?"nav__menu_link":"nav__menu_link-burger",onClick:function(){return function(e){s(Q(!1)),s(Z(!1)),n({pageName:e}),document.body.style.overflowY="auto"}(c)},children:c})})},he=function(e){var t=e.headerLinks,a=e.isBurgerHidden;return Object(fe.jsx)("nav",{className:"nav",children:Object(fe.jsx)("ul",{className:a?"nav__menu":"nav__menu-burger",children:t.map((function(e){return Object(fe.jsx)(pe,Object(O.a)(Object(O.a)({},e),{},{isBurgerHidden:a}),e.id)}))})})},xe=(a(38),function(e){var t=e.headerLinks,a=e.isBurgerOpen,r=Oe();return Object(c.useEffect)((function(){var e=function(e){a&&"Escape"===e.code&&r(Z(!1))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[a]),Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsxs)("div",{className:"menu",onClick:function(){r(Z(!a)),document.body.style.overflowY=a?"auto":"hidden"},children:[Object(fe.jsx)("div",{className:a?"menu__line menu__line-top opened":"menu__line menu__line-top"}),Object(fe.jsx)("div",{className:a?"menu__line menu__line-middle opened":"menu__line menu__line-middle"}),Object(fe.jsx)("div",{className:a?"menu__line menu__line-bottom opened":"menu__line menu__line-bottom"})]}),Object(fe.jsx)("div",{className:a?"burger active":"burger",children:Object(fe.jsx)("div",{className:"burger__nav",children:Object(fe.jsx)(he,{headerLinks:t})})})]})}),ve=(a(39),function(){return Object(fe.jsxs)("h1",{className:"loader",children:["Loading",Object(fe.jsx)("span",{className:"loader__dot"}),Object(fe.jsx)("span",{className:"loader__dot"}),Object(fe.jsx)("span",{className:"loader__dot"})]})}),ge=(a(40),function(){var e=me((function(e){return e.headerReducer})),t=e.headerLinks,a=e.isBurgerHidden,r=e.isBurgerOpen,n=e.isHomePage,s=e.isOverviewPage,i=me((function(e){return e.cardReducer})),o=i.isCardsDataFetching,l=i.isCardsDataFetchError,d=i.isDataFiltered,u=i.cards,j=i.likedCardsData,b=i.filteredCardsData,O=Object(c.useRef)("cat"),m=Oe(),_=function(){window.innerWidth<800?m(J(!1)):window.innerWidth>800&&m(J(!0))};return Object(c.useLayoutEffect)((function(){return window.addEventListener("resize",_),window.addEventListener("load",_),function(){window.removeEventListener("resize",_),window.removeEventListener("load",_)}}),[]),Object(c.useEffect)((function(){1===j.length&&(O.current="cat"),j.length>=2&&(O.current="cats"),0===b.length&&(O.current="cat"),1===b.length&&(O.current="cat"),b.length>=2&&(O.current="cats")}),[j,b,d]),Object(fe.jsx)("header",{className:"header",children:Object(fe.jsxs)("div",{className:"container",children:[Object(fe.jsxs)("section",{className:"header__section",children:[Object(fe.jsx)("a",{className:"header__logo logo",href:"#",children:Object(fe.jsx)("img",{className:"logo__image",src:_e,alt:"logo"})}),Object(fe.jsx)(fe.Fragment,{children:a?Object(fe.jsx)(he,{headerLinks:t,isBurgerHidden:a}):Object(fe.jsx)(xe,{headerLinks:t,isBurgerOpen:r})}),Object(fe.jsxs)("div",{className:"header__telephone telephone",children:[Object(fe.jsx)("a",{className:"telephone__number",href:"tel:+544 3490 00000",children:"+544 3490 00000"}),Object(fe.jsx)("span",{className:"telephone__description",children:"Call soon!"})]})]}),Object(fe.jsx)(fe.Fragment,{children:Object(fe.jsx)(fe.Fragment,{children:o?Object(fe.jsx)(ve,{}):Object(fe.jsx)(fe.Fragment,{children:n?Object(fe.jsx)("h1",{className:"header__text",children:"Found ".concat(l?"0":u.length," cats")}):s?Object(fe.jsx)("h1",{className:"header__text",children:"Have a good day ;)"}):Object(fe.jsx)("h1",{className:"header__text",children:"Selected ".concat(l?"0":d?b.length:j.length," ").concat(O.current)})})})})]})})}),Ne=a(5),ye=(a(41),function(){var e=me((function(e){return e.headerReducer})).emailValue,t=me((function(e){return e.formReducer})),a=t.isFormAlertVisible,r=t.isFormSubmitted,n=Object(c.useState)(!1),s=Object(Ne.a)(n,2),i=s[0],o=s[1],l=Object(c.useRef)(null),d=Oe(),u=function(e){e.preventDefault(),d(re(!0)),d({type:ce,payload:!0})};return Object(c.useEffect)((function(){var e;r&&!a&&(null===(e=l.current)||void 0===e||e.reset(),d(K("")),o(!0),setTimeout((function(){o(!1)}),1e4))}),[a,r]),Object(fe.jsx)("footer",{className:"footer",children:Object(fe.jsx)("div",{className:"container",children:Object(fe.jsxs)("section",{className:"footer__wrapper",children:[Object(fe.jsxs)("article",{className:"footer__description",children:[Object(fe.jsx)("h2",{className:"footer__title",children:"Hurry up to buy!"}),Object(fe.jsx)("p",{className:"footer__subtitle",children:"Subscribe and catch all the promotions"})]}),Object(fe.jsxs)("form",{ref:l,className:"form",onSubmit:function(e){return u(e)},children:[Object(fe.jsxs)("div",{className:"form__controls",children:[Object(fe.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",disabled:i,required:!0,value:e,onChange:function(e){return d(K(e.target.value))}}),Object(fe.jsx)("button",{className:"form__button button",disabled:i,children:"Subscribe"})]}),Object(fe.jsxs)("label",{className:"form__cheakbox-label",children:["Subscribe to news",Object(fe.jsx)("input",{className:"form__cheakbox-input",type:"checkbox",disabled:i,required:!0})]})]})]})})})}),Ee=a(14),Se=a.n(Ee),Ce=a(19),Te=a.p+"static/media/no_photo.bb351cb8.png",Ae=function(){var e=Math.floor(10*Math.random());return function(){var t=Object(Ce.a)(Se.a.mark((function t(a){var c,r,n;return Se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=".concat(e));case 3:return(c=t.sent).ok||(a(w("Error: There are some problems with response of breeds data")),console.error("There are some problems with response")),t.next=7,c.json();case 7:r=t.sent,n=[],r.forEach((function(e){e.image||(e.image={url:Te}),n.push({id:"".concat(Math.random()+e.id),image:e.image.url,name:e.name,location:e.origin,paw:"4",age:"".concat(Math.floor(12*Math.random())+1," mth."),price:+Math.floor(1e4*Math.random()),discount:"-".concat(Math.floor(60*Math.random())+10,"%"),discountStatus:Boolean(Math.round(Math.random())),cardStatus:Boolean(Math.round(Math.random())),isFavourite:!1})})),a(k(n)),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),a(w("Error: ".concat(t.t0.message," breeds data."))),a({type:f,payload:{value:!0}}),console.error(t.t0.message);case 18:return t.prev=18,setTimeout((function(){a(D(!1))}),2600),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,13,18,21]])})));return function(e){return t.apply(this,arguments)}}()},Re=function(){return function(){var e=Object(Ce.a)(Se.a.mark((function e(t){var a,c,r;return Se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.thecatapi.com/v1/images/search?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=8&size=full&mime_types=gif");case 3:return(a=e.sent).ok||(t(B("Error: There are some problems with response of gifs data")),console.error("There are some problems with response")),e.next=7,a.json();case 7:c=e.sent,r=[],c.forEach((function(e){r.push({id:"".concat(Math.random()+e.id),image:e.url})})),t(I(r)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),t(B("Error: ".concat(e.t0.message," gifs data."))),t({type:v,payload:{value:!0}}),console.error(e.t0.message);case 18:return e.prev=18,setTimeout((function(){t(L(!1))}),2600),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,13,18,21]])})));return function(t){return e.apply(this,arguments)}}()},Fe=a(20),ke=(a(43),function(){var e=Oe();return Object(c.useEffect)((function(){var t=function(t){"Escape"===t.code&&e(re(!1))};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),Object(fe.jsx)("div",{className:"form-alert",children:Object(fe.jsxs)("div",{className:"form-alert__wrapper",children:[Object(fe.jsxs)("div",{className:"form-alert__description",children:[Object(fe.jsx)(Fe.a,{color:"#e52d2d",size:"24px"}),Object(fe.jsx)("p",{className:"form-alert__text",children:"Sorry! Function temporarily unavailable"})]}),Object(fe.jsx)("div",{className:"form-alert__controls",children:Object(fe.jsx)("button",{className:"form-alert__button",onClick:function(){e(re(!1))},children:"Ok"})})]})})}),De=function(){var e=me((function(e){return e.formReducer})).isFormAlertVisible,t=Object(i.b)();return Object(c.useEffect)((function(){t(Ae()),t(Re())}),[]),Object(fe.jsxs)("div",{className:"page",children:[Object(fe.jsx)(fe.Fragment,{children:e&&Object(fe.jsx)(ke,{})}),Object(fe.jsx)(ge,{}),Object(fe.jsx)("main",{className:"main",children:Object(fe.jsx)(be.a,{})}),Object(fe.jsx)(ye,{})]})},we=a(16),Ie=a(27),Le=(a(44),function(e){var t=e.id,a=e.image,r=e.name,n=e.location,s=e.age,i=e.paw,o=e.price,l=e.discount,d=e.isFavourite,u=e.cardStatus,j=e.discountStatus,b=e.currentRangeValue,O=Object(c.useRef)(null),m=Oe();return Object(c.useEffect)((function(){O.current.classList.remove("unlike")}),[]),Object(fe.jsxs)("article",{className:"card",children:[Object(fe.jsxs)("div",{className:"card__preview",children:[Object(fe.jsxs)("div",{className:"card__icons",children:[Object(fe.jsx)(fe.Fragment,{children:j&&Object(fe.jsx)("span",{className:"card__icons_discount",children:l})}),Object(fe.jsx)("button",{ref:O,className:d?"card__icons_button like":"card__icons_button unlike",disabled:!u,onClick:function(){m(M(t,!d)),m({type:N}),m(P(b))},children:Object(fe.jsx)(Ie.a,{color:"#fff",size:"42px"})})]}),Object(fe.jsx)("img",{className:"card__image",src:a,alt:"cat",onError:function(e){e.target.src=Te,e.target.onerror=null}})]}),Object(fe.jsxs)("div",{className:"card__information",children:[Object(fe.jsx)("span",{className:"card__name",children:r}),Object(fe.jsxs)("ul",{className:"card__description description",children:[Object(fe.jsxs)("li",{className:"description__item description__item_location",children:["Location: ",Object(fe.jsx)("br",{}),Object(fe.jsx)("strong",{children:n})]}),Object(fe.jsxs)("li",{className:"description__item description__item_age",children:[Object(fe.jsx)("span",{className:"bold",children:s})," ",Object(fe.jsx)("br",{})," Age"]}),Object(fe.jsxs)("li",{className:"description__item description__item_paw",children:[Object(fe.jsx)("span",{className:"bold",children:i})," ",Object(fe.jsx)("br",{})," Paws count"]})]}),Object(fe.jsx)("span",{className:"card__price",children:"".concat(o," USD")})]}),Object(fe.jsx)("button",{className:u?"card__button button":"card__button-sold button",children:u?"Buy":"Sold"})]})}),Be=function(){var e=me((function(e){return e.cardReducer})),t=e.cards,a=e.likedCardsData,r=me((function(e){return e.headerReducer})).isHomePage,n=me((function(e){return e.filterReducer})).currentRangeValue,s=Object(c.useState)([]),i=Object(Ne.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){l(r?t:a)}),[t,a,r]),Object(fe.jsx)("div",{className:"gallery__cards",children:o.map((function(e){return Object(fe.jsx)(Le,Object(O.a)(Object(O.a)({},e),{},{currentRangeValue:n}),e.id)}))})};function Ve(){var e=Object(i.b)();return{defineSortOption:function(t){var a=t.name,c=t.status;switch(c){case"price"===a:e(function(e,t){return{type:S,payload:{id:e,status:t}}}(a,c));break;case"age"===a:e(function(e,t){return{type:T,payload:{id:e,status:t}}}(a,c));break;case"price"===a&&!1===c:e(function(e,t){return{type:C,payload:{id:e,status:t}}}(a,c));break;case"age"===a&&!1===c:e(function(e,t){return{type:A,payload:{id:e,status:t}}}(a,c))}}}}var Me=function(e){var t=e.id,a=e.text,r=e.isCardsDataFetching,n=e.isCardsDataFetchError,s=Object(c.useState)(!1),i=Object(Ne.a)(s,2),o=i[0],l=i[1],d=Ve().defineSortOption;return Object(fe.jsxs)("button",{className:"controls__menu",disabled:r||n,onClick:function(){l(!o),d({name:t,status:o})},children:[Object(fe.jsx)("span",{className:"controls__menu_text",children:a}),Object(fe.jsx)("span",{children:o?Object(fe.jsx)(we.b,{color:"#000",size:"26px"}):Object(fe.jsx)(we.a,{color:"#000",size:"26px"})})]})},Pe=(a(45),function(){var e=me((function(e){return e.cardReducer})),t=e.isCardsDataFetching,a=e.isCardsDataFetchError,c=e.sortButtons;return Object(fe.jsx)("div",{className:"controls__wrapper",children:c.map((function(e){return Object(fe.jsx)(Me,Object(O.a)(Object(O.a)({},e),{},{isCardsDataFetching:t,isCardsDataFetchError:a}),e.id)}))})}),Ge=(a(46),function(){return Object(fe.jsx)("div",{className:"preloader",children:Object(fe.jsxs)("div",{className:"lds-roller",children:[Object(fe.jsx)("div",{}),Object(fe.jsx)("div",{}),Object(fe.jsx)("div",{}),Object(fe.jsx)("div",{}),Object(fe.jsx)("div",{}),Object(fe.jsx)("div",{}),Object(fe.jsx)("div",{}),Object(fe.jsx)("div",{})]})})}),He=a(28),Ue=(a(47),function(){var e=me((function(e){return e.cardReducer})).likedCardsData,t=Object(c.useRef)(null),a=Oe();return Object(c.useEffect)((function(){var c,r,n;e.length>1&&e.length%2===0&&(a(V(!0)),null===(c=t.current)||void 0===c||c.classList.add("visible"),null===(r=t.current)||void 0===r||r.classList.add("opacity"),null===(n=t.current)||void 0===n||n.classList.remove("hide"),setTimeout((function(){var e,c;a(V(!1)),null===(e=t.current)||void 0===e||e.classList.remove("visible"),null===(c=t.current)||void 0===c||c.classList.add("hide")}),3500));0===e.length&&a(V(!1))}),[e]),Object(fe.jsx)("div",{ref:t,className:"alert",children:Object(fe.jsxs)("div",{className:"alert__wrapper",children:[Object(fe.jsx)("div",{className:"alert__notification",children:Object(fe.jsx)(o.b,{to:"Favourite",onClick:function(){a(Q(!1))},children:Object(fe.jsx)(Fe.a,{color:"#000",size:"22px"})})}),Object(fe.jsxs)("div",{className:"alert__information",children:[Object(fe.jsx)("span",{className:"alert__message",children:"Visit to Favourite page!"}),Object(fe.jsx)("span",{className:"alert__count",children:"".concat(e.length," in basket!")})]}),Object(fe.jsx)("button",{className:"alert__button",onClick:function(){var e,c;a(V(!1)),null===(e=t.current)||void 0===e||e.classList.remove("visible"),null===(c=t.current)||void 0===c||c.classList.add("hide")},children:Object(fe.jsx)(He.a,{color:"#000",size:"18px"})})]})})}),ze=function(){var e=me((function(e){return e.cardReducer})),t=e.isCardsDataFetching,a=e.isCardsDataFetchError,r=e.cardsDataFetchErrorMessage,n=Object(i.b)(),s=Object(c.useRef)(null);return Object(fe.jsxs)("div",{ref:s,className:"section",children:[Object(fe.jsx)("div",{className:"container",children:Object(fe.jsxs)("section",{className:"gallery",children:[Object(fe.jsxs)("div",{className:"controls",children:[Object(fe.jsx)("span",{className:"controls__title",children:"Sorted by:"}),Object(fe.jsx)(fe.Fragment,{children:Object(fe.jsx)(Pe,{})})]}),Object(fe.jsxs)("div",{className:"gallery__wrapper",children:[Object(fe.jsx)(fe.Fragment,{children:t?Object(fe.jsx)(Ge,{}):a?Object(fe.jsx)("div",{className:"error",children:r}):Object(fe.jsx)(Be,{})}),Object(fe.jsx)("button",{className:"gallery__button button",disabled:t||a,onClick:function(){n(Ae())},children:"Watch more"}),Object(fe.jsx)("button",{className:"pagination",disabled:t||a,onClick:function(){s.current.scrollIntoView({block:"start",behavior:"smooth"})},children:Object(fe.jsx)(we.b,{color:"#fff",size:"36px"})})]})]})}),Object(fe.jsx)(Ue,{})]})},We=a(12),Ye=a(24),$e=(a(48),function(){var e=me((function(e){return e.filterReducer})),t=e.inputRangeTotalValue,a=e.inputRangeMinValue,r=e.currentRangeValue,n=Object(c.useRef)(null),s=Object(c.useRef)(null),i=Object(c.useRef)(null),o=Oe();return Object(c.useEffect)((function(){o(oe(t)),o(P(t)),i.current.style.width="100%",s.current.style.left="100%"}),[]),Object(fe.jsxs)("form",{className:"filter",children:[Object(fe.jsx)("input",{ref:n,className:"filter__input",type:"range",value:r,min:a,max:t,step:"100",onChange:function(e){return function(e){var c=+e.target.value;o(oe(c)),o(P(c)),o(G(!0)),i.current.style.width=100*(c-a)/(t-a)+"%",s.current.style.left=100*(c-a)/(t-a)+"%"}(e)}}),Object(fe.jsx)("span",{className:"filter__progress",children:Object(fe.jsx)("span",{ref:i,className:"filter__progress-fill"})}),Object(fe.jsx)("span",{ref:s,className:"filter__current",children:r}),Object(fe.jsxs)("div",{className:"filter__indicators",children:[Object(fe.jsx)("span",{className:"filter__counter filter__counter--min",children:"".concat(a," $")}),Object(fe.jsx)("span",{className:"filter__counter filter__counter--max",children:"".concat(t," $")})]})]})}),qe=a.p+"static/media/empty.cd1884f0.png";a(49),a(50),a(51);We.b.use([We.a]);var Je=function(){var e=me((function(e){return e.filterReducer})).currentRangeValue,t=me((function(e){return e.cardReducer})),a=t.likedCardsData,r=t.filteredCardsData,n=t.isDataFiltered,s=Object(c.useState)(!0),i=Object(Ne.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(!0),u=Object(Ne.a)(d,2),j=u[0],b=u[1],m=Object(c.useState)(0),_=Object(Ne.a)(m,2),f=_[0],p=_[1],h=Object(c.useState)([]),x=Object(Ne.a)(h,2),v=x[0],g=x[1],N=Oe();return Object(c.useEffect)((function(){g(n?r:a)}),[r,a,n]),Object(c.useEffect)((function(){0===a.length?(l(!0),N(G(!1))):l(!1),0===r.length?b(!0):b(!1)}),[a,r]),Object(c.useEffect)((function(){p(v.reduce((function(e,t){return e+t.price}),0))}),[v]),Object(fe.jsx)("div",{className:"section",children:Object(fe.jsx)("section",{className:o?"basket empty":"basket",children:Object(fe.jsxs)("div",{className:"basket__wrapper",children:[o?Object(fe.jsx)(fe.Fragment,{}):Object(fe.jsxs)("div",{className:"basket__section",children:[Object(fe.jsx)("div",{className:"basket__price",children:Object(fe.jsxs)("div",{className:"price",children:[Object(fe.jsx)("h3",{className:"price__text",children:"Total price:"}),Object(fe.jsxs)("div",{className:"price__section",children:[Object(fe.jsx)("span",{className:"price__count",children:f}),Object(fe.jsx)("span",{className:"price__currency",children:"$"})]})]})}),Object(fe.jsx)("div",{className:"basket__filter",children:Object(fe.jsx)($e,{})})]}),Object(fe.jsx)("div",{className:o||j?"basket__slider empty":"basket__slider",children:o||j?Object(fe.jsxs)("div",{className:"empty",children:[Object(fe.jsx)("img",{className:"empty__preview",src:qe,alt:"empty"}),Object(fe.jsx)("h4",{className:"empty__text",children:"No matches"})]}):Object(fe.jsx)(fe.Fragment,{children:Object(fe.jsx)(Ye.a,{className:"mySwiper",slidesPerView:3,spaceBetween:5,breakpoints:{320:{slidesPerView:1,spaceBetween:30},360:{slidesPerView:1,spaceBetween:30},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2.5,spaceBetween:30}},children:v.map((function(t){return Object(fe.jsx)(Ye.b,{children:Object(fe.jsx)(Le,Object(O.a)(Object(O.a)({},t),{},{currentRangeValue:e}),t.id)},t.id)}))})})})]})})})},Ke=(a(52),function(){var e=me((function(e){return e.cardReducer})),t=e.gifData,a=e.isGifDataFetching,c=e.isGifDataFetchError,r=e.gifDataFetchErrorMessage,n=Object(i.b)();return Object(fe.jsx)("div",{className:"section",children:Object(fe.jsx)("div",{className:"container container--middle",children:Object(fe.jsx)("section",{className:"overview",children:Object(fe.jsxs)("div",{className:"overview__wrapper",children:[a?Object(fe.jsx)("div",{className:"overview__gallery",children:Object(fe.jsx)(Ge,{})}):c?Object(fe.jsx)("div",{className:"error",children:r}):Object(fe.jsx)("div",{className:"overview__gallery",children:t.map((function(e){return Object(fe.jsx)("div",{className:"overview__card",children:Object(fe.jsx)("img",{className:"overview__image",src:e.image,alt:"funny"})},e.id)}))}),Object(fe.jsx)("button",{className:"overview__button",onClick:function(){n(Re()),n(L(!0))},disabled:a||c,children:"Watch others"})]})})})})}),Qe=a.p+"static/media/in_process.448aa860.png",Xe=function(){var e=Object(be.g)(),t=Oe();return Object(fe.jsx)("div",{className:"section",children:Object(fe.jsxs)("article",{className:"section__wrapper",children:[Object(fe.jsx)("img",{className:"section__image",src:Qe,alt:"cat"}),Object(fe.jsx)("h1",{className:"section__title",children:"PROFILE PAGE IN PROCESS"}),Object(fe.jsxs)("p",{className:"section__link",children:["return to home"," ",Object(fe.jsx)("span",{children:Object(fe.jsx)(o.b,{to:"/Cats-Store",onClick:function(){t(Q(!0)),e("/Cats-Store",{replace:!0})},children:"age"})})]})]})})},Ze=a.p+"static/media/no_found.bee11de8.png",et=function(){var e=Object(be.g)(),t=Oe();return Object(fe.jsx)("div",{className:"section",children:Object(fe.jsxs)("article",{className:"section__wrapper",children:[Object(fe.jsx)("img",{className:"section__image",src:Ze,alt:"404 error"}),Object(fe.jsx)("h1",{className:"section__title section__title-error",children:"404"}),Object(fe.jsxs)("p",{className:"section__link",children:["Sorry, this page doesn't exist, return to home"," ",Object(fe.jsx)("span",{children:Object(fe.jsx)(o.b,{to:"/Cats-Store",onClick:function(){t(Q(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},tt=(a(53),a(54),a(55),function(){return Object(fe.jsx)("div",{className:"App",children:Object(fe.jsx)(be.d,{children:Object(fe.jsxs)(be.b,{path:"/Cats-Store",element:Object(fe.jsx)(De,{}),children:[Object(fe.jsx)(be.b,{index:!0,element:Object(fe.jsx)(ze,{})}),Object(fe.jsx)(be.b,{path:"Favourite",element:Object(fe.jsx)(Je,{})}),Object(fe.jsx)(be.b,{path:"Live",element:Object(fe.jsx)(Ke,{})}),Object(fe.jsx)(be.b,{path:"Profile",element:Object(fe.jsx)(Xe,{})}),Object(fe.jsx)(be.b,{path:"*",element:Object(fe.jsx)(et,{})})]})})})});s.a.render(Object(fe.jsx)(r.a.StrictMode,{children:Object(fe.jsx)(o.a,{children:Object(fe.jsx)(i.a,{store:je,children:Object(fe.jsx)(tt,{})})})}),document.getElementById("root")),l()}},[[56,1,2]]]);
//# sourceMappingURL=main.1149d1b8.chunk.js.map