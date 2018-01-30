window.onload = function() {

    // Adding an event listener for when the form is submitted
    $("#submitButton").on('click', handleFormSubmit);

    // A function for handling what happens when the form to create a new message
    function handleFormSubmit(event) {

        var bodyInput = $("#message").val().trim();
        var nameInput = $("#name").val().trim();
        var phoneInput = $("#phone").val().trim();
        var emailInput = $("#email").val().trim();

        event.preventDefault();
        // Don't submit unless the form is complete
        if (!nameInput || !emailInput || !bodyInput) {
            return;
        }
        // Constructing a newMessage
        var newMessage = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            body: bodyInput

        }; // submit the new comment
        // submitToApi(newMessage);
        submitMessage(newMessage);

        // empty out the input fields
        $("#message").val("");
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");

    }

    // function submitToApi(message) {
    //     console.log("about to send message");
    //     $.post("/api/messages", message, function(err, data) {
    //         console.log("message sent to api");
    //     });
    // }


    // Submits the message
    function submitMessage(message) { // and send them back to homepage
        console.log("about to send message");
        $.get("/send", {
                to: "josephaiken@gmail.com",
                subject: "New Message From Portfolio",
                html: "<h3>" + "name: " + message.name + "</h3>" + "<br>" +
                    "<h4>" + "email: " + message.email + "</h4>" +
                    "<h4>" + "phone: " + message.phone + "</h4>" +
                    "<p>" + "message: " + message.body + "</p>"

            },
            function(data) {
                if (data == "sent") {
                    console.log("Great Success!");
                }
            });
    }

};
