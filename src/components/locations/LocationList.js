import React, { Component } from 'react';

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            <h3>These are our locations!</h3>
            {
                this.props.TacoLocations.map(location =>
                    <div key={location.id}>
                        <h3>
                            {location.name}
                        </h3>
                        <h4>
                            {location.address}
                        </h4>
                    </div>
                )
            }
            </section>
        );
    }
}