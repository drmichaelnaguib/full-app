import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Container className="py-5">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
