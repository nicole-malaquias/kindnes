import { useForm } from "react-hook-form";
import DeleteTecs from "../../components/DeleteTecs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";
const CategoryGroup = ({ authenticated, setAuthenticated, tech }) => {
  const [category, setCategory] = useState("");
  const [groups, setGroups] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@gestao: token")) || ""
  );
  const formSchema = yup.object().shape({
    title: yup.string().required("Tech required"),
    status: yup.string().required("status required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = () => {
    api
      .get(`groups/${category}`)
      .then((response) => {
        setGroups(response.results);
      })
      .catch((err) =>
        toast.error(
          "You already have created this technology, you can only update it"
        )
      );
  };
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleLogOut = () => {
    localStorage.clear();
    setAuthenticated(false);
  };
  return (
    <div className="container">
      <>
        <h2>Search a group category</h2>

        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <select
            value={category}
            {...register("status", {
              required: "required",
            })}
            onChange={handleCategoryChange}
          >
            <option value={"donations"}>donations</option>
            <option value={"lectures"}>lectures</option>
            <option value={"cookingForOthers"}>Cooking for others</option>
          </select>
          <p style={{ color: "rgb(175, 133, 168" }}>{errors.status?.message}</p>

          <button className="button" type="submit">
            Send
          </button>
        </form>

        <button className="button" onClick={handleLogOut}>
          Log out
        </button>
      </>
    </div>
  );
};

export default CategoryGroup;
