 // 1.
// const clickButton = document.querySelector('#click-button');
// function handleMyBtnClick(event){
//     const clickButton = document.querySelector('#click-button');
//     clickButton.remove();
// }

// clickButton.addEventListener('click',handleMyBtnClick);

// 2.
// const newImg = document.createElement('img');
// newImg.innerHTML='<img src="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"/>';
// document.body.appendChild(newImg);
// console.log(newImg);

// 3.
const users=[{
    id: 1,
    avatar="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name:'john',
    last_name:'Doe',
    email:"example@gmail.com",
},
{
    id: 2,
    avatar="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name:'john',
    last_name:'Doe',
    email:"example@gmail.com", 
},
{
    id: 3,
    avatar="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name:'john',
    last_name:'Doe',
    email:"example@gmail.com",
},
{
    id: 4,
    avatar="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name:'john',
    last_name:'Doe',
    email:"example@gmail.com",
}]

function userList(){
    const userTable = document.querySelector('#user-list');
    const userTableBody = userTable.querySelector('tbody');
  
    const userItems = users.map(user => {
      return `<tr>
                  <td>${user.id}</td>
                  <td><img alt="${user.first_name}" src="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg" /></td>
                  <td>${user.first_name}</td>
                  <td>${user.last_name}</td>
                  <td>${user.email}</td>
                  <td><button  class="user-remove" type="button">Delete</button></td>
                  <td><button  class="user-info" type="button">info</button></td>
              </tr>`;
    });
     console.log(userItems);
  userTableBody.innerHTML = userItems.join('');
}
userList();