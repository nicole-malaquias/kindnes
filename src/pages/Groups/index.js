import api from "../../services";
import { useEffect, useState } from "react";
import toastGroups from "../../utils";
import ContainerGroups from "../../components/Groups/ContainerGroups";
import CardGroup from "../../components/Groups/CardGroup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [category, setCategory] = useState("");
  const [searchCategories, setSearchCategories] = useState([]);

  const [token] = useState(localStorage.getItem("@gestao:token")) || "";

  useEffect(() => {
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroups(response.data))
      .catch((err) => toastGroups.error("That didn't work, try it again"));
  }, []);

  const formSchema = yup.object().shape({
    chosenCategory: yup.string().required("Category required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleSubscriptions = () => {
    setSearchCategories([]);
  };

  const onSubmitCategory = ({ chosenCategory }) => {
    api
      .get("groups/", {
        params: {
          category: chosenCategory,
        },
      })
      .then((response) => {
        setSearchCategories(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Search a group category</h2>

        <form className="form" onSubmit={handleSubmit(onSubmitCategory)}>
          <select
            value={category}
            {...register("chosenCategory", {
              required: "required",
            })}
            onChange={handleCategoryChange}
          >
            <option value={"Educação"}>Educação</option>
            <option value={"Saúde"}>Saúde</option>
          </select>

          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
      <button onClick={handleSubscriptions}>Your groups</button>
      <ContainerGroups>
        {searchCategories.length === 0 ? (
          <CardGroup groups={groups} />
        ) : (
          <CardGroup groups={searchCategories} />
        )}
      </ContainerGroups>
    </div>
  );
};
export default Groups;
