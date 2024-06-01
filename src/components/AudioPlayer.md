
# AudioPlayer Component

This is a reusable audio player component built with React. It plays a sound whenever the `play` prop is set to `true`.

## Usage

Here is an example of how to use the `AudioPlayer` component:

### AudioPlayer.jsx

```jsx
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
```

## Props

| Prop     | Type    | Description                        |
|----------|---------|------------------------------------|
| soundUrl | string  | The URL of the sound file to play  |
| play     | bool    | Whether or not to play the sound   |

## Example Implementation

### ExampleComponent.jsx

```jsx
import { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { Button } from 'react-bootstrap';

const ExampleComponent = () => {
    const [playSound, setPlaySound] = useState(false);

    const handlePlaySound = () => {
        setPlaySound(true);
        setTimeout(() => setPlaySound(false), 1000); // Reset play state after playing sound
    };

    return (
        <div>
            <Button onClick={handlePlaySound}>Play Sound</Button>
            <AudioPlayer soundUrl="/path/to/your/soundfile.mp3" play={playSound} />
        </div>
    );
};

export default ExampleComponent;
```

## License

This project is licensed under the MIT License.
