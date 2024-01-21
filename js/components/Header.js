class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <>
                <p>Hola Mundo</p>
                {/* <section id="SECTION-1" class="row col-lg-4 pb-3"> 
                <section id="titulo-curriculum" class="col-12">
                    <article class="icons">
                    <i class="fa-solid fa-bookmark"></i>
                    <i class="fa-solid fa-bookmark"></i>
                    <i class="fa-solid fa-bookmark"></i>
                    </article>
                    <article id="text">
                    <h2 class="text-center">- Portfolio -</h2>
                    <h2 style="font-weight: bold;" class="text-center">Elián Moisés</h2>
                    </article>
                    <article class="icons">
                    <i class="fa-solid fa-bookmark"></i>
                    <i class="fa-solid fa-bookmark"></i>
                    <i class="fa-solid fa-bookmark"></i>
                    </article>
                </section>
                </section>
                <section id="SECTION-2" class="row col-lg-4">
                <img src="../img/foto-3.jpg" id="foto-perfil" class="col-6 shadow-drop-2-center"></img>
                </section>
                <nav id="SECTION-3" class="row col-lg-4">
                <section id="icons" class="col-12 p-5 pb-3">
                    <a href="/docs/about.html" target="_self"><i class="fa-solid fa-address-book"></i></a>
                    <a href="/docs/studies.html" target="_self"><i class="fa-solid fa-book"></i></a>
                    <i class="fa-solid fa-envelope" id="liveToastBtn"></i>
                </section>
                <section class="idesc col-12 d-flex align-items-center justify-content-around text-center">
                    <p class="idesc-about">About</p>
                    <p class="idesc-estudios">Estudios</p>
                    <p class="idesc-contacto">Contacto</p>
                </section>
                </nav> */}
            </>
        );
    }
}


ReactDOM.render(
    <Header />, document.getElementById('header')
    );
