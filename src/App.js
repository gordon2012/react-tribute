import React, {Component} from 'react';
import './App.css';

import Entry from './Entry.js';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <h1 className="">Thor</h1>
                    <h2><em>The Mightiest Avenger</em></h2>
                </div>

                <div className="app-body">
                    <div className="card picture">
                        <img className="" src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/landscape_incredible.jpg" alt=""/>
                        <figcaption>
                            <small><a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a></small>
                        </figcaption>
                    </div>

                    <div className="timeline">
                        <h3>Timeline:</h3>
                        <ul className="card">
                            <Entry date="964" event="Thor is born." />
                            <Entry date="965" event="Loki is adopted by Thor's father, Odin." />
                            <Entry date="973" event="Loki turns into a snake and tricks Thor, stabbing him." />
                            <Entry date="2009" event="Thor defeats Imir, who kidnaps some dwarves." />
                            <Entry date="2010" event="Thor is drawn into an elaborate plot by Loki, is banished to Earth by Odin, meets Jane Foster, proves himself worthy, defeats the Destroyer, and is forced to destroy the Bifrost Bridge, stranding Loki in the Sanctuary and himself in Asgard." />
                            <Entry date="2012" event="Thor is transported to Earth by Odin to stop Loki's latest plot and joins the Avengers, helps them stop the attack on New York by the Chitauri, and returns to Asgard with Loki and the Tesseract." />
                            <Entry date="2013" event="Thor defends the Nine Realms from attackers, discovers that Jane is afflicted with the Aether, and with the help of Loki, defeats Malekith and his Dark Elves who try to take it." />
                            <Entry date="2015" event="Thor helps the Avengers retrieve Loki's scepter from a HYDRA research facility and prevents the destruction of the Earth from the rogue super AI Ultron. Jane breaks up with Thor." />
                            <Entry date="2017" event="Thor uses the Eternal Flame to trigger Ragnarok to defeat his sister Hela, after she is released from her prison when Odin died." />
                            <Entry date="2018" event="SPOILER ALERT! Thor's ship is attacked by Thanos, is left drifting in space to be rescued by the Guardians of the Galaxy, helps Eitri forge the axe Stormbreaker, and buries it into Thanos' chest." />
                        </ul>
                    </div>

                    <div className="quote">
                        <h3>
                            "The damage is not too bad. As long as the foundations are still strong, we can rebuild this place. It will become a haven for all peoples and aliens of the universe. [Asgard explodes] Oof. Now those foundations are gone. Sorry." <small>--Korg, leader of the Sakaaran prisoners with jobs uprising</small>
                        </h3>
                    </div>

                    <div className="link">
                        <h3>Find out more about Thor on the <a href="http://marvelcinematicuniverse.wikia.com/wiki/Thor" target="_blank" rel="noopener noreferrer">Marvel Cinematic Universe Wiki</a></h3>
                    </div>
                </div>

                <footer>Copyright { (new Date()).getFullYear()} Gordon Doskas</footer>
            </div>
        );
    }
}

export default App;
