import Image from "next/image";
import bg from "@/bg.png"

export default function Home() {

  const teamName = "Project XYZ"

  const info = [
    {
      name: "Avelo Roy",
      img: "0",
      funding: "10,00,000",
      equity: "10%",
      loan: "10,000",
      interest: "10",
      duration: "2 years",
      royalty: "10"
    },
    {
      name: "Avelo Roy",
      img: "0",
      funding: "0",
      equity: "0",
      loan: "20,000",
      interest: "7",
      duration: "5 months",
      royalty: "1.25"
    },
    {
      name: "Avelo Roy",
      img: "0",
      funding: "0",
      equity: "0",
      loan: "0",
      interest: "0",
      duration: "0",
      royalty: "0"
    },
    {
      name: "Avelo Roy",
      img: "0",
      funding: "0",
      equity: "0",
      loan: "0",
      interest: "0",
      duration: "0",
      royalty: "0"
    },
    {
      name: "Avelo Roy",
      img: "0",
      funding: "0",
      equity: "0",
      loan: "0",
      interest: "0",
      duration: "0",
      royalty: "0"
    },
    
  ]

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start py-16 px-10">
      <div className="blur-[50px] w-screen object-contain absolute top-0">
        <Image src={bg} />
      </div>

      <div className="relative z-50">
        <h1 className="text-teal-500 font-bold text-5xl">{teamName}</h1>
      </div>
        <div className="grid grid-flow-col border-t-[2px] border-r-[2px] border-teal-400/20 grid-cols-5 w-[95%] mx-auto py-10 gap-4 bg-black/20 px-4 rounded-xl my-10 relative z-50">
            <div className="grid grid-flow-row bg-black/20 text-center grid-rows-5">
            <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl flex items-center text-xl justify-center bg-black/20 rounded-xl">VC</h1>
              <div className="flex flex-col border-b-[1px] border-teal-400/20 rounded-b-xl relative items-center justify-center h-28 overflow-hidden object-contain">
                {/* <Image src={info[0].img} className="absolute top-0 z-0 brightness-75 w-full object-contain" /> */}
                <h1 className="font-bold text-xl text-teal-300">{info[0].name}</h1>
              </div>
              <div className="flex flex-col border-b-[1px] border-teal-400/20 rounded-b-xl relative items-center justify-center h-28 overflow-hidden object-contain">
                {/* <Image src={info[0].img} className="absolute top-0 z-0 brightness-75 w-full object-contain" /> */}
                <h1 className="font-bold text-xl text-teal-300">{info[1].name}</h1>
              </div>
              <div className="flex flex-col border-b-[1px] border-teal-400/20 rounded-b-xl relative items-center justify-center h-28 overflow-hidden object-contain">
                {/* <Image src={info[0].img} className="absolute top-0 z-0 brightness-75 w-full object-contain" /> */}
                <h1 className="font-bold text-xl text-teal-300">{info[2].name}</h1>
              </div>
              <div className="flex flex-col border-b-[1px] border-teal-400/20 rounded-b-xl relative items-center justify-center h-28 overflow-hidden object-contain">
                {/* <Image src={info[0].img} className="absolute top-0 z-0 brightness-75 w-full object-contain" /> */}
                <h1 className="font-bold text-xl text-teal-300">{info[3].name}</h1>
              </div>
              <div className="flex flex-col border-b-[1px] border-teal-400/20 rounded-b-xl relative items-center justify-center h-28 overflow-hidden object-contain">
                {/* <Image src={info[0].img} className="absolute top-0 z-0 brightness-75 w-full object-contain" /> */}
                <h1 className="font-bold text-xl text-teal-300">{info[4].name}</h1>
              </div>
            </div>
            <div className="grid grid-flow-row text-center grid-rows-5 bg-black/20 rounded-xl">
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl flex items-center text-xl justify-center bg-black/20 rounded-xl">Funding(₹)</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[0].funding}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[1].funding}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[2].funding}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[3].funding}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[4].funding}</h1>
            </div>
            <div className="grid grid-flow-row text-center grid-rows-5 bg-black/20 rounded-xl">
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl flex items-center text-xl justify-center bg-black/20 rounded-xl">Equity(%)</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[0].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[1].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[2].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[3].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[4].equity}</h1>
            </div>
            <div className="grid grid-flow-row text-center grid-rows-5 bg-black/20 rounded-xl">
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl flex items-center text-xl justify-center text-center bg-black/20 rounded-xl">Loan</h1>
                <div className="flex gap-4 font-bold w-full justify-center h-28 border-b-[1px] border-teal-400/20 rounded-b-xl items-center text-lg text-center">
                  <h1 >{info[0].loan}, </h1>
                  <h1>{info[0].interest}, </h1>
                  <h1>{info[0].duration}</h1>
                </div>
                <div className="flex gap-4 font-bold w-full justify-center h-28 border-b-[1px] border-teal-400/20 rounded-b-xl items-center text-lg text-center">
                  <h1 >{info[1].loan}, </h1>
                  <h1>{info[1].interest}, </h1>
                  <h1>{info[1].duration}</h1>
                </div>
                <div className="flex gap-4 font-bold w-full justify-center h-28 border-b-[1px] border-teal-400/20 rounded-b-xl items-center text-lg text-center">
                  <h1 >{info[2].loan}, </h1>
                  <h1>{info[2].interest}, </h1>
                  <h1>{info[2].duration}</h1>
                </div>
                <div className="flex gap-4 font-bold w-full justify-center h-28 border-b-[1px] border-teal-400/20 rounded-b-xl items-center text-lg text-center">
                  <h1 >{info[3].loan}, </h1>
                  <h1>{info[3].interest}, </h1>
                  <h1>{info[3].duration}</h1>
                </div>
                <div className="flex gap-4 font-bold w-full justify-center h-28 border-b-[1px] border-teal-400/20 rounded-b-xl items-center text-lg text-center">
                  <h1 >{info[4].loan}, </h1>
                  <h1>{info[4].interest}, </h1>
                  <h1>{info[4].duration}</h1>
                </div>
            </div>
            <div className="grid grid-flow-row text-center grid-rows-5 bg-black/20 rounded-xl">
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl flex items-center text-xl justify-center bg-black/20 rounded-xl">Royalty(₹)</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[0].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[1].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[2].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[3].equity}</h1>
                <h1 className="h-28 border-b-[1px] border-teal-400/20 rounded-b-xl text-2xl font-bold flex items-center justify-center">{info[4].equity}</h1>
            </div>
        </div>
    </main>
  );
}
