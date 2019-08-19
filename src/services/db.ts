// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Dexie from "dexie";

const db = new Dexie("vote-for-me");
db.version(1).stores({
  rulings: "id,name,category,timeIn,description,votesUp,votesDown,image",
});

export default db;
