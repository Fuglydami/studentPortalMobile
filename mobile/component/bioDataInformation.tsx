import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../contants/themes';
import {capitalizeFirstLetter} from '../contants/utils/helper';

export const YourDetails = ({data}: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <Text style={styles.text2}>Full name</Text>
        <Text style={styles.text1}>{capitalizeFirstLetter(data.fullName)}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Matric No</Text>
        <Text style={styles.text1}>{data.matricNo}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Programme</Text>
        <Text style={styles.text1}>{data.programme}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Level</Text>
        <Text style={styles.text1}>{data.level}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Session</Text>
        <Text style={styles.text1}>{data.session}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Faculty</Text>
        <Text style={styles.text1}>{data.faculty}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Department</Text>
        <Text style={styles.text1}>{data.department}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Sex</Text>
        <Text style={styles.text1}>{data.gender}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Email</Text>
        <Text style={styles.text1}>{data.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Phone No</Text>
        <Text style={styles.text1}>{data.phoneNumber}</Text>
      </View>
    </View>
  );
};

export const NOKDetails = ({data}: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <Text style={styles.text2}>Full name</Text>
        <Text style={styles.text1}>{data.nxtFullName}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Email</Text>
        <Text style={styles.text1}>{data.nxtEmail}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Phone No</Text>
        <Text style={styles.text1}>{data.nxtPhoneNo}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Relationship</Text>
        <Text style={styles.text1}>{data.nxtRelationship}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  wrapper: {
    gap: 40,
    marginBottom: 30,
  },

  container: {
    paddingHorizontal: 30,
  },
  text1: {
    color: Colors.primaryBlack,
    fontSize: 16,
    fontWeight: '600',
  },
  text2: {
    fontSize: 16,
    color: '#808080',
  },
});
