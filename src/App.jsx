import { RouterProvider } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { appRouter } from "@/routes/appRouter";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={appRouter} />
    </MotionConfig>
  );
}

export default App;
