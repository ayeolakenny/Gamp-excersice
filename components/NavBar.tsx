import { UserIcon, ChevronDownIcon, MenuIcon } from "@heroicons/react/solid";

interface NavbarProps {
  firstName: string;
}

export const NavBar = ({ firstName }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <img src="/images/logo.png" alt="gamp-logo" className="w-14 h-12" />
        <MenuIcon className="w-8 h-8 lg:hidden" />
      </div>
      <div className="hidden lg:flex">
        <ul className="flex space-x-16 items-center">
          <li>Repair</li>
          <li>Business</li>
          <li className="border border-green-500 rounded-lg py-2 px-4">
            Protect Device
          </li>
          <li>
            <a href="#">
              <div className="flex items-center space-x-3">
                <div className="bg-[#DCFCE8] rounded-full p-1">
                  <UserIcon className="text-[#49A05C] w-7 h-7" />
                </div>
                <div className="flex items-center">
                  <p>Hi, {firstName}</p>
                  <ChevronDownIcon className="w-5 h-5 text-[#49A05C]" />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
