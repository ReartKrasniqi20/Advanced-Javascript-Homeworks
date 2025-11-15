/* 
The code works but is not secured - the client code can delete array element from outside
Fix this issue 
*/

function getUsers() {
  const users = ["Bill"];
  return {
    addUser: function(name) {
      users.push(name);
      return users;
    },
    getUsers: function() {
      return [...users];
    }
  };
}

const u = getUsers();
u.addUser("Jim");
u.addUser("Paul");

console.log(u.getUsers()); 
u.getUsers().push("Reart");
u.getUsers().pop(); 
console.log(u.getUsers()); 
