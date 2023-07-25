import { Footer } from "components/footer";
import { Navbar } from "components/navbar";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
