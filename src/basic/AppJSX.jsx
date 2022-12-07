import './App.css';

function AppJSX() {
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
