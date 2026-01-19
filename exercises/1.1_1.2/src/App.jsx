const Part = ({ content }) => {
  const { name, exercises } = content;
  return <>
    <p>{name} {exercises}</p>
  </>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <h1>{course}</h1>
      <Part content={part1} />
      <Part content={part2} />
      <Part content={part3} />
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App