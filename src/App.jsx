import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import ClientCard from './components/ClientCard'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="banner mt-4 mb-4 p-2 rounded">
              <div className='bannerText m-4'>
                <h1>Conheça seus <br /> <i>clientes</i> de perto </h1>
                <button type="button" class="btn btn-light sm-rounded-button fw-6 mt-3">Avançar</button>
              </div>
            </div>
            <section className='new-clientes mt-3 mb-3'>
              <h3 className='fw-6'>Novos Clientes</h3>
              <div className="row justify-content-center new-clientes-infos mt-3">
                <article className="client-infos rounded me-3 mb-3 p-3">
                  <h4 className='fw-6'>Semana</h4>
                  <h7 className='text-muted'>Semana anterior: 20</h7>
                  <div className="circle">
                    23
                  </div>
                  <div className="img-vector">
                    <img src="./assets/img/person.svg" alt="" width="130" height="100" align="right" />
                  </div>
                </article>
                <article className="client-infos rounded me-3 mb-3 p-3">
                  <h4 className='fw-6'>Mês</h4>
                  <h7 className='text-muted'>Mês anterior: 40</h7>
                  <div className="circle">
                    43
                  </div>
                  <img className='img-vector' src="./assets/img/person.svg" alt="" width="130" height="100" align="right" />
                </article>
                <article className="client-infos rounded me-3 mb-3 p-3">
                  <h4 className='fw-6'>Ano</h4>
                  <h7 className='text-muted'>Ano anterior: 542</h7>
                  <div className="circle red">
                    400
                  </div>
                  <img className='img-vector' src="./assets/img/personRed.svg" alt="" width="130" height="100" align="right" />
                </article>
              </div>
            </section>

            <section class="clients rounded">
              <div className="topBar sectionBar">
                <div className="headerBar d-flex justify-content-between">
                  <div className="table-icon d-flex align-items-center">
                    <img src="./assets/img/person_square.svg" alt="clientes" />
                    <span>Clientes</span>
                  </div>

                  <div className="links">
                    <img src="./assets/img/external-link.svg" alt="link externo" className="external-link me-4" />
                    <button className='btn btn-success rounded-button'>Adicionar Clientes</button>
                  </div>

                </div>
              </div>

              <div className="functionsBar d-flex justify-content-between sectionBar">
                <span className='totalClients'>678<br></br>Cadastrados</span>
                <div className="searchClients form-control">
                  <img src="./assets/img/search.svg" alt="" />
                  <input type="text" placeholder='Pesquise Clientes' />

                </div>
                <div className="filterSettings">
                  <span>Filtrar por:</span> <ul>
                    <li>Nome</li>
                    <li>Inatividade</li>
                  </ul>
                </div>


              </div>

              <div className="clientsList d-flex flex-column justify-content-center sectionBar">
                < ClientCard />
                < ClientCard />
                < ClientCard />
                < ClientCard />
                < ClientCard />
              </div>
            </section>


          </div>
        </div>

      </div >
    </div >
  )
}

export default App
