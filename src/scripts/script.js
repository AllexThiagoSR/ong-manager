const main = document.getElementById("main-spa-container");
const homeButton = document.getElementById("home-button");
const projectsButton = document.getElementById("projects-button");
const signupButton = document.getElementById("signup-button");

let currentPage = "home";

const mountProjectsPage = () => {};

const mountSignupPage = () => {};

homeButton.addEventListener("click", () => {
  if (currentPage === "home") return;
  currentPage = "home";
  main.innerHTML = `
<div>
  <section class="main-container">
    <h3>Sobre nós</h3>
    <p>
      O Instituto Vida Verde é uma organização sem fins lucrativos dedicada à proteção ambiental e ao bem-estar animal.
    </p>
    <p>
      Seu objetivo é promover a preservação da biodiversidade brasileira, resgatar e reabilitar animais silvestres e educar comunidades sobre práticas sustentáveis.
    </p>
    <h4>A ONG atua em três frentes principais:</h4>
    <ol>
      <li>Conservação ambiental – reflorestamento e manejo de áreas degradadas.</li>
      <li>Proteção animal – resgate, abrigo e reintrodução de animais silvestres.</li>
      <li>Educação e conscientização – programas educativos em escolas e comunidades.</li>
    </ol>
  </section>
</div>
<div class="mission-vision-values-container">
  <details class="mission-vision-values-details mission">
    <summary class="mission-vision-values-summary">
      <h4>Missão</h4>
    </summary>
    <p>Proteger o meio ambiente e promover o respeito à vida animal por meio de ações sustentáveis, educação e engajamento social.</p>
  </details>
  <details class="mission-vision-values-details vision">
    <summary class="mission-vision-values-summary">
      <h4>Visão</h4>
    </summary>
    <p>Ser referência nacional em conservação ambiental e reabilitação de fauna, inspirando uma nova geração a cuidar do planeta.</p>
  </details>
  <details class="mission-vision-values-details values">
    <summary class="mission-vision-values-summary">
      <h4>Valores</h4>
    </summary>
    <ul>
      <li><b>Sustentabilidade:</b> cada ação deve gerar impacto positivo.</li>
      <li><b>Ética:</b> transparência e responsabilidade em todas as atividades.</li>
      <li><b>Respeito à vida:</b> humanos, animais e natureza coexistindo em equilíbrio.</li>
      <li><b>Educação:</b> conhecimento como ferramenta de transformação.</li>
    </ul>
  </details>
</div>`;
});

projectsButton.addEventListener("click", () => {
  if (currentPage === "projects") return;
  currentPage = "projects";
  main.innerHTML = `
<section class="main-container">
  <h2>Projetos</h2>
  <section class="reforestation-project project">
    <h3>Projeto Refloresta</h3>
    <p>Desde 2017, o Projeto Refloresta atua na recuperação de áreas degradadas por queimadas e desmatamentos ilegais. Com o apoio de voluntários e parceiros, já foram plantadas mais de 12 mil mudas de espécies nativas em três estados brasileiros. O projeto também realiza oficinas sobre plantio sustentável e manejo do solo.</p>
  </section>
  <section class="wildlife-guardians-project project">
    <h3>Projeto Guardiões da Fauna</h3>
    <p>O Guardiões da Fauna é voltado ao resgate, reabilitação e devolução à natureza de animais silvestres vítimas de tráfico e acidentes. A equipe veterinária realiza acompanhamento clínico, reeducação alimentar e monitoramento pós-liberação. Mais de 800 animais já foram salvos em parceria com órgãos ambientais.</p>
  </section>
  <section class="sustainable-education-project project">
    <h3>Projeto Educação Sustentável</h3>
    <p>Por meio de palestras, oficinas e materiais didáticos, este projeto já alcançou mais de 5.000 estudantes em escolas públicas. O objetivo é despertar o senso de responsabilidade ambiental desde a infância, promovendo atitudes conscientes no dia a dia.</p>
  </section>
</section>
<section class="donation">
  <h2>Doações</h2>
  <p>O trabalho do Instituto Vida Verde depende de doações e parcerias.</p>
  <p>Cada contribuição ajuda a alimentar, tratar e devolver animais à natureza, além de financiar o plantio de novas árvores.</p>
  <h3>Exemplos de impacto:</h3>
  <ul>
    <li>R$ 20 — Planta uma muda nativa.</li>
    <li>R$ 50 — Alimenta um animal silvestre por uma semana.</li>
    <li>R$ 100 — Cobre o tratamento de um animal resgatado.</li>
  </ul>
</section>`;
});

