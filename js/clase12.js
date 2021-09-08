$("#addPattern").on("click", function () {
    $("#modal").html("");
    $("#modal").append(addPatternModal);
    $("#modal").toggleClass("modal--close");
});

$("#modal").on("click", "#modal_newPatBtn", function () {
    $("#modal").html("");
    $("#modal").toggleClass("modal--close");
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
