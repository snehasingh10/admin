import React from 'react'
import axios from 'axios'
import { tmdbApi } from 'src/network/Api'
const req = axios.create()

export default function MovieScrapper() {
    async function init(e){
        e.preventDefault()
        const det = (await req.get('https://api.themoviedb.org/3/movie/'+ document.getElementById("idForScrapp").value +'?api_key='+tmdbApi))
        if(det.data !== undefined){
            document.getElementById('title').value = det.data.title
            document.getElementById('overview').value = det.data.overview
            document.getElementById('popularity').value = det.data.popularity
            document.getElementById('productionCompany').value = (det.data.production_companies.map((val,ind)=>{ return val.name })).join(', ')
            document.getElementById('tagline').value = det.data.tagline
            document.getElementById('voteCount').value = det.data.vote_count
            document.getElementById('voteAverage').value = det.data.vote_average
            let tmdbGenres = (det.data.genres.map((val,ind)=>{ return val.name }))
            let ourGenres = document.querySelectorAll('#genres option')
            for(let i=0; i < ourGenres.length; i++){
                if(tmdbGenres.includes(ourGenres[i].value)) ourGenres[i].selected = true
                else ourGenres[i].selected = false
            }
        }
    }
    // init()
    return (
        <div>
            <form className="d-flex" onSubmit={(e)=>{init(e)}}>
                <input type="text" placeholder="Enter id" id="idForScrapp" className="form-control" />
                <button type="submit" className="btn btn-info"> <i className="fa fa-search"></i> </button>
            </form>
        </div>
    )
}
