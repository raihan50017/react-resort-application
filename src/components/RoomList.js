import React from 'react'
import { RoomConsumer } from '../context';
import Room from '../components/Room';

export default function RoomList({rooms}) {
    if(rooms.length===0){
        return(
           <div className="empty-search">
               <h3>Unfortunately no rooms matched your searched parameters</h3>
           </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item=>{
                         return(
                             <Room key={item.id} room={item}></Room>
                         )
                    })
                }
            </div>
        </section>
    )
}
