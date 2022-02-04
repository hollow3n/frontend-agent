import React, { useState } from 'react';
import { Button, Select, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function CreateCompte() {
    let history = useHistory();

    const [solde, setSolde] = useState(0);
    const [client, setClient] = useState('');
    const date = new Date()

    const clients = [
        {key: "1", value:'madame', label: 'Mme'},
        {key: "2", value:'monsieur', label: 'M.'}
    ]

    const postData = () => {
        axios.post(`http:localhost:9999/agent/compte/`, { 
            solde,
            date,
            client
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <h4>Nouveau compte</h4>
                <div>
                <Form.Field>
                    <Select placeholder= 'Trouver un client...' options = {clients} onChange={(e) => setClient(e.target.value)}/>
                </Form.Field>
                </div>
                <h6>ou</h6>
                <Link to="/createClient">
                    <Form.Field>
                        <Button>Ajouter un nouveau client</Button>
                    </Form.Field>
                </Link>
                <br/><br/>
                <Form.Field>
                    <label>Solde initial</label>
                    <input type="number" onChange={(e) => setSolde(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
