const quote = [
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name: "Nelson Mandela",
  },
  {
    quotes:
      "In three words I can sum up everything I've learned about life: it goes on.",
    name: "Robert Frost",
  },
  {
    quotes:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    name: "Franklin D. Roosevelt",
  },
  {
    quotes:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    name: "Winston Churchill",
  },
  {
    quotes: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
  },
  {
    quotes: "The purpose of our lives is to be happy.",
    name: "Dalai Lama",
  },
  {
    quotes: "Do not wait for leaders; do it alone, person to person.",
    name: "Mother Teresa",
  },
  {
    quotes: "Life is what happens when you're busy making other plans.",
    name: "John Lennon",
  },
  {
    quotes:
      "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    name: "Brian Tracy",
  },
  {
    quotes: "The journey of a thousand miles begins with one step.",
    name: "Lao Tzu",
  },
];
const questData = document.getElementById("quotes-items");
tweetUrl = "";
var shareQutes = "";
const button = document.getElementById("button");
console.log(button);
const rendomQutes = () => {
  var rendomData = quote[Math.floor(Math.random() * quote.length)];
  console.log(rendomData);
  shareQutes = rendomData;

  questData.innerHTML = ` 
          ${rendomData.quotes}
        </p>
        <hr style="width: 1px" />
        <p class="name">${rendomData.name}</p>
      `;
};

button.addEventListener("click", () => {
  rendomQutes();
  console.log("hello");
});

questData.innerHTML = ` 
          ${quote[0].quotes}
        </p>
        <hr style="width: 1px" />
        <p class="name">${quote[0].name}</p>
      `;
var rendomData = quote[Math.floor(Math.random() * quote.length)];
shareQutes = rendomData;

tweetUrl = "https://twitter.com/compose/tweet/intent/tweet?text=" + rendomData;
document.getElementById("tweet").setAttribute("href", tweetUrl);

console.log(shareQutes);
