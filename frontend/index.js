document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    loadPosts();
    const form = document.querySelector('#addUserForm');
    form.addEventListener('submit', addUserFormSubmitted);
    const postForm = document.querySelector('#addPostsForm');
    postForm.addEventListener('submit',addPostsFormSubmitted)
});

async function loadUsers() {
    const usersList = document.querySelector('#usersList');
    usersList.innerHTML = "";
    const response = await axios.get(`http://localhost:8000/users/`);
    response.data.payload.forEach((user) => {
        let listItem = document.createElement("li");
        listItem.innerText = `${user.firstname} ${user.lastname}, age ${user.age}`;
        usersList.appendChild(listItem);
    });
}

async function addUserFormSubmitted(event) {
    event.preventDefault();    
    const firstname = document.querySelector('#firstNameInput').value;
    const lastname = document.querySelector('#lastNameInput').value;
    const age = document.querySelector('#ageInput').value;
    let response = await axios.post(`http://localhost:8000/users/register`, { firstname, lastname, age });
    loadUsers();
}

const loadPosts = async () => {
    const postsList = document.querySelector('#postList');
    postsList.innerHTML='';
    const response = await axios.get(`http://localhost:8000/posts/all`);
    response.data.payload.forEach((post)=> {
        let listItem = document.createElement('li');
        listItem.innerText = `${post.poster_id} ${post.body}`
        postsList.appendChild(listItem);
    })
}

const addPostsFormSubmitted = async (event) => {
    event.preventDefault();
    const poster_id = document.querySelector('#poster_id').value;
    const body = document.querySelector('#bodyInput').value;
    let response = await axios.post(`http://localhost:8000/posts/register`, {poster_id, body});
    loadPosts();
}