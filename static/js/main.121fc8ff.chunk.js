(this.webpackJsonphabitaviz=this.webpackJsonphabitaviz||[]).push([[0],{262:function(e,a,t){},263:function(e,a,t){},378:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(13),r=t.n(l),c=(t(262),t(263),t(22)),s=t(127),d=t(6),u={scales:{y:{suggestedMax:100},x:{}}},m=function(e){var a=e.data;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{data:a,options:u})})},j=function(e,a){return Math.floor(Math.random()*(a-e+1)+e)},b=[{label:"Maisons individuelles",data:[{energy_type:"Chauffage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"ECS",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Ventil",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Clim",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"\xc9clairage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}}]},{label:"Logements collectifs",data:[{energy_type:"Chauffage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"ECS",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Ventil",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Clim",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"\xc9clairage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}}]},{label:"Bureau, enseignement",data:[{energy_type:"Chauffage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"ECS",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Ventil",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Clim",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"\xc9clairage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}}]},{label:"H\xf4tel",data:[{energy_type:"Chauffage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"ECS",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Ventil",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"Clim",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}},{energy_type:"\xc9clairage",data:{2015:{min:j(2,25),moy:j(26,50),max:j(51,80)},2016:{min:j(2,25),moy:j(26,50),max:j(51,80)}}}]}],o=t(244),h=t(202),y=t(199),x=t(232),O=t(74),g={"Chauffage min":"rgb(239,106,0)","Chauffage moy":"rgb(239,106,0)",Chauffage:"rgb(239,106,0)","Chauffage max":"rgb(157,72,21)","ECS min":"rgb(172,79,198)","ECS moy":"rgb(172,79,198)",ECS:"rgb(172,79,198)","ECS max":"rgb(101,49,101)","Ventil min":"rgb(124,204,108)","Ventil moy":"rgb(124,204,108)",Ventil:"rgb(124,204,108)","Ventil max":"rgb(78,128,31)","Clim min":"rgb(0,114,206)","Clim moy":"rgb(0,114,206)",Clim:"rgb(0,114,206)","Clim max":"rgb(51,5,141)","\xc9clairage min":"rgb(242, 205, 0)","\xc9clairage moy":"rgb(242, 205, 0)","\xc9clairage":"rgb(242, 205, 0)","\xc9clairage max":"rgb(241,196,0)"},v=function(e,a,t,n,i){var l=["min","max"];n&&(l=["moy"]);var r=e[0].data.map((function(e){return l.map((function(a){return e.energy_type+" "+a}))})).flat(),c=e[0].data.map((function(e,a){return l.map((function(e){return a}))})).flat(),s=l.map((function(t){return e[0].data.map((function(n,i){return e.map((function(e,n){return e.data[i].data[a][t]}))}))})),d=l.map((function(a){return e[0].data.map((function(n,i){return e.map((function(e,n){return e.data[i].data[t][a]}))}))}));n?(s=s[0],d=d[0]):(s=s[0].map((function(e,a){return[s[0][a],s[1][a]]})).flat(),d=d[0].map((function(e,a){return[d[0][a],d[1][a]]})).flat());var u=s.map((function(e,a){return e.map((function(e,t){return(e+d[a][t])/2}))}));return{labels:e.map((function(e){return e.label})),datasets:r.map((function(e,a){return{label:e,data:u[a],backgroundColor:g[e],stack:c[a]}}))}};var f=function(e){var a=e.startYear,t=e.setStartYear,n=e.endYear,i=e.setEndYear;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:{display:"inline-block",marginRight:"2rem"},children:[Object(d.jsx)(y.a,{id:"start-year-label",children:"Date d\xe9but"}),Object(d.jsxs)(o.a,{labelId:"start-year-label",id:"start-year",value:a,onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)(h.a,{value:"2015",children:"2015"}),Object(d.jsx)(h.a,{value:"2016",children:"2016"})]})]}),Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"end-year-label",children:"Date fin"}),Object(d.jsxs)(o.a,{labelId:"end-year-label",id:"year",value:n,onChange:function(e){return i(e.target.value)},children:[Object(d.jsx)(h.a,{value:"2015",children:"2015"}),Object(d.jsx)(h.a,{value:"2016",children:"2016"})]})]})]})},p=t(250),C=t.n(p),k=t(249),S=t.n(k),_=["2015","2016"],E=!1;var B=function(){var e=Object(n.useState)("kWhep/m2.an"),a=Object(c.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)("2015"),r=Object(c.a)(l,2),s=r[0],u=r[1],j=Object(n.useState)("2015"),g=Object(c.a)(j,2),p=g[0],k=g[1],B=Object(n.useState)("Gaz"),F=Object(c.a)(B,2),I=F[0],R=F[1],W=Object(n.useState)(!1),z=Object(c.a)(W,2),L=z[0],V=z[1],G=Object(n.useState)(!1),M=Object(c.a)(G,2),N=M[0],T=M[1];return Object(n.useEffect)((function(){!1!==N&&setTimeout((function(){if(0===(_=_.filter((function(e){return e!==_[0]}))).length||E)return E=!1,T(!1),void(_=["2015","2016"]);u(_[0]),k(_[0]),T(_[0])}),1500)}),[N]),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{className:"title",children:'Consommation \xe9nerg\xe9tique des b\xe2timents : diagramme 1 (min et max "stack\xe9s")'})}),Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"fluid-label",children:"Fluide"}),Object(d.jsxs)(o.a,{labelId:"fluid-label",id:"fluid",value:I,onChange:function(e){return R(e.target.value)},children:[Object(d.jsx)(h.a,{value:"Gaz",children:"Gaz"}),Object(d.jsx)(h.a,{value:"Elec",children:"Elec"}),Object(d.jsx)(h.a,{value:"Fioul",children:"Fioul"}),Object(d.jsx)(h.a,{value:"Bois",children:"Bois"}),Object(d.jsx)(h.a,{value:"Charbon",children:"Charbon"}),Object(d.jsx)(h.a,{value:"R\xe9seau de chaleur",children:"R\xe9seau de chaleur"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsx)(f,{startYear:s,setStartYear:u,endYear:p,setEndYear:k,setPlayPeriod:T}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"value-unity-label",children:"Unit\xe9"}),Object(d.jsxs)(o.a,{labelId:"value-unity-label",id:"value-unity",value:t,onChange:function(e){return i(e.target.value)},children:[Object(d.jsx)(h.a,{value:"kWhep/m2.an",children:"kWhep/m2.an"}),Object(d.jsx)(h.a,{value:"kWhef/m2.an",children:"kWhef/m2.an"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsx)("div",{style:{display:"inline-block"},children:Object(d.jsx)(O.FormControlLabel,{control:Object(d.jsx)(x.a,{checked:L,onChange:function(e){return V(e.target.checked)}}),label:"Valeur moyenne"})}),N&&Object(d.jsx)(O.Button,{style:{marginLeft:"2rem",height:40},variant:"contained",color:"primary",onClick:function(){E=!0,T(!1)},endIcon:Object(d.jsx)(S.a,{}),children:"Stop"}),!N&&Object(d.jsx)(O.Button,{style:{marginLeft:"2rem",height:40},variant:"contained",color:"primary",onClick:function(){return T(_[0])},endIcon:Object(d.jsx)(C.a,{}),children:"Play"}),N&&"undefined"!==typeof _[0]&&Object(d.jsx)("h2",{style:{marginLeft:"2rem",marginTop:0,marginBottom:0},children:_[0]})]}),Object(d.jsx)(m,{data:v(b,s,p,L,I)})]})},F=function(e,a,t,n){var i=e[0].data.map((function(e){return e.energy_type})).flat(),l=e[0].data.map((function(e,a){return a})).flat(),r=e[0].data.map((function(t,n){return e.map((function(e,t){return[e.data[n].data[a].min,e.data[n].data[a].max]}))}));if(t){r=(r=["moy"].map((function(t){return e[0].data.map((function(n,i){return e.map((function(e,n){return e.data[i].data[a][t]}))}))})))[0]}return{labels:e.map((function(e){return e.label})),datasets:i.map((function(e,a){return{label:e,data:r[a],backgroundColor:g[e],stack:l[a]}}))}};var I=function(){var e=Object(n.useState)("kWhep/m2.an"),a=Object(c.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)("2015"),r=Object(c.a)(l,2),s=r[0],u=r[1],j=Object(n.useState)("Gaz"),g=Object(c.a)(j,2),v=g[0],f=g[1],p=Object(n.useState)(!1),C=Object(c.a)(p,2),k=C[0],S=C[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{className:"title",children:"Consommation \xe9nerg\xe9tique des b\xe2timents : diagramme 1.2 (min et max flottants)"})}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"fluid-label",children:"Fluide"}),Object(d.jsxs)(o.a,{labelId:"fluid-label",id:"fluid",value:v,onChange:function(e){return f(e.target.value)},children:[Object(d.jsx)(h.a,{value:"Gaz",children:"Gaz"}),Object(d.jsx)(h.a,{value:"Elec",children:"Elec"}),Object(d.jsx)(h.a,{value:"Fioul",children:"Fioul"}),Object(d.jsx)(h.a,{value:"Bois",children:"Bois"}),Object(d.jsx)(h.a,{value:"Charbon",children:"Charbon"}),Object(d.jsx)(h.a,{value:"R\xe9seau de chaleur",children:"R\xe9seau de chaleur"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"year-label",children:"P\xe9riode"}),Object(d.jsxs)(o.a,{labelId:"year-label",id:"year",value:s,onChange:function(e){return u(e.target.value)},children:[Object(d.jsx)(h.a,{value:"2015",children:"2015"}),Object(d.jsx)(h.a,{value:"2016",children:"2016"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"value-unity-label",children:"Unit\xe9"}),Object(d.jsxs)(o.a,{labelId:"value-unity-label",id:"value-unity",value:t,onChange:function(e){return i(e.target.value)},children:[Object(d.jsx)(h.a,{value:"kWhep/m2.an",children:"kWhep/m2.an"}),Object(d.jsx)(h.a,{value:"kWhef/m2.an",children:"kWhef/m2.an"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsx)("div",{style:{display:"inline-block"},children:Object(d.jsx)(O.FormControlLabel,{control:Object(d.jsx)(x.a,{checked:k,onChange:function(e){return S(e.target.checked)}}),label:"Valeur moyenne"})})]}),Object(d.jsx)(m,{data:F(b,s,k,v)})]})},R=function(e){var a=e.data;return Object(d.jsx)("div",{className:"doughnut",children:Object(d.jsx)(s.b,{data:a})})},W=function(e,a,t){var n=e[0].data.map((function(e){return e.energy_type})).flat(),i=e.filter((function(e){return e.label===t}))[0].data.map((function(e){return e.data[a].moy}));return{labels:n.map((function(e){return e})),datasets:[{data:n.map((function(e,a){return i[a]})),backgroundColor:n.map((function(e,a){return g[e]}))}]}};var z=function(){var e=Object(n.useState)("kWhep/m2.an"),a=Object(c.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)("2015"),r=Object(c.a)(l,2),s=r[0],u=r[1],m=Object(n.useState)("Gaz"),j=Object(c.a)(m,2),x=j[0],O=j[1],g=Object(n.useState)("Maisons individuelles"),v=Object(c.a)(g,2),f=v[0],p=v[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{className:"title",children:"Consommation \xe9nerg\xe9tique des b\xe2timents : diagramme 2 (repr\xe9sentation en doughnut)"})}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"buildingType-label",children:"Type de logement"}),Object(d.jsxs)(o.a,{labelId:"buildingType-label",id:"buildingType",value:f,onChange:function(e){return p(e.target.value)},children:[Object(d.jsx)(h.a,{value:"Maisons individuelles",children:"Maisons individuelles"}),Object(d.jsx)(h.a,{value:"Logements collectifs",children:"Logements collectifs"}),Object(d.jsx)(h.a,{value:"Bureau, enseignement",children:"Bureau, enseignement"}),Object(d.jsx)(h.a,{value:"H\xf4tel",children:"H\xf4tel"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"fluid-label",children:"Fluide"}),Object(d.jsxs)(o.a,{labelId:"fluid-label",id:"fluid",value:x,onChange:function(e){return O(e.target.value)},children:[Object(d.jsx)(h.a,{value:"Gaz",children:"Gaz"}),Object(d.jsx)(h.a,{value:"Elec",children:"Elec"}),Object(d.jsx)(h.a,{value:"Fioul",children:"Fioul"}),Object(d.jsx)(h.a,{value:"Bois",children:"Bois"}),Object(d.jsx)(h.a,{value:"Charbon",children:"Charbon"}),Object(d.jsx)(h.a,{value:"R\xe9seau de chaleur",children:"R\xe9seau de chaleur"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"year-label",children:"P\xe9riode"}),Object(d.jsxs)(o.a,{labelId:"year-label",id:"year",value:s,onChange:function(e){return u(e.target.value)},children:[Object(d.jsx)(h.a,{value:"2015",children:"2015"}),Object(d.jsx)(h.a,{value:"2016",children:"2016"})]})]}),Object(d.jsx)("div",{style:{marginRight:"2rem"}}),Object(d.jsxs)("div",{style:{display:"inline-block"},children:[Object(d.jsx)(y.a,{id:"value-unity-label",children:"Unit\xe9"}),Object(d.jsxs)(o.a,{labelId:"value-unity-label",id:"value-unity",value:t,onChange:function(e){return i(e.target.value)},children:[Object(d.jsx)(h.a,{value:"kWhep/m2.an",children:"kWhep/m2.an"}),Object(d.jsx)(h.a,{value:"kWhef/m2.an",children:"kWhef/m2.an"})]})]})]}),Object(d.jsx)(R,{data:W(b,s,f)})]})};var L=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(B,{}),Object(d.jsx)("div",{style:{marginBottom:"4rem"}}),Object(d.jsx)(I,{}),Object(d.jsx)("div",{style:{marginBottom:"4rem"}}),Object(d.jsx)(z,{})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,466)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,l=a.getLCP,r=a.getTTFB;t(e),n(e),i(e),l(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),V()}},[[378,1,2]]]);
//# sourceMappingURL=main.121fc8ff.chunk.js.map