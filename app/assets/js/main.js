const TIME_PER_QOUTE = 5000;//time in milliseconds
const DEAN_KAMEN_IMAGE_PATH = "assets/img/dean-kamen.jpg";//image path for dean kamen
const WOODIE_FLOWERS_IMAGE_PATH = "assets/img/woodie_flowers.jpg";
const QUOTES = [
  [DEAN_KAMEN_IMAGE_PATH, "To me, innovations are the wheel, fire, language, movable type. There are not 3 million innovations; there are 3 million inventions.", 1],
  [WOODIE_FLOWERS_IMAGE_PATH, "Competition for the sake not of destroying one another, but for the sake of bettering and improving both competitors as a result of the competition.", 2],
  [DEAN_KAMEN_IMAGE_PATH, "More than ever, the world needs good engineers. However, the pool of talent is shrinking not growing.", 1],
  [WOODIE_FLOWERS_IMAGE_PATH, "Creative activity is one of the few self rewarding activities. Being creative is like being in love!", 2],
  [DEAN_KAMEN_IMAGE_PATH, "I started realizing that I wasn't so dumb; rather, most people simply didn't know the answers to the questions that I was interested in-or they didn't care.", 1]
]

var indexOfQuote = 0;

$('document').ready(function() {
  setInterval(changeQuote, TIME_PER_QOUTE);
});

function changeQuote() {
  if(indexOfQuote == (QUOTES.length - 1)) {indexOfQuote = 0;}
  $('#img').attr('src', QUOTES[indexOfQuote][0]);
  $("#quote").text(QUOTES[indexOfQuote][1]);
  if(QUOTES[indexOfQuote][1]) {$("#quote").attr('cite', 'Dean Kamen');}
  else {$("#quote").attr('cite', 'Woodie Flowers');}
  $('#quoteBar').animate({border-top: "80%"}, TIME_PER_QOUTE);
}
