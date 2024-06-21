// Import necessary components
import React, { useRef, useMemo, forwardRef, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';

const ReelsBottomSheet = ({onClose}) => {
  // Create a reference to the BottomSheet
  const bottomSheetRef = useRef<any>(null);

  // Define snap points
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Function to close the bottom sheet
  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    if (onClose) onClose();
  }, [onClose]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Horizontal ScrollView</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {/* Replace these with your content */}
          <View style={styles.box}><Text>Item 1</Text></View>
          <View style={styles.box}><Text>Item 2</Text></View>
          <View style={styles.box}><Text>Item 3</Text></View>
          <View style={styles.box}><Text>Item 4</Text></View>
        </ScrollView>
        <Text style={styles.closeText} onPress={closeBottomSheet}>Close</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgrey',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    marginTop: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  }
});

export default ReelsBottomSheet;