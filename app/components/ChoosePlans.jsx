import Chatbot from "../fragments/ChatBot";
import PlanList from "../fragments/PlanList";
import { GiFireworkRocket } from "react-icons/gi";

const ChoosePlans = () => {
  return (
    <div className=" w-full relative inter pt-10">
      <div className=" fixed m-5 p-4 bottom-0 left-0 z-xl">
        <Chatbot />
      </div>
      <div className="">
        <div className=" flex items-center justify-between">
          <h2 className=" plus text-2xl inter  text-left text-gray-600   font-bold">
            Investment Plans
          </h2>
          <div className="mt-5 flex items-center gap-5 text-gray-600">
            <span className=" text-blue-600 plus p-3 text-xl rounded-full flex items-center justify-center w-9 h-9 bg-blue-200">
              <GiFireworkRocket />
            </span>
          </div>
        </div>
        <div className="flex  mt-6 md:items-center  justify-between md:flex-row ds:flex-col">
          <p className="leading-6 text-zinc-500 plus">
            Choose the right plan for you , anyone that suits you best
          </p>
        </div>
        <div className=" w-full grid-container pt-6  gap-16">
          <div className="w-full h-[360px] space-y-8 p-3 py-5 smooth shadow-2xl hover:scale-95 rounded-md bg-white">
            <div className="flex items-center gap-4">
              <span className=" p-1 w-8 h-8 flex items-center  justify-center  bg-blue-300 rounded-full">
                <span className=" block w-5 h-5 rounded-full  bg-blue-700  "></span>
              </span>
              <p className=" text-blue-700 plus font-medium text-sm" plan="Basic">BASIC </p>
            </div>
            <div className=" text-center flex gap-2 items-center">
              <strong className=" plus text-4xl font-bold text-neutral-900">
                15%
              </strong>{" "}
              <p className="text-[10px] text-neutral-600 translate-y-2 plus">
                /Per Day
              </p>
            </div>

            <div className=" space-y-5">
              <PlanList option="Min 500.00 USD" />
              <PlanList option="Max 30,000.00 USD" />
              <PlanList option="For 1 Month" />
              <PlanList option="No Capital back" />
            </div>
            <button className=" w-full bg-blue-700 hover:opacity-65 smooth h-10 mt-5  text-white plus text-sm rounded-md p-2">
              Get Plan
            </button>
          </div>
          <div className="w-full h-[400px] sm:-translate-y-5 space-y-8 shadow-2xl  smooth hover:scale-95 p-3 py-5 rounded-md bg-white">
            <div className="flex items-center gap-4">
              <span className=" p-1 w-8 h-8 flex items-center  justify-center  bg-green-300 rounded-full">
                <span className=" block w-5 h-5 rounded-full  bg-green-700  "></span>
              </span>
              <p className=" text-green-700 plus text-sm">PREMIUM </p>
            </div>
            <div className=" text-center flex gap-2 items-center">
              <strong className=" plus text-4xl font-bold text-neutral-900">
                30%
              </strong>{" "}
              <p className="text-[10px] text-neutral-600 translate-y-2 plus">
                /Per Day
              </p>
            </div>

            <div className=" space-y-5">
              <PlanList option="Min 30,000.00 USD" />
              <PlanList option="Max 500,000.00 USD" />
              <PlanList option="For 3,4,6 months" />
              <PlanList option="Capital back" />
            </div>
            <button className=" w-full bg-green-700 hover:opacity-65 smooth h-10 mt-5  text-white plus text-sm rounded-md p-2">
              Get Plan
            </button>
          </div>
          <div className="w-full h-[360px] shadow-2xl  smooth hover:scale-95 space-y-8 p-3 py-5 rounded-md bg-white">
            <div className="flex items-center gap-4">
              <span className=" p-1 w-8 h-8 flex items-center  justify-center  bg-purple-300 rounded-full">
                <span className=" block w-5 h-5 rounded-full  bg-purple-700  "></span>
              </span>
              <p className=" text-purple-700 plus font-medium uppercase text-sm">
                Platinum{" "}
              </p>
            </div>
            <div className=" text-center flex gap-2 items-center">
              <strong className=" plus text-4xl font-bold text-neutral-900">
                50%
              </strong>{" "}
              <p className="text-[10px] text-neutral-600 translate-y-2 plus">
                /Per Day
              </p>
            </div>

            <div className=" space-y-5">
              <PlanList option="Min 35,000.00 USD" />
              <PlanList option="Max 1000,000.00 USD" />
              <PlanList option="For 1 Year" />
              <PlanList option="Capital back" />
            </div>
            <button className=" w-full bg-purple-700 h-10 mt-5 hover:opacity-65 smooth  text-white plus text-sm rounded-md p-2">
              Get Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlans;
