import Part from './Persons';

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
      <h3>Total exercises: {totalExercises}</h3>
    </div>
  );
}

export default Content;

