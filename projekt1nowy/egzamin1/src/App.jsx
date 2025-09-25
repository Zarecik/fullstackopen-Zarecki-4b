import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [courses] = useState([
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django",
  ]);

  return (
    <div className='container mt-4'>
      <h2>Liczba kursów: {courses.length}</h2>

    </div>
  )
}

export default App
