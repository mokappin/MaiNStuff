document.addEventListener("DOMContentLoaded", () => {
  const log = console.log,
    array = ["a", "b", "c"],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("target");
  target.src = `${array[random]}`;
  log(target);
});
