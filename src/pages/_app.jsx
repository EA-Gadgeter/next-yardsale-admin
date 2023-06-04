import { AuthProvider } from "../hooks/useAuth";

import MainLayout from "../layout/MainLayout";

import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;
