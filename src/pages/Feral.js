import img1 from "../images/concert.jpeg";
import img2 from "../images/wild1.gif";
import img3 from "../images/wild-cluster2.gif";
import img4 from "../images/fiery-hot.jpg";

import sound1 from '../audio-files/concert-description.mp3'
import sound2 from '../audio-files/feral-sculpture-1.mp3'

import '../components/Page.css';
import AudioPlayer from "../components/AudioPlayer";
import { Media } from "../components/Media";


function Feral () {
    return (
        
        <div class="container" style={{paddingTop: '200px'}}>
            <Media image={img1} caption="The craziest concert ever, held in Times Square." sound={sound1} prompt="In the heart of Times Square, New York City, the concert is in full motion. The scene is illuminated by an array of dazzling billboards. Their vibrant colors—reds, blues, and yellows—paint the night sky. The crowd of people, a diverse mix of locals and tourists, moves with purpose. Some are engrossed in conversation, while others snap photos to capture the moment. The air is charged with excitement, and the pinkish haze adds an ethereal quality to the atmosphere. It’s a snapshot of the city that never sleeps, where dreams and reality collide in a symphony of light and motion.
"/>
            <Media image={img2} caption="Crowded sculpture of metallic drops." sound={sound2} prompt="Amidst the Friday night frenzy, hungry freshmen immersed in politics, while making out and dancing to EDM. Hangovers loomed as alcohol fueled screams and the rush of a Travis Scott concert. It was a rollercoaster of emotions akin to driving a race car, with drugs and extreme sports tempting the carefree. In the frat basement, chess battles waged alongside sports games, all amidst the haze of alcohol and the thrill of getting drunk or high without a care in the world."/>
            <Media image={img4} caption="Fiery entertainment at a dark, leather-filled party." sound={sound2} prompt="Going out with friends, going out with my friends."/>
            <Media image={img3} caption="Carnival-like dotted color palette in 3D." sound={sound2} prompt="Carnival, Spring carnival at CMU"/>

        </div>
    );
}
export default Feral;

// src/images/wild.gif