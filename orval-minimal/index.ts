import { listAutobahnen, listWebcams } from "./api/autobahnAppAPI";

const start = async () => {
  const appNode = document.getElementById("app")!;

  appNode.innerHTML = "";

  const response = await listAutobahnen();
  const roads = response.roads;

  roads.forEach((road) => {
    const roadElement = document.createElement("div");
    roadElement.innerHTML = road.toLowerCase();
    listWebcams(road);

    appNode.appendChild(roadElement);
  });
};

start();
