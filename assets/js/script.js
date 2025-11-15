$(document).ready(function(){

  const music = document.querySelector(".music")
  const musicToggle = document.querySelector('#audioToggle')
  if(music.paused){
    musicToggle.querySelector("i").classList.remove('ri-volume-up-fill')
    musicToggle.querySelector("i").classList.add('ri-volume-mute-fill')
  } else {
    musicToggle.querySelector("i").classList.remove('ri-volume-mute-fill')
    musicToggle.querySelector("i").classList.add('ri-volume-up-fill')
  }

  $("#audioToggle").on('click', function(){
    if(music.paused){
      music.play()
      musicToggle.querySelector("i").classList.add('ri-volume-up-fill')
      musicToggle.querySelector("i").classList.remove('ri-volume-mute-fill')
    } else {
      music.pause()
      console.log("test");
      musicToggle.querySelector("i").classList.remove('ri-volume-up-fill')
      musicToggle.querySelector("i").classList.add('ri-volume-mute-fill')
    }
  })

  // menu 
  $(".ham-menu").on("click", ()=>{
    const hamMenu = document.querySelector(".ham-menu");
    hamMenu.querySelector("ul").classList.toggle('hidden');
  })

  // changes theme based on last choice
  if (localStorage.getItem('theme') == 'dark'){
    toggleTheme();
  }

  // theme
  $(".themeToggle").on("click", ()=>{
    toggleTheme();
  })
})


// theme toggle
function toggleTheme(){
  const theme = document.querySelector(".themeToggle i");
      if(theme.classList.contains("ri-moon-fill")){
        theme.classList.remove("ri-moon-fill");
        theme.classList.add("ri-sun-fill");
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        theme.classList.remove("ri-sun-fill");
        theme.classList.add("ri-moon-fill");
        document.body.classList.remove("dark");
        localStorage.removeItem('theme')
      }
}