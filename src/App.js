import "./styles.css";

const animals = [
  {
    name: "Lion",
    number: 3,
    eats: ["zebra", "antelope", "buffalo", "hippopotamus"]
  },
  {
    name: "Tiger",
    number: 5,
    eats: ["moose", "deer", "buffalo"]
  },
  {
    name: "Giraffe",
    number: 6,
    eats: ["leaves", "twigs"]
  },
  {
    name: "Elephant",
    number: 4,
    eats: ["grass", "leaves", "flowers", "fruit"]
  },
  {
    name: "Monkey",
    number: 10,
    eats: ["fruit", "leaves", "vegetables", "insects"]
  },
  {
    name: "Lemur",
    number: 15,
    eats: ["fruit", "leaves", "insects"]
  },
  {
    name: "Rhinoceros",
    number: 2,
    eats: ["grass", "shoots", "leaves", "berries"]
  }
];

function AnimalComponent(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.number}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CAB230</h1>
      <h2>Start editing to see some magic happen!</h2>
      {animals.map((animal) => AnimalComponent(animal))}
    </div>
  );
}
