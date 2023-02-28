import React from "react";
import { Card } from "./card";

export const DisplayPage = ({ data }) => {
  return (
    <div>
      {data.map((dat) => (
        <Card
          key={dat.id}
          item={dat}
          linkPath={`/${page}/${dat.media_type}/${dat.title}`}
        />
      ))}
    </div>
  );
};
