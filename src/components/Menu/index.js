import { Container, MenuBurg } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import imgMenu from "../../assets/menu.png";
import IconClosed from "../../assets/seta.png";
import Button from "../Button";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("@gestao:token") || "";
  const history = useHistory();

  const handleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    if (token !== "") {
      history.push("/dashboard");
    }
  }, []);

  return token ? (
    <Container>
      <div>
        <Link to="/">
          <div>
            <img src={logo} alt="logo" />
            <h1>be habits</h1>
          </div>
        </Link>
      </div>
    </Container>
  ) : (
    <Container>
      <div id="Menu">
        <Button handleClick={() => handleMenu()}>
          <img src={imgMenu} alt="menu" />
        </Button>
        <Link to="/">
          <div>
            <img src={logo} alt="logo" />
            <h1>be habits</h1>
          </div>
        </Link>
      </div>
      {isOpen ? (
        <MenuBurg>
          <Button handleClick={() => handleMenu()}>
            <img src={IconClosed} alt="sair" />
          </Button>
          <Button handleClick={() => handleMenu()}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/specificgroup">Specific Group</Link>
          </Button>
          <Button id="logout" handleClick={() => handleLogout()}>
            Logout
          </Button>
        </MenuBurg>
      ) : (
        ""
      )}
    </Container>
  );
};
export default Menu;
