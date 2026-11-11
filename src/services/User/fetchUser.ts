interface User{
    name: string;
    job: string;
}

interface UserResponse {
    name: string;
    job: string;
    id: string;
    createdAt: string;
}


export default class UserService {
    private readonly URL: string = "https://reqres.in/api/users";

    
    public AddUser(user: User): Promise<UserResponse> {
        
    const URL = `https://reqres.in/api/users`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    return fetch(URL, options).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: $
{response.status}`);
        }
        return response.json();
    });
}


function consumer(name, job) {
    const aUser = {
        "name": "Pietje Puk",
        "job": "Postbode"
    };
    addUser(aUser)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(`OEPS! ${error}`);
        });
}
consumer();