import img1 from "../images/two-children.jpeg";
import img2 from "../images/nostalgia-boardgame.gif";
import img3 from "../images/sounds.jpeg";
import img4 from '../images/nostalgia-cluster2.gif';

import sound1 from '../audio-files/children-audio.mp3'
import sound2 from '../audio-files/boardgame-audio.mp3'
import sound3 from '../audio-files/sound-audio.mp3'
import sound4 from '../audio-files/photo-audio.mp3'

import { Media } from "../components/Media";

function Nostalgia () {
    return (
        <div class="container" style={{paddingTop: '200px'}}>
            <Media image={img1} caption="Brother and Sister, toys galore!" sound={sound1} prompt="Going to my grandparents house, playdates, eating steamed eggs, barbie doll, long car rides, having easy homework as a kid, watching tv shows I used to watch when I was younger, playing video games I used to play when I was younger, blowing out birthday candles, playing hide and go seek with cousins, baking cookies, my dog Puchi, homemade foods, and Star Wars toys, Thanksgiving."/>
            <Media image={img2} caption="Playing boardgames around the cozy fire during a family roadtrip" sound={sound2} prompt="Games like tag and physical board games like Monopoly, going back to childhood home, watching childhood movies, childhood vacations and summers, childhood games."/>
            <Media image={img3} caption="Sounds of the Past, Present, and Future" sound={sound3} prompt="Early 2000s music, hearing a certain song, eating certain foods, listening to songs I used to listen to when I was young, hearing a song I used to listen to a lot, listening to songs that were popular when I was younger."/>
            <Media image={img4} caption="Photographs, the persisting physical evidence of the past" sound={sound4} prompt="Looking at old photos."/>
        </div>
    )
}


export default Nostalgia;