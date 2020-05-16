import React, { Component } from 'react';

import './New.css';

class New extends Component {
    render() {
        return (
            <form id="new-post">
                <input type="file" />

                <input
                    type="text"
                    name="author"
                    placeholder="Post Author"
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Post Place"
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Post Description"
                />

                <input
                    type="text"
                    name="hashtags"
                    placeholder="Post Hashtags"
                />

                <button type="submit">Send</button>
            </form>
        )
    }
}

export default New;