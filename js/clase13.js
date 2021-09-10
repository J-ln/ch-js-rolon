$("#modal").fadeOut();

$("#addPattern").on("click", function () {
    if ($("#modal").hasClass("modal--close")) {
        $("#modal").toggleClass("modal--close");
        setTimeout(function () {
            $("#modal").html("");
            $("#modal").append(addPatternModal);
            $("#modal").fadeIn(400);
        }, 100);
    }
});

$("#modal").on("click", "#modal_newPatBtn", function () {
    $("#modal").fadeOut(400);
    $("#modal").html("");
    setTimeout(function () {
        $("#modal").toggleClass("modal--close");
    }, 400);
});

$("#navClose").on("click", function () {
    if ($("#navbar").hasClass("close")) {
        $("#navbar").animate(
            {
                left: "0",
            },
            400
        );
        $("#navbar").removeClass("close");
        $("#content").animate(
            {
                paddingLeft: "20rem",
            },
            400
        );
        $("#arrow").toggleClass("left right");
    } else {
        $("#navbar").animate(
            {
                left: "-20rem",
            },
            400
        );
        $("#navbar").addClass("close");
        $("#content").animate(
            {
                paddingLeft: "0",
            },
            400
        );
        $("#arrow").toggleClass("left right");
    }
});

const addPatternModal = `
                    <form class="modal_form">
                        <div class="modal_nameP">
                            <label for="name">Name </label>
                            <input class="modal_input--text" type="text" />
                        </div>
                        <div class="modal_colorP">
                            <label for="color">Color </label>
                            <div id="modal_pickerContainer"></div>
                        </div>
                        <div class="modal_sizeP">
                            <label for="size">Size </label>
                            <input class="modal_input--text" type="" />
                        </div>
                        <div class="modal_formP">
                            <label for="form">Form </label>
                            <input class="modal_input--text" type="text" />
                        </div>

                        <div
                            id="modal_newPatBtn"
                            class="modal_btn"
                        >
                            Create New Pattern
                        </div>
                    </form> `;
