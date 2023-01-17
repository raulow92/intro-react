import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CardBootstrap from "./Card";
import Footer from "./Footer";
import "./App.css"

function App() {
    return (
        <>
            <Header title="Galería de Imágenes con React"></Header>
            <div className="galleryContainer">
                <CardBootstrap
                    title="Gatito"
                    text="Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too."
                    url="https://www.randomkittengenerator.com/cats/134957.1.jpg"
                    ></CardBootstrap>
                <CardBootstrap
                    title="Gatito 2"
                    text="In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery."
                    url="https://www.randomkittengenerator.com/cats/2475.jpg"
                    ></CardBootstrap>
                <CardBootstrap
                    title="Gatito 3"
                    text="Enjoyed minutes related as at on on. Is fanny dried as often me. Goodness as reserved raptures to mistaken steepest oh screened he."
                    url="https://www.randomkittengenerator.com/cats/105841.2.jpg"
                    ></CardBootstrap>
                <CardBootstrap
                    title="Gatito 4"
                    text="Now residence dashwoods she excellent you. Shade being under his bed her. Much read on as draw."
                    url="https://www.randomkittengenerator.com/cats/153022.2.jpg"
                    ></CardBootstrap>
                <CardBootstrap
                    title="Gatito 5"
                    text="Lose away off why half led have near bed. At engage simple father of period others except."
                    url="https://www.randomkittengenerator.com/cats/21220.jpg"
                    ></CardBootstrap>
                <CardBootstrap
                    title="Gatito 6"
                    text="It prepare is ye nothing blushes up brought. Or as gravity pasture limited evening on. Wicket around beauty say she."
                    url="https://www.randomkittengenerator.com/cats/34846.jpg"
                ></CardBootstrap>
            </div>
            <Footer text="Galería con los mejores gatitos del internet!"></Footer>
        </>
    );
}

export default App;
