const button = document.querySelector("button");
const text = document.querySelector("p");

button.addEventListener("click", () => {
  text.innerHTML = text.innerText
    .trim()
    .split(" ")
    .map((el) => {
      if (el.length >= 8) {
        return '<span class="highlight">' + el + "</span>";
      } else if (el === "?") {
        return el.replace("?", "🤔");
      } else if (el === "!") {
        return el.replace("!", "😲");
      } else {
        return el;
      }
    })
    .join(" ");
});
