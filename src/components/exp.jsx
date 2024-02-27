import { useRef } from 'react';

export default function Exp() {
  const ref = useRef(0);
  function handleChange() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  return (
    <>
      <h1>{ref.current}</h1>
      <button onClick={handleChange}>click me</button>
    </>
  );
}
