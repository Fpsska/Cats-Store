(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(15),r=c.n(n),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},o=c(14),l=c(21),d=c(22),j=c(5),u=c(3),b="ACTION_SET_FAVOURITE_STATUS",O="ACTION_SET_LIKED_CARDS_DATA",h="ACTION_SET_NOTIFICATION_VISIBLE_STATUS",m="ACTION_SORT_CARDS_PRICE_DECREASE",_="ACTION_SORT_CARDS_PRICE_INCREASE",p="ACTION_SORT_CARDS_AGE_DECREASE",x="ACTION_SORT_CARDS_AGE_INCREASE",f="ACTION_FETCH_CARDS",g="ACTION_FETCH_TOGGLE",v="ACTION_SET_FETCH_ERROR_STATUS",N="ACTION_SET_FETCH_ERROR_MESSAGE",C=function(e){return{type:h,payload:{status:e}}},w=function(e){return{type:v,payload:{value:e}}},S=function(e){return{type:g,payload:{value:e}}},y=function(e){return{type:f,payload:e}},L=function(e,t){return{type:b,payload:{id:e,status:t}}},E=function(e,t){return{type:m,payload:{id:e,status:t}}},A=function(e,t){return{type:_,payload:{id:e,status:t}}},k=function(e,t){return{type:p,payload:{id:e,status:t}}},T=function(e,t){return{type:x,payload:{id:e,status:t}}},F={cards:[],likedCardsData:[],sortButtons:[{text:"Price",id:"price",isSorted:!1},{text:"Age",id:"age",isSorted:!1}],isFetching:!0,isFetchError:!1,fetchErrorMessage:"test",isNotificationVisible:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{isFavourite:t.payload.status}):e}))});case O:return Object(u.a)(Object(u.a)({},e),{},{likedCardsData:e.cards.filter((function(e){return!0===e.isFavourite}))});case f:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.concat(t.payload))});case g:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.payload.value});case N:return Object(u.a)(Object(u.a)({},e),{},{fetchErrorMessage:t.payload.value});case v:return Object(u.a)(Object(u.a)({},e),{},{isFetchError:t.payload.value});case h:return Object(u.a)(Object(u.a)({},e),{},{isNotificationVisible:t.payload.status});case m:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(t.price)-parseInt(e.price)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});case _:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(e.price)-parseInt(t.price)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});case p:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(t.age)-parseInt(e.age)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});case x:return Object(u.a)(Object(u.a)({},e),{},{cards:Object(j.a)(e.cards.sort((function(e,t){return parseInt(e.age)-parseInt(t.age)}))),sortButtons:e.sortButtons.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSorted:t.payload.status})}))});default:return e}},I="ACTION_CHANGE_NAV_DISPLAY",B="ACTION_SET_INPUT_VALUE",M="ACTION_CHANGE_PAGE_STATUS",P="ACTION_CHANGE_BURGER_STATUS",D=function(e){return{type:P,payload:e}},H=function(e){return{type:M,payload:e}},V=function(e){return{type:I,payload:e}},G={headerLinks:[{id:1,text:"Main",link:"/Cats-Store/"},{id:2,text:"Favourite",link:"Favourite"},{id:3,text:"News",link:"News"},{id:4,text:"Profile",link:"Profile"}],isBurgerHidden:!0,isBurgerOpen:!1,isBodyScrolling:!0,isHomePage:!0,emailValue:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(u.a)(Object(u.a)({},e),{},{isBurgerHidden:t.payload});case B:return Object(u.a)(Object(u.a)({},e),{},{emailValue:t.payload});case M:return Object(u.a)(Object(u.a)({},e),{},{isHomePage:t.payload});case P:return Object(u.a)(Object(u.a)({},e),{},{isBurgerOpen:t.payload});default:return e}},Z=Object(o.combineReducers)({cardReducer:R,headerReducer:U}),W=Object(o.createStore)(Z,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),Y=c(4),q=c(10),z=c(2),J=c(6),K=c(0),Q=function(e){switch(e.id){case"heart":return Object(K.jsx)("svg",{className:"icon__heart",width:"46",height:"42",viewBox:"0 0 46 42",fill:"#fff",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)("path",{d:"M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23 7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312 12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593 37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486 41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265 36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z",fill:"white"})});case"arrow":return Object(K.jsxs)("svg",{className:"icon__arrow",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(K.jsx)("g",{clipPath:"url(#clip0)",children:Object(K.jsx)("path",{d:"M8.29764 3.99939L0.287559 12.0096C0.102145 12.1949 -8.06437e-08 12.4422 -6.91167e-08 12.7059C-5.75898e-08 12.9696 0.102145 13.2169 0.287559 13.4022L0.87731 13.9921C1.2616 14.3759 1.88618 14.3759 2.26988 13.9921L8.99627 7.2657L15.7301 13.9996C15.9155 14.1848 16.1627 14.2871 16.4263 14.2871C16.6901 14.2871 16.9373 14.1848 17.1228 13.9995L17.7124 13.4097C17.8979 13.2242 18 12.9771 18 12.7134C18 12.4497 17.8979 12.2023 17.7124 12.0171L9.69504 3.99939C9.50904 3.81368 9.26071 3.71168 8.99671 3.71227C8.73169 3.71168 8.48349 3.81368 8.29764 3.99939Z",fill:"white"})}),Object(K.jsx)("defs",{children:Object(K.jsx)("clipPath",{id:"clip0",children:Object(K.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0 18) rotate(-90)"})})})]});case"logo":return Object(K.jsxs)("svg",{className:"icon__logo",width:"78",height:"52",viewBox:"0 0 78 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(K.jsx)("path",{d:"M63.0559 15.8815L54.2119 15.8947L27.8012 40.7922H10.0354V23.4593L34.2348 0.848633L17.993 0.899213L0 17.6625V51.1511H34.0283L63.0418 23.5687L63.0559 15.8815Z",fill:"white"}),Object(K.jsx)("path",{d:"M43.9721 0.848633L14.9586 28.4318L14.9453 36.1182L23.7884 36.1049L50.1991 11.2075H67.9649V28.5404L43.7656 51.1511L60.0074 51.1013L78.0004 34.338V0.848633H43.9721Z",fill:"white"})]});case"arrow-sort":return Object(K.jsxs)("svg",{className:"icon__arrow-sort",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(K.jsx)("g",{clipPath:"url(#clip0_5:133)",children:Object(K.jsx)("path",{d:"M8.0853 11.6669L14.7604 4.99166C14.9149 4.83727 15 4.63118 15 4.41142C15 4.19167 14.9149 3.98557 14.7604 3.83118L14.2689 3.3396C13.9487 3.01973 13.4282 3.01973 13.1084 3.3396L7.50311 8.94492L1.89157 3.33338C1.73706 3.17899 1.53109 3.09375 1.31146 3.09375C1.09158 3.09375 0.885606 3.17899 0.730973 3.33338L0.239635 3.82496C0.0851249 3.97947 3.76698e-06 4.18545 3.75737e-06 4.4052C3.74777e-06 4.62496 0.0851249 4.83105 0.239635 4.98544L6.9208 11.6669C7.0758 11.8216 7.28275 11.9066 7.50275 11.9061C7.7236 11.9066 7.93042 11.8216 8.0853 11.6669Z",fill:"black"})}),Object(K.jsx)("defs",{children:Object(K.jsx)("clipPath",{id:"clip0_5:133",children:Object(K.jsx)("rect",{width:"15",height:"15",fill:"white",transform:"translate(15) rotate(90)"})})})]});case"close":return Object(K.jsx)("svg",{className:"icon__close",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.00004 8.70711L11.6465 12.3536L12.3536 11.6465L8.70714 8.00001L12.3536 4.35356L11.6465 3.64645L8.00004 7.2929L4.35359 3.64645L3.64648 4.35356L7.29293 8.00001L3.64648 11.6465L4.35359 12.3536L8.00004 8.70711Z",fill:""})});case"notification":return Object(K.jsx)("svg",{className:"icon__notification",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.5682 1.03128C10.1593 1.19039 11.6434 1.90518 12.7598 3.04996C13.9762 4.28555 14.6953 5.92552 14.7801 7.65726C14.8649 9.38899 14.3096 11.0913 13.2199 12.4398C12.2176 13.6857 10.8111 14.5416 9.2441 14.8594C7.67708 15.1772 6.04826 14.9369 4.63985 14.18C3.22843 13.4066 2.12659 12.1706 1.51986 10.68C0.910415 9.18166 0.829286 7.52043 1.28985 5.96988C1.74942 4.42537 2.72779 3.0868 4.05984 2.17996C5.38083 1.27892 6.9771 0.87217 8.5682 1.03128ZM9.03988 13.8799C10.3827 13.6075 11.5886 12.8756 12.4499 11.81C13.3825 10.6509 13.857 9.18961 13.7832 7.70376C13.7095 6.21792 13.0926 4.81093 12.0498 3.74991C11.0947 2.77492 9.82729 2.16667 8.46914 2.0314C7.11099 1.89613 5.7485 2.24247 4.61983 3.00992C3.77027 3.59531 3.08425 4.38792 2.62673 5.31265C2.16921 6.23738 1.95535 7.26359 2.00542 8.2941C2.0555 9.3246 2.36784 10.3253 2.91286 11.2013C3.45789 12.0773 4.21752 12.7997 5.11983 13.3C6.31816 13.9467 7.70562 14.1519 9.03988 13.8799ZM7.37482 6L8.62482 6L8.62482 5L7.37482 5L7.37482 6ZM8.62482 7L8.62482 11L7.37482 11L7.37482 7L8.62482 7Z",fill:""})});default:return Object(K.jsx)("svg",{className:"empty"})}},X=function(e){var t=e.isBurgerHidden,c=e.link,s=e.text,a=Object(Y.b)();return Object(K.jsx)("li",{className:t?"nav__menu_item":"nav__menu_item-burger",children:Object(K.jsx)(q.c,{to:c,className:t?"nav__menu_link":"nav__menu_link-burger",onClick:function(){a(H(!1)),a(D(!1)),"Main"===s&&(a(H(!0)),a(C(!1))),document.body.style.overflowY="auto"},children:s})})},$=function(e){var t=e.headerLinks,c=e.isBurgerHidden,a=Object(s.useMemo)((function(){return t.map((function(e){return Object(K.jsx)(X,{text:e.text,link:e.link,isBurgerHidden:c},e.id)}))}),[t]);return Object(K.jsx)("nav",{className:"nav",children:Object(K.jsx)("ul",{className:c?"nav__menu":"nav__menu-burger",children:a})})},ee=(c(33),function(e){var t=e.headerLinks,c=e.isBurgerOpen,s=Object(Y.b)(),a=function(){return document.body.style.paddingRight="".concat(window.innerWidth-document.body.clientWidth)};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)("div",{className:"menu",onClick:function(){s(D(!c)),document.body.style.overflowY=!0===c?"auto":"hidden",a()},children:[Object(K.jsx)("div",{className:c?"menu__line menu__line-top opened":"menu__line menu__line-top"}),Object(K.jsx)("div",{className:c?"menu__line menu__line-middle opened":"menu__line menu__line-middle"}),Object(K.jsx)("div",{className:c?"menu__line menu__line-bottom opened":"menu__line menu__line-bottom"})]}),Object(K.jsx)("div",{className:c?"burger active":"burger",children:Object(K.jsx)("div",{className:"burger__nav",children:Object(K.jsx)($,{headerLinks:t})})})]})}),te=(c(34),function(){var e=Object(Y.c)((function(e){return e.headerReducer})),t=e.headerLinks,c=e.isBurgerHidden,a=e.isBurgerOpen,n=e.isHomePage,r=Object(Y.c)((function(e){return e.cardReducer})),i=r.isFetching,o=r.isFetchError,l=r.cards,d=r.likedCardsData,j=Object(s.useState)("cats"),u=Object(J.a)(j,2),b=(u[0],u[1]),O=Object(Y.b)(),h=function(){window.innerWidth<800?O(V(!1)):window.innerWidth>800&&O(V(!0))};return Object(s.useLayoutEffect)((function(){return window.addEventListener("resize",h),window.addEventListener("load",h),function(){window.removeEventListener("resize",h),window.removeEventListener("load",h)}}),[]),Object(s.useEffect)((function(){1===d.length&&b("cat"),d.length>=2&&b("cats")}),[o,d]),Object(K.jsx)("header",{className:"header",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{className:"header__section",children:[Object(K.jsx)("span",{className:"icon",children:Object(K.jsx)(Q,{id:"logo"})}),Object(K.jsx)(K.Fragment,{children:c?Object(K.jsx)($,{headerLinks:t,isBurgerHidden:c}):Object(K.jsx)(ee,{headerLinks:t,isBurgerOpen:a})}),Object(K.jsxs)("div",{className:"header__telephone telephone",children:[Object(K.jsx)("a",{className:"telephone__number",href:"tel:+544 3490 00000",children:"+544 3490 00000"}),Object(K.jsx)("span",{className:"telephone__description",children:"Call soon!"})]})]}),Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(K.Fragment,{children:i?Object(K.jsxs)("h1",{className:"header__text header__text--loading",children:["Loading",Object(K.jsx)("span",{className:"header__text_dot"}),Object(K.jsx)("span",{className:"header__text_dot"}),Object(K.jsx)("span",{className:"header__text_dot"})]}):Object(K.jsx)(K.Fragment,{children:n?Object(K.jsxs)("h1",{className:"header__text",children:["Found ",o?"0":l.length," cats"]}):Object(K.jsxs)("h1",{className:"header__text",children:["Selected ",o?"0":d.length," cats"]})})})})]})})}),ce=(c(35),function(){var e=Object(Y.c)((function(e){return e.headerReducer})).emailValue,t=Object(Y.b)();return Object(K.jsx)("footer",{className:"footer",children:Object(K.jsx)("div",{className:"container",children:Object(K.jsxs)("div",{className:"footer__wrapper",children:[Object(K.jsxs)("div",{className:"footer__description",children:[Object(K.jsx)("h2",{className:"footer__title",children:"Hurry up to buy!"}),Object(K.jsx)("p",{className:"footer__subtitle",children:"Subscribe and catch all the promotions"})]}),Object(K.jsxs)("form",{className:"form",children:[Object(K.jsxs)("div",{className:"form__controls",children:[Object(K.jsx)("input",{className:"form__input",type:"email",placeholder:"Email",required:!0,value:e,onChange:function(e){var c;t((c=e.target.value,{type:B,payload:c}))}}),Object(K.jsx)("button",{className:"form__button button",children:"Subscribe"})]}),Object(K.jsxs)("label",{className:"form__cheakbox-text",children:["Subscribe to news",Object(K.jsx)("input",{className:"form__cheakbox-input",type:"checkbox",required:!0})]})]})]})})})}),se=c(19),ae=c.n(se),ne=c(23),re=c.p+"static/media/no_photo.bb351cb8.png",ie=function(){var e=Math.floor(10*Math.random());return function(){var t=Object(ne.a)(ae.a.mark((function t(c){var s,a,n;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=".concat(e));case 3:return s=t.sent,t.next=6,s.json();case 6:a=t.sent,setTimeout((function(){c(S(!1))}),900),n=[],a.forEach((function(e){void 0===e.image&&(e.image={url:re});0===Object.keys(e.image).length&&e.image.constructor===Object&&(e.image={url:re});n.push({id:"".concat(Math.random()+e.id),image:e.image.url,name:e.name,location:e.origin,paw:"4",age:"".concat(Math.floor(12*Math.random())+1," mth."),price:"".concat(Math.floor(1e4*Math.random())+1500," USD"),discount:"-".concat(Math.floor(60*Math.random())+10,"%"),discountStatus:Boolean(Math.round(Math.random())),cardStatus:Boolean(Math.round(Math.random())),isFavourite:!1})})),c(y(n)),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),c((r="There are some problems with response: ".concat(t.t0.message,"."),{type:N,payload:{value:r}})),setTimeout((function(){c(S(!1)),c(w(!0))}),600);case 18:case"end":return t.stop()}var r}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},oe=function(){var e=Object(Y.b)();return Object(s.useEffect)((function(){e(ie())}),[]),Object(K.jsxs)("div",{className:"page",children:[Object(K.jsx)(te,{}),Object(K.jsx)("main",{children:Object(K.jsx)(z.a,{})}),Object(K.jsx)(ce,{})]})},le=(c(37),function(e){var t=e.id,c=e.image,s=e.name,a=e.location,n=e.age,r=e.paw,i=e.price,o=e.discount,l=e.isFavourite,d=e.cardStatus,j=e.discountStatus,u=e.cards,b=Object(Y.b)();return Object(K.jsxs)("div",{className:"card",children:[Object(K.jsxs)("div",{className:"card__preview",children:[Object(K.jsxs)("div",{className:"card__icons",children:[Object(K.jsx)("span",{className:j?"card__icons_discount":"card__icons_discount-none",children:o}),Object(K.jsx)("button",{className:l?"card__icons_button-active":"card__icons_button",onClick:function(){b(L(t,!l)),b({type:O,payload:u})},children:Object(K.jsx)("span",{className:"icon",children:Object(K.jsx)(Q,{id:"heart"})})})]}),Object(K.jsx)("img",{className:"card__image",src:c,alt:"cat"})]}),Object(K.jsxs)("div",{className:"card__information",children:[Object(K.jsx)("p",{className:"card__name",children:s}),Object(K.jsxs)("ul",{className:"card__description description",children:[Object(K.jsxs)("li",{className:"description__item description__item_color",children:["Location: ",Object(K.jsx)("br",{}),Object(K.jsx)("strong",{children:a})]}),Object(K.jsxs)("li",{className:"description__item description__item_age",children:[Object(K.jsx)("span",{className:"bold",children:n})," ",Object(K.jsx)("br",{})," Age"]}),Object(K.jsxs)("li",{className:"description__item description__item_paw",children:[Object(K.jsx)("span",{className:"bold",children:r})," ",Object(K.jsx)("br",{})," Paws count"]})]}),Object(K.jsx)("p",{className:"card__price",children:i})]}),Object(K.jsx)("button",{className:d?"card__button button":"card__button-sold button",children:d?"Buy":"Sold"})]})}),de=function(){var e=Object(Y.c)((function(e){return e.cardReducer})),t=e.cards,c=e.likedCardsData,a=Object(Y.c)((function(e){return e.headerReducer})).isHomePage,n=Object(s.useState)([]),r=Object(J.a)(n,2),i=r[0],o=r[1];Object(s.useEffect)((function(){o(a?t:c)}),[t,c,a]);var l=Object(s.useMemo)((function(){return i.map((function(e){return Object(K.jsx)(le,{id:e.id,image:e.image,name:e.name,location:e.location,age:e.age,paw:e.paw,price:e.price,discount:e.discount,isFavourite:e.isFavourite,cardStatus:e.cardStatus,discountStatus:e.discountStatus,cards:t},e.id)}))}),[i,t]);return Object(K.jsx)(K.Fragment,{children:l})},je=function(e){var t=e.id,c=e.text,a=e.isFetching,n=e.isFetchError,r=e.toggleSortCardsPriceDecrease,i=e.toggleSortCardsAgeDecrease,o=e.toggleSortCardsPriceIncrease,l=e.toggleSortCardsAgeIncrease,d=Object(s.useState)(!1),j=Object(J.a)(d,2),u=j[0],b=j[1],O=Object(Y.b)();return Object(K.jsxs)("button",{className:"controls__menu",disabled:!!a||!!n,onClick:function(){b(!u),"price"===t&&O(r(t,u)),"age"===t&&O(i(t,u)),"price"===t&&!1===u&&O(o(t,u)),"age"===t&&!1===u&&O(l(t,u))},children:[Object(K.jsx)("span",{className:"controls__menu_text",children:c}),Object(K.jsx)("span",{className:u?"icon sorted":"icon",children:Object(K.jsx)(Q,{id:"arrow-sort"})})]})},ue=(c(38),function(){var e=Object(Y.c)((function(e){return e.cardReducer})),t=e.isFetching,c=e.isFetchError,a=e.sortButtons,n=Object(s.useMemo)((function(){return a.map((function(e){return Object(K.jsx)(je,{id:e.id,text:e.text,isSorted:e.isSorted,toggleSortCardsPriceDecrease:E,toggleSortCardsPriceIncrease:A,toggleSortCardsAgeDecrease:k,toggleSortCardsAgeIncrease:T,isFetching:t,isFetchError:c},e.id)}))}),[t,c]);return Object(K.jsx)("div",{className:"controls__wrapper",children:n})}),be=(c(39),function(){return Object(K.jsx)("div",{className:"preloader",children:Object(K.jsxs)("div",{className:"lds-roller",children:[Object(K.jsx)("div",{}),Object(K.jsx)("div",{}),Object(K.jsx)("div",{}),Object(K.jsx)("div",{}),Object(K.jsx)("div",{}),Object(K.jsx)("div",{}),Object(K.jsx)("div",{}),Object(K.jsx)("div",{})]})})}),Oe=(c(40),function(){var e=Object(Y.c)((function(e){return e.cardReducer})).likedCardsData,t=Object(Y.b)(),c=Object(s.useRef)(null);return Object(s.useEffect)((function(){var s,a,n;e.length>1&&e.length%2===0&&(t(C(!0)),null===(s=c.current)||void 0===s||s.classList.add("visible"),null===(a=c.current)||void 0===a||a.classList.add("opacity"),null===(n=c.current)||void 0===n||n.classList.remove("hide"),setTimeout((function(){var e,s;t(C(!1)),null===(e=c.current)||void 0===e||e.classList.remove("visible"),null===(s=c.current)||void 0===s||s.classList.add("hide")}),3500));0===e.length&&t(C(!1))}),[e]),Object(K.jsx)("div",{ref:c,className:"alert",children:Object(K.jsxs)("div",{className:"alert__wrapper",children:[Object(K.jsx)("div",{className:"alert__notification",children:Object(K.jsx)("span",{className:"icon",children:Object(K.jsx)(q.b,{to:"Favourite",onClick:function(){t(H(!1))},children:Object(K.jsx)(Q,{id:"notification"})})})}),Object(K.jsxs)("div",{className:"alert__information",children:[Object(K.jsx)("span",{className:"alert__message",children:"Visit to Favourite page!"}),Object(K.jsx)("span",{className:"alert__count",children:"".concat(e.length," in basket!")})]}),Object(K.jsx)("button",{className:"alert__button",onClick:function(){var e,s;t(C(!1)),null===(e=c.current)||void 0===e||e.classList.remove("visible"),null===(s=c.current)||void 0===s||s.classList.add("hide")},children:Object(K.jsx)("span",{className:"icon",children:Object(K.jsx)(Q,{id:"close"})})})]})})}),he=function(){var e=Object(Y.c)((function(e){return e.cardReducer})),t=e.isFetching,c=e.isFetchError,a=e.fetchErrorMessage,n=Object(Y.b)(),r=Object(s.useRef)(null);return Object(K.jsxs)("div",{ref:r,children:[Object(K.jsx)(Oe,{}),Object(K.jsxs)("div",{className:"container",children:[Object(K.jsxs)("div",{className:"controls",children:[Object(K.jsx)("span",{className:"controls__title",children:"Sorted by:"}),Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(ue,{})})]}),Object(K.jsxs)("div",{className:"gallery",children:[Object(K.jsx)(K.Fragment,{children:t?Object(K.jsx)(be,{}):c?Object(K.jsx)("div",{className:"error",children:a}):Object(K.jsx)("div",{className:"gallery__wrapper",children:Object(K.jsx)(de,{})})}),Object(K.jsx)("button",{className:"gallery__button button",disabled:!!t||!!c,onClick:function(){n(ie())},children:"Watch more"}),Object(K.jsx)("button",{className:"pagination",disabled:!!t||!!c,onClick:function(){r.current.scrollIntoView({block:"start",behavior:"smooth"})},children:Object(K.jsx)("span",{className:"icon",children:Object(K.jsx)(Q,{id:"arrow"})})})]})]})]})},me=c.p+"static/media/empty.cd1884f0.png",_e=(c(41),c(42),c(43),c(11)),pe=c(20);_e.b.use([_e.a]);var xe=function(){var e=Object(Y.c)((function(e){return e.cardReducer})).likedCardsData,t=Object(s.useState)(!0),c=Object(J.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){0===e.length?n(!0):n(!1)}),[e]),Object(K.jsx)("div",{className:"section",children:Object(K.jsx)("div",{className:"basket",children:Object(K.jsx)("div",{className:"basket__wrapper",children:Object(K.jsx)("div",{className:"basket__slider",children:a?Object(K.jsxs)("div",{className:"empty",children:[Object(K.jsx)("img",{className:"empty__preview",src:me,alt:"empty"}),Object(K.jsx)("h4",{className:"empty__text",children:"No matches"})]}):Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(pe.a,{className:"mySwiper",slidesPerView:3,spaceBetween:5,breakpoints:{320:{slidesPerView:1,spaceBetween:30},360:{slidesPerView:1,spaceBetween:30},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:2.5,spaceBetween:30}},children:e.map((function(t){return Object(K.jsx)(pe.b,{children:Object(K.jsx)(le,{id:t.id,image:t.image,name:t.name,location:t.location,age:t.age,paw:t.paw,price:t.price,discount:t.discount,isFavourite:t.isFavourite,cardStatus:t.cardStatus,discountStatus:t.discountStatus,cards:e},t.id)},t.id)}))})})})})})})},fe=c.p+"static/media/in_process.448aa860.png",ge=function(){var e=Object(z.g)(),t=Object(Y.b)();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{className:"section",children:[Object(K.jsx)("img",{className:"section__image",src:fe,alt:"cat"}),Object(K.jsx)("h1",{className:"section__title",children:"NEWS PAGE IN PROCESS"}),Object(K.jsxs)("p",{className:"section__link",children:["return to home"," ",Object(K.jsx)("span",{children:Object(K.jsx)(q.b,{to:"/Cats-Store",onClick:function(){t(H(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},ve=function(){var e=Object(z.g)(),t=Object(Y.b)();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{className:"section",children:[Object(K.jsx)("img",{className:"section__image",src:fe,alt:"cat"}),Object(K.jsx)("h1",{className:"section__title",children:"PROFILE PAGE IN PROCESS"}),Object(K.jsxs)("p",{className:"section__link",children:["return to home"," ",Object(K.jsx)("span",{children:Object(K.jsx)(q.b,{to:"/Cats-Store",onClick:function(){t(H(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},Ne=c.p+"static/media/no_found.bee11de8.png",Ce=function(){var e=Object(z.g)(),t=Object(Y.b)();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)("div",{className:"section",children:[Object(K.jsx)("img",{className:"section__image",src:Ne,alt:"404 error"}),Object(K.jsx)("h1",{className:"section__title section__title-error",children:"404"}),Object(K.jsxs)("p",{className:"section__link",children:["Sorry, this page doesn't exist, return to home"," ",Object(K.jsx)("span",{children:Object(K.jsx)(q.b,{to:"/Cats-Store",onClick:function(){t(H(!0)),e("/Cats-Store",{replace:!0})},children:"page"})})]})]})})},we=(c(44),c(45),c(46),function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsx)(z.d,{children:Object(K.jsxs)(z.b,{path:"/Cats-Store",element:Object(K.jsx)(oe,{}),children:[Object(K.jsx)(z.b,{index:!0,element:Object(K.jsx)(he,{})}),Object(K.jsx)(z.b,{path:"Favourite",element:Object(K.jsx)(xe,{})}),Object(K.jsx)(z.b,{path:"News",element:Object(K.jsx)(ge,{})}),Object(K.jsx)(z.b,{path:"Profile",element:Object(K.jsx)(ve,{})}),Object(K.jsx)(z.b,{path:"*",element:Object(K.jsx)(Ce,{})})]})})})});r.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(q.a,{children:Object(K.jsx)(Y.a,{store:W,children:Object(K.jsx)(we,{})})})}),document.getElementById("root")),i()}},[[47,1,2]]]);
//# sourceMappingURL=main.88820b86.chunk.js.map