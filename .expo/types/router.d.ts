/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/carte` | `/(tabs)/profil` | `/(tabs)/quizz` | `/..\.expo\types\navigationTypes` | `/_sitemap` | `/carte` | `/profil` | `/quizz` | `/screensProfil\mesInformations` | `/screensProfil\parametres`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
