$(function(){
	$("#key_log").keyup(function(){
		$key = $("#key_log").val();

		if($key.length > 0) {
			$("#key_log").removeClass("is-invalid");
			$("#key_log").addClass("is-valid");
			$("#valid_comment").removeClass("invalid-feedback");
			$("#valid_comment").addClass("valid-feedback");
			$("#valid_comment").text("Looks good!");
		}else{
			$("#key_log").removeClass("is-valid");
			$("#key_log").addClass("is-invalid");
			$("#valid_comment").removeClass("valid-feedback");
			$("#valid_comment").addClass("invalid-feedback");
			$("#valid_comment").text("Please provide a valid key logger");
		}
	});

	var term_click = 0;
	$("#term").click(function(){
		term_click += 1;

		// if the user click `agree with the term` -> term_click will be 1,3,5 -> remove `disabled`
		// if not, term_click will be 2,4,6 -> add `disabled`
		if(term_click % 2 == 0) {
			$("#submit_btn").attr("disabled",true);
		}else{
			$("#submit_btn").removeAttr("disabled");
		}
	})
});
