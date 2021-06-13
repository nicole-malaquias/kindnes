import { Container } from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
const ContainerGroups = ({ children }) => {
  return (
    <div>
      <PerfectScrollbar>
        <Container>{children}</Container>;
      </PerfectScrollbar>
    </div>
  );
};

export default ContainerGroups;
