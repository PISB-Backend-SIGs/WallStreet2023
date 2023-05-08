import React from "react";
import TeamCard from "../Components/TeamCard";
const images = [
  {
    id: 1,
    name : "Abhishek Bhosale",
    src: "https://i.postimg.cc/x10ZbpDP/Abhishek.jpg",
    linkedInId : "https://www.linkedin.com/in/abhishek-bhosale-423abb1ba/"
  },

  {
    id: 2,
    name : "Maheshwar Bhosale",
    src: "https://i.postimg.cc/xjwgNDmJ/IMG-20230507-182609.jpg",
    linkedInId : "https://www.linkedin.com/in/maheshwar-bhosale-b44267231/"
  },

  {
    id: 3,
    name : "Shreyas Chandolkar",
    src: "https://credenz.in/static/media/shreyas.0cd153f5674f17097593.jpg",
    linkedInId : "https://www.linkedin.com/in/shreyaschandolkar/"
  },

  {
    id: 4,
    name : "Harsh Bhat",
    src: "https://i.postimg.cc/R0JzdxPr/c0f1bb18-c952-4525-82bd-55a737b61808.jpg",
    linkedInId : "https://www.linkedin.com/in/harshbhat/"   
  },

  {
    id: 5,
    name : "Devraj Shetake",
    src: "https://credenz.in/static/media/devraj.6a8c44a4ae0e02b7cdb5.jpg",
    linkedInId : "https://www.linkedin.com/in/devrajshetake/"
  }

]
const OurTeam = () => {
  return (
    <div>
      <div className="container ">
        <div className="h3 ourTeamTitle mb-4 mb-sm-3 text-center mt-5">Our Team</div>
        <div className="row g-1 g-sm-1 gy-4 align-items-center justify-content-center">
          {
            images.map(
              (img) => (
                <div className="col-sm-4">
                  <TeamCard key={img.id} src={img.src} name = {img.name} linkedInId={img.linkedInId}/>
                </div>
              )
            )
          }
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default OurTeam;
