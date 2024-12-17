import { Peliruutu, Ruututyyppi } from "./tyypit";
const ruudukkoLeveys: number = 60;
const ruudukkoKorkeus: number = 60;
const button = document.querySelector("#painikeAloitaPeli");
const peliruudukko: Peliruutu[][] = [];


if (!button) {
  throw new Error("Painiketta ei löytynyt");
}
button.addEventListener("click", (event) => {
  console.log("Painiketta painettu");
  aloitaPeli();
});


function aloitaPeli() {
  alustaPeliruudukko();
  piirraRuudukko();
}

function alustaPeliruudukko() {
  for (let x = 0; x < ruudukkoLeveys; x++) {
    peliruudukko[x]=[];
    for (let y = 0; y < ruudukkoKorkeus; y++) {
      peliruudukko[x][y] = {
        tyyppi: Ruututyyppi.Tyhja,
      };
      // peliruudukko.push(Array(30).fill(x));
    }
  }
}

function piirraRuudukko() {
  const taulukko = document.getElementById("taulukkoRuudukko");
  if (!taulukko) {
    throw new Error("Taulukkoa ei löytynyt");
  }
  for (let y = 0; y < ruudukkoKorkeus; y++) {
    const rivi = document.createElement("tr");
    taulukko.append(rivi);
    for (let x = 0; x < ruudukkoLeveys; x++) {
      const solu = document.createElement("td");
      rivi.append(solu);
    }
  }
}


