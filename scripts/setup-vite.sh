#!/bin/bash
#RUN: ./setup-vite.sh frontend react ts

# Zatrzymanie skryptu w przypadku błędu
set -e

# Pobieranie parametrów
PROJECT_NAME=${1:-my-vite-app}
FRAMEWORK=${2:-vanilla}
VARIANT=${3:-ts}

echo "Tworzenie projektu Vite: $PROJECT_NAME z frameworkiem $FRAMEWORK i wariantem $VARIANT..."
npm create vite@4.1.0 $PROJECT_NAME -- --template $FRAMEWORK-$VARIANT --package-name "$PROJECT_NAME"

# Przechodzenie do katalogu projektu
cd $PROJECT_NAME

echo "Instalowanie zależności..."
npm i

echo "Otwieranie projektu w Visual Studio Code..."
code .
