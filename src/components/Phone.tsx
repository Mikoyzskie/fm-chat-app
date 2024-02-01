import Image from "next/image"
import { FaChevronLeft } from "react-icons/fa6";
import { TbChevronCompactLeft } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function Phone() {
    return (
        <div className='bg-white w-[247px] py-[11px] px-[9.5px] relative rounded-[30px]'>
            <div className='notch absolute w-[129px] h-[29px] top-0 left-1/2 -translate-x-1/2 bg-white rounded-b-[14px]'>

            </div>
            <div className='bg-[#F5F3F7] rounded-[20px] overflow-hidden border border-[#F5F3F7]'>
                <div className='pt-[30px] pl-[15.5px] pr-[16.5px] pb-3 flex items-center justify-between bg-gradient-to-bl from-[rgb(232,68,255)] to-[rgb(135,57,255)] rounded-b-[6px]'>
                    <div className="flex items-center gap-2">
                        {/* <FaChevronLeft className="h-[10px] w-2 text-white" /> */}
                        <svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.10557 0.552784C2.35256 0.0588057 2.95324 -0.141419 3.44721 0.105571C3.90591 0.334918 4.11131 0.869227 3.94056 1.33989L3.89443 1.44721L2.118 5L3.89443 8.55278C4.12377 9.01148 3.96751 9.56217 3.54851 9.83625L3.44721 9.89443C2.98852 10.1238 2.43783 9.96751 2.16374 9.54851L2.10557 9.44721L0.105573 5.44721C-0.0150818 5.2059 -0.0323182 4.92797 0.0538637 4.6762L0.105573 4.55278L2.10557 0.552784Z" fill="white" />
                        </svg>

                        <Image
                            alt="Avatar"
                            src={"/avatar.jpg"}
                            width={200}
                            height={200}
                            className="border border-white rounded-full w-[23px] h-[23px]"
                        />
                        <div className="flex flex-col gap-[2px]">
                            <p className="text-[11px] leading-[11px] font-semibold text-white">Samuel Green</p>
                            <p className="text-[8px] text-white">Available to Walk</p>
                        </div>
                    </div>
                    <HiOutlineDotsVertical className="text-white" />
                </div>
                <div className="pt-[11px] px-[7.5px] pb-4 text-[8px] text-[#9341C8]  flex flex-col gap-4">
                    <div>
                        <p className="px-2 py-[6px] max-w-[128px] bg-[#EEE5F4] rounded-[10px] rounded-bl-[4px] leading-[11px] mb-2">{"That sounds great. I’d be happy with that."}</p>
                        <p className="px-2 py-[6px] max-w-[128px] bg-[#EEE5F4] rounded-[10px] rounded-bl-[4px] leading-[11px]">Could you send over some pictures of your dog, please?</p>
                    </div>
                    <div className="flex justify-end flex-col items-end gap-2">
                        <div className="flex gap-2">
                            <Image
                                alt="dog"
                                src={"/dog-image-1.jpg"}
                                width={100}
                                height={100}
                                className="h-10 w-10 rounded-[10px]"
                            />
                            <Image
                                alt="dog"
                                src={"/dog-image-2.jpg"}
                                width={100}
                                height={100}
                                className="h-10 w-10 rounded-[10px]"
                            />
                            <Image
                                alt="dog"
                                src={"/dog-image-3.jpg"}
                                width={100}
                                height={100}
                                className="h-10 w-10 rounded-[10px]"
                            />
                        </div>
                        <p className="px-2 py-[6px] max-w-[128px] shadow-md text-[#6E5D7E] bg-[#fff] rounded-[10px] rounded-br-[4px] leading-[11px]">{"Here are a few pictures. She’s a happy girl!"}</p>
                        <p className="px-2 py-[6px] max-w-[128px] shadow-md text-[#6E5D7E] bg-[#fff] rounded-[10px] rounded-br-[4px] leading-[11px]">Can you make it?</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="px-2 py-[6px] max-w-[128px] bg-[#EEE5F4] rounded-[10px] rounded-bl-[4px] leading-[11px]">She looks so happy! The time we discussed works. How long shall I take her out for?</p>
                        <div className="bg-gradient-to-br max-w-[160px] rounded-[10px] rounded-bl-[4px] text-white from-[rgb(232,68,255)] to-[rgb(135,57,255)] py-[10px] pl-2 pr-4 flex items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="5.5" stroke="#E472FF" />
                                </svg>
                                <p>30 minute walk</p>
                            </div>
                            <p className="text-xs font-bold">$29</p>
                        </div>
                        <div className="bg-gradient-to-br max-w-[160px] rounded-[10px] rounded-bl-[4px] text-white from-[rgb(232,68,255)] to-[rgb(135,57,255)] py-[10px] pl-2 pr-4 flex items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="5.5" stroke="#E472FF" />
                                </svg>
                                <p>1 hour walk</p>
                            </div>
                            <p className="text-xs font-bold">$49</p>
                        </div>
                    </div>
                </div>
                <div className="px-[7.5px] pb-[10px]">
                    <div className="py-[4.84px] pr-[4.73px] pl-[19.42px] bg-white rounded-full flex items-center">
                        <input type="text" placeholder="Type a message..." className="text-[9px] w-full h-full outline-none" />
                        <div className="bg-[#3E2753] rounded-full py-[7.27px] pr-[8.5px] pl-[9.71px] hover:cursor-pointer">
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.06419 0.464993C1.50167 0.028436 2.19006 -0.00514531 2.66614 0.364249L2.78047 0.464993L6.42125 4.09809C6.85873 4.53464 6.89238 5.22158 6.52221 5.69666L6.42125 5.81074L2.78047 9.44384C2.30653 9.91677 1.53813 9.91677 1.06419 9.44384C0.626713 9.00728 0.59306 8.32034 0.963236 7.84527L1.06419 7.73118L3.84588 4.95442L1.06419 2.17765C0.626713 1.74109 0.59306 1.05416 0.963236 0.579081L1.06419 0.464993Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
