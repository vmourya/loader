$(document).ready(function(){
	$("body").append("<span class='loader left-loader'></span><span class='loader top-loader'></span><span class='loader right-loader'></span><span class='loader bottom-loader'></span>");
	var i=1;
	var rv=false;
	setInterval(function(){
		if(!rv){
			if(i<101){
				$(".left-loader").css('height' , i + "%");
			}else if(i < 201){
				$(".top-loader").css('width' , i - 100 + "%");	
			}else if(i < 301){
				$(".right-loader").css('height' , i - 200 + "%");	
			}else if(i < 401){
				$(".bottom-loader").css('width' , i - 300 + "%");	
			}else if(i < 451){
				$(".left-loader").css('width' , i - 400 + "%");
				$(".top-loader").css('height' , i - 400 + "%");
				$(".right-loader").css('width' , i - 400 + "%");
				$(".bottom-loader").css('height' , i - 400 + "%");
				$(".bottom-loader").css('width' , 100 - (i - 400) + "%");
			}else{
				rv=true;
				i--;
			}
			i++;
		}else{
			if(i > 400){
				$(".left-loader").css('width' , i - 400 + "%");
				$(".top-loader").css('height' , i - 400 + "%");
				$(".right-loader").css('width' , i - 400 + "%");
				$(".bottom-loader").css('height' , i - 400 + "%");
				$(".bottom-loader").css('width' , 100 - (i - 400) + "%");				
			}else if(i > 299){
				$(".bottom-loader").css('width' , i - 300 + "%");	
			}else if(i > 199){
				$(".right-loader").css('height' , i - 200 + "%");
			}else if(i > 99){
				$(".top-loader").css('width' , i - 100 + "%");	
			}else if(i >= 0){
				$(".left-loader").css('height' , i + "%");
			}else{
				$('.loader').remove();
			}
			if(i==0){
				i=2;
				rv=false;
			}
			i--;
		}
		
	},10);
});