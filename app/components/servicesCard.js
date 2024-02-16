import { Card } from '@chakra-ui/react'
import React from 'react'
import { TbLayoutDashboard } from "react-icons/tb";

const ServicesCard = ({ item = [] }) => {
  return (
    <Card>
      <TbLayoutDashboard />
      
    </Card>
  )
}

export default ServicesCard