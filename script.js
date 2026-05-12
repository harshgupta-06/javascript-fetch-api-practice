function question1() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log("Q1 All Posts" , data))
    .catch((err) => console.log("Error" , err))
}

function question2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log("Q2 User Names:");
      data.forEach((user) => console.log(user.name));
    })
    .catch((err) => console.log("Error:", err));
}


function question4() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
        console.log("Q4 total comments:", data.length);
    })
    .catch((err) => console.log("Error:", err));
}

function question5() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        console.log("Q5 Post Titles:");
        data.forEach((post) => console.log(post.title))
    })
    .catch((err) => console.log("Error:", err));
}

function question6() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
        const completedTodos = data.filter((todo) => todo.completed === true);
        console.log("Q6 Completed Todos:" , completedTodos);
        
    })
    .catch((err) => console.log("Error:", err));
}


function question7() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        const userPosts = data.filter((post) => post.userId === 3);
        console.log("Q7 Completed Todos Count:" , completedCount);
        
    })
    .catch((err) => console.log("Error:", err));
}

function question8() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        const userPosts = data.filter((post) => post.userId === 3);
        console.log("Q8 Post of userId 3:" , userPosts);
        
    })
    .catch((err) => console.log("Error:", err));
}

function question9() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        console.log("Q9 Email and City:");
        data.forEach((user)=>{
          console.log(`Email : ${user.email} | City: ${user.address.city}`);
        });
      })
    .catch((err) => console.log("Error:", err));
}


function question10() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        const first10 = data.slice(0,10);
        console.log("Q10 First 10 posts:" , first10);
      })
    .catch((err) => console.log("Error:", err));
}

async function question11(){
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log("Q11 users (Async/await) : ",data);
  } catch (error){
    console.log("Error" , error);
  }
}

async function question12(){
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    console.log("Q12 Total posts : ",data.length);
  } catch (error){
    console.log("Error" , error);
  }
}

question12();