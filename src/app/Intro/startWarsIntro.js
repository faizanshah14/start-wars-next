// StarWarsIntro.js
// use client

import { useEffect, useRef } from 'react';
import styles from './StarWarsIntro.module.css'; // Make sure the path matches the location of your CSS file

export default function StarWarsIntro() {
    const audioRef = useRef(null);

    useEffect(() => {
        // Play the audio when the component mounts
        audioRef.current.play();

        // Optional: Pause the audio when the component unmounts
        return () => {
            audioRef.current.pause();
        };
    }, []);

    return (
        <div className={styles['star-wars-intro']}>
            <audio ref={audioRef} src="/star-wars-theme.mp3" loop />
            <div className={styles.crawl}>
                <div className={styles.content}>
                    A long time ago, in a galaxy far, far away....
                    <br /><br />
                    EPISODE IV<br />
                    A NEW HOPE<br /><br />
                    It is a period of civil war.
                    Rebel spaceships, striking
                    from a hidden base, have won
                    their first victory against
                    the evil Galactic Empire.<br /><br />
                    
                    During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the DEATH
                    STAR, an armored space
                    station with enough power
                    to destroy an entire planet.<br /><br />
                    
                    Pursued by the Empire's
                    sinister agents, Princess
                    Leia races home aboard her
                    starship, custodian of the
                    stolen plans that can save her
                    people and restore
                    freedom to the galaxy....
                </div>
            </div>
        </div>
    );
}
