import React, { useState } from 'react';
import { Button, Form, Checkbox, Select } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function CreateTransfert() {
    let history = useHistory();
    const [montant, setMontant] = useState(0);
    const [client, setClient] = useState('');
    const [beneficiaire, setBeneficiaire] = useState('')
    const [motif, setMotif] = useState('')
    const [notification, setNotification] = useState(true)
    const [frais, setFrais] = useState(0)
    const [total, setTotal] = useState(0)
    
    const clients = [
        {key: "1", value:'madame', label: 'Mme'},
        {key: "2", value:'monsieur', label: 'M.'}
    ]

    const beneficiaires = [
        {key: "1", value:'madame', label: 'Philippine'},
        {key: "2", value:'monsieur', label: 'Philippe'}
    ]

    const type_frais = [
        {key: "1", value:'1', label: 'À la charge du client'},
        {key: "2", value:'2', label: 'À la charge du bénéficiaire'},
        {key: "3", value:'3', label: 'Charges partagées'}
    ]

    const postData = () => {
        axios.post(`https://localhost:9999/transfert/`, {
            montant,
            client,
            beneficiaire,
            motif,
            notification,
            frais,
            total
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <h2>Nouveau transfert</h2>
                <div>
                <Form.Field>
                    <Select placholder= 'Trouver un client...' options = {clients} onChange={(e) => setClient(e.target.value)}/>
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
                    <label>Montant</label>
                    <input type="number" onChange={(e) => setMontant(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Motif</label>
                    <input type="text" onChange={(e) => setMotif(e.target.value)}/>
                </Form.Field>
                <h5>- Paramètres -</h5>
                <Form.Field>
                    <Checkbox label = 'Envoyer une notification au bénéficiaire (aux frais du client)' checked= {notification} onChange={(e) => setNotification(!notification)}/>
                </Form.Field>
                <Form.Field>
                <Select placeholder= 'Frais...' options = {type_frais} onChange={(e) => setFrais(e.target.value)}/>
                </Form.Field>
                <h5>- Bénéficiaire -</h5>
                <Form.Field>
                    <Select placeholder= 'Trouver un bénéficiaire...' options = {beneficiaires} onChange={(e) => setBeneficiaire(e.target.value)}/>
                </Form.Field>
                <h6>ou</h6>
                <Link to="/createBeneficiaire">
                    <Form.Field>
                        <Button>Ajouter un nouveau bénéficiaire</Button>
                    </Form.Field>
                </Link>
                <br/><br/>
                <h5>------ Total à payer ------</h5>
                <div>{montant}</div>
                <Button onClick={postData} type='submit'>Enregistrer</Button>
            </Form>
        </div>
    )
}
