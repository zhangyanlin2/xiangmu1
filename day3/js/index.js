$(function(){
	//ctrl+shift+f自动调整代码格式
	//获取屏幕的宽高
	var nowpage=0;
//	当前页数
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(4*height);
	$(".page").height(height);
	$(".page").height(height);
	//不是jQuery自带的，是引入的插件
	//手指触屏滑动的事件
	
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			//onsole.log(direction);
			//滑动分页功能
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=0;
			}else if(nowpage>3){
				nowpage=3;
			}
				
	//animate要做的动画效果，duration：动画执行完了要做的事情
		$(".content").animate({
		top:-nowpage*100+"%"
		},{
			duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-Farm").fadeIn(2000,function(){
						$(".page2-IT").fadeIn(2000)
					})
				}
				if(nowpage==2){
					$(".page3-et").fadeIn(3000);
					$(".page3-lt").fadeIn(2000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000});
					$(".page3-hunman").animate({right:"20%"},{duration:3000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-BusStation").fadeOut("slow");
						$(".page3-et").fadeOut("slow");
						$(".page3-hunman").fadeOut("slow");
						$(".page3-lt").fadeOut("slow",function(){
							$(".page3-Wall").fadeIn("slow");
							$(".page3-hunman2").fadeIn("slow",function(){
								$(".page3-txt").animate({width:"30%"},{duration:4000,complete:function(){
									$(".page3-WhereTxt").animate({width:"55%"},{duration:400})
								}})
							});
						});
					}});

					
				}
			}
			})
		}
	});	
	
	$(".page1-Builing").fadeIn(400,function(){
		$(".page1-Flight").animate({width:"70%"},{duration:2000})
	})
	})
$(".page4-light").click(function(){
	$(this).attr("src","img/lightOn.png")
	$(".page4-Title").fadeOut("slow")
	$(".page4-Guide").fadeOut("slow",function(){
		$(".page4-bg2").fadeIn("slow");
		$(".page4-txt").fadeIn("slow")
	})
})
/*$(document).ready(function(){

})*/
//等文档完成之后在执行js代码
