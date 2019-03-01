import React, { Component } from 'react'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h3>These are our loyal customers:</h3>
                {
                    this.props.TacoOwners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}
                            <button onClick={() => {
                                this.props.removeCustomer(owner.id)
                            }}
                            >Remove</button>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default OwnerList