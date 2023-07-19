import { Navbar } from "components";
import * as React from "react";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
