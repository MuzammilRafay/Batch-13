function DisplayCount(props) {
  console.log(props, "props");
  return <p>Count: {props.countValue}</p>;
}

export default DisplayCount;
