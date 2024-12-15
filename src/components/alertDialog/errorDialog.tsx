
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const ErrorDialog = ({ open, onClose, errorMessage }) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Overlay className="fixed inset-0 bg-black/30" />
    <Dialog.Content className="fixed top-1/2 left-1/2 p-6 bg-white rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2">
      <Dialog.Title className="text-lg font-bold">Registration Failed</Dialog.Title>
      <Dialog.Description className="mt-2">{errorMessage}</Dialog.Description>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        OK
      </button>
    </Dialog.Content>
  </Dialog.Root>
);

export default ErrorDialog;
