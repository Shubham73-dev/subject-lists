import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Card = ({ data }) => {
    return (
        <div className='card'>
            <h4>{data.name}</h4>
            <p>{data.study_short_description}</p>
            {data.child_subject.map((value, index) => {
                return (
                    <div className="slugsContainer" key={index}>
                        <div className="slug_left">
                            <h5>{value.name}</h5>
                            <span>{value.no_of_doc} documents</span>
                        </div>
                        <div className="slug_right"><ArrowRightAltIcon /></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card