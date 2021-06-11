const CardGroup = ({ groups }) => {
  const handleGroupChoice = (groupId) => {
    localStorage.setItem("@gestao:groupId", groupId);
  };
  return (
    <div>
      {groups.map((item) => (
        <button onClick={handleGroupChoice(item.id)}>
          <h4>item.name</h4>
          <h4>item.users_on_group.length</h4>
        </button>
      ))}
    </div>
  );
};

export default CardGroup;
