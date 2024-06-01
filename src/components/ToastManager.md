
# ToastManager Component

This is a customizable toast manager component built with React and Bootstrap. It includes the ability to play a sound when a toast is shown.

## Usage

Here is an example of how to use the `ToastManager` component:

### ToastManager.jsx

```jsx
import { useState, useEffect } from 'react';
import { Toast, ToastContainer, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

const ToastManager = ({
                          initialToasts,
                          position,
                          delay,
                          autohide,
                          buttonText,
                          buttonVariant,
                          customClass,
                          customStyle,
                          openSound
                      }) => {
    const [toasts, setToasts] = useState(initialToasts);
    const [playSound, setPlaySound] = useState(false);

    useEffect(() => {
        if (playSound) {
            setPlaySound(false); // Reset the play state after playing the sound
        }
    }, [playSound]);

    const addToast = (message, variant = 'info') => {
        setToasts([...toasts, { message, variant, id: Date.now() }]);
        setPlaySound(true);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <div className={customClass} style={customStyle}>
            <AudioPlayer soundUrl={openSound} play={playSound} />
            <ToastContainer position={position} className="p-3">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        onClose={() => removeToast(toast.id)}
                        bg={toast.variant}
                        delay={delay}
                        autohide={autohide}
                    >
                        <Toast.Body>{toast.message}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
            <Button variant={buttonVariant} onClick={() => addToast('This is a toast message!', 'success')}>
                {buttonText}
            </Button>
        </div>
    );
};

ToastManager.propTypes = {
    initialToasts: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            variant: PropTypes.string
        })
    ),
    position: PropTypes.string,
    delay: PropTypes.number,
    autohide: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonVariant: PropTypes.string,
    customClass: PropTypes.string,
    customStyle: PropTypes.object,
    openSound: PropTypes.string
};

ToastManager.defaultProps = {
    initialToasts: [],
    position: 'top-end',
    delay: 3000,
    autohide: true,
    buttonText: 'Show Toast',
    buttonVariant: 'primary',
    customClass: '',
    customStyle: {},
    openSound: null
};

export default ToastManager;
```

## Props

| Prop         | Type                               | Default  | Description                                           |
|--------------|------------------------------------|----------|-------------------------------------------------------|
| initialToasts| arrayOf(shape({                    | []       | Initial list of toasts                                |
| message      | string.isRequired,                 |          | Message to display in the toast                       |
| variant      | string                             |          | Variant of the toast (e.g., 'success', 'info')        |
| position     | string                             | 'top-end'| Position of the toast container                       |
| delay        | number                             | 3000     | Delay before the toast disappears automatically       |
| autohide     | bool                               | true     | Whether the toast should disappear automatically      |
| buttonText   | string                             | 'Show Toast'| Text for the button that shows the toast              |
| buttonVariant| string                             | 'primary'| Bootstrap variant for the button                      |
| customClass  | string                             | ''       | Custom CSS class for the toast container              |
| customStyle  | object                             | {}       | Custom styles for the toast container                 |
| openSound    | string                             | null     | Path to the sound file to play when the toast appears |

## Example Implementation

### ExampleComponent.jsx

```jsx
import React, { useState } from 'react';
import ToastManager from './ToastManager';
import { Button } from 'react-bootstrap';

const ExampleComponent = () => {
    const initialToasts = [
        { message: 'Welcome to the site!', variant: 'info' }
    ];

    return (
        <div>
            <ToastManager
                initialToasts={initialToasts}
                position="top-end"
                delay={5000}
                autohide={true}
                buttonText="Show Custom Toast"
                buttonVariant="success"
                customClass="my-toast-container"
                customStyle={{ zIndex: 1050 }}
                openSound="/path/to/your/toast-sound.mp3"
            />
        </div>
    );
};

export default ExampleComponent;
```

## License

This project is licensed under the MIT License.
