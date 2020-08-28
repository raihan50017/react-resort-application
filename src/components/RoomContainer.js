import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading';
function RoomContainer({context}){
    const {loading,sortedRooms,rooms}=context;
    if(loading){
        return(
            <Loading></Loading>
        )
    }
    return (
        <div>
            <RoomFilter rooms={rooms}> </RoomFilter>
            <RoomList rooms={sortedRooms}></RoomList>
        </div>
    )  
}

export default withRoomConsumer(RoomContainer);
/*
import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from './Loading';

export default function RoomContainer() {
    return(
        <RoomConsumer>
        {
            (value)=>{
             
                const {loading,sortedRooms,rooms}=value;
                if(loading){
                    return(
                        <Loading></Loading>
                    )
                }
                return (
                    <div>
                        hellow from roomcontainer
                        <RoomFilter rooms={rooms}> </RoomFilter>
                        <RoomList rooms={sortedRooms}></RoomList>
                    </div>
                )
            }
        }
    </RoomConsumer>
    );
}
*/