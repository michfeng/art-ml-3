import img1 from "../images/imperm-cluster1.jpeg";
import img2 from "../images/imperm-cluster0.gif";
import img3 from "../images/somber.jpeg";

import sound1 from '../audio-files/pool.mp3'
import sound2 from '../audio-files/molecules.mp3'
import sound3 from '../audio-files/somber.mp3'

import { Media } from "../components/Media";

function Impermanence () {
    return (
        <div class="container" style={{paddingTop: '200px'}}>
            <Media image={img1} caption="Pointing at the pool" sound={sound1} prompt="Time, fingers getting wrinkled after a long time in the pool, the passage of time. "/>
            <Media image={img2} caption="Molecule-like almost humanoid structures" sound={sound2} prompt="Amidst the sea of caps and gowns, anticipation fills the air. Graduation, the pinnacle of achievement, marks the end of college. Emotions run high as the journey nears its close, the promise of new beginnings echoing in the halls."/>
            <Media image={img3} caption="Somber gazes by the window" sound={sound3} prompt="When my parents forget things, when my grandparents call me my sister's name, being scared of what the future holds, feeling existential and sad, seeing my brother apply to college, the thought of graduating, planned obsolescence, breakups."/>
        </div>
    )
}

export default Impermanence;