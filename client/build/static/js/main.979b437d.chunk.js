(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,,function(e,t,a){e.exports=a.p+"static/media/user.c4b11ce8.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),c=a.n(s),i=a(2),l=a.n(i),u=a(5),o=a(6),d=a(7),p=a(9),m=a(8),h=a(1),f=a(10);a(18),a(19);var v=function(e){return r.a.createElement("div",{className:"bug"},r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("p",{className:"title",onClick:e.clickBug},e.title)),r.a.createElement("div",{className:"status-wrapper"},r.a.createElement("p",{className:"solved"===e.status?"status-solved":"status-pending"},e.status)))};a(20);var b=function(e){return r.a.createElement("div",{className:"current-bug-wrapper"},r.a.createElement("div",{className:"current-bug-title-wrapper"},r.a.createElement("p",{id:"title"},e.title),r.a.createElement("p",{className:"pending"===e.status?"pending":"solved"},e.status)),r.a.createElement("div",{className:"hr"}),r.a.createElement("div",{className:"body-wrapper"},r.a.createElement("p",null,e.body)))},g=(a(21),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={loading:!0,data:[],current:void 0,search:""},e.filterSearch=e.filterSearch.bind(Object(h.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/api/bugs",e.prev=1,e.next=4,fetch("http://localhost:5000/api/bugs");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,this.setState({loading:!1,data:a.bugs}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("fetch failed",e.t0);case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"selectCurrentBug",value:function(e,t){this.setState(function(t){return{loading:t.loading,data:t.data,current:t.data[e]}}),window.scrollTo(0,0)}},{key:"filterSearch",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.data.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.state.search.toLowerCase())});return r.a.createElement("div",{className:void 0===this.state.current?"all-bugs-body-wrapper-undefined":"all-bugs-body-wrapper-defined"},r.a.createElement("div",{className:void 0===this.state.current?"all-bugs-wrapper-undefined":"all-bugs-wrapper-defined"},r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{placeholder:"Search",onChange:this.filterSearch})),t.map(function(t){return r.a.createElement(v,{clickBug:e.selectCurrentBug.bind(e,t.id),key:t.id,title:t.title,status:t.status})})),this.state.current?r.a.createElement(b,{title:this.state.current.title,status:this.state.current.status,body:this.state.current.body}):null)}}]),t}(r.a.Component));var w=function(){return r.a.createElement("div",null,r.a.createElement(g,null))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.979b437d.chunk.js.map