import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
);
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("VisCheck"),
        ),
        body: Center(
          child: Text("Welcome to VisCheck!"),
        ),
      ),
    ),
  );
}