$(document).ready(function() {
  // Initial setup
  updateDays();

  // Event handler for month change
  $("#month").change(function() {
    updateDays();
  });

  function updateDays() {
    const monthSelect = $("#month");
    const daySelect = $("#day");
    const selectedMonth = parseInt(monthSelect.val(), 10);
    const daysInMonth = new Date(
      new Date().getFullYear(),
      selectedMonth,
      0
    ).getDate();

    // Clear current options and add default option
    daySelect.empty().append(
      $("<option>", {
        value: "",
        text: "Day",
        disabled: true,
        selected: true
      })
    );

    // Populate days based on the selected month
    for (let day = 1; day <= daysInMonth; day++) {
      daySelect.append($("<option>", { value: day, text: day }));
    }
  }
});

// THIS Section for customer employment details.
$(document).ready(function() {
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
});
// THIS Section for car registration number.
$(document).ready(function() {
  $("#regYes , #regNo").change(function() {
    if ($("#regYes").is(":checked")) {
      $("#regAuto").slideDown();
      $("#regManual").hide();
    } else if ($("#regNo").is(":checked")) {
      $("#regManual").slideDown();
      $("#regAuto").hide();
    }
  });
});
//modifications Section
$(document).ready(function() {
  $("#modificationsYes , #modificationsNo").change(function() {
    if ($("#modificationsYes").is(":checked")) {
      $(".mod").slideDown();
    } else {
      $(".mod").slideUp();
    }
  });
});

//Date of car purchase
$(document).ready(function() {
  $("#purchasedCarYes , #purchasedCarNo").change(function() {
    if ($("#purchasedCarYes").is(":checked")) {
      $(".carpurchasedBox").slideDown();
    } else {
      $(".carpurchasedBox").slideUp();
    }
  });
});
//Customer UK resident Date
$(document).ready(function() {
  $("#customerResidentYes , #customerResidentNo").change(function() {
    if ($("#customerResidentNo").is(":checked")) {
      $("#ukresident").slideDown();
    } else {
      $("#ukresident").slideUp();
    }
  });
});
//Customer licence type
$(document).ready(function() {
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
});
//Customer licence nuber
$(document).ready(function() {
  $("#licenceNumberYes , #licenceNumberNo").change(function() {
    if ($("#licenceNumberYes").is(":checked")) {
      $("#licenceNumberMainID").slideDown();
    } else {
      $("#licenceNumberMainID").slideUp();
    }
  });
});

//What date was your licence obtained?
$(document).ready(function() {
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
});
//Driver qualification
$(document).ready(function() {
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
});
//Accident False
$(document).ready(function() {
  // Attach click event to the button
  $("#MotorAccidentsYes").on("click", function() {
    // Deactivate the radio button
    $("#MotorAccidentsNo").prop("checked", false);
  });
});
//convictions False
$(document).ready(function() {
  // Attach click event to the button
  $("#convictionsYes").on("click", function() {
    // Deactivate the radio button
    $("#convictionsNo").prop("checked", false);
  });
});
//breathalyser reading
$(document).ready(function() {
  $("#breathalysedYes , #breathalysedNo").change(function() {
    if ($("#breathalysedYes").is(":checked")) {
      $("#readingdropdown").slideDown();
    } else if ($("#breathalysedNo").is(":checked")) {
      $("#readingdropdown").slideUp();
    }
  });
});
//IF vehicle kept another address
$(document).ready(function() {
  $("#vehicleKeptAddressYes , #vehicleKeptAddressNo").change(function() {
    if ($("#vehicleKeptAddressNo").is(":checked")) {
      $("#anotherAddressdropdown").slideDown();
    } else if ($("#vehicleKeptAddressYes").is(":checked")) {
      $("#anotherAddressdropdown").slideUp();
    }
  });
});
//insurance declined
$(document).ready(function() {
  $("#declinedinsureYes , #declinedinsureNo").change(function() {
    if ($("#declinedinsureYes").is(":checked")) {
      $("#DeclinedInsurancedropdown").slideDown();
    } else if ($("#declinedinsureNo").is(":checked")) {
      $("#DeclinedInsurancedropdown").slideUp();
    }
  });
});
//NCB SECTION
$(document).ready(function() {
  $("#ncb").change(function() {
    if ($(this).val() === "NO NCD") {
      $("#ncbfromOtherCar").slideDown();
      $("#ncdEarnDetails").slideUp();
    } else {
      $("#ncdEarnDetails").slideDown();
      $("#ncbfromOtherCar").slideUp();
    }
  });
});
//IF NCB EARN FROM ANOTHER COUNTRU
$(document).ready(function() {
  $("#ncbEarnYes , #ncbEarnNo").change(function() {
    if ($("#ncbEarnNo").is(":checked")) {
      $("#ncdEarnAnotherCountry").slideDown();
    } else {
      $("#ncdEarnAnotherCountry").slideUp();
    }
  });
});

