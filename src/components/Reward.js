import React, { Component } from 'react'
import { ItemReward } from '../Views/ViewManagers'

export default class Reward extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rewards: [1, 2, 3]
        }
    }

    render() {
        const { rewards } = this.state
        return (
            rewards.map((item, index) =>
                <ItemReward key={index} item={item} />
            )
        )
    }
}

