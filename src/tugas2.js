import React, { Component } from 'react';

class Tambah extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
            <h3>Soal 2</h3>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>tambah</button>
            </div>
        );
    }
}

export default Tambah;
