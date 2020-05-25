import React from 'react';
import useSound from 'use-sound';
import bedSound from '../sounds/bed.mp3'
import dadSound from '../sounds/dad.mp3'
import bathroomSound from '../sounds/bathroom.mp3'
import bathSound from '../sounds/bath.mp3'
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
import homeSound from '../sounds/home.mp3'
import aSound from '../alphabet/A.mp3'
import bSound from '../alphabet/B.mp3'
import cSound from '../alphabet/C.mp3'
import dSound from '../alphabet/D.mp3'
import eSound from '../alphabet/E.mp3'
import fSound from '../alphabet/F.mp3'
import gSound from '../alphabet/G.mp3'
import hSound from '../alphabet/H.mp3'
import iSound from '../alphabet/I.mp3'
import jSound from '../alphabet/J.mp3'
import kSound from '../alphabet/K.mp3'
import lSound from '../alphabet/L.mp3'
import mSound from '../alphabet/M.mp3'
import nSound from '../alphabet/N.mp3'
import oSound from '../alphabet/O.mp3'
import pSound from '../alphabet/P.mp3'
import qSound from '../alphabet/Q.mp3'
import rSound from '../alphabet/R.mp3'
import sSound from '../alphabet/S.mp3'
import tSound from '../alphabet/T.mp3'
import uSound from '../alphabet/U.mp3'
import vSound from '../alphabet/V.mp3'
import wSound from '../alphabet/W.mp3'
import xSound from '../alphabet/X.mp3'
import ySound from '../alphabet/Y.mp3'
import zSound from '../alphabet/Z.mp3'


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
   const [playHome] =useSound(homeSound);
   const [playBath] =useSound(bathSound);
   const [playA] =useSound(aSound);
   const [playB] =useSound(bSound);
   const [playC] =useSound(cSound);
   const [playD] =useSound(dSound);
   const [playE] =useSound(eSound);
   const [playF] =useSound(fSound);
   const [playG] =useSound(gSound);
   const [playH] =useSound(hSound);
   const [playI] =useSound(iSound);
   const [playJ] =useSound(jSound);
   const [playK] =useSound(kSound);
   const [playL] =useSound(lSound);
   const [playM] =useSound(mSound);
   const [playN] =useSound(nSound);
   const [playO] =useSound(oSound);
   const [playP] =useSound(pSound);
   const [playQ] =useSound(qSound);
   const [playR] =useSound(rSound);
   const [playS] =useSound(sSound);
   const [playT] =useSound(tSound);
   const [playU] =useSound(uSound);
   const [playV] =useSound(vSound);
   const [playW] =useSound(wSound);
   const [playX] =useSound(xSound);
   const [playY] =useSound(ySound);
   const [playZ] =useSound(zSound);

   return (
      <div className="keyboard">

      <div>
      <h1>Keyboard</h1>
      <div>
        <figure>
          <img src={require('../images/yes.png')} alt="thumbs up" onClick={playYes}/>
          <figcaption>Yes</figcaption>
        </figure>
        <figure>
          <img src={require('../images/no.png')} alt="no" onClick={playNo}/>
          <figcaption>No</figcaption>
        </figure>
        <figure>
          <img src={require('../images/help.png')} alt="help" onClick={playHelp}/>
          <figcaption>Help</figcaption>
        </figure>
      </div>
      <div>
        <h2>I need...</h2>
        <figure>
          <img src={require('../images/drink.png')} alt="drink" onClick={playDrink}/>
          <figcaption>Drink</figcaption>
        </figure>
        <figure>
          <img src={require('../images/food.png')} alt="food" onClick={playFood}/>
          <figcaption>Food</figcaption>
        </figure>
        <figure>
          <img src={require('../images/toilet.png')} alt="toilet" onClick={playBathroom}/>
          <figcaption>Toilet</figcaption>
        </figure>
        <figure>
          <img src={require('../images/bath.png')} alt="bathtub" onClick={playBath}/>
          <figcaption>Bath</figcaption>
        </figure>
        <figure>
          <img src={require('../images/bed.png')} alt="bed" onClick={playBed}/>
          <figcaption>Bed</figcaption>
        </figure>
      </div>
      <div>
        <h2>I want...</h2>
        <figure>
          <img src={require('../images/TV.png')} alt="tv" onClick={playTv}/>
          <figcaption>TV</figcaption>
        </figure>
        <figure>
          <img src={require('../images/outside.png')} alt="outside" onClick={playOutside}/>
          <figcaption>Outside</figcaption>
        </figure>
        <figure>
          <img src={require('../images/play.png')} alt="play" onClick={playPlay}/>
          <figcaption>Play</figcaption>
        </figure>
      </div>
      <figure>
        <img src={require('../images/school.png')} alt="school bus" onClick={playSchool}/>
        <figcaption>School</figcaption>
      </figure> 
      <figure>
        <img src={require('../images/home.png')} alt="house" onClick={playHome}/>
        <figcaption>Home</figcaption>
      </figure>
      <figure>
        <img src={require('../images/mom.png')} alt="mom" onClick={playMom}/>
        <figcaption>Mom</figcaption>
      </figure>
      <figure>  
        <img src={require('../images/dad.png')} alt="dad" onClick={playDad}/>
        <figcaption>Dad</figcaption>
      </figure>
      <div>
        <h2>I feel...</h2>
      <figure>
        <img src={require('../images/happy.png')} alt="smiley face" onClick={playHappy}/>
        <figcaption>Happy</figcaption>
      </figure>  
      <figure>
        <img src={require('../images/mad.png')} alt="mad" onClick={playMad}/>
        <figcaption>Mad</figcaption>
      </figure>
      <figure> 
        <img src={require('../images/sad.png')} alt="sad face" onClick={playSad}/>
        <figcaption>Sad</figcaption>
      </figure> 
      <figure>
        <img src={require('../images/hurt.png')} alt="hurt" onClick={playHurt}/>
        <figcaption>Hurt</figcaption>
      </figure>
      </div>
      
      
      </div>

      <div>
        <h1>Alphabet</h1>
          
         <img src={require('../alphImages/A.png')} alt="bed" onClick={playA}/>
         <img src={require('../alphImages/B.png')} alt="bed" onClick={playB}/>
         <img src={require('../alphImages/C.png')} alt="bed" onClick={playC}/>
         <img src={require('../alphImages/D.png')} alt="bed" onClick={playD}/>
         <img src={require('../alphImages/E.png')} alt="bed" onClick={playE}/>
         <img src={require('../alphImages/F.png')} alt="bed" onClick={playF}/>
         <img src={require('../alphImages/G.png')} alt="bed" onClick={playG}/>
         <img src={require('../alphImages/H.png')} alt="bed" onClick={playH}/>
         <img src={require('../alphImages/I.png')} alt="bed" onClick={playI}/>
         <img src={require('../alphImages/J.png')} alt="bed" onClick={playJ}/>
         <img src={require('../alphImages/K.png')} alt="bed" onClick={playK}/>
         <img src={require('../alphImages/L.png')} alt="bed" onClick={playL}/>
         <img src={require('../alphImages/M.png')} alt="bed" onClick={playM}/>
         <img src={require('../alphImages/N.png')} alt="bed" onClick={playN}/>
         <img src={require('../alphImages/O.png')} alt="bed" onClick={playO}/>
         <img src={require('../alphImages/P.png')} alt="bed" onClick={playP}/>
         <img src={require('../alphImages/Q.png')} alt="bed" onClick={playQ}/>
         <img src={require('../alphImages/R.png')} alt="bed" onClick={playR}/>
         <img src={require('../alphImages/S.png')} alt="bed" onClick={playS}/>
         <img src={require('../alphImages/T.png')} alt="bed" onClick={playT}/>
         <img src={require('../alphImages/U.png')} alt="bed" onClick={playU}/>
         <img src={require('../alphImages/V.png')} alt="bed" onClick={playV}/>
         <img src={require('../alphImages/W.png')} alt="bed" onClick={playW}/>
         <img src={require('../alphImages/X.png')} alt="bed" onClick={playX}/>
         <img src={require('../alphImages/Y.png')} alt="bed" onClick={playY}/>
         <img src={require('../alphImages/Z.png')} alt="bed" onClick={playZ}/>
         
         
       </div>

      </div>
    );
   
}
 
export default Keyboard;