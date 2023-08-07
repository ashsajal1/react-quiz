import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Single from "../Pages/Single";
import Multiple from "../Pages/Multiple";
import NotFound from "../Pages/NotFound";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Single />} />
          <Route path="multiple" element={<Multiple />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}