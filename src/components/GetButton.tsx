import React, { useState } from 'react';
import {
  View,
  Button,
  Modal,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface GetButtonProps {
  title: string;
  apiFn: () => Promise<any>;
}

function GetButton({ title, apiFn }: GetButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [resultData, setResultData] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button
          title={title}
          onPress={() => {
            apiFn()
              .then((result) => {
                console.log(`${title}:`, result);
                setResultData(JSON.stringify(result, null, 2)); // Pretty print the JSON
                setModalVisible(true);
              })
              .catch((error) => {
                console.error(`${title} error:`, error);
              });
          }}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView style={styles.modalView} nestedScrollEnabled={true}>
          <Text style={styles.modalText}>{resultData}</Text>
        </ScrollView>
        <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    buttonGroup: {
      width: '100%',
      marginVertical: 5,
    },
    modalView: {
      flex: 1,
      marginTop: 22,
      padding: 20,
      backgroundColor: 'white',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'left',
      fontSize: 14,
      fontFamily: 'monospace',
    },
  });

export default GetButton;