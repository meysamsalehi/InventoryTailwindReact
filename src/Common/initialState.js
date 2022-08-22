import axios from "axios";

const initialState = axios.get("http://localhost:3000/products");

export default initialState;
