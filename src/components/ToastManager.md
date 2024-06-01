
# ToastManager Component

This is a customizable toast manager component built with React and Bootstrap, with support for playing a sound when a toast appears.

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

Here is an example of how to use the `ToastManager` component:

### ToastManager.jsx

```jsx
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
```

### Home.jsx

```jsx
import React from 'react';
import Layout from './components/Layout';
import ToastManager from './components/ToastManager';

const Home = () => {
    const initialToasts = [
        { message: 'Welcome to the site!', variant: 'info' }
    ];

    return (
        <Layout>
            <h1>Home Page</h1>
            <ToastManager
                initialToasts={initialToasts}
                position="top-end"
                delay={5000}
                autohide={true}
                buttonText="Show Custom Toast"
                buttonVariant="success"
                customClass="my-toast-container"
                customStyle={{ zIndex: 1050 }}
                openSound="/path/to/your/soundfile.mp3"
            />
        </Layout>
    );
};

export default Home;
```

## ToastManager Props

| Prop         | Type                             | Default  | Description                                            |
|--------------|----------------------------------|----------|--------------------------------------------------------|
| initialToasts| array                            | []       | Initial list of toasts                                 |
| position     | string                           | 'top-end'| Position of the toast container                        |
| delay        | number                           | 3000     | Delay before the toast disappears automatically        |
| autohide     | bool                             | true     | Whether the toast should disappear automatically       |
| buttonText   | string                           | 'Show Toast'| Text for the button that shows the toast              |
| buttonVariant| string                           | 'primary'| Bootstrap variant for the button                       |
| customClass  | string                           | ''       | Custom CSS class for the toast container               |
| customStyle  | object                           | {}       | Custom styles for the toast container                  |
| openSound    | string                           | null     | Path to the sound file to play when the toast appears  |

## Example Implementation

The example above demonstrates how to integrate the `ToastManager` component into a React application. It includes the following steps:

1. Import the `ToastManager` component.
2. Define state to control the visibility of toasts.
3. Pass props to `ToastManager` for customization.

## License

This project is licensed under the MIT License.
