import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default MyApp;
