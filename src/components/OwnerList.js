import React, { Component } from 'react'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.TacoOwners.map(owner =>
                    <div key={owner.id}>
                        {owner.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList