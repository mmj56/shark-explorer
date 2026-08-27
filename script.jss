// Find the Change Ocean button

const colorButton = document.getElementById("color-btn");


// Change the background when the button is clicked

colorButton.addEventListener("click", function () {

    document.body.style.backgroundColor = "purple";

});


// Find all the Learn More buttons

const buttons = document.querySelectorAll(".learn-btn");


// Add a click event to every Learn More button

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const sharkName = button.getAttribute("data-shark");

        alert("You selected the " + sharkName + "! 🦈");

    });

});
