import "./App.css";
import Myprop from "./tugas3";
import Tugas1 from "./tugas1";
import Tambah from "./tugas2";
import Tugas4 from "./tugas4";
import Tugas5 from "./tugas5";

function App() {
  return (
    <div className="App">
      <h1>Tugas-Js</h1>
      <br></br>
      <Tugas1 />
      <br></br>
      <Tambah />
      <br></br>
      <Myprop judul="Soal 3" />
      <Myprop text="saya bersekolah dari smk ti bazma"/>
      <Tugas4/>
      <Tugas5/>
    </div>
  );
}

export default App;
