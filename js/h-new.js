$(function(){
	function scrollnumber(element,cssname,offset){  
    var a,b,c,d;  
    d=$(element).offset().top;  
    a=eval(d + offset);  
    b=$(window).scrollTop();   
    c=$(window).height();  
    if(b+c>a){  
        $(element).addClass(cssname);  
    }  
}  
  
function scrollfun(){   
    scrollnumber(".new1",'middle-a',100);   
    scrollnumber(".h-list2",'middle-b',100);   
}  
      
$(document).ready(function(e) {  
    scrollfun();  
    $(window).scroll(function(){  
        scrollfun();  
    });  
});  
	
	
	
	
	
	
	
	
	
	
	
	
})