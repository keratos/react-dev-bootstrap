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
