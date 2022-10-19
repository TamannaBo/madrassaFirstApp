import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Mussa Mendes</Text>
                        <Text>Tamanna Sayed</Text>
                        <Text> Tamanna Sayed<Text>
<Text>My name is Tamanna and i am 17 years old. 
I am a student and i like to play 
video games in my free time<Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
