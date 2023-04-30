const menuBtn = document.getElementById("menu-btn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});