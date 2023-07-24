import * as React from "react";

import { Footer, Navbar } from "components";

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
