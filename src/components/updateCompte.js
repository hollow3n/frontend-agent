import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [client, setClient] = useState('');
    const [solde, setSolde] = useState(0);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setClient(localStorage.getItem('Client'));
        setSolde(localStorage.getItem('Solde'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:/compte/${id}`, { 
            solde
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <h2>Modifier les informations du compte</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>ID du compte : {id}</label>
                </Form.Field>
                <Form.Field>
                    <label>Propriétaire du compte : {client}</label>
                </Form.Field>
                <Form.Field>
                    <label>Solde :</label>
                    <input type="number" onClick={(e) => {setSolde(e.target.value)}} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
