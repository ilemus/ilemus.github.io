import React from 'react'

const SITE_NAME = 'Site Name'
interface TitleProps {
    children: any;
}

function Title(props: TitleProps) {
    return (
    <nav className='navbar navbar-expand-lg navbar-light container-fluid'>
        <div className='row'>
            <div className='col-8'>
                <h3>{SITE_NAME}</h3>
            </div>
            <div className='container col-4'>
                <button className='col-6 btn btn-primary'>login</button>
                <button className='col-6 btn btn-primary'>signup</button>
            </div>
        </div>
        <div className='row'>
            {props.children}
        </div>
    </nav>
    )
}

export default Title