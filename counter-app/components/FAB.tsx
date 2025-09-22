import { Text, Pressable, StyleSheet, type StyleProp, type ViewStyle, type TextStyle } from 'react-native'

interface Props extends React.ComponentProps<typeof Pressable> {
	children?: React.ReactNode
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	position?: 'left' | 'right'
}

export default function FAB({ children, position = 'right', style, textStyle, ...restProps }: Props) {
	return (
		<Pressable style={({ pressed }) => [
				styles.button, styles[position], pressed && styles.buttonPressed, style
			]} 
			{...restProps}
		>
			<Text style={[styles.text, textStyle]}>{children}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {	
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65658f',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0,height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
	buttonPressed: {
		opacity: 0.7,
	},
	text: {
		color: '#fff',
		fontSize: 20,
	},
	right: { right: 20 },
	left: { left: 20 },
});