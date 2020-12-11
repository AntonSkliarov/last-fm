(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{37:function(t,e,r){},38:function(t,e,r){},41:function(t,e,r){},42:function(t,e,r){"use strict";r.r(e);var c=r(1),a=r(0),n=r.n(a),s=r(16),i=r.n(s),o=r(13),u=r(6),j=r(25),l=r(12),b=(r(37),r(4)),h=(r(38),function(t){var e=t.tag;return Object(c.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})}),d=r(5),O=r.n(d),p=r(10),f="https://ws.audioscrobbler.com/2.0/",x="5190711e40adb8688facb8a58d660e2d";function m(t){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(O.a.mark((function t(e){var r,c,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="?method=artist.getinfo&artist=".concat(e,"&api_key=").concat(x,"&format=json"),t.next=3,fetch("".concat(f).concat(r));case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"track";if("track"===e){var r={};return t.forEach((function(t){"medium"===t.size&&(r=t)})),r}var c={};return t.forEach((function(t){"extralarge"===t.size&&(c=t)})),c}var k="topTracks/FETCH_TOP_TRACKS",T="artist/FETCH_ARTIST",_="artist/SET_ARTIST_IMAGE",g="trackSearch/FETCH_SEARCHED_TRACK",R="trackSearch/CLEAR_TRACK_PREVIEW",y="trackSearch/SET_SEARCH_ERROR",w="trackSearch/CLEAR_SEARCH_ERROR",N="trackSearch/SET_INPUT_ERROR",S="trackSearch/CLEAR_INPUT_ERROR",A="app/SET_REQUEST_TOP_TRACKS_ERROR",C="app/SET_REQUEST_SEARCH_TRACK_ERROR",I="app/SET_REQUEST_ARTIST_ERROR",q="TOP_TRACK_PAGE",P="SEARCH_TRACK_PAGE",F="ARTIST_PAGE";function L(t){return function(e){switch(t){case q:e({type:A});break;case P:e({type:C});break;case F:e({type:I})}}}function H(t){return function(e){var r=v(t,"artist");e({type:_,payload:r})}}var K=function(){return Object(c.jsxs)("div",{className:"message is-danger",children:[Object(c.jsx)("div",{className:"message-header",children:Object(c.jsx)("p",{children:"Oops, something went wrong"})}),Object(c.jsx)("div",{className:"message-body",children:"Sorry for the inconvenience. Please try to reload the page or contact the support team."})]})};function D(t){var e=t.match,r=Object(u.b)(),n=Object(u.c)((function(t){return t.artist.artist})),s=Object(u.c)((function(t){return t.artist.artistImage})),i=Object(u.c)((function(t){return t.requestErrors.requestErrors.artistError}));return Object(a.useEffect)((function(){r(function(t){var e=t.artistName;return function(){var t=Object(p.a)(O.a.mark((function t(r){var c,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:c=t.sent,a=c.artist,r({type:T,payload:a}),r(H(a.image)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r(L(F));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(e.params))}),[e.params.artistName]),i?Object(c.jsx)(K,{}):Object(c.jsx)(c.Fragment,{children:n&&Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:s["#text"],alt:""}),Object(c.jsx)("h3",{children:n.name}),Object(c.jsx)("p",{children:n.bio.content}),Object(c.jsx)("p",{children:"Tags"}),n.tags.tag.map((function(t){return Object(c.jsx)(h,{tag:t},t.name)}))]})})}function U(){return Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar-brand container",children:[Object(c.jsx)(l.b,{className:"navbar-item",to:"/",children:"Top Tracks"}),Object(c.jsx)(l.b,{className:"navbar-item",to:"/track-search",children:"Track Search"}),Object(c.jsx)(l.b,{className:"navbar-item",to:"/artist-details",children:"Artist Details"})]})})}r(41);function G(t){var e=t.track,r=v(e.image);return Object(c.jsx)("div",{className:"track-card card",children:Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("img",{className:"image is-64x64",src:r["#text"],alt:"".concat(e.artist.name," Album Cover")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{to:"/artist-details/".concat(e.artist.name),children:e.artist.name})}),Object(c.jsx)("a",{href:e.artist.url,children:"Artist on Last.fm"})]})]})})})}var X=r(2),M="/?method=chart.gettoptracks&api_key=".concat(x,"&format=json");function Q(){return V.apply(this,arguments)}function V(){return(V=Object(p.a)(O.a.mark((function t(){var e,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(f).concat(M));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.topTracks.tracks})),r=Object(u.c)((function(t){return t.requestErrors.requestErrors.topTracksError}));return Object(a.useEffect)((function(){t(function(){var t=Object(p.a)(O.a.mark((function t(e){var r,c,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q();case 3:r=t.sent,c=r.tracks.track,a=c.map((function(t,e){return Object(X.a)(Object(X.a)({},t),{},{id:e})})),e({type:k,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e(L(q));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())}),[]),r?Object(c.jsx)(c.Fragment,{children:r&&Object(c.jsx)(K,{})}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"TOP TRACKS:"}),Object(c.jsx)("ul",{className:"is-flex is-flex-wrap-wrap",children:e.map((function(t){return Object(c.jsx)(G,{track:t},t.id)}))})]})}var J=r(27),B=r(26),W=r.n(B);function Y(t){return Z.apply(this,arguments)}function Z(){return(Z=Object(p.a)(O.a.mark((function t(e){var r,c,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="?method=track.search&track=".concat(e,"&api_key=").concat(x,"&format=json"),t.next=3,fetch("".concat(f).concat(r));case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return function(t){t({type:S})}}function tt(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.tracksForPreview.tracks})),r=Object(u.c)((function(t){return t.tracksForPreview.searchError})),n=Object(u.c)((function(t){return t.tracksForPreview.showInputError})),s=Object(u.c)((function(t){return t.requestErrors.requestErrors.searchTrackError})),i=Object(a.useState)(""),o=Object(J.a)(i,2),j=o[0],l=o[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"find-track",children:[Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{className:"label",htmlFor:"track-title",children:"Track title"}),Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("input",{className:W()("input",{"is-danger":r}),type:"text",id:"track-title",placeholder:"Enter a track title to search",value:j,onChange:function(e){t((function(t){t({type:w})})),t($()),l(e.target.value),t((function(t){t({type:R})}))},autoComplete:"off"})}),n&&Object(c.jsx)("p",{className:"help is-danger",children:"Search field cannot be empty"}),r&&Object(c.jsx)("p",{className:"help is-danger",children:"Can't find a track with such a title"})]}),Object(c.jsx)("div",{className:"field is-grouped",children:Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("button",{type:"submit",className:"button is-light",onClick:function(e){var r;(e.preventDefault(),0!==j.trim().length)?t((r=j,function(){var t=Object(p.a)(O.a.mark((function t(e){var c,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(r);case 3:if(c=t.sent,0!==(a=c.results.trackmatches.track).length){t.next=8;break}return e((function(t){t({type:y})})),t.abrupt("return");case 8:e({type:g,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e(L(P));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}())):t((function(t){t({type:N}),setTimeout((function(){t($())}),3e3)}))},children:"Find a track"})})})]}),s&&Object(c.jsx)(K,{}),!!e.length&&Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"title",children:"Tracks Matches:"}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{className:"thead",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Track Title"}),Object(c.jsx)("th",{children:"Artist"}),Object(c.jsx)("th",{children:"Link to Last.fm"})]})}),Object(c.jsx)("tbody",{children:e.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.artist}),Object(c.jsx)("td",{children:Object(c.jsx)("a",{href:t.url,rel:"noreferrer",target:"_blank",children:"Listen"})})]},t.url)}))})]})]})]})}function et(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{path:"/artist-details/:artistName",component:D}),Object(c.jsx)(b.b,{path:"/track-search",children:Object(c.jsx)(tt,{})}),Object(c.jsx)(b.b,{path:"/",exact:!0,children:Object(c.jsx)(z,{})}),Object(c.jsx)(b.a,{path:"/home",to:"/"})]})})]})}var rt={requestErrors:{topTracksError:!1,searchTrackError:!1,artistError:!1}},ct={artist:null,artistImage:{}},at={tracks:[]},nt={tracks:[],searchError:!1,showInputError:!1,requestError:!1},st=Object(o.c)({topTracks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k:return Object(X.a)(Object(X.a)({},t),{},{tracks:e.payload});default:return t}},artist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return Object(X.a)(Object(X.a)({},t),{},{artist:e.payload});case _:return Object(X.a)(Object(X.a)({},t),{},{artistImage:e.payload});default:return t}},tracksForPreview:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(X.a)(Object(X.a)({},t),{},{tracks:e.payload});case R:return Object(X.a)(Object(X.a)({},t),{},{tracks:[]});case y:return Object(X.a)(Object(X.a)({},t),{},{searchError:!0});case w:return Object(X.a)(Object(X.a)({},t),{},{searchError:!1});case N:return Object(X.a)(Object(X.a)({},t),{},{showInputError:!0});case S:return Object(X.a)(Object(X.a)({},t),{},{showInputError:!1});default:return t}},requestErrors:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case A:return Object(X.a)(Object(X.a)({},t),{},{requestErrors:Object(X.a)(Object(X.a)({},t.requestErrors),{},{topTracksError:!0})});case C:return Object(X.a)(Object(X.a)({},t),{},{requestErrors:Object(X.a)(Object(X.a)({},t.requestErrors),{},{searchTrackError:!0})});case I:return Object(X.a)(Object(X.a)({},t),{},{requestErrors:Object(X.a)(Object(X.a)({},t.requestErrors),{},{artistError:!0})});default:return t}}}),it=Object(o.e)(st,Object(o.d)(Object(o.a)(j.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ot=Object(c.jsx)(u.a,{store:it,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(et,{})})})});i.a.render(ot,document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.f7b8b2a7.chunk.js.map