const products = [
  {
    name: "Mars",
    distance: "225",
    price: 11250,
    weather:
      "With a thin atmosphere and no magnetic field, Mars is a cold and dry world. Temperatures range from a balmy 20°C (68°F) near the equator to a frigid -125°C (-195°F) at the poles.",
    description:
      "Mars is a rust-red, rocky world with a unique landscape that's a must-visit for any space explorer. The planet is home to towering mountains, deep valleys, and impact craters that are sure to take your breath away.",
    rating: "4",
    id: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Venus",
    distance: "108",
    price: 5400,
    weather:
      "Venus has a scorching hot climate, with temperatures reaching up to 460°C (860°F) on its surface. The planet's thick atmosphere creates a greenhouse effect that traps heat and creates a hostile environment for any visitors.",
    description:
      "Venus is a brilliant, cloud-covered world that shines brighter than any other planet in the night sky. Despite its thick atmosphere, which reflects a lot of sunlight, the surface of Venus is hidden, so you'll have to rely on your imagination to picture its beauty.",
    rating: "3",
    id: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jupiter",
    distance: "778",
    price: 38900,
    weather:
      "Jupiter is a gas giant, so it doesn't have a solid surface. Instead, the planet's atmosphere is comprised of hydrogen and helium, with a variety of other gases mixed in. The weather is extremely dynamic, with raging storms and powerful winds.",
    description:
      "Jupiter is a massive gas giant with a dynamic and colorful atmosphere that's a sight to behold. The planet's most famous feature is the Great Red Spot, a giant storm that's been raging for hundreds of years, but you'll also see a variety of other storms and clouds in Jupiter's atmosphere.",
    rating: "3",
    id: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Saturn",
    distance: "1.4",
    price: 7000,
    weather:
      "Saturn is a gas giant, so it doesn't have a solid surface. Instead, the planet's atmosphere is comprised of hydrogen and helium, with a variety of other gases mixed in. The weather is dynamic, with storms and winds, but not as intense as those on Jupiter.",
    description:
      "Saturn is a magnificent world, with a ring system that's one of the most famous sights in the solar system. The planet's atmosphere is hazy and banded, and its rings are composed of ice and rock particles, making for a stunning vista.",
    rating: "5",
    id: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Neptune",
    distance: "4.5",
    price: 22500,
    weather:
      "Neptune has a very active atmosphere, with strong winds and intense storms. The planet's blue color is caused by methane in its atmosphere, and its weather is extremely dynamic and fascinating to observe.",
    description:
      "Neptune is a beautiful blue world with a very active atmosphere. The planet is known for its intense storms and strong winds, which create dark spots similar to Jupiter's Great Red Spot. Neptune is a fascinating world that's sure to awe any space traveler.",
    rating: "4",
    id: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Tatooine",
    distance: 200,
    price: 10000,
    weather:
      "Tatooine is known for its harsh desert climate with high temperatures during the day and low temperatures at night. Sandstorms are frequent occurrences.",
    description:
      "The planet is predominantly sandy with rocky terrain and towering sand dunes. Its two suns set and rise simultaneously, creating beautiful double sunsets. There are also several oasis scattered throughout the planet.",
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Endor",
    distance: 500,
    price: 25000,
    weather:
      "Endor is a forest moon with a temperate climate. It experiences mild temperatures and high humidity due to its dense forest canopy.",
    description:
      "The moon is covered in dense, lush forests with tall trees and abundant wildlife. It is also home to the native Ewok species.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Hoth",
    distance: 150,
    price: 7500,
    weather:
      "Hoth is a harsh, icy planet with sub-zero temperatures and frequent blizzards.",
    description:
      "The planet is covered in snow and ice, with towering glaciers and frozen tundras. It is also home to several species of ice creatures.",
    rating: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Dagobah",
    distance: 300,
    price: 15000,
    weather:
      "Dagobah is a humid, swampy planet with a temperate climate. It is known for its thick fog and dense vegetation.",
    description:
      "The planet is covered in swamps and marshes, with towering trees and vines. It is also home to many species of amphibians and reptiles.",
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Kamino",
    distance: 400,
    price: 20000,
    weather:
      "Kamino is a watery planet with a temperate climate. It is known for its heavy rain and strong winds.",
    description:
      "The planet is covered in oceans, with towering waves and fierce storms. It is also home to the cloning facilities where the clone army was created.",
    rating: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Gallifrey",
    distance: 34.2,
    price: 1710,
    weather:
      "Gallifrey is known for its temperate climate and rolling hills. The planet is covered in lush forests, and its many rivers and lakes are teeming with life.",
    description:
      "Gallifrey is a beautiful and peaceful world, with grand palaces and towering spires. The sky is a deep blue, and the sunsets are truly breathtaking. Visitors will also have the opportunity to see the famous Eye of Harmony, which illuminates the planet at night.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Galvan Prime",
    distance: 3000000,
    price: 150000,
    weather:
      "Galvan Prime is a technologically advanced planet with a relatively mild climate. It experiences occasional rain, but its cities are equipped with weather control systems that regulate temperature and precipitation.",
    description:
      "Galvan Prime boasts gleaming cities and sprawling technological advancements. The planet is a hub for scientific discovery and is home to some of the universe's most brilliant minds. Its bustling cities and towering structures are a sight to behold.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Piscciss",
    distance: 5000000,
    price: 250000,
    weather:
      "Piscciss is a watery planet with a warm, humid climate. It is home to an array of aquatic life and is a popular destination for beach-goers and marine biologists.",
    description:
      "Piscciss is a stunning aquatic world, with crystal clear waters, brilliant coral reefs, and towering waterfalls. Its vibrant marine life and lush, tropical landscapes make it a paradise for anyone looking to escape the stresses of everyday life.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Kylmyys",
    distance: 10,
    price: 550000,
    weather:
      "Kylmyys is known for its harsh and unforgiving weather conditions. Temperatures can reach extreme lows, and the winds can be incredibly strong. Despite this, the planet is still considered a popular travel destination due to its unique and diverse landscape.",
    description:
      "Kylmyys is a visually stunning planet, with towering mountain ranges and deep valleys. The planet's surface is covered in a blanket of snow and ice, with jagged peaks reaching towards the sky. The skies over Kylmyys are filled with swirling clouds and the occasional aurora, making for breathtaking views from the planet's surface.",
    rating: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Xandar",
    distance: 14000000,
    price: 700,
    weather:
      "Xandar is a warm, temperate planet with a moderate climate. The atmosphere is clean and the air is fresh, making it a popular destination for tourists. There are plenty of opportunities for outdoor activities, including hiking and swimming.",
    description:
      "The skies over Xandar are filled with vibrant, multi-colored stars and galaxies, making it a stunning destination for star-gazing. The planet's surface is dotted with beautiful, lush forests and clear, sparkling rivers, giving it a serene, natural beauty.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
];

export default products;
