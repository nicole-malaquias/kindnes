import api from "../../services";
import { useEffect, useState } from "react";
import ContainerGroups from "../../components/Groups/ContainerGroups";
import CardGroup from "../../components/Groups/CardGroup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import Button from "../../components/Button";
import { toastError } from "../../utils";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [category, setCategory] = useState("");
  const [chosenCategory, setChosenCategory] = useState([]);
  const history = useHistory();
  const token = localStorage.getItem("@gestao:token") || "";
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
    setChosenCategory([]);
  };

  const onSubmitCategory = ({ chosenCategory }) => {
    api
      .get("groups/", {
        params: {
          category: chosenCategory,
        },
      })
      .then((response) => {
        setChosenCategory(response.data.results);
      });
  };

  const handleCategoryChange = (evt) => {
    setCategory(evt.target.value);
  };

  useEffect(() => {
    if (token === "") {
      history.push("/");
    } else {
      api
        .get("groups/subscriptions/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setGroups(response.data))
        .catch((_) => toastError("Couldn't load groups, try again"));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div>
        <p>Search a group category</p>

        <form onSubmit={handleSubmit(onSubmitCategory)}>
          <label htmlFor="category">categories</label>
          <select
            id="category"
            value={category}
            {...register("chosenCategory", {
              required: "required",
            })}
            onChange={handleCategoryChange}
          >
            <option value="donation">donation</option>
            <option value="animal care">animal care</option>
            <option value="teach">teach</option>
          </select>

          <Button type="submit">Send</Button>
        </form>
      </div>
      <div>
        <Button handleClick={handleSubscriptions}>Your groups</Button>
        <ContainerGroups>
          {chosenCategory.length === 0 ? (
            <CardGroup groups={groups} />
          ) : (
            <CardGroup groups={chosenCategory} />
          )}
        </ContainerGroups>
      </div>
    </Container>
  );
};
export default Groups;
