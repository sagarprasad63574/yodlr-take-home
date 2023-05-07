
$("#form").on('submit', function (e) {
    e.preventDefault();
    const $email = $("#email").val();
    const $first_name = $("#first_name").val();
    const $last_name = $("#last_name").val();

    addUser($email, $first_name, $last_name);
});

async function addUser(email, firstName, lastName) {
    let res = await axios.post("http://localhost:3000/users",{ email, firstName, lastName});

    console.log(res.data);
}