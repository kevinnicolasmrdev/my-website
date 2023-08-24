import './pagesStyle/homePage.css'
import InterfacesWeb from './media/image/sitio-web.png'
import aboutMe from './media/image/kevinmedina.jpeg'

function HomePage() {
  return (
    <div className='homePageConteiner'>
      <section className="sectionHomePage">
        <div className="section1Text">
          <div className='textContainer'>
            <h1>Desarrollo Software para empresas</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, odit eius? Ullam aliquid possimus labore molestiae, veniam eum laboriosam at sit illum in, numquam nisi facilis, delectus perferendis vero deleniti.</p>
            <div className='section1Button'>
              <button>Ver Trabajos</button>
              <button>Quien soy</button>
            </div>
          </div>

        </div>
        <div className="section1Video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QqCZ9aGG4Cw" frameborder="0" allowfullscreen />
        </div>
      </section>
      <section className='sectionServices'>
        <div className='serviceText'>
          <h2>Servicios generales a que me dedico</h2>
        </div>
        <div className='serviceContainerGeneral'>
          <div className='serviceContainer'>
            <div className='service'>
              <h3>Interfaces web</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <img src={InterfacesWeb}/>
            </div>
          </div>
          <div className='serviceContainer'>
            <div className='service'>
            <h3>Tiendas Online</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <img src={InterfacesWeb}/>
            </div>
          </div>
          <div className='serviceContainer'>
            <div className='service'>
            <h3>Solucion de Problemas</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <img src={InterfacesWeb}/>
            </div>
          </div>
          <div className='serviceContainer'>
            <div className='service'>
            <h3>Actualizaciones</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <img src={InterfacesWeb}/>
            </div>
          </div>
        </div>
      </section>
      <section className='sectionTecnologias'>
        Tecnologias
      </section>
      <section className='sectionAboutMe'>
        <div className='imgContainerAboutMe'>
          <div className='imgContainer'>
            <img src={aboutMe }alt='kevinMedina'/>
          </div>
        </div>
        <div className='textContainerAboutMe'>
          <div className='aboutMe'>
            <h3>Kevin Medina</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, distinctio quisquam veniam temporibus molestiae blanditiis quod. Doloremque voluptates, nisi veniam veritatis iure eveniet, quaerat, quisquam quis dignissimos commodi explicabo asperiores!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage