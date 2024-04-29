interface Buttons {
  name: string;
  link: string;
  style: string;
}

interface Hero {
  className: string;
  image: string;
  subHeading: string;
  heading: string;
  button: Buttons[];
}

export const heroData: Hero[] = [
  {
    image: "/hero-bg.jpg",
    subHeading: "fresh & organic",
    heading: "Delicious Seasonal Fruits",
    button: [
      { name: "Fruit Collection", link: "/shop", style: "button1" },
      { name: "Contact Us", link: "/contact", style: "button2" },
    ],
    className: "items-start",
  },
  {
    image: "/hero-bg-2.jpg",
    subHeading: "Fresh everyday",
    heading: "100% Organic Collection",
    button: [
      { name: "Visit Shop", link: "/shop", style: "button1" },
      { name: "Contact Us", link: "/contact", style: "button2" },
    ],
    className: "items-center",
  },
  {
    image: "/hero-bg-3.jpg",
    subHeading: "Mega Sale Going On",
    heading: "Get December Discount",
    button: [
      { name: "Visit Shop", link: "/shop", style: "button1" },
      { name: "Contact Us", link: "/contact", style: "button2" },
    ],
    className: "items-end",
  },
];
