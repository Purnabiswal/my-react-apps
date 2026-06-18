import Card from './component/Card'
const App = () => {
  return (
    <div id="parent">
      <Card user='Sameer' age={18}/>
      <Card />
      <Card />
    </div>
  );
};

export default App;
