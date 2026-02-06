import Layout from "./Layout/Layout";
import AlertButton from "./button/AlertButton";
import Table from "./Table/Table";
import NoteApp from "./note/NoteApp";
import StudentApp from "./stundent/StudentApp";

function App() {
  return (
    <Layout>
      {/* <h1>Welcome</h1>
      <p>Ini konten utama aplikasi gue.</p> */}
      <AlertButton text="Alert Button" message="Ini pesan alert" />
        <Table />
        <NoteApp />
        <StudentApp />
    </Layout>
  );
}

export default App;