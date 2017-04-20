$(function(){
	let n=0;
	let img=document.querySelectorAll(".W-shouye-bannerbox>li")
	let cir=document.querySelectorAll(".W-shouye-circlebox>li")
	let div=document.querySelector('.W-shouye-banner')
	console.log(img,cir,div)
	let move=function(way=right){
	if(way==right){
		n++;
		if(n>=img.length){
			n=0;
		}
	}else if(way==left){
		n--;
		if(n<0){
			n=img.length-1;
		}
	}
	
	for(let i=0;i<img.length;i++){
		img[i].classList.remove("first");
		cir[i].classList.remove("first");
		
	}
		img[n].classList.add('first');
		cir[n].classList.add("first");
	}
	let t=setInterval(move,5000)//move没括号，运行才有
	div.onmouseover=function(){
		 clearInterval(t);
	}
	div.onmouseout=function(){
		t=setInterval(move,5000)
	}
	
	
	let left=document.querySelector('.W-shouye-left');
	let right=document.querySelector('.W-shouye-right');
	
	left.onclick=function(){
		if(flag=true){
			flag=false;
			move(left);
		}
		
	}
	right.onclick=function(){
		if(flag=true){
			flag=false;
			
			move(right);
		}
	}
	


})
