window.openModal = function () {
    const modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}

window.closeModal = function () {
    const modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
}

window.openToast = function () {
    alert("klick on openToast");
}