import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center py-6">
        <Form />
      </div>
    </>
  );
}

export default App;
