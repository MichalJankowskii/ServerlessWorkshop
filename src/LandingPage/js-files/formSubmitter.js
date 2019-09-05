(function($) {
    'use strict';

    init();
    
      function init() {
        $("#submit_btn").click(onFormSubmit);
      }

      function onFormSubmit(event) {
        showThankYouMessage();
        event.preventDefault();
        $.ajax({
          type: "POST",
          url: "ENTER BACKEND ENDPOINT HERE",
          crossDomain: true,
          contentType: 'application/json; charset=utf-8',
          data: JSON.stringify(readRegistrationData()),
          success: showThankYouMessage,
          error: showErrorMessage
        });
        event.preventDefault();
      }

      function showThankYouMessage() {
        $("#confirmation").removeClass("confirm_page");
        $("#confirmation").removeClass("confirm_page_4");
      }

      function showErrorMessage(data) {
      }

      function readRegistrationData() {
        return {
          name: $("#name").val(),
          surname: $("#surname").val(),
          country: $("#country").val(),
          email: $("#email").val(),
          birthyear: $("#birthyear").val()
        }
      }

    })(jQuery);