import Image from "next/image";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
export default function Home() {
  const [isUSA, setIsUSA] = useState(false);
  const [isGERMANY, setIsGERMANY] = useState(false);
  const [isCANADA, setIsCANADA] = useState(false);
  const [isUK, setIsUK] = useState(false);

  return (
    <div className="bg-bgPrimaryColor max-w-screen-mobile h-[844px]">
      <div className="flex flex-col pt-[33px]">
        {/* logo */}
        <div className="mb-[11px] ml-[22px]">
          <Image
            src="/Images/logo.svg"
            alt="SarmatVpn"
            width={114}
            height={45}
          />
        </div>
        {/* ServerList */}
        <div className="relative flex items-center justify-center mb-[45.71px] mx-[46px]">
          <img
            src="/Images/Rectangle.svg"
            alt="serverList"
            className="w-[298px] h-[53.92px]"
          />
          <span className="absolute text-[24px] font-bold text-bgPrimaryColor mb-2">
            Server list
          </span>
        </div>
        {/* ServerCountries */}
        <div className="felx flex-col bg-[url('/Images/worldSign.svg')] w-[376px] h-[255px] mx-[7px]">
          <div className="flex flex-col items-center">
            {/* USA */}
            <div
              className={`flex flex-col  ${isUSA ? "mb-[11px]" : "mb-[18px]"}`}
            >
              <div
                onClick={() => setIsUSA(!isUSA)}
                className="bg-countrybg justify-between z-0 flex items-center opacity-70 w-[309px] h-[60px] rounded-[30px]"
              >
                {/* image&pic */}
                <div className="flex items-center z-10 ">
                  <img src="/Images/USA.svg" className="ml-[11px]" alt="USA" />
                  <span className="text-black font-black ml-[17px] z-10">
                    USA
                  </span>
                </div>
                {/* down */}
                {!isUSA ? (
                  <BiChevronDown className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-200" />
                ) : (
                  <BiChevronUp className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-200" />
                )}
              </div>
              {/* USADetail */}
              {isUSA && (
                <div className="flex bg-countrybg opacity-70 w-[309px] h-[60px] rounded-[30px] items-center justify-between mt-[11px]">
                  <div className="flex items-start">
                    {/* serverImage */}
                    <div className="ml-[11px]">
                      <img src="/Images/server.svg" alt="server" />
                    </div>
                    {/* severSedcription */}
                    <div className="flex flex-col ml-[11.9px]">
                      <span className="text-[13px] font-bold text-black w-[83px] h-[19.97px]">
                        server 23581
                      </span>
                      <span className="text-[13px] font-bold text-black w-[122px] h-[19.97px]">
                        protocol:Openvpn
                      </span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center mb-[45.71px] mt-[45px] mr-[15px]">
                    <img src="/Images/Connect.svg" alt="connect" />
                    <span className="absolute mb-1 text-[24px] font-bold text-bgPrimaryColor">
                      Connect
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* Germany */}
            <div
              className={`flex flex-col  ${
                isGERMANY ? "mb-[11px]" : "mb-[18px]"
              }`}
            >
              <div
                onClick={() => setIsGERMANY(!isGERMANY)}
                className={`bg-countrybg justify-between z-0 flex items-center opacity-70 w-[309px] h-[60px] rounded-[30px] ${
                  isGERMANY && "mb-[11px]"
                }`}
              >
                {/* image&pic */}
                <div className="flex items-center z-10 ">
                  <img
                    src="/Images/Germany.svg"
                    className="ml-[11px]"
                    alt="Germany"
                  />
                  <span className="text-black font-black ml-[17px] z-10">
                    GERMANY
                  </span>
                </div>
                {/* down */}
                {!isGERMANY ? (
                  <BiChevronDown className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-200" />
                ) : (
                  <BiChevronUp className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-200" />
                )}
              </div>
              {/* GermanyDetails */}
              {isGERMANY && (
                <div className="flex bg-countrybg opacity-70 w-[309px] h-[60px] rounded-[30px] items-center justify-between">
                  <div className="flex items-start">
                    {/* serverImage */}
                    <div className="ml-[11px]">
                      <img src="/Images/server.svg" alt="server" />
                    </div>
                    {/* severSedcription */}
                    <div className="flex flex-col ml-[11.9px]">
                      <span className="text-[13px] font-bold text-black w-[83px] h-[19.97px]">
                        server 23581
                      </span>
                      <span className="text-[13px] font-bold text-black w-[122px] h-[19.97px]">
                        protocol:Openvpn
                      </span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center mb-[45.71px] mt-[45px] mr-[15px]">
                    <img src="/Images/Connect.svg" alt="connect" />
                    <span className="absolute mb-1 text-[24px] font-bold text-bgPrimaryColor">
                      Connect
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* CANADA */}
            <div
              className={`flex flex-col  ${
                isCANADA ? "mb-[11px]" : "mb-[18px]"
              }`}
            >
              <div
                onClick={() => setIsCANADA(!isCANADA)}
                className={`bg-countrybg justify-between z-0 flex items-center opacity-70 w-[309px] h-[60px] rounded-[30px] ${
                  isCANADA ? "mb-[11px]" : ""
                }`}
              >
                {/* image&pic */}
                <div className="flex items-center z-10 ">
                  <img
                    src="/Images/canada.svg"
                    className="ml-[11px]"
                    alt="Canada"
                  />
                  <span className="text-black font-black ml-[17px] z-10">
                    CANADA
                  </span>
                </div>
                {/* down */}
                {!isCANADA ? (
                  <BiChevronDown className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-200" />
                ) : (
                  <BiChevronUp className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-200" />
                )}
              </div>
              {/* GermanyDetails */}
              {isCANADA && (
                <div className="flex bg-countrybg opacity-70 w-[309px] h-[60px] rounded-[30px] items-center justify-between">
                  <div className="flex items-start">
                    {/* serverImage */}
                    <div className="ml-[11px]">
                      <img src="/Images/server.svg" alt="server" />
                    </div>
                    {/* severSedcription */}
                    <div className="flex flex-col ml-[11.9px]">
                      <span className="text-[13px] font-bold text-black w-[83px] h-[19.97px]">
                        server 23581
                      </span>
                      <span className="text-[13px] font-bold text-black w-[122px] h-[19.97px]">
                        protocol:Openvpn
                      </span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center mb-[45.71px] mt-[45px] mr-[15px]">
                    <img src="/Images/Connect.svg" alt="connect" />
                    <span className="absolute mb-1 text-[24px] font-bold text-bgPrimaryColor">
                      Connect
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* UK */}
            <div
              className={`flex flex-col  ${
                isGERMANY ? "mb-[11px]" : "mb-[18px]"
              }`}
            >
              <div
                onClick={() => setIsUK(!isUK)}
                className={`bg-countrybg justify-between z-0 flex items-center opacity-70 w-[309px] h-[60px] rounded-[30px] ${
                  isUK && "mb-[11px]"
                }`}
              >
                {/* image&pic */}
                <div className="flex items-center z-10 ">
                  <img src="/Images/UK.svg" className="ml-[11px]" alt="UK" />
                  <span className="text-black font-black ml-[17px] z-10">
                    UK
                  </span>
                </div>
                {/* down */}
                {!isUK ? (
                  <BiChevronDown className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-700" />
                ) : (
                  <BiChevronUp className=" w-8 h-8 stroke-black mr-[18px] transition-all duration-700" />
                )}
              </div>
              {/* GermanyDetails */}
              {isUK && (
                <div className="flex bg-countrybg opacity-70 w-[309px] h-[60px] rounded-[30px] items-center justify-between">
                  <div className="flex items-start">
                    {/* serverImage */}
                    <div className="ml-[11px]">
                      <img src="/Images/server.svg" alt="server" />
                    </div>
                    {/* severSedcription */}
                    <div className="flex flex-col ml-[11.9px]">
                      <span className="text-[13px] font-bold text-black w-[83px] h-[19.97px]">
                        server 23581
                      </span>
                      <span className="text-[13px] font-bold text-black w-[122px] h-[19.97px]">
                        protocol:Openvpn
                      </span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center mb-[45.71px] mt-[45px] mr-[15px]">
                    <img src="/Images/Connect.svg" alt="connect" />
                    <span className="absolute mb-1 text-[24px] font-bold text-bgPrimaryColor">
                      Connect
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
