import axios from "axios";

async function GettingUserData() {
  const res = await axios.get(
    "https://api.freeapi.app/api/v1/public/randomusers",
  );
  const users = res.data.data.data;
  //   console.log(users);

//   users.forEach((user) => {
//     console.log(user.name);
//     console.log(user.location);
//   });

ust
}

GettingUserData();
