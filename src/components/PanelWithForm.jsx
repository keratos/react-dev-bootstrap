import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import Panel from './Panel'; // Assurez-vous d'importer correctement votre composant Panel

const PanelWithForm = (props) => {
    return (
        <Panel title={props.title}>
            <Form onSubmit={props.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Panel>
    );
};

PanelWithForm.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default PanelWithForm;
