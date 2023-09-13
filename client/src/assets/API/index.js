const API_ROUTES = "http://localhost:8081/api";

const fetchCharacterSheets = async () => {
  const ul = document.querySelector("ul");
  console.log("work?");
  try {
    const response = await fetch(`${API_ROUTES}/charactersheet`);
    const result = await response.json();
  } catch (error) {
    console.log(error);
  };
}
export default fetchCharacterSheets;

// .then((response) => response.json())
// .then((characterSheets) => {
//     characterSheets.foreach((characterSheet) => {
//         const li= document.createElement("li");
//         li.textContent = characterSheet.name;
//         ul.append(li);
//     });
