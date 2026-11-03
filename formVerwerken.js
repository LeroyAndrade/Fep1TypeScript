const rekeningToevoegenForm = document.querySelector("#rekeningToevoegenForm");

rekeningToevoegenForm.addEventListener("submit", (e) =>{
    //defaultGedrag (bijvoorbeeld refresh cancelen)
    e.preventDefault();

    const formData = new FormData(rekeningToevoegenForm)

window.alert(JSON.stringify([...formData.entries()]))

})