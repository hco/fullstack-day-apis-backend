import { listAutobahnen } from "./api/autobahnAppAPI";

const start = async () => {
  const appNode = document.getElementById("app")!;
  const { roads } = await listAutobahnen();

  appNode.innerHTML = "";

  roads?.forEach((road) => {
    const roadElement = document.createElement("div");
    roadElement.innerHTML = road;
    appNode.appendChild(roadElement);
  });
};

start();
