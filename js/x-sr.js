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
    scrollnumber(".middle",'middle-a',200);  
    scrollnumber(".danger",'danger-a',200); 
}       
$(document).ready(function(e) {  
    scrollfun();  
    $(window).scroll(function(){  
        scrollfun();  
    });  
});  