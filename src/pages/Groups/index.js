import api from "../../services";
import { useEffect, useState } from "react";
import toastGroups from "../../utils";
const Groups = () => {
  const [userGroups, setUserGroups] = useState([]);
  const [searchCategories, setSearchCategories] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@gestao:token", token)) || ""
  );

  useEffect(() => {
    console.log(token);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(headers);
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUserGroups(response.data))
      .catch((err) => toastGroups.error("That didn't work, try it again"));
  }, []);

  //   if (!authenticated) {
  //     return <Redirect to="/" />;
  //   }
  return <div>{searchCategories.length === 0}</div>;
};
export default Groups;
