import * as React from "react";
import db from "./db";

const api = "data.json";

export const defaultRuling = {
  id: 0,
  name: "",
  category: "",
  timeIn: "",
  description: "",
  votesUp: "0",
  votesDown: "0",
  image: "",
  isMain: false,
};

export interface Ruling {
  id: number;
  name: string;
  category: string;
  timeIn: string;
  description: string;
  votesUp: string;
  votesDown: string;
  image: string;
  isMain?: boolean;
}

interface Data {
  data: {
    rulings: Ruling[];
  };
}

export default (): Data => {
  const [data, setdata] = React.useState<Data>({
    data: { rulings: [] },
  });

  React.useEffect(() => {
    db.open().catch(function() {
      alert("Open failed: ");
    });

    db.table("rulings")
      .toArray()
      .then(cached => {
        if (!cached.length) {
          fetch(api).then(response => {
            if (response.status === 200) {
              response.json().then(({ data }: Data) => {
                db.table("rulings")
                  .bulkAdd(data.rulings)
                  .then(() => {
                    setdata({ data });
                  })
                  .catch(console.log);
              });
            }
          });
        }

        setdata({ data: { rulings: cached } });
      })
      .catch(console.log);

    return (): void => db.close();
  }, []);

  return data;
};
