let aleatoire;
for (i = 1; i <2; i++) {
    aleatoire= Math.trunc(Math.random() * 100);
    console.log(aleatoire)
}

function myFunction () {
    let result = document.getElementById("Nombre").value;
    if (result == aleatoire) {
        alert("You did it!")
    } else if (result < aleatoire) {
        alert("c'etait plus")
    } else if (result > aleatoire) {
        alert("c'etait moins")
    }
    console.log(result)
    let numberTest = document.createElement("li");
    numberTest.innerHTML += "Nombre déja utilisé: " + result;
    document.body.appendChild(numberTest);
    if (document.getElementsByTagName("li").length === 10){
        alert("Désole gros, You Loose")
    }
}
let test = document.getElementById("test");
test.addEventListener("click", myFunction)
