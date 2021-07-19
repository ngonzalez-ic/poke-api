/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './components/card/Card'

describe ('Card'),()=>{
  it('',()=>{
    render(<Card/>)
    expect(screen.queryAllByText())
  })
}