import React, { useState } from 'react'
import './PageFilter.css'

const _PageFilter = () => {
    const filterData = {
        lastUpdateDate : '2023-03-01', //yyyy-mm-dd
        actions: [
            {
                id: 'allTasks',
                title: 'All tarks',
                icon: ''
            },
            {
                id: 'sort',
                title: 'Sort',
                icon: ''
            },
            {
                id: 'filter',
                title: 'Filter',
                icon: ''
            }
        ],
        more: true 
    }
    const [selectedAction, setSelectedAction] = useState(null);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const lastUpdateDate = new Date(filterData.lastUpdateDate);
  return (
    <div className="ui-page-filter">
        <div className="ui-page-filter__left">
            <div className="ui-page-filter__left__text">Last Update on: </div>
            <div className="ui-page-filter__left__date"><div>{lastUpdateDate.getDate()}</div> <div>{' '+months[lastUpdateDate.getMonth()]+', '}</div> <div>{lastUpdateDate.getFullYear()}</div></div>
        </div>
        <div className="ui-page-filter__right">
            <div className="ui-page-filter__right__actions">{filterData.actions.map(action => {
                const isActive  = selectedAction === action.id;
                const actionClassName = "ui-page-filter__right__actions__action " + (isActive? 'ui-page-filter__right__actions__action--active': '');
                return (
                    <div className={actionClassName} role={'button'} tabIndex={0} onClick={()=> setSelectedAction(action.id)} key={action.id}>
                        <div className="ui-page-filter__right__actions__action__icon">
                        <i className="fa-regular fa-ellipsis"></i>
                        </div>
                        <div className="ui-page-filter__right__actions__action__name">
                            {action.title}
                        </div>
                    </div>
                );
            })}</div>
            {filterData.more && <div className="ui-page-filter__right__more">
                <i className="fa-regular fa-menu"></i>
            </div>}
        </div>
    </div>
  )
}

export const PageFilter = _PageFilter;