function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`;
    if(hora >= 0 && hora < 6){
        //BOA MADRUGADA!
        img.src = 'Madrugada.png';
        document.body.style.background = '#FF633C';
    }else if(hora >= 6 && hora < 12){
        //BOM DIA!
        img.src = 'Manhã.png';
        document.body.style.background = '#84CCFA';
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'Tarde.png';
        document.body.style.background = '#613A4C';
    }else if(hora >= 18){
        //BOA NOITE!
        img.src = 'Noite.png';
        document.body.style.background = '#3F3644';
    }
}