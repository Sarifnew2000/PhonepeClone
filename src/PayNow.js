import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    
    TextInput,
  } from 'react-native';
  import React, { useState } from 'react';
  import {
    moderateScale,
    moderateVerticalScale,
    scale,
    verticalScale,
  } from 'react-native-size-matters';
  import Modal from 'react-native-modal';
  import { useNavigation } from '@react-navigation/native';
  
  const PayNow = () => {
    const [amount, setAmount] = useState('');
    const navigation = useNavigation();
  
    const [modalOpen, setModalOpen] = useState(false);
  
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.subHeader}>

            <TouchableOpacity style={styles.backBtn}>
              <Image
                source={require('../images/left.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.title}> Pay</Text>
            <TouchableOpacity style={styles.backBtn}>
              <Image
                source={require('../images/help.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
  
        <FlatList
          data={['amount', 'add_message']}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            switch (item) {
              case 'amount':
                return (
                  <View style={styles.cardView}>
                    <View style={styles.topView}>
                      {/* Your content for amount */}
                    </View>
                  </View>
                );
              case 'add_message':
                return (
                  <View
                    style={[
                      styles.amountView,
                      { marginBottom: moderateVerticalScale(20) },
                    ]}>
                    {/* Your content for message */}
                  </View>
                );
              default:
                return null;
            }
          }}
        />
  
        <TouchableOpacity
          style={[
            styles.proceedToPay,
            { backgroundColor: amount !== '' ? 'purple' : '#929292' },
          ]}
          onPress={() => {
            setModalOpen(true);
          }}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
  
        <Modal visible={true}

          isVisible={modalOpen}
          backdropOpacity={0.2}
          style={styles.modaView}>
          {/* Your modal content */}
        </Modal>
      </View>
    );
  };
  
  export default PayNow;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
      },
      header: {
        width: '100%',
        height: verticalScale(85),
        backgroundColor: 'purple',
        justifyContent: 'flex-end',
      },
      subHeader: {
        width: '100%',
        height: verticalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(15),
      },
      backBtn: {
        width: scale(50),
        height: scale(50),
        justifyContent: 'center',
        alignItems: 'center',
      },
      backIcon: {
        width: scale(24),
        height: scale(24),
        tintColor: 'white',
      },
      title: {
        color: 'white',
        fontSize: moderateScale(20),
      },
      cardView: {
        width: '94%',
    
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: moderateVerticalScale(10),
        borderRadius: moderateScale(5),
      },
      topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(15),
      },
      leftView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      nameView: {
        width: scale(40),
        height: scale(40),
        backgroundColor: '#929292',
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
      },
      nameChar: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
      },
      name: {
        fontSize: 18,
        color: '#000',
        marginLeft: moderateScale(10),
      },
      upi_id: {
        fontSize: 14,
        color: '#929292',
        marginLeft: moderateScale(10),
        marginTop: moderateScale(5),
      },
      viewHistory: {
        color: 'purple',
        fontSize: moderateScale(16),
        fontWeight: '600',
      },
      amountView: {
        width: '94%',
        height: verticalScale(45),
        borderWidth: 0.5,
        alignSelf: 'center',
        borderColor: '#929292',
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
        alignItems: 'center',
        marginTop: moderateVerticalScale(20),
      },
      input: {
        fontSize: 25,
        marginLeft: moderateScale(15),
        fontWeight: '600',
      },
      proceedToPay: {
        width: '100%',
        height: verticalScale(60),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      },
      payNowText: {
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: '600',
      },
      modaView: {
        margin: 0,
      },
      mainView: {
        backgroundColor: 'white',
        width: '100%',
    
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        padding: moderateScale(10),
      },
      modalTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(10),
      },
      payable: {
        fontWeight: '700',
        color: 'black',
        fontSize: moderateScale(16),
      },
      modalTopRightView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      confirmAmount: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        marginRight: moderateScale(20),
      },
      divider: {
        width: '100%',
        height: verticalScale(0.5),
        backgroundColor: '#929292',
        marginTop: moderateVerticalScale(20),
        opacity: 0.4,
      },
      bankView: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: '#f2f2f2',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      bankLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      bankRightView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      logo: {
        width: scale(20),
        height: scale(20),
        resizeMode: 'contain',
        marginLeft: moderateScale(10),
      },
      upi_view: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      bankAccount: {
        color: '#929292',
        fontSize: moderateScale(12),
      },
      confirmPayNow: {
        width: '94%',
        height: verticalScale(40),
        backgroundColor: 'purple',
        borderRadius: moderateScale(30),
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        marginBottom: moderateVerticalScale(40),
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  