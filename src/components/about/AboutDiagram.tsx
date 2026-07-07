import aboutDiagramUrl from "@/assets/about-diagram.png";

export default function AboutDiagram() {
  return (
    <img
      src={aboutDiagramUrl}
      alt="Diagram: robotics identity, configuration, community, and career connected to a central hub"
      className="mx-auto hidden w-56 md:block"
    />
  );
}
