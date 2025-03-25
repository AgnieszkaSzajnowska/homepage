{
    const changeBackgroundClick = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");


    const onChangeBackgroundClick = () => {
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    }

    const init = () => {
        changeBackgroundClick.addEventListener("click", onChangeBackgroundClick);
    }
    init();
}