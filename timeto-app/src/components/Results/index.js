import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom' 
import logic from '../../logic'
import Search from '../Search'
import './index.css'
import feedback from  '../../plugins/feedback'

class Results extends Component {
    state = { events: null,results: this.props.results }


    componentDidMount(){
        const {match:{params:{query}}} = this.props
        try {
            logic.listEventsByQuery(query)
                .then(results => {
                    this.setState({ results })
                })
                .catch( ({message}) => {  
                    feedback(message , "error")
                }) 
        } catch ({message}) {  
            feedback(message , "error")
        }
    }

    componentWillReceiveProps({match:{params:{query}}}){
        try {
            logic.listEventsByQuery(query)
                .then(results => {
                    this.setState({ results })
                })
                .catch( ({message}) => {
                    feedback(message , "error")
                }) 
        } catch ({message}) {
            feedback(message , "error")
        }
    }

    

    render(){
        const {handleSearch,state:{results}  } = this
        return(
            <section className="results">
            <Search onSearch={handleSearch} />

             {(results || []).map(result => ( 
                 <div className="results__card" >
                <Link className="results__card-link" to={`/event/${result.id}`}> 
                    <img className="results__card-image" src={result.category.image} alt={result.title} />
                    <h2 className="results__card-title">{result.title}</h2>
                </Link>
                 </div>            
            )
            )}

            </section>
        )
    }
}

export default withRouter(Results)