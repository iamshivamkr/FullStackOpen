const Header = (inp) => {
  return <h1>{inp.course}</h1>;
};

const Part = (inp) => {
  return (
    <p>
      {inp.part} {inp.exercises}
    </p>
  );
};

const Content = (inp) => {
  return (
    <div>
      <Part part={inp.parts[0].name} exercises={inp.parts[0].exercises} />
      <Part part={inp.parts[1].name} exercises={inp.parts[1].exercises} />
      <Part part={inp.parts[2].name} exercises={inp.parts[2].exercises} />
    </div>
  );
};

const Total = (inp) => {
  return (
    <p>
      Number of exercises{" "}
      {inp.parts[0].exercises + inp.parts[1].exercises + inp.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default App;
