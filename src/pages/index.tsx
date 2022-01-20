import React, { createRef, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/router";
import Welcome from "./welcome";
import Oops from "./oops";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Layout from "../components/layout";


const SWIPE_THRESHOLD = 60;
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

  // const [swipedState, setSwipedState] = useState<"left" | "current" | "right">(
  //   "current"
  // );

  // move the card as user drag the cursor
  const motionValue = useMotionValue(0 as any);
  // to rotate the card as the card move on drag
  const rotateValue = useTransform<any, any>(
    motionValue,
    [-150, 150],
    [-30, 30]
  );

  // To decrease opacity of the card when swiped
  // on dragging card to left(-200) or right(200)
  // opacity gradually changes to 0
  // and when the card is in center opacity = 1
  const opacityValue = useTransform(motionValue, [-100, -50, 0, 50, 100],
    [0, 1, 1, 1, 0]);

  const tinderCard = (
    <div className="bg-white border-2 rounded-md">
      <div
        style={{
          overflow: "hidden",
          pointerEvents: 'none',
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
          he/him, 5'9. I like to work out 🏋️‍♂️ rock climbing 🧗 skiing ⛷️ running
          🏃‍♂️ and building products 🕹️. I like to blog on IOTs, web tech, infra
          related. Tinkering with the web 3.0. Swipe right for my resume 😜
        </div>
      </div>
    </div>
  );
  const animControls = useAnimation();
  const [swipedState, setSwipeState] = useState<"left" | "mid" | "right">("mid");

  // useEffect(() => {
  //   motionValue.onChange(curr => {
  //     if
  //   })
  // })
  const homeComponents = (
    <motion.div
      style={{
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          maxWidth: "405px",
          margin: "auto",
        }}
      >
        <div className="text-3xl pb-5 xs:hidden sm:hidden md:flex">Meet Dom!!</div>
        <motion.div
          drag
          style={{ x: motionValue, rotate: rotateValue, opacity: opacityValue }}
          animate={animControls}
          custom={motionValue}
          // initial={{ scale: 0.9 }}
          exit={(motionValue.get() * 10) as any}
          onDragEnd={(event, info) => {
            if (Math.abs(motionValue.get()) > SWIPE_THRESHOLD) {
              // remove();
              console.log("remove info", event, info, motionValue.get());
              setSwipeState(motionValue.get() > 0 ? "right" : "left");
            } else {
              animControls.start({ x: 0, y: 0 });
            }
          }}
          // exit={(x) => ({ x: x.get() * 10 as any })}
        >
          {tinderCard}
        </motion.div>
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
            onClick={() => {

              swipe("right")
            }}
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
    </motion.div>
  );

  switch (swipedState) {
    case "mid":
      return <AnimatePresence>{homeComponents}</AnimatePresence>;
    case "left":
      return <Oops />;
    case "right":
      return <Welcome />;
    default:
      return <></>
      break;
  }
};

const HomeWrapper = () => {
  return <Layout>
    <Home />
  </Layout>
}

export default HomeWrapper;
