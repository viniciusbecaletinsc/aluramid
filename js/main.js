const teclas = document.querySelectorAll(".tecla")
const audios = document.querySelectorAll("audio")

function handleClick(tecla) {  
  const className = tecla.classList[1]
  const id = `som_${className}`
  const audio = Array.from(audios).find(audio => audio.id === id)
  audio.load()
  audio.play()
}

Array.from(teclas).forEach(tecla => {
  tecla.addEventListener("click", () => handleClick(tecla))
})