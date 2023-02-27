import api from '@/service'
import * as types from './mutation-types'
import { config } from '@/modules/auth/storage'

export const ActionDoctorsList = ({ commit }) => (
  api.get("/medicos", config).then(res => {
    commit(types.SET_DOCTORS_LIST, res.data)
  })
)

export const ActionSetDoctorSelected = ({ commit }, payload) => (
  api.get(`/medicos/${payload}`, config).then(res => {
    commit(types.SET_DOCTOR_SELECTED, res.data)
  })
)

export const ActionPutDoctorSelected = ({ commit }, payload) => (
  api.put(`/medicos/${payload.id}`, payload, config).then(res => {
    commit(types.SET_DOCTOR_SELECTED, res.data)
  })
)

export const ActionSetPacientsByDoctor = ({ commit }, payload) => (
  api.get(`/medicos/${payload}/pacientes`, config).then(res => {
    commit(types.SET_PACIENT_BY_DOCTOR, res.data)
  })
)

export const ActionPostDoctor = (payload, values) => (
  api.post('medicos', values, config).then(res => {
    console.log(values)
    console.log(res)
  })
)