import { AuthyProvider } from "./Authy";
import { GroupProvider } from "./Group";
import { HabitProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <AuthyProvider>
      <GroupProvider>
        <HabitProvider>{children}</HabitProvider>
      </GroupProvider>
    </AuthyProvider>
  );
};
export default Providers;
