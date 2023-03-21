import Head from "next/head";
import Nav from "./Nav";
import { UserProvider } from "@/lib/authContext";

const Layout = ({ user, loading = false, children }) => {
  return (
    <UserProvider value={{ user, loading }}>
      <Head>
        <title>Film Database</title>
      </Head>
      <Nav />
      <main className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16">
        <div className="text-lg font-medium">{children}</div>
      </main>
    </UserProvider>
  );
};

export default Layout;
