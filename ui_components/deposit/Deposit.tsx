import Image from "next/image";
import { icons } from "../../utils/images";

export default function Deposit() {
  return (
    <div className=" bg-[#ECECEC] h-[100dvh] relative">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 py-4">
          <Image src={icons.chevronBack} alt="back" />
          <p className="support_text_semibold">Confirm deposit</p>
        </div>
        <div className="mt-6 text-center">
          <Image
            className="w-14 rounded-full mb-2 mx-auto"
            src={icons.ethLogo}
            alt="eth"
          />
          <p className="subtitle_bold mb-1">1 ETH</p>
          <p className="meta text-text-600 mb-4">≈ $1600</p>
          <Image src={icons.arrowDownCircle} alt="" className="mx-auto mb-4" />
          <div className="flex items-center gap-2 justify-center mb-8">
            <Image className="w-6" src={icons.vaultIcon} alt="" />
            <p className="supportText_medium text-base text-text-900">
              Vault Name
            </p>
          </div>
          <div className="">
            <ul>
              <li>Wallet using</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
