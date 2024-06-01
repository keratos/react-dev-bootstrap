import { useState } from 'react';
import { Toast, ToastContainer, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ToastManager = (props) => {
    const [toasts, setToasts] = useState(props.initialToasts);

    const addToast = (message, variant = 'info') => {
        setToasts([...toasts, { message, variant, id: Date.now() }]);
        if (props.openSound) {
            const audio = new Audio(props.openSound);
            audio.play();
        }
    };

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <div className={props.customClass} style={props.customStyle}>
            <ToastContainer position={props.position} className="p-3">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        onClose={() => removeToast(toast.id)}
                        bg={toast.variant}
                        delay={props.delay}
                        autohide={props.autohide}
                    >
                        <Toast.Body>{toast.message}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
            <Button variant={props.buttonVariant} onClick={() => addToast('This is a toast message!', 'success')}>
                {props.buttonText}
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
