import React from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogOverlay
  } from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';

const Alert = () => {
    const cancelRef = React.useRef()

    const {isOpen, type, message, onClose} = useAlertContext();
    const isSuccess = type === 'success'
    return (
        <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef}>
            <AlertDialogOverlay>
                <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">{isSuccess ? "All Good!" : "Oops!"}</AlertDialogHeader>
                    <AlertDialogBody>{message}</AlertDialogBody>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default Alert;