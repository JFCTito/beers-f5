interface Data {
  name: string;
  age: number;
  married: boolean;
}

const Introduction: React.FC<Data> = (props: Data) => {
  return (
    <>
      <p>
        The name is {props.name} and has {props.age} years and is{" "}
        {props.married ? "is married" : "not married"}
      </p>
    </>
  );
};

export default Introduction;
