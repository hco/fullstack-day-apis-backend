import {z} from "zod";

const url = 'https://verkehr.autobahn.de/o/autobahn/'


const roadsSchema = z.object({
    roads: z.array(z.string())
})


const start = async () => {
    const response = await fetch("https://verkehr.autobahn.de/o/autobahn/");
    const roads = await response.json();

    const typeSafeRoads = roadsSchema.parse(roads)
    console.log('will not be called if the data does not comply to the schema')

    typeSafeRoads.roads.forEach((road) => {
        console.log(road);
    });
};

start();
