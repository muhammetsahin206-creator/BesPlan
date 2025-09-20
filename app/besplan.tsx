import { View, Text, Button, Alert } from 'react-native';

const BASE_URL = "https://ornek-api.com"; // kendi API adresin olursa buraya yazarsın

export default function BesPlanScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>BesPlan</Text>
      <Text style={{ marginBottom: 20 }}>Yıllık plan çıktısı almak için test ekranı</Text>
      <Button
        title="Plan Oluştur (Deneme)"
        onPress={() => Alert.alert("Başarılı", "Plan oluşturuldu (örnek)")}
      />
    </View>
  );
}
