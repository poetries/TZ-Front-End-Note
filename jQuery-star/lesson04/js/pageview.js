(function($){
	$.fn.pageView = function(ops){//fnjQuery的原型 pageView 方法 也就是插件的名字
		//alert(ops);
		this.ops = ops ||{};//this指代当前被代理的jQuery对象
		init.call(this );//初始化函数的作用就是初始化HTML结构
		listener.call(this);//绑定滚轮事件  实现翻页
	}
	function init(){
		//this.ops//this指代目标代理对象
		
		this.index = 0;//当前索引为0
		this.addClass("ui-pageview");
		this.children("div").addClass("ui-page");
		this.$maxIndex = $("div.ui-page",this).size()-1;
	}
	function listener(){
			var $this = this;//在调用的时候指的是当前的代理对象 
			this.bind("mousewheel",function(e){//在这个括号下面的this指的是原生的对象
				var dir = e.originalEvent.wheelDelta;
				dir = dir>0?1:0;
				var $index = $this.index;
			
				if(dir){
					if(--$index<0){
						return;
					}
					
				}else{
					if(++$index>$this.$maxIndex){
						return;
					}
					
				}
				if(!$this.is(":animated")){//状态判断
					$this.animate({"top":"-"+$index+"00%"},1000);
					$this.index = $index;
				}
				

			}); 
	}
})(jQuery);