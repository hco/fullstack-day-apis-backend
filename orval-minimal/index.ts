import { listAutobahnen } from "./api/autobahnAppAPI";

const start = async () => {
  const appNode = document.getElementById("app")!;
  const { roads } = await listAutobahnen();

  appNode.innerHTML = "";

  roads?.forEach((road) => {
    const userNode = document.createElement("div");
    userNode.innerHTML = road;
    appNode.appendChild(userNode);
  });
};

start();
