import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import BankItem from './src/Components/BankItem';
import { HomeTitle } from './src/Components/CardItems';
import Screen from './src/Components/Screen';
import { createDB, isConnectedToNetwork, shutdownDB } from './src/Utils/bd';
import { fetchData } from './src/Utils/utils';

const App = () => {
  const [banks, setBanks] = useState([])

  useEffect(() => {
    const fetchAndSetBanks = async () => {
      const data = await fetchData()
      createDB(data)
      setBanks(data)
    }

    isConnectedToNetwork().then(isConnected => {
      if (isConnected) {
        console.log('El dispositivo está conectado a Internet')
        
      } else {
        console.log('El dispositivo no está conectado a Internet')
      }
    })

    fetchAndSetBanks()

    return () => {
      shutdownDB()
    }
  }, [])

  

  const renderBank = ({ item }) => (
    <BankItem
      id={item.id}
      name={item.name}
      description={item.description}
      age={item.age}
      uri={item.uri}
    />
  );

  return (
    <Screen>
      <HomeTitle text={"Bancos Mexicanos en servicio"}/>
      <FlatList
        data={banks} 
        renderItem={renderBank} 
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  );
}

export default App;
