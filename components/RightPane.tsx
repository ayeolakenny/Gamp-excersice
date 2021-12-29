import { ArrowLeftIcon } from "@heroicons/react/solid";
import { PROTECTION_PLANS } from "../constants";
import { ProtectionPlanCard } from "./ProtectionPlanCard";

interface RightPaneProps {
  plans: any[];
}

export const RightPane = ({ plans }: RightPaneProps) => {
  let screenProtectionPlanIndex = 0;
  let serviceContactPlanIndex = 0;

  plans.forEach((plan) => {
    if (plan.planType === PROTECTION_PLANS.SCREEN_PROTECTION)
      screenProtectionPlanIndex += 1;
    if (plan.planType === PROTECTION_PLANS.SERVICE_CONTRACT)
      serviceContactPlanIndex += 1;
  });
  return (
    <div className="bg-white w-full lg:w-3/4 rounded-xl">
      <h3 className="p-4 border-b border-[#00B600] text-lg flex items-center space-x-2">
        <ArrowLeftIcon className="w-6 h-6 cursor-pointer lg:hidden" />
        <p>Protection Plans</p>
      </h3>
      <div className="flex space-x-3 border-b border-[#49A05C] justify-center md:justify-start p-2 pb-0">
        <div className="border-[#49A05C] border-b-2 px-4 py-3">
          <a href="#">
            <p className="text-sm font-normal text-[#49A05C]">
              SCREEN PROTECTION <span>({screenProtectionPlanIndex})</span>
            </p>
          </a>
        </div>
        <div className="px-4 py-3">
          <a href="#">
            <p className="text-sm font-normal">
              SERVICE CONTRACT <span>({serviceContactPlanIndex})</span>
            </p>
          </a>
        </div>
      </div>
      <div>
        {plans.map((plan) => (
          <ProtectionPlanCard
            key={plan.id}
            createdDate={plan.history[0].createdAt}
            price={plan.price}
            numOfLaptops={plan.numOfLaptops}
            numOfPhones={plan.numOfPhones}
          />
        ))}
      </div>
      <div className="flex justify-end items-center mt-4 p-2">
        <span className="m-2 cursor-pointer text-md">&lt;</span>
        <span className="m-2 cursor-pointer text-md bg-[#DCFCE8] w-auto h-auto py-2 px-4 rounded-lg">
          1
        </span>
        <span className="m-2 cursor-pointer text-md">2</span>
        <span className="m-2 cursor-pointer text-md">3</span>
        <span className="m-2 cursor-pointer text-md">...</span>
        <span className="m-2 cursor-pointer text-md">10</span>
        <span className="m-2 cursor-pointer text-md">&gt;</span>
      </div>
    </div>
  );
};
