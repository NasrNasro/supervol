import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { addCommission, addTotalCommission, removeCommission, removeTotalCommission, setCommission, setTotalCommission } from '../redux/actions/commissionActions'
import './SendColis.css'

function SendColis() {    
    const dispatch=useDispatch()
    const {commission,totalCommission}=useSelector(state=>state.commissionReducer)
    const [total, setTotal]=useState(0)
    const handleChange=e=>{
        dispatch(setCommission(e.target.value))
        if (e.target.value==="") {return setTotal(0)}
        if (e.target.value <0 ) {return setTotal(0)}
        setTotal(parseFloat(e.target.value)*1.2);
        dispatch(setTotalCommission(commission))
    }
    // handle add one
    const handleAddOne=()=>{
        dispatch(addCommission());
        dispatch(addTotalCommission());
    }
    // handle remove one
    const handleRemoveOne=()=>{
        dispatch(removeCommission());
        dispatch(removeTotalCommission())
    }
  return (
    <>
    <Navbar />
    <div>
        <div className='cell1'>
            <div className='title'>
                <h1>Creéer une annonce sur superVol, le site de référence du covoiturage de colis</h1>
            </div>
            <div className='cell2'>
                <div className='cell3'>
                    <input className='element' placeholder="Ville de départ" />
                    <input className='element' placeholder="Ville d'arrivée" />
                    <input className='element' type='date' placeholder='Date' />
                </div>
                <div className='cell4'>
                    <label className='label1'>Type de service : </label>
                    <div className='cell8'>
                        <div className='cell5'>
                            <input type="radio" id="alert_form_option_0" name="alert_form[option]" required="required" value="0"  />
                            <label className='label3' for="alert_form_option_0" >Je veux envoyer un colis</label>
                        </div>
                        <div className='cell5'>
                            <input type="radio" id="alert_form_option_1" name="alert_form[option]" required="required" value="1" />
                            <label className='label3' for="alert_form_option_1" >Je veux transporter un colis</label>
                        </div>
                        <div className='cell5'>
                            <input type="radio" id="alert_form_option_2" name="alert_form[option]" required="required" value="2" />
                            <label className='label3' for="alert_form_option_2" >Je veux acheter et recevoir un colis</label>
                        </div>
                    </div>
                </div>
                <div className='cell6'>
                    <div className='cell7'>
                        <select id="alert_form_product" >
                            <option value="1" className="item1">Documents</option>
                            <option value="2" className="item1">Vêtements</option>
                            <option value="3" className="item1">Clés</option>
                            <option value="4" className="item1">Livres</option>
                            <option value="5" className="item1">Autres</option>
                            <option value="6" className="item1">Bijoux</option>
                            <option value="7" className="item1">Produits électroniques</option>
                        </select>
                    </div>
                    <div className='cell7'>
                        <select id="alert_form_product" >
                            <option value="Poids approximatif">Poids approximatif</option>
                            <option value="1" className="item1">0g - 500g</option>
                            <option value="2" className="item1">500g - 1Kg</option>
                            <option value="3" className="item1">1Kg - 2Kg</option>
                            <option value="4" className="item1">Plus de 2Kg</option>
                        </select>
                    </div>
                    <div className='cell7' id='cell7'>
                        <input type="file" id="alert_form_attachments" class="input-upload" />
                        <span className='span1'>Ajouter photos, documents</span>
                    </div>
                </div>
                <div className='cell9'>
                    <label className='label4'>Dimension:</label>
                    <div className='cell10'>
                        <img src='/enveloppe.jpg' alt='colis' style={{height:'30px', width:'30px'}}/>
                        <div className='cell11'>
                            <input type="radio" id="alert_form_dimension_0" value="S" />
                            <label for="alert_form_dimension_0" className='label5'>Petit</label>
                        </div>
                    </div>
                    <div className='cell10'>
                        <img src='/enveloppe.jpg' alt='colis' style={{height:'30px', width:'30px'}}/>
                        <div className='cell11'>
                            <input type="radio" id="alert_form_dimension_1" value="M" />
                            <label for="alert_form_dimension_1" className='label5'>Petit</label>
                        </div>
                    </div>
                    <div className='cell10'>
                        <img src='/enveloppe.jpg' alt='colis' style={{height:'30px', width:'30px'}}/>
                        <div className='cell11'>
                            <input type="radio" id="alert_form_dimension_2" value="G" />
                            <label for="alert_form_dimension_2" className='label5'>Petit</label>
                        </div>
                    </div>
                    <div className='cell10'>
                        <img src='/enveloppe.jpg' alt='colis' style={{height:'30px', width:'30px'}}/>
                        <div className='cell11'>
                            <input type="radio" id="alert_form_dimension_3" value="TG" />
                            <label for="alert_form_dimension_3" className='label5'>Petit</label>
                        </div>
                    </div>
                </div>
                <textarea id="alert_form_description" placeholder="Décrire l’objet à envoyer: nature de l’objet, poids, dimension, etc et donnez des détails sur les modalités préférés de transport: lieu du rendez-vous, lieu de dépôt etc."></textarea>
                <div className='cell12'>
                    <div className='cell13'>
                        <label className='label6'>Bonus voyageur :</label>
                        <div className='commission-box'>
                            <button className='minus-button' onClick={handleRemoveOne}></button>
                            <div className='commission'>
                                <input type="number" min={0} id="alert_form_comission" value={commission} onChange={handleChange}/>
                            </div>
                            <button className='plus-button' onClick={handleAddOne}></button>
                        </div>
                    </div>
                    <div className='cell14'> 
                        <label className='label7'>Total :</label>
                        <div className='prix-total'>
                            <input id="alert_form_total" type="text" value={totalCommission} disabled=""></input>
                            €
                        </div>
                        <span className='span2'>Avec prélèvement de commission</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default SendColis