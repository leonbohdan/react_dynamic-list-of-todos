(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),c=n.n(s),o=n(5),l=n(1),i=n(2),u=n(4),d=n(3),m=(n(13),n(14),function(e){var t=e.todos,n=e.selectUser,a=e.handleSelect,s=e.handleInputChange,c=e.changeStatus,o=e.filterByChoise;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__container"},r.a.createElement("input",{type:"text",placeholder:"Filter by word",className:"TodoList__input",onChange:function(e){return s(e.target.value)}}),r.a.createElement("select",{className:"TodoList__select",value:o,onChange:a},r.a.createElement("option",{value:""},"Choose filter"),r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed")),r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{className:e.completed?"TodoList__item TodoList__item--checked":"TodoList__item TodoList__item--unchecked",key:e.id},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed,onClick:function(){return c(e.id)},readOnly:!0}),e.title),r.a.createElement("button",{className:"TodoList__user-button",type:"button",onClick:function(){return n(e.userId)}},"User #".concat(e.userId)))})))))}),h="https://mate-api.herokuapp.com";function p(e){return fetch("".concat(h,"/users/").concat(e,"/")).then((function(e){return e.json()})).then((function(e){return e.data}))}n(15);var f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentId:0,user:{}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;p(this.props.userId).then((function(t){t&&e.setState({currentId:e.props.userId,user:t})}))}},{key:"componentDidUpdate",value:function(){var e=this;this.props.userId!==this.state.currentId&&p(this.props.userId).then((function(t){t?e.setState({currentId:e.props.userId,user:t}):e.setState({user:{}})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props,n=t.userId,a=t.clearUser;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__heading"},"Selected user: ".concat(n)),r.a.createElement("ul",{className:"CurrentUser__list"},r.a.createElement("li",{className:"CurrentUser__name"},e.name?e.name:"No name"),r.a.createElement("li",{className:"CurrentUser__email"},e.email?e.email:"No email"),r.a.createElement("li",{className:"CurrentUser__phone"},e.phone?e.phone:"No phone"),r.a.createElement("li",{className:"CurrentUser__website"},e.website?e.website:"No website"),r.a.createElement("li",{className:"CurrentUser__createdAt"},e.createdAt?e.createdAt:"No time when created")),r.a.createElement("button",{type:"button",className:"CurrentUser__clear-user",onClick:function(){return a()}},"Clear user"))}}]),n}(r.a.Component),_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,filterByChoise:"Choose filter",filterByInput:""},e.handleSelect=function(t){e.setState({filterByChoise:t.target.value})},e.handleInputChange=function(t){e.setState({filterByInput:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.selectUser=function(t){return e.setState({selectedUserId:t})},e.changeStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===+t?Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed}):Object(o.a)({},e)}))}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(h,"/todos")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(t){e.setState({todos:t.filter((function(e){return e.title&&e.id&&e.userId}))})}))}},{key:"render",value:function(){var e,t,n=this.state,a=n.todos,s=n.filterByChoise,c=n.filterByInput,o=n.selectedUserId;switch(e=c?a.filter((function(e){return e.title&&e.title.includes(c)})):a,s){case"completed":t=e.filter((function(e){return e.completed}));break;case"active":t=e.filter((function(e){return!e.completed}));break;default:t=e}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},this.state.todos.length,r.a.createElement(m,{todos:t,selectUser:this.selectUser,handleSelect:this.handleSelect,handleInputChange:this.handleInputChange,changeStatus:this.changeStatus,filterByChoise:s,filterByInput:c})),r.a.createElement("div",{className:"App__content"},o?r.a.createElement(f,{userId:o,clearUser:this.clearUser}):"No user selected"))}}]),n}(r.a.Component);c.a.render(r.a.createElement(_,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.41d94695.chunk.js.map