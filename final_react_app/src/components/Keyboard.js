import React from 'react';
import useSound from 'use-sound';
import bedSound from '../sounds/bed.mp3'
import dadSound from '../sounds/dad.mp3'
import bathroomSound from '../sounds/bathroom.mp3'
import drinkSound from '../sounds/drink.mp3'
import foodSound from '../sounds/food.mp3'
import happySound from '../sounds/happy.mp3'
import helpSound from '../sounds/help.mp3'
import hurtSound from '../sounds/hurt.mp3'
import madSound from '../sounds/mad.mp3'
import momSound from '../sounds/mom.mp3'
import noSound from '../sounds/no.mp3'
import outsideSound from '../sounds/outside.mp3'
import playSound from '../sounds/play.mp3'
import sadSound from '../sounds/sad.mp3'
import schoolSound from '../sounds/school.mp3'
import tvSound from '../sounds/TV.mp3'
import yesSound from '../sounds/yes.mp3'
import aSound from '../alphabet/A.mp3'
import KeyboardEventHandler from 'react-keyboard-event-handler';

function Keyboard() {

   const [playBed] =useSound(bedSound);
   const [playDad] =useSound(dadSound);
   const [playBathroom] =useSound(bathroomSound);
   const [playDrink] =useSound(drinkSound);
   const [playFood] =useSound(foodSound);
   const [playHappy] =useSound(happySound);
   const [playHelp] =useSound(helpSound);
   const [playHurt] =useSound(hurtSound);
   const [playMad] =useSound(madSound);
   const [playMom] =useSound(momSound);
   const [playNo] =useSound(noSound);
   const [playOutside] =useSound(outsideSound);
   const [playPlay] =useSound(playSound);
   const [playSad] =useSound(sadSound);
   const [playSchool] =useSound(schoolSound);
   const [playTv] =useSound(tvSound);
   const [playYes] =useSound(yesSound);
   const [playA] =useSound(aSound);

   const ComponentA = (props) => (<div>
      <div>key detected: {props.eventKey}</div>
      <KeyboardEventHandler
        handleKeys={['a']}
        onKeyEvent={(key, a) => [playA]} />
    </div>);

   return (
      <div>

      <div>
      <h1>Keyboard</h1>
      <ComponentA/>
      <img src={require('../images/bed.png')} alt="bed" onClick={playBed}/>
      <img src={require('../images/dad.png')} alt="dad" onClick={playDad}/>
      <img src={require('../images/drink.png')} alt="drink" onClick={playDrink}/>
      <img src={require('../images/food.png')} alt="food" onClick={playFood}/>
      <img src={require('../images/help.png')} alt="help" onClick={playHelp}/>
      <img src={require('../images/hurt.png')} alt="hurt" onClick={playHurt}/>
      <img src={require('../images/mad.png')} alt="mad" onClick={playMad}/>
      <img src={require('../images/mom.png')} alt="mom" onClick={playMom}/>
      <img src={require('../images/no.png')} alt="no" onClick={playNo}/>
      <img src={require('../images/outside.png')} alt="outside" onClick={playOutside}/>
      <img src={require('../images/play.png')} alt="play" onClick={playPlay}/>
      <img src={require('../images/sad.png')} alt="sad face" onClick={playSad}/>
      <img src={require('../images/school.png')} alt="school bus" onClick={playSchool}/>
      <img src={require('../images/happy.png')} alt="smiley face" onClick={playHappy}/>
      <img src={require('../images/toilet.png')} alt="toilet" onClick={playBathroom}/>
      <img src={require('../images/TV.png')} alt="tv" onClick={playTv}/>
      <img src={require('../images/yes.png')} alt="thumbs up" onClick={playYes}/>
      </div>

      <div>
          <h1>Keyboard</h1>
          
         <img src={require('../alphImages/a.png')} alt="bed" onClick={playA}/>
         
       </div>

      </div>
    );
   
}
 
export default Keyboard;