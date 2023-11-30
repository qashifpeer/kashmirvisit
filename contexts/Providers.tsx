"use client"

import {useState,useContext, useEffect,ReactNode } from 'react';

import { ThemeProvider } from 'next-themes'
import React from 'react';

interface ProvidersProps {
    children: ReactNode;
  }

const Providers:React.FC<ProvidersProps> = ({children}) => {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}

export default Providers