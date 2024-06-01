import { useEffect } from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({ soundUrl, play }) => {
    useEffect(() => {
        if (play && soundUrl) {
            const audio = new Audio(soundUrl);
            audio.play();
        }
    }, [play, soundUrl]);

    return null; // This component doesn't render anything
};

AudioPlayer.propTypes = {
    soundUrl: PropTypes.string.isRequired,
    play: PropTypes.bool.isRequired
};

export default AudioPlayer;
