import { UserIcon, HomeIcon } from "@heroicons/react/solid";

interface LeftPaneProps {
  userFullName: string;
}

export const LeftPane = ({ userFullName }: LeftPaneProps) => {
  return (
    <div className="bg-white flex-auto space-y-6 border rounded-xl hidden lg:block">
      <div className="flex border-b border-[#49A05C] p-6 items-center">
        <div className="bg-[#DCFCE8] rounded-full p-1 mr-3">
          <UserIcon className="text-[#49A05C] w-8 h-8" />
        </div>
        <div className="flex-auto">
          <p className="text-sm text-[#49A05C]">My Profile</p>
          <p className="text-md">{userFullName && userFullName}</p>
        </div>
      </div>
      <div className="px-6 pb-6 space-y-6">
        <div className="flex space-x-6 items-center">
          <HomeIcon className="w-6 h-6 text-[#49A05C]" />
          <p className="flex-auto">Home</p>
        </div>
        <div className="flex space-x-6 items-center">
          <img src="/images/addicon.png" className="w-5 h-5 text-[#49A05C]" />
          <p>Protection Plans</p>
        </div>
        <div className="flex space-x-6 items-center">
          <img src="/images/linkicon.png" className="w-5 h-5 text-[#49A05C]" />
          <p>Linked Device</p>
        </div>
        <div className="flex space-x-6 items-center">
          <img
            src="/images/repairicon.png"
            className="w-5 h-5 text-[#49A05C]"
          />
          <p>Repairs</p>
        </div>
        <div className="flex space-x-6 items-center">
          <img src="/images/papericon.png" className="w-5 h-5 text-[#49A05C]" />
          <p>Claims</p>
        </div>
      </div>
    </div>
  );
};
