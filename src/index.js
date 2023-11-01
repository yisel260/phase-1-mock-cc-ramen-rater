// write your code here

document.addEventListener('DOMContentLoaded', function (){
    getRamenPics();
  
    //render all remanens  to DOM 
  function getRamenPics(){
    fetch('http://localhost:3000/ramens')
      .then(res => res.json())
     .then(ramenInfo => { 
        console.log(ramenInfo)
        let ramenMenu = document.getElementById('ramen-menu');
        for (const ramen of ramenInfo) {
          let ramenImage = document.createElement('img');
          ramenImage.src = `${ramen.image}`
          ramenMenu.appendChild(ramenImage);
          ramenImage.addEventListener('click', function (){
            console.log(ramen.name)
           ramenDetails = document.querySelector(".detail-image") 
           ramenDetails.src = `${ramen.image}`
           let ramenName = document.querySelector(".name")
           ramenName.textContent= `${ramen.name}`
           let ramenRestaurant = document.querySelector(".restaurant") 
           ramenRestaurant.textContent = `${ramen.restaurant}`
           let ratingDisplay = document.querySelector("#rating-display")
           ratingDisplay.textContent = `${ramen.rating}`
           let ramenComent = document.querySelector ('#comment-display')
           ramenComent.textContent = `${ramen.comment}`
           
          })
        }

    })
}


const addRamenButton =document.querySelector("#new-ramen")
addRamenButton.addEventListener('submit', function(event){
  event.preventDefault()

  console.log("Form submitted");

  handleSubmit()
})


function handleSubmit() {
 
  const newRamenName = document.querySelector('#new-name').value;
  const newImageURL = document.querySelector('#new-image').value;
  const newRestaurant = document.querySelector('#new-restaurant').value;
  const newRating = document.querySelector('#new-rating').value;
  const newComment = document.querySelector('#new-comment').value;
  const newRamen = {
    comment : newComment,
    name: newRamenName,
    image: newImageURL,
    restaurant: newRestaurant,
    rating :newRating 

  };

 fetch('http://localhost:3000/ramens', {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
     },
   body: JSON.stringify(newRamen)
  })
   .then(res => res.json())
    .then(newRamen => {
        let ramenMenu = document.getElementById('ramen-menu');
        let ramenImage = document.createElement('img');
        ramenImage.src = `${newRamen.image}`
        ramenMenu.appendChild(ramenImage);
        ramenImage.addEventListener('click', function (){
          console.log(newRamen.name)
         ramenDetails = document.querySelector(".detail-image") 
         ramenDetails.src = `${newRamen.image}`
         let ramenName = document.querySelector(".name")
         ramenName.textContent= `${newRamen.name}`
         let ramenRestaurant = document.querySelector(".restaurant") 
         ramenRestaurant.textContent = `${newRamen.restaurant}`
         let ratingDisplay = document.querySelector("#rating-display")
         ratingDisplay.textContent = `${newRamen.rating}`
         let ramenComent = document.querySelector ('#comment-display')
           ramenComent.textContent = `${newRamen.comment}`
    })
})
    .catch(error => {
     console.error('Error:', error);
    });
}

})

