import Header from "../components/Header";
import Nav from "../common/Nav";
import { useAuth } from "../hooks/useAuth";

const MainLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-full">
      {user && <Header />}
      {user && <Nav />}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
