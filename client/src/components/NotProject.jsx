import GeneralButton from './Button.jsx'



function NotProject() {
  return (
    <seccion className="notProject">
  <div className="notProjectAlert">
  <h1> No tienes proyectos disponibles</h1>
  <GeneralButton text='AGREGAR PROYECTO' url="/add-project"/>
  </div>
</seccion>
  )
}

export default NotProject