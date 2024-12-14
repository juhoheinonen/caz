import { Peliruutu, Ruututyyppi } from "./tyypit";
const ruudukkoLeveys: number = 60;
const ruudukkoKorkeus: number = 60;
const button = document.querySelector("#painikeAloitaPeli");

if (!button) {
  throw new Error("Button not found");
}
button.addEventListener("click", (event) => {
  console.log("Painiketta painettu");
});

function aloitaPeli() {
  const taulukko = document.getElementById("taulukkoRuudukko");
  for (let x = 0; x < ruudukkoLeveys; x++) {

  }
}