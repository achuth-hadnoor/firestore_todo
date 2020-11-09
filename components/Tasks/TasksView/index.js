import React from 'react'
import { TODAY } from '../../../utils/constants'
import { Navbar } from "../../Nav.js";

export default function TasksView({ active, tasks }) {
    switch (active) {
        case TODAY:
            return (
            <div>
            <Navbar />
                    {tasks.map(t => (
                    <div key={t.id}>{t.task}</div>
                ))}
            </div>)
        default:
            return <div>dummy</div>
    }
}
