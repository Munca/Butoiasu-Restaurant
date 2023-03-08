function manipulareSubmit() {
    const container = document.querySelector("#recenzie")
    container.innerHTML = ''
    container.style.color = "black"
    container.style.backgroundImage = "url(imagini/pereteRezervare2.jpg)"
    container.style.backgroundSize = "cover" 
    container.style.borderRadius = "20px"
    const titlu = document.createElement('h2')
    titlu.textContent = "Felicitari! Recenzia/Contactarea ta a fost inregistrata cu succes:D"
    titlu.style.fontSize = "30px"
    titlu.style.textAlign = "center"
    container.appendChild(titlu)
}

function manipulareRezervare() {
    const container = document.querySelector("#rezervare")
    container.innerHTML = ''
    container.style.color = "black"
    container.style.borderRadius = "20px"
    const titlu = document.createElement('h2')
    titlu.textContent = "Felicitari! Rezervarea ta a fost inregistrata cu succes:D"
    titlu.style.fontSize = "30px"
    titlu.style.textAlign = "center"
    container.appendChild(titlu)
}