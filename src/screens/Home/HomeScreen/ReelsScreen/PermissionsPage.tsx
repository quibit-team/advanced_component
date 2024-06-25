import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useCameraPermission } from 'react-native-vision-camera'

const PermissionsPage = () => {
  const { requestPermission } = useCameraPermission()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Camera permission is required to use this app.</Text>
      <Button title="Grant Permission" onPress={requestPermission} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
})

export default PermissionsPage
