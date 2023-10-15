        var apresentacao = document.getElementById("ap-inicial");
       var conteudo = document.getElementById("container");
       conteudo.style.display = "none";
       apresentacao.addEventListener("animationend", function() {
           apresentacao.style.display = "none";
           conteudo.style.display = "block";
       })

       function AparecerBotaoVoltar() {
        var voltar = document.getElementById('voltar');
        voltar.classList.remove('d-none');
        voltar.addEventListener("transitionend", function(){
            voltar.classList.add('voltar');
            voltar.classList.add('espaco');
        });
        voltar.addEventListener("click", function() {
            setTimeout(function() {
                voltar.classList.remove('voltar');
                voltar.classList.add('d-none');
                voltar.classList.remove('espaco');
            }, 100);
        });
    }
    
    function MostrarSecao(OpcaoSelecionada) {
        var opcoes = document.getElementsByClassName('opcao');
        var voltar = document.getElementById('voltar');
    
        for (let i = 0; i < opcoes.length; i++) {
            if (opcoes[i].id === OpcaoSelecionada) {
                opcoes[i].classList.add('subir');
                setTimeout(function() {
                    opcoes[i].classList.add('d-none');
                }, 100);
                AparecerBotaoVoltar();
            }else {
                opcoes[i].classList.remove('subir', 'd-none');
            }
        }
    }
    
