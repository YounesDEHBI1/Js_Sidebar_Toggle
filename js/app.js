// Select concerned elements
// Select the toggle button
const toggleBtn = document.querySelector(".sidebar-toggle");
// Select the closing button
const closeBtn = document.querySelector(".close-btn");
// Select the sidebar
const sidebar = document.querySelector(".sidebar");

// Add event listener on click
toggleBtn.addEventListener("click", function () {

    // Show the sidebar class list
    //console.log(sidebar.classList);

    // Toggle - 1st method
    /*if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
    }*/

    // Toggle - 2nd method
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});