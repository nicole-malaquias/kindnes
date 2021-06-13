import api from "../../services";
import { useEffect, useState } from "react";
import ContainerGroups from "../../components/Groups/ContainerGroups";
import CardGroup from "../../components/Groups/CardGroup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Container, Select, Category, SearchContainer } from "./styles";
import Button from "../../components/Button";
import { toastLoadGroupsError } from "../../utils";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
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
        .catch((_) => toastLoadGroupsError());
    }
  }, []);

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

  return (
    <>
      <Menu />
      <Container>
        <SearchContainer>
          <Category>
            <form onSubmit={handleSubmit(onSubmitCategory)}>
              <label htmlFor="category">Search a category</label>
              {/* dar um display none */}
              <div>
                <Select
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
                </Select>

                <Button
                  padding="2rem"
                  width="100px"
                  type="submit"
                  colorButton="purplePink"
                >
                  Search
                </Button>
              </div>
            </form>
          </Category>

          <Button
            height="60px"
            width="100px"
            handleClick={handleSubscriptions}
            colorButton="purplePink"
          >
            My groups
          </Button>
        </SearchContainer>

        <ContainerGroups>
          {chosenCategory.length === 0 ? (
            <CardGroup groups={groups} />
          ) : (
            <CardGroup groups={chosenCategory} />
          )}
        </ContainerGroups>
      </Container>
      <Footer />
    </>
  );
};
export default Groups;
