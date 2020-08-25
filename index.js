
window.addEventListener('DOMContentLoaded', function() {
  
    let burger = document.querySelector('.navbar-menu');
    let navbarClick = document.querySelector('.navbar-burger');
  
    navbarClick.addEventListener('click', function () {
      burger.classList.toggle('is-active')
    }, false)
    
  
    let searchClick = document.querySelector('.button')
  
    searchClick.addEventListener('click', function (e) {
      e.preventDefault();
      let bulmaUrl = 'https://still-spire-37210.herokuapp.com/positions.json/?';
      let getForm = document.forms['search-job'];
      let description = getForm.elements.description.value;
      let location = getForm.elements.location.value;
      let checked = getForm.elements.full_time.checked;

      let fDescription = `description=${description}`;
      let fLocation = `&location=${location}`;
      let fChecked = `&full_time=${checked}`
  
      let Uri = `${bulmaUrl}${fDescription}${fLocation}${fChecked}`;
  
      console.log(Uri);
    }) 
})
