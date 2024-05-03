function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let calcularNivel

    if( vitorias < 10){
        nivel= "Ferro"

    }else if( vitorias >= 11 && vitorias <= 20){
        nivel= "Bronze"
    }else if( vitorias >= 21 && vitorias <= 50){
        nivel =" Prata"
    }else if(vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    }else if (vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"

    }else if( vitorias >= 91 && vitorias <= 100){
        nivel = "Lendario"
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias: saldoVitorias, nivel: nivel };
        
    }

        let vitorias = 85
        let derrotas = 25
        let resultado = calcularNivel(vitorias, derrotas)
        console.log("O Herói tem de saldo de " + resultado.saldoVitorias + " está no nível de " + resultado.nivel)


    
