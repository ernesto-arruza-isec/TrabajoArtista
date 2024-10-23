class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<footer>
          <p>Redes sociales:</p>
        <a href="https://www.facebook.com/IndioSolariOk" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/indio_solari_ok/" target="_blank">Instagram</a>
        <a href="https://twitter.com/Indio_Solari_Ok" target="_blank">Twitter</a>
        </footer>`;
    }
  }
  customElements.define('footer-component', FooterComponent);


  class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<header>
          <div>
            <img src="logo-evento-footer.png" alt="Logo Los Redondos">
        </div>
        <div>
            <h1>LOS REDONDOS</h1>
        </div>
        </header>`;
    }
  }
  customElements.define('header-component', HeaderComponent);

  function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}


document.getElementById('pagina1').addEventListener('click', function() {
    loadPage('page1.html');
});

document.getElementById('pagina2').addEventListener('click', function() {
    loadPage('page2.html');
});

document.getElementById('pagina3').addEventListener('click', function() {
    loadPage('page3.html');
});
