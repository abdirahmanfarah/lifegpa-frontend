import React, { useState } from 'react'
import Habits from '../components/CreateHabit'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

const Habit = props => {
  const dispatch = useDispatch()
  return (
    <Card>
      <p> {props.description} </p>
      <p> {props.type} </p>
      <Button onClick={() => dispatch(props.deleteHabit(props.id))}>
        Delete
      </Button>
      <Button onClick={() => props.editHabit(props.id)}>Edit</Button>
    </Card>
  )
}
export default Habit

const Card = styled.div`
  border-radius: 10px;
  background: #f5deb3;
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  text-align: center;
  width: 80%;
`
const Button = styled.button`
  border-radius: 5px;
  background: pink;
`
