import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./Sectionheaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute right-0 w-full justify-start">
        <div className="absolute -left-0 -top-12 text-left">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"sallad"} />
        </div>
        <div className="h-48 absolute -top-36 right-0 -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={"check out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
