import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';

const RegistroConsumo = () => {
  const [registros, setRegistros] = useState([
    { id: 1, nombre: 'Producto 1', codigo: 'ABC123' },
    { id: 2, nombre: 'Producto 2', codigo: 'DEF456' },
    { id: 3, nombre: 'Producto 3', codigo: 'GHI789' },
    { id: 4, nombre: 'Producto 4', codigo: 'JKL012' },
    { id: 5, nombre: 'Producto 5', codigo: 'MNO345' },
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('nombre');

  const onChangeBusqueda = (text) => {
    setBusqueda(text);
  };

  const onChangeFiltro = (value) => {
    setFiltro(value);
    setBusqueda('');
  };

  const registrosFiltrados = registros.filter((registro) => {
    if (filtro === 'nombre') {
      return registro.nombre.toLowerCase().includes(busqueda.toLowerCase());
    } else if (filtro === 'codigo') {
      return registro.codigo.toLowerCase().includes(busqueda.toLowerCase());
    }
    return true;
  });

  const onChangeFecha = (value) => {
    console.log(value);
  };

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Registro consumo</Text>
      <View style={{ marginBottom: 16 }}>
        <Text>Tiempo de consumo:</Text>
        <Picker selectedValue={null} onValueChange={onChangeFecha}>
          <Picker.Item label="Desayuno" value="Desayuno" />
          <Picker.Item label="Merienda mañana" value="MeriendaM" />
          <Picker.Item label="Almuerzo" value="Almuerzo" />
          <Picker.Item label="Merienda tarde" value="MeriendaT" />
          <Picker.Item label="Cena" value="Cena" />
        </Picker>
      </View>
      <View style={{ marginBottom: 16 }}>
        <Text>Filtrar por:</Text>
        <Picker selectedValue={filtro} onValueChange={onChangeFiltro}>
          <Picker.Item label="Nombre" value="nombre" />
          <Picker.Item label="Código" value="codigo" />
        </Picker>
      </View>
      <View style={{ marginBottom: 16 }}>
        <Text>Buscar:</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 4 }}
          onChangeText={onChangeBusqueda}
          value={busqueda}
        />
      </View>
      <View>
        {registrosFiltrados.map((registro) => (
          <View key={registro.id} style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text style={{ flex: 1 }}>{registro.nombre}</Text>
            <Text style={{ flex: 1 }}>{registro.codigo}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RegistroConsumo;