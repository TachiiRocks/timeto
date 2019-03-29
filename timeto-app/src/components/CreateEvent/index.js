import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' 
import './index.sass'


class CreateEvent extends Component {
    state = { title: '', description: '' , date: '' , city : '', address: '' , category: ''}

    handleTitleInput = event => this.setState({ title: event.target.value })
    handleDescriptionInput = event => this.setState({ description: event.target.value })
    handleDateInput = event => this.setState({ date: event.target.value })
    handleCityInput = event => this.setState({ city: event.target.value })
    handleAddressInput = event => this.setState({ address: event.target.value })
    handleCategorySelect = event => this.setState({ category: event.target.value })


    handleFromSubmit = event => {
        event.preventDefault()
        const { state: { title, description, date, city, address, category}, props: { onCreateEvent } } = this
        onCreateEvent(title, description, date, city, address, category)
    }
    
  

    render() {
        const { handleTitleInput, 
            handleDescriptionInput, 
            handleDateInput , 
            handleCityInput, 
            handleAddressInput,
            handleCategorySelect ,
            handleFromSubmit } = this

        return (


          <section className="createEvent">
            <div className="createEvent__form">
            <form onSubmit={handleFromSubmit}>
              <h1 className="createEvent__form-h1">Create event</h1>

                <div className="createEvent__form-title">
                <input onChange={handleTitleInput} className="createEvent__form-input" type="text" placeholder="Title" required/>
                </div>

                <div className="createEvent__form-description">
                <textarea onChange={handleDescriptionInput} className="createEvent__form-input" maxLength="400" type="text" placeholder="Description of the event, meeting point, time... Max: 400 characters" required/>
                </div>

                <div className="createEvent__form-date">
                <input onChange={handleDateInput}className="createEvent__form-input" min="2019-03-21" type="date" placeholder="Date" required/>
                </div>

                <div className="createEvent__form-city">
                <input onChange={handleCityInput} className="createEvent__form-input" type="text" placeholder="City" required/>
                </div>

                <div className="createEvent__form-address" >
                <input onChange={handleAddressInput} className="createEvent__form-input" type="text" placeholder="Address" required/>
                </div>

                <div className="createEvent__form-category">
                <select className="createEvent__form-select" onChange={handleCategorySelect}>
                    <option>Category...</option>
                    <option value="5c92035ce7179a0e40897dc3">Party</option>
                    <option value="5c9203fbe7179a0e40897e3c">Food</option>
                    <option value="5c920432e7179a0e40897e50">See Matches</option>
                    <option value="5c92045ae7179a0e40897e6f">Do Sport</option>
                    <option value="5c920480e7179a0e40897e74">Drink Something</option>
                    <option value="5c9204a7e7179a0e40897e80">Trip</option>
                    <option value="5c9204d3e7179a0e40897e93">Study</option>
                    <option value="5c9204fce7179a0e40897eb1">Cinema</option>
                    <option value="5c920531e7179a0e40897ec5">Dance</option>
                    <option value="5c92055be7179a0e40897eda">Family</option>
                    <option value="5c92057de7179a0e40897ef1">Photografy</option>
                    <option value="5c920599e7179a0e40897f11">Video Games</option>
                </select>
                </div>

                <div className="button-primary-action">
                    <button className="createEvent__form-button createEvent__form-button--blue">
                        Create event
                    </button>
                </div>

                <div className="button-secondary-action">
                    <button className="createEvent__form-button createEvent__form-button--green" onClick={() => this.props.history.push('/home')}>
                            Home
                    </button>
                </div>

            </form>
            </div>
          </section>     
      )


    }
}

export default  withRouter(CreateEvent)