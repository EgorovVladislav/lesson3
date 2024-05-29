fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const users = data.filter((user, index) => index < 20);
    console.log(users);
  })
  .catch((error) => console.error("Error:", error));
