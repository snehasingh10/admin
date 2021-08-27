import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { backURL, commonApi } from 'src/network/Api'


export default function AllLiveTv() {
    const [det, setDet] = useState({})
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/live-tv'))
        }
        init()
    }, [])

    return(
        <>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Photo</Table.HeaderCell>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>URL</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        (det.hasOwnProperty('data'))?
                            (
                                det.data.data.map((val, ind)=>{
                                    return(
                                        <Table.Row key={ind}>
                                            <Table.Cell className="my-auto"><img height="100" src={backURL + val.logoPath} alt={val.title + '@TFlix'} /></Table.Cell>
                                            <Table.Cell className="my-auto">{val._id}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.name}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.url}</Table.Cell>
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