import Image from "next/image";
import { useState } from "react";

export function Placeholder({ svg, img, blur}) {
  const Svg = svg[0];
  const svgProps = svg[1];
  const rectangles = svg[2];

  const [loading, setLoading] = useState(true);
  const divStyle = {
    borderRadius: "16px",
  };
  return (
    <>
      {loading && (
        <Svg {...svgProps} style={{ ...svgProps.style, filter: `${blur}px` }}>
          {rectangles.map((rectang) => {
            const Rect = rectang[0];
            const rectProps = rectang[1];

            return (
              <Rect {...rectProps} key={`${rectProps.x}+${rectProps.y}`} />
            );
          })}
        </Svg>
      )}
      <Image
        src={img.src}
        alt=""
        style={divStyle}
        fill
        sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}
