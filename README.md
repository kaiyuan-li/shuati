# Coding Frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Github

#### Update to remote main and sync branch

```
git checkout main
git fetch -p origin  # -p prunes branches that not longer exsit
git merge origin/main
git checkout <dev-branch>
git merge main
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Firestor

### Emulator

To start the emulator with prepopulated data

```
firebase emulators:start --import firebase_emulator_data
# or simply
npm run emulator
```

To make changes to the emulator data and save it at exit

```
firebase emulators:start --export-on-exit firebase_emulator_data
# or simply
npm run emulator:save_on_exit
```

To run local host emulator
```
npm run build && firebase emulators:start
```