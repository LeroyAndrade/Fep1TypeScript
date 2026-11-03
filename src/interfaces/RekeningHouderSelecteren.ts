import { FetchDB } from "../services/FetchDB.ts";

export async function vulGebruikerFormSelect(){
    const data = await FetchDB();
    const userSelectFound = document.querySelector("#userId");

    if (!userSelectFound) console.log('User Not Found');

    // komt vanuit de fetch wanneer opgeroepen
    data.users.forEach(user => {
        const option = document.createElement("option");
        option.value = user.userId.toString();
        option.textContent = user.naam;
        userSelectFound.appendChild(option)
        
    });
}