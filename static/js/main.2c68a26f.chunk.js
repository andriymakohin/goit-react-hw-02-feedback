(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={status:"Statistics_status__3vlUv",good:"Statistics_good__3cvTo",neutral:"Statistics_neutral__axI0g",bad:"Statistics_bad___XWmx",items:"Statistics_items__aZcK7",positive:"Statistics_positive__3uh-v"}},10:function(e,t,a){e.exports={title:"Section_title__1L26Z"}},11:function(e,t,a){e.exports={message:"Notification_message__jDoGy"}},14:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},20:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=(a(19),a(5)),i=a(6),l=a(7),u=a(13),m=a(12),d=(a(20),a(1)),b=a.n(d),v=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:b.a.status},c.a.createElement("p",{className:b.a.good},"Good:",t),c.a.createElement("p",{className:b.a.neutral},"Neutral:",a),c.a.createElement("p",{className:b.a.bad},"Bad:",n)),c.a.createElement("p",{className:b.a.items},"Total:",r),c.a.createElement("p",{className:b.a.positive},"Positive feedback: ",o,"%",c.a.createElement("progress",{max:"100",value:o},"Positive feedback: ",o," %")))},g=a(8),f=a.n(g),p=a(9),_=a.n(p),k=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("button",{className:_.a.feedbackBtn,key:f.a.generate(),type:"button",name:e,onClick:a},e)})))},E=a(10),h=a.n(E),F=function(e){var t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:h.a.title},t),a)},N=a(11),S=a.n(N),P=function(e){var t=e.message;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:S.a.message},t))},x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),a=100*e.state.good/t;return Math.round(a)},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(s.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage(),s=Object.keys(this.state);return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{title:"Please leave feedback"},c.a.createElement(k,{options:s,onLeaveFeedback:this.onLeaveFeedback})," "),0===r?c.a.createElement(P,{message:"No feedback given"}):c.a.createElement(F,{title:"Statistics"},c.a.createElement(v,{good:t,neutral:a,bad:n,total:r,positivePercentage:o})," ")," ")}}]),a}(n.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={feedbackBtn:"FeedbackOptions_feedbackBtn__1vW6U"}}},[[14,1,2]]]);
//# sourceMappingURL=main.2c68a26f.chunk.js.map