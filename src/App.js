import CallAction from "./components/CallAction";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { infoHeader } from "./data";

const App = () => {
    return (
        <>
            {/* <!-- Responsive navbar--> */}
            <Navbar />
            {/* <!-- Page Content--> */}
            <div className="container px-4 px-lg-5">
                {/* <!-- Heading Row--> */}
                <Header {...infoHeader} /> {/* spread operator */}
                {/* <!-- Call to Action--> */}
                <CallAction />
                {/* <!-- Content Row--> */}
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-5">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5">
                        <Card />
                    </div>
                    <div className="col-md-4 mb-5">
                        <Card />
                    </div>
                </div>
            </div>
            {/* <!-- Footer--> */}
            <Footer />
        </>
    )
}

export default App;