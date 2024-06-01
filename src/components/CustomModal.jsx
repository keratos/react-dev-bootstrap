import { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CustomModal = (props) => {
    useEffect(() => {
        if (props.show && props.openSound) {
            const audio = new Audio(props.openSound);
            audio.play();
        }
    }, [props.show, props.openSound]);

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            size={props.size}
            backdrop={props.backdrop}
            centered={props.centered}
            className={props.customClass}
            style={props.customStyle}
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
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
