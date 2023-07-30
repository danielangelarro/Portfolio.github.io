document.querySelectorAll('.btn-front-end').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.front-end').style.display = 'block';
        document.querySelector('.back-end').style.display = 'none';
        document.querySelector('.frameworks').style.display = 'none';
        document.querySelector('.database').style.display = 'none';
        document.querySelector('.technology').style.display = 'none';
    });
});

document.querySelectorAll('.btn-back-end').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.front-end').style.display = 'none';
        document.querySelector('.back-end').style.display = 'block';
        document.querySelector('.frameworks').style.display = 'none';
        document.querySelector('.database').style.display = 'none';
        document.querySelector('.technology').style.display = 'none';
    });
});

document.querySelectorAll('.btn-frameworks').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.front-end').style.display = 'none';
        document.querySelector('.back-end').style.display = 'none';
        document.querySelector('.frameworks').style.display = 'block';
        document.querySelector('.database').style.display = 'none';
        document.querySelector('.technology').style.display = 'none';
    });
});

document.querySelectorAll('.btn-database').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.front-end').style.display = 'none';
        document.querySelector('.back-end').style.display = 'none';
        document.querySelector('.frameworks').style.display = 'none';
        document.querySelector('.database').style.display = 'block';
        document.querySelector('.technology').style.display = 'none';
    });
});

document.querySelectorAll('.btn-technology').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.front-end').style.display = 'none';
        document.querySelector('.back-end').style.display = 'none';
        document.querySelector('.frameworks').style.display = 'none';
        document.querySelector('.database').style.display = 'none';
        document.querySelector('.technology').style.display = 'block';
    });
});
