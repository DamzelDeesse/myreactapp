import Likes from './components/Likes';
import ProfilePic from './components/ProfilePic';
import DisplayComp from './components/DisplayComp'
import SMMLinks from './components/SMMLinks'


function App() {
  return (
    <div id='root-app' className="App">
      <ProfilePic />
      <SMMLinks />
      <DisplayComp />
      <Likes />
    </div>
  );
}

export default App;

