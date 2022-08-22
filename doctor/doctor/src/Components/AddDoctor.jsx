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
import React, { useEffect, useState } from 'react'
import axios from "axios"




export default function AddDoctor({ update }) {


    const [hosName, setHosName] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null);
    const [Doctor, setDoctor] = useState({ name: "", hospital: "", special: "", salary: 0 })


    useEffect(() => {
        axios.get("https://gk-general-api.herokuapp.com/hospitals").then((res) => {
            setHosName(res.data)
        })
    }, [isOpen])


    const handleChange = (e) => {
        let { name, value, type } = e.target
        const updated = type === "number" ? Number(value) : value
        setDoctor({ ...Doctor, [name]: updated })
    }
    const AddDoctor = () => {
        axios.post("https://gk-general-api.herokuapp.com/doctors", Doctor).then((res) => {
            update(1 + 1)
            onClose()
        }).catch((er) => {
            console.log(er)
        })
    }

    return (
        <>

            <Button mt={4} onClick={onOpen}>
                Add Doctor
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Doctor Form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input placeholder='Doctor Name' onChange={handleChange} name="name" />
                        <br /><br />
                        <Select placeholder='Select Hospital' onChange={handleChange} name="hospital">
                            {hosName.map((name) => <option key={name.id} value={name.hospital}>{name.hospital}</option>)}
                        </Select>
                        <br />
                        <Select placeholder='Select Specialisation' onChange={handleChange} name="special">
                            <option value='eye'>Eye</option>
                            <option value='nose'>Nose</option>
                            <option value='bone'>Bone</option>
                        </Select>
                        <br />
                        <Input placeholder='Salary' type="number" onChange={handleChange} name="salary" />
                        <br /><br />
                        <Button background="lightgreen" onClick={AddDoctor}>Add Doctor</Button>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}