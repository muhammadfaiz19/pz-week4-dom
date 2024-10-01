document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const skill = document.getElementById("skill").value;

    result.innerHTML = `Hello, ${name}! You've chosen ${skill}!`;

    switch (skill) {
      case "html":
        document.documentElement.style.setProperty("--primary-color", "#ff008c");
        break;
      case "css":
        document.documentElement.style.setProperty("--primary-color", "#00ccff");
        break;
      case "js":
        document.documentElement.style.setProperty("--primary-color", "#00ff88");
        break;
    }
  });
});

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
  body.classList.toggle('dark-mode'); 
  this.classList.toggle('bi-moon');
  this.classList.toggle('bi-brightness-high');
  body.style.transition = '1s';
});
