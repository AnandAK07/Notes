import React from 'react'
import { INCREMENT,DECREMENT,RESET } from './actionType'

export const increament = (payload) => {
  return {type:INCREMENT,payload:payload}
}

export const decrement = (payload) => {
  return {type:DECREMENT,payload:payload}
}

export const reset = (payload) => {
  return {type:RESET,payload:payload}
}

export const resetWithOutPayload = () => {
  return {type:RESET}
}

