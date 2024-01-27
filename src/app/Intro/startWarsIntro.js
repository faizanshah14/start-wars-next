// StarWarsIntro.js
'use client'

import { useEffect, useRef , useState} from 'react';
import { useRouter } from 'next/navigation';
import styles from './StarWarsIntro.module.css'; // Make sure the path matches the location of your CSS file

export default function StarWarsIntro() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const crawlRef = useRef(null);
    const router = useRouter();
    useEffect(() => {
        // Play the audio when the component mounts
        audioRef.current.play();
        toggleMute();
        
        const handleAnimationEnd = () => {
            console.log('Animation ended');
            setTimeout(()=>{
                audioRef.current.pause();
                router.push('/dashboard');
            },30000) // or any other action

        };
        const crawlElement = crawlRef.current;
        crawlElement.addEventListener('animationend', handleAnimationEnd);
        
        // Optional: Pause the audio when the component unmounts
        return () => {
            audioRef?.current?.pause();
            crawlElement.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);
    const toggleMute = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={styles['star-wars-intro']}>
            <audio ref={audioRef} src="/star-wars-theme.mp3" loop  />
            <div className={styles.crawl} ref={crawlRef} >
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
            <button 
            className={`${styles.button} ${isPlaying ? styles.active : ''}`} 
            onClick={toggleMute}>
                {isPlaying ? 'Mute' : 'unmute'}
            </button>
        </div>
    );
}
