import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { backURL, commonApi, commonApiWithValues } from 'src/network/Api'


export default function AllMusic() {
    const [det, setDet] = useState({})
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/get-song'))
        }
        init()
    }, [])

    async function searchMovie(){
        setDet(await commonApi('/global/search-song/'+document.getElementById('searchField').value))
    }
    return(
        <>
            <div className="d-flex justify-content-center pb-5">

                <input type="text" className="form-control" placeholder="Search From Here" id="searchField" />
                <i className="fa fa-search btn btn-info" onClick={()=>{ searchMovie() }} ></i>
            </div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Photo</Table.HeaderCell>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Belongs To</Table.HeaderCell>
                        <Table.HeaderCell>Add to slider</Table.HeaderCell>
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
                                            <Table.Cell className="my-auto">{val.belongsTo}</Table.Cell>
                                            <Table.Cell><i className="fa fa-plus btn btn-success" onClick={async()=>{
                                                const response = await commonApiWithValues('/admin/add-slider', {
                                                    contId: val._id,
                                                    what: 'song'
                                                })
                                                alert(response.data.msg)
                                            }}></i></Table.Cell>
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