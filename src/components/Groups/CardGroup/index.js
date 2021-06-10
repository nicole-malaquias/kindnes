const CardGroup = ({ groups }) => {
  return (
    <div>
      {groups.map((item) => (
        <>
          <h4>item.name</h4>
          <h4>item.users_on_group.length</h4>
        </>
      ))}
    </div>
  );
};

export default CardGroup;
