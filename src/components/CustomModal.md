
# CustomModal Component

This is a customizable modal component built with React and Bootstrap. It includes the ability to play a sound when the modal is shown.

## Usage

Here is an example of how to use the `CustomModal` component:

### CustomModal.jsx

```jsx
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

const CustomModal = ({
                         show,
                         handleClose,
                         title,
                         children,
                         size,
                         backdrop,
                         centered,
                         customClass,
                         customStyle,
                         openSound
                     }) => {
    const [playSound, setPlaySound] = useState(false);

    useEffect(() => {
        if (show) {
            setPlaySound(true);
        } else {
            setPlaySound(false); // Reset the play state when the modal is closed
        }
    }, [show]);

    return (
        <>
            <AudioPlayer soundUrl={openSound} play={playSound} />
            <Modal
                show={show}
                onHide={handleClose}
                size={size}
                backdrop={backdrop}
                centered={centered}
                className={customClass}
                style={customStyle}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

CustomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    centered: PropTypes.bool,
    customClass: PropTypes.string,
    customStyle: PropTypes.object,
    openSound: PropTypes.string
};

CustomModal.defaultProps = {
    size: 'md',
    backdrop: true,
    centered: false,
    customClass: '',
    customStyle: {},
    openSound: null
};

export default CustomModal;
```

## Props

| Prop        | Type                               | Default  | Description                                           |
|-------------|------------------------------------|----------|-------------------------------------------------------|
| show        | bool                               | -        | Controls the visibility of the modal                  |
| handleClose | func                               | -        | Function to call to close the modal                   |
| title       | string                             | -        | The title of the modal                                |
| children    | node                               | -        | The content of the modal                              |
| size        | string                             | 'md'     | The size of the modal ('sm', 'lg', etc.)              |
| backdrop    | oneOfType([bool, string])          | true     | The backdrop behavior (true, false, or 'static')      |
| centered    | bool                               | false    | Centers the modal vertically                          |
| customClass | string                             | ''       | Custom CSS class for the modal                        |
| customStyle | object                             | {}       | Custom styles for the modal                           |
| openSound   | string                             | null     | Path to the sound file to play when the modal appears |

## Example Implementation

### ExampleComponent.jsx

```jsx
import React, { useState } from 'react';
import CustomModal from './CustomModal';
import { Button } from 'react-bootstrap';

const ExampleComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <Button variant="primary" onClick={handleShowModal}>
                Show Modal
            </Button>
            <CustomModal
                show={showModal}
                handleClose={handleCloseModal}
                title="Example Modal"
                size="lg"
                backdrop="static"
                centered
                customClass="custom-modal-class"
                customStyle={{ zIndex: 1050 }}
                openSound="/path/to/your/soundfile.mp3"
            >
                <p>This is the content of the modal</p>
            </CustomModal>
        </div>
    );
};

export default ExampleComponent;
```

## License

This project is licensed under the MIT License.
