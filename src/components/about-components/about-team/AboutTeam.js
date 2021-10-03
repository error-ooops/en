import React, { useState } from 'react'
import './AboutTeam.css'
import {about_team} from '../../../static/navigation_links'

function AboutTeam() {
    const [showDescription, setshowDescription] = useState()
    const [hideDescription, sethideDescription] = useState("about_teamCard about_teamCardActive")
    const showDesc = (id)=>{
        sethideDescription("about_teamCard about_teamCardActive")
        setshowDescription(id)
    }
    const hideDesc = (id)=>{
        sethideDescription("about_teamCard")
    }
    return (
        <div className="about_team">
            <h1 className="about_teamTitle">Our Team</h1>
            <div className="about_teamLine"></div>
            <div className="about_teamGroup">
                    {
                        about_team?.map( item => <div key={item.id} className={showDescription === item.id?  hideDescription:"about_teamCard"}> 
                            <img src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <h4>{item.job}</h4>
                            <button onClick={()=> showDesc(item.id)} className="about_teamCardBtnShow">Show more</button>
                            <p>{item.desc }</p>
                            <button onClick={()=> hideDesc(item.id)} className="about_teamCardBtnHide">Hide text</button>
                        </div>)
                    }
            </div>
        </div>
    )
}

export default AboutTeam
