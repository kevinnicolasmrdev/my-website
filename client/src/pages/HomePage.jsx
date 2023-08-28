import './pagesStyle/homePage.css'
import InterfacesWeb from './media/image/sitio-web.png'
import aboutMe from './media/image/kevinmedina.jpeg'
import GeneralButton from '../components/Button'

function HomePage() {

  return (
    <div className='homePageConteiner'>
      <section className="sectionHomePage">
        <div className="section1Text">
          <div className='textContainer'>
            <h1>Desarrollo de software para empresas en Uruguay.</h1>
            <p>Desde 2019, desarrollo software personalizado para empresas, ayudándolas con la gestión de sus clientes y formas de mostrar su propuesta de valor a su público objetivo</p>
            <p>Utilizando tecnologías como React y Next.js para proyectos más complejos.</p>
            <div className='section1Button'>
              <GeneralButton text='Ver Trabajos' url='/portfolio'  />
              <GeneralButton text='Quién soy' url='/#kevinMedina'  />
            </div>
          </div>

        </div>
        <div className="section1Video">
          <div className='videoContainer'>
    

    
          </div>
        </div>
      </section>
      <section className='sectionServices'>
        <div className='serviceText'>
          <h2>En esto podré ayudarte:</h2>
        </div>
        <div className='serviceContainerGeneral'>
          <div className='serviceContainer'>
            <div className='service'>
              <h3>Interfaces web</h3>
              <p>Desarrollo interfaces web, tanto en React, Next.js y otras herramientas de trabajo, como los CRMs.</p>
              <img src={InterfacesWeb}/>
            </div>
          </div>
          <div className='serviceContainer'>
            <div className='service'>
            <h3>Tiendas Online</h3>
            <p>Creo un sistema que te permita vender productos o servicios con un carrito de compras personalizado</p>
            <img src={InterfacesWeb}/>
            </div>
          </div>
          <div className='serviceContainer'>
            <div className='service'>
            <h3>Soluciónes</h3>
            <p>Soluciono fallas de servidores, bugs inesperados y problemas de compatibilidad</p>
            <img src={InterfacesWeb}/>
            </div>
          </div>
          <div className='serviceContainer'>
            <div className='service'>
            <h3>Actualizaciones</h3>
            <p>Actualizo proyectos para optimizar su carga o evitar conflictos entre versiones anteriores.</p>
            <img src={InterfacesWeb}/>
            </div>
          </div>
        </div>
      </section>
      <section className='sectionTecnologias'>
        <div className='tecnologiasText'>
          <div>
          <h3>Tecnologías</h3>
          </div>
          <div>
          <p>Donde tengo más experiencia es en las tecnologías derivadas de JavaScript. En el front-end, me especializo en el uso de React, especialmente con Next.js. En el back-end, trabajo con Node.js en combinación con Express.js para facilitar el manejo de la lógica de servidor.</p>
          </div>
        </div>
      </section>
      <section className='sectionAboutMe'>
        <div className='imgContainerAboutMe'>
          <div className='imgContainer' id='kevinMedina'>
            <img src={aboutMe }alt='kevinMedina'/>
          </div>
        </div>
        <div className='textContainerAboutMe'>
          <div className='aboutMe'>
            <h3>Kevin Medina</h3>
            <p>Desarrollé mi primera tienda en línea en Shopify a los 17 años. A partir de ahí, inicié mi trayectoria como freelancer en Uruguay, trabajando para empresas de toda Latinoamérica
            </p>
            <p>
            A los 21 años, decidí enfocarme en el desarrollo de software, comenzando mi camino con JavaScript y React. Desde entonces, mi objetivo ha sido desarrollar aplicaciones que mejoren la forma en que los negocios gestionan a sus clientes, aumentando así su propuesta de valor.
            </p>
            <GeneralButton text='Ir al Portfolio' url='/portfolio'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage