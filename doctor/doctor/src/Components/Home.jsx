import { Box, Button, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddDoctor from './AddDoctor'
import AddHospital from './AddHospital'
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
import { Link } from 'react-router-dom'

const getDetails = (page, sort) => {
    return axios.get(`https://gk-general-api.herokuapp.com/doctors/?_page=${page}&_limit=${5}&_sort=salary&_order=${sort}`)
}

const Home = () => {

    const [page, setPage] = useState(1)
    const [data, setdata] = useState([])
    const [sort, setSort] = useState("ASC")
    const [update, setUpdate] = useState("")

    useEffect(() => {
        getDetails(page, sort).then((res) => { setdata(res.data) }).catch((er) => {
            console.log(er)
        })
    }, [page, sort, update])


    return (
        <Box>
            <Heading>Home Page</Heading>

            <br /><br />
            <AddHospital />
            <AddDoctor update={setUpdate} />


            <br /><br /><br />
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>id</Th>
                            <Th>Name</Th>
                            <Th>Hospital</Th>
                            <Th>Specialisation</Th>
                            <Th>Salary <Button onClick={() => setSort(sort === "ASC" ? "DESC" : "ASC")}>{sort === "ASC" ? "DESC" : "ASC"}</Button></Th>
                            <Th>Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((el) => <Tr key={el.id}>
                            <Td>{el.id}</Td>
                            <Td>{el.name}</Td>
                            <Td>{el.hospital}</Td>
                            <Td>{el.special}</Td>
                            <Td>{el.salary}</Td>
                            <Td><Link to={`/doctor/${el.id}`}> View More Details</Link></Td>
                        </Tr>)}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th><Button onClick={() => setPage(1)}>First</Button></Th>
                            <Th><Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button></Th>
                            <Th><Button onClick={() => setPage(page + 1)}>Next</Button></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Home
