import React from 'react'
import { TODAY } from '../../../utils/constants'

export default function TasksView({ active, tasks }) {
    switch (active) {
        case TODAY:
            return <div>{tasks.map(t => (
                <div key={t.id}>{t.task}</div>
            ))}</div>
        default:
            return <div>dummy</div>
    }
}
