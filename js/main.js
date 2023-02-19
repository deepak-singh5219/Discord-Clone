// navbar variables
console.log('script attached')
const sideNav = document.querySelector('.side-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');
const sideNavCross = document.querySelector('.sidenav-cross');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {
console.log('btn clicked');
sideNav.classList.remove('-right-[400px]');

sideNav.classList.add('right-0');
// sideNav.classList.add('translate-x-full')
// sideNav.classList.remove('translate-x-0')
});

sideNavCross.addEventListener('click', () => {
  sideNav.classList.add('-right-[400px]');
  sideNav.classList.remove('right-0');

})