/*let name;

document.getElementById("mySubmit").onclick = function(){
vardas = document.getElementById("myText").value;
document.getElementById("myH").textContent = 'Labas ${vardas}'


}*/

/*const mygtukas = document.getElementById('mySubmit');
mySubmit.addEventListener ('click', function() {alert ('Žinutė išsiųsta')});*/

const mygtukiukas = document.getElementById('mysubmit');

// Pridedame įvykio klausytoją mygtuko paspaudimui
mygtukiukas.addEventListener('click', function(event) {
    // Užblokuojame formos pateikimą, kad būtų galima atlikti kitus veiksmus
    event.preventDefault();

    // Papildomas veiksmas, pavyzdžiui, parodyti pranešimą
    alert('Žinutė išsiųsta sėkmingai!');

    // Po pranešimo pateikite formą (jei reikia)
    event.target.closest('form').submit();
});