$(function(){
	// var a = document.getElementsByClassName("section-link");
	$(".sidebar-nav ul li").live("click",function(){
		var nextTagName = $(this).next().prop("tagName");
		if(nextTagName == "UL"){
			$(this).next().toggle();
		}
	})
})