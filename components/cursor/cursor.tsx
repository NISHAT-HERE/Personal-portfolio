"use client";

import AnimatedCursor from "react-animated-cursor";

export const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={60}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: '#fff'
      }}
      outerStyle={{
        border: '3px solid #fff'
      }}
    />
  );
};
