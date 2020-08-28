import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"Free Cocktails",
                info:"lorem ipsum dolor sit ammet consectetur lorem ipsum dolor sit ammet consectetur"

            },
            {
                icon:<FaHiking></FaHiking>,
                title:"Endless Hiking",
                info:"lorem ipsum dolor sit ammet consectetur lorem ipsum dolor sit ammet consectetur"

            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"Free Shuttle-van",
                info:"lorem ipsum dolor sit ammet consectetur lorem ipsum dolor sit ammet consectetur"

            },
            {
                icon:<FaBeer></FaBeer>,
                title:"Strongest Beer",
                info:"lorem ipsum dolor sit ammet consectetur lorem ipsum dolor sit ammet consectetur"

            }
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="our services"></Title>
              <div className="services-center">
                {
                    this.state.services.map((item,index)=>{
                        return(
                          <article key={index} className="service">
                              <span>{item.icon}</span>
                              <h6>{item.title}</h6>
                              <p>{item.info}</p>
                          </article>
                        );
                    })
                }
              </div>
            </section>  
        );
    }
}

export default Services;