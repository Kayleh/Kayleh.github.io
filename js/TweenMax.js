$(document).ready(function(){function e(){(n=!n)?(TweenMax.to(s,.1,{scaleX:1.2,scaleY:.6,ease:Quad.easeOut,onComplete:function(){TweenMax.to(s,.8,{scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]}),TweenMax.to(s.children(".share-icon"),.8,{scale:1.4,ease:Elastic.easeOut,easeParams:[1.1,.6]})}}),a.each(function(e){var a=$(this),s=e-t;s>=0&&(s+=1);var n=Math.abs(s);a.css({zIndex:t-n}),TweenMax.to(a,1.1*n,{x:s*c,scaleY:.6,scaleX:1.1,ease:Elastic.easeOut,easeParams:[1.01,.5]}),TweenMax.to(a,.8,{delay:.2*n-.1,scale:.6,ease:Elastic.easeOut,easeParams:[1.1,.6]}),TweenMax.fromTo(a.children(".share-icon"),.2,{scale:0},{delay:.2*n-.1,scale:1,ease:Quad.easeInOut})})):(TweenMax.to([s,s.children(".share-icon")],1.4,{delay:.1,scale:1,ease:Elastic.easeOut,easeParams:[1.1,.3]}),a.each(function(e){var a=$(this),s=e-t;s>=0&&(s+=1);var n=Math.abs(s);a.css({zIndex:n}),TweenMax.to(a,.4+.1*(t-n),{x:0,scale:.95,ease:Quad.easeInOut}),TweenMax.to(a.children(".share-icon"),.2,{scale:0,ease:Quad.easeIn})}))}var a=$(".share-button"),s=$(".share-toggle-button"),n=!1,t=a.length/2,c=75;s.on("mousedown",function(){e()})});