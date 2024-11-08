import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Utilisez votre projectId ici
const PROJECT_ID = "b5421322-dcf2-41d2-9cbf-393e768f53bb"; // Remplacez par votre `projectId`

// Configure le comportement des notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Fonction pour enregistrer les notifications et obtenir le token
export async function registerForPushNotificationsAsync(): Promise<string | null> {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Permission de notifications refusée !');
    return null;
  }

  // Utilisez projectId pour obtenir le token de notification
  token = (await Notifications.getExpoPushTokenAsync({ projectId: PROJECT_ID })).data;
  return token ?? null;
}

// Fonction pour envoyer une notification push
export async function sendPushNotification(expoPushToken: string, title: string, body: string) {
  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: expoPushToken,
      sound: 'default',
      title: title,
      body: body,
    }),
  });
}
