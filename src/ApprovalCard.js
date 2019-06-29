import React, { Component } from 'react';

class ApprovalCard extends Component {
    render(){
        console.log("I AM THE APPROVAL CARD", this.props.children.props.author)
        return(
            <div className="ui card">
                <div classname='content'>
                    {this.props.children}
                </div>
                <div className='extra content'>
                    <div className="ui two buttons">
                        <div className="basic ui green button">Approve</div>
                        <div className="basic ui red button">Reject</div>

                    </div>
                </div>


            </div>
        )
    }
}

export default ApprovalCard;