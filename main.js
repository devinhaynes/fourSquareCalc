//Calculation variables
var income = 0;
var expenses = 0;
var cashFlow = 0;
var acf = 0;
var cocROI = 0;

// income variables
var rent = 0;
var additionalIncome = 0;
// expenses variables
var tax = 0;
var insurance = 0;
var utilities = 0;
var vacancy = 0;
var repairs = 0;
var capEx = 0;
var propMan = 0;
var mortgage = 0;
var otherEx = 0;
// COCROI variables
var dp = 0;
var cc = 0;
var rehab = 0;
var totalInvestment = 0;
//Calculator inputs
let inputs = "";

//  ** Income Screen **
$("#btn-income").click(function() {
  //Get income input values
  !$("#rent").val() ? rent = 0 : rent = $("#rent").val();
  !$("#additional").val() ? additionalIncome = 0 : additionalIncome = $("#additional").val();
  income = parseInt(rent) + parseInt(additionalIncome);

  //Send to results screen
  $("#results-rent").val(rent);
  $("#results-additional").val(additionalIncome);
  $("#results-total").val(income);

  //Switch focus
  $(".expenses").removeClass("collapse");
  $(".income").addClass("collapse");

});

//  ** Expenses Screen **
$("#btn-expenses").click(function() {
  !$("#tax").val() ? tax = 0 : tax = parseInt($("#tax").val());
  !$("#insurance").val() ? insurance = 0 : insurance = parseInt($("#insurance").val());
  !$("#utilities").val() ? utilities = 0 : utilities = parseInt($("#utilities").val());
  !$("#vacancy").val() ? vacancy = 0 : vacancy = parseInt($("#vacancy").val());
  !$("#repairs").val() ? repairs = 0 : repairs = parseInt($("#repairs").val());
  !$("#capEx").val() ? capEx = 0 : capEx = parseInt($("#capEx").val());
  !$("#propMan").val() ? propMan = 0 : propMan = parseInt($("#propMan").val());
  !$("#mortgage").val() ? mortgage = 0 : mortgage = parseInt($("#mortgage").val());
  !$("#otherEx").val() ? otherEx = 0 : otherEx = parseInt($("#otherEx").val());
  expenses = tax + insurance + utilities + repairs + capEx + propMan + mortgage + otherEx;

  //Send to results screen
  $("#results-tax").val(tax);
  $("#results-insurance").val(insurance);
  $("#results-utilities").val(utilities);
  $("#results-vacancy").val(vacancy);
  $("#results-repairs").val(repairs);
  $("#results-capEx").val(capEx);
  $("#results-propMan").val(propMan);
  $("#results-mortgage").val(mortgage);
  $("#results-otherEx").val(otherEx);
  $("#results-expenses").val(expenses);

  //Calc cash flow
  cashFlow = income - expenses;
  acf = cashFlow * 12;
  $("#cashFlow-monthly").val(cashFlow);
  $("#cashFlow-annual").val(acf);

  //Send to results screen
  $("#results-cashFlow").val(cashFlow);

  $(".cashFlow").removeClass("collapse");
  $(".expenses").addClass("collapse");

});
//Switch from expenses screen to income screen
$("#btn-expenses-back").click(function() {
  $(".income").removeClass("collapse");
  $(".expenses").addClass("collapse");
});


//  ** Cash Flow Screen **
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
  !$("#dp").val() ? dp = 0 : dp = parseInt($("#dp").val());
  !$("#cc").val() ? cc = 0 : cc = parseInt($("#cc").val());
  !$("#rehab").val() ? rehab = 0 : rehab = parseInt($("#rehab").val());
  totalInvestment = dp + cc + rehab;

  //Send to results screen
  $("#results-dp").val(dp);
  $("#results-cc").val(cc);
  $("#results-rehab").val(rehab);
  $("#results-investment").val(totalInvestment);

  //Calculate COCROI
  $("#results-cocROI").val(parseFloat((acf / totalInvestment) * 100).toFixed(2));

  $(".results").removeClass("collapse");
  $(".coc").addClass("collapse");
});
//Display final results
$("#btn-results").click(function() {
  $(".income").removeClass("collapse");
  $(".results").addClass("collapse");
})
//Display Calc
$(".burger").click(function() {
  $(".calc").removeClass("collapse");
})
//Close Calc
$(".closeCalc").click(function() {
  $(".input-display").val("0");
  inputs = "";
  $(".calc").addClass("collapse");
})
//Update calc display
$(".bttn").click(function() {
  if(this.value == "=") {
    let results = eval(inputs);
    $(".input-display").val(results);
    inputs = "";
  } else {
    inputs += this.value;
    $(".input-display").val(inputs);
  }

  //$(".input-display").val(this.value);
})
