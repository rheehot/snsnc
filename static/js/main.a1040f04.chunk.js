(this["webpackJsonpbrand-naming"]=this["webpackJsonpbrand-naming"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(16),o=a.n(s),i=(a(23),a(2)),r=a(3),m=a(4),l=a(6),u=a(5),p=(a(24),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e="";return"D"===this.props.state?e=c.a.createElement("i",{className:"fas fa-circle-notch"}):"L"===this.props.state?e=c.a.createElement("i",{className:"fas fa-circle-notch fa-spin"}):"S"===this.props.state?e=c.a.createElement("i",{className:"fas fa-check"}):"F"===this.props.state&&(e=c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement("div",{className:"card"},c.a.createElement("span",{className:"social-name"},c.a.createElement("a",{href:"https://".concat(this.props.name)},this.props.name)),c.a.createElement("span",{className:"social-icon"},e))}}]),a}(c.a.Component)),f=a(17),h=a.n(f),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={username:""},e.socialList=["blex.me","brunch.co.kr","buymeacoffee.com","facebook.com","github.com","instagram.com","medium.com","tistory.com","twitter.com","velog.io","youtube.com"],e.componentDidMount=function(){e.socialList.forEach((function(t){e.setStateSocial(t,"D")}))},e.onChange=function(t){var a=e.state;a.username=t.target.value,e.setState(a)},e.setStateSocial=function(t,a){var n=e.state;n[t]=a,e.setState(n)},e.onClick=function(){if(""!==e.state.username){var t=Object(m.a)(e);e.socialList.forEach((function(a){!function(e,a){t.setStateSocial(e,"L"),h.a.get("https://api.baejino.com/snsnc",{params:{social:e,username:a}}).then((function(a){JSON.stringify(a.data).includes("Y")?t.setStateSocial(e,"S"):t.setStateSocial(e,"F")}))}(a,e.state.username)}))}else alert("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.socialList.map((function(t,a){return c.a.createElement(p,{key:a,name:t,state:e.state[t]})}));return c.a.createElement("div",{className:"App"},c.a.createElement("input",{placeholder:"username",onChange:this.onChange,className:"basic input"}),c.a.createElement("button",{onClick:this.onClick,className:"basic button"},"Search"),t,c.a.createElement("p",{className:"footer"},"Copyright \xa9 2020 ",c.a.createElement("a",{href:"https://im.baejino.com"},"BaeJino"),"."))}}]),a}(c.a.Component);o.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a1040f04.chunk.js.map