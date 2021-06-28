

function calcular(tipo, valor){
    
    if (tipo === "acao"){

        if(valor === "c"){
            document.getElementById("resultado").value = '';
        }

        if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "."){
            document.getElementById("resultado").value += valor;
        }

        if(valor === "="){
            var valor_atual = eval(document.getElementById("resultado").value)
            
            document.getElementById("resultado").value = valor_atual.toFixed(2);
        }
        
    }

    else if (tipo === "valor"){
        document.getElementById("resultado").value += valor;
    }
}