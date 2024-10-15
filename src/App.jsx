import './App.css'
import NavBar from './components/navbar/NavBar'
import ProfesionalsContainer from './components/professionalListContainer/ProfessionalListContainer'
import ProfesionalDetailContainer from './components/professionalDetailContainer/ProfessionalDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const data = [
    {
      titulo: 'Cardiología',
      descripcion: 'Especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades del corazón y del aparato circulatorio. ',
      imagen: 'https://www.healthstaffrecruitment.com.au/wp-content/uploads/2015/05/bigstock-Portrait-of-young-woman-doctor-70264798-1024x1024.jpg',
    },
    {
      titulo: 'Dermatología',
      descripcion: 'Especialidad médica que se encarga del estudio de la estructura y función de la piel, así como de las enfermedades que la afectan, su diagnóstico, prevención y tratamiento.',
      imagen: 'https://apptirana.al/assets/img/doctors/doctor-thumb-02.jpg',
    },
    {
      titulo: 'Ginecología',
      descripcion: 'Especialidad médica y quirúrgica que trata las enfermedades del sistema reproductor.',
      imagen: 'https://emch.com.bd/wp-content/uploads/2021/06/Prof.-Dr.-Kabir-Ahmed.jpg',
    },
    {
      titulo: 'Neumonología',
      descripcion: 'Especialidad médica que se dedica al estudio de las enfermedades del aparato respiratorio y a su tratamiento.',
      imagen: 'https://emch.com.bd/wp-content/uploads/2021/06/Doctor-5-768x768.png',
    },
  ]

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/proyecto-react-central-de-turnos/" element={<h1>Inicio</h1>} />
        <Route path="/proyecto-react-central-de-turnos/profesional" element={<ProfesionalDetailContainer />} />
        <Route path="/proyecto-react-central-de-turnos/servicios" element={<h1>Servicios</h1>} />
        <Route path="/proyecto-react-central-de-turnos/especialidades" element={<ProfesionalsContainer />} />
        <Route path="/proyecto-react-central-de-turnos/nosotros" element={<h1>Nosotros</h1>} />
        <Route path="/proyecto-react-central-de-turnos/contacto" element={<h1>Contacto</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <ProfesionalsContainer data={data} />
    </BrowserRouter>
  )
}

export default App
