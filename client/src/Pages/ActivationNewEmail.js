import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function ActivationNewEmail() {
    const {activationcode} = useParams()
    axios.post(`/api/auth/verifyuser/${activationcode}`)
  return (
    <div>
        Activation Page: Your new Email is activated successfully !
    </div>
  )
}

export default ActivationNewEmail