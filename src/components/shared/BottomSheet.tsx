import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomSheetModalProvider, useBottomSheetModal, BottomSheetModal } from '@gorhom/bottom-sheet';

const DraggableModal = () => {
  const { dismiss } = useBottomSheetModal();
  const bottomSheetRef = useRef<BottomSheetModal>(null); // Specify the type

  const handlePresentModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePresentModal}>
        <Text>Open Draggable Modal</Text>
      </TouchableOpacity>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['30%', '50%', '90%']}
          handleComponent={() => null} // Hide the default handle
        >
          <View style={{ backgroundColor: 'white', padding: 16 }}>
            <Text>Draggable Modalkk Content</Text>
            <TouchableOpacity onPress={() => dismiss()} style={{ marginTop: 16 }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default DraggableModal;
