import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

interface IModalProps {
  bottomModal: boolean;
  setBottomModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const sortCategoryData = [
  {category: 'Health'},
  {category: 'Tech'},
  {category: 'Finance'},
  {category: 'Crypto'},
  {category: 'Cars'},
];

function BottomSheet({bottomModal, setBottomModal}: IModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setBottomModal(!setBottomModal);
  };

  return (
    <View>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <Modal
        isVisible={bottomModal}
        onBackdropPress={() => setBottomModal(false)}
        style={styles.modal}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationOutTiming={500}
        animationInTiming={900}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        onSwipeComplete={toggleModal}>
        <View style={styles.modalContent}>
          <View style={styles.barIconWrap}>
            <View style={styles.barIcon} />
          </View>

          <View>
            <View style={styles.filterAndResetWrap}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
                Filter
              </Text>
              <TouchableOpacity style={[styles.Btn, {borderColor: 'black'}]}>
                <Text style={styles.text}>Reset</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{marginTop: 20, fontWeight: '700', fontSize: 16}}>
                Sort By
              </Text>

              <View style={styles.sortWrapper}>
                {sortCategoryData.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.Btn}>
                    <Text style={styles.text}>{item.category}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
    </View>
  );
}

export default BottomSheet;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 20,
    minHeight: 300,
  },
  barIconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  filterAndResetWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    color: 'black',
  },
  Btn: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    minWidth: 100,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 20,
  },
});
