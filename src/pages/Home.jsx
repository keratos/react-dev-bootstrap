import { useState } from 'react';
import { Button } from 'react-bootstrap';
import PanelWithList from '../components/PanelWithList';
import PanelWithForm from '../components/PanelWithForm';
import CustomModal from '../components/CustomModal';
import Layout from '../components/Layout';
import ToastManager from "../components/ToastManager.jsx";

const Home = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const initialToasts = [
        { message: 'Welcome to the site!', variant: 'info' }
    ];

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
            <ToastManager
                initialToasts={initialToasts}
                position="top-end"
                delay={5000}
                autohide={true}
                buttonText="Show Custom Toast"
                buttonVariant="success"
                customClass="my-toast-container"
                customStyle={{ zIndex: 1050 }}
                openSound="audio/modal.mp3"
            />
        </Layout>
    );
};

export default Home;
