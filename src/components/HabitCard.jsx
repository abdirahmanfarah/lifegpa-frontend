import React, { useState } from 'react'
import Habits from '../components/CreateHabit'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

const Habit = props => {
  const dispatch = useDispatch()
  return (
    <Card>
      <DescriptionInput> {props.description} </DescriptionInput>
      <p> {props.type} </p>
      <Buttons>
        <DeleteButton onClick={() => dispatch(props.deleteHabit(props.id))}>
          Delete
        </DeleteButton>
        <Button onClick={() => props.editHabit(props.id)}>Edit</Button>
      </Buttons>
    </Card>
  )
}
export default Habit

const DescriptionInput = styled.div`
  width: 20%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px auto;
  text-align: center;
  width: 60%;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
`
const Button = styled.button`
  border-radius: 5px;
  background: white;
  width: 60px;
  height: 30px;

  &:hover {
    background: yellow;
  }
`
const DeleteButton = styled.button`
  border-radius: 5px;
  background: white;
  width: 60px;
  height: 30px;
  &:hover {
    background: pink;
  }
`
