import React, { useEffect, useState } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol
} from '@coreui/react'
import { commonApi } from 'src/network/Api'

const WidgetsDropdown = () => {
  const [det, setDet] = useState({})
  useEffect(()=>{
    async function init(){
      setDet(await commonApi('/global/get-number'))
    }
    init()
  }, [])
  return (
    <CRow>
      {
        (det.hasOwnProperty('data'))?
        
        <>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-primary" header="Movies" style={{height: '150px'}} text={det.data.data.movie} ></CWidgetDropdown> </CCol>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-info" header="TV Series" style={{height: '150px'}} text={det.data.data.web} ></CWidgetDropdown> </CCol>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-primary" header="Live TV" style={{height: '150px'}} text={det.data.data.liveTv} ></CWidgetDropdown> </CCol>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-info" header="Stars" style={{height: '150px'}} text={det.data.data.actors} ></CWidgetDropdown> </CCol>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-info" header="Publishers" style={{height: '150px'}} text={det.data.data.publishers} ></CWidgetDropdown> </CCol>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-primary" header="Members" style={{height: '150px'}} text={det.data.data.users} ></CWidgetDropdown> </CCol>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-info" header="Musics" style={{height: '150px'}} text={det.data.data.song} ></CWidgetDropdown> </CCol>
          <CCol sm="6" lg="3"> <CWidgetDropdown color="gradient-primary" header="Sliders" style={{height: '150px'}} text={det.data.data.sliders} ></CWidgetDropdown> </CCol>
        </>

        :
        ""
      }
      
    </CRow>
  )
}

export default WidgetsDropdown
