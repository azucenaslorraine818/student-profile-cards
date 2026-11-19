import StudentCard from './components/StudentCard'

const students = [
  { id: 1, name: 'Lorraine Azucenas', course: 'BS Computer Science', section: 'Block A' },
  { id: 2, name: 'Lora Azucenas', course: 'BS Information Technology', section: 'Block B' },
  { id: 3, name: 'Raine Azucenas', course: 'BS Entertainment and Media Computing', section: 'Block C' },
]

function App() {
  return (
    <main className="app">
      <h1>Student Profile Cards</h1>
      <div className="card-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            section={student.section}
          />
        ))}
      </div>
    </main>
  )
}

export default App
