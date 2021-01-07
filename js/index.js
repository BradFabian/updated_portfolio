const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("neon").classList.add("section__title--neontubing");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document
      .getElementById("neon")
      .classList.remove("section__title--neontubing");
    localStorage.setItem("theme", "light"); //add this
  }
}

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

/* Form Submit and send email */
//get the form by its id
const form = document.getElementById("contact-form"); 


const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  let mail = new FormData(form);

 
  sendMail(mail);

  form.reset();
})

const sendMail = (mail) => {
  
  fetch("http://bradfabian.com/", {
    method: "post", 
    body: mail, 

  }).then((response) => {
    return response.json();
  });
};

// Google Recaptcha //
function onSubmit(token) {
  document.getElementById("contact-form").submit();
}