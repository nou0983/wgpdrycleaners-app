import Wrapper from "./index.styles";
import { Home, Service, Footer } from "./routes/index.route";

function App() {
  return (
    <Wrapper>
      <Home />
      <Service />
      <Footer />
    </Wrapper>
  );
}

export default App;
