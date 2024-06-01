
# ToastManager Component

This is a customizable toast manager component built with React and Bootstrap. It includes the ability to play a sound when a toast is shown.

## Usage

Here is an example of how to use the `ToastManager` component:

### ToastManager.jsx

```jsx
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
```

## Props

| Prop         | Type                               | Default  | Description                                           |
|--------------|------------------------------------|----------|-------------------------------------------------------|
| toasts       | arrayOf(shape({                    | []       | List of toasts to display                             |
| id           | number.isRequired,                 |          | Unique identifier for each toast                      |
| message      | string.isRequired,                 |          | Message to display in the toast                       |
| variant      | string                             |          | Variant of the toast (e.g., 'success', 'info')        |
| removeToast  | func.isRequired                    | -        | Function to remove a toast                            |
| position     | string                             | 'top-end'| Position of the toast container                       |
| delay        | number                             | 3000     | Delay before the toast disappears automatically       |
| autohide     | bool                               | true     | Whether the toast should disappear automatically      |
| customClass  | string                             | ''       | Custom CSS class for the toast container              |
| customStyle  | object                             | {}       | Custom styles for the toast container                 |
| openSound    | string                             | null     | Path to the sound file to play when the toast appears |

## Example Implementation

### Home.jsx

```jsx
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import PanelWithList from '../components/PanelWithList';
import PanelWithForm from '../components/PanelWithForm';
import CustomModal from '../components/CustomModal';
import Layout from '../components/Layout';
import ToastManager from '../components/ToastManager';

const Home = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const [showModal, setShowModal] = useState(false);
    const [toasts, setToasts] = useState([
        { id: Date.now(), message: 'Welcome to the site!', variant: 'info' }
    ]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const addToast = (message, variant = 'info') => {
        setToasts([...toasts, { id: Date.now(), message, variant }]);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <Layout>
            <h1>Home Page</h1>
            <PanelWithList title="List Panel" items={items} />
            <PanelWithForm title="Form Panel" onSubmit={handleSubmit} />
            <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button>
            <CustomModal
                show={showModal}
                handleClose={handleClose}
                title="Example Modal"
                size="lg"
                backdrop="static"
                centered
                customClass="custom-modal-class"
                customStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '15px' }}
                openSound="audio/modal.mp3"
            >
                <p>This is the content of the modal</p>
            </CustomModal>
            <Button variant="success" onClick={() => addToast('This is a toast message!', 'success')}>
                Show Custom Toast
            </Button>
            <ToastManager
                toasts={toasts}
                removeToast={removeToast}
                position="top-end"
                delay={5000}
                autohide={true}
                customClass="my-toast-container"
                customStyle={{ zIndex: 1050 }}
                openSound="audio/toast.mp3"
            />
        </Layout>
    );
};

export default Home;
```

## License

This project is licensed under the MIT License.
