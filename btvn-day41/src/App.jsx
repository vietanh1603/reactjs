
import './App.css'
import ProductList from "./components/ProductList.jsx";
import ProductForm from "./components/ProductForm.jsx";
import {store} from "./store/store.js";
import {Provider} from "react-redux";


function App() {

  return (
    <>
        <Provider store={store}>
            <div>
                <h1>Quản lý sản phẩm</h1>
                <ProductForm />
                <ProductList />
            </div>
        </Provider>
    </>
  )
}

export default App
