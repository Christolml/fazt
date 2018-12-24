


const btnToggle = document.querySelector('.toggle-btn');
// console.log(btnToggle)

btnToggle.addEventListener('click', function() {
  // con classList.toggle me permite agregar una clase al elemento si no la tiene
  // o quitarsela si ya la tiene
  document.getElementById('sidebar').classList.toggle('active');
  
})







