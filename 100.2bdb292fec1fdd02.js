"use strict";(self.webpackChunkchartM=self.webpackChunkchartM||[]).push([[100],{4100:(R,u,a)=>{a.r(u),a.d(u,{CovidModule:()=>M});var m=a(9808),v=a(4282),r=a(4393),t=a(5e3),g=a(5601),h=a(5034);function C(o,s){1&o&&(t.TgZ(0,"div",3)(1,"h3"),t._uU(2," Loading... "),t.qZA()())}const f=function(){return{backdropBorderRadius:"3px"}};let p=(()=>{class o{constructor(e){this.server=e,this.loading=!1,this.bar_chart=[],r.kL.register(...r.zX)}ngOnInit(){this.loading=!0,this.server.covidData().then(e=>{var n,c,d,l;this.output=e,this.loading=!1,this.country=null===(n=this.output)||void 0===n?void 0:n.countries_stat.slice(0,20).map(i=>i.country_name),this.deaths=null===(c=this.output)||void 0===c?void 0:c.countries_stat.slice(0,20).map(i=>i.deaths),this.deathsN=this.deaths=this.deaths.map(parseFloat),this.active_cases=null===(d=this.output)||void 0===d?void 0:d.countries_stat.slice(0,20).map(i=>i.active_cases);const A=this.active_cases=this.active_cases.map(parseFloat);this.total_recovered=null===(l=this.output)||void 0===l?void 0:l.countries_stat.slice(0,20).map(i=>i.total_recovered);const F=this.total_recovered=this.total_recovered.map(parseFloat);this.bar_chart=new r.kL("bar",{type:"bar",data:{labels:this.country,datasets:[{label:"Covid",backgroundColor:"rgb(255,0,0)",data:this.deathsN},{backgroundColor:"rgb(0, 0, 205)",label:"Active Cases",data:A},{backgroundColor:"rgb(34, 139, 34)",label:"Recovered",data:F}]}})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-covid"]],decls:6,vars:5,consts:[["id","bar"],["customLoadingTemplate",""],[3,"show","config","template"],[1,"custom-class"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div")(1,"canvas",0),t._uU(2),t.qZA(),t.YNc(3,C,3,0,"ng-template",null,1,t.W1O),t._UZ(5,"ngx-loading",2),t.qZA()),2&e){const c=t.MAs(4);t.xp6(2),t.Oqu(n.bar_chart),t.xp6(3),t.Q6J("show",n.loading)("config",t.DdM(4,f))("template",c)}},directives:[h.RJ],styles:[""]}),o})();const b=[{path:"",component:p,children:[{path:"covid",component:p}]}];let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[v.Bz.forChild(b)],v.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,y,h.q]]}),o})()}}]);