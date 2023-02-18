import { useEffect, useLayoutEffect, useState } from "react";
import RoutesWrapper from "./components/RoutesWrapper";
import Spinner from "./components/Spinner";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);
  return loading ? <Spinner /> : <RoutesWrapper />;
}

export default App;
