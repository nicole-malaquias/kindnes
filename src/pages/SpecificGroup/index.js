import { Redirect } from "react-router";
// import Button from "../../components/Button";
import { useAuthentication } from "../../Providers/authentication";

const SpecificGroup = () => {
  const { authenticated } = useAuthentication();
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <div>SpecificGroup</div>;
};
export default SpecificGroup;
