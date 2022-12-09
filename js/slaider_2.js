$(".arrow-2").click(function() {
	var arrow_name = $(this).attr("id");
	var image_id = $(".slaider-2-img").attr("id");
	if (arrow_name == "left") {
		if(image_id != 1) {
            $(".slaider-2-text").attr("class", "slaider-2-text hidden");
			image_id--;
            let id = image_id - 1;
            $(".slaider-2-text").eq(id).attr("class", "slaider-2-text show");
			$(".slaider-2-img").attr("src","images/slaider_2/"+image_id+".png");
			$(".slaider-2-img").attr("id",image_id);
		}
	} else {
		if(image_id != 6) {
            $(".slaider-2-text").attr("class", "slaider-2-text hidden");
			image_id++;
            let id = image_id - 1;
            $(".slaider-2-text").eq(id).attr("class", "slaider-2-text show");
			$(".slaider-2-img").attr("src","images/slaider_2/"+image_id+".png");
			$(".slaider-2-img").attr("id",image_id);
		}
	}
});
