function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
 

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("scr", "./assets/avatar-light.svg")
  } else {
    //set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.svg")
  }
}
