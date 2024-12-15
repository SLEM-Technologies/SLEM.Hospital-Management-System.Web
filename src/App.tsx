import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// import AuthProvider from './services/AuthProvider'

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}