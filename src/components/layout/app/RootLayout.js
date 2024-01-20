import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Container style={{ paddingBottom: "100px" }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
