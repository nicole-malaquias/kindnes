import { AuthyProvider } from "./Authy";
import { GroupProvider } from "./Group";
const Providers = ({ children }) => {
  return (
    <AuthyProvider>
      <GroupProvider>{children}</GroupProvider>
    </AuthyProvider>
  );
};
export default Providers;
