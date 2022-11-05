import './App.css';
import { Link } from 'react-router-dom';
import Button from './components/button';
import profileimage from './images/profile__img.png'
import gitimage from './images/Icon.png'
import vector from './images/vector.png'
import ing from './images/ing.png'
import zuri from './images/zuri.png'
import share from './images/share.png'
import sharemob from './images/sharemob.png'


function App() {
  return (
    <div className="App">
      <div className="App-top">
        <header >
            <div className='image-container'>
              <img src={profileimage} alt='profile image' id='profile__img'/>
            </div>
            <p id='twitter'>olab0de</p>
            <p id='slack' style={{display: 'none'}}>olabodeadeyemi48</p>

            <div className='header-icon'>
              <img src={share} alt='share' className='share'/>
              <img src={sharemob} alt='sharemob' className='sharemob'/>
            </div>
        </header>

        <section>
          <Button href='https://twitter.com/olab0de' external={true} >Twitter Link</Button>
          <Button id='btn__zuri' href='https://training.zuri.team/' external={true}>Zuri Team </Button>
          <Button id='books' href='https://books.zuri.team'external={true}>Zuri Books</Button>
          <Button id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=olabodeadeyemi48' external={true}>Python Books</Button>
          <Button id='pitch' href='https://background.zuri.team' external={true}>Background Check for Coders</Button>
          <Button id='book__design' href='https://books.zuri.team/design-rules ' external={true}>Design Books</Button>
          <Button id='contact' href='/contact' external={false}>Contact Me</Button>
          

          <div className='sec-btm'>
            <div className='sec-btm-img'>
              <img src={vector} alt='vector image'/>
              <img src={gitimage} alt='git-image'/>
            </div>
          </div>
        </section>

      </div>
      <footer>
          <div className='footer-content'>
            <img src={zuri} alt='zuri' className='zuri'/>
            <p>HNG Intership 9 Frontend Task</p>
            <img src={ing} alt="ingressive for good" className='ingressive'/>

          </div>
      </footer>
       
    </div>
  );
}

export default App;
