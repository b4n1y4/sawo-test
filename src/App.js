import SawoLogin from "sawo-react";

function App() {
  function sawoLoginCAllBack(payload) {
    console.log(payload);
  }
  const sawoConfig = {
    onSucces: sawoLoginCAllBack,
    identifierType: "email",
    apiKey: "2198b645-1340-48d1-9bc9-a90e84a102e7",
    containerHeight: "230px",
  };
  return (
    <div>
      <SawoLogin config={sawoConfig} />
    </div>
  );
}

export default App;
