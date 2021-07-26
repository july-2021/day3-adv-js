let std1 = {
  id: 1,
  name: "rahul",
  email: "rahul@gmail.com",
  mobile: "1212121323323212",

  address: {}, // nested object.
};

let std2 = {
  id: 1,
  name: "rahul",
  email: "rahul@gmail.com",
  mobile: "1212121323323212",

  address: { city: "kharghar" },
};

let std3 = {
  id: 1,
  name: "rahul",
  email: "rahul@gmail.com",
  mobile: "1212121323323212",

  address: { city: "kharghar", state: "MH" },
};

// YOUR ASSIGNMENT,
// ACCESS NESTED MEMBER
console.log(std3.address.city);

// UDPATE NESTED MEMEBR
// DELETE NESTED MEMBER
// ADD NEW NESTED MEMBER

// COLLECTIONS :: JS
// Exeception Handlinge.
