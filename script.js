function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var saudacao = window.document.getElementById('saudacao')
var data = new Date()
var hora = 7 //data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${min}`
if(hora >= 0 && hora <= 4){
    img.src = 'fotomadrugada.png'
    document.body.style.background = '#001114'
    saudacao.innerHTML = 'Boa Madrugada!'
}else if (hora >= 0 && hora < 12){
    img.src = 'fotomanha.png'
    document.body.style.background = '#ede1c4'
    saudacao.innerHTML = 'Bom Dia!'
} else if (hora >=12 && hora <= 18){
    img.src = 'fototarde.png'
    document.body.style.background = '#fc8e14'
    saudacao.innerHTML = 'Boa Tarde!'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#00343a'
    saudacao.innerHTML = 'Boa Noite!'
}
}
