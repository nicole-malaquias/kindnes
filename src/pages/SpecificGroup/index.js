import { Redirect } from "react-router";
import { useEffect, useState } from "react";
import { useAuthentication } from "../../Providers/authentication";
import api from "../../services";

const SpecificGroup = () => {
  const { authenticated, token } = useAuthentication();
  const [groupId, setGroupId] = useState("");

  const handleSubscribe = (groupId) => {
    api.post(`groups/${groupId}/subscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  useEffect(() => {
    setGroupId(JSON.parse(localStorage.getItem("@gestao:groupId")));
  }, []);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <button onClick={() => handleSubscribe(groupId)}>Subscribe</button>
    </>
  );
};
export default SpecificGroup;
