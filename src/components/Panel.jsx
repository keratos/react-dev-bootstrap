import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Panel = (props) => {
    return (
        <Card className="mb-4">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>{props.children}</Card.Body>
        </Card>
    );
};

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Panel;
