import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { commonApi, commonApiWithValues } from 'src/network/Api'


export default function AllSlider() {
    const [det, setDet] = useState({})
    const [deleteIndicator, setter] = useState(1)
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/sliders'))
        }
        init()
    }, [deleteIndicator])


    async function deleteSlider(_id){
        await commonApiWithValues('/admin/delete-slider', {_id}).then((response)=>{
            alert(response.data.msg)
            setter(deleteIndicator+1)
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return(
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>What</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    (det.hasOwnProperty('data'))?
                        (
                            det.data.data.map((val, ind)=>{
                                return(
                                    <Table.Row key={ind}>
                                        <Table.Cell>{
                                            (val.hasOwnProperty('subtitlesPath'))?
                                            "Movie"
                                            :
                                            (val.hasOwnProperty('tagline'))?
                                            "Web-Series"
                                            :
                                            "Song"
                                        }</Table.Cell>
                                        <Table.Cell>{val.title}</Table.Cell>
                                        <Table.Cell><i onClick={()=>{ deleteSlider(val._id) }} className="fa fa-trash btn btn-danger"></i></Table.Cell>
                                    </Table.Row>

                                )  
                            })
                        )
                    :
                    <></>
                }
            </Table.Body>
        </Table>
    )
}