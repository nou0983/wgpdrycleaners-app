import Wrapper from "./index.styles";
import { Home, Service, Order, Footer } from "./routes/index.route";

function App() {
  return (
    <Wrapper>
      <Home />
      <Service />
      <Order />
      <Footer />
    </Wrapper>
  );
}

export default App;
