import { ListGroup } from 'react-bootstrap';
import Panel from './Panel';

const PanelWithList = ({ title, items }) => {
    return (
        <Panel title={title}>
            <ListGroup variant="flush">
                {items.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                ))}
            </ListGroup>
        </Panel>
    );
};

export default PanelWithList;
