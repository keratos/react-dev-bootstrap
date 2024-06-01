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
