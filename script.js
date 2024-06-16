const menuopen = document.getElementById('menu-open');
const menuclose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuopen.addEventListener('click',function() {sidebar .style.left = '0'});

menuclose.addEventListener('click', function() {sidebar .style.left = '-100%'});


