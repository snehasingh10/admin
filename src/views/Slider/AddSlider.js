import React from 'react'
import { commonApiWithValues } from 'src/network/Api'



export default function AddSlider() {
    async function addSlider(e){
        e.preventDefault()
        const data = {
            what: e.target[0].value,
            contId: e.target[1].value
        }
        const response = await commonApiWithValues('/admin/add-slider', data)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={(e)=>{addSlider(e)}} className="mx-auto mb-5 pb-5 col-lg-4 col-sm-6">
                <select className="form-control mt-3" required>
                    <option value="">---Select an option---</option>
                    <option value="web">Web</option>
                    <option value="song">Song</option>
                    <option value="movie">Movie</option>
                </select>
                <input type="text" placeholder="Id of slider" className="form-control mt-3" required />
                <input type="submit" value="Add New Slider" className=" btn btn-success mt-3" required />
            </form>
        </div>
    )
}
