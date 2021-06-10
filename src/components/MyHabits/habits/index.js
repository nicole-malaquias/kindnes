const Habits = ({ habit }) => {
  const { title, difficulty, category } = habit;
  return (
    <>
      <div>
        <h3>{title}</h3>
        <h4>{difficulty}</h4>
        <h4>{category}</h4>
      </div>
    </>
  );
};

export default Habits;
