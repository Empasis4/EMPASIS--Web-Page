// Only run this code if result page elements exist
document.addEventListener("DOMContentLoaded", function () {

    const nameField = document.getElementById("resName");
    const sexField = document.getElementById("resSex");
    const numberField = document.getElementById("resNum");

    if (nameField && sexField && numberField) {
        const params = new URLSearchParams(window.location.search);

        nameField.textContent = params.get("userName");
        sexField.textContent = params.get("userSex");
        numberField.textContent = params.get("userNumber");
    }

});
