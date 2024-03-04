import '../styles/globals.css'
import { NavBar, Footer, HeroSection } from "../components/ComponentsIndex";

const MyApp = ({ Component, pageProps }) => (
<div>
    <NavBar />
    <Component {...pageProps} />
    {/* <HeroSection /> */}
    <Footer />
</div>
);


export default MyApp
