import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };



  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };



  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    
     
    <div className="App">
      <h1>MEME CREATOR</h1>

      <h3>Selecciona una imagen</h3>
      <select onChange={onChangeImagen}>
        <option disable>MEMES</option>
        <option value="fire">Casa en llamas</option>
        <option value="Futurama">Futurama</option>
        <option value="History">History Channel</option>
        <option value="Matrix">Matrix</option>
        <option value="Philosoraptor">Philosoraptor</option>
        <option value="Smart">Smart Guy</option>
      </select>
      <br />
      <h3>Escribe tu primer linea del meme</h3>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 1" />{" "}
      <br />
      <h3>Escribe tu segunda linea del meme</h3>
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 2" />{" "}
      <br />
      <h3>Descarga la imagen</h3>
      <button onClick={onClickExportar}>Exportar</button>
      <div className="meme" id="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"../img/" + imagen + ".jpg"} alt="imagen MEME"/>
      </div>
    </div>
  );
}

export default App;
