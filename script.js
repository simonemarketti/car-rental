$(document).ready(function() {
    $(".button-learn").each(function() {
        // add event listener to each button
        $(this).click(function () {
            if ($(this).hasClass("sedan")) {
                $(".img-car.sedan").addClass("animated-car")
            } else if ($(this).hasClass("suv")) {
                $(".img-car.suv").addClass("animated-car")
            } else if ($(this).hasClass("luxury")) {
                $(".img-car.luxury").addClass("animated-car")
            }
            setTimeout(function () {
                // remove previous class
                $(".img-car").removeClass("animated-car")
            }, 2000)
        })
    })
});

