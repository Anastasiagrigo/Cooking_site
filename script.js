const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2, 
    spaceBetween: 70,
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.nav_ul-li') && !event.target.matches('#myDropdown')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
