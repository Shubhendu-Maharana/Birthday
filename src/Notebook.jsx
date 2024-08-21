import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import "./Notebook.css";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      {props.children}
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page p-5" ref={ref}>
      {props.children}
    </div>
  );
});

function MyAlbum(props) {
  return (
    <div className="h-screen flex items-center justify-center">
      <HTMLFlipBook
        width={350}
        height={450}
        minWidth={350}
        maxWidth={350}
        minHeight={450}
        maxHeight={450}
        showCover={true}
        flippingTime={1000}
        style={{ margin: "0 auto" }}
        maxShadowOpacity={1}
        className="album-web"
      >
        <PageCover>
          <div className="flex flex-col items-center justify-center h-full">
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
              Hey
            </span>
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
              Monalisa!
            </span>
          </div>
        </PageCover>
        <PageCover>
          <div className="flex flex-col items-center justify-center h-full">
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black">
              Happy
            </span>
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black">
              Birthday
            </span>
            <img
              src="party-blower.svg"
              alt=""
              className="h-36 mt-6"
            />
          </div>
        </PageCover>
        <Page number="1">
          <div className="flex flex-col gap-10">
            <p className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black text-center outline-dotted outline-3 outline-gray-500 px-4 py-2">
              A Whisper of Love in the Winds
            </p>
            <p className="text-justify">
              On this day, when the universe pauses to admire your light, I am
              reminded of the enchantment you bring into my life.
            </p>
            <p className="text-justify">
              Every laugh, every touch, every glance we share is like a chapter
              in a fairy tale that I wish to never end.
            </p>
          </div>
        </Page>
        <Page number="2">
          <br />
          <p className="text-justify">
            Today, I celebrate not just your birth but the brilliance of your
            spirit, the kindness in your heart, and the love that binds us
            together in this mystical journey.
          </p>{" "}
          <br />
          <p className="text-justify">
            As the stars gather to sing your name, know that my love for you is
            as infinite as the night sky and as deep as the oceans in my dreams.
            Forever enchanted by you,
          </p>
          <br />
          <p className="text-right absolute bottom-5 right-5">Shubhendu</p>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

export default MyAlbum;
