const navHomeBtn = document.getElementById("nav-home");

const navProjBtn = document.getElementById("nav-projects");

const navServBtn = document.getElementById("nav-services");

navHomeBtn.addEventListener('click', function onClickHome() {
    navHomeBtn.style.fontWeight = 1000;
    navProjBtn.style.fontWeight = 300;
    navServBtn.style.fontWeight = 300;
});

navProjBtn.addEventListener('click', function onClickProjects() {
    navHomeBtn.style.fontWeight = 300;
    navProjBtn.style.fontWeight = 1000;
    navServBtn.style.fontWeight = 300;
})

navServBtn.addEventListener('click', function onClickServices() {
    navHomeBtn.style.fontWeight = 300;
    navProjBtn.style.fontWeight = 300;
    navServBtn.style.fontWeight = 1000;
})


