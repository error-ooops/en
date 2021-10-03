import React from 'react'
import Header from '../../header/Header'
import './AboutBanner.css'
import about001 from '../../../assets/stock/about001.png'
import about002 from '../../../assets/stock/about002.png'

function AboutBanner() {
    return (
        <div className="about_banner">
            <div className="about_bannerTop">
                <Header/>
                <h1>About Us</h1>
            </div>
            <div className="about_past">
                <div className="about_pastText">
                    <h3 className="about_pastText_Title">Preserving the Past</h3>
                    <div className="about_line"></div>
                    <p className="about_pastText_desc">Poland has a broad heritage of historic residences - from stately homes in the countryside and urban mansions through to Magnets’ fortified citadels, redundant Bishops’ palaces, and more modest manor houses. Of those few that survived the Second World War, not many were fortunate enough to resume their past splendour. The majority of those buildings were nationalised - what was once the home of the nobility was often crudely converted into hospitals, orphanages, schools, farm management offices, and public housing during the communist period. Thus, to an extent their survival was guaranteed. Since the fall of Communism many have had a more challenging histories.
                    </p>
                    <p className="about_pastText_desc">
                        The pressure on the state to divest itself of its obligations to maintain these historic    buildings has led to a number of privatisations. Some residences have been returned to their   original owners and others converted into hotels and other businesses under private ownership.    Some have been the subject of financial malpractice. Yet some still remain untouched since the     communist period or have been simply abandoned and left to the elements.
                    </p>
                </div>
                <div className="about_pastImage">
                    <img src={about001} alt="" />
                </div>
            </div>
            <div className="about_mission">
                    <div className="about_missionImage">
                        <img src={about002} alt="" />
                    </div>
                    <div className="about_missionText">
                        <h3 className="about_pastText_Title">Our Mission</h3>
                        <div className="about_line"></div>
                        <p className="about_pastText_desc">The New Heritage Foundation was founded in 2019 with the mission of preserving historic domestic buildings in Poland. The number of dilapidating Polish historic residences dramatically increasing over the recent years urged us to take action to preserve and bring them into contemporary times. Throughout history, these architectural gems were and in some instances, still remain, at the centre of their communities. Our ultimate challenge lies in finding a purposes and solution for each that will ensure their survival in the 21st century and give these masterpieces new life.</p>
                    </div>
            </div>
            <div className="about_middle">
                <p>The New Heritage Foundation for Historic Estates in the Lands of the former Kingdom of Poland aims to preserve, inspire, raise awareness and undertake actions channelled at restoring and giving new use to historic buildings and places in serious danger of demolition, abandonment or squander.</p>
                <p>
                The long term objective of the New Heritage Foundation is to establish an association with institutions such as The National Heritage Board of Poland and individuals throughout the world, who will enable us to work further for the preservation of historic buildings in Poland. This means involving people throughout society from state institutions to private individuals who share our vision, enthusiasm and determination to preserve these unique symbols of Poland’s national identity.
                </p>
            </div>
        </div>
    )
}

export default AboutBanner
