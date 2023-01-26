import { RouterProvider } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import { router } from "./Router/Router";

function App()
{
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
