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
            <img src="img/logo.png" alt="Logo de la banda Los Redondos">
            <h1>Los Redondos</h1>
        </header>`;
    }
}
customElements.define('header-component', HeaderComponent);

const contentContainer = document.getElementById('contentContainer');

document.getElementById('pagina1').addEventListener('click', function() {
    contentContainer.innerHTML = `<div class="body-paginas">
        <h1>Racing 17/7/1992</h1>
        <div class="grid">
            <img src="img/monumental2.jpg">
            <img src="img/monumental3.jpg">
            <img src="img/monumental4.jpg">
            <img src="img/monumental1.jpeg">
        </div>
    </div>`;
});

document.getElementById('pagina2').addEventListener('click', function() {
    contentContainer.innerHTML = `<div class="body-paginas">
        <h1>Huracán 16/12/1994</h1>
        <div class="grid">
            <img src="img/monumental4.jpg">
            <img src="img/monumental1.jpeg">
            <img src="img/monumental2.jpg">
            <img src="img/monumental3.jpg">
        </div>
    </div>`;
});

document.getElementById('pagina3').addEventListener('click', function() {
    contentContainer.innerHTML = `<div class="body-paginas">
        <h1>River 14/5/2000</h1>
        <div class="grid">
            <img src="img/monumental1.jpeg">
            <img src="img/monumental3.jpg">
            <img src="img/monumental4.jpg">
            <img src="img/monumental2.jpg">
        </div>
    </div>`;
});

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Cambiar modo';
darkModeButton.style.position = 'fixed';
darkModeButton.style.top = '90%';
darkModeButton.style.right = '2%';
darkModeButton.style.padding = '1% 2%';
darkModeButton.style.zIndex = '9997';
darkModeButton.addEventListener('click', toggleDarkMode);

document.body.appendChild(darkModeButton);
