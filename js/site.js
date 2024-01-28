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
    } else if ($(this).val() === "Full/Part Time Education") {
      $("#employmentdetails").slideUp();
      $("#studentdetails").slideDown();
    } else {
      $("#employmentdetails, #studentdetails").slideUp();
    }
  });
});