signupButton.addEventListener("click", () => {
  if (currentPage === "signup") return;
  currentPage = "signup";
   main.innerHTML = `
<section class="volunteering">
  <h2>Voluntariado</h2>
  <div class="volunteering-texts">
    <p>Ser voluntário é transformar amor em ação.</p>
    <p>O Instituto Vida Verde acredita que toda pessoa pode contribuir para a preservação ambiental.</p>
    <p>Oferecemos programas de voluntariado nas áreas de educação ambiental, resgate animal, reflorestamento e comunicação social.</p>
  </div>
  <section>
    <h3>Como participar:</h3>
    <ol>
      <li>Escolha uma área de atuação.</li>
      <li>Preecha o formulário de inscrição.</li>
      <li>Participe de treinamentos e multirões presenciais.</li>
    </ol>
  </section>
  <section>
    <h3>Depoimentos</h3>
    <div class="depoiment">
      <p>“Ser voluntária no Vida Verde me fez entender o valor de cada gesto pelo meio ambiente.”</p>
      <p>— Juliana Oliveira, estudante de Biologia.</p>
    </div>
    <div class="depoiment">
      <p>“Acompanhar um animal reabilitado voltar à natureza é uma das maiores recompensas.”</p>
      <p>— Felipe Moura, voluntário há 3 anos.</p>
    </div>
  </section>
</section>
<form class="signup-form">
  <fieldset>
    <legend>Informações pessoais</legend>
    <label for="name">Nome completo: <input id="name" type="text" required></label>
    <label for="e-mail">Email: <input id="e-mail" type="email" required></label>
    <label for="cpf">CPF: <input required id="cpf" type="text" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"></label>
    <label for="phone">Telefone: <input required id="phone" type="tel" pattern="([0-9]){2} [0-9]{5}-[0-9]{4}"></label>
    <label for="birth-date">Data de Nascimento: <input required id="birth-date" type="date"></label>
  </fieldset>
  <fieldset>
    <legend>Informações de endereço</legend>
    <label for="address">Endereço: <input id="address" type="text"></label>
    <label for="cep">CEP: <input id="cep" type="text" pattern="[0-9]{5}-[0-9]{3}"></label>
    <label for="city">Cidade: <input id="city" type="text"></label>
    <label for="state">Estado: <input id="state" type="text"></label>
  </fieldset>
  <button type="submit">Enviar inscrição</button>
</form>`;
});


/*<section class="volunteering">
  <h2>Voluntariado</h2>
  <div class="volunteering-texts">
    <p>Ser voluntário é transformar amor em ação.</p>
    <p>O Instituto Vida Verde acredita que toda pessoa pode contribuir para a preservação ambiental.</p>
    <p>Oferecemos programas de voluntariado nas áreas de educação ambiental, resgate animal, reflorestamento e comunicação social.</p>
  </div>
  <section>
    <h3>Como participar:</h3>
    <ol>
      <li>Escolha uma área de atuação.</li>
      <li>Preecha o formulário de inscrição.</li>
      <li>Participe de treinamentos e multirões presenciais.</li>
    </ol>
  </section>
  <section>
    <h3>Depoimentos</h3>
    <div class="depoiment">
      <p>“Ser voluntária no Vida Verde me fez entender o valor de cada gesto pelo meio ambiente.”</p>
      <p>— Juliana Oliveira, estudante de Biologia.</p>
    </div>
    <div class="depoiment">
      <p>“Acompanhar um animal reabilitado voltar à natureza é uma das maiores recompensas.”</p>
      <p>— Felipe Moura, voluntário há 3 anos.</p>
    </div>
  </section>
</section>
<form class="signup-form">
  <fieldset>
    <legend>Informações pessoais</legend>
    <label for="name">Nome completo: <input id="name" type="text" required></label>
    <label for="e-mail">Email: <input id="e-mail" type="email" required></label>
    <label for="cpf">CPF: <input required id="cpf" type="text" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"></label>
    <label for="phone">Telefone: <input required id="phone" type="tel" pattern="([0-9]){2} [0-9]{5}-[0-9]{4}"></label>
    <label for="birth-date">Data de Nascimento: <input required id="birth-date" type="date"></label>
  </fieldset>
  <fieldset>
    <legend>Informações de endereço</legend>
    <label for="address">Endereço: <input id="address" type="text"></label>
    <label for="cep">CEP: <input id="cep" type="text" pattern="[0-9]{5}-[0-9]{3}"></label>
    <label for="city">Cidade: <input id="city" type="text"></label>
    <label for="state">Estado: <input id="state" type="text"></label>
  </fieldset>
  <button type="submit">Enviar inscrição</button>
</form>*/