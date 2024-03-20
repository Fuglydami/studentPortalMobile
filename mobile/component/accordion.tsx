import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Colors} from '../contants/themes';
// import CustomRadioButton from './CustomRadioButton';
import assets from '../contants/assets';

export interface Course {
  id: string;
  courseTitle: string;
  courseCode: string;
  unit: string;
}

interface AccordionProps {
  accordiontitle: string;
  content: Course[];
  courseAction: (props: {isSelected: boolean; courseId: any}) => JSX.Element;
}

const Accordion: React.FC<AccordionProps> = ({
  accordiontitle,
  content,
  courseAction,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggle = (course: any) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(item => item !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const changeRadius = {
    borderBottomLeftRadius: isExpanded ? 0 : 15,
    borderBottomRightRadius: isExpanded ? 0 : 15,
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.Collasiblecontainer}>
        <View>
          <Text style={styles.text}>
            {item.courseCode}: {item.unit}
            {''}
          </Text>
          <Text style={styles.text}>{item.courseTitle}</Text>
        </View>
        <Pressable onPress={() => handleToggle(item)}>
          {courseAction({
            isSelected: selectedCourses.includes(item),
            courseId: item,
          })}
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      <Pressable onPress={toggleAccordion}>
        <View style={[styles.header, changeRadius]}>
          <Text style={styles.headerText}>{accordiontitle}</Text>
          <View style={styles.imageContainer}>
            <Image
              source={isExpanded ? assets.ArrorUpIcon : assets.ArrorDownIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </Pressable>

      {isExpanded && (
        <View style={styles.content}>
          <FlatList
            data={content}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.primaryBlack,
    fontWeight: '600',
    fontSize: 12,
  },
  Collasiblecontainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: Colors.accentGrey,
    borderBottomWidth: 1,
  },
  imageContainer: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 12,

    backgroundColor: Colors.lightestGreen,
  },
  headerText: {
    fontSize: 16,
    color: Colors.primaryBlack,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
  },
  wrapper: {
    margin: 10,
  },
});

export default Accordion;
