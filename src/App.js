import './App.css';
//import Test from "./components/Test"
import Accordion from "./components/Accordion"
import Balok from "./pages/Balok"
import Student from './pages/Student';


function App() {
  return (
    <div>
      <div className="App">

        {/* <h2 align="center">Daftar Karyawan</h2> */}
        
      {/*nama element: h3      
      /attributes / properties: align*/}
      

        {/* <div className='accordion' id='accordion1'>
          <Accordion id="item1" header="Karyawan 1" parent="#accordion1">
            <Test name="GYue"
              tgl_lahir="29 Septermber 2005"
              gender="Perempuan"
              email="Yue@gmail.com"
              telepon="082140303778"
              divisi="assistant"
              avatar="https://i.pinimg.com/564x/ce/a0/a9/cea0a9bcd2fa657f6e4a1490c6ef8d38.jpg">
              <button>Summon</button>
            </Test>
          </Accordion>
          <Accordion id="item2" header="Karyawan 2" parent="#accordion1">
            <Test name="WDong"
              tgl_lahir="10 Mei 2003"
              gender="Perempuan"
              email="Dong@gmail.com"
              telepon="08281972922"
              divisi="Vice President"
              avatar="https://i.pinimg.com/564x/53/a3/d1/53a3d19d404c204959292a81c5659dd9.jpg">
              <button >Summon</button>
            </Test>
          </Accordion>
          <Accordion id="item3" header="Karyawan 3" parent="#accordion1">
            <Test name="Soo"
              tgl_lahir="29 Maret 2007"
              gender="Perempuan"
              email="Soo@gmail.com"
              telepon="08282379187"
              divisi="surviving company"
              avatar="https://i.pinimg.com/564x/e4/27/6d/e4276d83ce1bb969542cc61cd72e8eb2.jpg">
              <button>Summon</button>
            </Test>
          </Accordion>
    </div> */}
    <Balok title="Lemari" />
    <Balok title="Meja" />
      </div>
    </div>

  );
}

export default App;
