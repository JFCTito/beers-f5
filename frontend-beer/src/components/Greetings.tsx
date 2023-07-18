export default function Greetings(props: { time: string; name: string }) {
  return (
    <p>
      hola, buenos {props.time}, {props.name}
    </p>
  );
}
