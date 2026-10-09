// Learning Path Data for Category 8: Mobile App Development
export const mobileDevData = {
  id: "mobile-development",
  title: "Mobile App Development",
  icon: "📱",
  role: "Mobile App Developer (Android / Flutter / React Native)",
  summary: "Master cross-platform mobile development with Flutter and React Native, native Android development with Kotlin/Java, mobile UI components, REST API consumption, and offline SQLite/Firebase databases.",
  technologies: [
    {
      id: "flutter-dart",
      name: "Flutter (Dart)",
      tagline: "Google's UI Toolkit for Building Multi-Platform Apps from a Single Codebase",
      beginnerFriendly: "Think of Flutter like a digital painter. Instead of relying on the phone's native buttons, Flutter paints every pixel, button, and animation directly onto the glass screen at 60 or 120 frames per second, so it looks identical on Android and iPhone.",
      whatIsIt: "Flutter is an open-source UI software development kit created by Google, powered by the Dart programming language. It enables developers to build natively compiled applications for mobile, web, and desktop from a single codebase.",
      whyUsed: "It eliminates writing separate codebases for iOS (Swift) and Android (Kotlin). Its 'Hot Reload' feature renders code changes on a running phone in milliseconds without losing application state.",
      whereUsed: "Google Pay, BMW, Alibaba, eBay Motors, Nubank, and thousands of top App Store and Play Store apps.",
      mainFeatures: [
        "Everything is a Widget: UI is built entirely out of composable widgets (Stateless and Stateful).",
        "Sub-Second Hot Reload: Instantly see code changes reflected on device screens without restarting the app.",
        "Custom 2D Rendering Engine (Impeller/Skia): Direct GPU rendering providing silky-smooth 60/120 FPS animations.",
        "Rich Material & Cupertino Libraries: Pre-built components matching Google Material Design and Apple iOS styles.",
        "Dart Language: Ahead-Of-Time (AOT) compiled to native ARM machine code for blazing performance."
      ],
      importantConcepts: [
        {
          title: "StatelessWidget vs StatefulWidget",
          desc: "StatelessWidget is immutable and never changes after build; StatefulWidget holds dynamic mutable data (State) that triggers re-rendering via setState()."
        },
        {
          title: "Widget Tree & Context",
          desc: "Hierarchical parent-child tree where BuildContext provides access to location within the tree and theme/navigation data."
        },
        {
          title: "State Management (Provider / Bloc / Riverpod)",
          desc: "Architectural patterns for sharing data (like shopping carts or login sessions) across multiple app screens without messy prop drilling."
        },
        {
          title: "Platform Channels",
          desc: "Bridge mechanism allowing Flutter Dart code to communicate with native iOS/Android device hardware (Bluetooth, Camera, GPS)."
        }
      ],
      howItWorks: "Dart code compiles down to native ARM binary machine code. The Flutter engine draws pixels onto a canvas provided by the native operating system view, bypassing OEM widget layers entirely.",
      stepByStep: [
        "Step 1: Download the Flutter SDK and configure Android Studio and VS Code with the Flutter extension.",
        "Step 2: Run `flutter doctor` in your terminal to ensure all SDKs and licenses are valid.",
        "Step 3: Create a new project: `flutter create careercraft_mobile`.",
        "Step 4: Understand basic layout widgets: `Column`, `Row`, `Container`, `Scaffold`, and `ListView`.",
        "Step 5: Connect mobile apps to REST APIs using the `http` package and manage state cleanly."
      ],
      syntax: `// Modern Flutter / Dart Application Example
import 'package:flutter/material.dart';

void main() {
  runApp(const CareerCraftApp());
}

class CareerCraftApp extends StatelessWidget {
  const CareerCraftApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Career Craft Mobile',
      theme: ThemeData(primarySwatch: Colors.indigo),
      home: const StudentCounterScreen(),
    );
  }
}

class StudentCounterScreen extends StatefulWidget {
  const StudentCounterScreen({super.key});

  @override
  State<StudentCounterScreen> createState() => _StudentCounterScreenState();
}

class _StudentCounterScreenState extends State<StudentCounterScreen> {
  int _completedLessons = 0;

  void _incrementProgress() {
    setState(() {
      _completedLessons++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Career Craft Learning Path')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Lessons Completed Today:',
              style: TextStyle(fontSize: 18, color: Colors.blueGrey),
            ),
            const SizedBox(height: 10),
            Text(
              '$_completedLessons',
              style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementProgress,
        tooltip: 'Complete Lesson',
        child: const Icon(Icons.check),
      ),
    );
  }
}`,
      examples: [
        {
          title: "Fetching API Data in Flutter (http package)",
          code: `import 'dart:convert';
import 'package:http/http.dart' as http;

Future<List<String>> fetchTechTracks() async {
  final response = await http.get(Uri.parse('https://api.careercraft.com/tracks'));
  if (response.statusCode == 200) {
    List<dynamic> data = jsonDecode(response.body);
    return data.map((item) => item['title'].toString()).toList();
  } else {
    throw Exception('Failed to load tracks');
  }
}`
        },
        {
          title: "Building a Scrollable ListView with Custom Card",
          code: `ListView.builder(
  itemCount: tracks.length,
  itemBuilder: (context, index) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: ListTile(
        leading: const Icon(Icons.school, color: Colors.blue),
        title: Text(tracks[index]),
        trailing: const Icon(Icons.arrow_forward_ios, size: 16),
        onTap: () => Navigator.push(context, MaterialPageRoute(...)),
      ),
    );
  },
)`
        }
      ],
      practicalExamples: "Building a college student mobile attendance and timetable viewer that caches schedules offline and displays animated class reminders.",
      realWorldUsage: "Google Pay was re-engineered globally using Flutter, reducing the overall codebase by 35% while delivering uniform features to hundreds of millions of Android and iOS users.",
      importantPoints: [
        "Never perform heavy synchronous computations inside the `build()` method; keep widget building light and pure.",
        "Always dispose of controllers (like `TextEditingController` or `AnimationController`) in the `dispose()` lifecycle method to prevent memory leaks.",
        "Use `const` constructors on widgets wherever possible to enable Flutter to skip unnecessary widget re-renders."
      ],
      thingsToLearn: [
        "Dart language basics: sound null safety, async/await, Streams, Futures",
        "Stateless vs Stateful widget architecture and lifecycle methods",
        "Core layout widgets: Scaffold, Column, Row, Stack, Container, ListView",
        "Screen navigation using Navigator 2.0 or GoRouter",
        "State management using Provider or Riverpod",
        "Packaging release APKs and app bundles for the Google Play Store"
      ],
      miniPracticalTasks: [
        "Task 1: Build a Flutter screen with a button that toggles between light mode and dark mode backgrounds.",
        "Task 2: Create a scrollable list of 10 IT technologies using `ListView.builder`.",
        "Task 3: Build a simple mobile tip calculator that takes a bill amount and calculates total with tip."
      ]
    },
    {
      id: "react-native",
      name: "React Native",
      tagline: "Build Truly Native Mobile Apps for iOS and Android Using React and JavaScript",
      beginnerFriendly: "If you already know how to build web pages using React and JavaScript, React Native gives you a magical bridge that turns your React code directly into real native mobile buttons and screens on iPhones and Android phones.",
      whatIsIt: "React Native is an open-source mobile application framework created by Meta. It enables developers to use React and JavaScript alongside native platform capabilities to build apps for iOS and Android.",
      whyUsed: "It leverages existing web developer talent, offers high code reuse between web and mobile (up to 90%), features Fast Refresh, and renders genuine native UI components (not slow webviews).",
      whereUsed: "Instagram, Facebook, Discord (mobile), Pinterest, Shopify, Tesla mobile app, and Coinbase.",
      mainFeatures: [
        "Learn Once, Write Anywhere: Use familiar React component architecture and JSX syntax for mobile.",
        "Native Components: Translates `<View>` into `UIView` on iOS and `ViewGroup` on Android.",
        "Fast Refresh: Near-instant live code reloading while preserving component state.",
        "Expo Ecosystem: Toolchain that simplifies mobile development without requiring Xcode or Android Studio setup.",
        "Bridgeless Architecture (New Architecture): Direct C++ JSI (JavaScript Interface) calls providing near-native speed."
      ],
      importantConcepts: [
        {
          title: "Native Components vs Web Elements",
          desc: "Instead of <div>, <p>, and <span>, React Native uses <View>, <Text>, and <Image> which map directly to OS native controls."
        },
        {
          title: "Flexbox in React Native",
          desc: "Layout is styled using a subset of CSS via StyleSheet.create(). By default, flexDirection is 'column' (unlike web's 'row')."
        },
        {
          title: "React Navigation",
          desc: "The standard routing and navigation library providing Stack Navigator, Bottom Tabs, and Drawer menus."
        },
        {
          title: "Expo vs Bare React Native",
          desc: "Expo provides managed workflows with easy cloud builds; Bare workflow gives direct access to native Android and iOS project folders."
        }
      ],
      howItWorks: "JavaScript code runs in an in-app JavaScript engine (Hermes). In the modern architecture, the JavaScript Interface (JSI) directly invokes native C++ methods that control native iOS and Android UI views.",
      stepByStep: [
        "Step 1: Set up a new project with Expo: `npx create-expo-app careercraft-rn`.",
        "Step 2: Start the development server with `npx expo start`.",
        "Step 3: Scan the QR code using the Expo Go app on your physical iPhone or Android phone.",
        "Step 4: Build screens using `<View>`, `<Text>`, `<TouchableOpacity>`, and `<FlatList>`.",
        "Step 5: Style components using `StyleSheet.create()` and handle touch gestures."
      ],
      syntax: `// React Native Component with Hooks and Native Elements
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

export default function CareerTracksMobile() {
  const [tracks, setTracks] = useState([
    { id: '1', title: 'Web Development', icon: '🌐' },
    { id: '2', title: 'Data Science & AI', icon: '🤖' },
    { id: '3', title: 'Cloud & DevOps', icon: '☁️' },
    { id: '4', title: 'Cyber Security', icon: '🛡️' }
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Career Craft Mobile Tracks</Text>
      <FlatList
        data={tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => alert(\`Opening \${item.title}\`)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
});`,
      examples: [
        {
          title: "React Navigation Bottom Tabs Setup",
          code: `import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Learning" component={LearningScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}`
        },
        {
          title: "AsyncStorage for Storing Offline Tokens",
          code: `import AsyncStorage from '@react-native-async-storage/async-storage';

const saveAuthToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
  } catch (e) {
    console.error("Storage error:", e);
  }
};`
        }
      ],
      practicalExamples: "Creating a student project submission app with camera integration to take photos of paper assignments, upload them to a cloud server, and track grading feedback.",
      realWorldUsage: "Shopify migrated its core merchant management app to React Native, sharing code between iOS and Android while improving feature delivery speed across global developer teams.",
      importantPoints: [
        "Never use standard web HTML tags (`div`, `p`, `span`, `button`) in React Native; always use React Native primitives (`View`, `Text`, `TouchableOpacity`).",
        "Remember that React Native defaults `flexDirection` to `column`, whereas CSS on the web defaults to `row`.",
        "Always use `FlatList` rather than mapping arrays inside a `ScrollView` for long lists to enable off-screen view recycling."
      ],
      thingsToLearn: [
        "Core primitives: View, Text, Image, TextInput, ScrollView, FlatList",
        "Styling with StyleSheet and Flexbox in mobile",
        "React Navigation: Native Stack, Bottom Tabs, Drawer",
        "Offline storage with AsyncStorage",
        "Handling user input and keyboard avoidance (KeyboardAvoidingView)",
        "Building and testing apps using Expo Go"
      ],
      miniPracticalTasks: [
        "Task 1: Create a React Native screen using Expo with a TextInput and a Button that displays an alert greeting.",
        "Task 2: Build a scrollable list of 5 contacts using `FlatList` with clean card styling.",
        "Task 3: Implement an app with 2 screens connected by React Navigation Stack."
      ]
    },
    {
      id: "android-studio",
      name: "Android Studio",
      tagline: "The Official Integrated Development Environment for Google Android Platform",
      beginnerFriendly: "Think of Android Studio as the ultimate digital factory for building Android apps. It contains the code editor, visual drag-and-drop phone screen designer, smartphone simulator (emulator), and APK compiler all in one place.",
      whatIsIt: "Android Studio is the official integrated development environment (IDE) for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.",
      whyUsed: "It provides unmatched tooling for Android developers: layout preview editors, memory and CPU profilers, virtual device emulators, and deep Gradle build integration.",
      whereUsed: "Standard environment used by Android engineering teams at Google, Samsung, Meta, and universities.",
      mainFeatures: [
        "Android Virtual Device (AVD) Emulator: Run and test apps on virtual Pixel phones, tablets, and smartwatches.",
        "Gradle Build System: Flexible dependency management, build variants, and APK/AAB compilation.",
        "Jetpack Compose Preview: Real-time interactive UI previews for modern declarative Kotlin UI.",
        "Android Profiler: Real-time visual graphs measuring app CPU, Memory, Network, and Battery consumption.",
        "Logcat Window: High-speed logging and crash dump analysis utility for connected devices."
      ],
      importantConcepts: [
        {
          title: "Android Virtual Device (AVD)",
          desc: "Hardware-accelerated emulator that simulates Android smartphones, screen resolutions, orientations, and network conditions."
        },
        {
          title: "Gradle Build Scripts (build.gradle)",
          desc: "Groovy or Kotlin DSL scripts managing app dependencies, SDK target versions (minSdk, targetSdk), and build flavors."
        },
        {
          title: "Android Manifest (AndroidManifest.xml)",
          desc: "Root configuration file declaring app package name, activities, permissions (Internet, Camera), and application metadata."
        },
        {
          title: "Logcat & Breakpoint Debugging",
          desc: "Streaming log viewer categorized by Verbose, Debug, Info, Warning, and Error, essential for diagnosing app crashes."
        }
      ],
      howItWorks: "Android Studio compiles Kotlin/Java source code into Dalvik Executable (DEX) bytecode, packages assets and manifest files, and uses Gradle to sign and produce an Android App Bundle (AAB) or APK file.",
      stepByStep: [
        "Step 1: Download and install Android Studio from developer.android.com/studio.",
        "Step 2: Configure the Android SDK Manager with the latest Android API platforms.",
        "Step 3: Open the Device Manager and create an Android Virtual Device (AVD) Pixel phone.",
        "Step 4: Create a new project with 'Empty Activity'.",
        "Step 5: Click the green 'Run' play button to launch the app on the running emulator."
      ],
      syntax: `// Sample AndroidManifest.xml Configuration
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.careercraft.learning">

    <!-- Essential Permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="Career Craft"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.CareerCraft">
        
        <!-- Main Launcher Activity -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>`,
      examples: [
        {
          title: "Gradle Dependency Configuration (build.gradle.kts)",
          code: `dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-gson:2.9.0")
}`
        },
        {
          title: "Filtering Logcat Output for App Crashes",
          code: `package:mine level:error
# Shows fatal crashes and stack traces exclusively for your active app`
        }
      ],
      practicalExamples: "Using Android Studio's Memory Profiler to diagnose and fix a memory leak caused by unclosed bitmap image streams in an Android photo gallery application.",
      realWorldUsage: "Professional Android teams at Samsung, Uber, and Twitter develop, profile, and package their flagship Play Store applications exclusively inside Android Studio.",
      importantPoints: [
        "Ensure Hardware Acceleration (HAXM or Windows Hypervisor Platform) is enabled in BIOS for fast emulator performance.",
        "Always request sensitive runtime permissions (Location, Camera) programmatically in code, not just in AndroidManifest.xml.",
        "Review APK size with Android Studio's 'Analyze APK' tool before releasing to production."
      ],
      thingsToLearn: [
        "Android Studio interface, project structure, and file navigation",
        "Setting up and optimizing Android Virtual Devices (AVD)",
        "Gradle build files: settings.gradle, project-level and module-level build.gradle",
        "Using Logcat, filtering logs, and setting breakpoints",
        "Using the Layout Inspector and Resource Manager (drawables, strings, colors)"
      ],
      miniPracticalTasks: [
        "Task 1: Set up a virtual Pixel phone in Android Studio Device Manager and boot it.",
        "Task 2: Create a basic Android app and run it on your virtual phone.",
        "Task 3: Use Logcat to log a custom message: `Log.d('CareerCraft', 'App initialized')`."
      ]
    },
    {
      id: "kotlin-java",
      name: "Kotlin / Java",
      tagline: "First-Class Native Programming Languages for Android Platform Engineering",
      beginnerFriendly: "Kotlin is Google's modern, sleek programming language for Android. If Java was like writing a formal business letter with lots of polite paperwork, Kotlin is like sending a quick text message that gets straight to the point.",
      whatIsIt: "Kotlin is a modern, statically typed, cross-platform programming language developed by JetBrains and officially designated by Google as the preferred language for Android development. Java is the foundational enterprise language upon which Android was originally built.",
      whyUsed: "Kotlin is 100% interoperable with Java, eliminates the dreaded NullPointerException through built-in null safety, and reduces boilerplate code by 40%.",
      whereUsed: "Over 80% of the top 1,000 Android apps on the Google Play Store are written in Kotlin.",
      mainFeatures: [
        "Built-in Null Safety: Eliminates null pointer exceptions via nullable types (`String?`) and safe calls (`?.`).",
        "Data Classes: Auto-generates equals, hashCode, toString, and copy methods in a single line.",
        "Coroutines: Lightweight, non-blocking asynchronous programming for network calls without thread overhead.",
        "Jetpack Compose: Modern declarative UI toolkit written purely in Kotlin.",
        "Extension Functions: Ability to extend existing classes with new functionality without inheritance."
      ],
      importantConcepts: [
        {
          title: "Null Safety in Kotlin",
          desc: "Types are non-null by default. Nullable types must be explicitly marked with ? (e.g. var name: String? = null) and accessed with ?. or Elvis operator ?:."
        },
        {
          title: "Kotlin Coroutines",
          desc: "Lightweight concurrency primitives that suspend execution without blocking the main UI thread during network or disk I/O."
        },
        {
          title: "Activity Lifecycle",
          desc: "Sequential lifecycle callbacks: onCreate() -> onStart() -> onResume() -> onPause() -> onStop() -> onDestroy()."
        },
        {
          title: "ViewModel & LiveData",
          desc: "Architecture components that preserve screen data during device configuration changes (like screen rotation)."
        }
      ],
      howItWorks: "Kotlin code compiles to Java bytecode (.class) which the Android D8 compiler transforms into Dalvik Executable (DEX) bytecode executed by the Android Runtime (ART) engine.",
      stepByStep: [
        "Step 1: Understand Kotlin variable declarations: `val` (read-only/immutable) vs `var` (mutable).",
        "Step 2: Learn Kotlin functions, default arguments, and lambda expressions.",
        "Step 3: Master null safety operators: safe call (`?.`), Elvis operator (`?:`), and safe cast (`as?`).",
        "Step 4: Understand the Android Activity lifecycle methods (`onCreate`, `onResume`, `onPause`).",
        "Step 5: Write asynchronous network calls using Kotlin Coroutines inside `lifecycleScope.launch`."
      ],
      syntax: `// Kotlin Android Activity Example
package com.careercraft.learning

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

// Data class with automatic getters, setters, toString
data class Student(val id: Int, val name: String, val course: String)

class MainActivity : AppCompatActivity() {

    // Non-nullable lateinit property
    private lateinit var statusText: TextView
    private lateinit var actionButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Bind UI Views
        statusText = findViewById(R.id.statusTextView)
        actionButton = findViewById(R.id.actionButton)

        val currentStudent = Student(101, "Aarav Kumar", "Mobile App Development")

        actionButton.setOnClickListener {
            // Safe call and string template
            statusText.text = "Enrolled: \${currentStudent.name} in \${currentStudent.course}"
            Toast.makeText(this, "Progress Recorded!", Toast.LENGTH_SHORT).show()
        }
    }
}`,
      examples: [
        {
          title: "Kotlin Null Safety and Elvis Operator",
          code: `var studentEmail: String? = null

// Safe call with default fallback using Elvis operator ?:
val displayEmail = studentEmail?.uppercase() ?: "NO EMAIL PROVIDED"
println(displayEmail) // Prints: NO EMAIL PROVIDED`
        },
        {
          title: "Kotlin Coroutine for Asynchronous API Fetch",
          code: `import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

fun loadUserData() {
    lifecycleScope.launch {
        // Run network call on background thread
        val userData = withContext(Dispatchers.IO) {
            apiService.fetchStudentProfile()
        }
        // Switch back to Main thread automatically to update UI
        updateUI(userData)
    }
}`
        }
      ],
      practicalExamples: "Building a native Android student attendance scanner using Kotlin that launches the phone camera, scans a student QR code, validates the student ID, and records attendance in real time.",
      realWorldUsage: "Google, Pinterest, Trello, and Duolingo migrated their flagship Android applications from legacy Java to Kotlin, reporting higher team velocity and dramatically fewer application crashes.",
      importantPoints: [
        "Always prefer `val` (immutable) over `var` (mutable) in Kotlin unless you explicitly require reassignment.",
        "Never perform disk reads or network API requests on the Main thread; Android will immediately throw a `NetworkOnMainThreadException`.",
        "Always store long-lived data in a `ViewModel` so data survives screen orientation rotations without disappearing."
      ],
      thingsToLearn: [
        "Kotlin fundamentals: val vs var, null safety, data classes, smart casts",
        "Extension functions, lambdas, higher order functions",
        "Android Activity and Fragment lifecycles",
        "ViewModel, LiveData, and StateFlow architecture",
        "Kotlin Coroutines (launch, async, Dispatchers.IO, Dispatchers.Main)"
      ],
      miniPracticalTasks: [
        "Task 1: Write a Kotlin function that takes a nullable string and returns its character count or 0 if null.",
        "Task 2: Create a data class `Course` and print its properties using string templates.",
        "Task 3: Build an Android Activity with a button that updates a TextView on click."
      ]
    },
    {
      id: "rest-apis-mobile",
      name: "REST APIs / JSON",
      tagline: "Connecting Mobile Apps to Cloud Backends and Parsing Structured Data",
      beginnerFriendly: "A mobile app without an API is like a smartphone with airplane mode permanently turned on. REST APIs are the invisible bridges that let your phone fetch news, send chat messages, and load student test results from cloud servers.",
      whatIsIt: "REST (Representational State Transfer) APIs and JSON (JavaScript Object Notation) form the standard communications bridge between mobile client devices and cloud backend servers.",
      whyUsed: "Mobile devices have limited storage and processing power. REST APIs allow phones to fetch live data on-demand, process transactions securely on backend servers, and synchronize user data across multiple devices.",
      whereUsed: "Every mobile application with an internet connection (Instagram feeds, Uber rides, WhatsApp chats, weather apps).",
      mainFeatures: [
        "HTTP Network Clients: Retrofit (Android/Kotlin), http/Dio (Flutter), Fetch/Axios (React Native).",
        "JSON Parsing & Serialization: Converting JSON strings into strongly typed mobile objects (Gson/Moshi, json_serializable).",
        "Asynchronous Background Threads: Fetching data without freezing the mobile user interface.",
        "Token-Based Authentication: Storing and passing JWT Bearer tokens in HTTP Authorization headers.",
        "Offline Caching & Error Handling: Handling airplane mode, slow 3G networks, and timeouts gracefully."
      ],
      importantConcepts: [
        {
          title: "JSON Serialization & Deserialization",
          desc: "Serialization converts mobile objects into JSON strings to send to servers; Deserialization parses server JSON back into typed mobile objects."
        },
        {
          title: "Retrofit Framework (Android)",
          desc: "Type-safe HTTP client for Android that turns HTTP API endpoints into clean Kotlin interface methods using annotations (@GET, @POST)."
        },
        {
          title: "JWT Authentication on Mobile",
          desc: "Sending Authorization: Bearer <token> in HTTP headers to access protected user endpoints."
        },
        {
          title: "Network Connectivity Monitoring",
          desc: "Listening for Wi-Fi and Cellular disconnects and notifying users with friendly 'No Internet' snackbars."
        }
      ],
      howItWorks: "The mobile app initiates an HTTP request over cellular/Wi-Fi to the REST endpoint. The backend server returns a JSON payload. The mobile JSON library parses the byte stream into data classes, which update UI state holders and re-render the screen.",
      stepByStep: [
        "Step 1: Declare internet permissions in your mobile configuration.",
        "Step 2: Define your data models matching the server JSON structure.",
        "Step 3: Configure an HTTP client (Retrofit in Android, http in Flutter, Axios in React Native).",
        "Step 4: Execute the request asynchronously on a background I/O thread.",
        "Step 5: Parse the response body and bind the data to a scrollable mobile list view."
      ],
      syntax: `// Retrofit Interface & Model Example in Kotlin
package com.careercraft.api

import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path

// Model matching JSON
data class JobCategoryResponse(
    val id: String,
    val title: String,
    val role: String,
    val technologies: List<String>
)

// Retrofit API Service Interface
interface CareerCraftApiService {
    @GET("api/categories")
    suspend fun getAllCategories(): Response<List<JobCategoryResponse>>

    @GET("api/categories/{id}")
    suspend fun getCategoryById(@Path("id") categoryId: String): Response<JobCategoryResponse>
}`,
      examples: [
        {
          title: "Creating Retrofit Client Instance",
          code: `import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object NetworkClient {
    private const val BASE_URL = "https://careercraft.com/"

    val apiService: CareerCraftApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(CareerCraftApiService::class.java)
    }
}`
        },
        {
          title: "JSON Response Payload Example",
          code: `{
  "status": "success",
  "data": {
    "category": "Mobile App Development",
    "trackCount": 10,
    "active": true
  }
}`
        }
      ],
      practicalExamples: "Building a mobile weather app that queries an open meteorological REST API with the phone's GPS coordinates and displays temperature and forecasts.",
      realWorldUsage: "Instagram fetches photos, reels, comments, and direct messages in real time using optimized REST and GraphQL APIs returning compressed JSON feeds.",
      importantPoints: [
        "Always handle network failure cases (e.g. timeout, no internet connection) with clean user-friendly alerts instead of crashing.",
        "Never hardcode sensitive server API keys inside mobile code; mobile binaries can be decompiled by attackers.",
        "Always implement pagination (`page` and `limit` query parameters) when fetching lists to avoid downloading megabytes of data at once."
      ],
      thingsToLearn: [
        "REST API conventions: GET, POST, PUT, DELETE verbs and HTTP headers",
        "JSON structure: objects, arrays, nested keys, data types",
        "Using Retrofit with Gson/Moshi in Android Kotlin",
        "Using http and Dio packages in Flutter",
        "Using Fetch and Axios in React Native",
        "Handling network connectivity state and error boundaries"
      ],
      miniPracticalTasks: [
        "Task 1: Fetch and display a list of sample posts from `https://jsonplaceholder.typicode.com/posts` in a mobile app.",
        "Task 2: Parse a nested JSON response into a mobile data model and display user name and city.",
        "Task 3: Add an offline banner that appears when mobile device connectivity is lost."
      ]
    },
    {
      id: "sqlite-firebase",
      name: "SQLite / Firebase Basics",
      tagline: "Local Embedded Relational Storage and Real-Time Cloud BaaS for Mobile Apps",
      beginnerFriendly: "SQLite is like a notebook in the student's backpack (always available offline without internet). Firebase is like a shared digital whiteboard in the cloud that updates instantly across everyone's phone in real time.",
      whatIsIt: "SQLite is a lightweight, serverless, self-contained relational database embedded directly inside mobile operating systems. Firebase is Google's comprehensive Backend-as-a-Service (BaaS) providing real-time cloud databases (Firestore), user authentication, and cloud storage.",
      whyUsed: "Mobile users expect apps to work offline in tunnels or on airplanes (SQLite/Room). For real-time chats, notifications, and cloud sync, Firebase provides turnkey backends without writing server code.",
      whereUsed: "Standard storage and backend solution across Android, iOS, and Flutter apps worldwide.",
      mainFeatures: [
        "SQLite / Room Persistence: Android's official SQLite abstraction layer with compile-time SQL verification.",
        "Firebase Firestore: Flexible NoSQL cloud database that automatically synchronizes data in real time.",
        "Firebase Authentication: One-click sign-in with Email, Google, Apple, and Phone SMS.",
        "Firebase Cloud Messaging (FCM): Cross-platform push notifications sent directly to user phones.",
        "Offline Persistence: Firestore automatically caches data locally and synchronizes upon reconnection."
      ],
      importantConcepts: [
        {
          title: "Android Room Database",
          desc: "Object-mapping library over SQLite using @Entity (table), @Dao (queries), and @Database annotations."
        },
        {
          title: "Firestore Real-Time Listeners",
          desc: "Subscribing to cloud document streams so mobile screens automatically update the moment data changes on the server."
        },
        {
          title: "Firebase Security Rules",
          desc: "Server-side rules controlling which authenticated users can read or write specific database paths."
        },
        {
          title: "Push Notifications (FCM)",
          desc: "Sending targeted background notifications to devices even when the app is completely closed."
        }
      ],
      howItWorks: "SQLite reads and writes directly to an ordinary disk file inside the app's sandboxed private storage directory. Firebase maintains a persistent WebSocket connection between the mobile SDK and Google cloud infrastructure for real-time synchronization.",
      stepByStep: [
        "Step 1: For local storage on Android, add Room dependencies to `build.gradle`.",
        "Step 2: Create an `@Entity` class representing table schema.",
        "Step 3: Define a DAO (Data Access Object) with `@Query`, `@Insert`, and `@Delete` methods.",
        "Step 4: For cloud data, create a project in the Firebase Console and download `google-services.json`.",
        "Step 5: Initialize Firebase SDK and read/write cloud documents in real time."
      ],
      syntax: `// Android Room Database DAO & Entity Example in Kotlin
package com.careercraft.data

import androidx.room.Dao
import androidx.room.Entity
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.PrimaryKey
import androidx.room.Query

// 1. Table Entity
@Entity(tableName = "offline_courses")
data class CourseEntity(
    @PrimaryKey val courseId: String,
    val title: String,
    val isCompleted: Boolean
)

// 2. Data Access Object (DAO)
@Dao
interface CourseDao {
    @Query("SELECT * FROM offline_courses")
    suspend fun getAllSavedCourses(): List<CourseEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun saveCourse(course: CourseEntity)

    @Query("UPDATE offline_courses SET isCompleted = :completed WHERE courseId = :id")
    suspend fun markCourseCompleted(id: String, completed: Boolean)
}`,
      examples: [
        {
          title: "Writing Data to Firebase Firestore in Flutter/Dart",
          code: `import 'package:cloud_firestore/cloud_firestore.dart';

Future<void> saveStudentScore(String studentId, int score) async {
  await FirebaseFirestore.instance.collection('student_scores').doc(studentId).set({
    'score': score,
    'timestamp': FieldValue.serverTimestamp(),
    'track': 'Mobile App Development'
  });
}`
        },
        {
          title: "Firebase Authentication Login with Email",
          code: `import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, "student@college.edu", "Password123!")
  .then((userCredential) => console.log("Logged in user:", userCredential.user.uid))
  .catch((error) => console.error("Login failed:", error.message));`
        }
      ],
      practicalExamples: "Designing an offline-first mobile quiz application where test questions are cached in SQLite for offline study, and scores automatically sync to Firebase Firestore whenever internet is restored.",
      realWorldUsage: "The New York Times mobile app uses SQLite to cache news articles so commuters on subway trains can read full stories without cellular signal.",
      importantPoints: [
        "Never run Room/SQLite database operations on the main thread; always execute inside Coroutines or background threads to prevent UI freezes.",
        "Always write strict Firebase Security Rules before deploying; open rules (`allow read, write: if true;`) leave your database vulnerable to public scraping.",
        "Use SQLite/Room migrations carefully when upgrading database schemas to prevent wiping user data during app updates."
      ],
      thingsToLearn: [
        "SQLite architecture and embedded relational databases",
        "Android Room components: Entity, DAO, RoomDatabase, Migrations",
        "Firebase Console project configuration and google-services setup",
        "Firestore document/collection model and real-time listeners",
        "Firebase Authentication and Firebase Cloud Messaging (FCM)"
      ],
      miniPracticalTasks: [
        "Task 1: Set up a Room database entity and DAO on an Android app and insert a test record.",
        "Task 2: Query a local SQLite table and display the results in a mobile ListView.",
        "Task 3: Connect a mobile app to Firebase Authentication and perform an email/password registration."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "Mobile App Development",
    totalQuestions: 15,
    instructions: "Answer the following conceptual, framework, and architectural questions covering Mobile Development technologies (Flutter, React Native, Android Studio, Kotlin/Java, REST APIs, SQLite/Firebase). Document your answers in your study notes.",
    questions: [
      {
        id: 1,
        technology: "Flutter (Dart)",
        question: "Explain the difference between a StatelessWidget and a StatefulWidget in Flutter. What role does the 'setState()' method play in triggering UI updates?"
      },
      {
        id: 2,
        technology: "Flutter (Dart)",
        question: "How does Flutter's rendering architecture differ from traditional cross-platform frameworks? What are the roles of the Dart AOT compiler and the graphic rendering engine (Skia/Impeller)?"
      },
      {
        id: 3,
        technology: "Flutter (Dart)",
        question: "What is 'Hot Reload' in Flutter, and how does it differ from a 'Hot Restart' or a full application rebuild?"
      },
      {
        id: 4,
        technology: "React Native",
        question: "How does React Native render native UI components instead of running inside a web browser view? What is the role of the JavaScript Interface (JSI) in the New Architecture?"
      },
      {
        id: 5,
        technology: "React Native",
        question: "Compare the layout model of React Native with standard web CSS. What is the default 'flexDirection' in React Native, and why?"
      },
      {
        id: 6,
        technology: "Android Studio",
        question: "What is an Android Virtual Device (AVD)? Explain how the Gradle build system manages dependencies, SDK versions, and build variants in Android Studio."
      },
      {
        id: 7,
        technology: "Android Studio",
        question: "What is the purpose of the 'AndroidManifest.xml' file? List four essential components or configurations declared within the manifest."
      },
      {
        id: 8,
        technology: "Kotlin / Java",
        question: "Describe Kotlin's built-in Null Safety system. Explain the difference between 'String' and 'String?', and illustrate the use of the safe call operator (?.) and the Elvis operator (?:)."
      },
      {
        id: 9,
        technology: "Kotlin / Java",
        question: "Diagram the Android Activity Lifecycle (onCreate, onStart, onResume, onPause, onStop, onDestroy). In which lifecycle callback should UI bindings and initializations take place?"
      },
      {
        id: 10,
        technology: "Kotlin / Java",
        question: "What are Kotlin Coroutines? Why are coroutines preferred over traditional threads or AsyncTasks for performing background network operations in Android?"
      },
      {
        id: 11,
        technology: "REST APIs / JSON",
        question: "Why does Android throw a 'NetworkOnMainThreadException' if an HTTP network request is executed on the main UI thread? How do asynchronous background clients solve this?"
      },
      {
        id: 12,
        technology: "REST APIs / JSON",
        question: "What is Retrofit in Android? Explain how Retrofit annotations (such as @GET, @POST, and @Path) simplify HTTP client creation and JSON deserialization."
      },
      {
        id: 13,
        technology: "SQLite / Firebase",
        question: "Explain the architectural components of Android's Room Persistence library (@Entity, @Dao, and @Database). What are the advantages of Room over raw SQLiteOpenHelper?"
      },
      {
        id: 14,
        technology: "SQLite / Firebase",
        question: "Compare local SQLite storage with Google Firebase Cloud Firestore. Under what mobile application scenarios should each be chosen?"
      },
      {
        id: 15,
        technology: "SQLite / Firebase",
        question: "What is Firebase Cloud Messaging (FCM)? Describe how a mobile device registers for push notifications and receives background alert payloads from a server."
      }
    ]
  }
};
