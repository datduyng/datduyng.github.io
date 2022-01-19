import React, { createRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { FaHeart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/router";
import Welcome from "./welcome";
import Oops from "./oops";

const stateMap = {
  up: "right",
  down: "left",
  right: "right",
  left: "left",
};

const Home = () => {
  const cardSwipeRef = createRef<any>();
  const router = useRouter();
  const swipe = async (dir: "left" | "right") => {
    if (cardSwipeRef.current?.swipe) {
      await cardSwipeRef.current.swipe(dir);
    }

    if (dir === "left") {
      router.push("/oops");
    } else {
      router.push("/welcome");
    }
  };

  const [swipedState, setSwipedState] = useState<"left" | "current" | "right">(
    "current"
  );

  const homeComponents = (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          width: "405px",
          margin: "auto",
        }}
      >
        <div className="text-3xl pb-5">Meet Dom!!</div>
        <TinderCard
          ref={cardSwipeRef}
          onCardLeftScreen={(dir) => {
            setSwipedState(stateMap[dir] as "left" | "current" | "right");
          }}
        >
          <div className="bg-white border-2 rounded-md">
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src="/personal.jpg"
                className="rounded-t-md"
                style={{
                  height: "415px",
                  width: "405px",
                }}
              />
            </div>
            <div className="p-3">
              <p className="text-xl">Dominic Nguyen</p>
              <p className="text-base text-slate-400">@datduyng</p>
              <p className="pb-3">Just vib'in. ❤️ Open source.</p>
              <hr />
              <div className="text-sm pt-3">
                he/him, 5'9. I like to work out 🏋️‍♂️ rock climbing 🧗 skiing ⛷️
                running 🏃‍♂️ and building products 🕹️. I like to blog on IOTs,
                web tech, infra related. Tinkering with the web 3.0. Swipe right
                for my resume 😜
              </div>
            </div>
          </div>
        </TinderCard>
        <div className="flex justify-between">
          <button
            className="bg-white m-4"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "50%",
            }}
            onClick={() => swipe("left")}
          >
            <VscChromeClose
              fontSize={32}
              style={{
                margin: "auto",
              }}
              color="#CDD6DD"
            />
          </button>
          <button
            className="bg-white m-4"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "50%",
            }}
            onClick={() => swipe("right")}
          >
            <FaHeart
              fontSize={32}
              style={{
                margin: "auto",
              }}
              color="#FFACE4"
            />{" "}
          </button>
        </div>
      </div>
    </>
  );

  switch (swipedState) {
    case "current":
      return homeComponents;
    case "left":
      return <Oops />;
    case "right":
      return <Welcome />;
    default:
      break;
  }
};

export default Home;
