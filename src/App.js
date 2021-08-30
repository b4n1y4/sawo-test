import SawoLogin from "sawo-react";

function App() {
  function sawoLoginCAllBack(payload) {
    console.log(payload);
  }
  const sawoConfig = {
    onSucces: sawoLoginCAllBack,
    identifierType: "email",
    apiKey: process.env.REACT_APP_API_KEY,
    containerHeight: "230px",
  };
  return (
    <div>
      <SawoLogin config={sawoConfig} />
    </div>
  );
}

export default App;
