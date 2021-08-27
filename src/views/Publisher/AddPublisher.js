import React from 'react'
import { commonApiWithValues } from 'src/network/Api'

export default function AddPublisher() {
    async function addPerson(e){
        e.preventDefault()
        let roleTemp = document.querySelectorAll('#role option')
        const role  = []
        for (let i = 0; i < roleTemp.length; i++) { if(roleTemp[i].selected) role.push(roleTemp[i].value); }
        const formData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            role: role,
        }

        const response = await commonApiWithValues('/admin/add-publisher', formData)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={(e)=>{ addPerson(e) }} className="mx-auto col-md-6 col-lg-4">
                <input type="email" className="mt-3 form-control" id="email" placeholder="Enter Email" required />
                <input type="password" className="mt-3 form-control" id="password" placeholder="Enter Password" required />
                <select multiple className="mt-3 form-control" id="role" required>
                    <option value="master">Master</option>
                    <option value="movie">Movie</option>
                    <option value="web">Web</option>
                    <option value="song">Song</option>
                </select>
                <input type="submit" value="Submit" className="mt-3 btn btn-success" />
            </form>
        </div>
    )
}
