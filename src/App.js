import "./styles.css";
import Carousel from "./Carousel";

const imageData = [
  { src: "https://source.unsplash.com/random/?city,night", alt: "dummy" },
  { src: "https://source.unsplash.com/random/?city,night", alt: "dummy" },
  { src: "https://source.unsplash.com/random/?city,night", alt: "dummy" },
  { src: "https://source.unsplash.com/random/?city,night", alt: "dummy" },
  { src: "https://source.unsplash.com/random/?city,night", alt: "dummy" }
];

export default function App() {
  return (
    <div className="App">
      <Carousel images={imageData} />
    </div>
  );
}
