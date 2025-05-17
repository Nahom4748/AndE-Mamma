import Image from "next/image";

import brandImage5 from "@/assets/img/brand/recycling.png";
import brandImage4 from "@/assets/img/brand/brand__4.png";
import brandImage6 from "@/assets/img/brand/hand.png";
import brandImage7 from "@/assets/img/brand/eco.png";
import brandImage8 from "@/assets/img/brand/mom.png";
const HeaderAnimate = () => {
  const items = [
    { name: "ANDE MAMMA", img: brandImage4 },
    { name: "SPRIT OF MAMMA'S LOVE", img: brandImage8 },
    { name: "COMMUNITY EMPOWERMENT", img: brandImage4 },
    { name: "HANDMADE", img: brandImage6 },
    { name: "UPCYCLING", img: brandImage5 },
    { name: "ECO-SOCIAL BUSINESS", img: brandImage7 },
 
  ];
  return (
    <div className="header__animate">
      <div className="container-fluid">
        <div className="header__animate__wraper">
          {items?.map(({ name, img }, idx) => (
            <div key={idx} className="header__animate__item">
              <Image src={img} alt="" />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimate;
