window.onload=function(){

	var aPic=document.getElementById('pic').getElementsByTagName('li');
	var aNav=document.getElementById('pagination').getElementsByTagName('li');

	var timer=null;
	var index=0;

	// 鼠标移入移出改变索引 
	for(var i=0;i<aNav.length;i++){
		aNav[i].index=i;

		aNav[i].onmouseenter=function(){
			changePic(this.index);
			clearInterval(timer);  //鼠标移入时清除定时器
		};
		aNav[i].onmouseleave=function(){
			timer=setInterval(autoPlay,2500);
		};
	};

	if (timer) {
		clearInterval(timer);
		timer=null;//释放内存
	}

	//添加定时器 
	timer=setInterval(autoPlay,2500);

	function autoPlay(){
		index++
		if (index>=aNav.length) {
			index=0;
		}
		changePic(index);
	};

	function changePic(curIndex){
		for(var j=0;j<aNav.length;j++){
			aNav[j].className='';
			aPic[j].style.display='none';
		};
		aNav[curIndex].className='active';
		aPic[curIndex].style.display='block';
		index=curIndex;
	};
};



