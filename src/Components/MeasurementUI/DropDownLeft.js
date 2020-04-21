import React, { Component } from 'react';
class DropDownLeft extends Component{
    
    render(){
        return(
            <div className='col-md m-5' id='main-label'>
                <input type='text' className="form-control form-control-md" onChange={this.props.inputTypeLeft} />
                <select name="measurementType" id="measurementType" className='form-control'  onChange={this.props.selectTypeLeft}>
                <option value="-1" selected>Select</option>
                
                {
                    this.props.showType?
                    <>
                <option name="length">Feet</option>
                <option name="weight">Inch</option>
                <option name="weight">Meter</option>
                <option name="weight">Centimeter</option></> : <>
                <option name="weight">Kilogram</option>
                <option name="weight">Gram</option>
                </>
                }
                </select>
            </div>
        )
    }
}
export default DropDownLeft;