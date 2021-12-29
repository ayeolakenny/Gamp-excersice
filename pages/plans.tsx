import { useEffect, useState } from "react";
import { LeftPane } from "../components/LeftPane";
import { NavBar } from "../components/NavBar";
import { RightPane } from "../components/RightPane";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useRouter } from "next/router";

export default function Plans() {
  const router = useRouter();

  const { accesstoken } = useContext(LoginContext);

  useEffect(() => {
    if (!accesstoken) {
      router.push("/login");
    }
  }, []);

  const [plans, setPlans] = useState<any[]>([]);
  const [userFullName, setUserFullName] = useState<string>("");

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accesstoken", accesstoken);

    fetch("https://gamp-server-staging.herokuapp.com/v1/plan/spplan/fetch", {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setUserFullName(
          `${result.data[0].firstName} ${result.data[0].lastName}`
        );
        setPlans(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E5E5] p-2 lg:p-6">
      <NavBar firstName={plans[0]?.firstName} />
      <div className="flex lg:space-x-6 mt-10 lg:mt-16 p-0 lg:px-10">
        <LeftPane userFullName={userFullName} />
        <RightPane plans={plans} />
      </div>
    </div>
  );
}
