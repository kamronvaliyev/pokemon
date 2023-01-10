document.addEventListener("click", (evt) => {
    onLikeClick(evt);
    onModalOutsideClick(evt);
    onModalCloseClick(evt);
})

function onLikeClick(evt) {
    const el = evt.target.closest("[data-btn-fav]")

    if (!el) return
    const modalSelector = el.dataset.btnFav;

    document.querySelector(modalSelector).classList.add("show")
}

function onModalOutsideClick(evt) {
    const el = evt.target.closest("[data-modal]")

    if(!el) return;

    el.classList.remove("show")
}

function onModalCloseClick(evt){
    const el = evt.target.closest("[data-btn-close]")

    if(!el) return;

    el.parentElement.parentElement.classList.remove("show")
}