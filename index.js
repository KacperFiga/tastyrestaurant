const menuOpenIcon = document.body.querySelector(".menu-icon");
const menuCloseIcon = document.body.querySelector(".close-icon");
const navigation = document.body.querySelector(".navigation");
const menuOptions = document.body.querySelectorAll(
  ".navigation__content__option"
);
let isMenuOpen = false;

const handleClick = () => {
  if (isMenuOpen) {
    navigation.classList.remove("active");
  } else {
    navigation.classList.add("active");
  }
  isMenuOpen = !isMenuOpen;
};

menuOptions.forEach((el) => {
  el.addEventListener("click", () => {
    isMenuOpen = false;
    navigation.classList.remove("active");
  });
});
menuOpenIcon.addEventListener("click", handleClick);
menuCloseIcon.addEventListener("click", handleClick);
