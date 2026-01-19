const Part = ({ page, title }) => {
  return <>
    <p>{title} {page}</p>
  </>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <Part page={exercises1} title={part1} />
      <Part page={exercises2} title={part2} />
      <Part page={exercises3} title={part3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App