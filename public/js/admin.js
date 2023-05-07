const $userList = $("#userList");
getUsers();
async function getUsers() {
    let res = await axios.get("http://localhost:3000/users");
    addUsers(res.data);
};

function addUsers(data) {
    for (let i = 0; i < data.length; i++) {
        let $id = data[i].id;
        let $email = data[i].email; 
        let $firstName = data[i].firstName;
        let $lastName = data[i].lastName;
        let $state = data[i].state;

        let $newUser = $(`<div>
                            <li> 
                                ID: ${$id} <br>
                                Email: ${$email} <br>
                                First name: ${$firstName} <br>
                                Last name: ${$lastName} <br>
                                State: ${$state}
                            </li>
                        </div>`)
        $userList.append($newUser);
    }
}