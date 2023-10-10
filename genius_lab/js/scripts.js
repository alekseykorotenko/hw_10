const likeButtons = document.querySelectorAll(".cuors-like");
const likeCounts = document.querySelectorAll(".like-count");

likeButtons.forEach((likeButton, index) => {
  let numberOfLikes = 0;

  likeButton.addEventListener("click", function () {
    numberOfLikes++;
    likeCounts[index].textContent = `${numberOfLikes} ${
      numberOfLikes === 1 ? "Like" : "Likes"
    }`;
  });
});

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container-active");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
