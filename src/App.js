import './App.css';
import LeftSection from './Components/LeftSection/LeftSection';
import RightSection from './Components/RightSection/RightSection';

function App() {
  return (
    <div className='flex'>
      <LeftSection></LeftSection>
      <RightSection></RightSection>
    </div>
  );
}

export default App;
