(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{27:function(t,e,c){},28:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var a=c(0),r=c(1),n=c.n(r),s=c(19),i=c.n(s),j=c(9),l=(c(27),c(2)),o=(c(28),c(4)),u=c.n(o),b=c(7),h=c(10),d="https://ws.audioscrobbler.com/2.0/",x="5190711e40adb8688facb8a58d660e2d";function O(t){return p.apply(this,arguments)}function p(){return(p=Object(b.a)(u.a.mark((function t(e){var c,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="?method=artist.getinfo&artist=".concat(e,"&api_key=").concat(x,"&format=json"),t.next=3,fetch("".concat(d).concat(c));case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f=function(t){var e=t.tag;return Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})};function m(t){var e=t.match,c=Object(r.useState)({}),n=Object(h.a)(c,2),s=n[0],i=n[1],j=Object(r.useState)(""),l=Object(h.a)(j,2),o=l[0],d=l[1];return Object(r.useEffect)((function(){function t(){return(t=Object(b.a)(u.a.mark((function t(){var c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.params.artistName,t.next=3,O(c);case 3:a=t.sent,i(a.artist),a.artist.image.forEach((function(t){"extralarge"===t.size&&d(t)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.params.artistName]),Object(a.jsx)(a.Fragment,{children:!!Object.keys(s).length&&Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:o["#text"],alt:""}),Object(a.jsx)("h3",{children:s.name}),Object(a.jsx)("p",{children:s.bio.content}),Object(a.jsx)("p",{children:"Tags"}),s.tags.tag.map((function(t){return Object(a.jsx)(f,{tag:t},t.name)})),console.log(s)]})})}function v(){return Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("div",{className:"navbar-brand container",children:[Object(a.jsx)(j.b,{className:"navbar-item",to:"/",children:"Top Tracks"}),Object(a.jsx)(j.b,{className:"navbar-item",to:"/track-search",children:"Track Search"}),Object(a.jsx)(j.b,{className:"navbar-item",to:"/artist-details",children:"Artist Details"})]})})}var k=c(17);c(35);function g(t){var e=t.track,c={};return e.image.forEach((function(t){"medium"===t.size&&(c=t)})),Object(a.jsx)("div",{className:"track-card card",children:Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("img",{className:"image is-64x64",src:c["#text"],alt:"".concat(e.artist.name," Album Cover")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("div",{children:Object(a.jsx)(j.b,{to:"/artist-details/".concat(e.artist.name),children:e.artist.name})}),Object(a.jsx)("a",{href:e.artist.url,children:"Artist on Last.fm"})]})]})})})}var N="/?method=chart.gettoptracks&api_key=".concat(x,"&format=json");function y(){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(u.a.mark((function t(){var e,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d).concat(N));case 2:return e=t.sent,t.next=5,e.json();case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){var t=Object(r.useState)([]),e=Object(h.a)(t,2),c=e[0],n=e[1];return Object(r.useEffect)((function(){function t(){return(t=Object(b.a)(u.a.mark((function t(){var e,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:e=t.sent,c=e.tracks.track,a=c.map((function(t,e){return Object(k.a)(Object(k.a)({},t),{},{id:e})})),n(a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"TOP TRACKS PAGE"}),Object(a.jsx)("ul",{className:"is-flex is-flex-wrap-wrap",children:c.map((function(t){return Object(a.jsx)(g,{track:t},t.id)}))})]})}var S=c(21),E=c.n(S);function A(t){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(u.a.mark((function t(e){var c,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="?method=track.search&track=".concat(e,"&api_key=").concat(x,"&format=json"),t.next=3,fetch("".concat(d).concat(c));case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){var t=Object(r.useState)(""),e=Object(h.a)(t,2),c=e[0],n=e[1],s=Object(r.useState)(),i=Object(h.a)(s,2),j=i[0],l=i[1],o=Object(r.useState)(!1),d=Object(h.a)(o,2),x=d[0],O=d[1],p=function(){var t=Object(b.a)(u.a.mark((function t(e){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,A(c);case 3:if(a=t.sent,0!==(r=a.results.trackmatches.track).length){t.next=8;break}return O(!0),t.abrupt("return");case 8:O(!1),l(r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{className:"find-track",children:[Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{className:"label",htmlFor:"track-title",children:"Track title"}),Object(a.jsx)("div",{className:"control",children:Object(a.jsx)("input",{className:E()("input",{"is-danger":x}),type:"text",id:"track-title",placeholder:"Enter a track title to search",value:c,onChange:function(t){O(!1),n(t.target.value),l()},autoComplete:"off"})}),x&&Object(a.jsx)("p",{className:"help is-danger",children:"Can't find a track with such a title"})]}),Object(a.jsx)("div",{className:"field is-grouped",children:Object(a.jsx)("div",{className:"control",children:Object(a.jsx)("button",{type:"submit",className:"button is-light",onClick:p,children:"Find a track"})})})]}),Object(a.jsx)("div",{className:"container",children:j&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"title",children:"Tracks Matches:"}),Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Track Title"}),Object(a.jsx)("th",{children:"Artist"}),Object(a.jsx)("th",{children:"Link to Last.fm"})]})}),Object(a.jsx)("tbody",{children:j.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.artist}),Object(a.jsx)("td",{children:Object(a.jsx)("a",{href:t.url,rel:"noreferrer",target:"_blank",children:"Listen"})})]})}))})]}),console.log(j)]})})]})}function _(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/artist-details/:artistName",component:m}),Object(a.jsx)(l.b,{path:"/track-search",children:Object(a.jsx)(F,{})}),Object(a.jsx)(l.b,{path:"/",exact:!0,children:Object(a.jsx)(T,{})}),Object(a.jsx)(l.a,{path:"/home",to:"/"})]})})]})}i.a.render(Object(a.jsx)(j.a,{children:Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(_,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5fbc9ed2.chunk.js.map