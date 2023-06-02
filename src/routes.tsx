import { createBrowserRouter } from "react-router-dom";

import Playground from "./Playground";

export default createBrowserRouter([
  {
    path: "/",
    element: <Playground />,
  },
]);
