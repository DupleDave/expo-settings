import * as Settings from 'expo-settings';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [theme, setTheme] = React.useState<string>(Settings.getTheme());

  React.useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  // Toggle between dark and light theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <View style={{backgroundColor:theme === 'dark' ? '#333':'#AAA', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={
        { color:theme === 'dark' ? '#AAA':'#333', fontSize: 20, fontWeight: 'bold' }
        }>Theme: {Settings.getTheme()}</Text>
      <Button 
      title={`Set theme to ${nextTheme}`} onPress={() => Settings.setTheme(nextTheme)} />
    </View>
  );

  
}
