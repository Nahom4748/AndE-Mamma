import serviceImage1 from "@/assets/img/service/service__1.png";
import serviceImage2 from "@/assets/img/service/service__2.png";
import serviceImage3 from "@/assets/img/service/service__3.png";
import serviceImage4 from "@/assets/img/service/service__4.png";
import serviceImage6 from "@/assets/img/service/service__6.png";
import serviceImage7 from "@/assets/img/service/service__7.png";
import serviceImage8 from "@/assets/img/service/service__8.png";
import serviceImage9 from "@/assets/img/service/service__9.png";
import serviceImage10 from "@/assets/img/service/service__10.png";
import serviceImage11 from "@/assets/img/service/service__11.png";
import serviceImage12 from "@/assets/img/service/service__12.png";
import serviceImage13 from "@/assets/img/service/service__13.png";
import serviceImage14 from "@/assets/img/service/service__14.png";
import serviceImage15 from "@/assets/img/service/service__15.png";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
const getAllServices = () => {
  const services = [
    {
      id: 1,
      title: "Our MissionCommunity Empowerment",
      desc: "Empowering 1,050 struggling mammas annually by training them as artisans in the production of handcrafted paper goods and as marketing ambassadors for proactive recycling.",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Strategic Planning",
      duration: "1500",
    },
    {
      id: 2,
      title: "HR Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Cost Reduction Analysis",
      duration: "1700",
    },
    {
      id: 3,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage13,
      img: serviceImage8,
      category: "Strategic Planning",
      duration: "1900",
    },
    {
      id: 4,
      title: "HR Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage12,
      img: serviceImage6,
      category: "Cost Reduction Analysis",
      duration: "2100",
    },
    {
      id: 5,
      title: "Helping People",
      desc: "We create new jobs and markets for mothers who need help. We train them to make crafts and help them sell their work. Our Spirit of Mammas Love project helps 1,050 mothers earn money and learn new skills.",
      detailsImg: projectImage11,
      img: serviceImage7,
      category: "Business Process",
      duration: "2400",
    },

    {
      id: 6,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage8,
      category: "Supply Chain Optimization",
      duration: "2700",
    },

    {
      id: 7,
      title: "Helping People",
      desc: "We create new jobs and markets for mothers who need help. We train them to make crafts and help them sell their work. Our Spirit of Mammas Love project helps 1,050 mothers earn money and learn new skills.",
    detailsImg: projectImage14,
      img: serviceImage1,
      category: "Financial Restructuring",
      duration: "1500",
    },
    {
      id: 8,
      title: "HR Consulting",
      desc: "Empowering 1,050 struggling mammas annually by training them as artisans in the production of handcrafted paper goods and as marketing ambassadors for proactive recycling.",
      detailsImg: projectImage13,
      img: serviceImage2,
      category: "Supply Chain Optimization",
      duration: "1700",
    },
    {
      id: 9,
      title: "IT Consulting",
      desc: "Empowering 1,050 struggling mammas annually by training them as artisans in the production of handcrafted paper goods and as marketing ambassadors for proactive recycling.",
      detailsImg: projectImage12,
      img: serviceImage3,
      category: "Strategic Planning",
      duration: "1900",
    },
    {
      id: 10,
      title: "Legal Consulting",
      desc: "Empowering 1,050 struggling mammas annually by training them as artisans in the production of handcrafted paper goods and as marketing ambassadors for proactive recycling.",
      detailsImg: projectImage11,
      img: serviceImage4,
      category: "Supply Chain Optimization",
      duration: "2100",
    },
    {
      id: 11,
      title: "Collection for Recycling and Upcycling",
      desc: "Involves establishing a proactive used paper collection system in Addis Ababa with a capacity of 20,000 ton per year to facilitate used paper recycling and upcycling. This project involves ambassadors who inspire organizations to transform environmentally unfriendly practices of used paper incineration and disposa",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Market Entry Strategy",
      duration: "1500",
    },
    {
      id: 12,
      title: "Secure Document Collection",
      desc: "Secure document collection for recycling is a service designed for cutting of the documents into four parts using electrical cutters, storing and disposal in an environmentally friendly way.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Strategic Planning",
      duration: "1900",
    },
    {
      id: 13,
      title: "Upcycling Handcrafting",
      desc: "Involves participatory production of handcrafted used paper bowls and basketry with a capacity of 500,000 items per year. AndE Mamma specializes in design, decoration, marketing, sales, and exporting of these handcrafted used paper products while 1,050 struggling mothers are trained as handcrafting artisans.",
      detailsImg: projectImage13,
      img: serviceImage8,
      category: "Market Entry Strategy",
      duration: "2100",
    },

    {
      id: 14,
      title: "Agency Consulting",
      desc: "Empowering 1,050 struggling mammas annually by training them as artisans in the production of handcrafted paper goods and as marketing ambassadors for proactive recycling.",
      detailsImg: projectImage12,
      img: serviceImage13,
      category: "Business Process",
      duration: "1500",
    },
    {
      id: 15,
      title: "HR Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage11,
      img: serviceImage14,
      category: "Market Entry Strategy",
      duration: "1700",
    },
    {
      id: 16,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage15,
      category: "Business Process",
      duration: "1900",
    },
    {
      id: 17,
      title: "Legal Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage16,
      category: "Financial Restructuring",
      duration: "2100",
    },
    {
      id: 18,
      title: "STRATEGY PLANNING",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage13,
      img: serviceImage9,
      category: "Business Process",
      duration: "1500",
    },
    {
      id: 19,
      title: "FINANCIAL ANALYSIS",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage12,
      img: serviceImage10,
      category: "Financial Restructuring",
      duration: "1700",
    },
    {
      id: 20,
      title: "MARKET RESEARCH",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage11,
      img: serviceImage11,
      category: "Cost Reduction Analysis",
      duration: "1900",
    },
    {
      id: 21,
      title: "GROWTH STRATEGIES",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage12,
      category: "Cost Reduction Analysis",
      duration: "2100",
    },
  ];
  return services;
};

export default getAllServices;
