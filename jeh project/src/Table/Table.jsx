import { useState } from "react";
import "./table.css";

export default function DaftarNama() {
  const [nama, setNama] = useState("");
  const [listNama, setListNama] = useState([]);

  function tambahNama() {
    if (nama === "") return;
    setListNama([...listNama, nama]);
    setNama("");
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="input"
      />

      <button onClick={tambahNama} className="button">
        Tambah Nama
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
