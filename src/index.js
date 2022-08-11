let db_connection = require("./database"); //import the database connection
let UserModel = require("./models/user"); //import the user model

let user = new UserModel({
  name: "ahlem",
  age: 21,
  email: "PowerLifter@gmail.com",
  favoriteFoods: ["burrito", "s7an tounsi", "kaftaji"],
});

user.save(function (err, data) {
  if (err) return console.error(err);
  console.log(`data saved successfuly ${data}`);
});

UserModel.create([
  {
    name: "ahmed",
    age: 35,
    email: "ahmede@gmail.com",
    favoriteFoods: ["reatsu", "bankai", "getsuga tencho"],
  },
  {
    name: "naruto",
    age: 27,
    email: "hokage@gmail.com",
    favoriteFoods: ["ramen", "dumbleings", "kaftaji"],
  },
  {
    name: "ryuk",
    age: 211,
    email: "ryukx@gmail.com",
    favoriteFoods: ["toffe7", "s7an tounsi", "kaftaji"],
  },
])
  .then(() => {
    console.log("Inserting a lot of ppl successfuly");
  })
  .catch((err) => {
    console.error(err);
  });

UserModel.find({
  name: "ichigo",
})
  .then((res) => {
    console.log("finding ppl with the name of ichigo");
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

let food = "kaftaji";
UserModel.findOne({ favoriteFoods: { $elemMatch: { $eq: food } } })
  .then((res) => {
    console.log("finding ppl by the food he love");
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

UserModel.remove({ name: "ahlem" })
  .then((res) => {
    console.log("Delete work");
    console.log(res);
    if (res.n === 0) {
      console.log("No persons deleted");
    } else {
      console.log(`${res.n} Person deleted`);
    }
  })
  .catch((err) => {
    console.error(err);
  });

let food = "burrito";
UserModel.find({ favoriteFoods: { $elemMatch: { $eq: food } } })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: false })
  .exec(function (err, data) {
    if (err) console.error(err);
    console.log(data);
  });
