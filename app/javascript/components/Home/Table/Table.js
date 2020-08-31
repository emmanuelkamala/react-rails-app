import React, { Component } from 'react';
import Item from './Item';
import ActiveItem from './ActiveItem';

export class Table extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const items = this.props.course_modules.map(data => {
            return (
                data.active ? 
                <ActiveItem handleVideoChange={this.props.handleVideoChange.bind(this, data)} key={data.id} title={data.title} description={data.description} />:
                <Item handleVideoChange={this.props.handleVideoChange.bind(this, data)} key={data.id} title={data.title} description={data.description} />
        )})
        return (
            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="pt-4 pb-4">
                            React for Rails Developers - Videos
                        </h2>
                        { items }
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Table
