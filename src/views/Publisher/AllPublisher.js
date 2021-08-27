import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { commonApi } from 'src/network/Api'


export default function AllPublisher() {
    const [det, setDet] = useState({})
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/get-publisher'))
        }
        init()
    }, [])

    return(
        <>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Role</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        (det.hasOwnProperty('data'))?
                            (
                                det.data.data.map((val, ind)=>{
                                    return(
                                        <Table.Row key={ind}>
                                            <Table.Cell className="my-auto">{val._id}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.email}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.role.join(', ')}</Table.Cell>
                                        </Table.Row>
                                    )  
                                })
                            )
                        :
                            ""
                    }
                </Table.Body>
            </Table>
        </>
    )
}