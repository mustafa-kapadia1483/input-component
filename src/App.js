import Input from "./components/Input/Input";
import "./App.css";

const inputs = [
  [
    {
      title: "<Input />",
      component: <Input />,
    },
    {
      title: "&:hover",
      component: <Input hovered />,
    },
    {
      title: "&:focus",
      component: <Input focused />,
    },
  ],
  [
    {
      title: "<Input error />",
      component: <Input error />,
    },
  ],
];

function App() {
  return (
    <div className="container">
      <h1>Inputs</h1>
      {inputs.map(input => (
        <div className="input-type-container">
          {input.map(({ title, component }) => (
            <div className="input-type">
              <pre>{title}</pre>
              {component}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
