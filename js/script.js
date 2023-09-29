const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      this.isTired = 1;
      console.log(`${this.name} needs a nap.Zzz...`);
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Creo", "rat");
const francine = createPet("Francine", "turtle");

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

const getAllPetsStatus = function (allPets) {
  for (const aPet of allPets) {
    const li = document.createElement("li");
    let status = "is ready to play!";
    if (aPet.isTired <= 7) status = "is ready to play!";
    else status = "is sleeping.";
    li.innerHTML = `<span class='pet-name'>${aPet.name}</span> the ${aPet.species} ${status} `;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  getAllPetsStatus(allPets);
});
