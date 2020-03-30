
$("button[name='submit']").click(function() {
   var passwordField = $("input[name='password']");
   var password = passwordField.val();
   var isOkay = true;
   if (password.length < 10) {
     isOkay = false;
     $('#atLeast10Chars').show();
   }
   if (/\d/.test(password) == false) {
     isOkay = false;
     $('#needsNumber').show();
   }
   if (isOkay == false) {
     $('#successMessage').hide();
     $('#errorMessage').show();
     passwordField.removeClass("goodBox").addClass("errorBox");
   }
   else {
     $('.errorText').hide();
     $('#successMessage').show();
     passwordField.removeClass("errorBox").addClass("goodBox");   
   }
   return false;
});


