import { Peliruutu, Ruututyyppi } from "./tyypit";
const ruudukkoLeveys: number = 60;
const ruudukkoKorkeus: number = 60;
const button = document.querySelector("#painikeAloitaPeli");
const peliruudukko: Peliruutu[][] = [];
let ristinVuoro = true;


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
    }
  }
}

function piirraRuudukko() {
  const taulukko = document.getElementById("taulukkoRuudukko");
  if (!taulukko) {
    throw new Error("Taulukkoa ei löytynyt");
  }
  taulukko.innerHTML = '';
  for (let y = 0; y < ruudukkoKorkeus; y++) {
    const rivi = document.createElement("tr");
    taulukko.append(rivi);
    for (let x = 0; x < ruudukkoLeveys; x++) {
      const peliruutu = peliruudukko[x][y];
      const solu = document.createElement("td");
      if (!peliruutu) {
        throw new Error("Peliruutu on hukassa");
      }
      if (peliruutu.tyyppi == Ruututyyppi.Risti) {
        solu.innerHTML="X";
      } else if (peliruutu.tyyppi) {
        solu.innerHTML="O";
      } else {
        solu.addEventListener("click", (event) => {
          console.log("Solua klikattu");
          ruutuaKlikattu(peliruutu);
          piirraRuudukko();
        });
      }
      rivi.append(solu);
    }
  }
}

function ruutuaKlikattu(peliruutu:Peliruutu) {
  if (ristinVuoro) {
    peliruutu.tyyppi=Ruututyyppi.Risti;
  } else {
    peliruutu.tyyppi=Ruututyyppi.Nolla;
  }
  ristinVuoro=!ristinVuoro;
}


