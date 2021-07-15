import React from 'react'
import Example from './Example'
import { DndProvider } from 'react-dnd'
import createBackend from 'react-dnd-html5-backend';
import {Link} from 'react-router-dom';

export default function App() {
    return (
        <div className="w-full">
            <DndProvider backend={createBackend}>
                <div className="md:flex" style={{margin:"10px 30px 0 30px"}}>
                    <div className="md:w-1/6 mr-12">
                        <Link to='/charting/demographic'>  
                            <img style={{width:'200px'}} src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Woman paying for a purchase" />
                        </Link>
                    </div>
                    <div className="md:1-2/6 mt-4 md:mt-0 md:ml-12">
                        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold mt-8">AMENORRHEA, EMILY</div>
                        <div className="mt-16">
                            <span>12/23/1984,  31 y/o female</span>
                        </div>
                        <div className="mt-16">
                            <span>John Jones (father) - 706 678 2478</span>
                        </div>
                    </div>
                </div>
                <Example />
            </DndProvider>
        </div>
    )
}