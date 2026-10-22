const btn = document.querySelector("#theme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("sombre");
  if (document.body.classList.contains("sombre")) {
    btn.textContent = "Mode clair";
  } else {
    btn.textContent = "Mode sombre";
  }
});

