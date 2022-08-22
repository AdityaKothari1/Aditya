import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    useDisclosure,
    Button,
    Select,
    Input,
} from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'


export default function AddHospital() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null);
    const [hospital, setHospital] = useState({ hospital: "", address: "" })

    const handleChange = (e) => {
        let { name, value } = e.target
        setHospital({ ...hospital, [name]: value })
    }

    const AddHospital = () => {
        axios.post("https://gk-general-api.herokuapp.com/hospitals", hospital).then((res) => {
            console.log(res.data)
            onClose()
        }).catch((er) => {
            console.log(er)
        })
    }

    return (
        <>

            <Button mt={4} onClick={onOpen}>
                Add Hospital
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Hospital Form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input placeholder='Hospital name' onChange={handleChange} name="hospital" />
                        <br /><br />
                        <Input placeholder='Addrress' onChange={handleChange} name="address" />
                        <br /><br />
                        <Button background="lightgreen" onClick={AddHospital}>Add Hospital</Button>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}