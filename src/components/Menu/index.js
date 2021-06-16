import { Container, MenuBurg } from "./styled";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import imgMenu from "../../assets/menu.png";
import IconClosed from "../../assets/seta.png";
import Button from "../Button";
import { useState } from "react";

import { useAuthy } from "../../Providers/Authy";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, handleLogout } = useAuthy();
  const history = useHistory();
  const handleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  const sendToHome = () => {
    handleLogout();
    history.push("/");
  };

  return !token ? (
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
        <Button handleClick={handleMenu}>
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
          <Button handleClick={handleMenu}>
            <img src={IconClosed} alt="sair" />
          </Button>
          <Button handleClick={handleMenu}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/specificgroup">Specific Group</Link>
          </Button>
          <Button id="logout" handleClick={sendToHome}>
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
