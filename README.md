# React Modal

## Overview

This project provides a simple and lightweight solution for displaying modal dialogs in React using portals. The implementation utilizes React portals to render modals outside the normal DOM hierarchy, allowing for better control and flexibility over their styling and behavior.

## Features

1. **Confirm Dialog Modal:** A modal for displaying confirmation dialogs with options to confirm or cancel an action.

2. **Alert Modal:** A modal for displaying informational alerts with a single "OK" button.

3. **Loading Modal:** A modal for indicating that a process is in progress, preventing user interaction until the loading is complete.

4. **Portal Rendering:** All modals are rendered using React portals, enabling independent styling and positioning.

## Getting Started

### Installation

To use this modal component in your React project, clone or download the project repository. Copy the `modal` directory into your project and import the modal components as needed and also `styles.css`.

### Usage

Import the modal components in your React component file:

```tsx
import { ModalLoading, ConfirmDialog, AlertDialog } from './modal';

function MyComponent() {
  return (
    <div>
      {/* Your other components and content */}

      {/* Example usage of Confirm Dialog Modal */}
      <ConfirmDialog
        open={/* boolean indicating whether the modal is open */}
        title={/* Title of the modal */}
        leftBtnClick={/* callback function for left btn action */}
        rightBtnClick={/* callback function for right btn action */}
      >
        {/* Content of the modal */}
      </ConfirmDialog>

      {/* Example usage of Alert Modal */}
      <AlertDialog
        open={/* boolean indicating whether the alert modal is open */}
        onClose={/* callback function for handling alert close action */}
        title={/* Title of the modal */}
        bodyText={/* Description of the modal */}
      />

      {/* Example usage of Loading Modal */}
      <ModalLoading
        show={/* boolean indicating whether the loading modal is open */}
      />

      {/* Your other components and content */}
    </div>
  );
}
```

## Styling

Customize the styles of the modals by applying your own CSS directly to the modal components or by using inline styles. The modals are designed to be easily styled to match the look and feel of your application.

## Contributing

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Contributions are welcome!
