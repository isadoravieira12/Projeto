function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("scr", "avatar-light.png")
  } else {
    //set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "avatar.png")
  }
}
