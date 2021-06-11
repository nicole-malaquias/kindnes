import { Container, MenuBurg } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import imgMenu from "../../assets/menu.png";
import IconClosed from "../../assets/seta.png";
import { useState } from "react";

const Menu = ({ isLogin = false }) => {
  const [isMenu, SetIsMenu] = useState(true);

  const handleMenu = () => {
    isMenu ? SetIsMenu(false) : SetIsMenu(true);
  };

  return isLogin ? (
    <Container>
      <div>
        <img src={logo} alt="logo"></img>
        <h1>be habits</h1>
      </div>
    </Container>
  ) : (
    <Container>
      <div>
        <button onClick={() => handleMenu()}>
          <img src={imgMenu} alt="menu"></img>
        </button>
        <img src={logo} alt="logo"></img>
        <h1>be habits</h1>
      </div>
      {isMenu ? (
        <MenuBurg>
          <button onClick={() => handleMenu()}>
            <img src={IconClosed} alt="sair"></img>
          </button>
          <button onClick={() => handleMenu()}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/specificgroup">Specific Group</Link>
          </button>
        </MenuBurg>
      ) : (
        ""
      )}
    </Container>
  );
};
export default Menu;
