import { Layout } from "./components/layout/Layout";
import { IndexPage } from "./pages/IndexPage";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { OfferDetailPage } from "./pages/OfferDetailPage";
import AdminPage from "./pages/AdminPage";
import { OfferPostPage } from "./pages/OfferPostPage";
import { loader as loaderDataIndex } from "./pages/IndexPage";
import { loader as loaderDataAdmin } from "./pages/AdminPage";
import { loader as loaderOneOffer } from "./pages/OfferDetailPage";
import { action } from "./pages/OfferPostPage";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<NotFound/>} element={<Layout />}>
      <Route
        index
        element={<IndexPage />}
        loader={loaderDataIndex}
        errorElement={<h1>Ha ocurrido un error</h1>}
      />
      <Route
        path="offers/:id"
        element={<OfferDetailPage />}
        loader={loaderOneOffer}
        errorElement={<h1>Ha ocurrido un error</h1>}
      />
      <Route path="/admin" element={<AdminPage />} loader={loaderDataAdmin} />
      <Route
        path="admin/post-offer"
        element={<OfferPostPage />}
        action={action}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
