require([],function(){var i=!1,e=function(){require(["/js/mobile.js"],function(e){e.init(),i=!0})},n=!1,a=function(){require(["/js/pc.js"],function(i){i.init(),n=!0})},t=function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&-1==i.indexOf("KHTML"),mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:-1==i.indexOf("Safari"),weixin:-1==i.indexOf("MicroMessenger")}}();$(window).bind("resize",function(){i&&n?$(window).unbind("resize"):$(window).width()>=700?a():e()}),!0===t.mobile||$(window).width()<700?e():a(),!0===yiliaConfig.fancybox&&require(["/fancybox/jquery.fancybox.js"],function(i){if(0!=$(".isFancy").length){for(var e=$(".article-inner img"),n=0,a=e.length;n<a;n++){var t=e.eq(n).attr("src"),r=e.eq(n).attr("alt");e.eq(n).replaceWith("<a href='"+t+"' title='"+r+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+t+"' title='"+r+"'></a>")}$(".article-inner .fancy-ctn").fancybox()}}),!0===yiliaConfig.animate&&(require(["/js/jquery.lazyload.js"],function(){$(".js-avatar").attr("src",$(".js-avatar").attr("lazy-src")),$(".js-avatar")[0].onload=function(){$(".js-avatar").addClass("show")}}),!0===yiliaConfig.isHome?require(["//cdn.bootcss.com/scrollReveal.js/3.0.5/scrollreveal.js"],function(i){function e(){$(".article").each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")?($(this).removeClass("hidden").addClass("show"),$(this).addClass("is-hiddened")):$(this).hasClass("is-hiddened")||$(this).addClass("hidden")})}var n=["pulse","fadeIn","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],a=n.length,t=n[Math.ceil(Math.random()*a)-1];return window.requestAnimationFrame?void i({duration:0,afterReveal:function(i){$(i).addClass("animated "+t).css({opacity:1})}}).reveal(".body-wrap > article"):($(".body-wrap > article").css({opacity:1}),void(navigator.userAgent.match(/Safari/i)&&($(window).on("scroll",function(){e()}),e())))}):$(".body-wrap > article").css({opacity:1})),1==yiliaConfig.open_in_new&&($(".article a[href]").attr("target","_blank"),$(".archive-article-title").attr("target","_blank"))});