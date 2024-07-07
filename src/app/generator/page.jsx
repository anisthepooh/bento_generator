import React from 'react'
import {Dashboard} from './dashboard'
import { TooltipProvider } from '@/components/ui/tooltip'

const page = () => {
  return (
    <TooltipProvider>
      <Dashboard />
    </TooltipProvider>
  )
}

export default page