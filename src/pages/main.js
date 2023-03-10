import { useState } from "react";
import { ProfileCircle } from "../components/profileCircle";
import { ProfileInfo } from "../components/profileInfo";
import "./main.css";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

let index = 2;
let rotateCount = 0;
let present = 2;

export const Main = () => {
  const ProfileData = [
    {
      Name: "Prankur Gupta",
      Position: "SDE @Amazon",
      Details:
        "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
      Stars: 4.9,
      Source: "./Ellipse25.png",
      BG: "#7ABD87",
    },
    {
      Name: "Saurav Pal",
      Position: "SDE-2 @Amazon",
      Details:
        "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
      Stars: 5.0,
      Source: "./Ellipse27.png",
      BG: "#C5F8C7",
    },
    {
      Name: "Saumya Singh",
      Position: "Software Engineer @Red Hat",
      Details:
        "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
      Stars: 4.9,
      Source: "./Ellipse27-1.png",
      BG: "#7ABD87",
    },
    {
      Name: "Keshav Bathla",
      Position: "SDE-1 @Groww",
      Details:
        "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
      Stars: 5.0,
      Source: "./Ellipse27-2.png",
      BG: "#C5F8C7",
    },
    {
      Name: "Ankita",
      Position: "ML Engineer @Firework",
      Details:
        "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ",
      Stars: 5.0,
      Source: "./Ellipse27-3.png",
      BG: "#7ABD87",
    },
  ];

  const [profile, setProfile] = useState(ProfileData[2]);

  function moveProfileCircle(type) {
    if (type === "left") {
      index = index + 1;
      index = index % 8;
      present += 1;
      if (present > 4) {
        present = 0;
      }
      rotateCount -= 1;
    } else {
      index = index - 1;
      present = present - 1;
      if (index < 0) {
        index = 8 + index;
      }
      if (present < 0) {
        present = 4;
      }
      rotateCount += 1;
    }
    document.getElementById("mainCircle").style.transform = `rotate(${
      45 * rotateCount
    }deg)`;
    for (let i = 0; i <= 7; i++) {
      document.getElementById("image" + i).style.transform = `rotate(${
        45 * rotateCount * -1
      }deg)`;
    }
    document.getElementById("image" + ((index + 3) % 8)).src =
      document.getElementById(
        "image" + ((index - 2 < 0 ? 8 + (index - 2) : index - 2) % 8)
      ).src;
    document.getElementById(
      "image" + ((index - 3 < 0 ? 8 + (index - 3) : index - 3) % 8)
    ).src = document.getElementById("image" + ((index + 2) % 8)).src;
    setProfile(ProfileData[present]);

    const nameDiv = document.getElementById("nameDiv");
    nameDiv.style.transform = "translateX(8%)";
    setTimeout(() => {
      nameDiv.style.transform = "translateX(0)";
    }, 500);

    // Make the "book session" button flash
    const bookSessionButton = document.getElementById("bookSession");
    bookSessionButton.classList.add("flash");
    setTimeout(() => {
      bookSessionButton.classList.remove("flash");
    }, 1000);
  }

  return (
    <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
      <div
        style={{
          height: "60%",
          width: "40%",
          position: "absolute",
          top: "25%",
        }}
      >
        <ProfileInfo presentProfile={profile} />
      </div>

      <div id="cutArc" style={{ backgroundColor: `${profile.BG}` }}>
        <ProfileCircle />
      </div>
      <div id="mainImage">
        <img className="img" src={profile.Source} alt="" />
      </div>
      <button
        id="btn1"
        className="btn rounded-full bg-primary"
        onClick={() => moveProfileCircle("left")}
      >
        <HiOutlineArrowNarrowDown
          className="invert"
          style={{ scale: "200%", marginLeft: "40%" }}
        />
      </button>
      <button
        id="btn2"
        className="btn rounded-full"
        onClick={() => moveProfileCircle("right")}
      >
        <HiOutlineArrowNarrowDown
          className="invert"
          style={{ scale: "200%", marginLeft: "40%" }}
        />
      </button>

      <div id="nameDiv" className="NameBox place-content-center ">
        <h1 className="Name text-5xl m-auto mt-7 ">{profile.Name}</h1>
      </div>
    </div>
  );
};
