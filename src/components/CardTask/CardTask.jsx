import React from 'react'
import './CardTask.css'
import Icon from "../../modules/Icon";

const CardTask = (props) =>{
    const {title, tagStatus, tag, image, more, dueDate, status, members } = props;
  return (
    <div className="ui-card-task">
        <div className="ui-card-task-header">
            <div className="ui-card-task-header__tagStatus" style={{backgroundColor: tagStatus}}></div>
            <div className="ui-card-task-header__tagName">{tag}</div>
            <div className="ui-card-task-header__more">
                <Icon id={'moreDots'} iconSize={20}/>
            </div>
        </div>
        <div className="ui-card-task-body">
            <div className="ui-card-task-body__title">{title}</div>
            {image && <div className="ui-card-task-body__image"><img src={image} alt/></div>}
            {dueDate && <div className="ui-card-task-body__due">
                <div className="ui-card-task-body__due__icon"></div>
                <div className="ui-card-task-body__due__text">{dueDate}</div>
            </div>}
            <div className="ui-card-task-body__status">{status}</div>
            <div className="ui-card-task-body__members"></div>
        </div>
        <div className="ui-card-task-footer">
        
        </div>
    </div>
  )
}

export default CardTask