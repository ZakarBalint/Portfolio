//betoltés animációk

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//menu
const menu_button = document.getElementById("menu-button");
const mobile_menu = document.getElementById("menu");

menu_button.addEventListener("click", () => {
    const menu_opened = mobile_menu.getAttribute("data-opened");

    if(menu_opened === "false")
    {
        mobile_menu.setAttribute("data-opened", "true");
        menu_button.setAttribute("data-opened", "true");
    }
    else if(menu_opened === "true")
    {
        mobile_menu.setAttribute("data-opened", "false");
        menu_button.setAttribute("data-opened", "false");
    }
})