<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exercicio 4,5</title>
  
</head>
<body>

<script>
  const computador = {
    marca: "Lenovo",
    processador: "Intel i3",
    memoria: "8GB",
    HD: "1TB"
  }

  function criarNO() {
    const elementoMarca = document.createElement("h1")
    elementoMarca.innerText = computador.marca

    const elementoProc = document.createElement("h2")
    elementoProc.innerText = computador.processador

    const elementoMem = document.createElement("h2")
    elementoMem.innerText = computador.memoria

    const elementoHD = document.createElement("p")
    elementoHD.innerText = computador.HD

    const divProduto = document.createElement("div")
    divProduto.className = "produto"

    divProduto.appendChild(elementoMarca)
    divProduto.appendChild(elementoProc)
    divProduto.appendChild(elementoMem)
    divProduto.appendChild(elementoHD)

    document.body.appendChild(divProduto)
  }

  criarNO()
</script>

</body>
</html>
