// JavaScript Document
jQuery.myPlugin={
	tableUI:function(tableHead,tableBody,tdHeight){
	   $("body").append('<div id="scrollbar"></div>');
	   var scrollbarWidth = document.getElementById('scrollbar').offsetWidth - document.getElementById('scrollbar').scrollWidth;
	   $("."+tableBody).wrap('<div class="td-wrap"></div>');
	   $("."+tableHead).wrap('<div class="th-wrap"></div>');
	   var tableHeight=$("."+tableBody).height();
	   if(tableHeight<=tdHeight){
		   $(".th-wrap").css("padding-right","0px");
		   $("."+tableHead).find("tr").find("th:last").css("border-right-width","0px");
		   $("."+tableBody).find("tr").find("td:last").css("border-right-width","0px");
	   }
	   else{
		   scrollWidth();
	   }
	   $(".td-wrap").css("height",tdHeight);
	   $("."+tableBody).find("tr:even").addClass("evenRow");
	   $("."+tableBody).find("tr:odd").addClass("oddRow");
	   $("."+tableBody).find("tr:first").find("td").css("border-top",0);
	   $("."+tableBody).find("tr").bind("mouseover",function(){
				$(this).addClass("activeRow");
				});
	   $("."+tableBody).find("tr").bind("mouseout",function(){
				$(this).removeClass("activeRow");
				});
	}
};
var winHeight=document.documentElement.clientHeight;
var tdHeight=winHeight-207;
function scrollWidth(){
	var tableHeight=$(".table-tree-td").height();
	if(tableHeight<=tdHeight){
		$(".th-wrap").css("padding-right","0px");
		$(".table-tree-th").find("tr").find("th:last").css("border-right-width","0px");
		$(".table-tree-td").find("tr:first-child").find("td:last-child").css("border-right-width","0px");
	}
	else{
		$(".th-wrap").css("padding-right","17px");
		$(".table-tree-th").find("tr").find("th:last").css("border-right-width","1px");
		$(".table-tree-td").find("tr:last").find("td").css("border-bottom",0);
		$(".table-tree-td").find("tr:first-child").find("td:last-child").css("border-right-width","1px");
		if (!$.support.hrefNormalized){
			$(".td-wrap").css("padding-right","17px");
		};
	}
	
}
$(function(){
	//$.myPlugin.tableUI("table-tree-th","table-tree-td",tdHeight);
})
	








