
var income = 5;


//  ** Income Screen **
//Switch from income screen to expenses screen
$("#btn-income").click(function() {
  /* Run validations on input
  validateInt(rent);
  validateInt(additionalIncome);
  */
  var rent = $("#rent").val()
  var additionalIncome = $("#additional").val();
  income = parseInt(rent) + parseInt(additionalIncome);

  $(".expenses").removeClass("collapse");
  $(".income").addClass("collapse");
  
});

//  ** Expenses Screen **
//Switch from expenses screen to cash flow screen
$("#btn-expenses").click(function() {
  $(".cashFlow").removeClass("collapse");
  $(".expenses").addClass("collapse");

});
//Switch from expenses screen to income screen
$("#btn-expenses-back").click(function() {
  $(".income").removeClass("collapse");
  $(".expenses").addClass("collapse");
});


//  ** Cash Flow Screen **
//Switch from cash flow screen to COCROI screen
$("#btn-cashFlow").click(function() {
  $(".coc").removeClass("collapse");
  $(".cashFlow").addClass("collapse");
});
//Switch from cash flow screen to expenses screen
$("#btn-cashFlow-back").click(function() {
  $(".expenses").removeClass("collapse");
  $(".cashFlow").addClass("collapse");
});

//  ** COCROI Screen **
//Switch from COCROI screen to cash flow screen
$("#btn-coc-back").click(function() {
  $(".cashFlow").removeClass("collapse");
  $(".coc").addClass("collapse");
});
//Placeholder for ROI calculation
$("#btn-coc").click(function() {
  $(".income").removeClass("collapse");
  $(".coc").addClass("collapse");
});
