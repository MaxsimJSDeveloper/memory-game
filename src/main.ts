import iziToast from "izitoast";
import { clearArray, shuffleArray } from "./logic/dataTransformers";
import elements from "./logic/elements";
import { fetchEmoji } from "./logic/featchEmoji";
import { Emoji } from "./ts/types";
import "izitoast/dist/css/iziToast.min.css";

elements.button?.addEventListener("click", async () => {
  const emojis = await fetchEmoji();

  if (emojis) {
    const mixedEmojis = shuffleArray(emojis);
    const clearEmojis = clearArray(mixedEmojis);
    renderEmoji(clearEmojis);
  } else {
    iziToast.error({
      title: "Error",
      message: "Failed to retrieve emoji.",
      position: "topRight",
    });
  }
});

const renderEmoji = (emojis: Emoji[]) => {
  const doubledEmojis = [...emojis, ...emojis];
  elements.playField.innerHTML = "";
  const markup = doubledEmojis
    .map(
      (emoji, index) =>
        `<li class="card" data-index="${index}" data-emoji="${emoji.character}">
          <div class="emoji hidden">${emoji.character}</div>
        </li>`
    )
    .join("");

  elements.playField.insertAdjacentHTML("beforeend", markup);
};

const renderDefaultList = (count: number) => {
  const markup = Array.from({ length: count }, (_, index) => {
    return `
      <li class="card" data-index="${index}">
        <div class="emoji visually-hidden">${index + 1}</div>
      </li>`;
  }).join("");

  elements.playField.innerHTML = markup;
};

renderDefaultList(16);
