import ContainerCardExplication from "./style";
import Button from "../Button";
const CardExplication = ({ text, setCardExplication, cardExplication }) => {
  return (
    <ContainerCardExplication>
      <p>{text}</p>
      <Button handleClick={() => setCardExplication(!cardExplication)}>
        {" "}
        ok
      </Button>
    </ContainerCardExplication>
  );
};

export default CardExplication;
