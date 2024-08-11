//Header component
const Header = ({ course }) => <h1>{course}</h1>

//Part component
const Part = ({ part }) => {
  console.log({ part })
  return (
      <p>
        {part.name} {part.exercises}
      </p>
  )
}

//Content component
const Content = ({ parts }) => {
  console.log({ parts })
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
    </>
  )
}

//Total component
const Total = ({ parts }) => {
  return (
    <>
      <p>
        <b>total of {parts.reduce((sum, order) => sum + order.exercises, 0)} exercises</b>
      </p>
    </>
  )
} 

const Course = ({ course }) => {
  return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

export default Course