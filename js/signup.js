 Parse.initialize("LQEVwvYLPDG5Fj6qqbCXrUZ2qe83fCgci0GPBuda", "9blj4eNY1aHzoIUJ2zU9yk1zntZs5kyQ2XApNBlu");

$("#submit").click(function(){
	var user = new Parse.User();

 var username = $("#username").val();
 var password = $("#password").val();

	// Console.log("user");
	// Console.log("pass");

 user.set("username", username);
 user.set("password", password);
	
  user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    alert("Thanks for signing up, " + username + "!");
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

	});


