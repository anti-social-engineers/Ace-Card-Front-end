import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios'
import config from '../../../../../config/config'
import { async } from 'q';
import { ReactComponent as RegisterFinishedSVG } from '../../../../../Styles/img/svg/finishedregister.svg'

class RegisterFinished extends Component {
    constructor(props){
        super(props)
    }
    state = {
        body: 'null',
        result:'',
        img:''

    }

    
    componentWillMount =() =>{
        const state = this.props.values
        const header = 'Bearer ' + localStorage.getItem('jwt token')

        console.log(state)

        var formData = new FormData()
            formData.set('address',state.straat)   
            formData.set('address_number',state.huisnr)   
            formData.set('address_annex',state.toevoeging)   
            formData.set('city',state.woonplaats)   
            formData.set('postalcode',state.postcode)   
            formData.set('first_name',state.voornaam)   
            formData.set('last_name',state.achternaam)   
            formData.set('gender',state.geslacht)   
            formData.set('dob',state.geboortedatum)   
            formData.append('profile_image',state.file[0])
        for (var i of formData.keys()){
        }
        for (var v of formData.values()){
            console.log(v)
        }

        axios.post(config.API_URL+'/api/acecard',formData,{
            headers: {Authorization:header}})
        .then(res => {   
            console.log(res)
            this.setState({result:'Registratie Voltooid', body:'Bedankt voor het registreren bij Ace! We heten u welkom.', img:<RegisterFinishedSVG/>
        })

        })
        .catch(err => {
            console.log(err) 
            console.log(err.response.data)  
            if(err == 'Error: Request failed with status code 401'){
                console.log('handling 401');  
                this.setState({result:'Registratie onvoltooid', body:'Er is iets fout gegaan. U heeft geen rechten. U heeft waarschijnlijk gerommeld met javascript. :)'})
            }
            if(err == 'Error: Request failed with status code 409'){
                this.setState({result:'Registratie onvoltooid', body:'Er is iets fout gegaan. U heeft al een Ace card. U heeft waarschijnlijk gerommeld met javascript. :)'})
            }
            if(err == 'Error: Request failed with status code 413'){
                this.setState({result:'Registratie onvoltooid', body:'Er is iets fout gegaan. Afbeelding te groot. U heeft waarschijnlijk gerommeld met javascript. :)'})
            }
            if(err == 'Error: Request failed with status code 422'){
                this.setState({result:'Registratie onvoltooid', body:'Er is iets fout gegaan. Er is een foute input mee gegeven. U heeft waarschijnlijk gerommeld met javascript. :)'})
            }
            if(err == 'Error: Request failed with status code 500'){
                this.setState({result:'Registratie onvoltooid', body:'Er is iets fout gegaan. Er zijn problemen met de server. U heeft waarschijnlijk gerommeld met javascript. :)'})
            }        
        })

    }

    render() {
        return (
            <div className="col">
                <div className="row no-gutterr py-3">
                    <Fade>
                        <h1>{this.state.result}</h1>
                    </Fade>
                </div>
                <div className="row no-gutterr">
                    <p>{this.state.body} {this.props.name}!</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div className="row no-gutterr">
                    {this.state.img}
                </div>
            </div>   
        );
    }
}

export default RegisterFinished;
