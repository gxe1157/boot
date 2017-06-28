$(function(){
	
  $("#register-form").validate({
    rules: {
      firstname: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      lastname: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      }

	  }
  }); 
});
