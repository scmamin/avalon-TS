import { usersArray, User } from "./users";
import { usersInfoArray } from "./userInfo";

interface UserJobPosition {
  name: string;
  position: string;
  age: number;
  gender: string;
}

const getUsersJobPositions = (users: User[]): UserJobPosition[] => {
  return users.map((user) => {
    const userInfo = usersInfoArray.find((info) => info.userid === user.userid);
    return {
      name: userInfo?.name || "",
      position: userInfo?.organization?.position || "",
      age: userInfo?.age || 0,
      gender: user.gender,
    };
  });
};
const usersPositions = getUsersJobPositions(usersArray);
console.log("userPositions", usersPositions);
