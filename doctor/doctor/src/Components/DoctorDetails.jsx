import { Box, Button, Container, Heading, Input, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,

} from '@chakra-ui/react'


const getDoctorDetails = (id) => {
    return axios.get(`https://gk-general-api.herokuapp.com/doctors/${id}`)
}

const DoctorDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState({})
    const [updateData, setUpdateData] = useState([])
    const [change, setChange] = useState({ name: "", hospital: "", special: "", salary: "" })
    const [updateUi, setUpdate] = useState("")
    const navigate = useNavigate()
     console.log(updateUi);


    useEffect(() => {
        getDoctorDetails(id).then((res) => {
            setData(res.data)
            // console.log(res.data)
        }).catch((er) => {
            console.log(er)
        })
    }, [updateUi])

    useEffect(() => {
        axios.get("https://gk-general-api.herokuapp.com/doctors").then((res) => {
            setUpdateData(res.data)

        })
    }, [updateUi])

    const handleDelete = (id) => {
        axios.delete(`https://gk-general-api.herokuapp.com/doctors/${id}`).then((res) => {
            getDoctorDetails(id)
            setUpdate(1 + 1)
            navigate("/")
        }).catch((er) => {
            console.log(er)
        })
    }

    const handleChange = (e) => {
        let { name, value, type } = e.target
        const updated = type === "number" ? Number(value) : value
        setChange({ ...change, [name]: updated })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`https://gk-general-api.herokuapp.com/doctors/${id}`, { name: change.name, hospital: change.hospital, special: change.special, salary: change.salary }).then((res) => {
            console.log(res.data)
            setUpdate(1 + 1)
        })
    }


    return (
        <Box w="50%" margin="auto">
            <Heading>Doctor Details</Heading>
            <br /><br />
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Doctor Name</Th>
                            <Th>Hospital</Th>
                            <Th>Specialisation</Th>
                            <Th>Salary</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>{data.id}</Td>
                            <Td>{data.name}</Td>
                            <Td>{data.hospital}</Td>
                            <Td>{data.special}</Td>
                            <Td>{data.salary}</Td>
                        </Tr>

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th><Link to="/"><Button>Go Back</Button></Link></Th>
                            <Th><Button onClick={() => handleDelete(id)}>Delete</Button></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <br /><br />
            <hr />
            <Container>
                <Heading> Form </Heading>
                <form onSubmit={handleSubmit}>
                    <Input placeholder='Doctor Name' value={change.name} onChange={handleChange} name="name" />
                    <br /><br />
                    <Select placeholder='Select Hospital' onChange={handleChange} name="hospital">
                        {updateData.map((name) => <option key={name.id} value={name.hospital}>{name.hospital}</option>)}
                    </Select>
                    <br />
                    <Select placeholder='Select Specialisation' onChange={handleChange} name="special">
                        {updateData.map((name) => <option key={name.id} value={name.special}>{name.special}</option>)}
                    </Select>
                    <br />
                    <Input placeholder='Salary' type="number" onChange={handleChange} name="salary" value={change.salary} />
                    <br /><br />
                    <Input type="submit" background="lightgreen" value="Update Doctor" />
                </form>
            </Container>


        </Box>
    )
}

export default DoctorDetails
