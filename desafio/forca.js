class Forca {
  letrasChutadas = new Array();
  vidas = 6; 
  palavra = new Array(); 
  palavraCompleta = new Array(); 
  palavraControle = new Array();
  estado = "aguardando chute";
  ganhou = false;

  constructor(palavra) {
    Array.from(palavra).forEach((letra) => {
      this.palavra.push("_");
      this.palavraCompleta.push(letra);
      this.palavraControle.push(letra);
    });
  }

  chutar(letra) {
    if(letra.length > 1 || this.letrasChutadas.includes(letra)){
      return '';
    }

   
    if (
      !this.palavraCompleta.includes(letra) &&
      !this.letrasChutadas.includes(letra)
    ) {
      this.vidas--;
    }

    
    this.letrasChutadas.push(letra);

    
    while (this.palavraControle.includes(letra)) {
      this.palavra.splice(this.palavraControle.indexOf(letra), 1, letra); 
      this.palavraControle.splice(this.palavraControle.indexOf(letra), 1, ""); 
    }

    this.alteraEstado();
  }

  alteraEstado() {
    if (this.vidas <= 0) {
      this.estado = "perdeu";
    }
    if (this.palavraCompleta.toString() == this.palavra.toString()) {
      this.estado = "ganhou";
    }
  }

  buscarEstado() {
    return this.estado;
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas,
      palavra: this.palavra, 
    };
  }
}

module.exports = Forca;