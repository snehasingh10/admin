import React from 'react'
import { commonApiWithValues } from 'src/network/Api'

export default function AddCat() {
    var temp = 1

    async function submitted(e) {
        e.preventDefault()
        const toogleOption = []
        let what = document.getElementById('what').value
        for (let i = 1; i <= temp; i++) {
            let genre = document.getElementById('genre_' + i).value
            let lang = document.getElementById('lang_' + i).value
            let free = document.getElementById('free_' + i).value
            let sortWith = document.getElementById('sortWith_' + i).value
            let qs = []
            if (genre.length !== 0) qs.push('genre=' + genre)
            if (lang.length !== 0) qs.push('lang=' + lang)
            if (free.length !== 0) qs.push('free=' + free)
            if (sortWith.length !== 0) qs.push('sortWith=' + sortWith)
            let value = `/global/fetch/${what}?` + qs.join('&')
            toogleOption.push({
                displayName: document.getElementById('displayName_' + i).value,
                value: value
            })
        }
        const data = {
            title: document.getElementById('title').value,
            toogleOption: toogleOption,
            horizontal: document.getElementById('horizontal').value,
            what: what
        }

        const res = await commonApiWithValues('/admin/add-object', data)
        alert(res.data.msg)
        if (res.data.success) {
            e.target.reset()
        }
    }

    function addNewCatBtn(temp) {
        let newOne = document.createElement('div')
        newOne.className = "border p-3"
        newOne.innerHTML = `
            <input required type="text" placeholder="Enter Display Name here" class="form-control" id="displayName_${temp}" />
            <input type="text" placeholder="Enter Genres here" class="form-control" id="genre_${temp}" />
            <input type="text" placeholder="Enter Languages here" class="form-control" id="lang_${temp}" />
            <select type="text" class="form-control" id="free_${temp}">
                <option value="true">Free</option>
                <option value="false">Paid</option>
                <option value="">Doesn't Matter</option>
            </select>
            <input type="number" placeholder="Enter Limit here" class="form-control" id="limit_${temp}" />
            <select type="text" class="form-control" id="sortWith_${temp}">
            <option value="popularity">Popularity</option>
                <option value="voteCount">Vote Count</option>
                <option value="voteAverage">Vote Average</option>
                <option value="rent">Rent</option>
                <option value="">Doesn't Matter</option>
                </select>
        `
        document.getElementById('toggleContainer').appendChild(newOne)
    }

    return (
        <form onSubmit={(e) => { submitted(e) }} className="col-lg-4 col-md-6 border-right">
            <input required type="text" placeholder="Enter Main TITLE here" className="form-control" id="title" />
            <select required type="text" className="form-control" id="horizontal">
                <option value="true">Horizontal</option>
                <option value="false">Vertical</option>
            </select>
            <select required type="text" className="form-control" id="what">
                <option value="web">Web Series</option>
                <option value="movie">Movie</option>
            </select>
            <div id="toggleContainer">
                <div className="border p-3">
                    <input required type="text" placeholder="Enter Display Name here" className="form-control" id={"displayName_" + temp} />
                    <input type="text" placeholder="Enter Genres here" className="form-control" id={"genre_" + temp} />
                    <input type="text" placeholder="Enter Languages here" className="form-control" id={"lang_" + temp} />
                    <select type="text" className="form-control" id={"free_" + temp}>
                        <option value="true">Free</option>
                        <option value="false">Paid</option>
                        <option value="">Doesn't Matter</option>
                    </select>
                    <input type="number" placeholder="Enter Limit here" className="form-control" id={"limit_" + temp} />
                    <select type="text" className="form-control" id={"sortWith_" + temp}>
                        <option value="popularity">Popularity</option>
                        <option value="voteCount">Vote Count</option>
                        <option value="voteAverage">Vote Average</option>
                        <option value="rent">Rent</option>
                        <option value="">Doesn't Matter</option>
                    </select>
                </div>
            </div>
            <button type="button" className="pull-right btn btn-warning" onClick={() => { addNewCatBtn(++temp) }}><i className="fa fa-plus"></i></button> <br /><br /><br />
            <button type="submit" className="btn btn-success">Add</button>
        </form>

    )
}
