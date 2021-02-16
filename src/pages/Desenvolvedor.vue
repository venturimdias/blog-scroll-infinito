<template>
  <div class="container">
    <h2>Dev front-end</h2>
    <h1>Jonathan Venturim</h1>
    <p>
      Sou sócio e desenvolvedor Front-end da empresa Aldabra
      <a href="https://aldabra.com.br">(www.aldabra.com.br)</a>. Alguns
      trabalhos realizados: Missbela, Videbula, Vigauto, Ivetro, Rede Marcela,
      Novo site da União Engenharia, Bueraux de Marketing, Dikma, dentre outros.
    </p>

    <p>
      Trabalho atualmente com as seguintes ferramentas: Photoshop, Illustrator,
      Indesign, HTML, CSS, Javascript, Jquery, VS Code, Mysql.
    </p>

    <p>
      Tenho conhecimento básico em: Wordpress, CorelDraw, C#, SQL Server, PHP,
      Python.
    </p>

    <p>
      Estudando atualmente: Javascript (aperfeiçoando), React js, React Native,
      Vue.js
    </p>

    <p>
      Extra que não estão no currículo: 
      <ul>
        <li>- Análise e desenvolvimento de um projeto para IE intercambio de gestão interna (IE control - PHP/MYSQL); </li>
        <li>- Curso online de Criação Publicitária para Web - 2011 (cursos.brunoavila.com.br);</li>
        <li>- Participei do 16º EDTED - RJ - Encontro de Design e Tecnologia Digital - 2011;</li>
      </ul>
    </p>

    <btn texto="Fale comigo" url="/contato" />
  </div>
</template>
<script>
import btn from "@/components/btn";
export default {
  components: {
    btn,
  },
};
</script>
<style scoped>
h1 {
  margin-bottom: 30px;
}
p {
  line-height: 140%;
}
p + p {
  margin: 20px 0 0;
}
ul li + li {
  margin-top: 5px;
}
</style>