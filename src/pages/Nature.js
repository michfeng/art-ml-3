import img1 from "../images/nature-cluster1.gif";
import img2 from "../images/nature2.jpg";
import img3 from "../images/nature-cluster3.gif";
import img4 from "../images/nature3.jpg";

import sound1 from '../audio-files/peak.mp3'
import sound2 from '../audio-files/fallcanou.mp3'
import sound3 from '../audio-files/globe.mp3'
import sound4 from '../audio-files/seattle.mp3'

import { Media } from "../components/Media";

function Nature () {
    return (
        <div class="container" style={{paddingTop: '200px'}}>
            <Media image={img1} caption="Pointed peaks" sound={sound1} prompt="Climbing a mountain and watching the sunset, taking pictures with the sunset, watching the sunset"/>
            <Media image={img2} caption="Warm tones canoeing on a lake" sound={sound2} prompt="Going snorkeling in the ocean, going to the beach, riding bike to the beach, going on a walk, going for a walk in homewood cemetery, kayaking in fall, first flowers in spring, going to Salamander creek."/>
            <Media image={img3} caption="Globe-like rainbow ball" sound={sound3} prompt="Sunset over the ocean, swimming in the ocean, ocean and beach, swimming in streams, swimming with fish in the ocean, swimming in the ocean, sailing the Ocean."/>
            <Media image={img4} caption="Snowy hiking sunset with a city view" sound={sound4} prompt="Seattle, the trail by my house that has rivers and many trees, hiking with my dog, walking through a local Pittsburgh park, the sky and wind, seeing the flowers in the spring, Valley Forge National Park, seeing pretty golf course, sunsets, hiking in Shenandoah, scenic driving, seeing a deer, snow, seashells, seeing wild animals, waterfalls, super bloom in california, running and feeling the wind on my face, smell of air after rain, breathing in fresh air, looking at the cityscape from the view go a hilltop observatory, sunrises, Camp Kesem, sunny day with lots of trees, stargazing."/>
        </div>
    )
}

export default Nature;