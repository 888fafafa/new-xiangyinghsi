$(function(){
 $('.h-hrights').click(function(){
 	if($(".h-yingc").css("display")=="none"){
$(".h-yingc").show();
}else{
$(".h-yingc").hide();
}
});
 $('.h-hleft input').focus(function(){
 	$('.h-hleft>i').css("display","none");
 })
  $('.h-hleft input').focusout(function(){
 	$('.h-hleft>i').css("display","block");
 })
 
})