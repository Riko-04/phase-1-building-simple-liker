// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");

  document.querySelectorAll(".like-glyph").forEach(likeButton => {
    likeButton.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          updateHeart(likeButton);
        })
        .catch(error => {
          displayError(error);
        });
    });
  });

  function updateHeart(likeButton) {
    if (likeButton.classList.contains("activated-heart")) {
      likeButton.textContent = EMPTY_HEART;
      likeButton.classList.remove("activated-heart");
    } else {
      likeButton.textContent = FULL_HEART;
      likeButton.classList.add("activated-heart");
    }
  }

  function displayError(error) {
    errorMessage.textContent = error;
    errorModal.classList.remove("hidden");
    setTimeout(() => {
      errorModal.classList.add("hidden");
    }, 3000);
  }
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
