import React, { useState, useEffect } from 'react';
import { Button, Select, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function UpdateClient() {
    let history = useHistory();
    const [id, setID] = useState('')
    const [civilite, setCivilite] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [typePiece, setTypePiece] = useState('')
    const [validite, setValidite] = useState('')
    const [dateNaissance, setDateNaissance] = useState('')
    const [paysNationalite, setPaysNationalite] = useState('')
    const [paysResidence, setPaysResidence] = useState('')
    const [adresse, setAdresse] = useState('')
    const [profession, setProfession] = useState('')
    const [ville, setVille] = useState('')
    const [gsm, setGSM] = useState('')
    const [email, setEmail] = useState('')
    
    const type_civilite = [
        {key: "1", value:'madame', label: 'Mme'},
        {key: "2", value:'monsieur', label: 'M.'}
    ]

    const type_piece_identite = [
        {key: "1", value:'passeport', label: 'Passeport'},
        {key: "2", value:'cin', label: 'CIN'}
    ]

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setPrenom(localStorage.getItem('Prénom'));
        setNom(localStorage.getItem('Nom'));
        setGSM(localStorage.getItem('Numéro'));
        setEmail(localStorage.getItem('Email'));
        setVille(localStorage.getItem('Ville'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:/client/${id}`, { 
            civilite,
            prenom,
            nom,
            typePiece,
            validite,
            dateNaissance,
            profession,
            paysNationalite,
            paysResidence,
            adresse,
            ville,
            gsm,
            email
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <h4>Modifier les informations du client {id}</h4>
                <Form.Field>
                    <Select placholder= 'Civilité...' options = {type_civilite} onChange={(e) => setCivilite(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Prénom</label>
                    <input placeholder='Prénom' onChange={(e) => setPrenom(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nom</label>
                    <input placeholder='Nom' onChange={(e) => setNom(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Select placeholder= 'Pièce...' options = {type_piece_identite} onChange={(e) => setTypePiece(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Validité : </label>
                    <input type = "date" onChange={(e) => setValidite(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Date de naissance : </label>
                    <input type = "date" onChange={(e) => setDateNaissance(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Profession : </label>
                    <input onChange={(e) => setProfession(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Pays (nationalité) : </label>
                    <input onChange={(e) => setPaysNationalite(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Pays (résidence) :</label>
                    <input onChange={(e) => setPaysResidence(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Adresse : </label>
                    <input onChange={(e) => setAdresse(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Ville : </label>
                    <input onChange={(e) => setVille(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>GSM : </label>
                    <input type = "tel" onChange={(e) => setGSM(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email : </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Button onClick={updateAPIData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
