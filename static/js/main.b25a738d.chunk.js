(this.webpackJsonpmerukhand=this.webpackJsonpmerukhand||[]).push([[0],{13:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),u=n(6),s=n(5),i=n(0),l=n.n(i),c=n(4),o=(n(13),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).nameize=function(e){return e.map((function(e){return{name:e}}))},e.getPermutations=function(t){if(""===t)return[];var n=[];if(1===t.length)return n.push(t),n;for(var r=0;r<t.length;r++)for(var a=t[r],u=t.substring(0,r)+t.substring(r+1),s=e.getPermutations(u),i=0;i<s.length;i++)n.push(a+s[i]);return n},e.renderPermuations=function(e){return e.map((function(e,t){return l.a.createElement("li",{key:t}," ",e," ")}))},e.state={swaras:""},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("p",null," Enter the swaras to generate the merukhand combinations. "),l.a.createElement("p",null," Example - srg "),l.a.createElement("label",null,"Swaras:",l.a.createElement("input",{type:"text",value:this.state.swaras,onChange:function(t){return e.setState({swaras:t.target.value})}})),l.a.createElement("ul",null,this.renderPermuations(this.getPermutations(this.state.swaras))))}}]),n}(i.Component));Object(c.render)(l.a.createElement(o,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.b25a738d.chunk.js.map