//Additional Drivers Section
$(document).ready(function() {
  $("#additionaldriverYes , #additionaldriverNo").change(function() {
    if ($("#additionaldriverYes").is(":checked")) {
      window.location.href = "driver.html";
    }
  });
});
//How did you hear about us
$(document).ready(function() {
  $("#findcompany").change(function() {
    if (
      $(this).val() === "Friends & Family" ||
      $(this).val() === "Existing Customer"
    ) {
      $("#referrersnamedropdown").slideDown();
    } else {
      $("#referrersnamedropdown").slideUp();
    }
  });
});
//accident Type
$(document).ready(function() {
  $("#accidentType").change(function() {
    if ($(this).val() === "Other") {
      $("#otherAccidentType").slideDown();
    } else {
      $("#otherAccidentType").slideUp();
    }
  });
});

//fuel type
$(document).ready(function() {
  $("#fueltype").change(function() {
    if ($(this).val() === "Other") {
      $("#otherfuelType").slideDown();
    } else {
      $("#otherfuelType").slideUp();
    }
  });
});
//Other DVLA CODE DROPDOWN
$(document).ready(function() {
  $("#convictionCodes").change(function() {
    if ($(this).val() === "other") {
      $("#otherDvlsCodedropdwon").slideDown();
    } else {
      $("#otherDvlsCodedropdwon").slideUp();
    }
  });
});
//Date picker
$(document).ready(function() {
  $("#datepicker").datepicker({
    dateFormat: "dd/mm/yyyy", // Set your desired date format
    language: "en" // Set the language to English
    // Additional options can be added as needed
  });
});
$(document).ready(function() {
  $("#coverStartDate").datepicker({
    dateFormat: "dd/mm/yyyy", // Set your desired date format
    language: "en" // Set the language to English
    // Additional options can be added as needed
  });
});
$(document).ready(function() {
  $("#policystartDate").datepicker({
    dateFormat: "dd/mm/yyyy", // Set your desired date format
    language: "en" // Set the language to English
    // Additional options can be added as needed
  });
});
//Other Lock Type
$(document).ready(function() {
  $("#droorLock").change(function() {
    if ($(this).val() === "Other Lock") {
      $("#otherLockTypeDropdown").slideDown();
    } else {
      $("#otherLockTypeDropdown").slideUp();
    }
  });
});
//Other Lock Type
$(document).ready(function() {
  $("#externalDoorsLock").change(function() {
    if ($(this).val() === "Other Lock") {
      $("#externalDoorLockDroopDown").slideDown();
    } else {
      $("#externalDoorLockDroopDown").slideUp();
    }
  });
});
//previous Home insuracen Claim history
$(document).ready(function() {
  $("#damageHomeYes , #damageHomeNo").change(function() {
    if ($("#damageHomeNo").is(":checked")) {
      $("#claimHistoryDropdown").slideDown();
    } else {
      $("#claimHistoryDropdown").slideUp();
    }
  });
});
//IF correspondence Address NO
$(document).ready(function() {
  $("#correspondenceAddressYes , #correspondenceAddressNo").change(function() {
    if ($("#correspondenceAddressNo").is(":checked")) {
      $(".correspondenceAddressdropdown").slideDown();
    } else {
      $(".correspondenceAddressdropdown").slideUp();
    }
  });
});
//IF anyone live upstairs
$(document).ready(function() {
  $("#liveupstairsYes , #liveupstairsNo").change(function() {
    if ($("#liveupstairsYes").is(":checked")) {
      $("#liveupstairsdropdown").slideDown();
    } else {
      $("#liveupstairsdropdown").slideUp();
    }
  });
});
//Is the alarm being checked regularly by any organization
$(document).ready(function() {
  $("#alarmInpremisesYes , #alarmInpremisesNo").change(function() {
    if ($("#alarmInpremisesYes").is(":checked")) {
      $("#alarmInpremisesdropdown").slideDown();
    } else {
      $("#alarmInpremisesdropdown").slideUp();
    }
  });
});
//running a Café, Take Away and Restaurant
$(document).ready(function() {
  $("#kitchenincafePremisesYes , #kitchenincafePremisesNo").change(function() {
    if ($("#kitchenincafePremisesYes").is(":checked")) {
      $("#ifrunningCafedropdown").slideDown();
    } else {
      $("#ifrunningCafedropdown").slideUp();
    }
  });
});
