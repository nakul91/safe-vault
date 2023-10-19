import { useState } from "react";
import { VaultListItem, WalletActionCard } from ".";
import SlidingTab from "../shared/SlidingTab";

import { Button } from "../shared";
import { homeTabs } from "../../constants";

interface IHome {
  handleSetupChest: () => void;
  loader?: boolean;
}

export default function HomePage(props: IHome) {
  const [activeTab, setActiveTab] = useState("vaults");

  const handleTabClick = (id: any) => {
    setActiveTab(id);
  };
  return (
    <div className="pt-[96px] bg-white h-[100dvh] relative">
      <div className="container mx-auto">
        <WalletActionCard />
        <div className="mb-4">
          <SlidingTab
            tabData={homeTabs}
            handleTabClick={handleTabClick}
            activeTab={activeTab}
          />
        </div>
        <VaultListItem />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full py-6 bg-white">
        <Button
          className="!bg-purple !rounded-3xl !text-base w-[90%] mx-auto"
          variant={"primary"}
          label="Create custom vault"
        />
      </div>
    </div>
  );
}
