import "./profileCircle.css";

export const ProfileCircle = () => {
  const imgarr = [
    "./Ellipse25.png",
    "./Ellipse27.png",
    "./Ellipse27-1.png",
    "./Ellipse27-2.png",
    "./Ellipse27-3.png",
  ];
  return (
    <div id="mainCircle" className="transition-all">
      <div id="icon0" className="">
        <img id="image0" src={imgarr[0]} alt=""></img>
      </div>
      <div id="icon1" className="">
        <img id="image1" src={imgarr[1]} alt=""></img>
      </div>
      <div id="icon2" className="">
        <img id="image2" src={imgarr[2]} alt=""></img>
      </div>
      <div id="icon3" className="">
        <img id="image3" src={imgarr[3]} alt=""></img>
      </div>
      <div id="icon4" className="">
        <img id="image4" src={imgarr[4]} alt=""></img>
      </div>
      <div id="icon5" className="">
        <img id="image5" src={imgarr[0]} alt=""></img>
      </div>
      <div id="icon6" className="">
        <img id="image6" src="" alt=""></img>
      </div>
      <div id="icon7" className="">
        <img id="image7" src={imgarr[4]} alt=""></img>
      </div>
    </div>
  );
};
