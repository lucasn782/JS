function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'CriançaH.png');
                document.body.style.background = '#253745';
            } else if (idade >=12 && idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemH.png');
                document.body.style.background = '#C9C8CD';
            } else if (idade >=21 && idade < 65){
                //Adulto
                img.setAttribute('src', 'AdultoH.png');
                document.body.style.background = '#868E91';
            } else if (idade >=65){
                //Idoso
                img.setAttribute('src', 'IdosoH.png');
                document.body.style.background = '#877F74';
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if (idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'CriançaM.png');
                document.body.style.background = '#838643';
            } else if (idade >=12 && idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemM.png');
                document.body.style.background = '#A99A85';
            } else if (idade >=21 && idade < 65){
                //Adulto
                img.setAttribute('src', 'AdultoM.png');
                document.body.style.background = '#78A166';
            } else if (idade >=65){
                //Idoso
                img.setAttribute('src', 'IdosoM.png');
                document.body.style.background = '#E0A563';
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        res.appendChild(img);
    }

}