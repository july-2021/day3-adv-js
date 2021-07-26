let std1 = { "id": 1, name: "rahul agarwal", email: "rahul@gmail.com" };

// ACCESS MEMMER
// Access the Member of an Object :: DOT OPERATOR :: GET OPERATION
console.log(std1.id, std1.name);

// UDPATE MMEBER
// SETTER METHOD :: UPdate A Member of an Object
std1.name = "Rahul Agaaarwaaal";
console.log(std1.name);

// DELETE MEMEBER
delete std1.name;
console.log(std1.name);

// ADD NEW MEMBER :: Looks like Setter Operation
std1.mobile = "2232323232";
console.log(std1.mobile);
