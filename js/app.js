// 当页面加载完毕时开始动画。
window.onload = function() {
  animateLogo();
  animate_android_robot();
  //首次加载
  updateSliderControl();

   addSmoothScrolling();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  // ...
  updateSliderControl();
}

 


function animateLogo() {
	TweenMax.fromTo("#react-logo",2, {
		css: { y: "-20px" }
	},{
		css: { y: "20px" } ,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
	});
}


function animate_android_robot(){
		var t = new TimelineMax({yoyo: true, repeat: -1});
	t.to("#android-robot",1,{rotation: "-50deg"}).to("#android-robot",1,{rotation: "-40deg"});

}


function updateSliderControl() {
	// 获得所有的 slider 链接
	var links = document.querySelectorAll("#slider-control a")

	for(var i = 0; i < links.length; i ++) {
		var link = links[i];

		// 获取被链接指向的部分
		var section = document.querySelectorAll(".section") [ i ];
		var sectiontTop = section.offsetTop ;
		var sectionBottom = section.offsetTop + window.innerHeight ;

		// 检查 window.scrollY 是否在这部分中
		if(window.scrollY >= sectiontTop && window.scrollY < sectionBottom) {
			link.className = "active";
		} else {
			link.className = "";
		}
	}
}



// Animate of Smooth Scrolling
function scrollWindowToPosition( position ) {
	TweenMax.to(window,1,{
		scrollTo: { y: position },
		ease: Power2.easeInOut,
	});
}

function addSmoothScrolling() {
	var links = document.querySelectorAll("#slider-control a")

	for(var i = 0; i < links.length; i ++) {
		var link = links[i];
		var p = window.innerHeight * i ;

		( function( _p ) {
			link.addEventListener("click",function(event) {
				scrollWindowToPosition( _p ) ;
				event.preventDefault() ;
				return false;
			});
		} ) ( p ) ;
	}
}
//-------------test-
function animateRobotTest() {
	var t = new TimelineMax({yoyo: true, repeat: -1});


  	TweenMax.fromTo("#android-robot",2, {
		css: { x:"20px",y: "20px" }
	},{
		css: { x:"-20px",y: "-20px" } ,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
	});

}




//-------------wrong --------------------------


function animateLogo_left_wrong() {
TweenMax.fromTo("#react-logo",1, {
    css: {left: "-20px",}
  },{
    css: {left: "20px",},
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
  }
);


}
