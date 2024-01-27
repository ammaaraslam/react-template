import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import DefaultLayout from "@layouts/index";

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element: <DefaultLayout>{route.component}</DefaultLayout>
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
