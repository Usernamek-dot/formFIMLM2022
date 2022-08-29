import { Form } from "./components/Form";
import FormTest from "./components/FormTest";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center py-6">
        {/* <FormTest /> */}
        <Form />
      </div>
    </>
  );
}

export default App;
