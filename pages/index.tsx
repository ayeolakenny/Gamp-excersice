import { useRouter } from "next/router";
import { useEffect } from "react";

function index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/plans");
  }, []);
  return <div>Redirecting to main app</div>;
}

export default index;
