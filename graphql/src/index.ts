import { graphql } from "../generated/gql";
import { client } from "./client";

console.log("Hello World");

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery {
    allFilms {
      edges {
        node {
          title
          director
        }
      }
    }
  }
`);

const appElement = document.getElementById("app")!;

const start = async () => {
  const { data } = await client.query(allFilmsWithVariablesQueryDocument, {});
  // empty the appNode
  appElement.innerHTML = "";

  data.allFilms.edges.forEach((edge) => {
    const film = edge.node;
    const filmElement = document.createElement("div");
    filmElement.innerHTML = `${film.title} by <em>${film.director}`;
    appElement.appendChild(filmElement);
  });
};

start();
