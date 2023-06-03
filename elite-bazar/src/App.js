import { Header, CreateContainer, MainContainer, VegBox } from "./Components";
import { AnimatePresence } from "framer-motion";
import "./Assets/css/wholeFile.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./Components/testing/Detail";
import { fruitData } from "./utils/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoginForm from "./Components/Login And Registration/LoginForm";
import Registration from "./Components/Login And Registration/Registration";
import Cart from "./Components/cart/Cart";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";
import Dashboard from "./Components/Admin/Dashboard";
import DBHome from "./Components/Admin/DBHome";
import DBOrder from "./Components/Admin/DBOrder";
import DBNewItem from "./Components/Admin/DBNewItem";
import DBUser from "./Components/Admin/DBUsers";
import DBItems from "./Components/Admin/DBItems";


function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AnimatePresence mode="wait">
      <div className="wrap-Container">
      
    
  
        

        <main id="main">
          {/* <CartContainer /> */}
          <Routes>
            <Route path="/*" element={<MainContainer data={fruitData} />} />
            <Route
              path="/createItem"
              element={<CreateContainer />}
            />
            
              <Route
              path="/login"
              element={<LoginForm />}
            />
            <Route
              path="/register"
              element={<Registration />}
            />
            
            
            <Route
              path="/detail"
              element={<Detail items={fruitData} />}
            />
             <Route
              path="/menu"
              element={<VegBox flag={false} />}
            />

            <Route 
            path="/cart"
            element={<Cart />}/>

            <Route path={"/dashboard/*"} element={<Dashboard />} />
            {/* <Route path="/dashboard/db-home" element={<DBHome />} />
                    <Route path="/dashbaord/db-order" element={<DBOrder />} />
                    <Route path="/dashbaord/db-item" element={<DBItems />} />
                    <Route path="/dashbaord/db-newItem" element={<DBNewItem />} />
                    <Route path="/dashbaord/db-user" element={<DBUser />} /> */}

          </Routes>
        </main>
      </div>
    </AnimatePresence>
    </StateProvider>

    
  

  );
}

export default App;
