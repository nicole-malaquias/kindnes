import api from "../../services";
import { useEffect, useState } from "react";
import ContainerGroups from "../../components/Groups/ContainerGroups";
import CardGroup from "../../components/Groups/CardGroup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import {
  Container,
  Select,
  Category,
  SearchContainer,
  MenuContainer,
  Contact,
} from "./styled";
import Button from "../../components/Button";
import { toastError } from "../../utils";
import { useAuthy } from "../../Providers/Authy";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
const Groups = () => {
  const { token } = useAuthy();

  const [groups, setGroups] = useState([]);
  const [category, setCategory] = useState("");
  const [chosenCategory, setChosenCategory] = useState([]);
  const history = useHistory();

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

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
    <>
      <Container>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <SearchContainer>
          <Category>
            <form onSubmit={handleSubmit(onSubmitCategory)}>
              <label htmlFor="category">Search a category</label>
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
                  <option value="women's empowerment">
                    women's empowerment
                  </option>
                </Select>

                <Button width="100px" type="submit" colorButton="purplePink">
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
        <Contact>
          Contact us on <strong>kindnessapp@gmail.com</strong> to add your
          volunteer group to our page
        </Contact>
        <Footer />
      </Container>
    </>
  );
};
export default Groups;
