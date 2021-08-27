import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { commonApiWithValues } from 'src/network/Api'
import { useHistory } from "react-router-dom";


const Forgot = () => {
  const [valSetter, setValSetter] = useState(1)
  const history = useHistory();
  async function logMeIn(e){
    e.preventDefault();
    const data = {
      email: document.getElementById('email').value,
    }
    const response = await commonApiWithValues('/admin/forgot', data)
    if(response.data.success){
      setValSetter(valSetter+1)
      history.push('/reset')
    }
    alert(response.data.msg)
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={(e)=>{ logMeIn(e) }}>
                    <h1>Forgot</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" id="email" placeholder="Email" autoComplete="email" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">Send OTP</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Forgot
