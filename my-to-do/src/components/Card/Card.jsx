import React, { Component } from 'react'
import './Card.css'

const card = (props) => {

    return (
        <div className='ui-card-container' key={props.id}>
            <div className='ui-card-container-content'>
                <div className='ui-card-container-content-title'>{props.title}</div>
                <div className='ui-card-container-content-description'>
                    <div className='ui-card-container-content-description-left'>
                        <div className='ui-card-container-content-description-left-category'>
                            {props.category}
                        </div>
                    </div>
                    <div className='ui-card-container-content-description-right'>
                        <div className='ui-card-container-content-description-right-date'>
                            {props.date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export  const  Card = card