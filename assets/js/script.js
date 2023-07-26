const btnBuscarPet = document.querySelector("button");
const input = document.querySelector("input");
const resultado = document.querySelector(".result");
let racaDog = "";

const buscarPet = async() => {
    
    racaDog = input.value.toLowerCase();

    if(racaDog !=="" && racaDog !== undefined && racaDog !== null){
            
        input.value="";
        let dogApi = await fetch(`https://dog.ceo/api/breed/${racaDog}/images/random`);
        let dog = await dogApi.json();

        printDog(dog);

    } else {
        alert("Digite novamente a raça do Dog...");
    }
}

const printDog = (dog) => {
    resultado.innerHTML="";
    if(dog.status !== "error"){

        for(let i in dog){
            resultado.innerHTML+=`<img src=${dog[i]} class="dog" />`
        }
    } else {
        alert(`Essa raça ${racaDog} não existe, digite novamente`);
        resultado.innerHTML=`Vamos começar? <div>Digite acima o nome da raça do Dog.</div>`
    }
}

btnBuscarPet.addEventListener("click", buscarPet);
input.addEventListener("change", buscarPet);