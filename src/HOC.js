import React from 'react'
import Spiner from './Spiner'

const HOC = WrappedComponent => {
    return props => props.isLoading ? <Spiner/> : <WrappedComponent {...props} /> 
}

export default HOC