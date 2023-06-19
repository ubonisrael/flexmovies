import Image from "next/image";
import { useState } from "react";
import loader from '@/assets/svg-loaders/puff.svg'

export function ImageLoader({path}) {

  const [loading, setLoading] = useState(true);
  const divStyle = {
    borderRadius: "16px",
  };

  return (
    <>
      {loading && (
        <Image src={loader}  alt="" fill
        sizes="(max-width: 300px) 100vw,
              (max-width: 200px) 50vw,
              (max-width: 125px) 33vw"/>
      )}
      <Image
        src={path}
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
