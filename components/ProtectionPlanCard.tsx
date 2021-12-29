interface ProtectionPlanCardProps {
  createdDate: string;
  price: number;
  numOfLaptops: number;
  numOfPhones: number;
}

export const ProtectionPlanCard = ({
  createdDate,
  price,
  numOfLaptops,
  numOfPhones,
}: ProtectionPlanCardProps) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 grid-rows-3  gap-y-10 md:flex flex-wrap justify-between border border-green-500 p-4 rounded-lg items-center">
        <div>
          <p className="text-sm">Date Purchased</p>
          <p className="text-[#0D7010] font-medium">
            {createdDate.substring(0, 10)}
          </p>
        </div>
        <div>
          <p className="text-sm">Amount Paid</p>
          <p className="text-[#0D7010] font-medium">N{price}</p>
        </div>
        <div>
          <p className="text-sm">Phone Covered</p>
          <p className="text-[#0D7010] font-medium">{numOfPhones}</p>
        </div>
        <div>
          <p className="text-sm">Laptops Covered</p>
          <p className="text-[#0D7010] font-medium">{numOfLaptops}</p>
        </div>
        <div className="col-span-2">
          <button className="text-white bg-[#49A05C] py-2 px-3 rounded-lg w-full">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};
