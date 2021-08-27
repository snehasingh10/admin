import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { commonApi } from 'src/network/Api'


export default function AllUser() {
    const [det, setDet] = useState({})
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/user-list'))
        }
        init()
    }, [])

    return(
        <>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Premium</Table.HeaderCell>
                        <Table.HeaderCell>Premium Till</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
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
                                            <Table.Cell className="my-auto">{val.name}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.email}</Table.Cell>
                                            <Table.Cell className="my-auto">{(val.isPremium)?"YES":"No"}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.planTill}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.country}</Table.Cell>
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