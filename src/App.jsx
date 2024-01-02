import { Layout } from "./components/layout/Layout";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { loader as loaderDataIndex } from "./pages/IndexPage";
import { loader as loaderDataAdmin } from "./pages/AdminPage";
import { loader as loaderOneOffer } from "./pages/OfferDetailPage";
import { action } from "./pages/OfferPostPage";
import NotFound from "./pages/NotFound";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AdminPage = React.lazy(() => import("./pages/AdminPage"));
const OfferDetailPage = React.lazy(() => import("./pages/OfferDetailPage"));
const OfferPostPage = React.lazy(() => import("./pages/OfferPostPage"));
const IndexPage = React.lazy(() => import("./pages/IndexPage"));


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
      <Route path="/admin" element={<AdminPage />} loader={loaderDataAdmin} errorElement={<h1>Ha ocurrido un error</h1>}/>
      <Route
        path="admin/post-offer"
        element={<OfferPostPage />}
        action={action}
        errorElement={<h1>Ha ocurrido un error</h1>}
        
      />
    </Route>
  )
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <LoadingSpinner />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  )

  // return  <RouterProvider router={router} />;

}

export default App;
