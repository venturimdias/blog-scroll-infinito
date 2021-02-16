<template>
  <div class="header">
    <div class="container flex">
      <router-link to="/" class="flex logo"
        ><img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGlkPSJMYWdlcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PGc+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNTAiIHN0eWxlPSJmaWxsOiNGMERCNEY7Ii8+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMV8xXyI+PGc+PGc+PHBhdGggZD0iTTQ4LjQsNDQuNmg4Ljd2MjQuNWMwLDExLTUuMywxNC45LTEzLjcsMTQuOWMtMi4xLDAtNC43LTAuMy02LjQtMC45bDEtNy4xICAgICAgYzEuMiwwLjQsMi44LDAuNyw0LjUsMC43YzMuNywwLDYtMS43LDYtNy42TDQ4LjQsNDQuNkw0OC40LDQ0LjZ6IiBzdHlsZT0iZmlsbDojMzIzMzMwOyIvPjxwYXRoIGQ9Ik02NC44LDc0LjRjMi4zLDEuMiw2LDIuNCw5LjcsMi40YzQsMCw2LjEtMS43LDYuMS00LjNjMC0yLjQtMS44LTMuOC02LjUtNS40ICAgICAgYy02LjQtMi4zLTEwLjctNS45LTEwLjctMTEuNkM2My40LDQ5LDY5LDQ0LDc4LjEsNDRjNC40LDAsNy42LDAuOSw5LjksMmwtMiw3Yy0xLjUtMC43LTQuMy0xLjgtOC0xLjhjLTMuOCwwLTUuNiwxLjgtNS42LDMuNyAgICAgIGMwLDIuNSwyLjEsMy42LDcuMiw1LjVjNi44LDIuNSwxMCw2LjEsMTAsMTEuNmMwLDYuNS00LjksMTItMTUuNiwxMmMtNC40LDAtOC44LTEuMi0xMS0yLjRMNjQuOCw3NC40eiIgc3R5bGU9ImZpbGw6IzMyMzMzMDsiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+"
      /></router-link>

      <ul class="menu flex">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/desenvolvedor">[Dev]</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  background: var(--tipografia);
  min-height: 50px;
  padding: 10px 0;
  margin-bottom: 20px;
}
.header .container {
  align-items: center;
}
.header .logo {
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--branco);
}
.header .logo img {
  width: 60px;
  height: 60px;
}
.header .menu {
  margin-left: auto;
}
.header .menu li + li {
  margin-left: 10px;
}
.header .menu a {
  color: var(--branco);
}
</style>