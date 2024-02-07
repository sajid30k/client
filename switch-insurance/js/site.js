//How did you hear about us
$(document).ready(function() {
  $("#hearAboutCompnay").change(function() {
    if (
      $(this).val() === "Friends & Family" ||
      $(this).val() === "Existing Customer"
    ) {
      $("#referrersnamedropdown").slideDown();
    } else {
      $("#referrersnamedropdown").slideUp();
    }
  });

  // THIS Section for customer employment details.
  $("#employmentdetails, #studentdetails").slideUp();
  $("#employment").change(function() {
    if (
      $(this).val() === "Employed" ||
      $(this).val() === "Self-employed" ||
      $(this).val() === "Voluntary"
    ) {
      $("#employmentdetails").slideDown();
      $("#studentdetails").slideUp();
      $("#industry, #occupation").val("");
    } else if ($(this).val() === "Full/Part Time Education") {
      $("#employmentdetails").slideUp();
      $("#studentdetails").slideDown();
      $("#student, #course").val("");
    } else {
      $("#employmentdetails, #studentdetails").slideUp();
    }
  });
  // THIS Section for car registration number.
  $("#regYes , #regNo").change(function() {
    if ($("#regYes").is(":checked")) {
      $("#regAuto").slideDown();
      $("#regManual").hide();
    } else if ($("#regNo").is(":checked")) {
      $("#regManual").slideDown();
      $("#regAuto").hide();
    }
  });
  //modifications Section
  $("#modificationsYes , #modificationsNo").change(function() {
    if ($("#modificationsYes").is(":checked")) {
      $(".mod").slideDown();
    } else {
      $(".mod").slideUp();
    }
  });
  //Date of car purchase
  $("#purchasedCarYes , #purchasedCarNo").change(function() {
    if ($("#purchasedCarYes").is(":checked")) {
      $(".carpurchasedBox").slideDown();
    } else {
      $(".carpurchasedBox").slideUp();
    }
  });
  //Customer UK resident Date
  $("#customerResidentYes , #customerResidentNo").change(function() {
    if ($("#customerResidentNo").is(":checked")) {
      $("#ukresident").slideDown();
    } else {
      $("#ukresident").slideUp();
    }
  });
  //Customer licence type
  $("#licenceType").change(function() {
    if (
      $(this).val() === "Full UK Manual" ||
      $(this).val() === "Full UK Automatic" ||
      $(this).val() === "Provisional UK" ||
      $(this).val() === "Full UK-Pass Plus" ||
      $(this).val() === "Full UK-IAM"
    ) {
      $(".licenceTypedropdown").slideDown();
    } else {
      $(".licenceTypedropdown").slideUp();
    }
  });
  //Customer licence nuber
  $("#licenceNumberYes , #licenceNumberNo").change(function() {
    if ($("#licenceNumberYes").is(":checked")) {
      $("#licenceNumberMainID").slideDown();
    } else {
      $("#licenceNumberMainID").slideUp();
    }
  });
  //What date was your licence obtained?
  $("#licenceYear").change(function() {
    if (
      $(this).val() === "Less than a year" ||
      $(this).val() === "1 Year" ||
      $(this).val() === "2 Years" ||
      $(this).val() === "3 Years" ||
      $(this).val() === "4 Years"
    ) {
      $("#dateOfLicenceDropDown").slideDown();
      $("#licenceYeartext").text(
        "How long have you held this licence?(important)"
      );
    } else {
      $("#licenceYeartext").text(
        "How long have you held this licence?(optional)"
      );
      $("#dateOfLicenceDropDown").slideDown();
    }
  });
  //Driver qualification
  $("#qualifications").change(function() {
    if (
      $(this).val() === "AA Proficiency" ||
      $(this).val() === "Institute of Advance Motorists" ||
      $(this).val() === "Pass Plus"
    ) {
      $("#qualificationsdropdown").slideDown();
    } else {
      $("#qualificationsdropdown").slideUp();
    }
  });
  //Accident False
  // Attach click event to the button
  $("#MotorAccidentsYes").on("click", function() {
    // Deactivate the radio button
    $("#MotorAccidentsNo").prop("checked", false);
  });
  //convictions False
  // Attach click event to the button
  $("#convictionsYes").on("click", function() {
    // Deactivate the radio button
    $("#convictionsNo").prop("checked", false);
  });
  //breathalyser reading
  $("#breathalysedYes , #breathalysedNo").change(function() {
    if ($("#breathalysedYes").is(":checked")) {
      $("#readingdropdown").slideDown();
    } else if ($("#breathalysedNo").is(":checked")) {
      $("#readingdropdown").slideUp();
    }
  });
  //IF vehicle kept another address
  $("#vehicleKeptAddressYes , #vehicleKeptAddressNo").change(function() {
    if ($("#vehicleKeptAddressNo").is(":checked")) {
      $("#anotherAddressdropdown").slideDown();
    } else if ($("#vehicleKeptAddressYes").is(":checked")) {
      $("#anotherAddressdropdown").slideUp();
    }
  });
  //insurance declined
  $("#declinedinsureYes , #declinedinsureNo").change(function() {
    if ($("#declinedinsureYes").is(":checked")) {
      $("#DeclinedInsurancedropdown").slideDown();
    } else if ($("#declinedinsureNo").is(":checked")) {
      $("#DeclinedInsurancedropdown").slideUp();
    }
  });
  //IF NCB EARN FROM ANOTHER COUNTRY
  $("#ncbEarnYes , #ncbEarnNo").change(function() {
    if ($("#ncbEarnNo").is(":checked")) {
      $("#ncdEarnAnotherCountry").slideDown();
    } else {
      $("#ncdEarnAnotherCountry").slideUp();
    }
  });
  //Additional Drivers Section
  $("#additionaldriverYes , #additionaldriverNo").change(function() {
    if ($("#additionaldriverYes").is(":checked")) {
      window.location.href = "driver.html";
    }
  });
  //accident Type
  $("#accidentType").change(function() {
    if ($(this).val() === "Other") {
      $("#otherAccidentType").slideDown();
    } else {
      $("#otherAccidentType").slideUp();
    }
  });
  //fuel type
  $("#fueltype").change(function() {
    if ($(this).val() === "Other") {
      $("#otherfuelType").slideDown();
    } else {
      $("#otherfuelType").slideUp();
    }
  });
  //Other DVLA CODE DROPDOWN
  $("#convictionCodes").change(function() {
    if ($(this).val() === "other") {
      $("#otherDvlsCodedropdwon").slideDown();
    } else {
      $("#otherDvlsCodedropdwon").slideUp();
    }
  });
  //Date picker
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yyyy", // Set your desired date format
    language: "en" // Set the language to English
  });
  $("#coverStartDate").datepicker({
    dateFormat: "dd/mm/yyyy", // Set your desired date format
    language: "en" // Set the language to English
  });
  $("#policystartDate").datepicker({
    dateFormat: "dd/mm/yyyy", // Set your desired date format
    language: "en" // Set the language to English
  });
  //Other Lock Type
  $("#droorLock").change(function() {
    if ($(this).val() === "Other Lock") {
      $("#otherLockTypeDropdown").slideDown();
    } else {
      $("#otherLockTypeDropdown").slideUp();
    }
  });
  //Other Lock Type
  $("#externalDoorsLock").change(function() {
    if ($(this).val() === "Other Lock") {
      $("#externalDoorLockDroopDown").slideDown();
    } else {
      $("#externalDoorLockDroopDown").slideUp();
    }
  });
  //previous Home insuracen Claim history
  $("#damageHomeYes , #damageHomeNo").change(function() {
    if ($("#damageHomeNo").is(":checked")) {
      $("#claimHistoryDropdown").slideDown();
    } else {
      $("#claimHistoryDropdown").slideUp();
    }
  });
  //IF correspondence Address NO
  $("#correspondenceAddressYes , #correspondenceAddressNo").change(function() {
    if ($("#correspondenceAddressNo").is(":checked")) {
      $(".correspondenceAddressdropdown").slideDown();
    } else {
      $(".correspondenceAddressdropdown").slideUp();
    }
  });
  //IF anyone live upstairs
  $("#liveupstairsYes , #liveupstairsNo").change(function() {
    if ($("#liveupstairsYes").is(":checked")) {
      $("#liveupstairsdropdown").slideDown();
    } else {
      $("#liveupstairsdropdown").slideUp();
    }
  });
  //Is the alarm being checked regularly by any organization
  $("#alarmInpremisesYes , #alarmInpremisesNo").change(function() {
    if ($("#alarmInpremisesYes").is(":checked")) {
      $("#alarmInpremisesdropdown").slideDown();
    } else {
      $("#alarmInpremisesdropdown").slideUp();
    }
  });
  //running a Café, Take Away and Restaurant
  $("#kitchenincafePremisesYes , #kitchenincafePremisesNo").change(function() {
    if ($("#kitchenincafePremisesYes").is(":checked")) {
      $("#ifrunningCafedropdown").slideDown();
    } else {
      $("#ifrunningCafedropdown").slideUp();
    }
  });
  //witnesses
  // Attach click event to the button
  $("#witnessesYes").on("click", function() {
    // Deactivate the radio button
    $("#witnessesNo").prop("checked", false);
  });
  //Van Type of Business Use
  $("#useofVehicle").change(function (e) { 
    e.preventDefault();
    if($(this).val()=== "Business Use"){
      $("#vanBusinessTypeDropDown").slideDown();
    }else{
      $("#vanBusinessTypeDropDown").slideUp();
    }
  });
});
