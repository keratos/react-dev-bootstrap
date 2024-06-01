import { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

const ToastManager = ({
                          toasts,
                          removeToast,
                          position,
                          delay,
                          autohide,
                          customClass,
                          customStyle,
                          openSound
                      }) => {
    const [playSound, setPlaySound] = useState(false);

    useEffect(() => {
        if (playSound) {
            setPlaySound(false); // Reset the play state after playing the sound
        }
    }, [playSound]);

    useEffect(() => {
        if (toasts.length > 0) {
            setPlaySound(true);
        }
    }, [toasts]);

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
        </div>
    );
};

ToastManager.propTypes = {
    toasts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            variant: PropTypes.string
        })
    ).isRequired,
    removeToast: PropTypes.func.isRequired,
    position: PropTypes.string,
    delay: PropTypes.number,
    autohide: PropTypes.bool,
    customClass: PropTypes.string,
    customStyle: PropTypes.object,
    openSound: PropTypes.string
};

ToastManager.defaultProps = {
    position: 'top-end',
    delay: 3000,
    autohide: true,
    customClass: '',
    customStyle: {},
    openSound: null
};

export default ToastManager;
