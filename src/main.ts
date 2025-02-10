import { clearArray, shuffleArray } from "./logic/dataTransformers";
import elements from "./logic/elements";
import { fetchEmoji } from "./logic/featchEmoji";
import { Emoji } from "./ts/types";

elements.button?.addEventListener("click", async () => {
  const emojis = await fetchEmoji();
  if (emojis) {
    const clearEmojis = clearArray(emojis);
    renderEmoji(clearEmojis);
  } else {
    console.log("Не вдалося отримати емодзі.");
  }
});

const renderEmoji = (emojis: Emoji[]) => {
  const doubledEmojis = shuffleArray([...emojis, ...emojis]);
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
