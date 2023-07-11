const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");

const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "Delhi";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  target = searchField.value;
  FetchData(target);
});
/**
 * Fetch Data -> (location) -> return all meta-data
 * template literal -> `` & ${dynamic parameter}
 */
const FetchData = async (location) => {
  // you write all business logic in try block, but any error if it happens due to any reason in
  // try block, the execution will move to catch block and stop executing try block code
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=d40257d6c98d4435be475830230807&q=${location}&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();

    const currentTemp = data.current.temp_c;
    const currentCondition = data.current.condition.text;
    const condtionEmoji = data.current.condition.icon;
    const locationName = data.location.name;
    const localTime = data.location.localtime;

    updateDOM(
      currentTemp,
      currentCondition,
      condtionEmoji,
      locationName,
      localTime
    );
  } catch (error) {
    console.log(error);
  }
};

function updateDOM(temp, condition, emoji, name, time) {
  console.log(temp, name, condition, emoji, time);
  temperatureField.innerText = temp;
  cityField.innerText = name;
  emojiField.src = emoji;
  weatherField.innerText = condition;

  const exactTime = time.split(" ")[1];
  const exactDate = time.split(" ")[0];

  const exactDay = getDayFullName(new Date(exactDate).getDay());

  dateField.innerText = `${exactTime}  ${exactDay} ${exactDate}`;
}

function getDayFullName(num) {
  switch (num) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      return "Don't Know";
  }
}
FetchData(target);
