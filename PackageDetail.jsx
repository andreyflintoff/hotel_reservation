import Showcase from "./Showcase";
import { HotelDetail } from "../Detail/HotelDetail";
import WrapperContainer from "./WrapperContainer";

const PackageDetail = () => {
  return (
    <div className="bg-[#0b8185]">
    <WrapperContainer> 
      <div className="flex flex-col md:flex-row items-center p-4 py-12 text-[#fcf2de]">
        <div className="w-1/2">
          <span>Packages</span>
          <h3 className="text-4xl">Treat Yourself</h3>
        </div>
        <div className="w-1/2">
          <p className="text-[16px]">
          We have 244 standard rooms, which have views over the street or courtyard. Our rooms are fully kitted out for business travelers, and come with free Wi-Fi, along with desk chairs and a compact sitting area.
Décor-wise, rooms also have elegant touches like hardwood floors, and soundproof windows guarantee a restful night's sleep
          </p>
        </div>
      </div>
      <div
        id="showcase-Section"
        className="container m-auto flex flex-wrap flex-col md:flex-row justify-between items-center"
      >
        {HotelDetail.map((detail) => (
          <Showcase
            img={detail.image}
            title={detail.title}
            desc={detail.desc}
            button={detail.button}
          />
        ))}
      </div>
      </WrapperContainer> 
    </div>
  );
};

export default PackageDetail;
