(function($){
	$.fn.pagebar = function(){
		this.each(function(){
			var $this = $(this);
			var $width = $this.width();
			var $size = $this.attr("page-size");
			var $content = $('ul.content',this);
			var $items = $content.children("li");
			$items..width($width/$size);

		});
	}
})(jQuery);