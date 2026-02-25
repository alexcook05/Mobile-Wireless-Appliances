import {Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

function Title(props){
    return(
        // Return the passed text within text component, with title styling
        <Text style={styles.title}>{props.children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 65,
        textAlign: "center",
        color: Colors.primary300,
        fontFamily: "doodle",
        textShadowColor: Colors.primary400,
        textShadowRadius: 25,
        textShadowOffset: {width: 1, height: 1}
    }
})