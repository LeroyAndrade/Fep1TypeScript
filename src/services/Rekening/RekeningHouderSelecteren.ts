import { FetchDB } from "@services/FetchDB.ts";

export async function RekeningHouderSelecteren() {
    const data = await FetchDB("users");
    console.log("Volledige data:", data);
    const userNameSelectFound = document.querySelector("#userNaam");
    const userIdSelectFound = document.querySelector("#userId");

    if (!userNameSelectFound || !userIdSelectFound) {
        console.log('User niet gevonden');
        return
    }

    // komt vanuit de fetch wanneer opgeroepen
    // Todo: vervangen met Template, todo: afewguserIding maken of t waard is template voor 2 HTMLNodes
 
    // data.users.forEach(user => {  lokaal

    // live-server
        data.forEach(user => {
        const optionNaamTonen = document.createElement("option");
        optionNaamTonen.value = user.naam;
        optionNaamTonen.textContent = user.naam;

        // Wanneer een gebruiker geselecteerd wordt:
        optionNaamTonen.dataset.userId = user.userId;

        userNameSelectFound.appendChild(optionNaamTonen);

    });
    // luister naar wijziging in gebruiker en voeg toe aan tekstbox
    userNameSelectFound.addEventListener("change", e => {
        e.preventDefault()
        const selectedOption = userNameSelectFound.selectedOptions[0]
        userIdSelectFound.value = selectedOption.dataset.userId ?? "";
    });
}