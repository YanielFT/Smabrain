import { Layout } from "./components/layout/Layout";
import { IndexPage } from "./pages/IndexPage";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { OfferDetailPage } from "./pages/OfferDetailPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="offers/:id" element={<OfferDetailPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
