(this["webpackJsonpwill-it-miss-react"]=this["webpackJsonpwill-it-miss-react"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=(a(10),a(4)),c=a(1),s=new Map([[!0,"YES \ud83d\ude31"],[!1,"nope"]]);function m(e){var t=e.yes;return r.a.createElement("span",{className:"hazard"},s.get(t))}function u(e){return e.data.map((function(e,t){return r.a.createElement("p",{key:t},"Misses ",e.orbiting_body," tomorrow at"," ",new Intl.DateTimeFormat("de-DE",{timeStyle:"short"}).format(e.epoch_date_close_approach)," by"," "," ",new Intl.NumberFormat("de-DE",{style:"decimal"}).format(e.miss_distance.kilometers)," kilometres whilst travelling at ",new Intl.NumberFormat("de-DE",{style:"unit",unit:"kilometer-per-hour"}).format(e.relative_velocity.kilometers_per_hour))}))}function d(e){var t=e.name,a=e.is_potentially_hazardous_asteroid,n=e.close_approach_data,o=e.nasa_jpl_url;return r.a.createElement("div",{className:a?"is-hazard":"no-hazard"},r.a.createElement("h2",null,t.replace(/[()]/g,"")),r.a.createElement("p",null,"Potentially hazardous?"," ",r.a.createElement(m,{yes:a})),r.a.createElement(u,{data:n}),r.a.createElement("p",{className:"more"},r.a.createElement("a",{href:o,target:"_blank"},"Find out more")))}var h=p(Object(c.a)(new Date,1));function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return e.toJSON().split("T")[0]}var _=function(){return fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=".concat(p(),"&api_key=").concat("oBI2u3JcmWxBCS1uQle8OdCNkVZJXii5zBFdYRzt")).then((function(e){return e.json()}))};var f=function(){var e=Object(l.useAsync)(_,[]);if(e.loading)return document.title="Counting potential earth HAZARDS...",r.a.createElement("p",null,"Getting data from NASA right now to check wheter something from space is going to hit us. One moment...");var t=e.result.near_earth_objects[h].reduce((function(e,t){return t.is_potentially_hazardous_asteroid?e+1:e}),0);document.title="".concat(t," potential HAZARDS ").concat(t>0?"OMG WE GON DIE":"Phew we gucci");var a=e.result.near_earth_objects[h];return r.a.createElement("div",null,r.a.createElement("p",null,new Intl.DateTimeFormat("en-GB",{weekday:"long",month:"short",day:"numeric"}).format(Object(c.a)(new Date,1))," there will be"," ",r.a.createElement("strong",null,a.length)," near misses"),r.a.createElement("hr",null),a.sort((function(e){return e.is_potentially_hazardous_asteroid?-1:1})).map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.bb2468d4.chunk.js.map