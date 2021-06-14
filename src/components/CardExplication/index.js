import ContainerCardExplication from "./style";
import Button from "../Button";
const CardExplication = ({ text, setcEHab, cEHab }) => {
  return (
    <ContainerCardExplication>
      <p>{text}</p>
      <Button handleClick={() => setcEHab(!cEHab)}> ok</Button>
    </ContainerCardExplication>
  );
};

export default CardExplication;
