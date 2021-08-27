import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import { backURL, commonApi, commonApiWithValues } from 'src/network/Api'
import UploadedEp from './UploadedEp'


export default function MyWeb() {
    const [det, setDet] = useState({})
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/admin/my-web'))
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
                        <Table.HeaderCell>Genres</Table.HeaderCell>
                        <Table.HeaderCell>Rent</Table.HeaderCell>
                        <Table.HeaderCell>Add to slider</Table.HeaderCell>
                        <Table.HeaderCell>Uploaded Episodes</Table.HeaderCell>
                        <Table.HeaderCell>Add Episode</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        (det.hasOwnProperty('data'))?
                            (
                                det.data.data.map((val, ind)=>{
                                    return(
                                        <Table.Row key={ind}>
                                            <Table.Cell className="my-auto"><img height="100" src={backURL + val.backdropPath} alt={val.title + '@TFlix'} /></Table.Cell>
                                            <Table.Cell className="my-auto">{val._id}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.title}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.genres}</Table.Cell>
                                            <Table.Cell className="my-auto">{val.rent}</Table.Cell>
                                            <Table.Cell><i className="fa fa-plus btn btn-success" onClick={async()=>{
                                                const response = await commonApiWithValues('/admin/add-slider', {
                                                    contId: val._id,
                                                    what: 'web'
                                                })
                                                alert(response.data.msg)
                                            }}></i></Table.Cell>
                                            <Table.Cell><UploadedEp id={val._id} /></Table.Cell>
                                            <Table.Cell><Link to={"/AddEpisode/"+val._id}><i className="fa fa-plus btn btn-warning"></i></Link></Table.Cell>
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