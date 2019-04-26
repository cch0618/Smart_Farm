import React from 'react';

class Customer extends React.Component {
    render() {
        return (
        <div>
            <CustomerProfile id={this.props.id} pump={this.props.pump}/>
            <CustomerInfo ondo={this.props.ondo} sepdo={this.props.sepdo} hontak={this.props.hontak} toyang={this.props.toyang}/>
        </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.id}({this.props.pump})</p>
            </div>           
        )
    }
}

class CustomerInfo extends React.Component {
render() {
    return (
        <div>
            <p>{this.props.ondo}</p>
            <p>{this.props.sepdo}</p>
            <p>{this.props.hontak}</p>
            <p>{this.props.toyang}</p>
        </div>
    )
}

}

export default Customer;