import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-bgPrimaryColor max-w-screen-mobile h-[844px]">
      <div className="flex flex-col">
        {/* logo */}
        <div className="mb-[11px]">
          <Image
            src="/Images/logo.svg"
            alt="SarmatVpn"
            width={114}
            height={45}
          />
        </div>
        {/* ServerList */}
        <div className="relative flex items-center justify-center">
          <img
            src="/Images/rectangle-5.png"
            alt="serverList"
            className="w-[298px] h-[53.92px]"
          />
          <span className="absolute text-[24px] font-bold text-bgPrimaryColor">
            Server list
          </span>
        </div>
        {/* ServerCountries */}
        <div className="felx flex-col">
          {/* USA */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
