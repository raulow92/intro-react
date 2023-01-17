import Alert from "react-bootstrap/Alert";
import "./App.css"

function Footer({text}) {
    return (
        <>
            <Alert className="footer" variant="warning">{text}</Alert>
        </>
    );
}

export default Footer;
