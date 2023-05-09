import React, { useState, useEffect } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Card = ({ data }) => {
    const [flag, setFlag] = useState(false);
    const operation = (event) => {
        setFlag(!flag)
    }
    return (
        <div className='card'>
            <div className="chevron-container">
                <h4>{data.name}</h4>
                <span onClick={operation}>{flag ? <ExpandMoreIcon />:<ChevronRightIcon />}</span>
            </div>
            <p>{data.study_short_description}</p>
            <div className={`slugChilds ${flag ? 'showSlugChilds' : 'hideSlugChilds'}`}>
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

        </div>
    )
}

export default Card
