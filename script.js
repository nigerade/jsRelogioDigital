const getHours = () => {
    // puxa a classe clock
    const clock = document.getElementsByClassName('clock')[0]

    // instancia data
    const date = new Date()

    // pega horas, minutos e segundos
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    // 2 digitos
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds

    // mostra na classe clock
    clock.innerHTML = `${hour}:${minute}:${second}`
}

// mantem o relogio atualizado
setInterval(() => {
    getHours()
}, 1000)