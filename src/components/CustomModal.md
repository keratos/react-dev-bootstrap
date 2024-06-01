
# CustomModal Component

This is a customizable modal component built with React and Bootstrap, with support for playing a sound when the modal opens.

## Installation

1. Install the required dependencies:
    ```bash
    npm install react-bootstrap bootstrap prop-types
    ```

2. Make sure to include Bootstrap CSS in your `index.js` or `main.js` file:
    ```jsx
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

## Usage

Here is an example of how to use the `CustomModal` component:

```jsx
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CustomModal from './CustomModal';

const Example = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
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
                openSound="/path/to/your/soundfile.mp3"
            >
                <p>This is the content of the modal</p>
            </CustomModal>
        </div>
    );
};

export default Example;
```

## CustomModal Props

| Prop         | Type                             | Default  | Description                                            |
|--------------|----------------------------------|----------|--------------------------------------------------------|
| show         | bool                             | -        | Controls the visibility of the modal                   |
| handleClose  | func                             | -        | Function to call to close the modal                    |
| title        | string                           | -        | The title of the modal                                 |
| children     | node                             | -        | The content of the modal                               |
| size         | string                           | 'md'     | The size of the modal ('sm', 'lg', etc.)               |
| backdrop     | oneOfType([bool, string])        | true     | The backdrop behavior (true, false, or 'static')       |
| centered     | bool                             | false    | Centers the modal vertically                           |
| customClass  | string                           | ''       | Custom CSS class for the modal                         |
| customStyle  | object                           | {}       | Custom styles for the modal                            |
| openSound    | string                           | null     | Path to the sound file to play when the modal opens    |

## Example Implementation

The example above demonstrates how to integrate the `CustomModal` component into a React application. It includes the following steps:

1. Import the `CustomModal` component.
2. Create state to control the visibility of the modal.
3. Define functions to handle showing and hiding the modal.
4. Use the `CustomModal` component in the render method, passing the appropriate props.

## License

This project is licensed under the MIT License.
