const connect = require("./database");
let Person = require("./models/person"); //import the user model

connect();

/*let user = new Person({
  name: "ahlem",
  age: 21,

  favoriteFoods: ["burrito", "s7an tounsi", "kaftaji"],
});

user.save(function (err, data) {
  if (err) return console.error(err);
  console.log(`data saved successfuly ${data}`);
});

Person.create([
  {
    name: "ahmed",
    age: 35,

    favoriteFoods: ["reatsu", "bankai", "getsuga tencho"],
  },
  {
    name: "naruto",
    age: 27,

    favoriteFoods: ["ramen", "dumbleings", "kaftaji"],
  },
  {
    name: "ryuk",
    age: 211,

    favoriteFoods: ["toffe7", "s7an tounsi","ramen", "kaftaji"],
  },
])
  .then(() => {
    console.log("Inserting a lot of ppl successfuly");
  })
  .catch((err) => {
    console.error(err);
  });

Person.find({
  name: "ahmed",
})
  .then((res) => {
    console.log("finding ppl with the name of ahmed");
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

let food = ["ramen", "kaftaji"];
Person.findOne({ favoriteFoods: { $in: food } })
  .then((res) => {
    console.log("finding ppl by the food he love");
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
Person.findById("62f51bc185a05724aa230814")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
Person.findById("62f51bc185a05724aa230814")
  .then((data) => {
    data.favoriteFoods.push("hamburger");
    data.save();
    console.log(data);
  })

  .catch((err) => {
    console.log(err);
  });
Person.findOneAndUpdate({ name: "ahmed" }, { age: 20 }, { new: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

Person.findByIdAndRemove("62f51c886ad6f028e070c218")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

Person.remove({ name: "ahlem" })
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
  });*/

let food = "kaftaji";
Person.find({ favoriteFoods: { $elemMatch: { $eq: food } } })
  .sort({ name: 1 })
  .limit(2)
  .select("-age")
  .exec(function (err, data) {
    if (err) console.error(err);
    console.log(data);
  });
