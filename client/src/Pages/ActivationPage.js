import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function ActivationPage() {
    const {activationcode} = useParams()
    axios.post(`/api/auth/verifyuser/${activationcode}`)
  return (
    <div>
        Activation Page: Your account is activated successfully !
    </div>
  )
}

export default ActivationPage