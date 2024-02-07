$(document).ready(function () {
  // CONTACT INFO
  $("#carmain").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "./car-insurance/inc/contact.php",
      data: $("#carmain").serializeArray(),
      dataType: "json",
      beforeSend: function () {
        $("#loader").show();
      },
      success: function (data) {
        $("#loader").hide();
        if (data === "phone") {
          $(".phone").show();
        } else {
          $(".phone").hide();
        }

        if (data === "cuidError") {
          $(".cuidError").show();
        } else {
          $(".cuidError").hide();
        }

        if (data === "success") {
          window.location.href = "./car-insurance/personal-info.php";
        }
      },
    });
  });
  //Personal Info
  $("#personalInfo").submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "inc/personalInfo.php",
      data: $("#personalInfo").serializeArray(),
      dataType: "json",
      beforeSend: function () {
        $("#loader").show();
      },
      success: function (data) {
        $("#loader").hide();

        // An array containing all the class names
        var classNames = [
          "titleError",
          "firstNameError",
          "lastNameError",
          "dobError",
          "maritalstatusError",
          "homeownerError",
          "childrenError",
          "customerResidentError",
          "houseNumberError",
          "addressOneError",
          "postcodeError",
          "employmentError",
        ];

        // Loop through each class name
        for (var i = 0; i < classNames.length; i++) {
          // Check if the current class name matches the data
          if (data === classNames[i]) {
            // Show the element with the current class name
            $("." + classNames[i]).show();
          } else {
            // Hide the element with the current class name
            $("." + classNames[i]).hide();
          }
        }
        // MESSSAGE END

        if (data === "success") {
          window.location.href = "vehicle-details.php";
        }
      },
    });
  });
  //VHICLE DETAILS
  $("#vehicleDetails").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "inc/vehicleDetails.php",
      data: $("#vehicleDetails").serializeArray(),
      dataType: "json",
      beforeSend: function () {
        $("#loader").show();
      },
      success: function (data) {
        $("#loader").hide();
        // An array containing all the class names
        var classNames = [
          "carRegError",
          "carRegEmptyError",
          "manufacturerError",
          "modelError",
          "regYearError",
          "ImmobiliserError",
          "seatsemptyError",
          "doorsEmptyerror",
          "engineSizeError",
          "transmissionError",
          "fueltypeError",
          "OtherfueltypeError",
          "carValueError",
          "importVerror",
          "purchasedCarError",
          "purchasedCarDateError",
          "modificationsError",
          "regKeeperError",
          "legalownererror",
          "impoundedcarError",
        ];

        // Loop through each class name
        for (var i = 0; i < classNames.length; i++) {
          // Check if the current class name matches the data
          if (data === classNames[i]) {
            // Show the element with the current class name
            $("." + classNames[i]).show();
          } else {
            // Hide the element with the current class name
            $("." + classNames[i]).hide();
          }
        }
        // MESSSAGE END
        if (data === "success") {
          window.location.href = "driving-history.php";
        }
      },
    });
  });
});
