import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import './global.css'
import Product from "./Product";

const App = () => {
    return ( 
        <section>
            <article className="Main-Art">
            <div className="Main-Div">
            <Sidebar/>
            <Dashboard/>
            <Product/>
        </div>
        </article>
        </section>
     );
}
 
export default App;