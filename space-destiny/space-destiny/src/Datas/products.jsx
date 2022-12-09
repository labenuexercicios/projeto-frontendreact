import galactic from "../Images/front/vg.jpg"
import blueo from "../Images/front/bo1.jpg"
import spacex from "../Images/front/SpaceX1.jpg"
import ros from "../Images/front/roscosmos1.jpg"
import sporta from "../Images/front/SpaceAmerica.jpg"
import newshep from "../Images/front/newshep.jpg"
import baloon from "../Images/front/sperspec1.jpeg"
import dragon from "../Images/front/bons1.jpg"

const products = [
    {
      id: "01",
      productName: "Virgin Galactic",
      imgUrl: galactic,
      category: "travel",
      price: 2000000,
      shortDesc:
        "A Microgravity Experience",
      description:
        "Pioneer in space tourism, the company offers a 90-minute flight through the atmosphere.",
    },
    {
        id: "02",
        productName: "Blue Origin",
        imgUrl: blueo,
        category: "travel",
        price: 2800000,
        shortDesc:
          "A Suborbital Experience",
        description:
          "Hit and come back on the Kármán line: the company offers an unprecedented suborbital flight in a real rocket, to the planet's border with space.",
      },
      {
        id: "03",
        productName: "SpaceX",
        imgUrl: spacex,
        category: "Orbital travel",
        price: 3360000,
        shortDesc:
        <a href='https://esamultimedia.esa.int/multimedia/virtual-tour-iss/'>Click for a Tour virtual</a>,
        description:
          "An unprecedented trip to discover the International Space Station (ISS). Orbital travel with an average of three days in orbit, aboard the modified Dragon capsule, with the industry veteran.",
      },
      {
        id: "04",
        productName: "Roscosmos (ISS)",
        imgUrl: ros,
        category: "Personalized travel",
        price: 2960000,
        shortDesc:
          "A personalized experience",
        description:
          "The Russian agency will send a film crew to the Space Station and record, for the first time in history, a film in space. With a stay of 12 days, the releases are made in Kazakhstan and will feature a blockbuster from the cinemas where travelers will be able to follow the filming of the movie Helios.",
      },
      {
        id: "05",
        productName: "Spaceport America",
        imgUrl: sporta,
        category: "Commercial travel",
        price: 50000,
        shortDesc:
          "Commercial space base",
        description:
          "Located in the Jornada del Muerto Basin in the state of New Mexico, on USA, west of the Test Range from White Sands Missile Station, space enthusiasts on a budget can visit Spaceport America, where Virgin Galactic launches into space.",
      },
      {
        id: "06",
        productName: "New Shepard",
        imgUrl: newshep,
        category: "Secure travel",
        price: 2100000,
        shortDesc:
          "Secure access to airspace",
        description:
          "Capsule with capacity for up to six people, travelers will be able to land autonomously at a base in the desert in west Texas, take a little ride and return with assistance of three large parachutes and will be able to observe the Earth for about three minutes.",
      },
      {
        id: "07",
        productName: "Space Perspective",
        imgUrl: baloon,
        category: "Sustainable travel",
        price: 613000,
        shortDesc:
          "A sustainable travel",
        description:
          "A tour where you can have a 360º view of the Earth in the stratosphere in a capsule shaped like a space balloon. The space tourism company is located in Florida, in the United States, and uses technology tested by NASA: the capsule is propelled by a state-of-the-art space balloon, the size of a football stadium, without rocket. The hydrogen used meets the demand for sustainable travel, resulting in zero-emission spaceflight..",
      },
      {
        id: "08",
        productName: "Crew Dragon",
        imgUrl: dragon,
        category: "Luxury travel",
        price: 5500000,
        shortDesc:
          "A luxury travel",
        description:
          "A tour where passengers will depart from the Kennedy Space Center in Florida and travel inside a SpaceX Crew Dragon capsule, the same capsule that SpaceX has already used to transport NASA astronauts to the ISS. The capsule will travel to orbit inside of SpaceX's 230-foot Falcon 9 rockets, where it will detach from the rocket and fly freethrough space.",
      }
];

export default products;