import { AuthenticationProvider } from "./authentication";

const Providers = ({ children }) => {
  return <AuthenticationProvider>{children}</AuthenticationProvider>;
};

export default Providers;
