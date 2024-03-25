import img1 from "../images/whimsical-cluster0.jpeg";
import img2 from "../images/whimsical-cluster2.gif";
import img3 from "../images/whimsical-cluster1.jpeg";

import sound1 from '../audio-files/whimsical-girl.mp3'
import sound2 from '../audio-files/fairy.mp3'
import sound3 from '../audio-files/candyland.mp3'

import { Media } from "../components/Media";

function Whimsical () {
    return (
        <div class="container" style={{paddingTop: '200px'}}>
            <Media image={img1} caption="Butterflies and pink frilly dresses" sound={sound1} prompt="Classical music, Folklore by Taylor Swift, jumping in puddles, dancing but not somewhere where everyone else is, Harry potter, I Think You Should Leave, clown, books and movies, Lisa Frank products, Trundle Manor, a little girl prancing around, Broadway, DisneyWorld, Willy Wonka, A+C engraved in the tree, any sunrise, dewdrops on leaves, ballet, Winnie the Pooh, animated Disney movies, the Wizard of Oz, dancing in the woods, Atlantis, living in a cloud world, Barbie land, when I'm delusional and on no sleep and start laughing at everything, Disneyland, Cartoons, the Circus, abstract, colors, small door in the middle of the woods."/>
            <Media image={img2} caption="Colorful fairies with wings" sound={sound2} prompt="Fairies."/>
            <Media image={img3} caption="Glowing town view of Candyland" sound={sound3} prompt="CandyLand."/>
        </div>
    )
}
export default Whimsical;