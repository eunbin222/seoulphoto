$(document).ready(function(){	
	
	//자동슬라이드
	setInterval( x , 2000);
	function x(){
		$("#slide").stop().animate({left : "-1000px"},1500,function(){
			$("#slide").append( $("#slide img:first-child")  );
			$("#slide").css("left", 0);
			let i = $(".white").index();
			if(i==2){i=-1;}
			$("#circle div").eq(i+1).addClass("white").siblings().removeClass("white");
		});
	}//x() 끝
	
	//포트폴리오: 썸네일 클릭하면 큰이미지 보인다.
	$(".namebox").click(function(){
		//<a>속 <img src> 주소와 <img alt> 가져온다.
		const p1 = $(this).children().attr("src"); 
		const p2 = $(this).children().attr("alt"); 
		//console.log(p1 + p2);
		$(".big img").attr({"src" : p1    , "alt" :  p2});
		$(".big").fadeIn();
	});
	
	//포트폴리오 큰이미지 클릭하면 없어진다.
	$(".big"). click(function(){
		$(this).fadeOut();
	});
	
	
});////////////////end