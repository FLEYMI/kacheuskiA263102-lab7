$(".arrow-1").click(function() {
	var arrow_name = $(this).attr("id");
	var image_id = $(".slaider-1-img").attr("id");
	if (arrow_name == "left") {
		if(image_id != 1) {
			image_id--;
			$(".slaider-1-img").attr("src","images/slaider_1/"+image_id+".png");
			$(".slaider-1-img").attr("id",image_id);
		}
	} else {
		if(image_id != 6) {
			image_id++;
			$(".slaider-1-img").attr("src","images/slaider_1/"+image_id+".png");
			$(".slaider-1-img").attr("id",image_id);
		}
	}
});